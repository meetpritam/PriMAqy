# Custom Domain Migration Protocol — PriMAqy

---

## Migration Steps for Future Custom Domain

1. Purchase and configure DNS records for custom domain (e.g. `primaqy.com` / `primaqy.in`).
2. Add custom domain in Vercel project domain settings.
3. Update `NEXT_PUBLIC_SITE_URL` environment variable to point to the new domain.
4. Verify dynamic `sitemap.xml`, `robots.txt`, and OpenGraph metadata automatically update.
5. Configure 301 redirects from `primaqy.vercel.app` to the new custom domain.
