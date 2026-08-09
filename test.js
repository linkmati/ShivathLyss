const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('7 - DM/OneShots/ARepeat/generador_minos_7x7.html', 'utf-8');
const dom = new JSDOM(html, { runScripts: "dangerously" });
try {
  dom.window.document.getElementById('btn-generate').click();
  console.log("Success");
} catch (e) {
  console.error(e);
}
