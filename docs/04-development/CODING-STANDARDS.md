# Coding Standards — PriMAqy

---

## 1. Code Formatting & Syntax Rules

- **Indentation**: 2 spaces (no tabs).
- **Quotes**: Single quotes for JavaScript/TypeScript strings; double quotes for JSX attributes.
- **Semicolons**: Always use semicolons.
- **Imports**: Group imports logically:
  1. External packages (`react`, `next`, `lucide-react`)
  2. Internal aliases (`@/components`, `@/lib`, `@/data`, `@/types`)
  3. Styles & CSS

---

## 2. Example Standard Component Blueprint

```tsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CompanyInfo } from '@/types/company';

interface StatusBadgeProps {
  status: CompanyInfo['legalGuardrails']['entityStatus'];
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100',
        className
      )}
    >
      <ShieldCheck className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-400" />
      <span>{status}</span>
    </div>
  );
};
```
