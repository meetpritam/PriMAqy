import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'accent' | 'status' | 'glow';
}

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold transition-all duration-200';

  const variants = {
    default:
      'bg-slate-900 text-white shadow-xs',
    secondary:
      'bg-slate-100 text-slate-800 border border-slate-200/90 hover:bg-slate-200/80',
    outline:
      'border border-slate-300/80 text-slate-700 bg-white/80 backdrop-blur-xs hover:border-slate-400',
    accent:
      'bg-blue-50/90 text-blue-700 border border-blue-200/80 shadow-[0_1px_4px_rgba(59,130,246,0.12)]',
    status:
      'bg-emerald-50/90 text-emerald-700 border border-emerald-200/80 shadow-[0_1px_4px_rgba(16,185,129,0.12)]',
    glow:
      'bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 text-blue-800 border border-blue-300/50 shadow-[0_2px_8px_rgba(59,130,246,0.15)]',
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
