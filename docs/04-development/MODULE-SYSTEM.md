# Development Module Architecture System — PriMAqy

---

## 1. Overview & Operating Rule

The PriMAqy web platform is constructed across **6 sequential development modules**.

> [!CRITICAL]
> **Strict Module Scope Isolation**: No future module should violate Module 0 rules. An AI agent or human engineer working on a specific module MUST stop execution immediately after completing that module's assigned scope. Jumping ahead to unassigned future modules is strictly forbidden.

---

## 2. Sequential Development Modules

### MODULE 0: Project Initialization & Engineering Foundation (Current)
- Establish codebase, App Router, TypeScript, Tailwind CSS, Lucide React.
- Master Documentation System (`docs/` with 37 files).
- Legal guardrails (`src/data/company.ts`), `.env.example`, `AGENTS.md`, `README.md`.
- Route skeleton (18 routes + system files).

### MODULE 1: Foundation + Core Corporate Website
- Build reusable UI primitives and layout wrappers.
- Deploy `/`, `/about`, `/products`, `/products/toolsetic`, `/technology`, `/team`.

### MODULE 2: Business + Startup Ecosystem
- Deploy `/startup`, `/startup/documents`, `/investors`, `/careers`, `/media`.
- Implement versioned public business document registry and media kit.

### MODULE 3: Content + Community + Newsletter
- Deploy `/insights`, `/insights/[slug]`, `/community`, `/newsletter`.
- Integrate article rendering pipeline and newsletter subscription abstraction.

### MODULE 4: Analytics + SEO + Growth Engine
- Configure dynamic metadata, `robots.ts`, `sitemap.ts`, JSON-LD schemas.
- Connect event tracking abstractions in `lib/analytics.ts`.

### MODULE 5: Legal + Security + Production Launch
- Build `/legal`, `/privacy`, `/terms`, `/legal/cookies`, `/legal/community`, `/legal/content`.
- Complete security audit, production build, and Vercel launch.
