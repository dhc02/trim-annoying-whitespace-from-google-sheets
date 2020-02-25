/** @OnlyCurrentDoc */

function TrimWhitespace() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var selection = sheet.getSelection();
  var currentCell = selection.getCurrentCell();
  var currentRange = selection.getActiveRange();
  var currentRangeList = selection.getActiveRangeList();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate()
    .trimWhitespace();
  sheet.setActiveRangeList(currentRangeList);
  sheet.setActiveRange(currentRange);
  sheet.setCurrentCell(currentCell);
};