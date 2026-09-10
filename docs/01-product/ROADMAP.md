# Product & Venture Roadmap — PriMAqy

---

## Strategic Phases

```mermaid
gantt
    title PriMAqy Master Development Roadmap
    dateFormat  YYYY-MM-DD
    section Module 0
    Project Init & Engineering Foundation :active, m0, 2026-08-12, 2026-08-15
    section Module 1
    Core Corporate Website                : m1, 2026-08-16, 2026-08-30
    section Module 2
    Business & Startup Ecosystem          : m2, 2026-09-01, 2026-09-15
    section Module 3
    Content & Community Hub               : m3, 2026-09-16, 2026-09-30
    section Module 4
    Growth Engine & SEO                   : m4, 2026-10-01, 2026-10-15
    section Module 5
    Legal Center & Production Launch      : m5, 2026-10-16, 2026-10-31
```

---

## Phase Details

### Phase 1: Module 0 — Foundation (Current)
- Establish codebase, Next.js 16+ App Router, TypeScript, Tailwind CSS, Lucide React.
- Complete 37 master architectural and product documents.
- Configure legal guardrails (`src/data/company.ts`) and environment rules.

### Phase 2: Module 1 — Core Portal
- Deploy `/`, `/about`, `/products`, `/products/toolsetic`, `/technology`, `/team`.
- Establish responsive component design system and header/footer layouts.

### Phase 3: Module 2 — Business Ecosystem
- Launch `/startup`, `/startup/documents`, `/investors`, `/careers`, `/media`.
- Publish versioned public product briefs and brand asset repository.

### Phase 4: Module 3 — Content & Community
- Launch `/insights`, `/insights/[slug]`, `/community`, `/newsletter`.
- Integrate markdown publication pipeline and newsletter capture abstraction.

### Phase 5: Module 4 — Growth Engine
- Enable site-wide SEO metadata, dynamic `sitemap.xml`, `robots.txt`, JSON-LD.
- Connect modular event tracking in `lib/analytics.ts`.

### Phase 6: Module 5 — Production Launch
- Finalize Privacy Policy, Terms of Service, Cookie Policy, Legal Center.
- Run security audit, zero-lint check, production build, and Vercel launch.
