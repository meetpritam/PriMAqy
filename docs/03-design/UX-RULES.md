# User Experience (UX) Rules — PriMAqy

---

## 1. Core UX Directives

1. **Clarity & Purpose**: Every page layout must immediately state its core purpose within the first viewport (above the fold).
2. **Predictable Navigation**: Navigation header and footer must remain consistent across all routes without layout jumps or hidden menus on desktop.
3. **Responsive Interactivity**: All clickable elements (buttons, links, cards) must feature subtle visual feedback on hover (`hover:opacity-90`, `transition-all duration-200`) and active states.
4. **No Dead Ends**: Every page must conclude with a logical next action (e.g. "Explore Products", "Contact Team", "Subscribe to Insights").
5. **Transparent State Feedback**: Forms and interactive buttons must provide clear success, error, loading, and disabled states. Never leave a submitted form hanging without feedback.
6. **Zero Content Shift**: Explicit dimensions and loading skeletons must be declared for images and dynamically rendered lists to ensure Cumulative Layout Shift (CLS) remains 0.00.
