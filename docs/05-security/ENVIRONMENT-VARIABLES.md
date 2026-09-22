# Environment Variables Specification — PriMAqy

---

## Environment Variable Schema

```ini
# Canonical Public URL of the platform (No trailing slash)
NEXT_PUBLIC_SITE_URL=https://primaqy.in

# Analytics Identifier Placeholder
NEXT_PUBLIC_ANALYTICS_ID=

# Future Server Secrets (Do NOT activate in Module 0)
# EMAIL_PROVIDER_API_KEY=
# DATABASE_URL=
```

---

## Guardrails & Usage Rules

1. `.env` and `.env.local` are strictly git-ignored.
2. Only `NEXT_PUBLIC_` prefixed variables are bundled into browser client JS. Server-only secrets MUST NEVER be prefixed with `NEXT_PUBLIC_`.
3. In local development, developers must copy `.env.example` to `.env.local`.
