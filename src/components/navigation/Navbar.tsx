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
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e5e5] bg-white/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`relative px-3.5 py-2 text-sm font-medium transition-all ${
                pathname === '/'
                  ? 'text-[#2563eb] font-semibold'
                  : 'text-[#525252] hover:text-[#171717]'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-[#2563eb]" />
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
                        ? 'text-[#2563eb] font-semibold'
                        : 'text-[#525252] hover:text-[#171717]'
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#2563eb]' : 'text-[#a3a3a3]'}`} />
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full w-64 rounded-2xl border border-[#e5e5e5] bg-white p-2 shadow-lg backdrop-blur-xl">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block rounded-xl p-2.5 transition-all hover:bg-[#fafafa]"
                        >
                          <div className="text-sm font-semibold text-[#171717] flex items-center justify-between">
                            <span>{item.title}</span>
                            {pathname === item.href && (
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                            )}
                          </div>
                          {item.description && (
                            <div className="text-xs text-[#737373] font-normal mt-0.5">
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
          <Button href="/contact" variant="primary" size="sm" shape="square">
            <span>Build With Us</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white text-[#171717] hover:bg-[#fafafa] transition-all focus:outline-none focus:ring-2 focus:ring-[#171717]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[#171717]" />
            ) : (
              <Menu className="h-5 w-5 text-[#171717]" />
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
