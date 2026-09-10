import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-3.5',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('inline-flex items-center gap-2', align === 'center' ? 'justify-center' : 'justify-start')}>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-snug">
        {title}
      </h2>
      {description && (
        <p className={cn("text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl", align === 'center' ? 'mx-auto' : '')}>
          {description}
        </p>
      )}
    </div>
  );
}
