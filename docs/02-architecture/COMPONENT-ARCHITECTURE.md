# Component Architecture & Design Principles — PriMAqy

---

## 1. Component Hierarchy & Organization

Components are organized into strict functional subdirectories within `src/components/`:

```
src/components/
├── ui/           # Generic atomic primitives (Button, Badge, Card, Container)
├── layout/       # Structural wrappers (PageContainer, SectionWrapper, HeaderLayout)
├── navigation/   # Global Header, NavigationMenu, Footer
├── branding/     # Logo, BrandIcon, LegalBadge
├── sections/     # Reusable page sections (HeroSection, VisionSection, RoadmapSection)
├── cards/        # Domain cards (ProductCard, FeatureCard, TeamCard, DocumentCard)
├── forms/        # Input forms (ContactForm, NewsletterForm)
├── content/      # Article & markdown display components (MarkdownRenderer, CodeBlock)
├── legal/        # Legal document layout & guardrail banner components
└── analytics/    # Analytics script injectors
```

---

## 2. Component Design Rules

1. **Single Responsibility Rule**: A component must serve exactly one purpose (e.g. `ProductCard` renders product metadata; it does not handle navigation dropdown logic).
2. **Generic UI Isolation (`components/ui`)**: Low-level UI primitives must remain completely domain-agnostic. They accept standard HTML attributes and Tailwind props.
3. **Props Typing**: Every component must declare explicit TypeScript interface props. Never use untyped `any` or ambiguous object props.
4. **Server Component Default**: Components in `components/sections/`, `components/cards/`, and `components/legal/` must be Server Components unless state/event handlers are required.
5. **No Ad-Hoc Styling**: Colors, padding scales, and font sizes must use theme variables or utility tokens defined in `src/styles/globals.css`.
