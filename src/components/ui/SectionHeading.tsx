import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  action,
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
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
          <p className="text-caption font-mono font-semibold text-[#2563eb]">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-heading font-semibold text-[#0f172a]">
        {title}
      </h2>
      {description && (
        <p className={cn("text-body-lg text-[#475569] max-w-2xl font-normal", align === 'center' ? 'mx-auto' : '')}>
          {description}
        </p>
      )}
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}
