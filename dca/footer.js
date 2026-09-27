/*
 * ThunderStudy shared footer component.
 * Single source of truth for the site footer - included on every page via:
 *   <script src="/footer.js"></script>
 * placed exactly where the <footer> should render. Do not duplicate this
 * markup inline on individual pages; edit this file instead.
 */
document.write(`
<style>
  footer.site-footer{background:var(--surface);color:var(--muted);padding:60px 20px 32px;border-top:1px solid var(--hairline);font-family:var(--font-body,'Inter',system-ui,-apple-system,sans-serif);}
  footer.site-footer .footer-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px;margin-bottom:40px;}
  footer.site-footer .footer-col h4{font-size:.9rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--ink);margin-bottom:16px;}
  footer.site-footer .footer-links{list-style:none;display:flex;flex-direction:column;gap:10px;margin:0;padding:0;}
  footer.site-footer .footer-links a{color:var(--muted);text-decoration:none;font-size:.9rem;transition:color .2s;}
  footer.site-footer .footer-links a:hover{color:var(--primary);}
  footer.site-footer .footer-blurb{font-size:.875rem;line-height:1.5;margin:0;}
  footer.site-footer .social-row{display:flex;align-items:center;gap:12px;margin-top:16px;}
  footer.site-footer .social-link{width:36px;height:36px;border-radius:9999px;background:var(--canvas);border:1px solid var(--hairline);display:flex;align-items:center;justify-content:center;color:var(--ink);text-decoration:none;transition:color .2s,border-color .2s,transform .15s ease;}
  footer.site-footer .social-link:hover{color:var(--primary);border-color:var(--primary);transform:translateY(-2px);}
  footer.site-footer .footer-bottom{max-width:1200px;margin:0 auto;border-top:1px solid var(--hairline);padding-top:24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;font-size:.8125rem;}
</style>
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
      <p class="footer-blurb">Join our official channels for free updates, study materials, and mock exam notifications.</p>
      <div class="social-row">
        <a href="https://t.me/Thunderstudy_official" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Telegram Channel"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></a>
        <a href="https://instagram.com/Thunderstudyx" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
        <a href="https://youtube.com/@Thunderstudy_official" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg></a>
        <a href="https://twitter.com/Thunderstudyx" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
        <a href="https://github.com/wondermayank" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub - wondermayank"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
        <a href="https://github.com/ThunderStudy" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="ThunderStudy GitHub Org"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Thunder &middot; by wondermayank &middot; 100% Free Indian Education</span>
    <span>No Ads &middot; No Login &middot; Privacy First</span>
  </div>
</footer>
`);
