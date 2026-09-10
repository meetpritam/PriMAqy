# Feature Requirements — PriMAqy & Toolsetic

---

## 1. Core Corporate Website (Module 1)
- **Home (`/`)**: Hero positioning, venture mission, Toolsetic preview, key metrics (coming soon status), latest insights, newsletter CTA.
- **About (`/about`)**: Venture background (Patna, Bihar), core values, principles, and strategic vision.
- **Products (`/products`)**: Portfolio overview highlighting Toolsetic and future AI productivity suites.
- **Toolsetic Product Page (`/products/toolsetic`)**: In-depth feature breakdown, target personas, workflow integration, and early access sign-up.
- **Technology (`/technology`)**: Architecture overview, Next.js / TypeScript stack, security practices, and performance standards.
- **Team (`/team`)**: Founder profile, leadership standards, and engineering values.

## 2. Business & Startup Ecosystem (Module 2)
- **Startup (`/startup`)**: Venture story, incubator alignment, location details, and core mission.
- **Startup Documents (`/startup/documents`)**: Registry of public product briefs, company profiles, media kits, and roadmap PDFs with versioning and status flags (`Public`, `Private`, `In Review`).
- **Investor Relations (`/investors`)**: Venture roadmap, milestone timeline, funding status (`Bootstrapped / Self-Funded`), contact path.
- **Careers (`/careers`)**: Culture, engineering values, open roles placeholder (`Coming Soon`).
- **Media Kit (`/media`)**: Official brand logos, color palette, founder photos, press contact rules.

## 3. Content & Community Ecosystem (Module 3)
- **Insights Hub (`/insights`)**: Article list, category filters, reading time, publication dates.
- **Single Article Page (`/insights/[slug]`)**: Markdown/MDX content rendering, social sharing, related posts.
- **Community Portal (`/community`)**: Discussion guidelines, community feedback channels, open technology updates.
- **Newsletter (`/newsletter`)**: Email subscription form with validation, privacy assurance, and confirmation state.

## 4. Growth Engine (Module 4)
- **Dynamic SEO**: Next.js Metadata API for page title, description, canonical link, OpenGraph, and Twitter cards.
- **Sitemap & Indexing**: Automated `sitemap.xml` and `robots.txt` generation.
- **Structured Data**: JSON-LD scripts for `Organization`, `WebSite`, and `SoftwareApplication`.
- **Modular Analytics**: Modular event tracking (`lib/analytics.ts`) for page views, CTA clicks, form submits.

## 5. Legal Center & Security (Module 5)
- **Privacy Policy (`/privacy`)**: Data handling rules, zero unauthorized tracking, cookie disclosure.
- **Terms of Service (`/terms`)**: Acceptable use, intellectual property notice, disclaimer of warranties.
- **Legal Center Hub (`/legal`)**: Central directory of legal policies, status guardrails (`src/data/company.ts`), and contact methods.
- **Sub-Policies**: Cookie Policy (`/legal/cookies`), Community Guidelines (`/legal/community`), Content Policy (`/legal/content`).
