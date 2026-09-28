const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const site = 'https://thunderstudy.indevs.in';
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'scripts') continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.toLowerCase().endsWith('.html')) files.push(file);
  }
}

function pageUrl(file) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (rel === 'index.html') return `${site}/ncert/`;
  if (rel === 'book/index.html') return `${site}/ncert/book`;
  if (rel === 'notes/index.html') return `${site}/ncert/notes`;
  return `${site}/ncert/${rel.replace(/\.html$/, '')}`;
}

function summary(file) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (rel === 'index.html') return 'ThunderStudy provides free NCERT books, solutions and study resources for Classes 6 to 12, including English and Hindi medium textbooks.';
  if (rel === 'hindi-medium.html') return 'This page lists free NCERT Hindi-medium textbooks for school students, with class-wise and subject-wise access.';
  if (rel === 'book/index.html') return 'Use this NCERT textbook finder to choose a class, subject and language, then open the relevant official or hosted textbook.';
  if (rel === 'notes/index.html') return 'ThunderStudy provides free chapter-wise NCERT notes and PDF study material for school revision.';
  const match = rel.match(/class-(\d+)/);
  if (match) return `This page provides free NCERT Class ${match[1]} textbooks in English and Hindi medium, organized by subject for quick study and download.`;
  return 'ThunderStudy provides free NCERT study material and textbook resources for students in India.';
}

function stripDuplicateMeta(html, pattern) {
  let first = true;
  return html.replace(pattern, match => {
    if (first) { first = false; return match; }
    return '';
  });
}

walk(root);
for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const url = pageUrl(file);
  const is404 = path.basename(file) === '404.html';

  html = html.replace(/https:\/\/https:\/\//g, 'https://').replace(/og-cover\.png/g, 'og-image.png');
  html = stripDuplicateMeta(html, /<meta\s+name=["']twitter:card["'][^>]*>\s*/gi);

  if (!/<link[^>]+rel=["']canonical["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, `  <link rel="canonical" href="${url}">\n</head>`);
  }
  if (!/<meta\s+property=["']og:url["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, `  <meta property="og:url" content="${url}">\n</head>`);
  }
  if (!/<meta\s+property=["']og:image["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, '  <meta property="og:image" content="/og-image.png">\n</head>');
  }
  if (!/<meta\s+name=["']twitter:image["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, '  <meta name="twitter:image" content="/og-image.png">\n</head>');
  }
  if (!/<link[^>]+href=["']\/ncert-design\.css["']/i.test(html) && /<head\b/i.test(html)) {
    html = html.replace(/<\/head>/i, '  <link rel="stylesheet" href="/ncert-design.css">\n</head>');
  }
  if (!/<p[^>]+class=["']ts-aeo-summary["']/i.test(html) && !is404) {
    const firstH1 = html.search(/<h1\b[^>]*>[\s\S]*?<\/h1>/i);
    if (firstH1 >= 0) {
      const end = html.indexOf('</h1>', firstH1) + 5;
      html = html.slice(0, end) + `\n<p class="ts-aeo-summary">${summary(file)}</p>` + html.slice(end);
    }
  }
  if (!is404 && !html.includes('ncert-page-knowledge-graph')) {
    const graph = `\n<script id="ncert-page-knowledge-graph" type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'EducationalOrganization', '@id': `${site}/#org`, name: 'ThunderStudy', url: site, description: 'Free NCERT books, notes and study resources for Indian students.', isAccessibleForFree: true, areaServed: { '@type': 'Country', name: 'India' }, sameAs: ['https://t.me/Thunderstudy_official', 'https://instagram.com/Thunderstudyx', 'https://youtube.com/@Thunderstudy_official', 'https://twitter.com/Thunderstudyx', 'https://github.com/wondermayank', 'https://github.com/ThunderStudy'] },
        { '@type': 'WebSite', '@id': `${site}/#website`, name: 'ThunderStudy', url: site, publisher: { '@id': `${site}/#org` }, inLanguage: 'en-IN' },
        { '@type': 'WebPage', '@id': `${url}#webpage`, name: (html.match(/<title>([\s\S]*?)<\/title>/i) || ['', 'ThunderStudy NCERT'])[1].trim(), url, isPartOf: { '@id': `${site}/#website` }, about: { '@id': `${site}/#org` }, inLanguage: 'en-IN', isAccessibleForFree: true }
      ]
    })}</script>\n`;
    html = html.replace(/<\/head>/i, graph + '</head>');
  }

  html = html.replace(/https:\/\/www\.instagram\.com\/wondermayank/g, 'https://instagram.com/Thunderstudyx')
    .replace(/https:\/\/www\.youtube\.com\/@wondermayank/g, 'https://youtube.com/@Thunderstudy_official')
    .replace(/https:\/\/x\.com\/wondermayankx/g, 'https://twitter.com/Thunderstudyx')
    .replace(/https:\/\/t\.me\/wondermayank/g, 'https://t.me/Thunderstudy_official')
    .replace(/aria-label="Wondermayank on Instagram"/g, 'aria-label="ThunderStudyx on Instagram"')
    .replace(/aria-label="Wondermayank on YouTube"/g, 'aria-label="ThunderStudy official on YouTube"')
    .replace(/aria-label="Wondermayank on X"/g, 'aria-label="ThunderStudyx on X"')
    .replace(/aria-label="Wondermayank on Telegram"/g, 'aria-label="ThunderStudy official on Telegram"')
    .replace(/© 2026 ThunderStudy by wondermayank\. All rights reserved\./g, '© 2025 Thunder · by wondermayank');

  const githubLinks = '<a class="ts-social-btn" href="https://github.com/wondermayank" target="_blank" rel="noopener noreferrer" aria-label="Wondermayank on GitHub" title="GitHub"><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.01c.85 0 1.7.11 2.49.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a><a class="ts-social-btn" href="https://github.com/ThunderStudy" target="_blank" rel="noopener noreferrer" aria-label="ThunderStudy on GitHub" title="ThunderStudy GitHub"><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.01c.85 0 1.7.11 2.49.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a>';
  if (!html.includes('https://github.com/wondermayank')) {
    html = html.replace(/(<div class="ts-footer-social-row">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/i, `$1`);
    html = html.replace(/(<div class="ts-footer-social-row">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/i, `$1${githubLinks}$2`);
  }

  fs.writeFileSync(file, html);
}
console.log(`Updated ${files.length} NCERT HTML pages.`);
