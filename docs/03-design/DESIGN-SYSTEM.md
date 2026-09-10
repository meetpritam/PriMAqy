# Design System & Aesthetic Foundation — PriMAqy

---

## 1. Aesthetic Identity

PriMAqy follows a **Premium, Technical, Minimal, and Professional** visual aesthetic.

- **Primary Mode**: Clean Light Mode.
- **Secondary / Accent**: Sleek Dark Accents & Subtle Glassmorphism.
- **Typography**: System Geist / Inter fallback.
- **Design Tokens**: Centralized CSS custom properties in `src/styles/globals.css`.

---

## 2. Color Palette & CSS Variables

```css
:root {
  --background: #ffffff;
  --foreground: #09090b;
  --card: #ffffff;
  --card-foreground: #09090b;
  --popover: #ffffff;
  --popover-foreground: #09090b;
  --primary: #09090b;
  --primary-foreground: #fafafa;
  --secondary: #f4f4f5;
  --secondary-foreground: #18181b;
  --muted: #f4f4f5;
  --muted-foreground: #71717a;
  --accent: #f4f4f5;
  --accent-foreground: #18181b;
  --destructive: #ef4444;
  --destructive-foreground: #fafafa;
  --border: #e4e4e7;
  --input: #e4e4e7;
  --ring: #18181b;
  --radius: 0.5rem;
}
```

---

## 3. Typography Hierarchy

- **Title / Hero Heading (`h1`)**: 3rem (48px) to 4.5rem (72px), Bold / Extra Bold, Tracking tight (`tracking-tight`).
- **Section Heading (`h2`)**: 2.25rem (36px) to 3rem (48px), SemiBold / Bold.
- **Subsection Heading (`h3`)**: 1.5rem (24px) to 1.875rem (30px), Medium / SemiBold.
- **Body Large**: 1.125rem (18px), Regular / Medium.
- **Body Regular**: 1rem (16px), Regular, leading relaxed (`leading-relaxed`).
- **Caption / Legal Text**: 0.875rem (14px) / 0.75rem (12px), Muted foreground (`text-muted-foreground`).
