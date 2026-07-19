/**
 * ตั้งค่าการเชื่อมต่อระบบ — แก้ค่าตรงนี้เท่านั้น ไม่ต้องแตะไฟล์อื่น
 */
const CONFIG = {
  // วาง URL ที่ได้จากการ Deploy Google Apps Script เป็น Web App (ดูขั้นตอนใน README.md)
  // ถ้าปล่อยว่าง ระบบจะโชว์ข้อมูลตัวอย่าง (mock-data.js) แทน
  SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbxuTPca5he7y6hUsWCdPlJxRpPsJEe_XH6ULz7W6SXIxtMt2EQaG_28KyKew_frJzPF/exec',

  // วาง URL สำหรับฝัง (Embed) รายงานจาก Looker Studio
  LOOKER_STUDIO_EMBED_URL: '',

  // ความถี่ในการดึงข้อมูลใหม่อัตโนมัติ (มิลลิวินาที)
  REFRESH_INTERVAL_MS: 60000,

  // จำนวนหน่วยความจุ (kW) ต่อ Ton ที่ใช้แปลงหน่วยเมื่อไม่มีข้อมูลจริง
  ASSUMED_KW_PER_TON: 3.517,

  // ---- ใช้คำนวณ kWh/m2/year โดยประมาณ ในหมวด Area Efficiency ----
  // เนื่องจากยังไม่มีข้อมูลใช้พลังงานสะสมรายปีจริง (รอ IoT/Log สะสมอย่างน้อย 1 ปี)
  // ระบบจะประมาณจาก Design_kW ของแต่ละพื้นที่ x ชั่วโมงเปิดใช้งานสมมติต่อปี
  // ปรับตัวเลขนี้ให้ตรงกับรูปแบบการเปิดใช้อาคารจริง (เช่น จำนวนวัน Event/ปี x ชม.เปิดแอร์/วัน)
  ASSUMED_ANNUAL_OPERATING_HOURS: 3600,
};
