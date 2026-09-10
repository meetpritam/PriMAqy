'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronRight, Sparkles, BookOpen, Layers, Info, Users, Phone, Home, Compass } from 'lucide-react';
import { structuredNavigation } from '@/data/navigation';
import { Logo } from '@/components/branding/Logo';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const pathname = usePathname();

  // Lock body scrolling while mobile drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Support Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isMounted || !isOpen) return null;


  const quickLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About Us', href: '/about', icon: Info },
    { label: 'Products', href: '/products', icon: Layers },
    { label: 'Toolsetic', href: '/products/toolsetic', icon: Sparkles },
    { label: 'Insights', href: '/insights', icon: BookOpen },
    { label: 'Meet Founders', href: '/founders', icon: Users },
    { label: 'Contact', href: '/contact', icon: Phone },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[9999] lg:hidden">
      {/* Translucent Backdrop Overlay - Tapping closes drawer */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Mobile Navigation Drawer Panel */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="fixed inset-y-0 right-0 flex w-[85%] max-w-sm sm:max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 animate-slideInRight border-l border-slate-200/80 z-[10000]"
      >
        {/* Mobile Menu Header Bar */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200/90 px-5 bg-white">
          <Logo showTagline onClick={onClose} />
          <button
            onClick={onClose}
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:scale-95 transition-all shadow-2xs touch-target focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          {/* Primary Quick Links */}
          <div className="space-y-1">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-1 mb-2 flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5 text-blue-600" />
              <span>Primary Navigation</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex min-h-[48px] items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                        : 'text-slate-800 hover:bg-slate-100/80 border border-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 ${isActive ? 'text-white/80' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Grouped Categorized Navigation Sections */}
          {structuredNavigation.map((group) => (
            <div key={group.label} className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-1">
                {group.label}
              </div>
              <div className="space-y-1 rounded-2xl border border-slate-100 bg-slate-50/60 p-1.5">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`flex min-h-[44px] flex-col justify-center rounded-xl px-3.5 py-2.5 transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : 'text-slate-700 hover:bg-white hover:text-slate-900 font-medium'
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span>{item.title}</span>
                        <ChevronRight className={`h-4 w-4 ${isActive ? 'text-white/80' : 'text-slate-400'}`} />
                      </div>
                      {item.description && (
                        <span className={`text-xs ${isActive ? 'text-blue-100' : 'text-slate-500'} font-normal mt-0.5`}>
                          {item.description}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Primary CTA in Mobile Menu Drawer */}
          <div className="pt-4 border-t border-slate-200/90 pb-8">
            <Button
              href="/contact"
              onClick={onClose}
              variant="gradient"
              size="lg"
              className="w-full justify-center shadow-md min-h-[48px]"
            >
              <span>Contact PriMAqy</span>
              <Sparkles className="h-4 w-4 text-blue-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

