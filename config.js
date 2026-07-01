/**
 * ตั้งค่าการเชื่อมต่อระบบ — แก้ค่าตรงนี้เท่านั้น ไม่ต้องแตะไฟล์อื่น
 */
const CONFIG = {
  // วาง URL ที่ได้จากการ Deploy Google Apps Script เป็น Web App (ดูขั้นตอนใน README.md)
  // ถ้าปล่อยว่าง ระบบจะโชว์ข้อมูลตัวอย่าง (mock-data.js) แทน
  SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbx2zW6WiBiib5nEdePS8UsFE2fPxL_kCxWGyoVMpTW_5H4OVupu2ewnWZyx2Elj36-I/exec',

  // วาง URL สำหรับฝัง (Embed) รายงานจาก Looker Studio
  // Looker Studio > เปิดรายงาน > Share > Embed report > คัดลอกลิงก์ใน src="..."
  LOOKER_STUDIO_EMBED_URL: '',

  // ความถี่ในการดึงข้อมูลใหม่อัตโนมัติ (มิลลิวินาที)
  REFRESH_INTERVAL_MS: 60000,

  // จำนวนหน่วยความจุ (kW) ต่อ AHU 1 เครื่อง โดยประมาณ ใช้คำนวณ Load รวมกรณีไม่มีข้อมูลจริง
  ASSUMED_KW_PER_TON: 3.517,
};
