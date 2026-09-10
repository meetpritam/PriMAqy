import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] touch-manipulation select-none';

    const variants = {
      primary:
        'bg-slate-900 text-white hover:bg-slate-800 shadow-[0_4px_14px_0_rgba(15,23,42,0.25)] hover:shadow-[0_6px_20px_0_rgba(15,23,42,0.35)] focus-visible:ring-slate-900',
      secondary:
        'bg-slate-100 text-slate-900 border border-slate-200/90 hover:bg-slate-200/80 hover:border-slate-300',
      outline:
        'border border-slate-300/90 bg-white/90 text-slate-900 hover:bg-slate-50 hover:border-slate-400/90 shadow-xs focus-visible:ring-slate-900',
      ghost:
        'bg-transparent text-slate-700 hover:bg-slate-100/80 hover:text-slate-900',
      gradient:
        'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-[0_4px_16px_rgba(37,99,235,0.30)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.45)] hover:opacity-95',
      emerald:
        'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_16px_rgba(5,150,105,0.25)] hover:shadow-[0_6px_22px_rgba(5,150,105,0.35)] focus-visible:ring-emerald-600',
    };

    const sizes = {
      sm: 'text-xs sm:text-sm px-4 py-2.5 min-h-[44px] gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[44px] h-11 gap-2',
      lg: 'text-base px-6 sm:px-7 py-3.5 min-h-[48px] gap-2.5',
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
