const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const missing = [];
const duplicates = [];
let total = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html') && !entry.name.endsWith('.disabled') && entry.name !== 'footer.html' && entry.name !== 'google05ad5deed8d7f7bf.html') {
      total += 1;
      const html = fs.readFileSync(file, 'utf8');
      const head = (html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i) || [''])[0];
      const icons = head.match(/<link\b(?=[^>]*\brel\s*=\s*["'](?:shortcut\s+)?icon["'])[^>]*>/gi) || [];
      if (!head.includes('href="/favicon.svg"') || !head.includes('data-thunderstudy-brand')) missing.push(path.relative(root, file));
      if (icons.length !== 1) duplicates.push(`${path.relative(root, file)} (${icons.length} icon links)`);
    }
  }
}

walk(root);
  if (missing.length || duplicates.length) {
  if (missing.length) console.error(`Missing standard favicon/brand style:\n${missing.join('\n')}`);
  if (duplicates.length) console.error(`Unexpected favicon link count:\n${duplicates.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Branding validation passed: ${total} HTML files use one /favicon.svg link and the shared ThunderStudy brand style.`);
}
