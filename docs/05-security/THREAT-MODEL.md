# Threat Model & Vulnerability Analysis — PriMAqy

---

## Threat Matrix

| Threat Category | Potential Impact | Mitigation Strategy | Mitigation Status |
| :--- | :--- | :--- | :--- |
| **Cross-Site Scripting (XSS)** | Execution of malicious client script | React automatic JSX escaping, CSP headers, zero dangerous `dangerouslySetInnerHTML` | **Mitigated** |
| **Cross-Site Request Forgery (CSRF)** | Unauthorized state mutation | Server Component default, SameSite cookie policies, form token validation | **Mitigated** |
| **Injection (SQL/Command)** | Data breach or execution hijack | Zero raw query execution; typed schemas in `src/lib/validation.ts` | **Mitigated** |
| **Secret Leakage** | API key or token compromise | Strict `.gitignore` enforcement, zero `NEXT_PUBLIC_` secret prefixing | **Mitigated** |
| **Malicious Uploads** | Remote code execution via upload | Zero client file upload endpoints in Module 0; static PDF repository in `public/documents/` | **Mitigated** |
| **Spam / Form Abuse** | Mail server flooding or database junk | Schema validation (`src/lib/validation.ts`), honeypot fields, rate limiting | **Mitigated** |
| **Rate Abuse / DoS** | Resource exhaustion | Vercel Edge rate limiting, static page caching | **Mitigated** |
| **Dependency Vulnerabilities** | Supply chain compromise | Automated `npm audit` check, minimal lockfile dependency policy | **Mitigated** |
| **Broken Access Control** | Unauthorized data access | Static document public/private flags, zero authenticated endpoints in Module 0 | **Mitigated** |
| **SEO Spam / Hijacking** | Domain reputation damage | Automated `robots.ts` & `sitemap.ts`, strict canonical meta tags | **Mitigated** |
| **Supply Chain Risk** | Compromised npm package | Audit packages prior to installation, lockfile pinning | **Mitigated** |
| **Misrepresentation / Legal Risk**| Fraudulent legal status claims | Centralized `src/data/company.ts` legal guardrails defaulting to Unverified | **Mitigated** |
