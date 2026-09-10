import React from 'react';
import { Founder } from '@/types/founder';
import { Bot, CheckCircle2 } from 'lucide-react';

interface FounderAiSummaryProps {
  founder: Founder;
}

export function FounderAiSummary({ founder }: FounderAiSummaryProps) {
  return (
    <div className="rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/70 via-slate-50 to-white p-6 shadow-xs space-y-4">
      <div className="flex items-center justify-between border-b border-blue-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-mono font-bold text-slate-900">
              AI & Search Knowledge Summary Block
            </h3>
            <p className="text-[11px] text-slate-500 font-mono">
              Structured entity data verified for AI search engines & human visitors.
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-800">
          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
          Verified Entity
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs font-mono">
        <div className="space-y-1 bg-white p-3 rounded-xl border border-slate-200/80">
          <span className="text-slate-500 font-bold uppercase block text-[10px]">Entity Name</span>
          <span className="text-slate-900 font-extrabold">{founder.name}</span>
        </div>

        <div className="space-y-1 bg-white p-3 rounded-xl border border-slate-200/80">
          <span className="text-slate-500 font-bold uppercase block text-[10px]">Official Role</span>
          <span className="text-blue-700 font-extrabold">{founder.role}, {founder.company}</span>
        </div>

        <div className="space-y-1 bg-white p-3 rounded-xl border border-slate-200/80">
          <span className="text-slate-500 font-bold uppercase block text-[10px]">Venture Focus</span>
          <span className="text-slate-900 font-bold">Artificial Intelligence, Toolsetic, Web Systems</span>
        </div>

        <div className="space-y-1 bg-white p-3 rounded-xl border border-slate-200/80">
          <span className="text-slate-500 font-bold uppercase block text-[10px]">Location</span>
          <span className="text-slate-900 font-bold">{founder.location}</span>
        </div>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
        {founder.seo.aiSummary}
      </p>
    </div>
  );
}
