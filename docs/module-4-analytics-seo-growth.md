# Module 4 — Analytics + SEO + Growth Engine Documentation

**Document Version:** 1.0.0  
**Project Version:** `v0.5.0`  
**Status:** **COMPLETED**  
**Target Workspace:** `C:\Users\prita\.gemini\antigravity\scratch\primaqy`  

---

## 1. Overview & Objectives
Module 4 transformed PriMAqy into a measurable, discoverable, and privacy-conscious **Growth Engine**. Key infrastructure deliverables include:
- **Typed Analytics Engine (`src/lib/analytics.ts` & `src/types/analytics.ts`)**: 20+ strongly typed events (`page_view`, `cta_click`, `toolsetic_view`, `article_view`, `article_share`, `newsletter_signup`, `document_download`, `investor_contact_submit`, `career_application_submit`, `contact_submit`).
- **Privacy & Consent Architecture**: Anonymous session tracking, UTM campaign parser, and user consent state manager (`isAnalyticsAllowed`). Zero collection of sensitive PII or password logging.
- **Conversion Funnels & Data Layer (`src/data/analytics.ts`)**: Defined primary/secondary conversions and funnels (`Newsletter Funnel`, `Toolsetic Funnel`, `Investor Funnel`, `Career Funnel`).
- **Structured Data JSON-LD Engine (`src/lib/structuredData.ts`)**: Valid schemas generated for `Organization`, `WebSite`, `BlogPosting`, `SoftwareApplication` (Toolsetic), and `BreadcrumbList`.
- **Dynamic Sitemap & Audited Robots (`src/app/sitemap.ts` & `src/app/robots.ts`)**: Dynamic XML sitemap prerendering static pages, Insights articles, category paths, and document resources. Audited `robots.ts` allows public content while blocking private/admin paths.
- **Content Silos & Programmatic SEO Architecture (`src/lib/contentSilos.ts` & `src/lib/programmaticSeo.ts`)**: Contextual internal linking rules and unique topic hub architecture preventing thin doorway pages.

---

## 2. Analytics Event Matrix

| Event Name | Category | Trigger / Purpose |
| :--- | :--- | :--- |
| `page_view` | Traffic | Fired on route navigation with path & referrer |
| `cta_click` | Engagement | Button click on marketing CTAs |
| `toolsetic_view` | Product | User views Toolsetic flagship landing page |
| `article_view` | Content | User views an insight article |
| `article_share` | Growth | User shares article via X, LinkedIn, or Copy Link |
| `newsletter_signup` | Conversion | User submits email via NewsletterForm |
| `document_download` | Lead | User downloads a public startup brief |
| `investor_contact_submit` | Conversion | Investor submits inquiry form |
| `career_application_submit` | Talent | Builder submits general interest application |
| `contact_submit` | Conversion | General contact form submission |

---

## 3. SEO & Structured Data Checklist
- [x] Canonical URLs generated with HTTPS standard
- [x] JSON-LD Organization schema on root layout
- [x] JSON-LD WebSite search schema on root layout
- [x] JSON-LD SoftwareApplication schema on Toolsetic page
- [x] JSON-LD BlogPosting schema on Insights article reader
- [x] Dynamic `/sitemap.xml` automation
- [x] Audited `/robots.txt` indexation rules
