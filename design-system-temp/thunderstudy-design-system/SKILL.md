---
name: thunderstudy-design-system
description: Use this skill whenever building, styling, or reviewing UI for ThunderStudy, ThunderAI, or any other "Thunder"-branded project (thunderstudy.indevs.in, thunderstudy.indevs.in, blog.thunderstudy.indevs.in, wondermayank.in, and their underlying commercesehoga.github.io / wondermayank.github.io repos). Provides the merged BMW + Apple inspired design system — colors, typography, spacing, component specs, shape grammar, and section-rhythm rules — built around Thunder's blue/purple accent (`#70a1fc` light mode / `#9A7AFB` dark mode). Trigger on requests like "improve my website UI", "style this page", "make a hero section", "design a course card", "create a new component", or any frontend/HTML/CSS/React work on Thunder's projects.
---

# ThunderStudy Design System

A merged design language combining Apple's photography-first calm (alternating light/parchment/dark surfaces, pill-shaped controls, restrained single accent, the one signature product-shadow) with BMW's engineered precision (rectangular full-bleed hero/feature tiles, "LEARN MORE ›" uppercase link pattern, heavy/light type pairing). The primary accent is a soft blue in light mode (`#70a1fc`) that shifts to a light purple in dark mode (`#9A7AFB`), supported by a muted gold/olive secondary (`#D6BD82` / `#CBDD98`) and two decorative-only accents (pink, yellow) used sparingly for highlights and badges.

When working on any Thunder UI task, apply these tokens and rules rather than inventing new ad-hoc styles. Use `{token.refs}` conventions below conceptually — translate to actual CSS variables/Tailwind config in the project.

## Colors

```yaml
# ============ Brand & Accent ============
primary: "#70a1fc"          # dark: "#9A7AFB"
primary-soft: "#7897D1"     # dark: "#7560C7" — tints, soft chip backgrounds, subtle highlights
primary-active: "#5D79B3"   # dark: "#7E64CE" — pressed/active button state
primary-disabled: "#D6D6D6" # unchanged both modes
secondary: "#D6BD82"        # dark: "#CBDD98" — secondary badges/tags only, never a CTA color
accent-pink: "#F7B8CB"      # dark: "#F0A8C0" — decorative highlight only
accent-yellow: "#FBE99C"    # dark: "#F2DB82" — decorative highlight only

# ============ Text ============
ink: "#26324A"          # dark: "#F4F1FF" — headings + body text
muted: "#667085"        # dark: "#A9A4B8" — secondary/meta text, captions
on-primary: "#FFFFFF"       # unchanged both modes — text on primary-filled buttons
on-dark: "#F4F1FF"          # unchanged both modes — text on deliberate dark bands/tiles
on-dark-soft: "#A9A4B8"     # unchanged both modes — secondary text on dark bands/tiles

# ============ Surfaces ============
canvas: "#EEF3FF"       # dark: "#121212" — page background
surface: "#FFFFFF"      # dark: "#1B1B1F" — nav, footer, sticky bar, parchment/alt sections
card: "#FFFFFF"         # dark: "#222228" — elevated content cards (dark mode's second elevation tier; light mode reuses `surface`)
surface-dark: "#121212" # dark: "#000000" — deliberate dark full-bleed band/tile, usable within either theme to break section rhythm

# ============ Borders ============
hairline: "#D8E1F2"         # dark: "#2A2A2A"
hairline-strong: "#B9C8E3"  # dark: "#3A3A3A" — emphasis dividers, secondary-button borders

# ============ Semantic (unchanged by theme) ============
success: "#22c55e"
warning: "#f59e0b"
error: "#dc2626"
```

Rule: `primary` is the ONLY accent for CTAs, links, focus rings, and active states. `secondary`, `accent-pink`, and `accent-yellow` are decorative-only — badges, tags, illustrative highlights — never used on buttons or links. `success`/`warning`/`error` are reserved purely for semantic form states, never used as CTA colors.

## Light / Dark Mode

Every Thunder project ships with system-aware light and dark themes toggled via a `data-theme="dark"` attribute on `<html>` (toggled by a header icon button — SVG sun/moon, no emoji). Persist the preference in `localStorage`.

**Light theme** (default) uses the base color tokens above. **Dark theme** remaps tokens as follows:

```yaml
# Dark mode overrides — success/warning/error and on-primary/on-dark/on-dark-soft/primary-disabled stay the same
primary: "#9A7AFB"
primary-soft: "#7560C7"
primary-active: "#7E64CE"
secondary: "#CBDD98"
accent-pink: "#F0A8C0"
accent-yellow: "#F2DB82"
ink: "#F4F1FF"
muted: "#A9A4B8"
canvas: "#121212"
surface: "#1B1B1F"
card: "#222228"
surface-dark: "#000000"
hairline: "#2A2A2A"
hairline-strong: "#3A3A3C"
```

**Dark mode nav**: bg `canvas` (dark: `#121212`) + `backdrop-filter: blur(20px)` + `hairline` (dark: `#2A2A2A`) border.
**Dark mode cards**: bg `card` (dark: `#222228`) + `hairline` (dark: `#2A2A2A`) border.
**Dark mode buttons**: `button-primary` unchanged (accent stays `primary`, dark: `#9A7AFB`). `button-secondary`: bg `card`, border `hairline-strong` (dark: `#3A3A3C`).
**Dark mode footer**: bg `surface` (dark: `#1B1B1F`), text `muted` (dark: `#A9A4B8`).

## Typography

Font family: `Inter, system-ui, -apple-system, sans-serif` (open substitute for both BMW Type Next Latin and SF Pro). Weight ladder is **300 / 400 / 600 / 700** — weight 500 is deliberately absent.

```yaml
hero-display:   { size: 56px, weight: 700, lineHeight: 1.07, letterSpacing: -0.28px }
display-lg:     { size: 40px, weight: 700, lineHeight: 1.1,  letterSpacing: -0.2px }
display-md:     { size: 32px, weight: 700, lineHeight: 1.15, letterSpacing: 0 }
display-sm:     { size: 24px, weight: 700, lineHeight: 1.25, letterSpacing: 0 }
lead:           { size: 22px, weight: 400, lineHeight: 1.4,  letterSpacing: 0 }
title-md:       { size: 18px, weight: 700, lineHeight: 1.4,  letterSpacing: 0 }
body-md:        { size: 17px, weight: 400, lineHeight: 1.5,  letterSpacing: -0.1px }
body-light:     { size: 16px, weight: 300, lineHeight: 1.55, letterSpacing: 0 }
caption:        { size: 14px, weight: 400, lineHeight: 1.43, letterSpacing: -0.1px }
label-uppercase:{ size: 13px, weight: 700, lineHeight: 1.3,  letterSpacing: 1.5px, textTransform: uppercase }
button:         { size: 15px, weight: 600, lineHeight: 1.0,  letterSpacing: 0 }
nav-link:       { size: 14px, weight: 500, lineHeight: 1.4,  letterSpacing: 0.2px }
fine-print:     { size: 12px, weight: 400, lineHeight: 1.3,  letterSpacing: -0.1px }
```

Rule: hero/display headlines = 700 with slight negative tracking. Body = 400 (or 300 for long-form/legal copy). Never use 500. Never bold body text — strong inline copy uses 600.

## Shape Grammar

```yaml
rounded:
  none: 0px    # full-bleed hero/feature tiles only — edge-to-edge, radius meaningless
  sm: 8px      # text inputs, small utility buttons, inner card images
  md: 11px     # inner images inside cards, secondary buttons
  lg: 18px     # course/utility cards
  pill: 9999px # ALL interactive controls: buttons, search, filter/config chips, sticky CTA
  full: 9999px # circular icon buttons / avatars only
```

Decision rule: is it tappable/clickable? → `pill` (or `sm` for inputs). Is it a card? → `lg`. Is it full-bleed section? → `none`. Circular icon button/avatar? → `full`.

## Spacing & Shadows

```yaml
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 80px }
shadows:
  product-shadow: "rgba(0,0,0,0.22) 3px 5px 30px"
  # ONLY on hero illustrations / product/mascot imagery — NEVER on cards, buttons, nav, or text
```

## Section Rhythm Rule

Sections must alternate surfaces: **light canvas → dark hero → parchment feature → parchment/light feature → dark CTA band → parchment footer**. Never repeat the same surface in two consecutive sections — the surface change itself is the divider; no extra borders needed between full-bleed sections.

## Core Components

### Buttons
- **button-primary**: bg `primary`, text `on-primary`, `button` typography, `rounded.pill`, padding `14px 28px`, height 48px. Active/press: `transform: scale(0.95)` + bg `primary-active`.
- **button-secondary**: bg `canvas`, text `ink`, 1px `hairline-strong` border, `rounded.pill`, same size as primary.
- **button-secondary-on-dark**: transparent bg, text `on-dark`, 1px `on-dark` border, `rounded.pill`.
- **button-text-link** ("LEARN MORE ›"): transparent, text `ink`, `label-uppercase` typography, terminated with `›` chevron. Use for course-card and feature-card CTAs.
- **button-icon-circular**: 44×44px, bg `rgba(255,255,255,0.64)`, icon `ink`, `rounded.full`. Floats over imagery (carousel/close controls).

### Navigation
- **top-nav**: bg `canvas`, text `ink`, `nav-link` typography, height 64px, 1px `hairline` border bottom. Sticky; on scroll gains `backdrop-filter: blur(20px) saturate(180%)` + 80% opacity.

### Hero & Feature Tiles
- **hero-band-light**: bg `canvas`, text `ink`, vertical padding `spacing.section` (80px). Centered stack: uppercase eyebrow → `hero-display` headline → `lead` subtext → 1-2 `button-primary` CTAs → illustration/render with `product-shadow`.
- **hero-band-dark**: same structure, bg `surface-dark`, text `on-dark`. Use to break up consecutive light sections.
- **feature-tile-parchment**: bg `surface`, `rounded.none`, full-bleed, vertical padding `spacing.section`.
- **feature-tile-dark**: bg `surface-dark`, text `on-dark`, `rounded.none`, full-bleed.
- **cta-band-photo**: bg `surface-dark`, text `on-dark`, centered `display-md` headline + single `button-secondary-on-dark`, padding `spacing.section`.

### Cards
- **course-card**: bg `card`, 1px `hairline` border, `rounded.lg`, padding `spacing.lg`. Layout: 16:10 cover image (`rounded.md` inner radius) → `title-md` name → `body-light` description → `button-text-link` "LEARN MORE ›". No drop shadow — depth from border + image only.
- **course-card-photo**: bg `card`, `rounded.md`, 16:10 aspect ratio.
- **store-utility-card**: bg `card`, 1px `hairline` border, `rounded.lg`, padding `spacing.lg`. 1:1 icon/cover (`rounded.sm`) → `title-md` name → `body-md` price → `text-link`. Use for pricing/subject packs grid.

### Chips & Filters
- **filter-chip**: bg `card`, 1px `hairline-strong` border, `caption` typography, padding `8px 14px`, `rounded.pill`.
- **filter-chip-active**: bg `ink`, text `on-dark`, `rounded.pill`.
- **configurator-option-chip**: bg `card`, text `ink`, `caption` typography, `rounded.pill`, padding `12px 16px`. Use for ThunderAI mode selectors (Reasoning / Create Image / Deep Research).
- **configurator-option-chip-selected**: adds 2px `primary` border.

### Inputs
- **text-input**: bg `card`, text `ink`, `body-md` typography, `rounded.sm`, 1px `hairline` border, padding `14px 16px`, height 48px. Focus: border thickens to 2px `primary`.
- **search-input**: bg `card`, 1px `rgba(0,0,0,0.08)` border, `rounded.pill`, padding `12px 20px`, height 44px.

### Misc
- **category-tab / category-tab-active**: tabs use `label-uppercase`; inactive text `muted`, active text `ink` with 2px `ink` underline.
- **floating-sticky-bar**: bg `surface` at 80% opacity + `backdrop-filter: blur(20px)`, height 64px, padding `12px 32px`. Left: contextual info (progress/streak). Right: `button-primary`.
- **footer**: bg `surface`, text `muted`, vertical padding 64px, 4-column link list, `fine-print` copyright row.

## Do's and Don'ts

**Do:**
- Use `primary` (`#70a1fc` light / `#9A7AFB` dark) as the only accent for CTAs, links, and focus states.
- Alternate light/parchment/dark sections; let the surface change be the divider.
- Apply `transform: scale(0.95)` as the universal button press state.
- Reserve `product-shadow` for hero illustrations/mascots only.
- Use "LEARN MORE ›" uppercase link pattern for card CTAs.
- Keep cards on hairline borders with zero shadow.
- Hold section vertical rhythm at 80px on desktop.

**Don't:**
- Don't use `secondary`, `accent-pink`, or `accent-yellow` on buttons, links, or CTAs — they're decorative-only (badges, tags, highlights).
- Don't add drop shadows to cards, nav, or buttons.
- Don't use decorative gradients/blobs as a default for new sections (flag with user if they want to keep the existing blob hero as a brand exception).
- Don't use `rounded.none` on anything tappable — pill or sm/md only.
- Don't repeat the same surface type in consecutive sections.
- Don't use font-weight 500 anywhere, or bold body copy.

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Single column; hero-display → 28px; nav → hamburger |
| Phone | 420–640px | Hero-display → 34px; course cards 1-up; sticky bar shows |
| Tablet | 641–1023px | Course cards 2-up; nav expands at 834px+ |
| Desktop | 1024–1440px | Full nav; course cards 3–4 up; full-bleed feature tiles |
| Wide | ≥ 1441px | Content max-width 1440px, gutters absorb extra space |

Touch targets: minimum 44×44px for all buttons/chips/inputs.

## Applying to Existing Thunder Projects

- **Landing hero**: either keep the existing purple gradient/blob hero as a deliberate brand exception, or migrate to `hero-band-light` with flat illustration + `product-shadow` — pick one direction and apply consistently across CUET/Banking/Commerce variants.
- **Course/subject grids**: use `course-card` in a 3-4up grid (cover image, title, description, "LEARN MORE ›").
- **ThunderAI mode chips**: restyle Reasoning/Create Image/Deep Research as `configurator-option-chip` / `-selected`.
- **Sidebar/dock nav**: active item gets `primary` fill + pill shape; inactive items styled like `filter-chip`. For a macOS-dock-style nav specifically, add a subtle 3D hover interaction where it fits the project — icon lift/scale on hover (`transform: scale3d(...) translateY(...)` + soft shadow) — not required for a plain sidebar list.
- **Settings modal/forms**: use `text-input` and `button-primary` consistently.
- **New landing sections** (testimonials, pricing, CTA, footer): follow the light → dark → parchment → dark CTA → parchment footer rotation.

## Project-Wide Build Rules

These apply to any new ThunderStudy/Thunder page or app built using this skill:

1. **No emoji anywhere** — UI, icons, headings, content. Use inline SVG icons only (lucide-style line icons recommended).
2. **SEO / AEO / GEO friendly**: every page includes a descriptive `<title>`, meta description, Open Graph + Twitter Card tags, JSON-LD structured data (e.g. `EducationalOrganization`, `Course`, or `FAQPage` schema as relevant), semantic HTML (proper heading hierarchy, `<nav>`, `<main>`, `<footer>`), and an FAQ section written in clear Q&A format to support AI/answer-engine retrieval (AEO/GEO).
3. **Favicon & OG image**: `favicon.svg` and `og-image.png` are added directly to the same repo, in the **repo root** (same folder as `index.html`) — not a subfolder. Always reference them with a root-relative path so it works from any page depth, regardless of GitHub Pages sub-path:
   ```html
   <link rel="icon" type="image/svg+xml" href="/favicon.svg">
   <meta property="og:image" content="/og-image.png">
   <meta name="twitter:image" content="/og-image.png">
   ```
   **Header logo (top-left)**: `<img src="/favicon.svg" alt="Thunder">`, placed top-left of the nav — same file as the favicon, one asset for both uses. Do NOT generate or inline these files — they live as a single `favicon.svg` and `og-image.png` in the repo root that the site owner adds and maintains.
4. **Theme Colour Decision Rule**:

   **Step 1 — Check if user specified a theme colour in this request.**
   - If YES → use exactly what they said. Override anything below.

   **Step 2 — If no colour specified, check if this is an existing file being edited.**
   - If YES (editing existing file) → read the file, detect the dominant accent/palette already in use, and keep it. Do not change the theme.

   **Step 3 — If no colour specified AND it is a brand-new file.**
   - Apply the default palette from the Colors section above: `primary: #70a1fc` (light) / `#9A7AFB` (dark), with `secondary`, `accent-pink`, and `accent-yellow` available as decorative-only accents.

5. **Loading screen**: every app/page gets a branded loading/splash screen shown while JS/content loads, built as a **3D animation themed to that specific project** — not a flat 2D spinner or generic ring. Style: full-viewport overlay in the chosen palette, centered composition, with a genuine 3D element (CSS 3D transforms, or a lightweight lib like Three.js) whose motif reflects the project's subject — e.g. for ThunderStudy (education) a rotating 3D open book/stack of pages, a spinning globe, or a 3D graduation cap; for a mock-test/commerce project, a rotating 3D badge, clipboard, or coin. Pick a distinct motif per project rather than reusing one generic shape everywhere, and render it in the primary accent color as the dominant material/lighting tone. Remove the overlay once the page's `DOMContentLoaded` fires or after a max 1.5s timeout.
6. **Standard footer**: every page includes a footer organized into 3 columns:

   **Column 1 — Thunder**
   - [ThunderStudy](https://thunderstudy.indevs.in/) — home
   - [CBT Mock Platform](https://thunderstudy.indevs.in/dashboard)
   - [Free Study Material](https://blog.thunderstudy.indevs.in)
   - [Help / Donate](https://thunderstudy.indevs.in/help)

   **Column 2 — wondermayank**
   - [Mail](https://wondermayank.in/mail)
   - [Contact](https://wondermayank.in/contact)

   **Column 3 — Legal**
   - [Terms](https://wondermayank.in/terms)
   - [Privacy](https://wondermayank.in/privacy)
   - [Disclaimer](https://wondermayank.in/disclaimer)
   - [FAQ](https://wondermayank.in/fqa)

   Footer should follow the `footer` component spec (bg `surface`, `muted` text, `fine-print` copyright row). Copyright line: `© 2025 Thunder · by wondermayank`.

## Known Gaps / Open Decisions

- Existing animated gradient/blob hero conflicts with this system's flat-surface preference — confirm with user whether to keep as brand signature or migrate.
- Form validation/error states beyond text-input focus undefined — build using `error`/`success` colors if needed.
- Logo: always use `<img src="/favicon.svg" alt="Thunder">` (root-relative), placed top-left of the header/nav. One file, repo root, used as both favicon and nav logo.

---

## Pre-Build Checklist

Run through this list mentally before writing any code for a Thunder project. Every item must be confirmed or deliberately skipped with a reason.

### Theme & Colour
- [ ] Did the user specify a theme colour in this request? → use it
- [ ] If no colour specified: is this an existing file? → detect and keep its current palette
- [ ] If no colour specified AND new file → apply default palette (`primary: #70a1fc` light / `#9A7AFB` dark)
- [ ] `primary` used for all CTAs, links, focus rings, active states; `secondary`/`accent-pink`/`accent-yellow` used only decoratively (badges, tags, highlights) — never as a CTA

### Assets & Branding
- [ ] `favicon.svg` and `og-image.png` exist in the **repo root** (same folder as `index.html`) — not a subfolder
- [ ] `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` in `<head>` — root-relative, no absolute cross-domain URL needed
- [ ] `<meta property="og:image" content="/og-image.png">` in `<head>`
- [ ] `<meta name="twitter:image" content="/og-image.png">` in `<head>`
- [ ] Nav/header logo is `<img src="/favicon.svg" alt="Thunder">`, positioned top-left, pointing to the same root file — not a separate logo asset

### SEO / AEO / GEO
- [ ] `<title>` — descriptive, includes primary keyword
- [ ] `<meta name="description">` — 140–160 chars, natural language
- [ ] Open Graph tags: `og:title`, `og:description`, `og:url`, `og:type`, `og:image`
- [ ] Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] JSON-LD structured data block (`EducationalOrganization`, `Course`, or `FAQPage` as relevant)
- [ ] Semantic HTML: `<nav>`, `<main>`, `<article>`/`<section>`, `<footer>`, heading hierarchy h1→h2→h3
- [ ] FAQ section on page (Q&A format, plain language, for AEO/GEO answer-engine retrieval)
- [ ] No duplicate `<h1>` tags

### No Emoji Rule
- [ ] Zero emoji in headings, body, buttons, nav, footer, tooltips, placeholders
- [ ] All icons are inline SVG (lucide-style or custom — never emoji substitutes)
- [ ] SVG icons have `aria-hidden="true"` + adjacent visible text label or `aria-label` on the button

### Loading Screen
- [ ] Full-viewport overlay present, shown on initial load
- [ ] Loader is a themed **3D animation** matching the project's subject matter — not a flat 2D spinner
- [ ] Palette matches the theme colour chosen per the Theme Colour Decision Rule
- [ ] Built with CSS 3D transforms or a lightweight 3D lib (e.g. Three.js) as needed to achieve real depth
- [ ] Dismissed on `DOMContentLoaded` or after 1.5s max, whichever comes first
- [ ] Loading screen has `z-index` above all page content

### Dark Mode
- [ ] CSS custom properties (`--color-ink`, `--color-canvas`, etc.) used for all colours — no hardcoded hex in component styles
- [ ] `[data-theme="dark"]` on `<html>` remaps all tokens per the dark mode table
- [ ] Dark mode accent: `primary` swaps to `#9A7AFB` automatically per the dark-mode override table
- [ ] Theme toggle button in nav: SVG sun icon (light mode) / SVG moon icon (dark mode)
- [ ] `localStorage.setItem('theme', 'dark'/'light')` persists preference
- [ ] On page load: read `localStorage` → apply `data-theme` before paint (no flash)

### Layout & Components
- [ ] Section surfaces alternate (never same surface twice in a row): light → dark → parchment → dark → parchment
- [ ] No drop shadows on cards, nav, or buttons — depth from hairline border only
- [ ] `product-shadow` used only on hero illustration/mascot imagery
- [ ] All buttons/chips/interactive controls use `rounded.pill` (9999px)
- [ ] Cards use `rounded.lg` (18px)
- [ ] Text inputs use `rounded.sm` (8px)
- [ ] Full-bleed sections use `rounded.none`
- [ ] All touch targets ≥ 44×44px
- [ ] Button press state: `transform: scale(0.95)` + darkened `primary-active`
- [ ] Card CTAs use "LEARN MORE ›" pattern (uppercase, letter-spaced, chevron-terminated)

### Responsive
- [ ] Single column on phones (≤ 640px)
- [ ] Nav collapses to hamburger on ≤ 419px
- [ ] hero-display font scales: 56px desktop → 34px phone → 28px small phone
- [ ] Course cards: 1-up phone / 2-up tablet / 3-4up desktop

### Footer
- [ ] Three columns: Thunder / wondermayank / Legal
- [ ] All required links present (see Standard Footer spec above)
- [ ] Copyright line: `© 2025 Thunder · by wondermayank`
- [ ] Footer bg: `surface` (`#FFFFFF` light / `#1B1B1F` dark), text: `muted`
- [ ] No emoji in footer — link text only