# Quality Control & Testing Strategy — PriMAqy

---

## 1. Quality Assurance Verification Pipeline

Every development module must satisfy the 6-stage Quality Assurance pipeline:

1. **TypeScript Type Safety Check**: `npm run build` or `npx tsc --noEmit` enforcing zero compilation errors.
2. **ESLint Code Quality Verification**: `npm run lint` enforcing clean syntax and no dead code.
3. **Production Next.js Build**: `npm run build` validating static generation and route rendering.
4. **Responsive Breakpoint Inspection**: Visual inspection across 360px, 375px, 768px, 1024px, 1440px, and 1920px.
5. **Route Link Verification**: Zero broken internal routes across all navigation links.
6. **Accessibility Audit**: Keyboard navigation and WCAG contrast check.

---

## 2. Future Automated Testing Pipeline

- **Unit Testing**: Vitest / React Testing Library for utility functions in `src/lib/`.
- **End-to-End (E2E) Testing**: Playwright for critical user paths (newsletter submission, document downloading).
