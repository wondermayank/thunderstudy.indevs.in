const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const root = path.resolve(__dirname, '..');
const site = 'https://thunderstudy.indevs.in';
const errors = [];
const pages = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f);
    else if (/\.html$/i.test(e.name)) pages.push(f);
  }
}
walk(root);

const indexable = pages.filter(file => !/(?:^|[\\/])404\.html$/i.test(file) && !/google[0-9a-f]+\.html$/i.test(file) && !/\bnoindex\b/i.test(fs.readFileSync(file, 'utf8')));
const rel = file => path.relative(root, file).replace(/\\/g, '/');
const expectedUrl = file => {
  const r = rel(file);
  if (r === 'index.html') return `${site}/`;
  if (r.endsWith('/index.html')) return `${site}/${r.slice(0, -'/index.html'.length)}/`;
  return `${site}/${r}`;
};
const canonical = html => (html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || [])[1];

for (const file of indexable) {
  const html = fs.readFileSync(file, 'utf8');
  const name = rel(file);
  for (const token of ['<title>', 'name="description"', 'rel="canonical"', 'property="og:title"', 'property="og:description"', 'property="og:image"', 'name="twitter:card"', 'application/ld+json', '<h1']) {
    if (!html.includes(token)) errors.push(`${name}: missing ${token}`);
  }
  if (canonical(html) !== expectedUrl(file)) errors.push(`${name}: canonical mismatch (${canonical(html)} !== ${expectedUrl(file)})`);
  for (const [, raw] of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(raw); } catch (e) { errors.push(`${name}: invalid JSON-LD (${e.message})`); }
  }
  if (!/data-seo-answer="v1"/i.test(html)) errors.push(`${name}: missing visible answer-first block`);
  if (!/color:\s*(?:#1f2937|#000000)/i.test(html)) errors.push(`${name}: answer block lacks explicit light-mode color`);
  if (/(?:⚡|📗|🎓|📘|📚|⚗|🧬|💼|⚖|🎖|📖|🧾|🏫|🏛|📋|🏦|🔍|📅|📦|📝|🛡|🔧|🏥|📊|👮|🌍|📭|📄|💡)/u.test(html)) errors.push(`${name}: emoji icon remains`);
  for (const match of html.matchAll(/(?:href|src)=["']([^"'#?]+)(?:#[^"']*)?["']/gi)) {
    const target = match[1];
    if (!target || /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(target)) continue;
    if (!target.startsWith('/')) continue;
    const clean = target.replace(/\/$/, '') || '/';
    const candidates = clean === '/' ? ['index.html'] : [`${clean.slice(1)}.html`, `${clean.slice(1)}/index.html`, `${clean.slice(1)}`];
    if (!candidates.some(c => fs.existsSync(path.join(root, c)))) errors.push(`${name}: broken local link ${target}`);
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push('sitemap.xml: duplicate URLs');
for (const url of sitemapUrls) {
  if (!url.startsWith(site)) errors.push(`sitemap.xml: off-domain URL ${url}`);
  if (/\/404\.html$/i.test(url)) errors.push(`sitemap.xml: 404 page included ${url}`);
}
for (const file of indexable) if (!sitemapUrls.includes(expectedUrl(file))) errors.push(`sitemap.xml: missing ${expectedUrl(file)}`);
const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${site}/sitemap.xml`)) errors.push('robots.txt: primary sitemap missing');
for (const required of ['llm.txt', 'full-llm.html', 'ai.txt', 'human.txt', 'robots.txt', 'sitemap.xml']) if (!fs.existsSync(path.join(root, required))) errors.push(`missing root discovery file ${required}`);

if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Overhaul validation passed: ${indexable.length} indexable pages, ${sitemapUrls.length} sitemap URLs, local links, canonical URLs, JSON-LD, robots, and discovery files checked.`);
