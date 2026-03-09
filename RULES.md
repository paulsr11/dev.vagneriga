# Project Rules

## 1) Visual Stability First
- Never change visual layout, spacing, typography, section order, component structure, or interaction style unless the user explicitly asks for visual/design changes.
- If the request is functional (bug fix/content/link), preserve exact current UI.
- For any unavoidable visual impact, document it before making the change.

## 2) Minimal-Change Principle
- If the requested fix is small, change only the smallest possible surface area.
- Do not refactor unrelated code for small fixes.
- Do not rename/move files unless strictly required.
- Avoid changing shared/core modules for local issues when a page-level fix is enough.

## 3) Small UI Change Procedure (minimum work / minimum tokens)
When the request is tiny (padding/font-size/color/text/link):
1. Locate exact component/element.
2. Change only the specific class/style/property.
3. Do not touch layout containers or data flow.
4. Build and quick-verify only affected page(s).
5. Log one concise entry in `LOG.md`.

## 4) Safety and Scope Control
- Never edit more files than necessary.
- Never revert unrelated user changes.
- Keep backward compatibility unless user requests breaking change.
- Prefer additive changes over destructive changes.

## 5) Deploy and Verification
- After substantive edits: run build, then restart app process.
- Verify target route(s) return healthy response.
- If warmup causes temporary 502 after restart, recheck after brief delay before further changes.

## 6) Version Preservation
- Every accepted milestone should be committed with a clear message.
- Push commits to GitHub after user asks to save remotely.
- Maintain `RESTORE_REFERENCE.md` with recovery steps and key paths.

## 7) Logging Discipline
- For each completed task, append to `LOG.md`:
  - Date/time
  - Request summary
  - Files changed
  - Verification done
  - Notes/risks

## 8) Data and Content Integrity
- Content updates must preserve user-provided wording exactly unless asked to rewrite.
- Links must be validated (path or URL) and open behavior should match request.

## 9) Performance and Reliability
- Avoid introducing unnecessary dependencies.
- Keep heavy operations (global refactors, broad rewrites) out of small tickets.
- Favor deterministic, reproducible steps.

