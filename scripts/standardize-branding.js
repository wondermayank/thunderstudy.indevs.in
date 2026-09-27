const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const brandStyle = `<style data-thunderstudy-brand>
.ts-brand-thunder,.brand-thunder,.wm-thunder{color:#ffffff !important;text-shadow:0 1px 2px rgba(0,0,0,.18)}
.ts-brand-study,.brand-study,.wm-study,.logo-text-accent,.logo-text .logo-text-accent,.boot-title-accent{color:#2563eb !important;-webkit-text-fill-color:#2563eb !important;background:none !important}
[data-theme="dark"] .ts-brand-study,[data-theme="dark"] .brand-study,[data-theme="dark"] .wm-study,[data-theme="dark"] .logo-text-accent,[data-theme="dark"] .logo-text .logo-text-accent,[data-theme="dark"] .boot-title-accent{color:#a78bfa !important;-webkit-text-fill-color:#a78bfa !important}
</style>`;

function collect(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(file, files);
    else if (entry.name.endsWith('.html') && !entry.name.endsWith('.disabled') && entry.name !== 'footer.html' && entry.name !== 'google05ad5deed8d7f7bf.html') files.push(file);
  }
  return files;
}

const files = collect(root);
let changed = 0;
for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  const headMatch = html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i);
  if (!headMatch) continue;
  let head = headMatch[0];

  head = head.replace(/<link\b(?=[^>]*\brel\s*=\s*["'](?:shortcut\s+)?icon["'])[^>]*>\s*/gi, '');
  const favicon = '<link rel="icon" type="image/svg+xml" href="/favicon.svg">';
  if (/<\/title>/i.test(head)) head = head.replace(/<\/title>/i, `</title>\n${favicon}`);
  else head = head.replace(/<\/head>/i, `${favicon}\n</head>`);
  if (head.includes('data-thunderstudy-brand')) {
    head = head.replace(/<style\s+data-thunderstudy-brand>[\s\S]*?<\/style>/i, brandStyle);
  } else {
    head = head.replace(/<\/head>/i, `${brandStyle}\n</head>`);
  }

  html = html.replace(headMatch[0], head);
  html = html.replace(/(<(?:div|span)\b[^>]*class=["'][^"']*\bheader-logo\b[^"']*["'][^>]*>)\s*(?:⚡\s*)?ThunderStudy(\s*<\/(?:div|span)>)/gi, '$1<span class="ts-brand-thunder">Thunder</span><span class="ts-brand-study">Study</span>$2');
  html = html.replace(/(<(?:div|span)\b[^>]*class=["'][^"']*\blogo-text\b[^"']*["'][^>]*>)\s*ThunderStudy(\s*<\/(?:div|span)>)/gi, '$1<span class="ts-brand-thunder">Thunder</span><span class="ts-brand-study">Study</span>$2');

  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    changed += 1;
  }
}

console.log(`Standardized favicon and brand styling in ${changed} of ${files.length} HTML files.`);
