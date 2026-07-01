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

/** รวม AHU_Master + Live_Status เข้าด้วยกันโดยใช้ AHU_ID เป็น key */
function mergeAhuData(master, liveStatus) {
  const statusMap = {};
  (liveStatus || []).forEach(function (s) {
    statusMap[s.AHU_ID] = s;
  });

  return (master || []).map(function (m) {
    const live = statusMap[m.AHU_ID] || {};
    return Object.assign({}, m, {
      Status: live.Status || 'Unknown',
      Fan_Mode: live.Fan_Mode || '',
      Supply_Air_Temp_C: live.Supply_Air_Temp_C || '',
      Return_Air_Temp_C: live.Return_Air_Temp_C || '',
      RH_Percent: live.RH_Percent || '',
      Last_Updated: live.Last_Updated || '',
    });
  });
}

/** จัดกลุ่ม AHU ตามโซน พร้อมเรียงตาม Display_Order ของ Zones */
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
    .sort(function (a, b) {
      return (zoneOrder[a] || 999) - (zoneOrder[b] || 999);
    })
    .map(function (zid) {
      return {
        zoneId: zid,
        zoneInfo: zoneInfo[zid] || { Zone_Name: zid, Area_Type: 'Common', Color_Hex: '#3B82F6' },
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

function latestChillerLog(logs) {
  if (!logs || logs.length === 0) return null;
  return logs[logs.length - 1];
}
