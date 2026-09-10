# Information Architecture & Routing Matrix — PriMAqy

---

## 1. Complete Route Specifications

The PriMAqy web platform implements the following route structure:

| Route Path | Module | Purpose & Content Summary | Render Strategy |
| :--- | :--- | :--- | :--- |
| `/` | Module 1 | Primary landing page, venture mission, Toolsetic preview | Static (SSG) |
| `/about` | Module 1 | Venture identity, Patna origin, core principles, story | Static (SSG) |
| `/products` | Module 1 | Product suite overview & Toolsetic flagship introduction | Static (SSG) |
| `/products/toolsetic` | Module 1 | Deep-dive feature breakdown for Toolsetic ecosystem | Static (SSG) |
| `/technology` | Module 1 | Tech stack, engineering architecture, performance standards | Static (SSG) |
| `/startup` | Module 1 | Startup narrative, incubator alignment, mission scope | Static (SSG) |
| `/startup/documents` | Module 2 | Public business documents registry & downloadable briefs | Static (SSG) |
| `/team` | Module 1 | Leadership profile, founder standards, values | Static (SSG) |
| `/roadmap` | Module 1 | Development roadmap & milestone timeline | Static (SSG) |
| `/careers` | Module 2 | Culture, engineering principles, open roles placeholder | Static (SSG) |
| `/investors` | Module 2 | Investor relations, venture roadmap, contact path | Static (SSG) |
| `/media` | Module 2 | Official press kit, brand logos, vector assets | Static (SSG) |
| `/insights` | Module 3 | Technical insights, engineering articles, blog hub | Static (SSG) |
| `/insights/[slug]` | Module 3 | Dynamic article view for individual insight posts | Dynamic / ISR |
| `/community` | Module 3 | Community guidelines, feedback channels, open tech | Static (SSG) |
| `/newsletter` | Module 3 | Newsletter subscription landing page & form | Static (SSG) |
| `/contact` | Module 1 | Contact information, inquiry routing form | Static (SSG) |
| `/legal` | Module 5 | Legal center directory & status guardrail overview | Static (SSG) |
| `/legal/cookies` | Module 5 | Cookie policy & local storage disclosure | Static (SSG) |
| `/legal/community` | Module 5 | Community interaction & conduct policy | Static (SSG) |
| `/legal/content` | Module 5 | Content license, copyright, & usage policy | Static (SSG) |
| `/privacy` | Module 5 | Privacy policy & data protection standards | Static (SSG) |
| `/terms` | Module 5 | Terms of service & legal disclaimers | Static (SSG) |

---

## 2. Dynamic & Metadata Handlers

- `src/app/robots.ts`: Generates dynamic `robots.txt` based on `NEXT_PUBLIC_SITE_URL`.
- `src/app/sitemap.ts`: Generates dynamic `sitemap.xml` mapping all public routes with change frequency and priority.
- `src/app/not-found.tsx`: Global 404 error page.
- `src/app/error.tsx`: Global React error boundary for runtime exceptions.
- `src/app/loading.tsx`: Global loading visual skeleton fallback.
