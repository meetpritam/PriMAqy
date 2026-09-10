# Accessibility (a11y) Rules & Standards — PriMAqy

---

## 1. Compliance Standard

All public pages and components must target **WCAG 2.1 Level AA** compliance.

---

## 2. Core Accessibility Rules

1. **Semantic HTML Structure**: Use native semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<button>`, `<a>`). Never use `<div onClick>` or `<span onClick>` when an interactive button or link is intended.
2. **Keyboard Navigation**: All interactive elements must be fully operable via Keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`).
3. **Visible Focus**: Custom focus rings must be visible on interactive components (`focus-visible:ring-2 focus-visible:ring-offset-2`).
4. **Color Contrast Ratios**: Text elements must maintain a minimum contrast ratio of 4.5:1 against their background (3.0:1 for large text).
5. **Alternative Text (Alt)**: All non-decorative images must feature descriptive `alt` text. Decorative icons must use `aria-hidden="true"`.
6. **Form Labeling**: Every input field must have an explicitly associated `<label>` or `aria-label`.
7. **Heading Hierarchy**: Maintain strict heading nesting (`h1` -> `h2` -> `h3`). Never skip heading levels for visual styling.
8. **Reduced Motion**: Respect user OS motion preferences via `motion-reduce` media queries in animations.
