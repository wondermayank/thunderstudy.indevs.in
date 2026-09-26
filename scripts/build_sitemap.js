const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const baseUrl = 'https://thunderstudy.indevs.in';
const today = '2026-09-26';

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('.') || file === 'node_modules' || file === 'scripts' || file === 'design-system-temp') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html') && !file.endsWith('.disabled')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Found ${htmlFiles.length} HTML files.`);

const urls = [];

htmlFiles.forEach(file => {
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  let urlPath = '';
  let priority = '0.7';
  let changefreq = 'monthly';

  if (relPath === 'index.html') {
    urlPath = '/';
    priority = '1.0';
    changefreq = 'weekly';
  } else if (relPath.endsWith('/index.html')) {
    urlPath = '/' + relPath.replace(/\/index\.html$/, '/');
    priority = '0.9';
    changefreq = 'weekly';
  } else {
    urlPath = '/' + relPath;
    priority = '0.7';
  }

  // Set higher priority for key hubs and about page
  if (urlPath === '/about.html' || urlPath === '/about') {
    priority = '0.8';
  } else if (urlPath.includes('/cbse/') || urlPath.includes('/ssc/') || urlPath.includes('/banking/')) {
    priority = '0.8';
  }

  urls.push({
    loc: baseUrl + urlPath,
    lastmod: today,
    changefreq: changefreq,
    priority: priority
  });
});

// Sort URLs: '/' first, then directories, then files
urls.sort((a, b) => {
  if (a.loc === baseUrl + '/') return -1;
  if (b.loc === baseUrl + '/') return 1;
  return a.loc.localeCompare(b.loc);
});

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

urls.forEach(u => {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>\n';

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml successfully generated with ${urls.length} URLs.`);
