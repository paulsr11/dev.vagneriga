# Work Log

## 2026-03-09

### Task: Restore and stabilize Footer + Ziedojumi
- Summary:
  - Restored footer style to approved older version and kept 7 sponsor logos.
  - Restored required EU/national plan info block in footer.
  - Fixed social links/icons in header and footer.
  - Migrated approved `ziedojumi2` version into `ziedojumi`.
  - Removed route `ziedojumi2` after promotion.

- Files changed:
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/app/[lang]/ziedojumi/page.tsx`
  - `src/app/[lang]/ziedojumi/ZiedojumiClient.tsx`
  - Removed:
    - `src/app/[lang]/ziedojumi2/page.tsx`
    - `src/app/[lang]/ziedojumi2/Ziedojumi2Client.tsx`

- Verification:
  - Production build succeeded.
  - PM2 restart succeeded.
  - `/lv/ziedojumi` loads.
  - `/lv/ziedojumi2` returns 404 after removal.

- Notes:
  - Temporary 502 can appear immediately after restart during warmup; subsequent checks were healthy.

