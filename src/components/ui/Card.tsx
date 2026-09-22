import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  variant?: 'default' | 'glow' | 'gradient' | 'flat' | 'outline';
}

export function Card({
  className,
  hoverEffect = true,
  variant = 'default',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border transition-all duration-300 focus-ring',
        variant === 'default' &&
          'border-slate-200/90 bg-white p-4 sm:p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_2px_-1px_rgba(15,23,42,0.03)]',
        variant === 'flat' && 'border-slate-200/70 bg-slate-50/60 p-4 sm:p-6',
        variant === 'outline' && 'border-slate-300/80 bg-white/80 backdrop-blur-xs p-4 sm:p-6',
        hoverEffect &&
          'hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_16px_32px_-8px_rgba(59,130,246,0.12),0_4px_12px_-2px_rgba(15,23,42,0.04)]',
        variant === 'glow' &&
          'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/10 before:via-indigo-500/5 before:to-cyan-500/10 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:pointer-events-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
