# Technology Stack — PriMAqy

---

## 1. Core Framework & Engine

- **Next.js 16+ (App Router)**: Modern React framework offering React Server Components (RSC), automatic code splitting, optimized static generation (SSG), and edge streaming.
- **React 19**: Standard UI engine supporting modern concurrent rendering patterns and action hooks.
- **TypeScript 5+**: End-to-end static typing enforcing zero implicit `any` types across data models, components, and libraries.

## 2. Styling & UI Design System

- **Tailwind CSS v4**: Utility-first CSS framework delivering minimal CSS bundle size via automated purging.
- **Lucide React**: Lightweight vector icon library replacing heavy font icons.
- **clsx & tailwind-merge**: Class utility (`cn`) enabling clean dynamic class composition without specificity collisions.

## 3. Data & Utility Layer

- **Decoupled Data Architecture**: Static TypeScript data files (`src/data/*.ts`) serving as the source of truth for company, product, roadmap, and team data.
- **Validation**: Schema validation wrappers in `src/lib/validation.ts`.
- **Analytics Abstraction**: Privacy-compliant tracking interface in `src/lib/analytics.ts`.

## 4. Hosting & Infrastructure

- **Deployment Platform**: Vercel Edge Network (Free / Hobby tier initial hosting).
- **Source Control**: Git & GitHub.
- **Environment Strategy**: Environment variable management via `.env.example` and Vercel project environment settings.

## 5. Technology Matrix

| Layer | Selected Tech | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16+ App Router | High performance, RSC default, built-in SEO metadata and routing. |
| **Language** | TypeScript | Type safety, maintainability, auto-complete developer experience. |
| **Styling** | Tailwind CSS v4 | Rapid design system iteration, zero runtime CSS overhead. |
| **Icons** | Lucide React | Clean, accessible vector icons with minimal tree-shaken footprint. |
| **Data Layer** | Static `.ts` Data Modules | Zero database dependency for Module 0; effortless migration path to CMS/PostgreSQL. |
| **Hosting** | Vercel Hobby Tier | Instant deployment, automatic preview environments, global edge CDN. |
