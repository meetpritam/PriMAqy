# Structured Data (JSON-LD) Blueprint — PriMAqy

---

## 1. Organization Schema Blueprint

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PriMAqy",
  "url": "https://primaqy.in",
  "logo": "https://primaqy.in/brand/logo.png",
  "description": "Building practical AI for a smarter digital future.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "addressCountry": "India"
  }
}
```

---

## 2. Product Schema Blueprint (Toolsetic)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Toolsetic",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Web",
  "description": "An AI-first digital productivity ecosystem for developers, creators, students, founders, and modern teams.",
  "publisher": {
    "@type": "Organization",
    "name": "PriMAqy"
  }
}
```
