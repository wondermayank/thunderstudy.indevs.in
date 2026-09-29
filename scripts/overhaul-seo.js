const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const site = 'https://thunderstudy.indevs.in';
const reviewed = '2026-09-29';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file, out);
    else if (/\.html$/i.test(entry.name)) out.push(file);
  }
  return out;
}

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function text(value) { return value.replace(/\s+/g, ' ').trim(); }
function first(html, re, fallback = '') { const m = html.match(re); return m ? text(m[1]) : fallback; }
function canonicalFor(file) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (rel === 'index.html') return `${site}/`;
  if (rel.endsWith('/index.html')) return `${site}/${rel.slice(0, -'/index.html'.length)}/`;
  return `${site}/${rel}`;
}
function replaceOrInsert(html, re, replacement, anchor = /<head[^>]*>/i) {
  return re.test(html) ? html.replace(re, replacement) : html.replace(anchor, match => `${match}\n${replacement}`);
}

const icon = '<svg class=&quot;ts-inline-icon&quot; viewBox=&quot;0 0 24 24&quot; width=&quot;1em&quot; height=&quot;1em&quot; aria-hidden=&quot;true&quot; focusable=&quot;false&quot;><path fill=&quot;currentColor&quot; d=&quot;M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm1 14.2h-2v-2h2v2Zm1.7-6.1-.9.8c-.6.5-.8.8-.8 1.6h-2c0-1.2.4-1.9 1.2-2.6l1-.9c.4-.3.6-.7.6-1.2a1.8 1.8 0 0 0-3.5-.4l-1.9-.6a3.8 3.8 0 0 1 7.4 1.1c0 .9-.4 1.6-1.1 2.2Z&quot;/></svg>';
const emoji = /(?:⚡️?|📗|🎓|📘|📚|⚗️?|🧬|💼|⚖️?|🎖️?|📖|🧾|🏫|🏛️?|📋|🏦|🔍|📅|📦|📝|🛡️?|🔧|🏥|📊|👮|🌍|📭|📄|💡|⚔️?|⚙️?|✕|✓|☆|★)/gu;

function addMeta(html, file) {
  const url = canonicalFor(file);
  const title = first(html, /<title[^>]*>([\s\S]*?)<\/title>/i, 'ThunderStudy study resources');
  const desc = first(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
    `Free study material, notes, previous-year questions and exam preparation resources from ThunderStudy.`);
  const safeTitle = esc(title);
  const safeDesc = esc(desc);
  html = replaceOrInsert(html, /<link[^>]+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${url}">`);
  html = replaceOrInsert(html, /<meta[^>]+name=["']description["'][^>]*>/i, `<meta name="description" content="${safeDesc}">`);
  html = replaceOrInsert(html, /<meta[^>]+name=["']robots["'][^>]*>/i, '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">');
  html = replaceOrInsert(html, /<meta[^>]+name=["']theme-color["'][^>]*>/i, '<meta name="theme-color" content="#0077f5">');
  html = replaceOrInsert(html, /<meta[^>]+name=["']mobile-web-app-capable["'][^>]*>/i, '<meta name="mobile-web-app-capable" content="yes">');
  html = replaceOrInsert(html, /<meta[^>]+property=["']og:type["'][^>]*>/i, '<meta property="og:type" content="website">');
  html = replaceOrInsert(html, /<meta[^>]+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${url}">`);
  html = replaceOrInsert(html, /<meta[^>]+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${safeTitle}">`);
  html = replaceOrInsert(html, /<meta[^>]+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${safeDesc}">`);
  html = replaceOrInsert(html, /<meta[^>]+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${site}/og-cover.png">`);
  html = replaceOrInsert(html, /<meta[^>]+property=["']og:site_name["'][^>]*>/i, '<meta property="og:site_name" content="ThunderStudy">');
  html = replaceOrInsert(html, /<meta[^>]+name=["']twitter:card["'][^>]*>/i, '<meta name="twitter:card" content="summary_large_image">');
  html = replaceOrInsert(html, /<meta[^>]+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${safeTitle}">`);
  html = replaceOrInsert(html, /<meta[^>]+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${safeDesc}">`);
  html = replaceOrInsert(html, /<meta[^>]+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${site}/og-cover.png">`);
  html = replaceOrInsert(html, /<link[^>]+rel=["']alternate["'][^>]+hreflang=["']en-IN["'][^>]*>/i, `<link rel="alternate" hreflang="en-IN" href="${url}">`);
  return { html, url, title, desc };
}

function schemaBlock({ url, title, desc, isSearch }) {
  const graph = [
    { '@type': 'EducationalOrganization', '@id': `${site}/#org`, name: 'ThunderStudy', url: site, description: 'Free study notes, books, previous-year questions and mock tests for Indian examinations.', isAccessibleForFree: true, areaServed: { '@type': 'Country', name: 'India' } },
    { '@type': 'WebSite', '@id': `${site}/#website`, name: 'ThunderStudy', url: site, inLanguage: 'en-IN', publisher: { '@id': `${site}/#org` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ThunderStudy', item: `${site}/` }, { '@type': 'ListItem', position: 2, name: title, item: url }] },
    { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: [
      ['Is this ThunderStudy resource free?', 'Yes. ThunderStudy resources are provided free of charge and do not require a paid subscription or login.'],
      ['Who is this page for?', `${title} is intended for students and exam aspirants using free ThunderStudy study resources.`],
      ['How can I start?', 'Use the subject, chapter, paper, download or mock-test links on this page.']
    ].map(([name, answer]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
  ];
  if (!isSearch) graph.push({ '@type': 'LearningResource', '@id': `${url}#learning-resource`, name: title, description: desc, url, learningResourceType: 'Study material', isAccessibleForFree: true, inLanguage: 'en-IN', provider: { '@id': `${site}/#org` } });
  return `<script type="application/ld+json" data-seo-overhaul="2026-09-29">\n${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)}\n</script>`;
}

function addSchema(html, data, file) {
  const hasGraph = /application\/ld\+json/i.test(html);
  const needsFaq = !/"FAQPage"/i.test(html) || !/"BreadcrumbList"/i.test(html) || !/"WebSite"/i.test(html);
  if (!hasGraph || needsFaq) html = html.replace(/<\/head>/i, `${schemaBlock({ ...data, isSearch: /[\\/]search[\\/]index\.html$/i.test(file) })}\n</head>`);
  return html;
}

function addAnswer(html, { title, desc }) {
  if (/data-seo-answer="v1"/i.test(html)) {
    if (/\.ts-seo-answer[^{}]*\{[^}]*color:\s*(?:#1f2937|#000000)/i.test(html)) return html;
    return html.replace(/<\/head>/i, '<style data-seo-answer-contrast>.ts-seo-answer,.ts-seo-answer *{color:#1f2937}</style>\n</head>');
  }
  const block = `<section class="ts-seo-answer" data-seo-answer="v1" aria-labelledby="ts-seo-answer-title"><div class="ts-seo-answer__inner"><p class="ts-seo-answer__eyebrow">ThunderStudy quick answers</p><h2 id="ts-seo-answer-title">${esc(title)}</h2><p>${esc(desc)}</p><div class="ts-seo-answer__grid"><div><h3>Who is it for?</h3><p>Students and exam aspirants looking for focused, free ThunderStudy preparation resources.</p></div><div><h3>What is included?</h3><p>Use the notes, books, previous-year questions, sample papers and mock-test links on this page.</p></div><div><h3>Is it free?</h3><p>Yes. ThunderStudy resources are free and do not require a paid subscription or login.</p></div><div><h3>How can I start?</h3><p>Choose a subject, chapter, paper, download or mock test below.</p></div></div><div class="ts-seo-answer__trust"><p><strong>Written/edited by:</strong> ThunderStudy editorial team, maintained by Wondermayank.</p><p><strong>Last reviewed:</strong> ${reviewed} &middot; <strong>Sources used:</strong> Official references where cited and linked source material.</p><p><strong>Corrections:</strong> <a href="${site}/about#editorial-policy">Read the editorial policy</a> and report broken links through the site contact link.</p></div></div></section>`;
  const style = '<style data-seo-answer-style>.ts-seo-answer{margin:24px auto;max-width:1120px;padding:0 20px;color:#1f2937}.ts-seo-answer__inner{border:1px solid #cbd5e1;border-radius:12px;padding:22px;background:#f8fbff;color:#1f2937}.ts-seo-answer h2,.ts-seo-answer h3,.ts-seo-answer p{color:#1f2937}.ts-seo-answer__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}.ts-seo-answer h2{margin:0 0 12px}.ts-seo-answer p{line-height:1.6}.ts-seo-answer a{color:#1d4ed8;font-weight:700}</style>';
  html = html.replace(/<\/head>/i, `${style}\n</head>`);
  return html.replace(/<footer\b[^>]*>/i, `${block}\n$&`).replace(/<\/main>/i, `${block}\n</main>`);
}

let changed = 0;
for (const file of walk(root)) {
  let html = fs.readFileSync(file, 'utf8');
  if (/\bnoindex\b/i.test(html) || /(?:^|[\\/])404\.html$/i.test(file) || /google[0-9a-f]+\.html$/i.test(file)) continue;
  const before = html;
  html = html.replace(/<svg class="ts-inline-icon"[^>]*>[\s\S]*?<\/svg>/g, icon);
  html = html.replace(/href=["']\/sitemap["']/gi, 'href="/sitemap.xml"');
  html = html.replace(/href=["']\/ncert-design\.css["']/gi, 'href="/ncert/ncert-design.css"');
  html = html.replace(/href=["']\/nda\/favicon\.svg["']/gi, 'href="/favicon.svg"');
  const data = addMeta(html, file); html = data.html;
  html = addSchema(html, data, file);
  html = addAnswer(html, data);
  html = html.replace(emoji, icon);
  html = html.replace(/<img(?![^>]*\balt=)/gi, '<img alt="ThunderStudy study resource"');
  if (!/<h1\b/i.test(html)) {
    const heading = `<h1 class="ts-visually-hidden">${esc(data.title)}</h1>`;
    html = html.replace(/<main\b([^>]*)>/i, `$&${heading}`).replace(/<body\b([^>]*)>/i, `$&${heading}`);
  }
  let answerSeen = false;
  html = html.replace(/<section class="ts-seo-answer"[\s\S]*?<\/section>/gi, block => {
    if (answerSeen) return '';
    answerSeen = true;
    return block;
  });
  if (html !== before) { fs.writeFileSync(file, html, 'utf8'); changed += 1; }
}
console.log(`SEO/AEO/GEO overhaul updated ${changed} indexable HTML pages.`);
