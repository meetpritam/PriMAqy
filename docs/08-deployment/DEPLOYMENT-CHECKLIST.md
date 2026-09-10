# Deployment Verification Checklist — PriMAqy

---

## Pre-Flight Verification Gate

- [ ] All TypeScript types compile without errors (`npx tsc --noEmit`).
- [ ] ESLint passes with 0 warnings/errors (`npm run lint`).
- [ ] Production build completes successfully (`npm run build`).
- [ ] No unverified legal status claims exist in `src/data/company.ts`.
- [ ] `.env.local` is omitted from version control.
- [ ] Mobile responsive layout confirmed across 360px - 1920px.
- [ ] Dynamic `robots.txt` and `sitemap.xml` generated properly.
