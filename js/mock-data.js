// ข้อมูลตัวอย่าง (Demo) — สร้างจาก BITEC_AHU_Chiller_Database_re01.xlsx (ฉบับแก้ไขโดยผู้ใช้)
// Chiller/CT/PCHP/CDP Phase='All' (อุปกรณ์ส่วนกลางไม่แยก Phase), SCHP แยก Phase ตาม Zone_Label จริง
// เพิ่ม SAG_Temp_C (Live_Status), Setpoint_C (Zones), Temp_Phase1_C/Temp_Phase2_C (Chiller_Plant_Summary — รอทีมวัดจริง)
const MOCK_DATA = {
  "Zones": [
    {
      "Zone_ID": "BEAT",
      "Zone_Name": "Beat",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 1,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "BHIRAJ",
      "Zone_Name": "Bhiraj",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Color_Hex": "#3B82F6",
      "Display_Order": 2,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "COSMOS",
      "Zone_Name": "Cosmos",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Color_Hex": "#3B82F6",
      "Display_Order": 3,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH100-BACK",
      "Zone_Name": "EH100 Back",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Color_Hex": "#EC4899",
      "Display_Order": 4,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH100-FRONT",
      "Zone_Name": "EH100 Front",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Color_Hex": "#EC4899",
      "Display_Order": 5,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH101",
      "Zone_Name": "EH101",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 6,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH102",
      "Zone_Name": "EH102",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 7,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH103",
      "Zone_Name": "EH103",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 8,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH104",
      "Zone_Name": "EH104",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 9,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH98",
      "Zone_Name": "EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Color_Hex": "#EC4899",
      "Display_Order": 10,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "EH99",
      "Zone_Name": "EH99",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Color_Hex": "#EC4899",
      "Display_Order": 11,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "GH201",
      "Zone_Name": "GH201",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Color_Hex": "#3B82F6",
      "Display_Order": 12,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "GH202",
      "Zone_Name": "GH202",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Color_Hex": "#3B82F6",
      "Display_Order": 13,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "GH203",
      "Zone_Name": "GH203",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Color_Hex": "#3B82F6",
      "Display_Order": 14,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "HQF2",
      "Zone_Name": "Hqf2",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 15,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "LIVE",
      "Zone_Name": "Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 16,
      "Setpoint_C": 24.0
    },
    {
      "Zone_ID": "SAMA-GARDEN",
      "Zone_Name": "Sama Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Color_Hex": "#EC4899",
      "Display_Order": 17,
      "Setpoint_C": 24.0
    }
  ],
  "AHU_Master": [
    {
      "AHU_ID": "H-2-2MAHU-06",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 126,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-3-2MAHU-01",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-3-2MAHU-02",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-3-2MAHU-03",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98 (OAU)",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-3-2MAHU-04",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-3-2MAHU-05",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-4-2MAHU-04",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-4-2MAHU-05",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-4-2MAHU-06",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 131,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-4-2MAHU-07",
      "Zone": "EH98",
      "Description": "เครื่องส่งลมเย็น EH98",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 52,
      "Design_kW": 18.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-2-2MAHU-01",
      "Zone": "EH99",
      "Description": "เครื่องส่งลมเย็น EH99",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 126,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-2-2MAHU-02",
      "Zone": "EH99",
      "Description": "เครื่องส่งลมเย็น EH99",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 126,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-2-2MAHU-03",
      "Zone": "EH99",
      "Description": "เครื่องส่งลมเย็น EH99 (OAU)",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 126,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-2-2MAHU-04",
      "Zone": "EH99",
      "Description": "เครื่องส่งลมเย็น EH99",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 126,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-2-2MAHU-05",
      "Zone": "EH99",
      "Description": "เครื่องส่งลมเย็น EH99",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 126,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-9-2MAHU-01",
      "Zone": "EH100-FRONT",
      "Description": "เครื่องส่งลมเย็น EH100 Front",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 126,
      "Design_kW": 55,
      "Notes": null
    },
    {
      "AHU_ID": "H-9-2MAHU-02",
      "Zone": "EH100-FRONT",
      "Description": "เครื่องส่งลมเย็น EH100 Front",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 126,
      "Design_kW": 55,
      "Notes": null
    },
    {
      "AHU_ID": "H-9-2MAHU-03",
      "Zone": "EH100-FRONT",
      "Description": "เครื่องส่งลมเย็น EH100 Front",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 126,
      "Design_kW": 55,
      "Notes": null
    },
    {
      "AHU_ID": "H-9-2MAHU-04",
      "Zone": "EH100-FRONT",
      "Description": "เครื่องส่งลมเย็น EH100 Front",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 126,
      "Design_kW": 55,
      "Notes": null
    },
    {
      "AHU_ID": "H-1-2MAHU-01",
      "Zone": "EH100-BACK",
      "Description": "เครื่องส่งลมเย็น EH100 Back",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 100,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-1-2MAHU-02",
      "Zone": "EH100-BACK",
      "Description": "เครื่องส่งลมเย็น EH100 Back",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 100,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-1-2MAHU-03",
      "Zone": "EH100-BACK",
      "Description": "เครื่องส่งลมเย็น EH100 Back (OAU)",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 100,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-1-2MAHU-04",
      "Zone": "EH100-BACK",
      "Description": "เครื่องส่งลมเย็น EH100 Back",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 100,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "H-1-2MAHU-05",
      "Zone": "EH100-BACK",
      "Description": "เครื่องส่งลมเย็น EH100 Back",
      "Area_Type": "EXHIBITION",
      "Phase": "2",
      "Brand": "Trane",
      "Design_TON": 100,
      "Design_kW": 45,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SEH101-01",
      "Zone": "HQF2",
      "Description": "เครื่องส่งลมเย็นข้าง EH101",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Trane",
      "Design_TON": 60,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SEH101-02",
      "Zone": "HQF2",
      "Description": "เครื่องส่งลมเย็นข้าง EH101",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Trane",
      "Design_TON": 60,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH101-F",
      "Zone": "EH101",
      "Description": "เครื่องส่งลมเย็น EH101 ด้านหน้า",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH101-B",
      "Zone": "EH101",
      "Description": "เครื่องส่งลมเย็น EH101 ด้านหลัง",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH102-F",
      "Zone": "EH102",
      "Description": "เครื่องส่งลมเย็น EH102 ด้านหน้า",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH102-B",
      "Zone": "EH102",
      "Description": "เครื่องส่งลมเย็น EH102 ด้านหลัง",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH103-F",
      "Zone": "EH103",
      "Description": "เครื่องส่งลมเย็น EH103 ด้านหน้า",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH103-B",
      "Zone": "EH103",
      "Description": "เครื่องส่งลมเย็น EH103 ด้านหลัง",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH104-F",
      "Zone": "EH104",
      "Description": "เครื่องส่งลมเย็น EH104 ด้านหน้า",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-EH104-B",
      "Zone": "EH104",
      "Description": "เครื่องส่งลมเย็น EH104 ด้านหลัง",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Tasaki",
      "Design_TON": 400,
      "Design_kW": 80,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-01",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-02",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-03",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-04",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-05",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-06",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-07",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-08",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-09",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-10",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-11",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-12",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-13",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-14",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-15",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-16",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-17",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-18",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-19",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-20",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-21",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-22",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-23",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-24",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-25",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-26",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-27",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-28",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-29",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BEAT-30",
      "Zone": "BEAT",
      "Description": "เครื่องส่งลมเย็น Beat Active",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 20,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-01",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-02",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-03",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-04",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-05",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-06",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-07",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-08",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-09",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-BTLIVE-10",
      "Zone": "LIVE",
      "Description": "เครื่องส่งลมเย็น Bitec Live",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 83,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-01",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-02",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-03",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-04",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-05",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-06",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-07",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-08",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 63,
      "Design_kW": 15,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-SMGARDEN-09",
      "Zone": "SAMA-GARDEN",
      "Description": "เครื่องส่งลมเย็น SAMA Garden",
      "Area_Type": "EXHIBITION",
      "Phase": "1",
      "Brand": "Trane",
      "Design_TON": 80,
      "Design_kW": 30,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-GH201-01",
      "Zone": "GH201",
      "Description": "เครื่องส่งลมเย็น GH201",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 35,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-GH201-02",
      "Zone": "GH201",
      "Description": "เครื่องส่งลมเย็น GH201",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 35,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-GH202-01",
      "Zone": "GH202",
      "Description": "เครื่องส่งลมเย็น GH202",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 35,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-GH202-02",
      "Zone": "GH202",
      "Description": "เครื่องส่งลมเย็น GH202",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 35,
      "Design_kW": 7.5,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-GH203-01",
      "Zone": "GH203",
      "Description": "เครื่องส่งลมเย็น GH203",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 40,
      "Design_kW": 11,
      "Notes": null
    },
    {
      "AHU_ID": "AHU-GH203-02",
      "Zone": "GH203",
      "Description": "เครื่องส่งลมเย็น GH203",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Brand": "Carrier",
      "Design_TON": 40,
      "Design_kW": 11,
      "Notes": null
    },
    {
      "AHU_ID": "OAU-GH203-03",
      "Zone": "GH203",
      "Description": "เครื่องจ่ายอากาศบริสุทธิ์ GH203",
      "Area_Type": "CONVENTION",
      "Phase": "1",
      "Brand": "TRANE",
      "Design_TON": 35,
      "Design_kW": 5.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-3MAHU-07",
      "Zone": "BHIRAJ",
      "Description": "เครื่องส่งลมเย็น BH1",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 74,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-3MAHU-08",
      "Zone": "BHIRAJ",
      "Description": "เครื่องส่งลมเย็น BH1",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 74,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-3MAHU-02",
      "Zone": "BHIRAJ",
      "Description": "เครื่องส่งลมเย็น BH2",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 74,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-3MAHU-03",
      "Zone": "BHIRAJ",
      "Description": "เครื่องส่งลมเย็น BH2",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 74,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-5-3MAHU-01",
      "Zone": "BHIRAJ",
      "Description": "เครื่องส่งลมเย็น BH3",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 74,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-5-3MAHU-02",
      "Zone": "BHIRAJ",
      "Description": "เครื่องส่งลมเย็น BH3",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 74,
      "Design_kW": 37,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-GSAHU-01",
      "Zone": "COSMOS",
      "Description": "เครื่องส่งลมเย็น COSMOS",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 10,
      "Design_kW": 1.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-GSAHU-02",
      "Zone": "COSMOS",
      "Description": "เครื่องส่งลมเย็น COSMOS",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 10,
      "Design_kW": 1.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-GSAHU-03",
      "Zone": "COSMOS",
      "Description": "เครื่องส่งลมเย็น COSMOS",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 15,
      "Design_kW": 1.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-GSAHU-04",
      "Zone": "COSMOS",
      "Description": "เครื่องส่งลมเย็น COSMOS",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 15,
      "Design_kW": 1.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-GSAHU-05",
      "Zone": "COSMOS",
      "Description": "เครื่องส่งลมเย็น COSMOS",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 15,
      "Design_kW": 1.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-GSAHU-06",
      "Zone": "COSMOS",
      "Description": "เครื่องส่งลมเย็น COSMOS",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 15,
      "Design_kW": 1.5,
      "Notes": null
    },
    {
      "AHU_ID": "H-6-GSAHU-07",
      "Zone": "COSMOS",
      "Description": "เครื่องส่งลมเย็น COSMOS",
      "Area_Type": "CONVENTION",
      "Phase": "2",
      "Brand": "TRANE",
      "Design_TON": 15,
      "Design_kW": 1.5,
      "Notes": null
    }
  ],
  "Live_Status": [
    {
      "AHU_ID": "H-2-2MAHU-06",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.7,
      "Return_Air_Temp_C": 23.2,
      "RH_Percent": 61,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": 14.4
    },
    {
      "AHU_ID": "H-3-2MAHU-01",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15.2,
      "Return_Air_Temp_C": 23.8,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": 16.0
    },
    {
      "AHU_ID": "H-3-2MAHU-02",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 23.8,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-3-2MAHU-03",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15.3,
      "Return_Air_Temp_C": 25.2,
      "RH_Percent": 57,
      "Last_Updated": "2026-07-18 16:29",
      "SAG_Temp_C": 16.4
    },
    {
      "AHU_ID": "H-3-2MAHU-04",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:29",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-3-2MAHU-05",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.2,
      "Return_Air_Temp_C": 23.5,
      "RH_Percent": 54,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": 14.9
    },
    {
      "AHU_ID": "H-4-2MAHU-04",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-4-2MAHU-05",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-4-2MAHU-06",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:19",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-4-2MAHU-07",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.2,
      "Return_Air_Temp_C": 25.2,
      "RH_Percent": 55,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": 15.0
    },
    {
      "AHU_ID": "H-2-2MAHU-01",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 14.3,
      "Return_Air_Temp_C": 24.6,
      "RH_Percent": 52,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": 15.1
    },
    {
      "AHU_ID": "H-2-2MAHU-02",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.7,
      "Return_Air_Temp_C": 24.1,
      "RH_Percent": 55,
      "Last_Updated": "2026-07-18 16:20",
      "SAG_Temp_C": 13.2
    },
    {
      "AHU_ID": "H-2-2MAHU-03",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-2-2MAHU-04",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-2-2MAHU-05",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:25",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-9-2MAHU-01",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15.3,
      "Return_Air_Temp_C": 24.5,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:28",
      "SAG_Temp_C": 16.1
    },
    {
      "AHU_ID": "H-9-2MAHU-02",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:20",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-9-2MAHU-03",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:15",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-9-2MAHU-04",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:28",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-1-2MAHU-01",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 13.9,
      "Return_Air_Temp_C": 25.3,
      "RH_Percent": 48,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": 14.8
    },
    {
      "AHU_ID": "H-1-2MAHU-02",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-1-2MAHU-03",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:19",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-1-2MAHU-04",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 13.6,
      "Return_Air_Temp_C": 25.1,
      "RH_Percent": 55,
      "Last_Updated": "2026-07-18 16:29",
      "SAG_Temp_C": 14.6
    },
    {
      "AHU_ID": "H-1-2MAHU-05",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 12.9,
      "Return_Air_Temp_C": 23.9,
      "RH_Percent": 54,
      "Last_Updated": "2026-07-18 16:15",
      "SAG_Temp_C": 13.3
    },
    {
      "AHU_ID": "AHU-SEH101-01",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.8,
      "Return_Air_Temp_C": 24.9,
      "RH_Percent": 62,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": 14.4
    },
    {
      "AHU_ID": "AHU-SEH101-02",
      "Status": "Standby",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 25.5,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:18",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-EH101-F",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.7,
      "Return_Air_Temp_C": 23.5,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": 13.1
    },
    {
      "AHU_ID": "AHU-EH101-B",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 15,
      "Return_Air_Temp_C": 23.6,
      "RH_Percent": 52,
      "Last_Updated": "2026-07-18 16:30",
      "SAG_Temp_C": 16.0
    },
    {
      "AHU_ID": "AHU-EH102-F",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 14.1,
      "Return_Air_Temp_C": 25.1,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": 15.0
    },
    {
      "AHU_ID": "AHU-EH102-B",
      "Status": "Alarm",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-EH103-F",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:18",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-EH103-B",
      "Status": "Standby",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 23.4,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:18",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-EH104-F",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.7,
      "Return_Air_Temp_C": 23.7,
      "RH_Percent": 50,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": 13.0
    },
    {
      "AHU_ID": "AHU-EH104-B",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.8,
      "Return_Air_Temp_C": 25,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": 14.0
    },
    {
      "AHU_ID": "AHU-BEAT-01",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.7,
      "Return_Air_Temp_C": 23.7,
      "RH_Percent": 54,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": 13.9
    },
    {
      "AHU_ID": "AHU-BEAT-02",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:19",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-03",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:15",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-04",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15,
      "Return_Air_Temp_C": 26.5,
      "RH_Percent": 55,
      "Last_Updated": "2026-07-18 16:15",
      "SAG_Temp_C": 15.9
    },
    {
      "AHU_ID": "AHU-BEAT-05",
      "Status": "Standby",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 23.3,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-18 16:20",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-06",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:15",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-07",
      "Status": "Alarm",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:30",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-08",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 12.9,
      "Return_Air_Temp_C": 24.9,
      "RH_Percent": 48,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": 13.8
    },
    {
      "AHU_ID": "AHU-BEAT-09",
      "Status": "Alarm",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:22",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-10",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:25",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-11",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.1,
      "Return_Air_Temp_C": 25.7,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": 14.5
    },
    {
      "AHU_ID": "AHU-BEAT-12",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-13",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 23.7,
      "RH_Percent": 55,
      "Last_Updated": "2026-07-18 16:19",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-14",
      "Status": "Alarm",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:30",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-15",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 13.3,
      "Return_Air_Temp_C": 25.4,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": 13.6
    },
    {
      "AHU_ID": "AHU-BEAT-16",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:19",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-17",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.8,
      "Return_Air_Temp_C": 24.6,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:24",
      "SAG_Temp_C": 13.6
    },
    {
      "AHU_ID": "AHU-BEAT-18",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 24.7,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:19",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-19",
      "Status": "Alarm",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-20",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 24.7,
      "RH_Percent": 50,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-21",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:28",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-22",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-23",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 25.5,
      "RH_Percent": 50,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-24",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.3,
      "Return_Air_Temp_C": 24.6,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": 14.7
    },
    {
      "AHU_ID": "AHU-BEAT-25",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:19",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-26",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.6,
      "Return_Air_Temp_C": 25.8,
      "RH_Percent": 59,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": 13.1
    },
    {
      "AHU_ID": "AHU-BEAT-27",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-28",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.6,
      "Return_Air_Temp_C": 23.7,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": 13.1
    },
    {
      "AHU_ID": "AHU-BEAT-29",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:22",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BEAT-30",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BTLIVE-01",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 15.2,
      "Return_Air_Temp_C": 25.3,
      "RH_Percent": 61,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": 15.5
    },
    {
      "AHU_ID": "AHU-BTLIVE-02",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BTLIVE-03",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BTLIVE-04",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.8,
      "Return_Air_Temp_C": 23.5,
      "RH_Percent": 50,
      "Last_Updated": "2026-07-18 16:15",
      "SAG_Temp_C": 15.5
    },
    {
      "AHU_ID": "AHU-BTLIVE-05",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:29",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BTLIVE-06",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 14.9,
      "Return_Air_Temp_C": 23.4,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:29",
      "SAG_Temp_C": 15.6
    },
    {
      "AHU_ID": "AHU-BTLIVE-07",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.3,
      "Return_Air_Temp_C": 25.7,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": 14.4
    },
    {
      "AHU_ID": "AHU-BTLIVE-08",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:28",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BTLIVE-09",
      "Status": "Standby",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 25.1,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:24",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-BTLIVE-10",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-SMGARDEN-01",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-SMGARDEN-02",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:24",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-SMGARDEN-03",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 24.5,
      "RH_Percent": 54,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-SMGARDEN-04",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.5,
      "Return_Air_Temp_C": 24.5,
      "RH_Percent": 51,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": 15.3
    },
    {
      "AHU_ID": "AHU-SMGARDEN-05",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15.3,
      "Return_Air_Temp_C": 25.3,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": 16.2
    },
    {
      "AHU_ID": "AHU-SMGARDEN-06",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15.4,
      "Return_Air_Temp_C": 23.8,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-18 16:18",
      "SAG_Temp_C": 16.1
    },
    {
      "AHU_ID": "AHU-SMGARDEN-07",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 26.5,
      "RH_Percent": 61,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-SMGARDEN-08",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 15.5,
      "Return_Air_Temp_C": 24.4,
      "RH_Percent": 54,
      "Last_Updated": "2026-07-18 16:24",
      "SAG_Temp_C": 16.4
    },
    {
      "AHU_ID": "AHU-SMGARDEN-09",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 12.8,
      "Return_Air_Temp_C": 24.3,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:16",
      "SAG_Temp_C": 13.5
    },
    {
      "AHU_ID": "AHU-GH201-01",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 24.3,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-GH201-02",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:27",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-GH202-01",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.8,
      "Return_Air_Temp_C": 24,
      "RH_Percent": 62,
      "Last_Updated": "2026-07-18 16:25",
      "SAG_Temp_C": 13.4
    },
    {
      "AHU_ID": "AHU-GH202-02",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15,
      "Return_Air_Temp_C": 26,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:22",
      "SAG_Temp_C": 16.2
    },
    {
      "AHU_ID": "AHU-GH203-01",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 24.9,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:15",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "AHU-GH203-02",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:28",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "OAU-GH203-03",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.9,
      "Return_Air_Temp_C": 23.6,
      "RH_Percent": 62,
      "Last_Updated": "2026-07-18 16:28",
      "SAG_Temp_C": 16.1
    },
    {
      "AHU_ID": "H-6-3MAHU-07",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.4,
      "Return_Air_Temp_C": 25.8,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": 15.5
    },
    {
      "AHU_ID": "H-6-3MAHU-08",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 15.1,
      "Return_Air_Temp_C": 24.6,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": 16.0
    },
    {
      "AHU_ID": "H-6-3MAHU-02",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.6,
      "Return_Air_Temp_C": 25.5,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-18 16:25",
      "SAG_Temp_C": 13.2
    },
    {
      "AHU_ID": "H-6-3MAHU-03",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13,
      "Return_Air_Temp_C": 26.3,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": 13.5
    },
    {
      "AHU_ID": "H-5-3MAHU-01",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:21",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-5-3MAHU-02",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 23.9,
      "RH_Percent": 60,
      "Last_Updated": "2026-07-18 16:30",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-6-GSAHU-01",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.5,
      "Return_Air_Temp_C": 25.6,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-18 16:24",
      "SAG_Temp_C": 13.1
    },
    {
      "AHU_ID": "H-6-GSAHU-02",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:23",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-6-GSAHU-03",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 25.3,
      "RH_Percent": 58,
      "Last_Updated": "2026-07-18 16:17",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-6-GSAHU-04",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:18",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-6-GSAHU-05",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-18 16:24",
      "SAG_Temp_C": ""
    },
    {
      "AHU_ID": "H-6-GSAHU-06",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 13.1,
      "Return_Air_Temp_C": 26.1,
      "RH_Percent": 59,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": 13.5
    },
    {
      "AHU_ID": "H-6-GSAHU-07",
      "Status": "Standby",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 26.4,
      "RH_Percent": 61,
      "Last_Updated": "2026-07-18 16:26",
      "SAG_Temp_C": ""
    }
  ],
  "Alarms": [
    {
      "Timestamp": "2026-07-18 16:22",
      "AHU_ID": "AHU-SMGARDEN-02",
      "Alarm_Type": "High Supply Air Temp.",
      "Severity": "Critical",
      "Status": "Active"
    },
    {
      "Timestamp": "2026-07-18 16:19",
      "AHU_ID": "H-4-2MAHU-07",
      "Alarm_Type": "Filter Differential High",
      "Severity": "Warning",
      "Status": "Active"
    },
    {
      "Timestamp": "2026-07-18 16:13",
      "AHU_ID": "CHWP-02",
      "Alarm_Type": "Flow Low",
      "Severity": "Warning",
      "Status": "Cleared"
    }
  ],
  "Chiller_Machines": [
    {
      "Chiller_ID": "P1-CH-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.553,
      "Current_TR": 738,
      "Chiller_Current_Percent": 86.4
    },
    {
      "Chiller_ID": "P1-CH-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.651,
      "Current_TR": 841,
      "Chiller_Current_Percent": 78
    },
    {
      "Chiller_ID": "P1-CH-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.551,
      "Current_TR": 659,
      "Chiller_Current_Percent": 69.9
    },
    {
      "Chiller_ID": "P1-CH-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.594,
      "Current_TR": 605,
      "Chiller_Current_Percent": 70.1
    },
    {
      "Chiller_ID": "H-CH-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.705,
      "Current_TR": 577,
      "Chiller_Current_Percent": 84.5
    },
    {
      "Chiller_ID": "H-CH-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.676,
      "Current_TR": 575,
      "Chiller_Current_Percent": 88.7
    },
    {
      "Chiller_ID": "H-CH-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.669,
      "Current_TR": 779,
      "Chiller_Current_Percent": 81.6
    },
    {
      "Chiller_ID": "H-CH-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.715,
      "Current_TR": 765,
      "Chiller_Current_Percent": 75.4
    },
    {
      "Chiller_ID": "H-CH-05",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.701,
      "Current_TR": 721,
      "Chiller_Current_Percent": 84.4
    },
    {
      "Chiller_ID": "H-CH-06",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 1000,
      "Design_kW": 650,
      "Status": "Running",
      "Current_kW_per_TR": 0.741,
      "Current_TR": 743,
      "Chiller_Current_Percent": 62.6
    },
    {
      "Chiller_ID": "H-CH-07",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 500,
      "Design_kW": 325,
      "Status": "Running",
      "Current_kW_per_TR": 0.64,
      "Current_TR": 283,
      "Chiller_Current_Percent": 60.6
    },
    {
      "Chiller_ID": "H-CH-08",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_TR": 500,
      "Design_kW": 325,
      "Status": "Running",
      "Current_kW_per_TR": 0.564,
      "Current_TR": 415,
      "Chiller_Current_Percent": 86.9
    }
  ],
  "CT_Units": [
    {
      "CT_ID": "P1-CT-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 21.9
    },
    {
      "CT_ID": "P1-CT-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 24.2
    },
    {
      "CT_ID": "P1-CT-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 26.9
    },
    {
      "CT_ID": "P1-CT-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 18.8
    },
    {
      "CT_ID": "H-CT-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 19.3
    },
    {
      "CT_ID": "H-CT-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 25.7
    },
    {
      "CT_ID": "H-CT-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 22.4
    },
    {
      "CT_ID": "H-CT-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 21.9
    },
    {
      "CT_ID": "H-CT-05",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 18.1
    },
    {
      "CT_ID": "H-CT-06",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 18.4
    },
    {
      "CT_ID": "H-CT-07",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 22.8
    }
  ],
  "PCHP_Units": [
    {
      "PCHP_ID": "P1-PCHP-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 27.7
    },
    {
      "PCHP_ID": "P1-PCHP-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 27.6
    },
    {
      "PCHP_ID": "P1-PCHP-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 31.4
    },
    {
      "PCHP_ID": "P1-PCHP-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 30.8
    },
    {
      "PCHP_ID": "H-PCHP-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 34.9
    },
    {
      "PCHP_ID": "H-PCHP-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 29.1
    },
    {
      "PCHP_ID": "H-PCHP-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 30.8
    },
    {
      "PCHP_ID": "H-PCHP-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 36.5
    },
    {
      "PCHP_ID": "H-PCHP-05",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 36.3
    },
    {
      "PCHP_ID": "H-PCHP-06",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 35.6
    },
    {
      "PCHP_ID": "H-PCHP-07",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 22,
      "Status": "Running",
      "Current_kW": 14.8
    },
    {
      "PCHP_ID": "H-PCHP-08",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 22,
      "Status": "Running",
      "Current_kW": 13.8
    }
  ],
  "CDP_Units": [
    {
      "CDP_ID": "P1-CDP-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 44
    },
    {
      "CDP_ID": "P1-CDP-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 36.1
    },
    {
      "CDP_ID": "P1-CDP-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 33.6
    },
    {
      "CDP_ID": "P1-CDP-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 43.8
    },
    {
      "CDP_ID": "H-CDP-01",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 39.5
    },
    {
      "CDP_ID": "H-CDP-02",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 47.7
    },
    {
      "CDP_ID": "H-CDP-03",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 43.2
    },
    {
      "CDP_ID": "H-CDP-04",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 41.3
    },
    {
      "CDP_ID": "H-CDP-05",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 46.2
    },
    {
      "CDP_ID": "H-CDP-06",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 48.8
    },
    {
      "CDP_ID": "H-CDP-07",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 20.4
    },
    {
      "CDP_ID": "H-CDP-08",
      "Plant": "Main Plant",
      "Phase": "All",
      "Design_kW": 30,
      "Status": "Running",
      "Current_kW": 22.7
    }
  ],
  "SCHP_Units": [
    {
      "SCHP_ID": "SCHP-01",
      "Phase": "1",
      "Zone_Label": "Zone หน้า",
      "Zone_Detail": null,
      "Design_kW": 110,
      "Status": "Running",
      "Current_kW": 78.6
    },
    {
      "SCHP_ID": "SCHP-02",
      "Phase": "1",
      "Zone_Label": "Zone หน้า",
      "Zone_Detail": null,
      "Design_kW": 110,
      "Status": "Running",
      "Current_kW": 74.9
    },
    {
      "SCHP_ID": "SCHP-03",
      "Phase": "1",
      "Zone_Label": "Zone หน้า",
      "Zone_Detail": null,
      "Design_kW": 110,
      "Status": "Running",
      "Current_kW": 95.1
    },
    {
      "SCHP_ID": "SCHP-04",
      "Phase": "1",
      "Zone_Label": "Zone หลัง",
      "Zone_Detail": null,
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 37.1
    },
    {
      "SCHP_ID": "SCHP-05",
      "Phase": 1,
      "Zone_Label": "Zone หลัง",
      "Zone_Detail": null,
      "Design_kW": 55,
      "Status": "Running",
      "Current_kW": 37.9
    },
    {
      "SCHP_ID": "SCHP-06",
      "Phase": 1,
      "Zone_Label": "EH 105 - 106",
      "Zone_Detail": null,
      "Design_kW": 75,
      "Status": "Running",
      "Current_kW": 62.6
    },
    {
      "SCHP_ID": "SCHP-07",
      "Phase": 1,
      "Zone_Label": "EH 105 - 106",
      "Zone_Detail": null,
      "Design_kW": 75,
      "Status": "Running",
      "Current_kW": 48.3
    },
    {
      "SCHP_ID": "H-SCHP-01",
      "Phase": "2",
      "Zone_Label": "Support Area",
      "Zone_Detail": "Concourse, ORG. Room, ส่วนกลาง Retail Shop",
      "Design_kW": 60,
      "Status": "Running",
      "Current_kW": 52.4
    },
    {
      "SCHP_ID": "H-SCHP-02",
      "Phase": "2",
      "Zone_Label": "Support Area",
      "Zone_Detail": "Concourse, ORG. Room, ส่วนกลาง Retail Shop",
      "Design_kW": 60,
      "Status": "Running",
      "Current_kW": 48.8
    },
    {
      "SCHP_ID": "H-SCHP-03",
      "Phase": "2",
      "Zone_Label": "Support Area",
      "Zone_Detail": "Concourse, ORG. Room, ส่วนกลาง Retail Shop",
      "Design_kW": 60,
      "Status": "Running",
      "Current_kW": 42.8
    },
    {
      "SCHP_ID": "H-SCHP-04",
      "Phase": "2",
      "Zone_Label": "Sale Area",
      "Zone_Detail": "Meeting Room, Foodyard, บูธ Retail Shop, BC, Visitor, Board Room",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 33.2
    },
    {
      "SCHP_ID": "H-SCHP-05",
      "Phase": "2",
      "Zone_Label": "Sale Area",
      "Zone_Detail": "Meeting Room, Foodyard, บูธ Retail Shop, BC, Visitor, Board Room",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 37.1
    },
    {
      "SCHP_ID": "H-SCHP-06",
      "Phase": "2",
      "Zone_Label": "Sale Area",
      "Zone_Detail": "Meeting Room, Foodyard, บูธ Retail Shop, BC, Visitor, Board Room",
      "Design_kW": 45,
      "Status": "Running",
      "Current_kW": 33.4
    },
    {
      "SCHP_ID": "H-SCHP-07",
      "Phase": "2",
      "Zone_Label": "Exhibition Hall",
      "Zone_Detail": "Hall 98 - 100, BHIRAJ Hall",
      "Design_kW": 115,
      "Status": "Running",
      "Current_kW": 96.9
    },
    {
      "SCHP_ID": "H-SCHP-08",
      "Phase": "2",
      "Zone_Label": "Exhibition Hall",
      "Zone_Detail": "Hall 98 - 100, BHIRAJ Hall",
      "Design_kW": 115,
      "Status": "Running",
      "Current_kW": 98.2
    },
    {
      "SCHP_ID": "H-SCHP-09",
      "Phase": "2",
      "Zone_Label": "Exhibition Hall",
      "Zone_Detail": "Hall 98 - 100, BHIRAJ Hall",
      "Design_kW": 115,
      "Status": "Running",
      "Current_kW": 77.1
    }
  ],
  "Chiller_Plant_Summary": [
    {
      "Timestamp": "2026-07-18 06:00",
      "Chiller_kW": 4979.3,
      "PCHP_kW": 359.8,
      "SCHP_kW": 811.9,
      "CDP_kW": 415.7,
      "CT_kW": 224,
      "Total_Plant_kW": 6790.7,
      "Total_TR": 7494.3,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 64.5,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.6,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 06:30",
      "Chiller_kW": 5644.8,
      "PCHP_kW": 407.9,
      "SCHP_kW": 920.4,
      "CDP_kW": 471.3,
      "CT_kW": 254,
      "Total_Plant_kW": 7698.4,
      "Total_TR": 8496,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 59.3,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.4,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 07:00",
      "Chiller_kW": 5333.5,
      "PCHP_kW": 385.4,
      "SCHP_kW": 869.7,
      "CDP_kW": 445.3,
      "CT_kW": 240,
      "Total_Plant_kW": 7273.9,
      "Total_TR": 8027.4,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 67.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.1,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 07:30",
      "Chiller_kW": 4717,
      "PCHP_kW": 340.9,
      "SCHP_kW": 769.1,
      "CDP_kW": 393.8,
      "CT_kW": 212.2,
      "Total_Plant_kW": 6433,
      "Total_TR": 7099.4,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 62.9,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.6,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 08:00",
      "Chiller_kW": 4873,
      "PCHP_kW": 352.2,
      "SCHP_kW": 794.6,
      "CDP_kW": 406.8,
      "CT_kW": 219.3,
      "Total_Plant_kW": 6645.9,
      "Total_TR": 7334.3,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 62.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.6,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 08:30",
      "Chiller_kW": 6500.7,
      "PCHP_kW": 469.8,
      "SCHP_kW": 1060,
      "CDP_kW": 542.7,
      "CT_kW": 292.5,
      "Total_Plant_kW": 8865.7,
      "Total_TR": 9784.1,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 63.5,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.2,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 09:00",
      "Chiller_kW": 4413.7,
      "PCHP_kW": 319,
      "SCHP_kW": 719.7,
      "CDP_kW": 368.5,
      "CT_kW": 198.6,
      "Total_Plant_kW": 6019.5,
      "Total_TR": 6643.1,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 62.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.2,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 09:30",
      "Chiller_kW": 4392.2,
      "PCHP_kW": 317.4,
      "SCHP_kW": 716.2,
      "CDP_kW": 366.7,
      "CT_kW": 197.6,
      "Total_Plant_kW": 5990.1,
      "Total_TR": 6610.6,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 63.1,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.8,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 10:00",
      "Chiller_kW": 6502.2,
      "PCHP_kW": 469.9,
      "SCHP_kW": 1060.2,
      "CDP_kW": 542.8,
      "CT_kW": 292.6,
      "Total_Plant_kW": 8867.7,
      "Total_TR": 9786.4,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 61.9,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.7,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 10:30",
      "Chiller_kW": 6356.3,
      "PCHP_kW": 459.4,
      "SCHP_kW": 1036.5,
      "CDP_kW": 530.7,
      "CT_kW": 286,
      "Total_Plant_kW": 8668.9,
      "Total_TR": 9566.9,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 58.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.1,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 11:00",
      "Chiller_kW": 5935.4,
      "PCHP_kW": 428.9,
      "SCHP_kW": 967.8,
      "CDP_kW": 495.5,
      "CT_kW": 267.1,
      "Total_Plant_kW": 8094.7,
      "Total_TR": 8933.2,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 60.6,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 11:30",
      "Chiller_kW": 5603.9,
      "PCHP_kW": 405,
      "SCHP_kW": 913.8,
      "CDP_kW": 467.8,
      "CT_kW": 252.1,
      "Total_Plant_kW": 7642.6,
      "Total_TR": 8434.4,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 64.3,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.2,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 12:00",
      "Chiller_kW": 4475.4,
      "PCHP_kW": 323.4,
      "SCHP_kW": 729.8,
      "CDP_kW": 373.6,
      "CT_kW": 201.4,
      "Total_Plant_kW": 6103.6,
      "Total_TR": 6735.9,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 61.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.4,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 12:30",
      "Chiller_kW": 6231.3,
      "PCHP_kW": 450.3,
      "SCHP_kW": 1016.1,
      "CDP_kW": 520.2,
      "CT_kW": 280.4,
      "Total_Plant_kW": 8498.3,
      "Total_TR": 9378.6,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 61.9,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.1,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 13:00",
      "Chiller_kW": 6401,
      "PCHP_kW": 462.6,
      "SCHP_kW": 1043.7,
      "CDP_kW": 534.4,
      "CT_kW": 288,
      "Total_Plant_kW": 8729.7,
      "Total_TR": 9634.1,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 64.8,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 13:30",
      "Chiller_kW": 5888.7,
      "PCHP_kW": 425.6,
      "SCHP_kW": 960.2,
      "CDP_kW": 491.6,
      "CT_kW": 265,
      "Total_Plant_kW": 8031.1,
      "Total_TR": 8863,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 62.2,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 14:00",
      "Chiller_kW": 4494.4,
      "PCHP_kW": 324.8,
      "SCHP_kW": 732.8,
      "CDP_kW": 375.2,
      "CT_kW": 202.2,
      "Total_Plant_kW": 6129.4,
      "Total_TR": 6764.4,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 61.3,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 14:30",
      "Chiller_kW": 4994.3,
      "PCHP_kW": 360.9,
      "SCHP_kW": 814.4,
      "CDP_kW": 416.9,
      "CT_kW": 224.7,
      "Total_Plant_kW": 6811.2,
      "Total_TR": 7516.8,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 62,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.8,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 15:00",
      "Chiller_kW": 4666.5,
      "PCHP_kW": 337.2,
      "SCHP_kW": 760.9,
      "CDP_kW": 389.6,
      "CT_kW": 210,
      "Total_Plant_kW": 6364.2,
      "Total_TR": 7023.4,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 58.1,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.6,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    },
    {
      "Timestamp": "2026-07-18 15:30",
      "Chiller_kW": 4798.6,
      "PCHP_kW": 346.8,
      "SCHP_kW": 782.5,
      "CDP_kW": 400.6,
      "CT_kW": 215.9,
      "Total_Plant_kW": 6544.4,
      "Total_TR": 7222.4,
      "Efficiency_kW_per_TR": 0.906,
      "Cooling_Thermal_Efficiency_Pct": 58.6,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Temp_Phase1_C": null,
      "Temp_Phase2_C": null
    }
  ],
  "Area_Master": [
    {
      "Venue": "EH98",
      "Area_Sqm": 8600,
      "AHU_Set_Count": 9,
      "Design_TR": 1247,
      "Design_kW": 415.5,
      "Matched_Zone_ID": "EH98"
    },
    {
      "Venue": "EH99",
      "Area_Sqm": 5500,
      "AHU_Set_Count": 5,
      "Design_TR": 635,
      "Design_kW": 225,
      "Matched_Zone_ID": "EH99"
    },
    {
      "Venue": "EH100",
      "Area_Sqm": 6600,
      "AHU_Set_Count": 9,
      "Design_TR": 1183,
      "Design_kW": 365,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "EH101",
      "Area_Sqm": 5480,
      "AHU_Set_Count": 2,
      "Design_TR": 800,
      "Design_kW": 160,
      "Matched_Zone_ID": "EH101"
    },
    {
      "Venue": "EH102",
      "Area_Sqm": 5240,
      "AHU_Set_Count": 2,
      "Design_TR": 800,
      "Design_kW": 160,
      "Matched_Zone_ID": "EH102"
    },
    {
      "Venue": "EH103",
      "Area_Sqm": 5240,
      "AHU_Set_Count": 2,
      "Design_TR": 800,
      "Design_kW": 160,
      "Matched_Zone_ID": "EH103"
    },
    {
      "Venue": "EH104",
      "Area_Sqm": 4340,
      "AHU_Set_Count": 2,
      "Design_TR": 800,
      "Design_kW": 160,
      "Matched_Zone_ID": "EH104"
    },
    {
      "Venue": "EH105",
      "Area_Sqm": 6000,
      "AHU_Set_Count": 30,
      "Design_TR": 700,
      "Design_kW": 111,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "EH106",
      "Area_Sqm": 7550,
      "AHU_Set_Count": 10,
      "Design_TR": 600,
      "Design_kW": 150,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "EH107",
      "Area_Sqm": 3600,
      "AHU_Set_Count": 8,
      "Design_TR": 480,
      "Design_kW": 120,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "โถงทางเข้า EH 105",
      "Area_Sqm": 948,
      "AHU_Set_Count": 6,
      "Design_TR": 60,
      "Design_kW": 9,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Cover Walk หน้า 107",
      "Area_Sqm": 750,
      "AHU_Set_Count": 1,
      "Design_TR": 60,
      "Design_kW": 30,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse A",
      "Area_Sqm": 3196,
      "AHU_Set_Count": 2,
      "Design_TR": 160,
      "Design_kW": 37,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse B",
      "Area_Sqm": 2666,
      "AHU_Set_Count": 2,
      "Design_TR": 160,
      "Design_kW": 37,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse 98",
      "Area_Sqm": 5623,
      "AHU_Set_Count": 6,
      "Design_TR": 270,
      "Design_kW": 132,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse 99",
      "Area_Sqm": 1288,
      "AHU_Set_Count": 1,
      "Design_TR": 45,
      "Design_kW": 22,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse 100",
      "Area_Sqm": 1556,
      "AHU_Set_Count": 1,
      "Design_TR": 45,
      "Design_kW": 30,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "GH 201",
      "Area_Sqm": 540,
      "AHU_Set_Count": 2,
      "Design_TR": 140,
      "Design_kW": 15,
      "Matched_Zone_ID": "GH201"
    },
    {
      "Venue": "GH 202",
      "Area_Sqm": 540,
      "AHU_Set_Count": 2,
      "Design_TR": 140,
      "Design_kW": 15,
      "Matched_Zone_ID": "GH202"
    },
    {
      "Venue": "GH 203",
      "Area_Sqm": 640,
      "AHU_Set_Count": 2,
      "Design_TR": 160,
      "Design_kW": 22,
      "Matched_Zone_ID": "GH203"
    },
    {
      "Venue": "MR 210",
      "Area_Sqm": 192,
      "AHU_Set_Count": 5,
      "Design_TR": 0,
      "Design_kW": 0,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 211",
      "Area_Sqm": 108,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 212",
      "Area_Sqm": 108,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 213",
      "Area_Sqm": 108,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 214",
      "Area_Sqm": 108,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 215",
      "Area_Sqm": 108,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 216",
      "Area_Sqm": 108,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 217",
      "Area_Sqm": 108,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 218",
      "Area_Sqm": 80,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 219",
      "Area_Sqm": 80,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 220",
      "Area_Sqm": 90,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 221",
      "Area_Sqm": 90,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 222",
      "Area_Sqm": 100,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 223",
      "Area_Sqm": 100,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 224",
      "Area_Sqm": 170,
      "AHU_Set_Count": 1,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "MR 225",
      "Area_Sqm": 110,
      "AHU_Set_Count": 1,
      "Design_TR": 16,
      "Design_kW": 2.82,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Welcome Hall",
      "Area_Sqm": 2089,
      "AHU_Set_Count": 9,
      "Design_TR": 111,
      "Design_kW": 33.3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "BHIRAJ Hall 1",
      "Area_Sqm": 1100,
      "AHU_Set_Count": 2,
      "Design_TR": 148,
      "Design_kW": 74,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "BHIRAJ Hall 2",
      "Area_Sqm": 1100,
      "AHU_Set_Count": 2,
      "Design_TR": 148,
      "Design_kW": 74,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "BHIRAJ Hall 3",
      "Area_Sqm": 1100,
      "AHU_Set_Count": 2,
      "Design_TR": 148,
      "Design_kW": 74,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Silk 1",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Silk 2",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Silk 3",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Silk 4",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Nile 1",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Nile 2",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Nile 3",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Nile 4",
      "Area_Sqm": 170,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Amber 1",
      "Area_Sqm": 160,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Amber 2",
      "Area_Sqm": 160,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Amber 3",
      "Area_Sqm": 160,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Amber 4",
      "Area_Sqm": 100,
      "AHU_Set_Count": 2,
      "Design_TR": 13,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse Silk, Nile, Amber",
      "Area_Sqm": 1044,
      "AHU_Set_Count": 2,
      "Design_TR": 28,
      "Design_kW": 15,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Pre Function BHIRAJ Hall",
      "Area_Sqm": 2350,
      "AHU_Set_Count": 2,
      "Design_TR": 56,
      "Design_kW": 37,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse C",
      "Area_Sqm": 1775,
      "AHU_Set_Count": 2,
      "Design_TR": 140,
      "Design_kW": 30,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Concourse D",
      "Area_Sqm": 1089,
      "AHU_Set_Count": 2,
      "Design_TR": 120,
      "Design_kW": 30,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Sky Walk",
      "Area_Sqm": 3439,
      "AHU_Set_Count": 13,
      "Design_TR": 88,
      "Design_kW": 26,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 01",
      "Area_Sqm": 25,
      "AHU_Set_Count": 4,
      "Design_TR": 200,
      "Design_kW": 30,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 02",
      "Area_Sqm": 22,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 03",
      "Area_Sqm": 22,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 04",
      "Area_Sqm": 19,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 05",
      "Area_Sqm": 8,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 06",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 07",
      "Area_Sqm": 10,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 08",
      "Area_Sqm": 8.5,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 09",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 10",
      "Area_Sqm": 10,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 11",
      "Area_Sqm": 10,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 12",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 13",
      "Area_Sqm": 7.5,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 14",
      "Area_Sqm": 7.5,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 15",
      "Area_Sqm": 8.5,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 16",
      "Area_Sqm": 8.5,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 17",
      "Area_Sqm": 7.5,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 18",
      "Area_Sqm": 7.5,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 19",
      "Area_Sqm": 7,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 20",
      "Area_Sqm": 7,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 21",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 22",
      "Area_Sqm": 8,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 23",
      "Area_Sqm": 8,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 24",
      "Area_Sqm": 8,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 25",
      "Area_Sqm": 8,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 26",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 27",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 28",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 29",
      "Area_Sqm": 8,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 30",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 31",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Kiosk 32",
      "Area_Sqm": 9,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 01",
      "Area_Sqm": 130,
      "AHU_Set_Count": 9,
      "Design_TR": 90,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 02",
      "Area_Sqm": 116,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 03",
      "Area_Sqm": 98,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 04",
      "Area_Sqm": 85,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 05",
      "Area_Sqm": 106,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 06",
      "Area_Sqm": 54,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 07",
      "Area_Sqm": 54,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 08",
      "Area_Sqm": 95,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 09",
      "Area_Sqm": 117,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 10",
      "Area_Sqm": 165,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 11",
      "Area_Sqm": 109,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 12",
      "Area_Sqm": 106,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Res 13",
      "Area_Sqm": 118,
      "AHU_Set_Count": 2,
      "Design_TR": 6,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "OP 01",
      "Area_Sqm": 47,
      "AHU_Set_Count": 9,
      "Design_TR": 90,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "OP 02",
      "Area_Sqm": 45,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "OP 07",
      "Area_Sqm": 41,
      "AHU_Set_Count": 0,
      "Design_TR": 0,
      "Design_kW": 0,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Starbuck",
      "Area_Sqm": 156,
      "AHU_Set_Count": 3,
      "Design_TR": 23,
      "Design_kW": 3.75,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 01",
      "Area_Sqm": 64,
      "AHU_Set_Count": 1,
      "Design_TR": 3.75,
      "Design_kW": 0.55,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 02",
      "Area_Sqm": 62,
      "AHU_Set_Count": 1,
      "Design_TR": 3.75,
      "Design_kW": 0.55,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 03",
      "Area_Sqm": 96,
      "AHU_Set_Count": 1,
      "Design_TR": 5.37,
      "Design_kW": 1,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 04",
      "Area_Sqm": 97,
      "AHU_Set_Count": 1,
      "Design_TR": 7,
      "Design_kW": 1.5,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 05",
      "Area_Sqm": 96,
      "AHU_Set_Count": 1,
      "Design_TR": 5.37,
      "Design_kW": 1,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 06",
      "Area_Sqm": 63,
      "AHU_Set_Count": 1,
      "Design_TR": 7,
      "Design_kW": 1.5,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 07",
      "Area_Sqm": 75,
      "AHU_Set_Count": 1,
      "Design_TR": 5.37,
      "Design_kW": 1,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 08",
      "Area_Sqm": 56,
      "AHU_Set_Count": 1,
      "Design_TR": 3.75,
      "Design_kW": 0.55,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 09",
      "Area_Sqm": 70,
      "AHU_Set_Count": 1,
      "Design_TR": 5.37,
      "Design_kW": 1,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 10",
      "Area_Sqm": 62,
      "AHU_Set_Count": 1,
      "Design_TR": 5.37,
      "Design_kW": 1,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 11",
      "Area_Sqm": 67,
      "AHU_Set_Count": 1,
      "Design_TR": 7,
      "Design_kW": 1.5,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 12",
      "Area_Sqm": 117,
      "AHU_Set_Count": 1,
      "Design_TR": 7,
      "Design_kW": 1.5,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Retail Shop 13",
      "Area_Sqm": 87,
      "AHU_Set_Count": 1,
      "Design_TR": 6,
      "Design_kW": 0,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurent 5",
      "Area_Sqm": 84.6,
      "AHU_Set_Count": 1,
      "Design_TR": 9,
      "Design_kW": 1.5,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Lawson 108",
      "Area_Sqm": 127.22,
      "AHU_Set_Count": 0,
      "Design_TR": 0,
      "Design_kW": 0,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 01",
      "Area_Sqm": 396,
      "AHU_Set_Count": 1,
      "Design_TR": 10,
      "Design_kW": 1.5,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 02",
      "Area_Sqm": 345,
      "AHU_Set_Count": 1,
      "Design_TR": 16,
      "Design_kW": 2.2,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 03",
      "Area_Sqm": 34.5,
      "AHU_Set_Count": null,
      "Design_TR": 45,
      "Design_kW": 22,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 04",
      "Area_Sqm": 40,
      "AHU_Set_Count": 1,
      "Design_TR": 10,
      "Design_kW": 1.5,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 06",
      "Area_Sqm": 113,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 07",
      "Area_Sqm": 173,
      "AHU_Set_Count": 2,
      "Design_TR": 16,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 08",
      "Area_Sqm": 309,
      "AHU_Set_Count": 1,
      "Design_TR": 48,
      "Design_kW": 15,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Restaurant 09",
      "Area_Sqm": 58,
      "AHU_Set_Count": 2,
      "Design_TR": 18,
      "Design_kW": 3,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Foodyard",
      "Area_Sqm": 3464,
      "AHU_Set_Count": 5,
      "Design_TR": 225,
      "Design_kW": 126,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Office A",
      "Area_Sqm": 1494,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Office B",
      "Area_Sqm": 376,
      "AHU_Set_Count": null,
      "Design_TR": 25.82,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Office C",
      "Area_Sqm": 383,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Office HQ",
      "Area_Sqm": 430,
      "AHU_Set_Count": null,
      "Design_TR": null,
      "Design_kW": null,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Maintenance Shop",
      "Area_Sqm": 561,
      "AHU_Set_Count": 0,
      "Design_TR": 0,
      "Design_kW": 0,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Vehicle Shop",
      "Area_Sqm": 180,
      "AHU_Set_Count": 0,
      "Design_TR": 0,
      "Design_kW": 0,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Banquet PH 1",
      "Area_Sqm": 884,
      "AHU_Set_Count": 6,
      "Design_TR": 94,
      "Design_kW": 24,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Fahrenheit",
      "Area_Sqm": 1398,
      "AHU_Set_Count": 5,
      "Design_TR": 100,
      "Design_kW": 23.9,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Banquet PH 2",
      "Area_Sqm": 888,
      "AHU_Set_Count": 1,
      "Design_TR": 76,
      "Design_kW": 37,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Chinese PH 2",
      "Area_Sqm": 478,
      "AHU_Set_Count": 1,
      "Design_TR": 76,
      "Design_kW": 37,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Bakery PH 2",
      "Area_Sqm": 549,
      "AHU_Set_Count": 3,
      "Design_TR": 30,
      "Design_kW": 9,
      "Matched_Zone_ID": null
    },
    {
      "Venue": "Store Food B1 PH 2",
      "Area_Sqm": 2167,
      "AHU_Set_Count": 0,
      "Design_TR": 0,
      "Design_kW": 0,
      "Matched_Zone_ID": null
    }
  ],
  "generatedAt": "2026-07-18T15:22:00Z"
};
