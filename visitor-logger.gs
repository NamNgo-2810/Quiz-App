// Deploy this as a Google Apps Script Web App:
// 1. Open https://script.google.com and create a new project linked to your Sheet
//    (open the Sheet → Extensions → Apps Script)
// 2. Paste this entire file into the editor
// 3. Click Deploy > New deployment > Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy the Web app URL and paste it into index.html where it says APPS_SCRIPT_URL
//
// Recommended sheet headers: Timestamp | Public IP | Local IP | Page | Topic

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const publicIP  = e.parameter.public_ip || 'unknown';
  const localIP   = e.parameter.local_ip  || 'unknown';
  const page      = e.parameter.page      || 'unknown';
  const topic     = e.parameter.topic     || '';

  sheet.appendRow([timestamp, publicIP, localIP, page, topic]);

  return ContentService
    .createTextOutput('ok')
    .setMimeType(ContentService.MimeType.TEXT);
}
