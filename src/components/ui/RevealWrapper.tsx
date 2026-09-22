'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface RevealWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-right';
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  threshold?: number;
  className?: string;
}

export function RevealWrapper({
  animation = 'fade-up',
  delay = 0,
  duration = 350,
  threshold = 0.1,
  className,
  children,
  ...props
}: RevealWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  const animationClasses = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'scale-up': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    'slide-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5',
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
        animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
