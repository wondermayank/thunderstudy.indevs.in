const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, '404.html'), 'utf8');
const footerMatch = source.match(/<!-- FOOTER -->[\s\S]*?<\/footer>/i);
if (!footerMatch) throw new Error('Could not find the canonical footer in 404.html');

const canonical = footerMatch[0]
  .replace(/^<!-- FOOTER -->\s*/i, '')
  .replace(/<footer>/i, '<footer class="ts-site-footer">')
  .replace(/class="wrap"/g, 'class="ts-footer-wrap"')
  .replace(/class="footer-grid"/g, 'class="ts-footer-grid"')
  .replace(/class="footer-brand-col"/g, 'class="ts-footer-brand-col"')
  .replace(/class="footer-brand"/g, 'class="ts-footer-brand"')
  .replace(/class="brand-mark"/g, 'class="ts-brand-mark"')
  .replace(/class="footer-brand-text"/g, 'class="ts-footer-brand-text"')
  .replace(/class="footer-brand-name"/g, 'class="ts-footer-brand-name"')
  .replace(/class="brand-accent"/g, 'class="ts-brand-accent"')
  .replace(/class="footer-brand-by"/g, 'class="ts-footer-brand-by"')
  .replace(/class="footer-desc"/g, 'class="ts-footer-desc"')
  .replace(/class="footer-social"/g, 'class="ts-footer-social"')
  .replace(/class="footer-social-label"/g, 'class="ts-footer-social-label"')
  .replace(/class="footer-social-row"/g, 'class="ts-footer-social-row"')
  .replace(/class="social-btn"/g, 'class="ts-social-btn"')
  .replace(/class="footer-title"/g, 'class="ts-footer-title"')
  .replace(/class="footer-links"/g, 'class="ts-footer-links"')
  .replace(/class="footer-bottom"/g, 'class="ts-footer-bottom"')
  .replace(/class="footer-bottom-inner"/g, 'class="ts-footer-bottom-inner"')
  .replace(/class="footer-copy"/g, 'class="ts-footer-copy"')
  .replace(/class="footer-legal"/g, 'class="ts-footer-legal"')
  .replace(/[ \t]+\n/g, '\n');

function walk(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, result);
    else if (entry.name.toLowerCase().endsWith('.html')) result.push(file);
  }
  return result;
}

let changed = 0;
for (const file of walk(root)) {
  let html = fs.readFileSync(file, 'utf8');
  if (file.toLowerCase().endsWith('google05ad5deed8d7f7bf.html')) continue;
  const hadFooter = /<footer\b[\s\S]*?<\/footer>/i.test(html);
  if (hadFooter) html = html.replace(/<footer\b[\s\S]*?<\/footer>/gi, '');
  if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, `${canonical}\n</body>`);
  else if (file.toLowerCase().endsWith('footer.html')) html = canonical;
  else continue;

  if (/<head\b/i.test(html) && !/href=["']\/footer\.css["']/i.test(html)) {
    html = html.replace(/<\/head>/i, '  <link rel="stylesheet" href="/footer.css">\n</head>');
  }
  fs.writeFileSync(file, html);
  changed += 1;
}

console.log(`Standardized footer markup in ${changed} HTML files.`);
