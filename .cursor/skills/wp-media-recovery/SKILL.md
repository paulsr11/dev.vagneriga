---
name: wp-media-recovery
description: Restore missing post images in Jaunumi, Pasakumi, and Galerija for the headless WordPress + Next.js stack. Use when images 404, wrong upload variants are referenced, or legacy wp-content URLs are mixed absolute/relative.
---

# WP Media Recovery

## Use this skill when
- Post cards or post content images are broken in `jaunumi`, `pasakumi`, or `galerija`.
- WordPress content contains legacy image URLs with mixed hosts or relative `/wp-content/uploads/...` paths.
- Image references include stale size/extension variants (for example `-150x150`, `-scaled`, wrong extension).

## Required architecture assumptions
- Next.js app serves frontend and has `/api/wp-media/[...path]`.
- WordPress uploads exist under `/wp-content/uploads/`.
- Nginx routes WordPress endpoints (`/wp-login.php`, `/wp-admin`, `/wp-json`, `/wp-content`) to CMS.

## Recovery workflow
1. Verify WP + app routing:
   - `curl -I https://<host>/wp-login.php`
   - `curl -I https://<host>/wp-json/wp/v2/posts?per_page=1`
   - `curl -I https://<host>/`
2. Ensure HTML upload rewriting handles both forms:
   - absolute: `https://.../wp-content/uploads/...`
   - relative: `/wp-content/uploads/...`
   - both must become `/api/wp-media/wp-content/uploads/...`
3. Harden `/api/wp-media/[...path]`:
   - reject path traversal
   - try candidate paths in this order:
     - original path
     - decoded path (`%20` => space)
     - filename variants removing `-<w>x<h>` and `-scaled`
     - extension fallbacks: `.jpg`, `.jpeg`, `.png`, `.webp`
   - try all candidate paths against each allowed media origin
   - if all remote fetches fail, try local `public` mirror and then generic fallback image
4. Keep cache headers on successful responses for stability.

## Verification checklist
- Build and restart app:
  - `pnpm build`
  - `pm2 restart <process>`
- Validate section pages render proxy refs:
  - `/lv/jaunumi`
  - `/lv/pasakumi`
  - `/lv/galerija`
- Sample image probe:
  - Collect 20-30 upload URLs from recent posts and send `HEAD` to `/api/wp-media/...`
  - Require near-100% 2xx/3xx for sampled URLs.

## Files usually touched
- `src/lib/media-url.ts`
- `src/app/api/wp-media/[...path]/route.ts`
- (if infra issue) `/etc/nginx/sites-available/<host>`
