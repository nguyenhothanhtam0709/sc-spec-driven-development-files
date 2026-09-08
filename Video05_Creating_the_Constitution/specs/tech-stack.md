# Tech Stack

TypeScript end to end, on a small set of popular, reliable, well-documented
tools — nothing exotic, so the stack stays approachable and easy to hire/onboard
for.

## Backend

- **Language:** TypeScript
- **Framework:** [Express](https://expressjs.com/) — the most widely adopted
  Node.js server framework, battle-tested in production, huge ecosystem and
  community support. It directly satisfies Mary's ask for something
  "reliable" and "popular," and its simplicity keeps the codebase easy to
  read and extend.
- **API style:** REST — simple, well understood, easy to consume from the
  dashboard.
- **Dev tooling:** `tsx` (or `ts-node`) for running TypeScript directly in
  development; `tsc` for production builds (already scaffolded in
  `package.json`).

## Database

- **Engine:** SQLite — an embedded, zero-ops database that gives us real
  persistence from day one without standing up separate infrastructure.
  A great fit for a small clinic dataset (agents, ailments, therapies,
  appointments) and just as easy to run on a laptop as in a demo.
- **ORM:** [Prisma](https://www.prisma.io/) — popular, TypeScript-first,
  works great with SQLite, and gives us type-safe queries plus migrations
  and a seed workflow with minimal setup.

## Frontend (dashboard)

- **Framework:** React + TypeScript — a popular, reliable choice with a huge
  ecosystem, good docs, and broad hiring/teaching familiarity.
- **Delivery:** a single-page dashboard app that calls the Express REST API.
- **Browser support:** targets current versions of modern browsers (Chrome,
  Firefox, Safari, Edge), per Steve's ask for a polished, modern experience.

## Testing

- **Test runner:** [Vitest](https://vitest.dev/) — fast, TypeScript-native,
  works for both backend and frontend code.

## Open questions (to resolve later)

- Hosting/deployment target.
- Authentication approach for staff logins.
- Styling/UI library for the dashboard.
