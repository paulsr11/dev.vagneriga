# Release Log

## 2026-04-22

- Added a safe WordPress media proxy endpoint at `/api/wp-media/[...path]` with path sanitization and caching.
- Enabled remote WordPress media loading in Next.js image settings.
- Updated live homepage and `/sponsori` route with explicit image sizing, smoother shared transitions, and reduced-motion-safe animations.

### Smoke Checks

- `npm run lint` passes.
- Open `/` and verify hero image loads from `/api/wp-media/...`.
- Open `/sponsori` and verify support/partner images render and cards animate smoothly.
- Confirm reduced-motion behavior by enabling `prefers-reduced-motion` in browser settings.
