const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'generate_indexes.js');
let content = fs.readFileSync(p, 'utf8');
content = content.replace("fs.readFileSync(path.join(__dirname, 'hub_data.json'), 'utf8')", "fs.readFileSync(path.join(__dirname, 'hub_data.json'), 'utf8').trim().replace(/^\\uFEFF/, '')");
fs.writeFileSync(p, content, 'utf8');
console.log('generate_indexes.js patched.');
