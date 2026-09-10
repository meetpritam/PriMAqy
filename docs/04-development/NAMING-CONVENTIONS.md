# Naming Conventions — PriMAqy

---

## Naming Standards Across Codebase

| Artifact | Convention | Example |
| :--- | :--- | :--- |
| **Components** | `PascalCase.tsx` | `HeroSection.tsx`, `ProductCard.tsx` |
| **Utilities & Data** | `camelCase.ts` | `company.ts`, `validation.ts`, `seo.ts` |
| **Type Interfaces** | `PascalCase` | `CompanyInfo`, `ProductItem`, `TeamMember` |
| **Functions** | `camelCase` | `constructMetadata()`, `formatDate()` |
| **Constants** | `UPPER_SNAKE_CASE` | `DEFAULT_SITE_URL`, `MAX_ITEM_COUNT` |
| **CSS Classes** | Tailwind Utility / `kebab-case` | `text-muted-foreground`, `btn-primary` |
| **Route Folders** | `kebab-case` | `/products/toolsetic`, `/startup/documents` |

---

## Prohibited Names

Never use meaningless, ambiguous, or temporary names:
- ❌ `x.tsx`, `abc.tsx`, `temp.tsx`, `final.tsx`, `new.tsx`, `data2.ts`
