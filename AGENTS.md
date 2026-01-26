# Vagneriga – Headless Frontend Agent Rules

## 1. Architecture
- **Backend (CMS only)**: WordPress at `dev.vagneriga.lv`
- **Frontend (Public site)**: Next.js (React) at `dev2.vagneriga.lv`
- WordPress does not render public pages.
- React fetches content from WordPress via REST API (Basic Auth in dev).

## 2. Design System (Mandatory)
- All visual values must be defined globally.
- No arbitrary spacing, font sizes, colors, or radii are allowed in components.

### Global style source
- Use a single global file:
  - `globals.css` (or `design-tokens.css`)
- Components may only reference variables from this file.

### Must be globalized:
- Section vertical spacing
- Grid / container widths
- Font sizes (h1–h6, body, small text, UI labels)
- Line heights and letter spacing
- Colors (backgrounds, text, accents, borders)
- Border radiuses
- Shadows

Hard-coded values inside components are not allowed unless explicitly justified.

## 3. Typography
- **Headings**:
  - Font: `Playfair Display`
  - Uppercase
  - Sizes defined via CSS variables (e.g. `--h1`, `--h2`)
- **Body / UI text**:
  - Font: `Inter`
- Typography scale must be consistent across all pages.

## 4. Layout Rules
- Header uses a fixed 3-column structure.
- Footer uses a fixed 4-column structure.
- Section padding and max width must come from global tokens.
- Components must not define their own layout spacing.

## 5. Components & Blocks
- Pages are composed from reusable blocks.
- Block components live in: `src/components/blocks/`
- Blocks must be layout-agnostic and rely on global spacing rules.
- Block order and content come from WordPress.

## 6. Images & Media
- Always use Next.js `<Image />`.
- Aspect ratios and object-fit rules must be consistent and reusable.
- Background overlays should be implemented as reusable utilities.

## 7. SEO
- SEO data is managed in WordPress.
- Next.js must render:
  - title
  - meta description
  - canonical
  - OpenGraph
  - structured data (if provided)
- SEO must not depend on client-side rendering.

## 8. Performance
- Prefer SSG or ISR for pages.
- Avoid client-side fetching for primary content.
- Optimize for Core Web Vitals.

## 9. Development Rules
- Never modify production environments or branches.
- All work happens on dev branches and dev domains.
- Use the `headless` API user for development.

## 10. Decision Rule
- If a visual value is missing:
  - Add it to the global design system.
  - Do not invent per-component values.
