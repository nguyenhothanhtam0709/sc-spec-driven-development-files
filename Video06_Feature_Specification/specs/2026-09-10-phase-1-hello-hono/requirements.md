# Requirements — Phase 1: Hello Hono

## Source

Roadmap phase: [Phase 1 — Hello Hono](../roadmap.md#phase-1--hello-hono), the first phase in AgentClinic's build-out. See [mission.md](../mission.md) and [tech-stack.md](../tech-stack.md) for overall context.

## Scope

This is the smallest possible shippable slice: stand up the server framework and prove the toolchain works end-to-end. Nothing about AgentClinic's actual domain (agents, therapists, appointments) is in scope yet.

In scope:
- Install and configure **Hono** as the server framework
- Run the server in development via **`tsx`** (no build step needed)
- A single route, `GET /`, rendering a minimal AgentClinic home page — a self-contained Hono JSX component (not a shared layout) whose body displays the text `"AgentClinic is open for business"`
- Confirm TypeScript typechecking works end-to-end (Hono's types resolve, JSX compiles, `tsc` builds cleanly)

Out of scope (deferred to later phases per the roadmap):
- A shared layout component (header, nav, main, footer) and any CSS (Phase 2 — "Base Layout")
- SQLite, migrations, or any data model (Phase 3+)
- Automated tests of any kind
- Error pages, logging middleware, input validation (Phase 10)

## Decisions

Decisions made with the project owner before implementation:

1. **No automated test for this phase.** Verification is manual (curl/browser) only. Vitest is confirmed as the project's test tool per tech-stack.md, but its setup and first tests are deferred to a later, dedicated phase rather than introduced piecemeal here. This keeps Phase 1 a true minimal "hello world" slice.
2. **Node adapter and port:** use `@hono/node-server` (the standard Node runtime adapter for Hono) listening on **port 3000**.
3. **No CSS, shared layout, or additional routes** — a single `/` route is sufficient to satisfy the roadmap's goal.
4. **The home page renders via Hono JSX**, matching tech-stack.md's templating choice, rather than returning a plain string. It stays a single, minimal, self-contained component — extracting a reusable layout is explicitly Phase 2's job, not this phase's.

## Context / constraints

- Tech stack mandates: TypeScript, Node.js, Hono, no build step in dev (`tsx`), `tsc` for production builds, `prettier` for formatting. See [tech-stack.md](../tech-stack.md).
- Existing repo state at the start of this phase: `package.json` has no dependencies yet; `src/index.ts` is a placeholder (`console.log('Happy developing ✨')`); `tsconfig.json` is already configured with `outDir: dist`, `strict: true`, targeting `es2016`/`commonjs`.
- This phase's `package.json` scripts should support both the dev workflow (`tsx`) and the production build workflow (`tsc`) described in tech-stack.md, since both are named as permanent parts of the toolchain, not just this phase.
