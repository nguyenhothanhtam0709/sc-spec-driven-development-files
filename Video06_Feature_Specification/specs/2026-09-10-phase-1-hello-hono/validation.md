# Validation — Phase 1: Hello Hono

This phase is ready to merge when all of the following are true.

## Functional

- [ ] `GET /` renders a minimal HTML home page (valid document, `<title>AgentClinic</title>`) whose body displays the exact text `AgentClinic is open for business` (verified manually via curl or browser — no automated test for this phase, per [requirements.md](./requirements.md#decisions))
- [ ] Response `Content-Type` is `text/html`
- [ ] The home page is a self-contained component — no shared layout, header/nav/footer, or CSS has crept in (that's Phase 2)

## Toolchain

- [ ] `npm run build` (`tsc`) completes with **zero** type errors, including the JSX in the home page component
- [ ] `npm run dev` boots the server via `tsx` without errors or warnings, and reflects source changes without a manual restart
- [ ] `npm run build && npm start` boots the compiled server via `node dist/index.js` without errors, and serves the same `/` response as `npm run dev`
- [ ] `prettier` reports no formatting diffs across the repo (or `npm run format` produces no unexpected changes)

## Sign-off

- [ ] Manual check confirms the server runs on port `3000` as specified
- [ ] Diff reviewed against [plan.md](./plan.md) — no scope beyond what's listed (no shared layout, no CSS, no DB, no tests) has crept in
- [ ] `specs/roadmap.md` Phase 1 goals are all satisfied: Hono installed/configured with `tsx` dev server, single `/` route rendering the minimal home page, TypeScript confirmed end-to-end
