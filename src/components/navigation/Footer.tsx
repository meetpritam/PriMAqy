import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/branding/Logo';
import { companyData } from '@/data/company';
import { footerData } from '@/data/footer';
import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/90 bg-gradient-to-b from-slate-100/90 via-slate-50 to-white">
      {/* Top subtle blue glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Logo showTagline />
            <p className="max-w-sm text-sm text-slate-600 leading-relaxed font-normal">
              {companyData.tagline}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 bg-white/90 px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <MapPin className="h-3.5 w-3.5 text-blue-600" />
              <span>{companyData.location.formatted}</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {companyData.socials.github && (
                <a
                  href={companyData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-slate-200/80 bg-white min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-slate-600 transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-xs active:scale-95 touch-manipulation"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                  className="rounded-xl border border-slate-200/80 bg-white min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-slate-600 transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-xs active:scale-95 touch-manipulation"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {companyData.socials.linkedin && (
                <a
                  href={companyData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-slate-200/80 bg-white min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-slate-600 transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-xs active:scale-95 touch-manipulation"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {footerData.map((col) => (
              <div key={col.title} className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  {col.title}
                </h3>
                <ul className="space-y-1.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center text-xs sm:text-sm text-slate-600 transition-colors hover:text-blue-600 py-1 min-h-[32px] touch-manipulation"
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

        <div className="mt-12 border-t border-slate-200/90 pt-8 sm:flex sm:items-center sm:justify-between font-mono text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PriMAqy. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 text-slate-400 text-[11px]">
            {companyData.legalGuardrails.entityStatus}
          </p>
        </div>
      </div>
    </footer>
  );
}
