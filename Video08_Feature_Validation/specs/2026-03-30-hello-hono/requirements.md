# Phase 1 Requirements — Hello Hono

## Scope

Install and configure Hono with a `tsx` dev server. Expose a single `/` route that renders a minimal HTML home page via Hono JSX. Confirm TypeScript types work end-to-end.

## Out of Scope

- No navigation menu beyond the header's home link (full nav deferred to Phase 2)
- No test framework setup (Vitest deferred to a later phase)
- No database or additional routes
- No CI/CD pipeline

## Decisions

### Pin Hono version
Record the exact Hono version in `package.json` with no range prefix (e.g., `"hono": "4.x.y"`). Future phases must not silently upgrade without deliberate review.

### Enforce strict TypeScript
`tsconfig.json` must include `"strict": true`. This is non-negotiable from the first commit so the codebase never accumulates loose types.

### One layout subcomponent per file
`Header`, `Main`, and `Footer` are each their own component, in their own file (`src/components/Header.tsx`, `src/components/Main.tsx`, `src/components/Footer.tsx`), not inlined inside `Layout.tsx`. `Layout.tsx` only composes them. This keeps each subcomponent independently readable, editable, and (later) testable as the layout grows.

## Context

This phase exists to prove the baseline works: Node runs TypeScript, Hono serves a response, and the dev loop is functional. Nothing more.

The home page should render an `<h1>` containing "AgentClinic" and a short tagline that reflects the mission. The route returns HTML, not a plain string — Hono JSX handles the rendering.

This is the first visible page a developer sees when they clone and run the project.

## Stakeholder Notes

- **Mary** needs TypeScript end-to-end (satisfied by `strict: true` + successful `tsc --noEmit`)
- **Steve** has no requirements yet; this phase is plumbing only
