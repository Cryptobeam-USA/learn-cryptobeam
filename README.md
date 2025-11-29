# Learn Cryptobeam

Education hub for Cryptobeam onboarding and best practices.

Stack: Vite + React (Node 20).

## Features to wire next
- Courses + lessons
- Hands-on labs
- Progress tracking

## Project layout
- index.html: Vite entry
- src/main.jsx: React root
- src/index.jsx: UI shell showing checklist + feature slices
- src/config.js: product metadata and feature checklist
- src/services/apiClient.js: health/status fetcher using VITE_API_BASE_URL
- .env.example: API base URL + token placeholders
- .devcontainer/: Node 20 devcontainer
- .github/workflows/ci.yml: lint/test/build

## Quick start
- npm install
- npm run dev
- npm run test
- npm run build

## AI / Codex Guidance

You are the engineering copilot for a **front-end app/website** in the Cryptobeam/DAMA ecosystem.

Scope:
- Focus on **UI, UX, and client-side logic** only.
- This repo should:
  - Consume APIs from back-end services,
  - Display data, forms, dashboards, and educational content,
  - Handle client-side validation and user flows.

Guardrails:
- Do NOT implement business-critical pricing, risk, or compliance logic only in the front-end; that belongs in back-end services.
- Never hard-code secrets, API keys, or environment-specific URLs; use env/config files or build-time config.
- For anything KYC/AML- or trading-related, treat the front-end as a **view** of server-side decisions, not the source of truth.

Style:
- Prefer clean components, clear folder structure, and explicit calls to back-end APIs.
- Keep changes scoped and easy to integrate into existing React/JS structure.
