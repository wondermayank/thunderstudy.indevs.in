import json
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ICONS = {
  "sun": """<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>""",
  "moon": """<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>""",
  "book": """<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>""",
  "fileText": """<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>""",
  "checkCircle": """<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>""",
  "award": """<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>""",
  "shield": """<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>""",
  "chevronRight": """<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>""",
  "telegram": """<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>""",
  "instagram": """<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>""",
  "youtube": """<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>""",
  "twitter": """<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  "github": """<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>"""
}

def render_page(cfg):
    schema_bc = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "ThunderStudy", "item": "https://thunderstudy.indevs.in/"},
        {"@type": "ListItem", "position": 2, "name": cfg["name"], "item": f"https://thunderstudy.indevs.in/{cfg['slug']}/"}
      ]
    }
    schema_col = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": f"{cfg['name']} — Free Study Material, Notes & Mock Tests | ThunderStudy",
      "description": cfg["description"],
      "url": f"https://thunderstudy.indevs.in/{cfg['slug']}/",
      "inLanguage": "en-IN",
      "publisher": {"@type": "EducationalOrganization", "name": "ThunderStudy", "url": "https://thunderstudy.indevs.in"}
    }
    schema_faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": f["q"], "acceptedAnswer": {"@type": "Answer", "text": f["a"]}} for f in cfg["faqs"]]
    }
    
    cards_html = ""
    for item in cfg["items"]:
        ic = ICONS.get(item.get("icon", "book"), ICONS["book"])
        cards_html += f"""
        <a href="{item['url']}" class="course-card">
          <div>
            <div class="card-icon-wrap">{ic}</div>
            <h3 class="card-title">{item['title']}</h3>
            <p class="card-desc">{item['desc']}</p>
          </div>
          <span class="card-cta">LEARN MORE {ICONS['chevronRight']}</span>
        </a>"""

    faq_html = ""
    for f in cfg["faqs"]:
        faq_html += f"""
        <article class="faq-card">
          <h3 class="faq-q">{f['q']}</h3>
          <p class="faq-a">{f['a']}</p>
        </article>"""

    return f"""<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{cfg['name']} Free Study Material, Notes, PYQs &amp; Mock Tests — ThunderStudy</title>
  <meta name="description" content="{cfg['description']}">
  <link rel="canonical" href="https://thunderstudy.indevs.in/{cfg['slug']}/">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta name="theme-color" content="#70a1fc">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://thunderstudy.indevs.in/{cfg['slug']}/">
  <meta property="og:title" content="{cfg['name']} Free Study Material &amp; Mock Tests — ThunderStudy">
  <meta property="og:description" content="{cfg['description']}">
  <meta property="og:image" content="https://thunderstudy.indevs.in/og-cover.png">
  <meta property="og:site_name" content="ThunderStudy">
  <meta property="og:locale" content="en_IN">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@Thunderstudyx">
  <meta name="twitter:creator" content="@wondermayank">
  <meta name="twitter:title" content="{cfg['name']} Free Study Material &amp; Mock Tests — ThunderStudy">
  <meta name="twitter:description" content="{cfg['description']}">
  <meta name="twitter:image" content="https://thunderstudy.indevs.in/og-cover.png">
  <meta name="speakable" content="{cfg['quickAnswer']}">
  <script type="application/ld+json">{json.dumps(schema_bc)}</script>
  <script type="application/ld+json">{json.dumps(schema_col)}</script>
  <script type="application/ld+json">{json.dumps(schema_faq)}</script>
  <style>
    :root {{
      --primary: #70a1fc;
      --primary-soft: #7897D1;
      --primary-active: #5D79B3;
      --secondary: #D6BD82;
      --ink: #26324A;
      --muted: #667085;
      --on-primary: #FFFFFF;
      --on-dark: #F4F1FF;
      --canvas: #EEF3FF;
      --surface: #FFFFFF;
      --card: #FFFFFF;
      --surface-dark: #121212;
      --hairline: #D8E1F2;
      --hairline-strong: #B9C8E3;
      --font-body: Inter, system-ui, -apple-system, sans-serif;
      --radius-sm: 8px;
      --radius-md: 11px;
      --radius-lg: 18px;
      --radius-pill: 9999px;
    }}
    [data-theme="dark"] {{
      --primary: #9A7AFB;
      --primary-soft: #7560C7;
      --primary-active: #7E64CE;
      --secondary: #CBDD98;
      --ink: #F4F1FF;
      --muted: #A9A4B8;
      --canvas: #121212;
      --surface: #1B1B1F;
      --card: #222228;
      --surface-dark: #000000;
      --hairline: #2A2A2A;
      --hairline-strong: #3A3A3C;
    }}
    *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
    html {{ scroll-behavior: smooth; }}
    body {{ font-family: var(--font-body); background-color: var(--canvas); color: var(--ink); line-height: 1.5; transition: background-color 0.2s ease, color 0.2s ease; }}
    header.site-header {{ position: sticky; top: 0; z-index: 100; background: var(--surface); border-bottom: 1px solid var(--hairline); backdrop-filter: blur(20px); }}
    .header-inner {{ max-width: 1200px; margin: 0 auto; height: 64px; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; }}
    .brand-link {{ display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); font-weight: 700; font-size: 1.25rem; letter-spacing: -0.2px; }}
    .brand-thunder {{ color: var(--ink); }}
    .brand-study {{ background: linear-gradient(135deg, var(--primary), #7560C7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }}
    .header-nav {{ display: flex; align-items: center; gap: 16px; }}
    .nav-link {{ color: var(--muted); text-decoration: none; font-size: 0.875rem; font-weight: 500; padding: 6px 12px; border-radius: var(--radius-pill); transition: color 0.2s, background-color 0.2s; }}
    .nav-link:hover {{ color: var(--primary); background-color: var(--canvas); }}
    .theme-toggle-btn {{ background: transparent; border: 1px solid var(--hairline-strong); color: var(--ink); width: 40px; height: 40px; border-radius: var(--radius-pill); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.15s ease, background-color 0.2s; }}
    .theme-toggle-btn:active {{ transform: scale(0.95); }}
    .breadcrumb-bar {{ max-width: 1200px; margin: 16px auto 0; padding: 0 20px; font-size: 0.85rem; color: var(--muted); display: flex; align-items: center; gap: 8px; }}
    .breadcrumb-bar a {{ color: var(--muted); text-decoration: none; }}
    .breadcrumb-bar a:hover {{ color: var(--primary); }}
    .hero-section {{ max-width: 1200px; margin: 0 auto; padding: 40px 20px 32px; text-align: center; }}
    .eyebrow {{ display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--primary); background: var(--surface); border: 1px solid var(--hairline); padding: 6px 14px; border-radius: var(--radius-pill); margin-bottom: 16px; }}
    .hero-title {{ font-size: clamp(1.8rem, 4vw, 2.75rem); font-weight: 700; letter-spacing: -0.5px; line-height: 1.15; color: var(--ink); margin-bottom: 16px; }}
    .hero-summary {{ max-width: 760px; margin: 0 auto 24px; font-size: 1.1rem; color: var(--muted); line-height: 1.6; }}
    .quick-snippet-box {{ background: var(--surface); border: 1px solid var(--hairline-strong); border-left: 4px solid var(--primary); border-radius: var(--radius-sm); padding: 16px 20px; max-width: 800px; margin: 0 auto 32px; text-align: left; font-size: 0.95rem; }}
    .quick-snippet-box strong {{ color: var(--ink); display: block; margin-bottom: 4px; }}
    .content-section {{ max-width: 1200px; margin: 0 auto; padding: 20px 20px 60px; }}
    .section-header {{ margin-bottom: 28px; }}
    .section-title {{ font-size: 1.5rem; font-weight: 700; color: var(--ink); }}
    .section-sub {{ color: var(--muted); font-size: 0.95rem; }}
    .card-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }}
    .course-card {{ background: var(--card); border: 1px solid var(--hairline); border-radius: var(--radius-lg); padding: 24px; display: flex; flex-direction: column; justify-content: space-between; text-decoration: none; color: var(--ink); transition: transform 0.2s ease, border-color 0.2s ease; }}
    .course-card:hover {{ transform: translateY(-2px); border-color: var(--primary); }}
    .card-icon-wrap {{ width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--canvas); color: var(--primary); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }}
    .card-title {{ font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; color: var(--ink); }}
    .card-desc {{ font-size: 0.9rem; color: var(--muted); line-height: 1.5; margin-bottom: 20px; flex-grow: 1; }}
    .card-cta {{ display: inline-flex; align-items: center; gap: 6px; font-size: 0.8125rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--primary); }}
    .faq-section {{ background: var(--surface); border-top: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline); padding: 60px 20px; }}
    .faq-container {{ max-width: 860px; margin: 0 auto; }}
    .faq-card {{ background: var(--card); border: 1px solid var(--hairline); border-radius: var(--radius-md); padding: 20px; margin-bottom: 16px; }}
    .faq-q {{ font-size: 1.05rem; font-weight: 700; color: var(--ink); margin-bottom: 8px; }}
    .faq-a {{ font-size: 0.95rem; color: var(--muted); line-height: 1.6; }}
    footer.site-footer {{ background: var(--surface); color: var(--muted); padding: 60px 20px 32px; border-top: 1px solid var(--hairline); }}
    .footer-inner {{ max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 40px; }}
    .footer-col h4 {{ font-size: 0.9rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--ink); margin-bottom: 16px; }}
    .footer-links {{ list-style: none; display: flex; flex-direction: column; gap: 10px; }}
    .footer-links a {{ color: var(--muted); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }}
    .footer-links a:hover {{ color: var(--primary); }}
    .social-row {{ display: flex; align-items: center; gap: 12px; margin-top: 16px; }}
    .social-link {{ width: 36px; height: 36px; border-radius: var(--radius-pill); background: var(--canvas); border: 1px solid var(--hairline); display: flex; align-items: center; justify-content: center; color: var(--ink); text-decoration: none; transition: color 0.2s, border-color 0.2s, transform 0.15s ease; }}
    .social-link:hover {{ color: var(--primary); border-color: var(--primary); transform: translateY(-2px); }}
    .footer-bottom {{ max-width: 1200px; margin: 0 auto; border-top: 1px solid var(--hairline); padding-top: 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; font-size: 0.8125rem; }}
  </style>
  <script>
    (function() {{
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {{
        document.documentElement.setAttribute("data-theme", "dark");
      }}
    }})();
  </script>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="brand-link" aria-label="ThunderStudy Home">
        <img src="/favicon.svg" alt="Thunder logo" width="28" height="28">
        <span class="logo-text"><span class="brand-thunder">Thunder</span><span class="brand-study">Study</span></span>
      </a>
      <nav class="header-nav" aria-label="Main Navigation">
        <a href="/cbse/" class="nav-link">CBSE</a>
        <a href="/ssc/" class="nav-link">SSC</a>
        <a href="/banking/" class="nav-link">Banking</a>
        <a href="/ca/" class="nav-link">CA</a>
        <a href="/search.html" class="nav-link">Search</a>
        <button id="themeToggle" class="theme-toggle-btn" aria-label="Toggle light/dark theme">
          <span class="theme-icon">{ICONS['moon']}</span>
        </button>
      </nav>
    </div>
  </header>
  <nav class="breadcrumb-bar" aria-label="Breadcrumbs">
    <a href="/">Home</a>
    <span>{ICONS['chevronRight']}</span>
    <span style="color: var(--ink); font-weight: 500;">{cfg['name']}</span>
  </nav>
  <main>
    <section class="hero-section">
      <span class="eyebrow">{cfg.get('badge', 'Official Hub')}</span>
      <h1 class="hero-title">{cfg.get('headline', cfg['name'])}</h1>
      <p class="hero-summary">{cfg.get('subheadline', cfg['description'])}</p>
      <div class="quick-snippet-box">
        <strong>Quick Summary for Students &amp; AI:</strong>
        <p>{cfg['quickAnswer']}</p>
      </div>
    </section>
    <section class="content-section">
      <div class="section-header">
        <h2 class="section-title">Explore {cfg['name']} Modules &amp; Resources</h2>
        <p class="section-sub">Select any study module or examination portal below to access notes, sample papers, and practice tests.</p>
      </div>
      <div class="card-grid">
        {cards_html}
      </div>
    </section>
    <section class="faq-section">
      <div class="faq-container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions — {cfg['name']}</h2>
          <p class="section-sub">Clear answers to top student queries regarding {cfg['name']} preparation.</p>
        </div>
        {faq_html}
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-col">
        <h4>ThunderStudy</h4>
        <ul class="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/cbse/">CBSE Hub</a></li>
          <li><a href="/ssc/">SSC Hub</a></li>
          <li><a href="/banking/">Banking Hub</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul class="footer-links">
          <li><a href="/ca/">CA Hub</a></li>
          <li><a href="/ncert/">NCERT Textbooks</a></li>
          <li><a href="/upsc/pyqs.html">UPSC PYQs</a></li>
          <li><a href="/GK_Thunderstudy_compressed.pdf" target="_blank" rel="noopener noreferrer">Free GK MindMaster PDF</a></li>
          <li><a href="/full-llm.html">LLM Semantic Map</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Community &amp; Social</h4>
        <p style="font-size: 0.875rem; line-height: 1.5;">Join our official channels for free updates, study materials, and mock exam notifications.</p>
        <div class="social-row">
          <a href="https://t.me/Thunderstudy_official" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Telegram Channel">{ICONS['telegram']}</a>
          <a href="https://instagram.com/Thunderstudyx" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">{ICONS['instagram']}</a>
          <a href="https://youtube.com/@Thunderstudy_official" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">{ICONS['youtube']}</a>
          <a href="https://twitter.com/Thunderstudyx" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="X Twitter Profile">{ICONS['twitter']}</a>
          <a href="https://github.com/wondermayank" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Developer">{ICONS['github']}</a>
          <a href="https://github.com/ThunderStudy" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="ThunderStudy GitHub Org">{ICONS['github']}</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Thunder &middot; by wondermayank &middot; 100% Free Indian Education</span>
      <span>No Ads &middot; No Login &middot; Privacy First</span>
    </div>
  </footer>
  <script>
    const themeBtn = document.getElementById("themeToggle");
    const sunSvg = `{ICONS['sun']}`;
    const moonSvg = `{ICONS['moon']}`;
    function updateThemeIcon() {{
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      themeBtn.innerHTML = isDark ? sunSvg : moonSvg;
    }}
    updateThemeIcon();
    themeBtn.addEventListener("click", function() {{
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {{
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      }} else {{
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }}
      updateThemeIcon();
    }});
  </script>
</body>
</html>"""

CONFIGS = [
  {
    "dir": "banking",
    "slug": "banking",
    "name": "Banking & Insurance Exam Preparation",
    "badge": "Banking Portal",
    "headline": "Free Banking &amp; Insurance Exam Notes, PYQs &amp; CBT Mocks",
    "subheadline": "Complete, 100% free preparation hub for IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B, RBI Assistant, LIC AAO, and EPFO examinations.",
    "description": "Free Banking mock tests, study material, and formulas for IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RRB, RBI Grade B, LIC AAO, and EPFO with real exam pattern.",
    "quickAnswer": "ThunderStudy provides 100% free Banking exam preparation with CBT-style mock tests, notes, and previous year papers for SBI PO, IBPS PO, RRB, RBI Grade B, and LIC AAO with zero registration.",
    "items": [
      {"title": "IBPS PO Portal", "desc": "Prelims & Mains study notes, Quantitative Aptitude, Reasoning, and full CBT mocks.", "url": "/banking/ibps_po/", "icon": "award"},
      {"title": "IBPS Clerk Portal", "desc": "Speed math shortcuts, English comprehension, clerical aptitude, and sectional tests.", "url": "/banking/ibps_clerk/", "icon": "book"},
      {"title": "SBI PO Portal", "desc": "High-level puzzle tricks, Data Interpretation, General Economy awareness, and PYQs.", "url": "/banking/sbi_po/", "icon": "award"},
      {"title": "SBI Clerk Portal", "desc": "Comprehensive practice tests, banking awareness sheets, and memory-based papers.", "url": "/banking/sbi_clerk/", "icon": "book"},
      {"title": "IBPS RRB Officer & Clerk", "desc": "Regional Rural Banks PO and Clerk notes, computer awareness & Hindi/English prep.", "url": "/banking/ibps_rrb/", "icon": "shield"},
      {"title": "RBI Grade B & Assistant", "desc": "Phase 1 & Phase 2 economic notes, finance management concepts, and practice papers.", "url": "/banking/rbi_grade_b/", "icon": "award"},
      {"title": "LIC AAO & ADO", "desc": "Insurance awareness, financial market concepts, reasoning, and mock exams.", "url": "/banking/lic_aao/", "icon": "shield"},
      {"title": "EPFO SSA & EO/AO", "desc": "Social security legislation, industrial relations, accounting principles, and tests.", "url": "/banking/epfo/", "icon": "fileText"}
    ],
    "faqs": [
      {"q": "Where can I practice free Banking CBT mock tests?", "a": "ThunderStudy offers full-length CBT mock tests for IBPS PO, SBI PO, and Clerk exams at thunderstudy.indevs.in/banking/ with instant client-side scoring and zero login."},
      {"q": "Are Banking notes on ThunderStudy updated for 2026 exams?", "a": "Yes, all Banking notes, puzzles, and General Financial Awareness questions follow the latest exam patterns."},
      {"q": "What exams are covered under ThunderStudy Banking Hub?", "a": "We cover IBPS PO, IBPS Clerk, IBPS RRB, SBI PO, SBI Clerk, RBI Grade B, RBI Assistant, LIC AAO, LIC ADO, and EPFO."}
    ]
  },
  {
    "dir": "cat",
    "slug": "cat",
    "name": "CAT & MBA Entrance Preparation",
    "badge": "MBA Entrance",
    "headline": "Free CAT &amp; MBA Entrance Study Notes, QA Formulas &amp; Mocks",
    "subheadline": "Ace CAT, XAT, SNAP, NMAT, and CMAT with free Quantitative Aptitude cheat sheets, LRDI caselets, Verbal Ability guides, and full-length mocks.",
    "description": "Free CAT preparation resources: QA formulas, LRDI strategy, VARC vocabulary, grammar rules, General Knowledge, and previous year question sets.",
    "quickAnswer": "ThunderStudy offers free CAT and MBA entrance preparation materials covering Quantitative Aptitude, LRDI, Verbal Ability, Vocabulary, and PYQs without subscriptions or paywalls.",
    "items": [
      {"title": "Quantitative Aptitude", "desc": "Arithmetic, Algebra, Geometry, Number Systems, and Modern Math formula cheat sheets.", "url": "/cat/quantitative-aptitude.html", "icon": "fileText"},
      {"title": "LRDI Mastery", "desc": "Logical Reasoning arrangements, matrix puzzles, Data Interpretation sets, and caselets.", "url": "/cat/lrdi.html", "icon": "award"},
      {"title": "Verbal Ability & Reading Comprehension", "desc": "RC strategies, Para Jumbles, Odd Sentence Out, and Critical Reasoning guides.", "url": "/cat/verbal.html", "icon": "book"},
      {"title": "CAT Vocabulary & Flashcards", "desc": "High-frequency CAT/XAT words with contextual usage, mnemonics, and synonyms.", "url": "/cat/vocabulary.html", "icon": "book"},
      {"title": "English Grammar Rules", "desc": "Essential grammar rules, modifiers, parallelism, and sentence correction notes.", "url": "/cat/english-grammar.html", "icon": "fileText"},
      {"title": "CAT Mind Maps", "desc": "Visual summaries for fast revision of all math theorems and LR concepts.", "url": "/cat/mindmap.html", "icon": "checkCircle"},
      {"title": "CAT Formula Book", "desc": "All formulas across Algebra, Geometry, Arithmetic, and Mensuration in one sheet.", "url": "/cat/formula.html", "icon": "fileText"},
      {"title": "CAT PYQs & Sample Papers", "desc": "Previous years actual CAT question papers with step-by-step detailed explanations.", "url": "/cat/pyqs.html", "icon": "award"}
    ],
    "faqs": [
      {"q": "How can I prepare for CAT QA without coaching?", "a": "ThunderStudy provides comprehensive Quantitative Aptitude formula books, shortcuts, and topic-wise solved questions free of cost."},
      {"q": "Where can I find free LRDI sets for CAT practice?", "a": "ThunderStudy CAT LRDI portal contains structured arrangement, matrix, games, and DI sets with detailed video-level text solutions."}
    ]
  },
  {
    "dir": "cbse",
    "slug": "cbse",
    "name": "CBSE Board Exam Preparation (Classes 10 & 12)",
    "badge": "CBSE Boards Hub",
    "headline": "CBSE Class 10 &amp; 12 Free Notes, Sample Papers, Topper Sheets &amp; PYQs",
    "subheadline": "India's largest free repository for CBSE Class 12 (Commerce, Science, Humanities) and Class 10 boards with Chapter Notes, Formula Sheets, Case-Based Qs, and Free Books.",
    "description": "Complete CBSE Class 12 & 10 study material: Topper notes, mind maps, formula sheets, sample papers, case-based questions, and Boards Dominator & Boards Killer books.",
    "quickAnswer": "ThunderStudy offers 100% free CBSE Class 10 & 12 notes, sample papers, topper answer sheets, and formulas for Science, Commerce, and Humanities streams with zero ads.",
    "items": [
      {"title": "Topper Notes & Revision Sheets", "desc": "Handwritten and digital toppers notes for Physics, Chemistry, Accountancy, Economics, History & more.", "url": "/cbse/topper-notes.html", "icon": "award"},
      {"title": "Formula Sheets & Cheat Sheets", "desc": "High-yield formula compilations for Maths, Physics, Chemistry, and Applied Mathematics.", "url": "/cbse/formula.html", "icon": "fileText"},
      {"title": "10-Year PYQs & Solved Papers", "desc": "Chapter-wise previous year questions with step marking schemes.", "url": "/cbse/pyqs.html", "icon": "book"},
      {"title": "Latest CBSE Sample Papers", "desc": "CBSE board pattern sample question papers with marking scheme solutions.", "url": "/cbse/sample-paper.html", "icon": "fileText"},
      {"title": "Case-Based & Competency Questions", "desc": "Assertion-reason and case study question banks aligned with the latest CBSE guidelines.", "url": "/cbse/case-based.html", "icon": "checkCircle"},
      {"title": "Mind Maps & Concept Maps", "desc": "One-page visual summary mind maps for quick revision before exam morning.", "url": "/cbse/mindmap.html", "icon": "book"},
      {"title": "Backbencher Passing Packages", "desc": "Ultra-condensed passing guides highlighting high-weightage topics.", "url": "/cbse/backbencher-notes.html", "icon": "shield"},
      {"title": "Topper Answer Sheets", "desc": "Actual CBSE official topper answer sheets demonstrating ideal presentation techniques.", "url": "/cbse/topper-answersheet.html", "icon": "award"}
    ],
    "faqs": [
      {"q": "Where can I download free CBSE Class 12 notes PDF?", "a": "ThunderStudy cbse hub at thunderstudy.indevs.in/cbse/ provides free downloadable notes and sample papers for all streams."},
      {"q": "What free books are available for CBSE Class 12 boards?", "a": "ThunderStudy publishes Boards Dominator (Science), Boards Killer (Humanities), and 20+ Sample Papers (Commerce) completely free."}
    ]
  },
  {
    "dir": "clat",
    "slug": "clat",
    "name": "CLAT & AILET Law Entrance Preparation",
    "badge": "Law Entrance",
    "headline": "Free CLAT &amp; AILET Study Notes, Legal Reasoning &amp; Mocks",
    "subheadline": "Ace Common Law Admission Test (CLAT) and AILET with free legal aptitude notes, logical reasoning techniques, English comprehension, and sample papers.",
    "description": "Free CLAT and AILET preparation: Legal reasoning notes, constitution principles, current affairs, logical aptitude, and previous year question papers.",
    "quickAnswer": "ThunderStudy provides free CLAT and AILET entrance study notes, legal aptitude primers, passage-based reasoning practice, and solved past papers for law aspirants.",
    "items": [
      {"title": "CLAT Core Study Notes", "desc": "Comprehensive coverage of Legal Reasoning, Logical Reasoning, English, and Quantitative Techniques.", "url": "/clat/notes.html", "icon": "book"},
      {"title": "CLAT 10-Year Solved PYQs", "desc": "Passage-based previous year questions with thorough analytical explanations.", "url": "/clat/pyqs.html", "icon": "award"},
      {"title": "AILET Solved Papers & Notes", "desc": "Dedicated AILET question papers and critical reasoning guides for NLU Delhi aspirants.", "url": "/clat/ailet-pyqs.html", "icon": "shield"},
      {"title": "CLAT Sample Question Papers", "desc": "Full-length passage-based sample tests mirroring the latest Consortium exam design.", "url": "/clat/sample-paper.html", "icon": "fileText"}
    ],
    "faqs": [
      {"q": "How to prepare for CLAT Legal Reasoning for free?", "a": "ThunderStudy provides free Legal Reasoning conceptual notes, landmark judgments, and passage-based practice at thunderstudy.indevs.in/clat/notes.html."},
      {"q": "Are AILET previous papers available on ThunderStudy?", "a": "Yes, full AILET previous year solved question papers are freely available at thunderstudy.indevs.in/clat/ailet-pyqs.html."}
    ]
  },
  {
    "dir": "dca",
    "slug": "dca",
    "name": "DCA & PGDCA Diploma in Computer Applications",
    "badge": "Diploma Courses",
    "headline": "DCA &amp; PGDCA Semester Notes, Question Banks &amp; Units",
    "subheadline": "Complete semester-wise study material, notes, and solved questions for Diploma in Computer Applications (DCA) and PGDCA courses.",
    "description": "Free DCA and PGDCA semester units: Computer fundamentals, PC package (Word, Excel, PowerPoint), MS Access, IT trends, and programming notes.",
    "quickAnswer": "ThunderStudy provides free unit-wise study notes for DCA Semester 1 & 2 covering IT trends, computer fundamentals, database management, and programming.",
    "items": [
      {"title": "DCA Semester 2 Unit 1", "desc": "Multimedia concepts, audio-video formats, animation basics, and digital authoring.", "url": "/dca/2/unit1.html", "icon": "book"},
      {"title": "DCA Semester 2 Unit 2", "desc": "Expert systems, knowledge representation, inference engines, and AI foundations.", "url": "/dca/2/unit2.html", "icon": "fileText"},
      {"title": "DCA Semester 2 Unit 3", "desc": "Cloud computing, virtual reality, e-commerce, and modern IT trends.", "url": "/dca/2/unit3.html", "icon": "checkCircle"},
      {"title": "DCA Semester 2 Unit 4", "desc": "Networking fundamentals, topologies, protocols, OSI model, and internet services.", "url": "/dca/2/unit4.html", "icon": "award"},
      {"title": "DCA Semester 2 Unit 5", "desc": "Cybersecurity, ethical issues, intellectual property rights, and information security.", "url": "/dca/2/unit5.html", "icon": "shield"}
    ],
    "faqs": [
      {"q": "Where can I find DCA unit-wise notes?", "a": "All units for DCA Semester 2 are accessible freely at thunderstudy.indevs.in/dca/ with comprehensive theory and exam questions."}
    ]
  },
  {
    "dir": "ncert",
    "slug": "ncert",
    "name": "NCERT Books & Solutions (Classes 6 to 12)",
    "badge": "NCERT Hub",
    "headline": "Free NCERT Textbooks, Chapter Solutions &amp; Hindi Medium Notes",
    "subheadline": "Download official NCERT textbooks, exemplar problems, and chapter-wise solutions for Classes 6, 7, 8, 9, 10, 11, and 12 in English and Hindi medium.",
    "description": "Free NCERT Books, solutions, and notes for Classes 6 to 12. Complete Hindi medium textbooks, science, mathematics, social science, and humanities.",
    "quickAnswer": "ThunderStudy offers complete NCERT books and solutions from Class 6 to Class 12 in both English and Hindi medium with direct online reading and PDF access.",
    "items": [
      {"title": "NCERT Complete Books Index", "desc": "Class 6 to Class 12 official NCERT textbooks in clean digital format.", "url": "/ncert/book/index.html", "icon": "book"},
      {"title": "NCERT Chapter Notes & Solutions", "desc": "Step-by-step NCERT textbook exercise solutions and key takeaway summaries.", "url": "/ncert/notes/index.html", "icon": "fileText"},
      {"title": "NCERT Hindi Medium Hub", "desc": "Complete Hindi medium books, exemplar guides, and revision sheets.", "url": "/ncert/hindi-medium.html", "icon": "award"},
      {"title": "Class 12 NCERT Textbooks", "desc": "Physics, Chemistry, Biology, Maths, Accountancy, Economics, History, Pol Science.", "url": "/ncert/book/class-12.html", "icon": "book"},
      {"title": "Class 11 NCERT Textbooks", "desc": "Science, Commerce, and Arts foundation textbooks and solutions.", "url": "/ncert/book/class-11.html", "icon": "book"},
      {"title": "Class 10 NCERT Textbooks", "desc": "Science, Maths, Social Science, Hindi, and English textbooks.", "url": "/ncert/book/class-10.html", "icon": "book"}
    ],
    "faqs": [
      {"q": "Are NCERT solutions on ThunderStudy free to access?", "a": "Yes, 100% of NCERT textbook solutions and exemplar answers are completely free on ThunderStudy."}
    ]
  },
  {
    "dir": "nda",
    "slug": "nda",
    "name": "NDA & Defence Exam Preparation",
    "badge": "Defence Academy",
    "headline": "Free NDA (National Defence Academy) Notes, PYQs &amp; Formulas",
    "subheadline": "Prepare for UPSC NDA/NA exam with free Mathematics shortcuts, General Ability Test (GAT) English, Physics, Chemistry, History, and Geography notes.",
    "description": "Free NDA exam resources: Mathematics formula sheets, GAT General Ability Test notes, previous years solved papers, and mock practice tests.",
    "quickAnswer": "ThunderStudy provides free NDA Mathematics formulas, GAT notes, and 10-year previous year solved question papers for UPSC NDA aspirants.",
    "items": [
      {"title": "NDA Core Notes", "desc": "GAT English, Science, Indian Polity, History, and Defence GK notes.", "url": "/nda/notes.html", "icon": "shield"},
      {"title": "NDA Mathematics Formula Book", "desc": "Algebra, Trigonometry, Calculus, Vectors, and Coordinate Geometry shortcuts.", "url": "/nda/formula.html", "icon": "fileText"},
      {"title": "NDA 10-Year Solved PYQs", "desc": "Official UPSC NDA past papers with step-by-step mathematical solutions.", "url": "/nda/pyqs.html", "icon": "award"},
      {"title": "NDA Full Sample Papers", "desc": "Timed mock papers designed according to UPSC NDA exam pattern.", "url": "/nda/sample-paper.html", "icon": "checkCircle"}
    ],
    "faqs": [
      {"q": "How to score 150+ in NDA Maths?", "a": "ThunderStudy NDA formula sheet at thunderstudy.indevs.in/nda/formula.html provides high-yield tricks and shortcuts for quick problem-solving."}
    ]
  },
  {
    "dir": "ssc",
    "slug": "ssc",
    "name": "SSC Examination Preparation Portal",
    "badge": "SSC Central Portal",
    "headline": "SSC CGL, CHSL, MTS, CPO, GD, JE &amp; Stenographer Free Prep Hub",
    "subheadline": "India's comprehensive free portal for all Staff Selection Commission (SSC) exams featuring Tier 1 & Tier 2 notes, Reasoning shortcuts, Quantitative Aptitude tricks, and CBT Mocks.",
    "description": "Free SSC preparation for CGL, CHSL, MTS, CPO, GD, JE, and Stenographer. Notes, formulas, PYQs, GK MindMaster, and CBT-style mock tests.",
    "quickAnswer": "ThunderStudy provides 100% free SSC notes, previous year question papers, and CBT mock tests for SSC CGL, CHSL, MTS, GD, CPO, JE, and Stenographer.",
    "items": [
      {"title": "SSC CGL Portal", "desc": "Combined Graduate Level Tier 1 & Tier 2 notes, math shortcuts, English comprehension, and GK.", "url": "/ssc/cgl/", "icon": "award"},
      {"title": "SSC CHSL Portal", "desc": "Combined Higher Secondary Level (10+2) syllabus notes, reasoning puzzles, and mock tests.", "url": "/ssc/chsl/", "icon": "book"},
      {"title": "SSC MTS & Havaldar", "desc": "Multi-Tasking Staff exam notes, General Awareness high-yield questions, and speed tests.", "url": "/ssc/mts/", "icon": "fileText"},
      {"title": "SSC CPO (Sub-Inspector)", "desc": "Delhi Police and CAPF SI exam preparation, English language tests, and physical guidelines.", "url": "/ssc/cpo/", "icon": "shield"},
      {"title": "SSC GD Constable", "desc": "General Duty Constable exam notes, elementary mathematics, and General Knowledge sets.", "url": "/ssc/gd/", "icon": "shield"},
      {"title": "SSC JE (Junior Engineer)", "desc": "Civil, Electrical, and Mechanical engineering basic notes with non-tech reasoning.", "url": "/ssc/je/", "icon": "fileText"},
      {"title": "SSC Stenographer (Grade C & D)", "desc": "English Language & General Intelligence notes and previous years dictation papers.", "url": "/ssc/steno/", "icon": "award"}
    ],
    "faqs": [
      {"q": "Where can I get free SSC CGL mock tests with real CBT interface?", "a": "ThunderStudy offers full-length CBT mock tests for SSC CGL at thunderstudy.indevs.in/ssc/cgl/ with instant scoring."},
      {"q": "What is the best free GK book for SSC exams?", "a": "GK MindMaster by ThunderStudy covers history, polity, geography, and general science for SSC. Download at thunderstudy.indevs.in/GK_Thunderstudy_compressed.pdf."}
    ]
  },
  {
    "dir": "tet",
    "slug": "tet",
    "name": "TET & CTET Teacher Eligibility Test Preparation",
    "badge": "Teaching Portal",
    "headline": "Free CTET &amp; State TET Child Development &amp; Pedagogy (CDP) Hub",
    "subheadline": "Prepare for Central Teacher Eligibility Test (CTET) and State TETs (UPTET, REET, MPTET, Super TET) with free Child Development & Pedagogy notes and PYQs.",
    "description": "Free CTET and State TET preparation: Child Development & Pedagogy (CDP) notes, learning theories (Piaget, Vygotsky, Kohlberg), and pedagogy questions.",
    "quickAnswer": "ThunderStudy provides free CTET and TET study notes for Child Development & Pedagogy (CDP), inclusive education principles, and previous year solved questions.",
    "items": [
      {"title": "CDP Master Notes & Theories", "desc": "Jean Piaget, Lev Vygotsky, Lawrence Kohlberg, and Howard Gardner intelligence theories explained.", "url": "/tet/notes/cdp.html", "icon": "book"},
      {"title": "CTET Paper 1 & Paper 2 Notes", "desc": "Environmental Studies (EVS), Mathematics pedagogy, Science, and Social Science teaching methods.", "url": "/tet/notes/cdp.html", "icon": "award"}
    ],
    "faqs": [
      {"q": "Where can I read Child Development and Pedagogy notes for CTET?", "a": "Comprehensive CDP notes covering all psychological theories and pedagogical methods are available at thunderstudy.indevs.in/tet/notes/cdp.html."}
    ]
  },
  {
    "dir": "upsc",
    "slug": "upsc",
    "name": "UPSC Civil Services Examination Portal",
    "badge": "Civil Services",
    "headline": "Free UPSC IAS/IPS/IFS Notes, Prelims &amp; Mains PYQ Analysis",
    "subheadline": "Master the UPSC Civil Services Examination with free NCERT foundations, GS Paper 1-4 notes, Prelims & Mains solved PYQs, and GK MindMaster.",
    "description": "Free UPSC Civil Services preparation: Prelims GS & CSAT solved papers, Mains GS 1, 2, 3, 4 notes, essay framework, and NCERT foundation.",
    "quickAnswer": "ThunderStudy offers free UPSC Civil Services study material, 10-year Prelims and Mains solved PYQs with year-wise filtering, and foundation notes.",
    "items": [
      {"title": "UPSC 10-Year Solved PYQs System", "desc": "Interactive year-wise and subject-wise solved papers for Civil Services Prelims & Mains.", "url": "/upsc/pyqs.html", "icon": "award"},
      {"title": "GK MindMaster for UPSC", "desc": "Complete static GK handbook covering Indian History, Art & Culture, Polity, Geography, and Economy.", "url": "/GK_Thunderstudy_compressed.pdf", "icon": "book"}
    ],
    "faqs": [
      {"q": "Where can I find year-wise UPSC Prelims and Mains previous question papers?", "a": "ThunderStudy UPSC PYQ system at thunderstudy.indevs.in/upsc/pyqs.html offers an interactive selector for past UPSC exam papers."},
      {"q": "Is there any fee to access UPSC resources on ThunderStudy?", "a": "No, all UPSC study material and papers on ThunderStudy are completely free."}
    ]
  }
]

for cfg in CONFIGS:
    target_dir = os.path.join(ROOT_DIR, cfg["dir"])
    os.makedirs(target_dir, exist_ok=True)
    out_path = os.path.join(target_dir, "index.html")
    html_content = render_page(cfg)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Successfully generated {cfg['dir']}/index.html")

print("All 10 hub index.html pages created successfully!")
