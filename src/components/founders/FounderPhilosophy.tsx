import React from 'react';
import { Founder } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Lightbulb } from 'lucide-react';

interface FounderPhilosophyProps {
  founder: Founder;
}

export function FounderPhilosophy({ founder }: FounderPhilosophyProps) {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Core Guiding Principles"
        title="Founder Philosophy"
        description="Editorial principles guiding software craftsmanship, product strategy, and long-term decision making."
        align="left"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {founder.philosophy.map((item) => (
          <Card key={item.id} variant="glow" className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                <Lightbulb className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.pillar}</h3>
            </div>

            <p className="text-sm font-semibold text-blue-700 font-mono">
              &quot;{item.principle}&quot;
            </p>

            <p className="text-xs leading-relaxed text-slate-700 font-normal">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
