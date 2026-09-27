const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const folders = ['banking', 'ca', 'cat', 'cbse', 'clat', 'dca', 'nda', 'ncert', 'search', 'ssc', 'tet', 'upsc'];
const reviewedDate = '2026-09-27';
const siteUrl = 'https://thunderstudy.indevs.in';
const correctionUrl = 'https://wondermayank.in/contact';
const policyUrl = `${siteUrl}/about#editorial-policy`;

const decode = value => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#x2013;|&ndash;/g, '-')
  .replace(/&#x2014;|&mdash;/g, '-');

const textFrom = (html, pattern, fallback = '') => {
  const match = html.match(pattern);
  return match ? decode(match[1].replace(/\s+/g, ' ').trim()) : fallback;
};

function listHtmlFiles(dir, result = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) listHtmlFiles(absolute, result);
    else if (entry.name.endsWith('.html') && !entry.name.endsWith('.disabled')) result.push(absolute);
  }
  return result;
}

function breadcrumbItems(url, title) {
  const parsed = new URL(url);
  const segments = parsed.pathname.split('/').filter(Boolean);
  const items = [{ '@type': 'ListItem', position: 1, name: 'ThunderStudy', item: `${siteUrl}/` }];
  let current = siteUrl;
  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;
    current += `/${segment}`;
    const label = isLast
      ? title
      : decode(segment.replace(/\.(html|htm)$/i, '').replace(/[-_]/g, ' '))
          .replace(/\b\w/g, letter => letter.toUpperCase());
    items.push({ '@type': 'ListItem', position: items.length + 1, name: label, item: current });
  });
  return items;
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildVisibleBlock({ title, description, url, examYear }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const topic = escapeHtml(title.replace(/\s*[|—-]\s*ThunderStudy.*$/i, '').trim() || title);
  const yearLine = examYear === 'Not applicable' ? examYear : `Current cycle: ${escapeHtml(examYear)}`;
  return `
<section class="ts-seo-answer" data-seo-answer="v1" aria-labelledby="ts-seo-answer-title">
  <div class="ts-seo-answer__inner">
    <p class="ts-seo-answer__eyebrow">ThunderStudy quick answers</p>
    <h2 id="ts-seo-answer-title">${safeTitle}</h2>
    <div class="ts-seo-answer__grid">
      <div><h3>What is this?</h3><p>${safeTitle} is a free ThunderStudy study resource for focused exam preparation. ${safeDescription}</p></div>
      <div><h3>Who is it for?</h3><p>Students and exam aspirants preparing for ${topic}, board exams, entrance tests or government recruitment exams.</p></div>
      <div><h3>What is included?</h3><p>This page includes the notes, books, PYQs, formulas, sample papers, syllabus details or mock-test links listed in its main content.</p></div>
      <div><h3>Is it free?</h3><p>Yes. ThunderStudy resources are provided free of charge and do not require a paid subscription or login.</p></div>
      <div><h3>How can I start?</h3><p>Choose a subject, chapter, paper, download or mock test below, then follow the page instructions.</p></div>
    </div>
    <div class="ts-seo-answer__trust">
      <h3>Trust and sources</h3>
      <p><strong>Written/edited by:</strong> ThunderStudy editorial team, maintained by Wondermayank.</p>
      <p><strong>Last reviewed:</strong> ${reviewedDate} &middot; <strong>Exam year:</strong> ${yearLine}</p>
      <p><strong>Sources used:</strong> Official exam-body references where cited, plus the linked source material on this page.</p>
      <p><strong>Corrections:</strong> <a href="${correctionUrl}">Report an error or broken link</a> &middot; <strong>Policy:</strong> <a href="${policyUrl}">Read the editorial policy</a></p>
    </div>
  </div>
</section>`;
}

function buildSchema({ title, description, url, examYear, breadcrumbs, isSearchPage }) {
  const graph = [
    {
      '@type': 'EducationalOrganization',
      '@id': `${siteUrl}/#org`,
      name: 'ThunderStudy',
      url: siteUrl,
      description: 'Free study notes, books, PYQs and mock tests for Indian board and competitive exams.',
      isAccessibleForFree: true,
      areaServed: { '@type': 'Country', name: 'India' },
      sameAs: [
        'https://t.me/thunderstudy',
        'https://instagram.com/thunderstudyx',
        'https://youtube.com/@thunderstudy_official',
        'https://x.com/thunderstudyx',
        'https://facebook.com/thunderstudyx',
        'https://reddit.com/u/thunderstudy_official',
        'https://pinterest.com/thunderstudy'
      ]
    },
    {
      '@type': 'Person',
      '@id': 'https://wondermayank.in/#person',
      name: 'Wondermayank',
      url: 'https://wondermayank.in',
      jobTitle: 'Founder, Developer and Educator',
      worksFor: { '@id': `${siteUrl}/#org` },
      sameAs: [
        'https://t.me/wondermayank',
        'https://instagram.com/wondermayank',
        'https://youtube.com/@wondermayank',
        'https://x.com/wondermayankx'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'ThunderStudy',
      url: siteUrl,
      inLanguage: 'en-IN',
      publisher: { '@id': `${siteUrl}/#org` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: breadcrumbs
    }
  ];

  if (!isSearchPage) {
    graph.push({
      '@type': 'LearningResource',
      '@id': `${url}#learning-resource`,
      name: title,
      description,
      url,
      learningResourceType: 'Study material',
      isAccessibleForFree: true,
      inLanguage: 'en-IN',
      provider: { '@id': `${siteUrl}/#org` },
      ...(examYear !== 'Not applicable' ? { educationalLevel: examYear } : {})
    });
  }

  const questions = [
    ['What is this page?', `${title} is a free ThunderStudy study resource for focused exam preparation.`],
    ['Is this ThunderStudy resource free?', 'Yes. ThunderStudy resources are provided free of charge and do not require a paid subscription or login.'],
    ['How can I start using this page?', 'Choose a subject, chapter, paper, download or mock test below, then follow the page instructions.']
  ];
  graph.push({
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: questions.map(([name, text]) => ({
      '@type': 'Question', name,
      acceptedAnswer: { '@type': 'Answer', text }
    }))
  });
  return `<script type="application/ld+json">\n${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)}\n</script>`;
}

function enrich(file) {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('data-seo-answer="v1"')) return false;
  const title = textFrom(html, /<title[^>]*>([\s\S]*?)<\/title>/i, path.basename(file, '.html'));
  const description = textFrom(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i, `Free study material from ThunderStudy for ${title}.`);
  const url = textFrom(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i, `${siteUrl}/${path.relative(root, file).replace(/\\/g, '/').replace(/index\.html$/i, '')}`);
  const yearMatches = `${title} ${description}`.match(/20\d{2}/g) || [];
  const examYear = yearMatches.length ? yearMatches[yearMatches.length - 1] : 'Current exam cycle';
  const isSearchPage = /[\\/]search[\\/]index\.html$/i.test(file);
  const visible = buildVisibleBlock({ title, description, url, examYear });
  const schema = buildSchema({ title, description, url, examYear, breadcrumbs: breadcrumbItems(url, title), isSearchPage });
  const style = `<style data-seo-answer-style>\n.ts-seo-answer{margin:24px auto;max-width:1120px;padding:0 20px;font:inherit;color:inherit}.ts-seo-answer__inner{border:1px solid #d8e1f2;border-radius:12px;padding:22px;background:#f8fbff}.ts-seo-answer__eyebrow{margin:0 0 6px;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2563eb}.ts-seo-answer h2{margin:0 0 16px;font-size:clamp(1.2rem,2.4vw,1.7rem)}.ts-seo-answer h3{margin:0 0 6px;font-size:1rem}.ts-seo-answer p{margin:0 0 8px;line-height:1.6}.ts-seo-answer__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}.ts-seo-answer__trust{margin-top:18px;padding-top:16px;border-top:1px solid #d8e1f2}.ts-seo-answer a{color:#1d4ed8;font-weight:600}@media(prefers-color-scheme:dark){.ts-seo-answer__inner{background:#1b2433;border-color:#3b4a63}.ts-seo-answer__trust{border-color:#3b4a63}.ts-seo-answer a{color:#93c5fd}}\n</style>`;
  html = html.replace(/<\/head>/i, `${style}\n${schema}\n</head>`);
  const insertion = html.match(/<main\b[^>]*>/i) ? /<main\b[^>]*>/i : /<body\b[^>]*>/i;
  html = html.replace(insertion, match => `${match}${visible}`);
  fs.writeFileSync(file, html, 'utf8');
  return true;
}

const files = folders.flatMap(folder => listHtmlFiles(path.join(root, folder)));
let changed = 0;
for (const file of files) if (enrich(file)) changed += 1;
console.log(`Enriched ${changed} of ${files.length} HTML files across ${folders.length} folders.`);
