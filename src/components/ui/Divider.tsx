import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  gradient?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

export function Divider({
  className,
  orientation = 'horizontal',
  gradient = false,
  label,
  icon,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'w-px self-stretch',
          gradient
            ? 'bg-gradient-to-b from-transparent via-slate-300 to-transparent'
            : 'bg-slate-200/80',
          className
        )}
        {...props}
      />
    );
  }

  if (label || icon) {
    return (
      <div className={cn('relative flex items-center justify-center w-full py-4', className)} {...props}>
        <div
          className={cn(
            'absolute inset-0 flex items-center',
            gradient
              ? 'bg-gradient-to-r from-transparent via-slate-200 to-transparent h-px'
              : 'border-t border-slate-200/80'
          )}
        />
        <div className="relative bg-[#fafafa] px-3 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2 rounded-full border border-slate-200/60 shadow-xs">
          {icon}
          {label && <span>{label}</span>}
        </div>
      </div>
    );
  }

  return (
    <hr
      className={cn(
        'w-full border-none h-px my-6',
        gradient
          ? 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
          : 'bg-slate-200/80',
        className
      )}
      {...props}
    />
  );
}
