import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/branding/Logo';
import { companyData } from '@/data/company';
import { footerData } from '@/data/footer';
import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white text-[#171717]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          
          <div className="space-y-4 lg:col-span-2">
            <Logo showTagline />
            <p className="max-w-sm text-sm text-[#525252] leading-relaxed">
              {companyData.tagline}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#525252] bg-[#fafafa] px-3 py-1 rounded-full border border-[#e5e5e5]">
              <MapPin className="h-3.5 w-3.5 text-[#2563eb]" />
              <span>{companyData.location.formatted}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {companyData.socials.github && (
                <a
                  href={companyData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-lg border border-[#e5e5e5] bg-white h-9 w-9 flex items-center justify-center text-[#525252] transition-colors hover:border-[#171717] hover:text-[#171717]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {companyData.socials.twitter && (
                <a
                  href={companyData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="rounded-lg border border-[#e5e5e5] bg-white h-9 w-9 flex items-center justify-center text-[#525252] transition-colors hover:border-[#171717] hover:text-[#171717]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {footerData.map((col) => (
              <div key={col.title} className="space-y-3">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#171717]">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-[#525252] transition-colors hover:text-[#171717]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-12 border-t border-[#e5e5e5] pt-8 sm:flex sm:items-center sm:justify-between font-mono text-xs text-[#737373]">
          <p>
            © {new Date().getFullYear()} PriMAqy. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 text-[#a3a3a3] text-[11px]">
            {companyData.legalGuardrails.entityStatus}
          </p>
        </div>

      </div>
    </footer>
  );
}
