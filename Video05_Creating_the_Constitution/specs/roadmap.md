# Roadmap

High-level implementation order, in small phases. The goal is a thin,
working, end-to-end slice as early as possible, then broaden.

## Phase 0 — Scaffolding

- Express + TypeScript server that boots and answers a health-check route.
- Prisma configured against a local SQLite database file.
- Lint/build scripts wired up (building on the existing `package.json`).

## Phase 1 — Domain model

- Define the core Prisma schema: `Agent`, `Ailment`, `Therapy`, `Appointment`.
- Run the first migration and add a small seed script with sample data.

## Phase 2 — Thin vertical slice: booking an appointment

- One API endpoint to create an appointment, one to list them.
- One bare-bones dashboard page: a form to book an appointment and a list
  showing existing ones.
- No auth, no styling polish yet — the goal is proving the full stack
  (React → Express → Prisma → SQLite) works together end to end.

## Phase 3 — Ailments & therapies

- CRUD API endpoints for ailments and therapies.
- Dashboard views to browse ailments/therapies and link them to an agent's
  appointment.

## Phase 4 — Agent intake

- API + dashboard flow for registering a new agent and recording its
  ailment(s) on intake.
- Ties agents, ailments, and appointments together in the UI.

## Phase 5 — Dashboard UX pass

- Pull the dashboard views together into a cohesive staff experience:
  navigation, agent list/detail, appointment calendar view.
- Still no visual polish — focus on information architecture and usability.

## Phase 6 — Reliability & validation

- Input validation and error handling across API endpoints.
- Automated tests (Vitest) for core backend logic and key UI flows.

## Phase 7 — Visual polish

- Styling pass for an attractive, modern look (Steve's ask).
- Cross-browser check on current Chrome, Firefox, Safari, Edge.

## Phase 8 — Staff access control

- Basic authentication/login for staff so the dashboard isn't wide open.

## Phase 9 — Deployment

- Pick a hosting target, set up environment config, and get a real
  deployment live.
