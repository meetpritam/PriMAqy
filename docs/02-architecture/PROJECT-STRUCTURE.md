# Project Directory & File Structure — PriMAqy

---

## Directory Blueprint

```
primaqy/
├── docs/                             # Master Documentation System (37 documents)
│   ├── 00-project/                   # Project identity & meta
│   ├── 01-product/                   # PRD, Vision, Personas, Features, Roadmap, Metrics
│   ├── 02-architecture/              # Architecture, Tech Stack, Routing, Data, Security
│   ├── 03-design/                    # Design System, UX, Responsive, Accessibility
│   ├── 04-development/               # Development Rules, Standards, Naming, Git, Module System
│   ├── 05-security/                  # Security Rules, Env Variables, Threat Model
│   ├── 06-seo/                       # SEO Strategy, Indexing, Structured Data
│   ├── 07-analytics/                 # Analytics Plan
│   ├── 08-deployment/                # Vercel Setup, Checklist, Domain Migration
│   ├── 09-legal/                     # Legal Content Plan
│   ├── 10-content/                   # Content Strategy, Editorial Rules
│   └── 11-decisions/                 # Architecture Decision Records (ADR-0001)
│
├── src/
│   ├── app/                          # Next.js App Router Page Entrypoints
│   │   ├── about/                    # About page route
│   │   ├── products/                 # Products overview
│   │   │   └── toolsetic/            # Toolsetic flagship product page
│   │   ├── technology/               # Technology stack & architecture page
│   │   ├── startup/                  # Startup portal
│   │   │   └── documents/            # Public document registry
│   │   ├── team/                     # Leadership & team page
│   │   ├── roadmap/                  # Venture roadmap page
│   │   ├── careers/                  # Careers & culture page
│   │   ├── investors/                # Investor relations page
│   │   ├── media/                    # Press kit & brand media assets
│   │   ├── insights/                 # Insights & technical blog hub
│   │   │   └── [slug]/               # Dynamic insight article view
│   │   ├── community/                # Community hub
│   │   ├── newsletter/               # Newsletter subscription page
│   │   ├── contact/                  # Contact page
│   │   ├── legal/                    # Legal center hub
│   │   │   ├── cookies/              # Cookie policy
│   │   │   ├── community/            # Community guidelines
│   │   │   └── content/              # Content policy
│   │   ├── privacy/                  # Privacy policy
│   │   ├── terms/                    # Terms of service
│   │   ├── not-found.tsx             # 404 page boundary
│   │   ├── error.tsx                 # Client error boundary
│   │   ├── loading.tsx               # Route loading UI fallback
│   │   ├── layout.tsx                # Root HTML/CSS layout wrapper
│   │   ├── page.tsx                  # Home page route
│   │   ├── robots.ts                 # Dynamic robots.txt handler
│   │   └── sitemap.ts                # Dynamic sitemap.xml handler
│   │
│   ├── components/                   # Modular Component Library
│   │   ├── ui/                       # Low-level UI primitives (buttons, badges)
│   │   ├── layout/                   # Container & section wrappers
│   │   ├── navigation/               # Navbar & Footer components
│   │   ├── branding/                 # Logo & brand elements
│   │   ├── sections/                 # Reusable page sections (Hero, Features, Roadmap)
│   │   ├── cards/                    # Product, Article, Team cards
│   │   ├── forms/                    # Contact & Newsletter forms
│   │   ├── content/                  # Markdown & article rendering components
│   │   ├── legal/                    # Policy & legal document layout components
│   │   └── analytics/                # Analytics script injector
│   │
│   ├── data/                         # Static Decoupled Data Modules
│   │   ├── company.ts                # Primary company profile & legal guardrails
│   │   ├── products.ts               # Toolsetic & product catalog data
│   │   ├── team.ts                   # Team members & leadership details
│   │   ├── roadmap.ts                # Milestone timeline data
│   │   ├── navigation.ts             # Header links & navigation structure
│   │   ├── footer.ts                 # Footer links & corporate details
│   │   └── site.ts                   # Site-wide SEO & configuration defaults
│   │
│   ├── lib/                          # Core Utilities & Modules
│   │   ├── utils.ts                  # Class merger (cn) and general utilities
│   │   ├── seo.ts                    # Dynamic metadata generator helper
│   │   ├── analytics.ts              # Event tracking abstraction
│   │   ├── validation.ts             # Schema validation placeholders
│   │   └── constants.ts              # Site-wide constants
│   │
│   ├── types/                        # TypeScript Interface Definitions
│   │   ├── company.ts                # Company profile & legal status types
│   │   ├── product.ts                # Product schemas
│   │   ├── team.ts                   # Team member schemas
│   │   └── content.ts                # Insight post & document schemas
│   │
│   └── styles/                       # CSS Global Styling & Design Tokens
│       └── globals.css               # Tailwind v4 import & theme variables
│
├── public/                           # Static Public Assets
│   ├── brand/                        # Official logos and identity vectors
│   ├── documents/                    # Public PDFs and product briefs
│   ├── images/                       # Optimized web images
│   ├── icons/                        # Custom SVG icons
│   └── fonts/                        # Local font fallbacks
│
├── .env.example                      # Environment variables template
├── AGENTS.md                         # Rules for AI coding agents
├── README.md                         # Master technical documentation
├── CHANGELOG.md                      # Release log
├── PROJECT_STATUS.md                 # Module progress dashboard
├── TASKS.md                          # Task tracker across all modules
├── LICENSE.md                        # Proprietary license placeholder
├── package.json                      # Node.js manifest & dependencies
└── tsconfig.json                     # TypeScript compiler configuration
```
