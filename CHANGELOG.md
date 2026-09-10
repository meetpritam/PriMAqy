# Changelog

All notable changes to the **PriMAqy Website** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.5.1] - 2026-08-28

### Added
- **MODULE 5 — Production Launch + Security + Performance Final Audit**:
  - Configured HTTP Security Headers in `next.config.ts` (`Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: origin-when-cross-origin`, `Permissions-Policy`).
  - Disabled `poweredByHeader` in Next.js configuration.
  - Performed dependency security audit via `npm audit` (0 vulnerabilities found).
  - Audited `.env.example` and `.gitignore` to ensure zero secret leakage to client bundles.
  - Executed ESLint check (`npm run lint` -> 0 errors, 0 warnings).
  - Executed Next.js production build (`npm run build` -> 54 static/SSG routes compiled).
  - Created Module 5 Audit Documentation (`docs/module-5-production-launch-audit.md`).
- **MODULE 4.1 — Leadership & Founding Team**:
  - Implemented Single Source of Truth for Leadership (`src/data/team.ts` & `src/types/team.ts`) featuring **Pritam Kumar** (*Founder*) and **Anshu Kumar** (*Co-Founder*).
  - Integrated real photographs uploaded from Desktop (`/public/images/pritam.jpg` & `/public/images/anshu.jpg`).
  - Created reusable `LeadershipSection` component featuring balanced Founder and Co-Founder cards.
  - Built dedicated SSG leadership profile routes: `/team/pritam-kumar` and `/team/anshu-kumar`.
  - Injected `Person` JSON-LD structured data for Founder and Co-Founder profiles.

---

## [0.5.0] - 2026-08-26

### Added
- **MODULE 4 — Analytics + SEO + Growth Engine**:
  - Implemented Typed Analytics Engine (`src/lib/analytics.ts` & `src/types/analytics.ts`) with 20+ strongly typed events.
  - Built Privacy & Consent Management (`isAnalyticsAllowed`, `setAnalyticsConsent`) and UTM Campaign Parser (`getUTMParams`).
  - Created Structured Data JSON-LD Engine (`src/lib/structuredData.ts`) for `Organization`, `WebSite`, `BlogPosting`, `SoftwareApplication` (Toolsetic), and `BreadcrumbList`.
  - Updated `robots.ts` and dynamic `sitemap.ts`.
