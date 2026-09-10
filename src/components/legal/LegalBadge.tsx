import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/company';

interface LegalBadgeProps {
  className?: string;
}

export const LegalBadge: React.FC<LegalBadgeProps> = ({ className }) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 ${className || ''}`}
    >
      <ShieldCheck className="h-3.5 w-3.5 text-zinc-500" />
      <span>{companyData.legalGuardrails.entityStatus}</span>
    </div>
  );
};
