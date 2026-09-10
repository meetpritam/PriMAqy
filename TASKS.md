# Task Tracker — PriMAqy Website

---

## Module 0: Project Initialization & Engineering Foundation

- [x] Inspect existing workspace and initialize Next.js 16+ App Router project
- [x] Set up package dependencies (`lucide-react`, `clsx`, `tailwind-merge`)
- [x] Create `.env.example` with security guardrails
- [x] Create `AGENTS.md` with instructions for future AI coding agents
- [x] Create `README.md` with complete architecture and setup guide
- [x] Create `LICENSE.md` with placeholder license statement
- [x] Create `CHANGELOG.md` starting with v0.1.0
- [x] Create `PROJECT_STATUS.md` dashboard
- [x] Create `TASKS.md` task tracker
- [x] Create Master Documentation System (`docs/` with 37 documents)
- [x] Implement Data Layer in `src/data/`
- [x] Implement Domain Interfaces in `src/types/`
- [x] Implement Utilities in `src/lib/`
- [x] Establish Route Skeleton in `src/app/`
- [x] Enforce legal claim guardrails (No unverified corporate claims)

---

## Module 1: Foundation + Core Corporate Website & Geist Design

- [x] Build Light/Dark ThemeProvider & ThemeToggle button (`src/components/theme/`)
- [x] Build Wordmark Logo component (`src/components/branding/Logo.tsx`)
- [x] Build reusable UI primitives (`Button`, `Badge`, `Card`, `SectionHeading`)
- [x] Build layout wrappers (`PageContainer`, `SectionWrapper`, `PageHeader`)
- [x] Build global sticky Navbar & accessible MobileMenu
- [x] Build multi-column corporate Footer with links and Patna location anchor
- [x] Build Homepage (`/`) with 11 custom section components
- [x] Build About page (`/about`)
- [x] Build Products overview page (`/products`)
- [x] Build Toolsetic flagship landing page (`/products/toolsetic`)
- [x] Build Technology page (`/technology`)
- [x] Build Startup portal page (`/startup`)
- [x] Build Team page (`/team`)
- [x] Build Roadmap page (`/roadmap`)
- [x] Build branded 404 page (`src/app/not-found.tsx`)
- [x] Build Loading skeleton fallback (`src/app/loading.tsx`)
- [x] Build Client Error boundary (`src/app/error.tsx`)
- [x] Implement Vercel Geist Design System tokens, display tracking (-2.4px), bimodal buttons (100px pills vs 6px app buttons), hairline cards, and hero mesh gradient

---

## Module 2: Business + Startup Ecosystem

- [x] Create domain interfaces (`documents.ts`, `careers.ts`, `inquiries.ts`, `media.ts`, `legal.ts`)
- [x] Create static data sources (`documents.ts`, `careers.ts`, `investors.ts`, `media.ts`, `community.ts`, `legal.ts`)
- [x] Build reusable `NewsletterForm.tsx` component
- [x] Build reusable `InquiryForm.tsx` supporting 7 inquiry categories
- [x] Upgrade Navbar with grouped hover dropdowns (`Products`, `Company`, `Startup`, `Resources`)
- [x] Upgrade MobileMenu with categorized navigation structure
- [x] Build Startup Documents portal (`/startup/documents`)
- [x] Build Investor Relations overview page (`/investors`)
- [x] Build Investor Contact page (`/investors/contact`)
- [x] Build Careers "Build With Us" page (`/careers`) with zero fake job listings state
- [x] Build Media Center hub (`/media`), Press Kit (`/media/press-kit`), & Brand Assets (`/media/brand-assets`)
- [x] Build Community Hub page (`/community`)
- [x] Build Newsletter subscription hub page (`/newsletter`)
- [x] Build Legal Center hub page (`/legal`) & 4 policy pages (`privacy`, `terms`, `cookies`, `disclaimer`)
- [x] Upgrade Contact page (`/contact`) with `InquiryForm`

---

## Module 3: Content + Community + Newsletter Expansion

- [x] Create domain interfaces (`src/types/article.ts`)
- [x] Create static data sources (`src/data/articles.ts`, `authors.ts`)
- [x] Create ContentRepository abstraction layer (`src/lib/contentRepository.ts`)
- [x] Build reusable content components (`ArticleCard`, `ArticleRenderer`, `ShareButtons`, `Breadcrumbs`)
- [x] Build Insights landing page (`/insights`)
- [x] Build full Article Reader page (`/insights/[slug]`)
- [x] Build Category landing page (`/insights/category/[category]`)
- [x] Build Tag landing page (`/insights/tag/[tag]`)
- [x] Build Author profile page (`/insights/author/[author]`)
- [x] Build Interactive Search page (`/insights/search`)
- [x] Build dynamic XML RSS Feed generator (`/rss.xml`)

---

## Module 4: Analytics + SEO + Growth Engine

- [x] Create typed analytics interfaces (`src/types/analytics.ts`)
- [x] Create conversion funnel data sources (`src/data/analytics.ts`)
- [x] Update analytics engine (`src/lib/analytics.ts`) with typed tracking, UTM parser & consent manager
- [x] Create JSON-LD structured data engine (`src/lib/structuredData.ts`) for `Organization`, `WebSite`, `BlogPosting`, `SoftwareApplication`
- [x] Inject `Organization` and `WebSite` JSON-LD schemas into root layout (`src/app/layout.tsx`)
- [x] Inject `SoftwareApplication` JSON-LD schema into Toolsetic landing page (`src/app/products/toolsetic/page.tsx`)
- [x] Update `robots.ts` with audited indexation rules
- [x] Update sitemap automation (`src/app/sitemap.ts`)
- [x] Create content silo and internal linking helper (`src/lib/contentSilos.ts`)
- [x] Create programmatic SEO architecture framework (`src/lib/programmaticSeo.ts`)

---

## Module 4.1: Leadership & Founding Team

- [x] Implement Single Source of Truth for Leadership (`src/data/team.ts` & `src/types/team.ts`)
- [x] Integrate real desktop photos (`/public/images/pritam.jpg` & `/public/images/anshu.jpg`)
- [x] Build dedicated leadership profile routes (`/team/pritam-kumar` & `/team/anshu-kumar`)
- [x] Create reusable `LeadershipSection` component
- [x] Injected `Person` JSON-LD structured data for Founder and Co-Founder

---

## Module 5: Production Launch & Final Security Audit

- [x] Configure production security headers in `next.config.ts` (`HSTS`, `nosniff`, `DENY`, `Referrer-Policy`, `Permissions-Policy`)
- [x] Disable `poweredByHeader` in Next.js config
- [x] Perform dependency security scan (`npm audit` -> 0 vulnerabilities)
- [x] Verify secret isolation in `.env.example` and `.gitignore`
- [x] Execute ESLint quality check (`npm run lint` -> 0 errors, 0 warnings)
- [x] Execute TypeScript check & production build (`npm run build` -> 54 SSG/static routes prerendered)
- [x] Create `docs/module-5-production-launch-audit.md`
