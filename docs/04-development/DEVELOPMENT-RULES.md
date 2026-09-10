# Development Rules & Workflows — PriMAqy

---

## 1. Development Principles

1. **Strict TypeScript Discipline**: No `any` types. Declare explicit interfaces for props, data models, and API responses.
2. **Server Components First**: Default to Server Components (`.tsx`). Use `"use client"` only when client-side state, effects, or browser APIs are required.
3. **Data Layer Separation**: Do not hardcode strings or repetitive arrays in JSX. Store in `src/data/*.ts`.
4. **Legal Compliance Safety**: Verify company claims against `src/data/company.ts` legal guardrails.
5. **Clean Verification Gate**: Every module task must pass `npm run lint` and `npm run build` prior to completion.
