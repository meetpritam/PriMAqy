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
        'max-w-3xl space-y-3',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('inline-flex items-center gap-2', align === 'center' ? 'justify-center' : 'justify-start')}>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#2563eb]">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#171717] leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className={cn("text-base sm:text-lg text-[#525252] leading-relaxed max-w-2xl font-normal", align === 'center' ? 'mx-auto' : '')}>
          {description}
        </p>
      )}
    </div>
  );
}
