/**
 * Dashboard renderer
 */

const STATUS_META = {
  Running: { color: 'var(--status-running)', label: 'Running' },
  Standby: { color: 'var(--status-standby)', label: 'Standby' },
  Stopped: { color: 'var(--status-stopped)', label: 'Stopped' },
  Alarm: { color: 'var(--status-alarm)', label: 'Alarm' },
  Unknown: { color: 'var(--status-stopped)', label: 'No data' },
};

function fmt(v, digits) {
  if (v === '' || v === null || v === undefined || isNaN(v)) return '—';
  return Number(v).toFixed(digits === undefined ? 1 : digits);
}

function fmtInt(v) {
  if (v === '' || v === null || v === undefined || isNaN(v)) return '—';
  return Math.round(Number(v)).toLocaleString('en-US');
}

function renderClock() {
  const el = document.getElementById('clock');
  function tick() {
    const now = new Date();
    el.textContent = now.toLocaleString('th-TH', {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }
  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   CHILLER PLANT SECTION
   ============================================================ */

function renderChillerKpis(cp) {
  const el = document.getElementById('cp-kpi-strip');
  el.innerHTML = [
    cpKpiCard('TOTAL PLANT LOAD', fmtInt(cp.current.totalKw) + ' kW', 'neutral'),
    cpKpiCard('TOTAL CAPACITY', fmtInt(cp.current.totalTr) + ' TR', 'neutral'),
    cpKpiCard('PLANT EFFICIENCY', fmt(cp.current.efficiency, 3) + ' kW/TRp', 'accent'),
    cpKpiCard('THERMAL EFFICIENCY', fmt(cp.current.thermalEff, 1) + ' %', 'accent'),
    cpKpiCard('CHILLERS RUNNING', cp.current.chillerRunning + ' / ' + cp.current.chillerTotal, 'running'),
  ].join('');

  renderChillerEfficiencyPanel(cp);
}

function renderChillerEfficiencyPanel(cp) {
  const el = document.getElementById('cp-efficiency-panel');
  if (!el) return;
  const c = cp.current;
  const tempCell = function (label, val) {
    return `<div class="eff-cell">
      <div class="eff-cell__label">${label}</div>
      <div class="eff-cell__value ${val === null ? 'eff-cell__value--pending' : ''}">${val !== null ? fmt(val, 1) + '°C' : 'รอข้อมูล'}</div>
    </div>`;
  };
  const kwTrCell = function (label, val) {
    return `<div class="eff-cell">
      <div class="eff-cell__label">${label}</div>
      <div class="eff-cell__value">${val !== null && val !== undefined && !isNaN(val) ? fmt(val, 3) : '—'} kW/TR</div>
    </div>`;
  };
  el.innerHTML = `
    <h3>CHILLER PLANT EFFICIENCY BREAKDOWN <span class="muted small">(ติดตามประสิทธิภาพแยกรายระบบ)</span></h3>
    <div class="eff-grid">
      ${kwTrCell('Chiller Plant (kW/TRp)', c.efficiency)}
      ${kwTrCell('Chiller Efficiency (kW/TR)', c.chillerKwPerTr)}
      ${kwTrCell('PCHP (kW/TR)', c.pchpKwPerTr)}
      ${kwTrCell('CDP (kW/TR)', c.cdpKwPerTr)}
      ${kwTrCell('CT (kW/TR)', c.ctKwPerTr)}
      ${tempCell('Temp — Phase I', c.tempPhase1)}
      ${tempCell('Temp — Phase II', c.tempPhase2)}
      ${tempCell('Outdoor Air Temp', c.outdoorTemp)}
    </div>
    <p class="muted small">Temp Phase I/II รอทีมไปวัดค่าจริงในพื้นที่แล้วกรอกลงคอลัมน์ <code>Temp_Phase1_C</code> /
      <code>Temp_Phase2_C</code> ในแท็บ Chiller_Plant_Summary — เมื่อมีค่าแล้วจะแสดงผลอัตโนมัติ</p>
  `;
}

function cpKpiCard(label, value, cls) {
  return `<div class="kpi kpi--${cls}">
    <div class="kpi__value kpi__value--sm">${value}</div>
    <div class="kpi__label">${label}</div>
  </div>`;
}

/* ---------- SVG P&ID-style piping diagram ---------- */

const PIPE_COLOR = { primary: '#F59E0B', secondary: '#38BDF8', condenser: '#34D399' };

function setupPidTooltip(wrapId, tipId) {
  const wrap = document.getElementById(wrapId || 'pid-wrap');
  const tip = document.getElementById(tipId || 'pid-tooltip');
  if (!wrap || !tip) return;

  wrap.addEventListener('mousemove', function (e) {
    const unitEl = e.target.closest('.pid-unit');
    if (!unitEl) { tip.style.display = 'none'; return; }
    const data = JSON.parse(unitEl.getAttribute('data-tip').replace(/&apos;/g, "'"));
    const meta = STATUS_META[data.status] || STATUS_META.Unknown;

    if (data.table) {
      tip.innerHTML = `
        <div class="pid-tooltip__title"><span class="dot" style="background:${meta.color}"></span>${data.title}</div>
        <div class="pid-tooltip__table-wrap">
          <table class="pid-tooltip__full-table">
            <thead><tr>${data.table.headers.map(function (h) { return `<th>${h}</th>`; }).join('')}</tr></thead>
            <tbody>
              ${data.table.rows.map(function (row) { return `<tr>${row.map(function (c) { return `<td>${c}</td>`; }).join('')}</tr>`; }).join('')}
            </tbody>
          </table>
        </div>`;
    } else {
      tip.innerHTML = `
        <div class="pid-tooltip__title"><span class="dot" style="background:${meta.color}"></span>${data.title}</div>
        <table class="pid-tooltip__table">
          ${data.rows.map(function (r) { return `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`; }).join('')}
        </table>`;
    }
    tip.style.display = 'block';
    const wrapRect = wrap.getBoundingClientRect();
    let left = e.clientX - wrapRect.left + 14;
    let top = e.clientY - wrapRect.top + 14;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  });

  wrap.addEventListener('mouseleave', function () { tip.style.display = 'none'; });
}

/* ============================================================
   PLANT FLOW DIAGRAM (block/logical diagram — ตามผังที่แนบมา)
   ============================================================ */

// zone group -> AHU zone IDs จริง ตามผังที่ผู้ใช้ยืนยัน
const FLOW_ZONE_GROUPS = {
  phase2: [
    { label: 'Welcome Hall', zones: [] },
    { label: 'COSMOS Convention', zones: ['COSMOS'] },
    { label: 'EH98-100 Exhibition', zones: ['EH98', 'EH99', 'EH100-FRONT', 'EH100-BACK'] },
    { label: 'BHIRAJBURI Convention', zones: ['BHIRAJ'] },
  ],
  phase1: [
    { label: 'HQF2', zones: ['HQF2'] },
    { label: 'EH101-104', zones: ['EH101', 'EH102', 'EH103', 'EH104'] },
    { label: 'GH201-203', zones: ['GH201', 'GH202', 'GH203'] },
    { label: 'BEAT', zones: ['BEAT'], next: 'SAMA' },
    { label: 'LIVE', zones: ['LIVE'] },
  ],
  extra: { label: 'SAMA Garden', zones: ['SAMA-GARDEN'] },
};

function zoneGroupStats(zoneIds, mergedAhus) {
  const ahus = mergedAhus.filter(function (a) { return zoneIds.indexOf(a.Zone) !== -1; });
  const total = ahus.length;
  const running = ahus.filter(function (a) { return a.Status === 'Running'; }).length;
  return { total: total, running: running };
}

function flowTip(title, statusKey, rows) {
  const payload = { title: title, status: statusKey || 'Running', rows: rows };
  return `data-tip='${JSON.stringify(payload).replace(/'/g, '&apos;')}'`;
}

/** สร้าง tooltip แบบตารางเต็ม แสดงข้อมูลจริงทุกแถวตามคอลัมน์ในไฟล์ฐานข้อมูล (BITEC_AHU_Chiller_Database_re01) */
function flowTableTip(title, units, columns) {
  const headers = columns.map(function (c) { return c.label; });
  const rows = units.map(function (u) {
    return columns.map(function (c) {
      const v = u[c.key];
      if (v === undefined || v === null || v === '') return '—';
      return c.digits !== undefined && !isNaN(v) ? fmt(v, c.digits) : v;
    });
  });
  const anyRunning = units.some(function (u) { return u.Status === 'Running'; });
  const payload = { title: title, status: anyRunning ? 'Running' : 'Stopped', table: { headers: headers, rows: rows } };
  return `data-tip='${JSON.stringify(payload).replace(/'/g, '&apos;')}'`;
}

const CHILLER_COLUMNS = [
  { key: 'Chiller_ID', label: 'Chiller_ID' }, { key: 'Plant', label: 'Plant' }, { key: 'Phase', label: 'Phase' },
  { key: 'Design_TR', label: 'Design_TR' }, { key: 'Design_kW', label: 'Design_kW' }, { key: 'Status', label: 'Status' },
  { key: 'Current_kW_per_TR', label: 'Current_kW_per_TR', digits: 3 }, { key: 'Current_TR', label: 'Current_TR', digits: 0 },
  { key: 'Chiller_Current_Percent', label: 'Chiller_Current_Percent', digits: 1 },
];
const CT_COLUMNS = [
  { key: 'CT_ID', label: 'CT_ID' }, { key: 'Plant', label: 'Plant' }, { key: 'Phase', label: 'Phase' },
  { key: 'Design_kW', label: 'Design_kW' }, { key: 'Status', label: 'Status' }, { key: 'Current_kW', label: 'Current_kW', digits: 1 },
];
const PCHP_COLUMNS = [
  { key: 'PCHP_ID', label: 'PCHP_ID' }, { key: 'Plant', label: 'Plant' }, { key: 'Phase', label: 'Phase' },
  { key: 'Design_kW', label: 'Design_kW' }, { key: 'Status', label: 'Status' }, { key: 'Current_kW', label: 'Current_kW', digits: 1 },
];
const CDP_COLUMNS = [
  { key: 'CDP_ID', label: 'CDP_ID' }, { key: 'Plant', label: 'Plant' }, { key: 'Phase', label: 'Phase' },
  { key: 'Design_kW', label: 'Design_kW' }, { key: 'Status', label: 'Status' }, { key: 'Current_kW', label: 'Current_kW', digits: 1 },
];
const SCHP_COLUMNS = [
  { key: 'SCHP_ID', label: 'SCHP_ID' }, { key: 'Phase', label: 'Phase' }, { key: 'Zone_Label', label: 'Zone_Label' },
  { key: 'Design_kW', label: 'Design_kW' }, { key: 'Status', label: 'Status' }, { key: 'Current_kW', label: 'Current_kW', digits: 1 },
];

/** กล่องผัง — รองรับ sub-label หลายบรรทัด (แก้บั๊กเดิมที่ข้อความลอยไปมุมบนซ้าย) */
function flowBox(x, y, w, h, title, sub, color, tipAttrs, opts) {
  opts = opts || {};
  const rx = opts.rx !== undefined ? opts.rx : 7;
  const cx = x + w / 2;
  const subLines = sub ? sub.split('\n') : [];
  const titleY = subLines.length ? y + h / 2 - 6 : y + h / 2 + 4;
  const subY = titleY + 15;
  const subTspans = subLines.map(function (line, i) {
    return `<tspan x="${cx}" dy="${i === 0 ? 0 : 12}">${line}</tspan>`;
  }).join('');
  return `
    <g class="pid-unit" ${tipAttrs || ''}>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="#0D1728" stroke="${color}" stroke-width="${opts.thick ? 2.4 : 1.5}"/>
      <text x="${cx}" y="${titleY}" text-anchor="middle" class="svg-flow-title">${title}</text>
      ${subLines.length ? `<text x="${cx}" y="${subY}" text-anchor="middle" class="svg-flow-sub">${subTspans}</text>` : ''}
    </g>`;
}

function flowArrow(x1, y1, x2, y2, color) {
  return `<polyline points="${x1},${y1} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" marker-end="url(#arrowFlow-${flowArrowKey(color)})"/>`;
}

function flowArrowKey(color) {
  return color.replace('#', '');
}

function flowLine(x1, y1, x2, y2, color) {
  return `<polyline points="${x1},${y1} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`;
}

/** เส้นท่อแบบ manifold: จากกล่องต้นทาง 1 จุด กระจายไปหลายกล่องปลายทางผ่านเส้นหลัก (trunk) เดียว */
function manifold(fromX, fromY, trunkX, targets, color) {
  const ys = targets.map(function (t) { return t.y; }).concat([fromY]);
  const minY = Math.min.apply(null, ys);
  const maxY = Math.max.apply(null, ys);
  let out = flowLine(fromX, fromY, trunkX, fromY, color);
  out += flowLine(trunkX, minY, trunkX, maxY, color);
  targets.forEach(function (t) {
    out += flowArrow(trunkX, t.y, t.toX, t.y, color);
  });
  return out;
}

function renderPlantFlowDiagram(cp, mergedAhus) {
  const el = document.getElementById('plant-flow-panel');
  if (!el) return;
  const ACCENT = '#38BDF8';
  const P = PIPE_COLOR;

  const chwsTemp = cp.summary ? fmt(cp.summary.CHWS_Temp_C) : '—';
  const chwrTemp = cp.summary ? fmt(cp.summary.CHWR_Temp_C) : '—';
  const ctKw = sumField(cp.ctUnits, 'Current_kW');
  const cdpKw = sumField(cp.cdpUnits, 'Current_kW');
  const pchpKw = sumField(cp.pchpUnits, 'Current_kW');
  const chillerKw = cp.summary ? Number(cp.summary.Chiller_kW) : 0;
  const schp1Units = cp.schpPhase1.reduce(function (a, g) { return a.concat(g.units); }, []);
  const schp2Units = cp.schpPhase2.reduce(function (a, g) { return a.concat(g.units); }, []);
  const schp1Kw = sumField(schp1Units, 'Current_kW');
  const schp2Kw = sumField(schp2Units, 'Current_kW');

  // ---- คอลัมน์กล่องโซนปลายทาง (ขวาสุด) ----
  const ZONE_X = 800, ZONE_W = 190, ZONE_H = 42, ZONE_GAP = 54;

  function zoneBoxes(groups, yStart) {
    return groups.map(function (g, i) {
      const y = yStart + i * ZONE_GAP;
      const hasZones = g.zones && g.zones.length > 0;
      const stats = zoneGroupStats(g.zones, mergedAhus);
      const subLabel = hasZones ? `${stats.running}/${stats.total} AHU running` : 'รอข้อมูล AHU';
      const tip = flowTip(g.label, hasZones ? (stats.running > 0 ? 'Running' : 'Stopped') : 'Unknown',
        hasZones ? [['AHU ทั้งหมด', stats.total], ['Running', stats.running], ['Zone', g.zones.join(', ')]]
                 : [['สถานะ', 'ยังไม่มี AHU ผูกกับโซนนี้ในฐานข้อมูล']]);
      return {
        svg: flowBox(ZONE_X, y, ZONE_W, ZONE_H, g.label, subLabel, ACCENT, tip),
        y: y + ZONE_H / 2, top: y, h: ZONE_H, label: g.label, next: g.next,
      };
    });
  }

  const p2Boxes = zoneBoxes(FLOW_ZONE_GROUPS.phase2, 50);
  const p1Boxes = zoneBoxes(FLOW_ZONE_GROUPS.phase1, 290);
  const samaStats = zoneGroupStats(FLOW_ZONE_GROUPS.extra.zones, mergedAhus);
  const samaTip = flowTip(FLOW_ZONE_GROUPS.extra.label, samaStats.running > 0 ? 'Running' : 'Stopped',
    [['AHU ทั้งหมด', samaStats.total], ['Running', samaStats.running]]);
  const beatBox = p1Boxes.filter(function (b) { return b.label === 'BEAT'; })[0];

  // SAMA Garden: วางต่อแถวเดียวกับ BEAT (ไม่ใช่แยกแถวทแยงแบบเดิม)
  const SAMA_X = ZONE_X + ZONE_W + 40, SAMA_W = 140;
  const samaBox = { x: SAMA_X, y: beatBox ? beatBox.top : 400, w: SAMA_W, h: ZONE_H };
  samaBox.cy = samaBox.y + samaBox.h / 2;

  // ---- กล่อง SCHP Phase I/II: สูงพอดีกับช่วงของกล่องโซนที่มันเลี้ยง ----
  const SCHP_X = 560, SCHP_W = 190;
  function schpSpanBox(boxes) {
    const top = boxes[0].top - 16;
    const bottom = boxes[boxes.length - 1].top + boxes[boxes.length - 1].h + 16;
    return { y: top, h: bottom - top, cy: (top + bottom) / 2 };
  }
  const schp2Span = schpSpanBox(p2Boxes);
  const schp1Span = schpSpanBox(p1Boxes);

  // ---- คอลัมน์ฝั่งซ้าย: Chiller แยก 2 ระบบ (Condenser บน / Evaporator ล่าง — น้ำไม่ปนกัน) ----
  const CH_X = 90, CH_W = 220;
  const CH_MIDX = CH_X + CH_W / 2;

  const COND_Y = 178, COND_H = 46, COND_MIDY = COND_Y + COND_H / 2, COND_BOTTOM = COND_Y + COND_H;
  const EVAP_Y = 238, EVAP_H = 46, EVAP_MIDY = EVAP_Y + EVAP_H / 2, EVAP_BOTTOM = EVAP_Y + EVAP_H;

  const PCHP_W = 150, PCHP_H = 44;
  const PCHP_X = CH_MIDX - PCHP_W / 2, PCHP_Y = 330;

  const SUP_W = 150, SUP_H = 54;
  const SUP_X = 380, SUP_Y = EVAP_MIDY - SUP_H / 2;

  const RET_W = 150, RET_H = 54;
  const RET_X = CH_MIDX - RET_W / 2, RET_Y = 450;

  const svg = `
  <svg viewBox="0 0 1320 700" class="pid-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowFlow-${flowArrowKey(P.condenser)}" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${P.condenser}"/></marker>
      <marker id="arrowFlow-${flowArrowKey(P.primary)}" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${P.primary}"/></marker>
      <marker id="arrowFlow-${flowArrowKey(ACCENT)}" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${ACCENT}"/></marker>
    </defs>

    <!-- ===== Condenser side (Cooling Tower loop) ===== -->
    ${flowBox(40, 40, 150, 50, 'Cooling System', `${fmtInt(ctKw)} kW`, P.condenser, flowTableTip('Cooling System — CT_Units', cp.ctUnits, CT_COLUMNS))}
    ${flowBox(280, 118, 120, 44, 'CDP Pump', `${fmtInt(cdpKw)} kW`, P.condenser, flowTableTip('CDP Pump — CDP_Units', cp.cdpUnits, CDP_COLUMNS))}

    <!-- ===== Chiller: Condenser side (บน) และ Evaporator side (ล่าง) — คนละระบบ น้ำไม่ปนกัน ===== -->
    ${flowBox(CH_X, COND_Y, CH_W, COND_H, 'Chiller — Condenser Side', 'น้ำหล่อเย็น (Condenser Water)', P.condenser, flowTableTip('Chiller — Condenser Side (Chiller_Machines)', cp.chillers, CHILLER_COLUMNS), { thick: true })}
    ${flowBox(CH_X, EVAP_Y, CH_W, EVAP_H, 'Chiller — Evaporator Side', 'น้ำเย็น (Chilled Water)', ACCENT, flowTableTip('Chiller — Evaporator Side (Chiller_Machines)', cp.chillers, CHILLER_COLUMNS), { thick: true })}
    <line x1="${CH_MIDX - 30}" y1="${(COND_BOTTOM + EVAP_Y) / 2}" x2="${CH_MIDX + 30}" y2="${(COND_BOTTOM + EVAP_Y) / 2}" stroke="#7E93B3" stroke-width="1.2" stroke-dasharray="2,3"/>

    <!-- ===== Primary side ===== -->
    ${flowBox(PCHP_X, PCHP_Y, PCHP_W, PCHP_H, 'PCHP', `${fmtInt(pchpKw)} kW`, P.primary, flowTableTip('PCHP — PCHP_Units', cp.pchpUnits, PCHP_COLUMNS))}

    <!-- ===== Headers ===== -->
    ${flowBox(SUP_X, SUP_Y, SUP_W, SUP_H, 'CH Supply Header', `CHWS ${chwsTemp}°C`, ACCENT, flowTip('CH Supply Header', 'Running', [['CHWS Temp', chwsTemp + '°C'], ['CHWR Temp', chwrTemp + '°C']]), { thick: true })}
    ${flowBox(RET_X, RET_Y, RET_W, RET_H, 'CH Return Header', `CHWR ${chwrTemp}°C`, P.primary, flowTip('CH Return Header', 'Running', [['CHWR Temp', chwrTemp + '°C']]), { thick: true })}

    <!-- ===== SCHP Phase boxes (สูงตามช่วงโซนที่เลี้ยง) ===== -->
    ${flowBox(SCHP_X, schp2Span.y, SCHP_W, schp2Span.h, 'SCHP Phase II', `Secondary Pump\n${fmtInt(schp2Kw)} kW`, P.secondary, flowTableTip('SCHP Phase II — SCHP_Units', schp2Units, SCHP_COLUMNS), { thick: true })}
    ${flowBox(SCHP_X, schp1Span.y, SCHP_W, schp1Span.h, 'SCHP Phase I', `Secondary Pump\n${fmtInt(schp1Kw)} kW`, P.secondary, flowTableTip('SCHP Phase I — SCHP_Units', schp1Units, SCHP_COLUMNS), { thick: true })}

    <!-- ===== Zone boxes ===== -->
    ${p2Boxes.map(function (b) { return b.svg; }).join('')}
    ${p1Boxes.map(function (b) { return b.svg; }).join('')}
    ${flowBox(samaBox.x, samaBox.y, samaBox.w, samaBox.h, 'SAMA Garden', `${samaStats.running}/${samaStats.total} AHU running`, ACCENT, samaTip)}

    <!-- ================= Connectors (แนวตั้ง/นอนตรงๆ ไม่ตัดกันเป็นเส้นทแยง) ================= -->
    <!-- Cooling System <-> CDP Pump <-> Chiller Condenser Side (วงจรน้ำหล่อเย็น แยกจากวงจรน้ำเย็นโดยสิ้นเชิง) -->
    ${flowLine(20, 65, 20, COND_MIDY, P.condenser)}
    ${flowLine(20, 65, 40, 65, P.condenser)}
    ${flowArrow(20, COND_MIDY, CH_X, COND_MIDY, P.condenser)}
    <!-- Cooling System -> CDP Pump (เส้นตรงมุมเดียว สะอาดกว่าเดิม) -->
    ${flowLine(190, 65, 340, 65, P.condenser)}
    ${flowArrow(340, 65, 340, 118, P.condenser)}
    ${flowLine(340, 162, 340, COND_MIDY, P.condenser)}
    ${flowArrow(340, COND_MIDY, CH_X + CH_W, COND_MIDY, P.condenser)}

    <!-- PCHP <-> Chiller Evaporator Side (วงจรน้ำเย็น) -->
    ${flowArrow(CH_MIDX, PCHP_Y, CH_MIDX, EVAP_BOTTOM, P.primary)}

    <!-- Chiller Evaporator Side <-> CH Supply Header (แนวนอนตรง) -->
    ${flowArrow(CH_X + CH_W, EVAP_MIDY, SUP_X, EVAP_MIDY, ACCENT)}

    <!-- CH Return Header -> PCHP (แนวตั้งตรงกลาง) -->
    ${flowArrow(CH_MIDX, RET_Y, CH_MIDX, PCHP_Y + PCHP_H, P.primary)}

    <!-- CH Supply Header -> SCHP Phase I/II -->
    ${manifold(SUP_X + SUP_W, EVAP_MIDY, (SUP_X + SUP_W + SCHP_X) / 2, [{ y: schp2Span.cy, toX: SCHP_X }, { y: schp1Span.cy, toX: SCHP_X }], ACCENT)}

    <!-- SCHP Phase II/I -> Zones -->
    ${manifold(SCHP_X + SCHP_W, schp2Span.cy, (SCHP_X + SCHP_W + ZONE_X) / 2, p2Boxes.map(function (b) { return { y: b.y, toX: ZONE_X }; }), P.secondary)}
    ${manifold(SCHP_X + SCHP_W, schp1Span.cy, (SCHP_X + SCHP_W + ZONE_X) / 2, p1Boxes.map(function (b) { return { y: b.y, toX: ZONE_X }; }), P.secondary)}

    <!-- BEAT -> SAMA Garden (แนวนอนตรง อยู่แถวเดียวกัน) -->
    ${beatBox ? flowArrow(ZONE_X + ZONE_W, beatBox.y, samaBox.x, samaBox.cy, ACCENT) : ''}

    <!-- Return bus: ทุกโซน -> CH Return Header (ผ่าน SAMA สำหรับแถว BEAT) -->
    ${(function () {
      const BUS_X = 1270, BUS_BOTTOM_Y = 660, HEADER_ENTRY_X = CH_MIDX, HEADER_BOTTOM_Y = RET_Y + RET_H;
      const zones = p1Boxes.concat(p2Boxes);
      const ys = zones.map(function (b) { return b.y; }).concat([samaBox.cy]);
      const minY = Math.min.apply(null, ys);
      let out = zones.map(function (b) {
        if (b.label === 'BEAT') {
          return flowArrow(samaBox.x + samaBox.w, samaBox.cy, BUS_X, samaBox.cy, P.primary);
        }
        return flowArrow(ZONE_X + ZONE_W, b.y, BUS_X, b.y, P.primary);
      }).join('');
      out += flowLine(BUS_X, minY, BUS_X, BUS_BOTTOM_Y, P.primary);
      out += flowLine(BUS_X, BUS_BOTTOM_Y, HEADER_ENTRY_X, BUS_BOTTOM_Y, P.primary);
      out += flowArrow(HEADER_ENTRY_X, BUS_BOTTOM_Y, HEADER_ENTRY_X, HEADER_BOTTOM_Y, P.primary);
      return out;
    })()}
  </svg>`;

  el.innerHTML = `
    <h3>CHILLER PLANT FLOW DIAGRAM <span class="muted small">(ผังตรรกะการจ่ายน้ำเย็นแยก Phase I / Phase II ตามผังจริง — ชี้เมาส์ที่กล่องเพื่อดูค่าจริง)</span></h3>
    <div class="pid-wrap" id="flow-wrap">${svg}<div class="pid-tooltip" id="flow-tooltip"></div></div>
    <div class="pid-legend">
      <span><span class="pid-swatch" style="background:${P.condenser}"></span>Condenser Loop</span>
      <span><span class="pid-swatch" style="background:${P.primary}"></span>Primary / Return Loop</span>
      <span><span class="pid-swatch" style="background:${ACCENT}"></span>Chilled Water Supply → Zones</span>
    </div>
  `;

  setupPidTooltip('flow-wrap', 'flow-tooltip');
}



/* ============================================================
   AHU ZONE SECTION (เดิม ย้ายลงมาด้านล่าง)
   ============================================================ */

function renderKpis(kpis) {
  const el = document.getElementById('kpi-strip');
  el.innerHTML = [
    kpiCard('TOTAL AHUs', kpis.total, 'neutral'),
    kpiCard('RUNNING', kpis.running, 'running'),
    kpiCard('STANDBY', kpis.standby, 'standby'),
    kpiCard('STOPPED', kpis.stopped, 'stopped'),
    kpiCard('ALARM', kpis.alarm, 'alarm'),
  ].join('');
}

function kpiCard(label, value, cls) {
  return `<div class="kpi kpi--${cls}">
    <div class="kpi__value">${value}</div>
    <div class="kpi__label">${label}</div>
  </div>`;
}

function renderLegend() {
  const el = document.getElementById('legend-panel');
  el.innerHTML = `
    <h3>LEGEND</h3>
    <div class="legend-item"><span class="dot" style="background:var(--status-running)"></span>Running</div>
    <div class="legend-item"><span class="dot" style="background:var(--status-standby)"></span>Standby</div>
    <div class="legend-item"><span class="dot" style="background:var(--status-stopped)"></span>Stopped</div>
    <div class="legend-item"><span class="dot" style="background:var(--status-alarm)"></span>Alarm</div>
    <hr/>
    <div class="legend-item"><span class="swatch" style="background:var(--area-exhibition)"></span>Exhibition Hall</div>
    <div class="legend-item"><span class="swatch" style="background:var(--area-convention)"></span>Convention Hall</div>
  `;
}

function renderZoneControl() {
  const el = document.getElementById('zone-control-panel');
  el.innerHTML = `
    <h3>ZONE CONTROL</h3>
    <p class="muted small">แดชบอร์ดนี้เป็นโหมดแสดงผลอย่างเดียว (read-only) ปุ่มด้านล่างสำหรับออกแบบ UI เท่านั้น
      หากต้องการสั่งเปิด/ปิดจริง ต้องเชื่อมต่อกับระบบ BMS ของอาคารเพิ่มเติม</p>
    <div class="zc-grid">
      <button disabled class="zc-btn zc-btn--on">ALL ON</button>
      <button disabled class="zc-btn zc-btn--off">ALL OFF</button>
      <button disabled class="zc-btn zc-btn--common">PHASE 1 ON</button>
      <button disabled class="zc-btn zc-btn--common-off">PHASE 1 OFF</button>
      <button disabled class="zc-btn zc-btn--event">PHASE 2 ON</button>
      <button disabled class="zc-btn zc-btn--event-off">PHASE 2 OFF</button>
    </div>
  `;
}

function renderQuickView(kpis) {
  const el = document.getElementById('quickview-panel');
  const total = Math.max(kpis.total, 1);
  const runningPct = Math.round((kpis.running / total) * 100);
  const standbyPct = Math.round((kpis.standby / total) * 100);
  const stoppedPct = 100 - runningPct - standbyPct;

  el.innerHTML = `
    <h3>QUICK VIEW</h3>
    <div class="donut" style="background: conic-gradient(
      var(--status-running) 0% ${runningPct}%,
      var(--status-standby) ${runningPct}% ${runningPct + standbyPct}%,
      var(--status-stopped) ${runningPct + standbyPct}% 100%)">
      <div class="donut__hole">${kpis.total}<span>AHUs</span></div>
    </div>
    <div class="legend-item"><span class="dot" style="background:var(--status-running)"></span>${kpis.running} Running</div>
    <div class="legend-item"><span class="dot" style="background:var(--status-standby)"></span>${kpis.standby} Standby</div>
    <div class="legend-item"><span class="dot" style="background:var(--status-stopped)"></span>${kpis.stopped} Stopped</div>
  `;
}

function renderAlarms(alarms) {
  const el = document.getElementById('alarms-panel');
  const active = (alarms || []).filter(function (a) { return a.Status === 'Active'; });

  if (active.length === 0) {
    el.innerHTML = `<h3>SYSTEM ALARMS</h3><p class="muted small">ไม่มี Alarm ที่ Active อยู่ในขณะนี้</p>`;
    return;
  }

  el.innerHTML = `
    <h3>SYSTEM ALARMS <span class="badge badge--alarm">${active.length}</span></h3>
    ${active.map(function (a) {
      const sevClass = a.Severity === 'Critical' ? 'alarm-item--critical' : 'alarm-item--warning';
      return `<div class="alarm-item ${sevClass}">
        <div class="alarm-item__top"><strong>${a.AHU_ID}</strong><span>${a.Timestamp}</span></div>
        <div class="alarm-item__msg">${a.Alarm_Type}</div>
      </div>`;
    }).join('')}
  `;
}

function renderZonesGrid(grouped) {
  const el = document.getElementById('zones-grid');
  el.innerHTML = grouped.map(function (g) {
    const areaType = g.zoneInfo.Area_Type || 'EXHIBITION';
    const colorVar = areaType === 'CONVENTION' ? 'var(--area-convention)' : 'var(--area-exhibition)';
    const schpGroup = findConfirmedSchpGroup(g.zoneId);
    const setpoint = getZoneSetpoint(g.zoneId, Number(g.zoneInfo.Setpoint_C) || 24);

    const running = g.ahus.filter(function (a) { return a.Status === 'Running'; });
    const alarm = g.ahus.filter(function (a) { return a.Status === 'Alarm'; });
    const standbyCount = g.ahus.filter(function (a) { return a.Status === 'Standby'; }).length;
    const stoppedCount = g.ahus.filter(function (a) { return a.Status === 'Unknown' || a.Status === 'Stopped'; }).length;

    return `
      <div class="zone-col" style="--zone-color:${colorVar}">
        <div class="zone-col__header">
          <div class="zone-col__id">${g.zoneId}</div>
          <div class="zone-col__name">${g.zoneInfo.Zone_Name || ''} <span class="tag-mini">P${g.zoneInfo.Phase || '?'}</span></div>
          <div class="zone-col__schp">${schpGroup
            ? `SCHP: ${schpGroup}`
            : `<span class="muted">SCHP: Phase ${g.zoneInfo.Phase || '?'} (รอตรวจสอบปั๊มย่อย)</span>`}</div>
          <button class="sp-btn" onclick="editZoneSetpoint('${g.zoneId}', ${setpoint})">SP ${fmt(setpoint, 1)}°C ✎</button>
        </div>
        <div class="zone-col__body">
          ${running.length === 0 && alarm.length === 0 ? '<p class="muted small" style="padding:8px 4px;">ไม่มีเครื่องที่ Running</p>' : ''}
          <div class="ahu-chip-grid">
            ${alarm.map(function (a) { return renderAhuChip(a, setpoint); }).join('')}
            ${running.map(function (a) { return renderAhuChip(a, setpoint); }).join('')}
          </div>
          <div class="zone-col__idle-summary">
            <span class="idle-count idle-count--standby">Standby: ${standbyCount}</span>
            <span class="idle-count idle-count--stopped">Stopped: ${stoppedCount}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function shortAhuId(id) {
  const parts = String(id || '').split('-');
  return parts[parts.length - 1];
}

function renderAhuChip(a, setpoint) {
  const meta = STATUS_META[a.Status] || STATUS_META.Unknown;
  const saColor = tempColorClass(a.Supply_Air_Temp_C, setpoint);
  const raColor = tempColorClass(a.Return_Air_Temp_C, setpoint);
  return `
    <div class="ahu-chip">
      <span class="dot" style="background:${meta.color}"></span>
      <span class="ahu-chip__id">${shortAhuId(a.AHU_ID)}</span>
      <div class="ahu-chip__detail">
        <div class="ahu-chip__detail-title">${a.AHU_ID}</div>
        <div class="ahu-chip__detail-row"><span>Status</span><strong>${meta.label}${a.Fan_Mode ? ' · ' + a.Fan_Mode : ''}</strong></div>
        ${a.Supply_Air_Temp_C ? `<div class="ahu-chip__detail-row"><span>SA</span><strong class="${saColor}">${fmt(a.Supply_Air_Temp_C)}°C</strong></div>` : ''}
        ${a.Return_Air_Temp_C ? `<div class="ahu-chip__detail-row"><span>RA</span><strong class="${raColor}">${fmt(a.Return_Air_Temp_C)}°C</strong></div>` : ''}
        ${a.SAG_Temp_C ? `<div class="ahu-chip__detail-row"><span>SAG</span><strong>${fmt(a.SAG_Temp_C)}°C</strong></div>` : ''}
        <div class="ahu-chip__detail-row"><span>Setpoint</span><strong>${fmt(setpoint, 1)}°C</strong></div>
      </div>
    </div>
  `;
}

/** เปิด prompt ให้แก้ Setpoint ของโซน แล้วบันทึกลง localStorage + รีเฟรชหน้าจอ */
function editZoneSetpoint(zoneId, currentVal) {
  const input = window.prompt('ตั้งค่า Setpoint สำหรับโซน ' + zoneId + ' (°C)', currentVal);
  if (input === null) return;
  const num = parseFloat(input);
  if (isNaN(num)) { window.alert('กรุณาใส่ตัวเลขเท่านั้น'); return; }
  setZoneSetpoint(zoneId, num);
  refreshDashboard();
}
window.editZoneSetpoint = editZoneSetpoint;

function renderSummaryStrip(kpis, cp, mergedAhus) {
  const el = document.getElementById('summary-strip');
  const totalDesignLoad = mergedAhus.reduce(function (sum, a) {
    const v = Number(a.Design_kW);
    return sum + (isNaN(v) ? 0 : v);
  }, 0);

  el.innerHTML = `
    <div class="summary-box">
      <h4>CHILLER PLANT ENERGY (SNAPSHOT)</h4>
      <div class="metric-row"><span>Chiller</span><strong>${cp.summary ? fmt(cp.summary.Chiller_kW,0) : '—'} kW</strong></div>
      <div class="metric-row"><span>PCHP + SCHP</span><strong>${cp.summary ? fmt(Number(cp.summary.PCHP_kW)+Number(cp.summary.SCHP_kW),0) : '—'} kW</strong></div>
      <div class="metric-row"><span>CDP + CT</span><strong>${cp.summary ? fmt(Number(cp.summary.CDP_kW)+Number(cp.summary.CT_kW),0) : '—'} kW</strong></div>
      <div class="metric-row metric-row--total"><span>Total Plant</span><strong>${fmtInt(cp.current.totalKw)} kW</strong></div>
    </div>
    <div class="summary-box">
      <h4>AHU SUMMARY</h4>
      <div class="metric-row"><span>Running</span><strong>${kpis.running} (${pct(kpis.running,kpis.total)}%)</strong></div>
      <div class="metric-row"><span>Standby</span><strong>${kpis.standby} (${pct(kpis.standby,kpis.total)}%)</strong></div>
      <div class="metric-row"><span>Stopped</span><strong>${kpis.stopped} (${pct(kpis.stopped,kpis.total)}%)</strong></div>
      <div class="metric-row"><span>Alarm</span><strong class="trend-down">${kpis.alarm}</strong></div>
    </div>
    <div class="summary-box">
      <h4>AHU DESIGN LOAD</h4>
      <div class="metric-row"><span>Total AHUs</span><strong>${kpis.total}</strong></div>
      <div class="metric-row"><span>Sum Design Load</span><strong>${fmtInt(totalDesignLoad)} kW</strong></div>
    </div>
    <div class="summary-box">
      <h4>NOTES</h4>
      <p class="muted small">ข้อมูลอัปเดตอัตโนมัติทุก ${CONFIG.REFRESH_INTERVAL_MS / 1000} วินาที จาก Google Sheets ผ่าน Apps Script API</p>
    </div>
  `;
}

function pct(v, total) {
  if (!total) return 0;
  return Math.round((v / total) * 100);
}

/* ============================================================
   AREA EFFICIENCY SECTION (ใหม่)
   ============================================================ */

function renderAreaEfficiency(areaRows) {
  const el = document.getElementById('area-efficiency-table');
  const rows = computeAreaEfficiency(areaRows).slice(0, 20);

  if (rows.length === 0) {
    el.innerHTML = '<p class="muted small">ไม่มีข้อมูลพื้นที่</p>';
    return;
  }

  el.innerHTML = `
    <p class="muted small">แสดง 20 พื้นที่ที่มีค่า kWh/m²/ปี (ประมาณการ) สูงสุด — คำนวณจาก Design_kW x ${CONFIG.ASSUMED_ANNUAL_OPERATING_HOURS.toLocaleString()} ชม./ปี (สมมติฐาน ปรับได้ใน config.js) หารด้วยพื้นที่ จนกว่าจะมีข้อมูลใช้พลังงานสะสมจริงรายปี</p>
    <table class="cp-table">
      <thead><tr><th>Venue</th><th>Area (m²)</th><th>Design TR</th><th>Design kW</th><th>TR/m²</th><th>kWh/m²/ปี (ประมาณ)</th></tr></thead>
      <tbody>
        ${rows.map(function (r) {
          return `<tr>
            <td>${r.Venue}${r.Matched_Zone_ID ? ` <span class="tag-mini">${r.Matched_Zone_ID}</span>` : ''}</td>
            <td>${fmtInt(r.Area_Sqm)}</td>
            <td>${r.Design_TR ? fmtInt(r.Design_TR) : '—'}</td>
            <td>${r.Design_kW ? fmt(r.Design_kW,1) : '—'}</td>
            <td>${r.tr_per_sqm !== null ? fmt(r.tr_per_sqm, 3) : '—'}</td>
            <td><strong>${r.kwh_per_sqm_year !== null ? fmtInt(r.kwh_per_sqm_year) : '—'}</strong></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
}

/* ============================================================
   LOOKER STUDIO
   ============================================================ */

function renderLookerEmbed() {
  const el = document.getElementById('looker-embed');
  if (CONFIG.LOOKER_STUDIO_EMBED_URL && CONFIG.LOOKER_STUDIO_EMBED_URL.trim() !== '') {
    el.innerHTML = `<div class="looker-frame-wrap"><iframe src="${CONFIG.LOOKER_STUDIO_EMBED_URL}" allowfullscreen></iframe></div>`;
  } else {
    el.innerHTML = `<div class="looker-placeholder">
      <p>ยังไม่ได้เชื่อมต่อ Looker Studio</p>
      <p class="muted small">สร้างรายงานใน Looker Studio โดยใช้ Google Sheets นี้เป็นแหล่งข้อมูล จากนั้นคัดลอกลิงก์ Embed มาใส่ใน <code>js/config.js → LOOKER_STUDIO_EMBED_URL</code></p>
    </div>`;
  }
}

function setLiveBadge(isLive, error) {
  const el = document.getElementById('live-badge');
  if (isLive) {
    el.textContent = '● LIVE';
    el.className = 'badge badge--live';
    el.title = 'เชื่อมต่อ Google Sheets สำเร็จ';
  } else {
    el.textContent = '● DEMO DATA';
    el.className = 'badge badge--demo';
    el.title = error ? 'เชื่อมต่อ Live ไม่สำเร็จ: ' + error : 'ยังไม่ได้ตั้งค่า SHEETS_API_URL ใน config.js';
  }
}

/* ============================================================
   MAIN REFRESH
   ============================================================ */

async function refreshDashboard() {
  const { data, isLive, error } = await fetchDashboardData();
  setLiveBadge(isLive, error);

  const merged = mergeAhuData(data.AHU_Master, data.Live_Status);
  const grouped = groupByZone(merged, data.Zones);
  const kpis = computeKpis(merged);
  const cp = buildChillerPlantModel(data);

  renderChillerKpis(cp);
  renderPlantFlowDiagram(cp, merged);

  renderKpis(kpis);
  renderQuickView(kpis);
  renderAlarms(data.Alarms);
  renderZonesGrid(grouped);
  renderSummaryStrip(kpis, cp, merged);
  renderAreaEfficiency(data.Area_Master);
}

function initDashboard() {
  renderClock();
  renderLegend();
  renderZoneControl();
  renderLookerEmbed();
  refreshDashboard();
  setInterval(refreshDashboard, CONFIG.REFRESH_INTERVAL_MS);
}

document.addEventListener('DOMContentLoaded', initDashboard);
