import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'emerald' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'pill' | 'square';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      shape = 'pill',
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] touch-manipulation select-none';

    const radiusStyles = shape === 'pill' ? 'rounded-full' : 'rounded-lg';

    const variants = {
      primary:
        'bg-[#171717] text-white hover:bg-[#262626] shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.20)] focus-visible:ring-[#171717]',
      secondary:
        'bg-[#ffffff] text-[#171717] border border-[#e5e5e5] hover:bg-[#f5f5f5] hover:border-[#d4d4d4] shadow-xs focus-visible:ring-slate-400',
      outline:
        'border border-[#e5e5e5] bg-white/80 text-[#171717] hover:bg-[#f5f5f5] hover:border-[#d4d4d4] backdrop-blur-xs focus-visible:ring-slate-400',
      ghost:
        'bg-transparent text-[#525252] hover:bg-[#f5f5f5] hover:text-[#171717] focus-visible:ring-slate-400',
      gradient:
        'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-[0_4px_16px_rgba(37,99,235,0.30)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.45)] hover:opacity-95 focus-visible:ring-blue-600',
      emerald:
        'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_16px_rgba(5,150,105,0.25)] hover:shadow-[0_6px_22px_rgba(5,150,105,0.35)] focus-visible:ring-emerald-600',
      accent:
        'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.35)] focus-visible:ring-blue-600',
    };

    const sizes = {
      sm: 'text-xs sm:text-sm px-3.5 py-2 min-h-[38px] gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[44px] h-11 gap-2',
      lg: 'text-base px-6 sm:px-7 py-3 min-h-[48px] gap-2.5',
    };

    const combinedClassName = cn(
      baseStyles,
      radiusStyles,
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
