# Data Architecture & Legal Guardrails — PriMAqy

---

## 1. Decoupled Static Data Layer

PriMAqy decouples static presentation data from component rendering logic. All site content, metadata, legal statuses, team profiles, and roadmap items reside in typed TypeScript modules inside `src/data/`.

```
src/data/
├── company.ts     # Company metadata, origin (Patna, Bihar), legal claim status guardrails
├── products.ts    # Toolsetic flagship & product suite specifications
├── team.ts        # Founder and team profiles
├── roadmap.ts     # Milestone timeline & phase breakdown
├── navigation.ts  # Header navigation items & dropdown schemas
├── footer.ts      # Footer navigation columns & legal links
└── site.ts        # Site-wide meta defaults, OpenGraph parameters, social links
```

---

## 2. Legal Claim Status Guardrails (`src/data/company.ts`)

In accordance with Module 0 rules, corporate status attributes are hardcoded to `Unverified / Not Claimed` by default. They can ONLY be updated when verified legal configuration is provided.

```typescript
export interface LegalStatusGuardrails {
  entityStatus: 'PriMAqy — AI & Technology Venture' | string;
  isPrivateLimited: boolean;
  isLLP: boolean;
  isIncorporated: boolean;
  isDpiitRecognized: boolean;
  isStartupBiharRecognized: boolean;
  isPatentHolder: boolean;
  isTrademarkOwner: boolean;
  isGovernmentApproved: boolean;
  isInvestorBacked: boolean;
}

export const legalGuardrails: LegalStatusGuardrails = {
  entityStatus: 'PriMAqy — AI & Technology Venture',
  isPrivateLimited: false,
  isLLP: false,
  isIncorporated: false,
  isDpiitRecognized: false,
  isStartupBiharRecognized: false,
  isPatentHolder: false,
  isTrademarkOwner: false,
  isGovernmentApproved: false,
  isInvestorBacked: false,
};
```

---

## 3. Future Database Migration Schema (Supabase / PostgreSQL)

While Module 0 uses static `.ts` files, schemas are structured to map 1:1 to future database tables:

- `companies`: `id`, `name`, `tagline`, `location`, `legal_status_json`
- `products`: `id`, `slug`, `name`, `tagline`, `description`, `features_json`, `status`
- `team_members`: `id`, `name`, `role`, `bio`, `avatar_url`, `social_links_json`
- `roadmap_milestones`: `id`, `quarter`, `title`, `description`, `status`
- `insight_posts`: `id`, `slug`, `title`, `excerpt`, `content_mdx`, `author_id`, `published_at`
- `startup_documents`: `id`, `title`, `category`, `version`, `status`, `is_public`, `file_url`
