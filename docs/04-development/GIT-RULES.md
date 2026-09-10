# Git Workflow & Commit Rules — PriMAqy

---

## 1. Branch Strategy

- `main`: Production-ready branch deployed to Vercel.
- `development`: Active integration branch for complete modules.
- `feature/*`: Specific feature branches (e.g. `feature/module-1-core-website`).
- `fix/*`: Bug fix branches.
- `docs/*`: Major documentation additions.

---

## 2. Conventional Commit Syntax

All commit messages must strictly follow the conventional commit format:

- `feat:` New feature added.
- `fix:` Bug fix implemented.
- `docs:` Documentation changes.
- `refactor:` Code restructuring without functional changes.
- `style:` Formatting, indentation, or CSS style adjustments.
- `test:` Adding or updating tests.
- `chore:` Maintenance, package updates, configuration edits.
- `security:` Security updates, env rules, guardrail enforcement.

---

## 3. Commit Safety Rules

- Never commit broken builds. Always run `npm run lint` and `npm run build` locally prior to committing.
- Never commit `.env` or `.env.local` files containing real API secrets.
