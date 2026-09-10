# Design Implementation Analysis — Geist Design System for PriMAqy

**Document Version:** 1.0.0  
**Design System Reference:** Vercel Geist Aesthetic (Developer Platform System)  
**Target Application:** PriMAqy Web Platform  

---

## 1. Design Overview

The Geist design language is a stark, high-contrast developer-platform aesthetic anchored on a near-white canvas (`#fafafa` in light mode, `#09090b` in dark mode) carrying near-black ink (`#171717` in light mode, `#fafafa` in dark mode). It relies on hairline 1px borders (`#ebebeb` / `#27272a`), tight display typography tracking (-2.4px on display headings), technical Geist Mono eyebrows, two distinct button radius standards (full 100px pills for marketing CTAs vs. 6px squares for nav/app controls), and a subtle multi-stop mesh gradient wash in the hero section.

---

## 2. Page Structure & Rhythm

The page structure follows a strict color-block rhythm:
1. **Sticky Header**: Near-white canvas (`#fafafa`), 1px bottom hairline (`#ebebeb`), logo, ghost links, 6px square CTA buttons.
2. **Hero Section**: Canvas background with a multi-stop mesh gradient bloom (cyan/blue/violet/magenta/amber), Geist Sans display heading, Geist Mono eyebrow, black pill marketing CTA (`100px` radius).
3. **Logo / Credibility Strip**: Hairline-bordered strip (`#ebebeb`) featuring Patna, Bihar location tag and technical domains in monochrome badges.
4. **Hairline Feature Grids**: 2-column, 3-column, and 4-column grids of flat `#ffffff` cards sitting on `#fafafa` canvas separated by 1px hairlines.
5. **Code / Engine Preview Cards**: Dark/monochrome code blocks and spec sheets set in Geist Mono.
6. **CTA Band**: High-contrast call-to-action band with primary pill buttons.
7. **Multi-Column Footer**: Top hairline border, multi-column link groups, and Patna, Bihar legal guardrail credits.

---

## 3. Component Hierarchy

```
src/components/
├── branding/
│   └── Logo.tsx                     # Monospaced/Geist wordmark with 6px icon container
├── theme/
│   ├── ThemeProvider.tsx            # Geist color scheme engine
│   └── ThemeToggle.tsx              # 6px square theme switcher
├── ui/
│   ├── Button.tsx                   # Bimodal buttons: pill (100px) marketing CTAs & 6px square nav CTAs
│   ├── Badge.tsx                    # Geist Mono / Sans technical pill badges (64px / 6px)
│   ├── Card.tsx                     # 12px/16px rounded white card with 1px hairline border
│   └── SectionHeading.tsx           # Geist Mono uppercase eyebrow + Geist Sans display heading (-1.28px tracking)
├── layout/
│   ├── PageContainer.tsx            # Max 1200px centered container
│   ├── SectionWrapper.tsx           # Vertical spacing (96px - 128px section padding)
│   └── PageHeader.tsx               # Dedicated page hero header
├── navigation/
│   ├── Navbar.tsx                   # Top navigation with hairline border and 6px action buttons
│   ├── MobileMenu.tsx               # Full-screen mobile overlay
│   └── Footer.tsx                   # Multi-column footer with hairline divider
└── sections/
    ├── HeroSection.tsx              # Hero with multi-stop mesh gradient & pill CTA
    ├── TrustStrip.tsx               # Hairline credibility strip
    ├── ProblemSection.tsx           # 3-up hairline grid
    ├── SolutionSection.tsx          # 3-pillar hairline grid
    ├── ProductsSection.tsx          # Toolsetic card with mesh accent
    ├── TechHighlightsSection.tsx    # 5-card technology grid
    ├── WhyPrimaqySection.tsx        # 4-card core principles grid
    ├── StartupAnchorSection.tsx     # Patna, Bihar location card
    ├── RoadmapPreviewSection.tsx    # Timeline phase grid
    ├── TeamPreviewSection.tsx       # Founder card
    └── FinalCTASection.tsx          # End-of-page CTA band
```

---

## 4. Typography Tokens

- **Font Family**: Geist Sans (Prose & UI) & Geist Mono (Code, Technical tokens, Uppercase section eyebrows).
- **`display-xl`**: `48px` / Line Height `48px` / Letter Spacing `-2.4px` / Weight `600`.
- **`heading-lg`**: `32px` / Line Height `40px` / Letter Spacing `-1.28px` / Weight `600`.
- **`heading-md`**: `20px` / Line Height `28px` / Letter Spacing `-0.4px` / Weight `600`.
- **`mono-eyebrow`**: `12px` / Line Height `16px` / Letter Spacing `0px` / Weight `500` (Geist Mono, Uppercase).
- **`body-lg`**: `16px` / Line Height `24px` / Weight `400`.
- **`body-md`**: `14px` / Line Height `20px` / Weight `400`.
- **`button-lg`**: `16px` / Line Height `20px` / Weight `500` (Pill CTAs).
- **`button-md`**: `14px` / Line Height `20px` / Weight `500` (6px Nav CTAs).

---

## 5. Color System & Tokens

### Light Mode (Primary Canvas)
- `canvas`: `#fafafa` (Near-white page sheet)
- `canvas-elevated`: `#ffffff` (Pure white for cards and inputs)
- `ink` / `primary`: `#171717` (Defining near-black text, primary buttons, borders)
- `body`: `#4d4d4d` (Secondary paragraph text)
- `mute`: `#8f8f8f` (Captions, metadata)
- `hairline`: `#ebebeb` (1px structural border)
- `hairline-soft`: `#f2f2f2` (Subtle panel fill)
- `link`: `#0070f3` (Vercel blue inline link & focus ring)

### Dark Mode
- `canvas`: `#09090b` (Near-black page sheet)
- `canvas-elevated`: `#121215` (Slightly elevated dark card surface)
- `ink` / `primary`: `#fafafa` (Defining white text)
- `body`: `#a1a1aa` (Secondary paragraph text)
- `mute`: `#71717a` (Captions, metadata)
- `hairline`: `#27272a` (1px structural border)
- `hairline-soft`: `#18181b` (Subtle dark fill)
- `link`: `#0070f3`

### Mesh Gradient Accent
- Multi-stop mesh bloom in Hero: Cyan (`#50e3c2`), Blue (`#007cf0`), Violet (`#7928ca`), Magenta (`#ff0080`), Amber (`#f9cb28`).

---

## 6. Spacing Scale

- `xxs`: `4px` · `xs`: `8px` · `sm`: `12px` · `md`: `16px` · `lg`: `24px` · `xl`: `32px` · `2xl`: `40px` · `3xl`: `64px` · `4xl`: `96px` · `section`: `128px`.

---

## 7. Border Radius Scale

- `none`: `0px`
- `sm`: `6px` (Nav buttons, app controls, inputs)
- `md`: `12px` (Feature cards, code blocks)
- `lg`: `16px` (Pricing cards, major panels)
- `pill-category`: `64px` (Category pills)
- `pill`: `100px` (Marketing CTAs)
- `full`: `9999px` (Circular icon buttons)

---

## 8. Button System

1. **Marketing Pill Primary (`button-primary`)**: Black background (`#171717`), white text, `100px` pill radius, `0px 16px` padding, 44px height.
2. **Marketing Pill Secondary (`button-secondary`)**: White background (`#ffffff`), ink text, 1px hairline border (`#ebebeb`), `100px` pill radius.
3. **App / Nav Primary (`button-primary-sm`)**: Black background (`#171717`), white text, `6px` square radius, `0px 10px` padding.
4. **App / Nav Secondary (`button-ghost-sm`)**: White background (`#ffffff`), ink text, 1px hairline border, `6px` square radius.

---

## 9. Implementation Mapping to Existing Repository

- **Preserved**: All data models (`src/data/company.ts`, `products.ts`, `team.ts`, `roadmap.ts`, `navigation.ts`, `footer.ts`, `site.ts`), types (`src/types/`), legal status guardrails (`entityStatus`), routing skeleton (`src/app/`), and Module 0/1 documentation.
- **Updated**:
  - `src/styles/globals.css`: Define exact Geist design tokens (colors, font variables, tracking, shadows).
  - `src/components/ui/Button.tsx`: Support bimodal radius (`pill` vs `sm`).
  - `src/components/ui/Badge.tsx`: Geist Mono eyebrow styling.
  - `src/components/ui/Card.tsx`: Hairline border (`#ebebeb` / `#27272a`) on elevated canvas (`#ffffff` / `#121215`).
  - `src/components/sections/*`: Update hero with multi-stop mesh gradient, Geist display tracking, and Geist Mono technical eyebrows across all 11 homepage sections and core pages.
