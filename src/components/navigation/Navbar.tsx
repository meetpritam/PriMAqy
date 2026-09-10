'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { structuredNavigation } from '@/data/navigation';
import { Logo } from '@/components/branding/Logo';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`relative px-3.5 py-2 text-sm font-medium transition-all ${
                pathname === '/'
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>

            {structuredNavigation.map((group) => {
              const isOpen = activeDropdown === group.label;
              const hasActiveChild = group.items.some((item) => pathname.startsWith(item.href));

              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-all ${
                      hasActiveChild || isOpen
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full w-64 rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block rounded-xl p-2.5 transition-all hover:bg-blue-50/60 hover:translate-x-0.5"
                        >
                          <div className="text-sm font-bold text-slate-900 flex items-center justify-between">
                            <span>{item.title}</span>
                            {pathname === item.href && (
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            )}
                          </div>
                          {item.description && (
                            <div className="text-xs text-slate-500 font-normal mt-0.5">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="primary" size="sm" className="shadow-xs">
            <span>Contact</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:scale-95 transition-all shadow-2xs touch-target focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-800" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

