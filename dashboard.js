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

function renderChillerPanel(log, kpis) {
  const el = document.getElementById('chiller-panel');
  if (!log) {
    el.innerHTML = `<h3>CHILLED WATER LOOP</h3><p class="muted">ไม่มีข้อมูล Chiller_Plant_Log</p>`;
    return;
  }
  el.innerHTML = `
    <h3>CHILLED WATER LOOP</h3>
    <div class="metric-row"><span>CHWS</span><strong>${fmt(log.CHWS_Temp_C)} °C</strong></div>
    <div class="metric-row"><span>CHWR</span><strong>${fmt(log.CHWR_Temp_C)} °C</strong></div>
    <div class="metric-row"><span>ΔT</span><strong>${fmt(log.Delta_T_C)} °C</strong></div>
    <div class="metric-row"><span>Flow</span><strong>${fmt(log.Flow_m3h, 0)} m³/h</strong></div>
    <div class="metric-row"><span>Outdoor Temp.</span><strong>${fmt(log.Outdoor_Temp_C)} °C</strong></div>
    <hr/>
    <div class="metric-row"><span>Chiller Energy</span><strong>${fmt(log.Chiller_kWh,0)} kWh</strong></div>
    <div class="metric-row"><span>AHU Fans Energy</span><strong>${fmt(log.AHU_Fans_kWh,0)} kWh</strong></div>
    <div class="metric-row metric-row--total"><span>Total Today</span><strong>${fmt(log.Total_kWh,0)} kWh</strong></div>
    <div class="metric-row"><span>vs Yesterday</span><strong class="${Number(log.Energy_vs_Yesterday_Pct) < 0 ? 'trend-down' : 'trend-up'}">${fmt(log.Energy_vs_Yesterday_Pct)}%</strong></div>
  `;
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
    <div class="legend-item"><span class="swatch" style="background:var(--area-common)"></span>Common Area (Non-rentable)</div>
    <div class="legend-item"><span class="swatch" style="background:var(--area-event)"></span>Event / Salable Area</div>
    <div class="legend-item"><span class="swatch swatch--outdoor"></span>Outdoor / No Aircon</div>
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
      <button disabled class="zc-btn zc-btn--common">COMMON ON</button>
      <button disabled class="zc-btn zc-btn--common-off">COMMON OFF</button>
      <button disabled class="zc-btn zc-btn--event">EVENT ON</button>
      <button disabled class="zc-btn zc-btn--event-off">EVENT OFF</button>
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
    const areaType = g.zoneInfo.Area_Type || 'Common';
    const colorVar = areaType === 'Event' ? 'var(--area-event)' : (areaType === 'Outdoor' ? 'var(--area-outdoor)' : 'var(--area-common)');
    return `
      <div class="zone-col" style="--zone-color:${colorVar}">
        <div class="zone-col__header">
          <div class="zone-col__id">${g.zoneId}</div>
          <div class="zone-col__name">${g.zoneInfo.Zone_Name || ''}</div>
        </div>
        <div class="zone-col__body">
          ${g.ahus.map(renderAhuCard).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderAhuCard(a) {
  const meta = STATUS_META[a.Status] || STATUS_META.Unknown;
  return `
    <div class="ahu-card">
      <div class="ahu-card__top">
        <span class="dot" style="background:${meta.color}"></span>
        <span class="ahu-card__id">${a.AHU_ID}</span>
      </div>
      <div class="ahu-card__status">${meta.label}${a.Fan_Mode ? ' · ' + a.Fan_Mode : ''}</div>
      ${a.Supply_Air_Temp_C ? `<div class="ahu-card__temp">SA ${fmt(a.Supply_Air_Temp_C)}°C</div>` : ''}
    </div>
  `;
}

function renderSummaryStrip(kpis, log, mergedAhus) {
  const el = document.getElementById('summary-strip');
  const totalDesignLoad = mergedAhus.reduce(function (sum, a) {
    const v = Number(a.Design_Cooling_Load_kW);
    return sum + (isNaN(v) ? 0 : v);
  }, 0);

  el.innerHTML = `
    <div class="summary-box">
      <h4>ENERGY (TODAY)</h4>
      <div class="metric-row"><span>Chiller</span><strong>${log ? fmt(log.Chiller_kWh,0) : '—'} kWh</strong></div>
      <div class="metric-row"><span>AHU Fans</span><strong>${log ? fmt(log.AHU_Fans_kWh,0) : '—'} kWh</strong></div>
      <div class="metric-row metric-row--total"><span>Total</span><strong>${log ? fmt(log.Total_kWh,0) : '—'} kWh</strong></div>
    </div>
    <div class="summary-box">
      <h4>AHU SUMMARY</h4>
      <div class="metric-row"><span>Running</span><strong>${kpis.running} (${pct(kpis.running,kpis.total)}%)</strong></div>
      <div class="metric-row"><span>Standby</span><strong>${kpis.standby} (${pct(kpis.standby,kpis.total)}%)</strong></div>
      <div class="metric-row"><span>Stopped</span><strong>${kpis.stopped} (${pct(kpis.stopped,kpis.total)}%)</strong></div>
      <div class="metric-row"><span>Alarm</span><strong class="trend-down">${kpis.alarm}</strong></div>
    </div>
    <div class="summary-box">
      <h4>DESIGN LOAD</h4>
      <div class="metric-row"><span>Total AHUs</span><strong>${kpis.total}</strong></div>
      <div class="metric-row"><span>Sum Design Load</span><strong>${fmt(totalDesignLoad,0)} kW</strong></div>
      <div class="metric-row"><span>≈ Refrigeration Tons</span><strong>${fmt(totalDesignLoad / CONFIG.ASSUMED_KW_PER_TON,0)} RT</strong></div>
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

function renderLookerEmbed() {
  const el = document.getElementById('looker-embed');
  if (CONFIG.LOOKER_STUDIO_EMBED_URL && CONFIG.LOOKER_STUDIO_EMBED_URL.trim() !== '') {
    el.innerHTML = `<iframe src="${CONFIG.LOOKER_STUDIO_EMBED_URL}" allowfullscreen></iframe>`;
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

async function refreshDashboard() {
  const { data, isLive, error } = await fetchDashboardData();
  setLiveBadge(isLive, error);

  const merged = mergeAhuData(data.AHU_Master, data.Live_Status);
  const grouped = groupByZone(merged, data.Zones);
  const kpis = computeKpis(merged);
  const log = latestChillerLog(data.Chiller_Plant_Log);

  renderKpis(kpis);
  renderChillerPanel(log, kpis);
  renderQuickView(kpis);
  renderAlarms(data.Alarms);
  renderZonesGrid(grouped);
  renderSummaryStrip(kpis, log, merged);
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
