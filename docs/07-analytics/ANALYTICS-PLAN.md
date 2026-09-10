# Analytics & Event Tracking Plan — PriMAqy

---

## Modular Event Tracking Abstraction

All analytics events are routed through `src/lib/analytics.ts` to ensure privacy compliance and zero vendor lock-in.

### Event Catalog

| Event Name | Trigger | Payload Attributes | Privacy Level |
| :--- | :--- | :--- | :--- |
| `page_view` | Route change | `path`, `title` | Anonymous |
| `product_click` | Product card click | `product_id`, `product_name` | Anonymous |
| `cta_click` | Hero / section CTA click | `cta_id`, `destination` | Anonymous |
| `newsletter_signup` | Newsletter form submission | `source_page` | Anonymous (No PII stored) |
| `contact_submit` | Contact form submission | `inquiry_type` | Consented |
| `document_download` | Business document click | `document_id`, `category` | Anonymous |
