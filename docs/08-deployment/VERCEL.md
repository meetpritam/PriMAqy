# Vercel Deployment Architecture — PriMAqy

---

## 1. Hosting Tier Configuration

- **Platform**: Vercel Hobby (Free) Tier.
- **Framework Preset**: Next.js.
- **Node.js Version**: 18.x / 20.x / 24.x compatible.
- **Build Command**: `npm run build`.
- **Output Directory**: `.next`.

---

## 2. Environment Setup

Configure project environment variables in Vercel Dashboard:
- `NEXT_PUBLIC_SITE_URL` set to `https://primaqy.vercel.app` (or future custom domain).
