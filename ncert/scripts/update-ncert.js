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
  html = html.replace(/https:\/\/thunderstudy\.indevs\.in\/og-image\.png/g, `${site}/ncert/og-image.png`)
    .replace(/content="\/og-image\.png"/g, 'content="/ncert/og-image.png"');
  html = stripDuplicateMeta(html, /<meta\s+name=["']twitter:card["'][^>]*>\s*/gi);

  if (!/<link[^>]+rel=["']canonical["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, `  <link rel="canonical" href="${url}">\n</head>`);
  }
  if (!/<meta\s+property=["']og:url["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, `  <meta property="og:url" content="${url}">\n</head>`);
  }
  if (!/<meta\s+property=["']og:image["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, '  <meta property="og:image" content="/ncert/og-image.png">\n</head>');
  }
  if (!/<meta\s+name=["']twitter:image["']/i.test(html) && !is404) {
    html = html.replace(/<\/head>/i, '  <meta name="twitter:image" content="/ncert/og-image.png">\n</head>');
  }
  if (!/<link[^>]+href=["']\/ncert\/ncert-design\.css["']/i.test(html) && /<head\b/i.test(html)) {
    html = html.replace(/<\/head>/i, '  <link rel="stylesheet" href="/ncert/ncert-design.css">\n</head>');
  }
  if (!/<link[^>]+href=["']\/ncert\/thunder-ui\.css["']/i.test(html) && /<head\b/i.test(html)) {
    html = html.replace(/<\/head>/i, '  <link rel="stylesheet" href="/ncert/thunder-ui.css">\n  <script src="/ncert/thunder-ui.js"></script>\n</head>');
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

  if (!/<footer\b/i.test(html) && /<\/body>/i.test(html)) {
    const source = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    const footer = source.match(/<footer class="tu-footer">[\s\S]*?<\/footer>/i);
    if (footer) html = html.replace(/<\/body>/i, `${footer[0]}\n</body>`);
  }

  fs.writeFileSync(file, html);
}
console.log(`Updated ${files.length} NCERT HTML pages.`);
