# NCERT folder update

Date: 2026-09-28

- Added canonical URL, Open Graph, Twitter, favicon, and page-level AEO coverage where it was missing.
- Added EducationalOrganization, WebSite, and WebPage JSON-LD for NCERT pages.
- Added concise answer-engine summaries near the top of each content page.
- Added shared design tokens and light/dark overrides in `ncert-design.css`.
- Updated NCERT footer social links to Telegram, Instagram, YouTube, X, and both GitHub profiles.
- Added `llm.txt`, `full-llm.html`, `ai.txt`, `human.txt`, `robots.txt`, and `sitemap.xml`.
- Kept official NCERT source links and existing page content meaning intact.

## UI sync with 404.html

- Header, footer, buttons and the "ThunderStudy quick answers" box now match `404.html` on every page via shared `thunder-ui.css` and `thunder-ui.js`.
- Header: added "Request file" button (wondermayank.in/contact) before the light/dark toggle.
- Quick answers box: same box UI as the 404 card; white box with black text in light mode, dark surface in dark mode.
- Removed `footer.css`, old per-page footer/theme scripts and the `prefers-color-scheme` override for the quick answers box.
