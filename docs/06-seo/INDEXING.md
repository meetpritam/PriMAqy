# Indexing & Sitemap Strategy — PriMAqy

---

## Dynamic Indexing Infrastructure

- **Robots Handler (`src/app/robots.ts`)**: Defines crawling rules for Googlebot and major search engines. Allows public route crawling while blocking private preview environments.
- **Sitemap Handler (`src/app/sitemap.ts`)**: Dynamically generates XML sitemap including all 18 public pages with change frequencies (`weekly`, `monthly`) and priorities (`1.0` for home, `0.8` for products).
