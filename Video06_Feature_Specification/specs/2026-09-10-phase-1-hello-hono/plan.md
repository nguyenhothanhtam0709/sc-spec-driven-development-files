# Plan — Phase 1: Hello Hono

## 1. Install dependencies

- Add runtime dependency: `hono`
- Add runtime dependency: `@hono/node-server` (Node adapter for Hono)
- Add dev dependency: `tsx`
- Add dev dependency: `prettier` (formatting is part of the standing toolchain per tech-stack.md)

## 2. Implement the app

- Create the Hono app instance in `src/index.ts`
- Register a single route: `GET /`
- Wire the app into `@hono/node-server`, listening on port `3000`
- Log a startup message (e.g. `AgentClinic listening on http://localhost:3000`) so `npm run dev` gives visible confirmation the server is up

## 3. Build a minimal AgentClinic home page

- Render the `/` route's response via **Hono's server-side JSX** (`c.html(...)`), per tech-stack.md's templating choice — not a plain-text/string response
- Keep it to a single, minimal JSX component: a valid HTML document (`<html>`, `<head><title>AgentClinic</title></head>`, `<body>`) whose body displays the text `AgentClinic is open for business`
- No shared layout component, header/nav/footer, or CSS yet — those are explicitly Phase 2 ("Base Layout") scope. This is one self-contained component, not the reusable layout.
- Response `Content-Type` should be `text/html`

## 4. Configure package.json scripts

- `dev`: run `src/index.ts` directly via `tsx watch` (no build step, restarts on save)
- `build`: `tsc` (already present — confirm it still targets `src` → `dist` correctly now that `src/index.ts` has real content)
- `start`: `node dist/index.js` (runs the compiled build, for parity with a production-style run)
- `format`: `prettier --write .` (or equivalent) so formatting is a first-class, repeatable command

## 5. Confirm TypeScript end-to-end

- Run `tsc` (via `npm run build`) and confirm zero type errors — Hono's, `@hono/node-server`'s, and the JSX types should resolve cleanly under the existing `strict: true` tsconfig
- Confirm `tsconfig.json` is configured for Hono's JSX (`jsx`/`jsxImportSource` compiler options) so the home page component typechecks
- Spot-check editor/type inference on the route handler (e.g. hovering the context param) to confirm Hono's types are actually flowing, not just silently `any`

## 6. Manual verification

- Run `npm run dev`, confirm the server boots without errors
- Open `http://localhost:3000/` in a browser (or `curl`) and confirm the page renders as HTML with the text `AgentClinic is open for business` visible in the body
- Run `npm run build` followed by `npm start` and repeat the same check against the compiled output, to confirm dev and build paths agree
