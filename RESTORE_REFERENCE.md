# Restore Reference

## Purpose
Fast recovery reference if pages or layout are accidentally changed.

## Critical Routes
- Main site: `/[lang]`
- Donations page: `/[lang]/ziedojumi`
- Footer source: `src/components/Footer.tsx`
- Header source: `src/components/Header.tsx`

## Recovery Playbook
1. Inspect recent changes:
   - `git status`
   - `git log --oneline -n 20`
2. Compare target files against known good commit:
   - `git show <commit>:src/components/Footer.tsx`
   - `git show <commit>:src/app/[lang]/ziedojumi/page.tsx`
   - `git show <commit>:src/app/[lang]/ziedojumi/ZiedojumiClient.tsx`
3. Restore specific files if needed:
   - `git checkout <commit> -- <file>`
4. Rebuild and restart:
   - `pnpm run build`
   - `pm2 restart dev2-frontend`
5. Verify pages:
   - `/lv`
   - `/lv/ziedojumi`

## Anti-Regression Checklist
- No unexpected visual changes unless explicitly requested.
- Keep small fixes local and minimal.
- Preserve user-provided text verbatim.
- Append `LOG.md` entry for each finished task.

## Current Known-Good Scope (2026-03-09)
- Footer restored to older approved style + EU info block + fixed social links.
- Ziedojumi page contains approved content and layout.
- ziedojumi2 route removed after migration.

