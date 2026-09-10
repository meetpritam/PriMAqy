# Responsive Design Rules — PriMAqy

---

## 1. Supported Viewport Breakpoints

The PriMAqy web platform mandates fluid, responsive rendering across all standard device viewports:

| Breakpoint Target | Pixel Width | Device Class |
| :--- | :--- | :--- |
| **Mobile Extra Small** | `360px` | Small Smartphones (Android entry) |
| **Mobile Standard** | `375px` | iPhone Standard |
| **Mobile Medium** | `390px` | iPhone Pro |
| **Mobile Large** | `430px` | iPhone Pro Max / Plus |
| **Tablet Small** | `768px` | iPads / Android Tablets |
| **Laptop / Desktop Small** | `1024px` | iPad Pro / Small Laptops |
| **Desktop Standard** | `1280px` | Laptops & Monitors |
| **Desktop Large** | `1440px` | Full HD Monitors |
| **Ultra-Wide** | `1920px` | Large Desktop Displays |

---

## 2. Non-Negotiable Responsive Constraints

- **Zero Horizontal Scrolling**: No element may cause horizontal overflow on any viewport width. `overflow-x-hidden` enforced at root level.
- **Mobile Touch Targets**: Minimum touch target dimension of 44x44px for interactive elements on mobile viewports (< 768px).
- **Responsive Layout Grids**: Grid layouts collapse to single-column (`grid-cols-1`) on mobile and scale to multi-column (`md:grid-cols-2 lg:grid-cols-3`) on desktop.
