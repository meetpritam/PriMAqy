import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  pattern?: boolean;
}

export function SectionWrapper({
  className,
  pattern = false,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        'relative py-8 sm:py-14 lg:py-20',
        pattern &&
          'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
