# ADR-0001: Initial Technical Architecture Selection

**Status:** Approved  
**Date:** 2026-08-12  
**Decision Maker:** Lead Software Architect  

---

## 1. Context & Problem Statement

PriMAqy requires a production-grade, highly scalable, and maintainable web platform to serve as its corporate portal, product showcase for Toolsetic, startup document registry, and technical insights hub. The architecture must prioritize fast load speeds, clean SEO metadata, zero client-side bloat, strict legal guardrails, and effortless future database migration.

---

## 2. Decision Summary

We selected **Next.js 16+ (App Router)** with **TypeScript**, **Tailwind CSS v4**, **Lucide React**, **Decoupled Data Architecture**, and deployment on **Vercel Edge Network via GitHub**.

---

## 3. Detailed Rationale

### Why Next.js 16+ & App Router?
- **Server Components by Default**: Reduces client-side JavaScript bundle sizes significantly by rendering static layouts on the server.
- **Built-in SEO & Metadata**: Native `Metadata` API supports dynamic OpenGraph, canonical URLs, and structured data out of the box.
- **Edge Deployment Optimization**: Native integration with Vercel Edge functions for instantaneous global content delivery.

### Why TypeScript?
- End-to-end static typing prevents runtime null pointer bugs and enforces rigid data schemas across company, product, and team models.

### Why Tailwind CSS v4?
- Utility-first CSS eliminates CSS file bloat through automated purging, ensuring predictable rendering without specificity wars.

### Why Decoupled Data Architecture (`src/data/`)
- Isolates presentation components from hardcoded copy. Enables strict enforcement of legal claim guardrails (`src/data/company.ts`) and provides a zero-refactor migration path to Supabase/PostgreSQL or CMS backends.

### Why Vercel & GitHub?
- Free Hobby tier hosting with automated Git-triggered previews and zero infrastructure maintenance overhead.

---

## 4. Consequences & Migration Considerations

- **Consequence**: Requires strict adherence to React Server Component rules (e.g. no direct hook calls in RSC).
- **Future Migration**: Upgrading to a dynamic database (Supabase/PostgreSQL) in future modules will require replacing imports from `src/data/*.ts` with async data fetching functions without refactoring UI components.
