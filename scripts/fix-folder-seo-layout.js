const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const folders = ['banking', 'ca', 'cat', 'cbse', 'clat', 'dca', 'nda', 'ncert', 'search', 'ssc', 'tet', 'upsc'];
const files = [];

function collect(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(file);
    else if (entry.name.endsWith('.html') && !entry.name.endsWith('.disabled') && entry.name !== 'footer.html') files.push(file);
  }
}

const style = `<style data-seo-answer-style>\n.ts-seo-answer{margin:24px auto;max-width:1120px;padding:0 20px;font:inherit;color:#1f2937}.ts-seo-answer__inner{border:1px solid #cbd5e1;border-radius:12px;padding:22px;background:#f8fbff;color:#1f2937}.ts-seo-answer__eyebrow{margin:0 0 6px;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1d4ed8}.ts-seo-answer h2,.ts-seo-answer h3,.ts-seo-answer p{color:#1f2937}.ts-seo-answer h2{margin:0 0 16px;font-size:clamp(1.2rem,2.4vw,1.7rem)}.ts-seo-answer h3{margin:0 0 6px;font-size:1rem}.ts-seo-answer p{margin:0 0 8px;line-height:1.6}.ts-seo-answer__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}.ts-seo-answer__trust{margin-top:18px;padding-top:16px;border-top:1px solid #cbd5e1}.ts-seo-answer a{color:#1d4ed8;font-weight:700}@media(prefers-color-scheme:dark){.ts-seo-answer__inner{background:#1b2433;border-color:#475569;color:#f8fafc}.ts-seo-answer h2,.ts-seo-answer h3,.ts-seo-answer p{color:#f8fafc}.ts-seo-answer__trust{border-color:#475569}.ts-seo-answer a{color:#93c5fd}}\n</style>`;

for (const folder of folders) collect(path.join(root, folder));
let changed = 0;
for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const blockMatch = html.match(/\s*<section class="ts-seo-answer"[\s\S]*?<\/section>/i);
  if (!blockMatch) continue;
  html = html.replace(blockMatch[0], '');
  html = html.replace(/<style data-seo-answer-style>[\s\S]*?<\/style>/i, style);
  const insertion = /<footer\b[^>]*>/i.test(html) ? /<footer\b[^>]*>/i : (/<\/main>/i.test(html) ? /<\/main>/i : /<\/body>/i);
  html = html.replace(insertion, match => `${blockMatch[0].trim()}\n${match}`);
  fs.writeFileSync(file, html, 'utf8');
  changed += 1;
}
console.log(`Moved and restyled ${changed} HTML pages.`);
