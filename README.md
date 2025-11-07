# MERN Bug Tracker (Minimal)
This archive contains a minimal MERN-style bug tracker scaffold for the assignment.
It includes a backend (Express, in-memory model) and a frontend (Vite + React).

## What is included
- backend/: Express app with routes, controllers, in-memory model, Jest + Supertest tests.
- frontend/: Vite + React app with components and Vitest + Testing Library tests.
- tests for both sides, and a small sample-data.json file with example bugs.

## How to run (locally)
- Backend:
  cd backend
  npm install
  npm test    # runs backend tests
  npm run dev # runs server on port 4000
- Frontend:
  cd frontend
  npm install
  npm run test # runs frontend tests (vitest)
  npm run dev  # runs Vite dev server (default 5173)

## Notes
- The backend uses a simple in-memory model so you don't need MongoDB to run tests.
- The sample-data.json file contains two example bugs; you can import or use it as reference.
- CI: not included by default. Add a GitHub Actions workflow to run tests on push.
