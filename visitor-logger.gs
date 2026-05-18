// Deploy this as a Google Apps Script Web App:
// 1. Open https://script.google.com and create a new project
// 2. Paste this entire file into the editor
// 3. Click Deploy > New deployment > Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy the Web app URL and paste it into index.html where it says APPS_SCRIPT_URL

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const ip        = e.parameter.ip || 'unknown';
  const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const page      = e.parameter.page || 'unknown';

  sheet.appendRow([timestamp, ip, page]);

  return ContentService
    .createTextOutput('ok')
    .setMimeType(ContentService.MimeType.TEXT);
}
