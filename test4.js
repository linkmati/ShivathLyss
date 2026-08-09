const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('7 - DM/OneShots/ARepeat/generador_minos_7x7.html', 'utf-8');
const dom = new JSDOM(html, { runScripts: "dangerously" });
try {
  dom.window.document.getElementById('btn-generate').click();
  // try clicking a cell
  const cells = dom.window.document.querySelectorAll('.cell.active');
  if (cells.length > 0) {
    cells[0].click(); // selectCell
  }
  // try changing dropdown
  const presetDropdown = dom.window.document.getElementById('inspect-preset');
  presetDropdown.value = "CUSTOM";
  presetDropdown.dispatchEvent(new dom.window.Event('change'));
  console.log("All interactions succeeded.");
} catch (e) {
  console.error("Runtime Error:", e);
}
