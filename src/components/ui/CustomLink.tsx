import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  showIcon?: boolean;
  variant?: 'primary' | 'muted' | 'subtle' | 'nav';
}

export function CustomLink({
  href,
  external = false,
  showIcon = false,
  variant = 'primary',
  className,
  children,
  ...props
}: CustomLinkProps) {
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('https://wa.me');

  const variants = {
    primary: 'text-[#0f172a] hover:text-[#2563eb] font-medium transition-colors duration-200 focus-ring rounded-xs',
    muted: 'text-[#475569] hover:text-[#0f172a] font-medium transition-colors duration-200 focus-ring rounded-xs',
    subtle: 'text-slate-500 hover:text-blue-600 transition-colors duration-200 focus-ring rounded-xs',
    nav: 'text-slate-600 hover:text-slate-900 font-medium text-sm py-1 px-2 rounded-md hover:bg-slate-100 transition-all duration-200 focus-ring',
  };

  const linkContent = (
    <span className="inline-flex items-center gap-1 group/link">
      <span>{children}</span>
      {(showIcon || isExternal) && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 shrink-0" />
      )}
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(variants[variant], className)}
        {...props}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(variants[variant], className)} {...props}>
      {linkContent}
    </Link>
  );
}
