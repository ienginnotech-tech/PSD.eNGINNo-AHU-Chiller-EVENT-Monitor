// ข้อมูลตัวอย่าง (Demo) ใช้แสดงผลก่อนเชื่อมต่อ Google Sheets จริง
// เมื่อ config.js ตั้งค่า SHEETS_API_URL แล้ว ไฟล์นี้จะไม่ถูกใช้งาน
const MOCK_DATA = {
  "Zones": [
    {
      "Zone_ID": "1A",
      "Zone_Name": "Visitor Entrance/Lobby A",
      "Area_Type": "Common",
      "Color_Hex": "#3B82F6",
      "Display_Order": 1
    },
    {
      "Zone_ID": "1B",
      "Zone_Name": "Visitor Entrance/Lobby B",
      "Area_Type": "Common",
      "Color_Hex": "#3B82F6",
      "Display_Order": 2
    },
    {
      "Zone_ID": "2A",
      "Zone_Name": "Common Hall Lobby",
      "Area_Type": "Common",
      "Color_Hex": "#3B82F6",
      "Display_Order": 3
    },
    {
      "Zone_ID": "3A",
      "Zone_Name": "Event Hall 3A",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 4
    },
    {
      "Zone_ID": "3B",
      "Zone_Name": "Event Hall 3B",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 5
    },
    {
      "Zone_ID": "3C",
      "Zone_Name": "Event Hall 3C",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 6
    },
    {
      "Zone_ID": "3-E",
      "Zone_Name": "Event Hall 3-E",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 7
    },
    {
      "Zone_ID": "3F",
      "Zone_Name": "Event Hall 3F",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 8
    },
    {
      "Zone_ID": "4A",
      "Zone_Name": "Event Hall 4A",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 9
    },
    {
      "Zone_ID": "4C",
      "Zone_Name": "Event Hall 4C",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 10
    },
    {
      "Zone_ID": "4D",
      "Zone_Name": "Event Hall 4D",
      "Area_Type": "Event",
      "Color_Hex": "#EC4899",
      "Display_Order": 11
    },
    {
      "Zone_ID": "OUT",
      "Zone_Name": "Outdoor/Unloading Area",
      "Area_Type": "Outdoor",
      "Color_Hex": "#9CA3AF",
      "Display_Order": 12
    }
  ],
  "AHU_Master": [
    {
      "AHU_ID": "AHU-001",
      "Zone": "1A",
      "Area_Name": "Zone 1A",
      "Area_Type": "Common",
      "Location_Detail": "1A - Unit 1",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 12.1,
      "Install_Date": "2019-07-18",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-002",
      "Zone": "1A",
      "Area_Name": "Zone 1A",
      "Area_Type": "Common",
      "Location_Detail": "1A - Unit 2",
      "Design_CFM": 6000,
      "Design_Cooling_Load_kW": 20.1,
      "Install_Date": "2022-02-17",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-003",
      "Zone": "1A",
      "Area_Name": "Zone 1A",
      "Area_Type": "Common",
      "Location_Detail": "1A - Unit 3",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 15.4,
      "Install_Date": "2023-01-02",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-004",
      "Zone": "1A",
      "Area_Name": "Zone 1A",
      "Area_Type": "Common",
      "Location_Detail": "1A - Unit 4",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 40.4,
      "Install_Date": "2020-05-14",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-005",
      "Zone": "1A",
      "Area_Name": "Zone 1A",
      "Area_Type": "Common",
      "Location_Detail": "1A - Unit 5",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 12.1,
      "Install_Date": "2019-03-24",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-006",
      "Zone": "1B",
      "Area_Name": "Zone 1B",
      "Area_Type": "Common",
      "Location_Detail": "1B - Unit 1",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 43,
      "Install_Date": "2021-02-23",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-007",
      "Zone": "1B",
      "Area_Name": "Zone 1B",
      "Area_Type": "Common",
      "Location_Detail": "1B - Unit 2",
      "Design_CFM": 6000,
      "Design_Cooling_Load_kW": 22.6,
      "Install_Date": "2021-12-07",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-008",
      "Zone": "1B",
      "Area_Name": "Zone 1B",
      "Area_Type": "Common",
      "Location_Detail": "1B - Unit 3",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 42.1,
      "Install_Date": "2020-07-08",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-009",
      "Zone": "2A",
      "Area_Name": "Zone 2A",
      "Area_Type": "Common",
      "Location_Detail": "2A - Unit 1",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 30,
      "Install_Date": "2018-01-14",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-010",
      "Zone": "2A",
      "Area_Name": "Zone 2A",
      "Area_Type": "Common",
      "Location_Detail": "2A - Unit 2",
      "Design_CFM": 6000,
      "Design_Cooling_Load_kW": 22.5,
      "Install_Date": "2019-11-28",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-011",
      "Zone": "2A",
      "Area_Name": "Zone 2A",
      "Area_Type": "Common",
      "Location_Detail": "2A - Unit 3",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 26.8,
      "Install_Date": "2023-05-15",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-012",
      "Zone": "2A",
      "Area_Name": "Zone 2A",
      "Area_Type": "Common",
      "Location_Detail": "2A - Unit 4",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 26.5,
      "Install_Date": "2020-02-18",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-013",
      "Zone": "2A",
      "Area_Name": "Zone 2A",
      "Area_Type": "Common",
      "Location_Detail": "2A - Unit 5",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 13.8,
      "Install_Date": "2019-12-06",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-014",
      "Zone": "3A",
      "Area_Name": "Zone 3A",
      "Area_Type": "Event",
      "Location_Detail": "3A - Unit 1",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 30,
      "Install_Date": "2022-02-03",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-015",
      "Zone": "3A",
      "Area_Name": "Zone 3A",
      "Area_Type": "Event",
      "Location_Detail": "3A - Unit 2",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 35.7,
      "Install_Date": "2023-06-16",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-016",
      "Zone": "3A",
      "Area_Name": "Zone 3A",
      "Area_Type": "Event",
      "Location_Detail": "3A - Unit 3",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 33.4,
      "Install_Date": "2019-08-24",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-017",
      "Zone": "3A",
      "Area_Name": "Zone 3A",
      "Area_Type": "Event",
      "Location_Detail": "3A - Unit 4",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 44.4,
      "Install_Date": "2020-01-11",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-018",
      "Zone": "3A",
      "Area_Name": "Zone 3A",
      "Area_Type": "Event",
      "Location_Detail": "3A - Unit 5",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 41,
      "Install_Date": "2018-05-23",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-019",
      "Zone": "3B",
      "Area_Name": "Zone 3B",
      "Area_Type": "Event",
      "Location_Detail": "3B - Unit 1",
      "Design_CFM": 6000,
      "Design_Cooling_Load_kW": 22.9,
      "Install_Date": "2018-06-13",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-020",
      "Zone": "3B",
      "Area_Name": "Zone 3B",
      "Area_Type": "Event",
      "Location_Detail": "3B - Unit 2",
      "Design_CFM": 6000,
      "Design_Cooling_Load_kW": 23.3,
      "Install_Date": "2020-02-18",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-021",
      "Zone": "3B",
      "Area_Name": "Zone 3B",
      "Area_Type": "Event",
      "Location_Detail": "3B - Unit 3",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 28.3,
      "Install_Date": "2022-09-05",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-022",
      "Zone": "3C",
      "Area_Name": "Zone 3C",
      "Area_Type": "Event",
      "Location_Detail": "3C - Unit 1",
      "Design_CFM": 6000,
      "Design_Cooling_Load_kW": 20.9,
      "Install_Date": "2019-03-06",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-023",
      "Zone": "3C",
      "Area_Name": "Zone 3C",
      "Area_Type": "Event",
      "Location_Detail": "3C - Unit 2",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 29.5,
      "Install_Date": "2021-10-31",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-024",
      "Zone": "3C",
      "Area_Name": "Zone 3C",
      "Area_Type": "Event",
      "Location_Detail": "3C - Unit 3",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 15,
      "Install_Date": "2018-12-17",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-025",
      "Zone": "3C",
      "Area_Name": "Zone 3C",
      "Area_Type": "Event",
      "Location_Detail": "3C - Unit 4",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 43.6,
      "Install_Date": "2018-12-01",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-026",
      "Zone": "3-E",
      "Area_Name": "Zone 3-E",
      "Area_Type": "Event",
      "Location_Detail": "3-E - Unit 1",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 34.3,
      "Install_Date": "2023-03-11",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-027",
      "Zone": "3-E",
      "Area_Name": "Zone 3-E",
      "Area_Type": "Event",
      "Location_Detail": "3-E - Unit 2",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 41.1,
      "Install_Date": "2019-10-27",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-028",
      "Zone": "3-E",
      "Area_Name": "Zone 3-E",
      "Area_Type": "Event",
      "Location_Detail": "3-E - Unit 3",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 13.1,
      "Install_Date": "2018-03-07",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-029",
      "Zone": "3-E",
      "Area_Name": "Zone 3-E",
      "Area_Type": "Event",
      "Location_Detail": "3-E - Unit 4",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 28,
      "Install_Date": "2018-05-16",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-030",
      "Zone": "3F",
      "Area_Name": "Zone 3F",
      "Area_Type": "Event",
      "Location_Detail": "3F - Unit 1",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 44.4,
      "Install_Date": "2019-10-07",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-031",
      "Zone": "3F",
      "Area_Name": "Zone 3F",
      "Area_Type": "Event",
      "Location_Detail": "3F - Unit 2",
      "Design_CFM": 6000,
      "Design_Cooling_Load_kW": 22.3,
      "Install_Date": "2020-03-21",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-032",
      "Zone": "3F",
      "Area_Name": "Zone 3F",
      "Area_Type": "Event",
      "Location_Detail": "3F - Unit 3",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 33.7,
      "Install_Date": "2018-10-13",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-033",
      "Zone": "4A",
      "Area_Name": "Zone 4A",
      "Area_Type": "Event",
      "Location_Detail": "4A - Unit 1",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 42.7,
      "Install_Date": "2022-03-10",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-034",
      "Zone": "4A",
      "Area_Name": "Zone 4A",
      "Area_Type": "Event",
      "Location_Detail": "4A - Unit 2",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 42.1,
      "Install_Date": "2021-04-10",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-035",
      "Zone": "4A",
      "Area_Name": "Zone 4A",
      "Area_Type": "Event",
      "Location_Detail": "4A - Unit 3",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 34.8,
      "Install_Date": "2018-10-11",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-036",
      "Zone": "4C",
      "Area_Name": "Zone 4C",
      "Area_Type": "Event",
      "Location_Detail": "4C - Unit 1",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 33.5,
      "Install_Date": "2018-04-07",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-037",
      "Zone": "4C",
      "Area_Name": "Zone 4C",
      "Area_Type": "Event",
      "Location_Detail": "4C - Unit 2",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 12.8,
      "Install_Date": "2018-11-24",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-038",
      "Zone": "4C",
      "Area_Name": "Zone 4C",
      "Area_Type": "Event",
      "Location_Detail": "4C - Unit 3",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 36,
      "Install_Date": "2020-02-28",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-039",
      "Zone": "4C",
      "Area_Name": "Zone 4C",
      "Area_Type": "Event",
      "Location_Detail": "4C - Unit 4",
      "Design_CFM": 10000,
      "Design_Cooling_Load_kW": 36,
      "Install_Date": "2020-08-16",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-040",
      "Zone": "4C",
      "Area_Name": "Zone 4C",
      "Area_Type": "Event",
      "Location_Detail": "4C - Unit 5",
      "Design_CFM": 12000,
      "Design_Cooling_Load_kW": 41.3,
      "Install_Date": "2021-02-07",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-041",
      "Zone": "4D",
      "Area_Name": "Zone 4D",
      "Area_Type": "Event",
      "Location_Detail": "4D - Unit 1",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 15.4,
      "Install_Date": "2021-01-04",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-042",
      "Zone": "4D",
      "Area_Name": "Zone 4D",
      "Area_Type": "Event",
      "Location_Detail": "4D - Unit 2",
      "Design_CFM": 8000,
      "Design_Cooling_Load_kW": 29.8,
      "Install_Date": "2019-11-28",
      "Notes": null
    },
    {
      "AHU_ID": "AHU-043",
      "Zone": "4D",
      "Area_Name": "Zone 4D",
      "Area_Type": "Event",
      "Location_Detail": "4D - Unit 3",
      "Design_CFM": 4000,
      "Design_Cooling_Load_kW": 13.5,
      "Install_Date": "2018-11-20",
      "Notes": null
    }
  ],
  "Live_Status": [
    {
      "AHU_ID": "AHU-001",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 26.3,
      "RH_Percent": 62,
      "Last_Updated": "2026-07-01 10:22"
    },
    {
      "AHU_ID": "AHU-002",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:27"
    },
    {
      "AHU_ID": "AHU-003",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:24"
    },
    {
      "AHU_ID": "AHU-004",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 14.8,
      "Return_Air_Temp_C": 24.9,
      "RH_Percent": 60,
      "Last_Updated": "2026-07-01 10:30"
    },
    {
      "AHU_ID": "AHU-005",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:15"
    },
    {
      "AHU_ID": "AHU-006",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15.3,
      "Return_Air_Temp_C": 26.1,
      "RH_Percent": 61,
      "Last_Updated": "2026-07-01 10:21"
    },
    {
      "AHU_ID": "AHU-007",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.2,
      "Return_Air_Temp_C": 25,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-01 10:28"
    },
    {
      "AHU_ID": "AHU-008",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:28"
    },
    {
      "AHU_ID": "AHU-009",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:26"
    },
    {
      "AHU_ID": "AHU-010",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:25"
    },
    {
      "AHU_ID": "AHU-011",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 15.4,
      "Return_Air_Temp_C": 26.3,
      "RH_Percent": 60,
      "Last_Updated": "2026-07-01 10:24"
    },
    {
      "AHU_ID": "AHU-012",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:18"
    },
    {
      "AHU_ID": "AHU-013",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:16"
    },
    {
      "AHU_ID": "AHU-014",
      "Status": "Stopped",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:27"
    },
    {
      "AHU_ID": "AHU-015",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.7,
      "Return_Air_Temp_C": 23.1,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-01 10:23"
    },
    {
      "AHU_ID": "AHU-016",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:30"
    },
    {
      "AHU_ID": "AHU-017",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.2,
      "Return_Air_Temp_C": 26.2,
      "RH_Percent": 61,
      "Last_Updated": "2026-07-01 10:20"
    },
    {
      "AHU_ID": "AHU-018",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.3,
      "Return_Air_Temp_C": 24.7,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-01 10:26"
    },
    {
      "AHU_ID": "AHU-019",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:23"
    },
    {
      "AHU_ID": "AHU-020",
      "Status": "Standby",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 23.7,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-01 10:17"
    },
    {
      "AHU_ID": "AHU-021",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 13.7,
      "Return_Air_Temp_C": 26,
      "RH_Percent": 48,
      "Last_Updated": "2026-07-01 10:27"
    },
    {
      "AHU_ID": "AHU-022",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 14.7,
      "Return_Air_Temp_C": 25.8,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-01 10:23"
    },
    {
      "AHU_ID": "AHU-023",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.1,
      "Return_Air_Temp_C": 23.5,
      "RH_Percent": 50,
      "Last_Updated": "2026-07-01 10:22"
    },
    {
      "AHU_ID": "AHU-024",
      "Status": "Standby",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 26.1,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-01 10:16"
    },
    {
      "AHU_ID": "AHU-025",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:29"
    },
    {
      "AHU_ID": "AHU-026",
      "Status": "Alarm",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:28"
    },
    {
      "AHU_ID": "AHU-027",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.7,
      "Return_Air_Temp_C": 24.7,
      "RH_Percent": 61,
      "Last_Updated": "2026-07-01 10:18"
    },
    {
      "AHU_ID": "AHU-028",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.6,
      "Return_Air_Temp_C": 26.4,
      "RH_Percent": 52,
      "Last_Updated": "2026-07-01 10:16"
    },
    {
      "AHU_ID": "AHU-029",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 14.6,
      "Return_Air_Temp_C": 25.6,
      "RH_Percent": 60,
      "Last_Updated": "2026-07-01 10:15"
    },
    {
      "AHU_ID": "AHU-030",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 13.4,
      "Return_Air_Temp_C": 26.4,
      "RH_Percent": 57,
      "Last_Updated": "2026-07-01 10:29"
    },
    {
      "AHU_ID": "AHU-031",
      "Status": "Alarm",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:29"
    },
    {
      "AHU_ID": "AHU-032",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 14,
      "Return_Air_Temp_C": 26,
      "RH_Percent": 50,
      "Last_Updated": "2026-07-01 10:29"
    },
    {
      "AHU_ID": "AHU-033",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:25"
    },
    {
      "AHU_ID": "AHU-034",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14.5,
      "Return_Air_Temp_C": 23.8,
      "RH_Percent": 49,
      "Last_Updated": "2026-07-01 10:23"
    },
    {
      "AHU_ID": "AHU-035",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:28"
    },
    {
      "AHU_ID": "AHU-036",
      "Status": "Standby",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": 26.3,
      "RH_Percent": 51,
      "Last_Updated": "2026-07-01 10:20"
    },
    {
      "AHU_ID": "AHU-037",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 13.7,
      "Return_Air_Temp_C": 25.4,
      "RH_Percent": 52,
      "Last_Updated": "2026-07-01 10:16"
    },
    {
      "AHU_ID": "AHU-038",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 12.5,
      "Return_Air_Temp_C": 25.2,
      "RH_Percent": 57,
      "Last_Updated": "2026-07-01 10:27"
    },
    {
      "AHU_ID": "AHU-039",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 14,
      "Return_Air_Temp_C": 23.5,
      "RH_Percent": 53,
      "Last_Updated": "2026-07-01 10:28"
    },
    {
      "AHU_ID": "AHU-040",
      "Status": "Running",
      "Fan_Mode": "Fan Only",
      "Supply_Air_Temp_C": 13.4,
      "Return_Air_Temp_C": 24.5,
      "RH_Percent": 56,
      "Last_Updated": "2026-07-01 10:21"
    },
    {
      "AHU_ID": "AHU-041",
      "Status": "Stopped",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:21"
    },
    {
      "AHU_ID": "AHU-042",
      "Status": "Alarm",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": null,
      "Return_Air_Temp_C": null,
      "RH_Percent": null,
      "Last_Updated": "2026-07-01 10:26"
    },
    {
      "AHU_ID": "AHU-043",
      "Status": "Running",
      "Fan_Mode": "Cooling",
      "Supply_Air_Temp_C": 15.2,
      "Return_Air_Temp_C": 25.6,
      "RH_Percent": 50,
      "Last_Updated": "2026-07-01 10:22"
    }
  ],
  "Chiller_Plant_Log": [
    {
      "Timestamp": "2026-07-01 06:00",
      "Outdoor_Temp_C": 29.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.2,
      "Delta_T_C": 5,
      "Flow_m3h": 1169,
      "Chiller_kWh": 4219,
      "AHU_Fans_kWh": 2226,
      "Total_kWh": 6445,
      "Energy_vs_Yesterday_Pct": -3.9
    },
    {
      "Timestamp": "2026-07-01 06:30",
      "Outdoor_Temp_C": 29.5,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.7,
      "Delta_T_C": 5.5,
      "Flow_m3h": 1110,
      "Chiller_kWh": 4171,
      "AHU_Fans_kWh": 2215,
      "Total_kWh": 6386,
      "Energy_vs_Yesterday_Pct": -11.3
    },
    {
      "Timestamp": "2026-07-01 07:00",
      "Outdoor_Temp_C": 30,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.1,
      "Delta_T_C": 4.9,
      "Flow_m3h": 1296,
      "Chiller_kWh": 3745,
      "AHU_Fans_kWh": 2021,
      "Total_kWh": 5766,
      "Energy_vs_Yesterday_Pct": -0.7
    },
    {
      "Timestamp": "2026-07-01 07:30",
      "Outdoor_Temp_C": 31.4,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.1,
      "Delta_T_C": 4.9,
      "Flow_m3h": 1289,
      "Chiller_kWh": 4222,
      "AHU_Fans_kWh": 1875,
      "Total_kWh": 6097,
      "Energy_vs_Yesterday_Pct": -11.4
    },
    {
      "Timestamp": "2026-07-01 08:00",
      "Outdoor_Temp_C": 30.2,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.4,
      "Delta_T_C": 5.2,
      "Flow_m3h": 1186,
      "Chiller_kWh": 3638,
      "AHU_Fans_kWh": 1982,
      "Total_kWh": 5620,
      "Energy_vs_Yesterday_Pct": 2.9
    },
    {
      "Timestamp": "2026-07-01 08:30",
      "Outdoor_Temp_C": 33.8,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12,
      "Delta_T_C": 4.8,
      "Flow_m3h": 1172,
      "Chiller_kWh": 4214,
      "AHU_Fans_kWh": 2133,
      "Total_kWh": 6347,
      "Energy_vs_Yesterday_Pct": -6.3
    },
    {
      "Timestamp": "2026-07-01 09:00",
      "Outdoor_Temp_C": 31.4,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.7,
      "Delta_T_C": 5.5,
      "Flow_m3h": 1295,
      "Chiller_kWh": 4275,
      "AHU_Fans_kWh": 2263,
      "Total_kWh": 6538,
      "Energy_vs_Yesterday_Pct": -8.2
    },
    {
      "Timestamp": "2026-07-01 09:30",
      "Outdoor_Temp_C": 29,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.6,
      "Delta_T_C": 5.4,
      "Flow_m3h": 1135,
      "Chiller_kWh": 3971,
      "AHU_Fans_kWh": 1890,
      "Total_kWh": 5861,
      "Energy_vs_Yesterday_Pct": 2.8
    },
    {
      "Timestamp": "2026-07-01 10:00",
      "Outdoor_Temp_C": 32.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Delta_T_C": 5.1,
      "Flow_m3h": 1234,
      "Chiller_kWh": 4262,
      "AHU_Fans_kWh": 1924,
      "Total_kWh": 6186,
      "Energy_vs_Yesterday_Pct": -9.5
    },
    {
      "Timestamp": "2026-07-01 10:30",
      "Outdoor_Temp_C": 32.2,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Delta_T_C": 5.1,
      "Flow_m3h": 1108,
      "Chiller_kWh": 4024,
      "AHU_Fans_kWh": 1900,
      "Total_kWh": 5924,
      "Energy_vs_Yesterday_Pct": 2.7
    },
    {
      "Timestamp": "2026-07-01 11:00",
      "Outdoor_Temp_C": 30.1,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.7,
      "Delta_T_C": 5.5,
      "Flow_m3h": 1274,
      "Chiller_kWh": 3801,
      "AHU_Fans_kWh": 2130,
      "Total_kWh": 5931,
      "Energy_vs_Yesterday_Pct": -5.6
    },
    {
      "Timestamp": "2026-07-01 11:30",
      "Outdoor_Temp_C": 29.7,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.1,
      "Delta_T_C": 4.9,
      "Flow_m3h": 1255,
      "Chiller_kWh": 3916,
      "AHU_Fans_kWh": 2055,
      "Total_kWh": 5971,
      "Energy_vs_Yesterday_Pct": -1.1
    },
    {
      "Timestamp": "2026-07-01 12:00",
      "Outdoor_Temp_C": 33.1,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.3,
      "Delta_T_C": 5.1,
      "Flow_m3h": 1106,
      "Chiller_kWh": 4389,
      "AHU_Fans_kWh": 1931,
      "Total_kWh": 6320,
      "Energy_vs_Yesterday_Pct": -2.7
    },
    {
      "Timestamp": "2026-07-01 12:30",
      "Outdoor_Temp_C": 33.9,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12,
      "Delta_T_C": 4.8,
      "Flow_m3h": 1219,
      "Chiller_kWh": 3911,
      "AHU_Fans_kWh": 2193,
      "Total_kWh": 6104,
      "Energy_vs_Yesterday_Pct": -5
    },
    {
      "Timestamp": "2026-07-01 13:00",
      "Outdoor_Temp_C": 33.9,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.1,
      "Delta_T_C": 4.9,
      "Flow_m3h": 1280,
      "Chiller_kWh": 3771,
      "AHU_Fans_kWh": 1822,
      "Total_kWh": 5593,
      "Energy_vs_Yesterday_Pct": -5
    },
    {
      "Timestamp": "2026-07-01 13:30",
      "Outdoor_Temp_C": 31.1,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.6,
      "Delta_T_C": 5.4,
      "Flow_m3h": 1237,
      "Chiller_kWh": 4446,
      "AHU_Fans_kWh": 2169,
      "Total_kWh": 6615,
      "Energy_vs_Yesterday_Pct": -8.8
    },
    {
      "Timestamp": "2026-07-01 14:00",
      "Outdoor_Temp_C": 30.6,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.8,
      "Delta_T_C": 5.6,
      "Flow_m3h": 1284,
      "Chiller_kWh": 4161,
      "AHU_Fans_kWh": 2132,
      "Total_kWh": 6293,
      "Energy_vs_Yesterday_Pct": -10
    },
    {
      "Timestamp": "2026-07-01 14:30",
      "Outdoor_Temp_C": 33.4,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.4,
      "Delta_T_C": 5.2,
      "Flow_m3h": 1233,
      "Chiller_kWh": 3894,
      "AHU_Fans_kWh": 2149,
      "Total_kWh": 6043,
      "Energy_vs_Yesterday_Pct": -3.1
    },
    {
      "Timestamp": "2026-07-01 15:00",
      "Outdoor_Temp_C": 29.2,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.5,
      "Delta_T_C": 5.3,
      "Flow_m3h": 1176,
      "Chiller_kWh": 4273,
      "AHU_Fans_kWh": 1887,
      "Total_kWh": 6160,
      "Energy_vs_Yesterday_Pct": -2.9
    },
    {
      "Timestamp": "2026-07-01 15:30",
      "Outdoor_Temp_C": 30.4,
      "CHWS_Temp_C": 7.2,
      "CHWR_Temp_C": 12.7,
      "Delta_T_C": 5.5,
      "Flow_m3h": 1161,
      "Chiller_kWh": 3789,
      "AHU_Fans_kWh": 2193,
      "Total_kWh": 5982,
      "Energy_vs_Yesterday_Pct": -2.3
    }
  ],
  "Alarms": [
    {
      "Timestamp": "2026-07-01 10:22",
      "AHU_ID": "AHU-021",
      "Alarm_Type": "High Supply Air Temp.",
      "Severity": "Critical",
      "Status": "Active"
    },
    {
      "Timestamp": "2026-07-01 10:19",
      "AHU_ID": "AHU-030",
      "Alarm_Type": "Filter Differential High",
      "Severity": "Warning",
      "Status": "Active"
    },
    {
      "Timestamp": "2026-07-01 10:13",
      "AHU_ID": "CHWP-02",
      "Alarm_Type": "Flow Low",
      "Severity": "Warning",
      "Status": "Cleared"
    }
  ],
  "generatedAt": "2026-07-01T10:30:00Z"
};
