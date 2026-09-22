import React from 'react';
import { cn } from '@/lib/utils';

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'accent' | 'slate' | 'outline';
}

export function IconWrapper({
  className,
  size = 'md',
  variant = 'default',
  children,
  ...props
}: IconWrapperProps) {
  const sizes = {
    sm: 'w-8 h-8 rounded-lg text-sm',
    md: 'w-10 h-10 rounded-xl text-base',
    lg: 'w-12 h-12 rounded-xl text-lg',
    xl: 'w-14 h-14 rounded-2xl text-xl',
  };

  const variants = {
    default: 'bg-slate-100 text-slate-800 border border-slate-200/80 shadow-xs',
    accent: 'bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs',
    slate: 'bg-slate-900 text-white shadow-xs',
    outline: 'bg-white/80 backdrop-blur-xs text-slate-700 border border-slate-200/90 shadow-xs',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center shrink-0 transition-all duration-200',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
