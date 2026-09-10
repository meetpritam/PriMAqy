# Product Requirements Document (PRD) — PriMAqy Website

**Document Status:** Approved (Module 0 Foundation)  
**Version:** 1.0.0  
**Project:** PriMAqy Web Platform  
**Location:** Patna, Bihar, India  
**Brand Positioning:** PriMAqy — AI & Technology Venture  

---

## 1. Executive Summary

PriMAqy is an early-stage AI and technology venture focused on engineering practical, intelligent products. This Product Requirements Document specifies the architectural, functional, non-functional, legal, security, and growth requirements for the official PriMAqy web platform. The platform serves as the central digital portal for PriMAqy's brand identity, venture roadmap, business ecosystem, technology stack, and primary product flagship: **Toolsetic**.

## 2. Problem

Modern digital tools, AI solutions, and software productivity platforms are frequently overly fragmented, bloated, or difficult for everyday creators, developers, students, and founders to integrate into their workflows. Simultaneously, technology ventures face challenges communicating their core innovation, product vision, transparent roadmap, and verified startup credentials without resorting to misleading marketing claims or bloated architectures.

## 3. Opportunity

PriMAqy has the opportunity to establish a clean, high-performance, AI-first digital presence and product ecosystem. By building a production-grade digital platform from the ground up, PriMAqy can present its primary product—Toolsetic—alongside transparent company insights, business documents, tech architecture, and community initiatives while adhering to strict engineering standards and legal integrity.

## 4. Product Vision

*"Create an ecosystem of practical intelligent products that helps people and organizations work, create, and build better."*

## 5. Product Mission

*"Build practical technology that makes advanced digital capabilities easier to use."*

### Core Principles
- **Practicality**: Focus on real utility and immediate value over superficial novelties.
- **Accessibility**: Design for universal access across devices, networks, and technical backgrounds.
- **Simplicity**: Maintain intuitive workflows and clutter-free interfaces.
- **Innovation**: Apply modern AI models and sound engineering to solve daily productivity challenges.
- **Privacy & Security**: Enforce zero unauthorized tracking, secure data handling, and strict environment isolation.
- **Reliability**: Ensure high availability, zero layout shifts, and fast loading performance.
- **Long-term Thinking**: Architect for scale, modularity, and easy future CMS/database migration.

## 6. Target Users

1. **Developers**: Seeking high-speed AI utilities, API integrations, clean tools, and workflow automation.
2. **Creators**: Digital artists, writers, and media producers needing streamlined content workflows.
3. **Students**: Learners looking for accessible productivity tools, educational utilities, and AI assistance.
4. **Founders & Small Business Owners**: Entrepreneurs seeking efficient, cost-effective digital tools to run operations.
5. **Technology Enthusiasts**: Early adopters following AI developments, open technology, and innovative ventures.
6. **Incubator Reviewers & Partners**: Ecosystem partners reviewing venture progress, technical depth, and public documents.

## 7. User Personas

Detailed persona specifications are maintained in [`docs/01-product/USER-PERSONAS.md`](file:///C:/Users/prita/.gemini/antigravity/scratch/primaqy/docs/01-product/USER-PERSONAS.md). Key personas include:
- **Dev-Lead Dave** (Developer): Evaluates Toolsetic utilities and tech architecture.
- **Creator Clara** (Digital Content Creator): Uses productivity modules for daily workflow optimization.
- **Student Sam** (Academic): Relies on accessible, reliable AI utilities for study and research.
- **Founder Felix** (Startup Founder): Reviews PriMAqy roadmap, startup documents, and venture progress.

## 8. User Problems

- Tool fragmentation requiring multiple disconnected applications.
- Unreliable or overly expensive subscription models for simple digital tasks.
- Lack of clarity and transparency in startup communications and roadmap timelines.
- Bloated web applications with poor mobile performance and accessibility barriers.

## 9. Proposed Solution

The PriMAqy web platform acts as a unified digital ecosystem featuring:
- A high-speed corporate and technology portal introducing PriMAqy's mission, team, and tech stack.
- Dedicated product presentation for **Toolsetic** (AI-first digital productivity ecosystem).
- Transparent startup ecosystem including documents, roadmap, careers, media kit, and investor relations.
- Community and insights portal for publishing technical insights and building a user community.
- Strict legal and security compliance keeping verified facts clear and avoiding false claims.

## 10. Product Scope

The overall product ecosystem encompasses the PriMAqy brand identity, technical publications, community newsletter, business document registry, and the Toolsetic product suite.

## 11. Website Scope

The web application is structured across 6 development modules:
- **Module 0**: Initialization, PRD, Architecture, Rules, Docs, Routing Skeleton, Env & Git setup.
- **Module 1**: Core Corporate Website (`/`, `/about`, `/products`, `/products/toolsetic`, `/technology`, `/team`).
- **Module 2**: Business & Startup Ecosystem (`/startup`, `/startup/documents`, `/investors`, `/careers`, `/media`).
- **Module 3**: Content & Community (`/insights`, `/insights/[slug]`, `/community`, `/newsletter`).
- **Module 4**: Growth Engine (SEO, Structured Data, Analytics, Sitemap).
- **Module 5**: Legal Center & Production Launch (`/legal`, `/privacy`, `/terms`, `/legal/cookies`, etc.).

## 12. Feature Requirements

### Core Portal Features
- Server-rendered responsive layouts.
- Dynamic data integration driven by `src/data/`.
- Interactive navigation header and structured multi-column footer.
- Comprehensive brand asset preview and downloadable media kit.
- Business document registry with categories, status tags, and public/private access rules.

## 13. Non-Functional Requirements

- **Performance**: Initial Page Load < 1.5s on desktop, < 2.5s on mobile. First Contentful Paint (FCP) < 1.0s.
- **Scalability**: Zero client-side state mutation; static generation with incremental revalidation ready.
- **Reliability**: 99.9% uptime targeting Vercel Edge infrastructure.
- **Maintainability**: Fully typed TypeScript codebase with zero `any` declarations.

## 14. UX Requirements

- Clean, modern, technical visual identity with dark/light visual harmony.
- Mobile-first responsive design supporting 360px to 1920px viewports.
- Clear visual hierarchy with system typography (Geist / Inter).
- Micro-interactions on interactive cards and buttons using standard CSS transitions.

## 15. Accessibility Requirements

- Compliance with WCAG 2.1 Level AA standards.
- Semantic HTML tags (`<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`).
- Keyboard navigation support with visible focus outlines (`focus-visible:ring-2`).
- Accessible color contrast ratios (> 4.5:1 for normal text).
- Explicit `alt` attributes on all images and `aria-label` tags on icon buttons.

## 16. SEO Requirements

- Unique title and meta description for every public route.
- Canonical URL generation via `NEXT_PUBLIC_SITE_URL`.
- OpenGraph and Twitter card image integration.
- Automated `sitemap.xml` and `robots.txt` generation.
- JSON-LD structured data (`Organization`, `Product`, `WebSite`).

## 17. Security Requirements

- Environment variable protection (`.env.local` strictly git-ignored).
- Zero secret key exposure to client bundles (`NEXT_PUBLIC_` restricted to public values).
- Content Security Policy (CSP) and HTTP security header compliance.
- Form input validation using typed schemas in `src/lib/validation.ts`.

## 18. Analytics Requirements

- Privacy-preserving, modular event tracking in `src/lib/analytics.ts`.
- Core tracked events: `page_view`, `product_click`, `cta_click`, `newsletter_signup`, `contact_submit`, `outbound_click`.
- Zero collection of personally identifiable information (PII) without explicit user consent.

## 19. Content Requirements

- Clear, concise, technical, and professional tone of voice.
- Zero sensationalist claims, buzzword bloat, or misleading metrics.
- Editorial approval pipeline documented in `docs/10-content/EDITORIAL-RULES.md`.

## 20. Legal Requirements

- Strict compliance with legal guardrails defined in `src/data/company.ts`.
- Default positioning: `"PriMAqy — AI & Technology Venture"`.
- Prohibition of unverified corporate legal status claims (Private Limited, LLP, DPIIT, Startup Bihar, Patents, Trademarks).

## 21. Deployment Requirements

- Primary target: Vercel Free/Hobby tier.
- Automatic previews for pull requests on GitHub.
- Configurable custom domain migration path via `NEXT_PUBLIC_SITE_URL`.

## 22. Success Metrics

- **Performance**: Lighthouse score > 90 in Performance, Accessibility, Best Practices, and SEO.
- **Code Quality**: 0 ESLint warnings/errors and 0 TypeScript compilation errors.
- **Build Speed**: Production build completion < 2 minutes.

## 23. Risks

- Scope creep across development modules (Mitigation: Strict Module System boundaries in `docs/04-development/MODULE-SYSTEM.md`).
- Misrepresentation of corporate status (Mitigation: Centralized `entityStatus` guardrails).

## 24. Assumptions

- Initial deployment hosted on Vercel Hobby tier without backend database requirements for Module 0.
- Custom domain connection to occur in future production launch module.

## 25. Out of Scope

- User authentication, payments, database persistence, and dynamic API endpoints (deferred to future modules).

## 26. Future Expansion

- Seamless integration with Supabase / PostgreSQL backend.
- Dynamic CMS integration for Insights and Startup Documents.
- Interactive Toolsetic web applications and API gateway.
