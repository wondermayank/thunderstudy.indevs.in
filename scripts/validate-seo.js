const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const baseUrl = 'https://thunderstudy.indevs.in';
const requiredFiles = [
  'robots.txt', 'sitemap.xml', 'sitemap-index.xml', 'llm.txt', 'llms.txt',
  'llms-full.txt', 'full-llm.html', 'ai.txt', 'social.txt', 'knowledge-graph.jsonld'
];
const errors = [];
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`Missing ${file}`);
}

const index = read('index.html');
for (const token of [
  '<title>', 'name="description"', 'rel="canonical"', 'property="og:title"',
  'property="og:description"', 'property="og:image"', 'name="twitter:card"',
  'application/ld+json'
]) {
  if (!index.includes(token)) errors.push(`index.html missing ${token}`);
}

const allText = requiredFiles.concat(['index.html']).map(read).join('\n');
if (allText.includes('https://https://')) errors.push('Malformed double-protocol URL found');

const robots = read('robots.txt');
if (!robots.includes(`Sitemap: ${baseUrl}/sitemap.xml`)) errors.push('robots.txt missing primary sitemap');

const sitemap = read('sitemap.xml');
for (const [, url] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!url.startsWith(baseUrl)) errors.push(`Sitemap URL is off-domain: ${url}`);
}

const jsonLdBlocks = [...index.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
for (const [, block] of jsonLdBlocks) {
  try { JSON.parse(block); } catch (error) {
    errors.push(`Invalid JSON-LD in index.html: ${error.message}`);
  }
}

if (errors.length) {
  console.error(errors.map(error => `SEO ERROR: ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SEO validation passed: ${requiredFiles.length} discovery files, ${jsonLdBlocks.length} JSON-LD blocks, and sitemap URLs checked.`);
}
