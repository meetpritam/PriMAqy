# Security Rules & Environment Protection — PriMAqy

---

## 1. Secret Protection & Environment Isolation

1. **Zero Secret Leakage**: Never commit `.env` or `.env.local` files to Git. `.gitignore` MUST enforce strict exclusion rules.
2. **NEXT_PUBLIC_ Prefix Restriction**: Only variables intended to be publicly readable by the browser client (e.g. `NEXT_PUBLIC_SITE_URL`) may use the `NEXT_PUBLIC_` prefix. Secret keys (e.g. database credentials, email service keys) must remain un-prefixed server secrets.
3. **Legal Status Security**: Corporate claims are controlled through centralized guardrail constants in `src/data/company.ts`. Unverified corporate legal claims are strictly prohibited in public code.
4. **Third-Party Dependency Audit**: Before installing any npm package, verify its package size, security advisories, and maintenance status to prevent supply chain risks.
