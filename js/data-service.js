/**
 * ชั้นดึงข้อมูล (Data Service)
 * ดึงจาก Google Apps Script Web API ถ้าตั้งค่าไว้ ไม่งั้น fallback ไปใช้ MOCK_DATA
 */

async function fetchDashboardData() {
  if (CONFIG.SHEETS_API_URL && CONFIG.SHEETS_API_URL.trim() !== '') {
    try {
      const res = await fetch(CONFIG.SHEETS_API_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      return { data: json, isLive: true };
    } catch (err) {
      console.warn('[data-service] Live fetch failed, falling back to mock data:', err);
      return { data: MOCK_DATA, isLive: false, error: err.message };
    }
  }
  return { data: MOCK_DATA, isLive: false };
}

/* ===================== AHU / Zone helpers (เดิม) ===================== */

function mergeAhuData(master, liveStatus) {
  const statusMap = {};
  (liveStatus || []).forEach(function (s) { statusMap[s.AHU_ID] = s; });

  return (master || []).map(function (m) {
    const live = statusMap[m.AHU_ID] || {};
    return Object.assign({}, m, {
      Status: live.Status || 'Unknown',
      Fan_Mode: live.Fan_Mode || '',
      Supply_Air_Temp_C: live.Supply_Air_Temp_C || '',
      Return_Air_Temp_C: live.Return_Air_Temp_C || '',
      SAG_Temp_C: live.SAG_Temp_C || '',
      RH_Percent: live.RH_Percent || '',
      Last_Updated: live.Last_Updated || '',
    });
  });
}

function groupByZone(mergedAhus, zones) {
  const zoneOrder = {};
  const zoneInfo = {};
  (zones || []).forEach(function (z) {
    zoneOrder[z.Zone_ID] = Number(z.Display_Order) || 999;
    zoneInfo[z.Zone_ID] = z;
  });

  const groups = {};
  mergedAhus.forEach(function (ahu) {
    const zid = ahu.Zone || 'ไม่ระบุโซน';
    if (!groups[zid]) groups[zid] = [];
    groups[zid].push(ahu);
  });

  return Object.keys(groups)
    .sort(function (a, b) { return (zoneOrder[a] || 999) - (zoneOrder[b] || 999); })
    .map(function (zid) {
      return {
        zoneId: zid,
        zoneInfo: zoneInfo[zid] || { Zone_Name: zid, Area_Type: 'EXHIBITION', Color_Hex: '#EC4899' },
        ahus: groups[zid],
      };
    });
}

function computeKpis(mergedAhus) {
  const total = mergedAhus.length;
  let running = 0, standby = 0, stopped = 0, alarm = 0;
  mergedAhus.forEach(function (a) {
    if (a.Status === 'Running') running++;
    else if (a.Status === 'Standby') standby++;
    else if (a.Status === 'Alarm') alarm++;
    else stopped++;
  });
  return { total, running, standby, stopped, alarm };
}

/* ===================== Chiller Plant helpers (ใหม่) ===================== */

function sumField(rows, field) {
  return (rows || []).reduce(function (sum, r) {
    const v = Number(r[field]);
    return sum + (isNaN(v) ? 0 : v);
  }, 0);
}

function countStatus(rows, status) {
    return (rows || []).filter(function (r) { return r.Status === status; }).length;
}

function latestSummary(logs) {
  if (!logs || logs.length === 0) return null;
  return logs[logs.length - 1];
}

/** รวมข้อมูลอุปกรณ์ Chiller Plant ทั้งหมดให้พร้อมใช้ render */
function buildChillerPlantModel(data) {
  const chillers = data.Chiller_Machines || [];
  const ctUnits = data.CT_Units || [];
  const pchpUnits = data.PCHP_Units || [];
  const cdpUnits = data.CDP_Units || [];
  const schpUnits = data.SCHP_Units || [];
  const summary = latestSummary(data.Chiller_Plant_Summary);

  const designChillerKw = sumField(chillers, 'Design_kW');
  const designChillerTr = sumField(chillers, 'Design_TR');
  const designCtKw = sumField(ctUnits, 'Design_kW');
  const designPchpKw = sumField(pchpUnits, 'Design_kW');
  const designCdpKw = sumField(cdpUnits, 'Design_kW');
  const designSchpKw = sumField(schpUnits, 'Design_kW');

  const currentChillerKw = summary ? Number(summary.Chiller_kW) :
    chillers.reduce(function (s, c) { return s + (Number(c.Current_TR) || 0) * (Number(c.Current_kW_per_TR) || 0); }, 0);
  const currentPchpKw = summary ? Number(summary.PCHP_kW) : sumField(pchpUnits, 'Current_kW');
  const currentCdpKw = summary ? Number(summary.CDP_kW) : sumField(cdpUnits, 'Current_kW');
  const currentCtKw = summary ? Number(summary.CT_kW) : sumField(ctUnits, 'Current_kW');
  const currentTr = summary ? Number(summary.Total_TR) : sumField(chillers, 'Current_TR');
  const currentTotalKw = summary ? Number(summary.Total_Plant_kW) :
    (designChillerKw + designCtKw + designPchpKw + designCdpKw + designSchpKw);
  const efficiency = summary ? Number(summary.Efficiency_kW_per_TR) :
    (currentTr ? currentTotalKw / currentTr : null);
  const thermalEff = summary ? Number(summary.Cooling_Thermal_Efficiency_Pct) : null;
  const perTr = function (kw) { return currentTr ? kw / currentTr : null; };
  const tempPhase1 = summary && summary.Temp_Phase1_C !== undefined && summary.Temp_Phase1_C !== null && summary.Temp_Phase1_C !== '' ? Number(summary.Temp_Phase1_C) : null;
  const tempPhase2 = summary && summary.Temp_Phase2_C !== undefined && summary.Temp_Phase2_C !== null && summary.Temp_Phase2_C !== '' ? Number(summary.Temp_Phase2_C) : null;
  const outdoorTemp = summary && summary.Outdoor_Air_Temp_C !== undefined && summary.Outdoor_Air_Temp_C !== null && summary.Outdoor_Air_Temp_C !== '' ? Number(summary.Outdoor_Air_Temp_C) : null;

  // SCHP แบ่งตาม Phase พร้อม group ตาม Zone_Label
  function schpByPhase(phase) {
    const units = schpUnits.filter(function (s) { return String(s.Phase) === String(phase); });
    const groups = {};
    units.forEach(function (u) {
      const label = u.Zone_Label || 'ไม่ระบุโซน';
      if (!groups[label]) groups[label] = { label: label, detail: u.Zone_Detail || '', units: [] };
      groups[label].units.push(u);
    });
    return Object.values(groups);
  }

  return {
    chillers: chillers, ctUnits: ctUnits, pchpUnits: pchpUnits, cdpUnits: cdpUnits, schpUnits: schpUnits,
    summary: summary,
    design: {
      chillerKw: designChillerKw, chillerTr: designChillerTr, ctKw: designCtKw,
      pchpKw: designPchpKw, cdpKw: designCdpKw, schpKw: designSchpKw,
    },
    current: {
      totalKw: currentTotalKw, totalTr: currentTr, efficiency: efficiency, thermalEff: thermalEff,
      chillerRunning: countStatus(chillers, 'Running'), chillerTotal: chillers.length,
      chillerKw: currentChillerKw, pchpKw: currentPchpKw, cdpKw: currentCdpKw, ctKw: currentCtKw,
      chillerKwPerTr: perTr(currentChillerKw), pchpKwPerTr: perTr(currentPchpKw),
      cdpKwPerTr: perTr(currentCdpKw), ctKwPerTr: perTr(currentCtKw),
      tempPhase1: tempPhase1, tempPhase2: tempPhase2, outdoorTemp: outdoorTemp,
    },
    schpPhase1: schpByPhase('1'),
    schpPhase2: schpByPhase('2'),
  };
}

/* ===================== Zone ↔ SCHP Phase linkage (ใหม่) ===================== */

// จับคู่แบบมั่นใจเท่านั้น (ชื่อ Hall ตรงกับ Zone_Detail ในเอกสารต้นฉบับ) ส่วนกลุ่มอื่น
// (Zone หน้า/หลัง, Support Area, Sale Area, EH105-106) ยังไม่มีข้อมูลเพียงพอจะจับคู่ AHU
// zone แบบเจาะจงได้ จึงปล่อยว่างไว้ตรงๆ แทนการเดา
const CONFIRMED_SCHP_GROUP_ZONES = {
  'Exhibition Hall': ['EH98', 'EH99', 'EH100-FRONT', 'EH100-BACK', 'BHIRAJ'],
  'COSMOS Convention': ['COSMOS'],
};

function findConfirmedSchpGroup(zoneId) {
  for (const label in CONFIRMED_SCHP_GROUP_ZONES) {
    if (CONFIRMED_SCHP_GROUP_ZONES[label].indexOf(zoneId) !== -1) return label;
  }
  return null;
}

function zonesServedByGroup(label) {
  return CONFIRMED_SCHP_GROUP_ZONES[label] || null;
}

/* ===================== Zone Setpoint (SP) helpers — เก็บใน localStorage ===================== */

function getZoneSetpoint(zoneId, defaultVal) {
  try {
    const v = window.localStorage.getItem('bitec_sp_' + zoneId);
    return v !== null && v !== '' ? Number(v) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function setZoneSetpoint(zoneId, val) {
  try { window.localStorage.setItem('bitec_sp_' + zoneId, String(val)); } catch (e) { /* ignore */ }
}

/** เทียบอุณหภูมิกับ Setpoint คืนคลาสสี: green (<=SP) / orange (+1C) / red (>+1C) */
function tempColorClass(temp, setpoint) {
  if (temp === '' || temp === null || temp === undefined || setpoint === undefined || setpoint === null) return '';
  const diff = Number(temp) - Number(setpoint);
  if (isNaN(diff)) return '';
  if (diff <= 0) return 'temp-green';
  if (diff <= 1) return 'temp-orange';
  return 'temp-red';
}


/* ===================== Area Efficiency helpers (ใหม่) ===================== */
function computeAreaEfficiency(areaRows) {
  const hours = CONFIG.ASSUMED_ANNUAL_OPERATING_HOURS;
  return (areaRows || [])
    .filter(function (r) { return r.Area_Sqm && Number(r.Area_Sqm) > 0; })
    .map(function (r) {
      const area = Number(r.Area_Sqm);
      const designKw = Number(r.Design_kW) || 0;
      const designTr = Number(r.Design_TR) || 0;
      const estAnnualKwh = designKw * hours;
      return Object.assign({}, r, {
        kwh_per_sqm_year: area ? Math.round((estAnnualKwh / area) * 10) / 10 : null,
        tr_per_sqm: area ? Math.round((designTr / area) * 1000) / 1000 : null,
      });
    })
    .sort(function (a, b) { return (b.kwh_per_sqm_year || 0) - (a.kwh_per_sqm_year || 0); });
}
