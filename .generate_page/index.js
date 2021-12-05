const fs = require("fs");
const { page, style } = require("./page_templates.js");

// grab page name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a page name.");

// create style folder
const dirStyle = `./src/styles/`;
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

// create folder
const dir = `./src/pages/`;
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

function fileWriteCallback(err) {
  if (err) throw err;
}

// page.tsx
fs.writeFile(`${dir}/${name}.tsx`, page(name), fileWriteCallback);
// page.scss
fs.writeFile(`${dirStyle}/${name}.scss`, style(name), fileWriteCallback);
