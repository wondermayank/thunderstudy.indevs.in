const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const folders = ['banking', 'ca', 'cat', 'cbse', 'clat', 'dca', 'nda', 'ncert', 'profile', 'search', 'ssc', 'tet', 'upsc'];
const errors = [];
const files = [];

function collect(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(file);
    else if (entry.name.endsWith('.html') && !entry.name.endsWith('.disabled') && entry.name !== 'footer.html' && entry.name !== '404.html' && !/^google[0-9a-f]+\.html$/i.test(entry.name)) files.push(file);
  }
}

for (const folder of folders) collect(path.join(root, folder));

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(root, file);
  if (!html.includes('data-seo-answer="v1"')) errors.push(`${relative}: missing visible answer block`);
  if (!/color:\s*(?:#1f2937|#000000)/i.test(html)) errors.push(`${relative}: answer block lacks explicit light-mode text color`);
  const answerPosition = html.indexOf('data-seo-answer="v1"');
  const footerPosition = html.search(/<footer\b/i);
  if (footerPosition >= 0 && answerPosition > footerPosition) errors.push(`${relative}: answer block is after the footer`);
  for (const token of ['What is this?', 'Who is it for?', 'What is included?', 'Is it free?', 'How can I start?', 'Written/edited by:', 'Last reviewed:', 'Sources used:', 'Corrections:', 'editorial-policy']) {
    if (!html.includes(token)) errors.push(`${relative}: missing ${token}`);
  }

  const blocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (!blocks.length) errors.push(`${relative}: no JSON-LD found`);
  const types = new Set();
  for (const [, raw] of blocks) {
    try {
      const json = JSON.parse(raw);
      for (const item of json['@graph'] || [json]) {
        if (item['@type']) {
          if (Array.isArray(item['@type'])) item['@type'].forEach(type => types.add(type));
          else types.add(item['@type']);
        }
      }
    } catch (error) {
      errors.push(`${relative}: invalid JSON-LD (${error.message})`);
    }
  }
  for (const type of ['EducationalOrganization', 'Person', 'WebSite', 'BreadcrumbList', 'FAQPage']) {
    if (!types.has(type)) errors.push(`${relative}: missing ${type} schema`);
  }
  if (!relative.toLowerCase().startsWith('search\\') && !types.has('LearningResource')) {
    errors.push(`${relative}: missing LearningResource schema`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Folder SEO validation passed: ${files.length} HTML files checked.`);
}
