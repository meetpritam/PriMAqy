import React from 'react';
import { Founder } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';


interface FounderJourneyTimelineProps {
  founder: Founder;
}

export function FounderJourneyTimeline({ founder }: FounderJourneyTimelineProps) {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Chronological Progression"
        title="Founder Journey"
        description="Factual milestone progression from early learning to venture engineering."
        align="left"
      />

      <div className="relative border-l-2 border-slate-200/90 pl-5 sm:pl-8 space-y-6 sm:space-y-8 ml-3 sm:ml-4">
        {founder.journey.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Timeline Indicator Node */}
            <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-xs">
              <span className="text-[10px] sm:text-xs font-mono font-bold">{index + 1}</span>
            </div>

            <Card variant="glow" className="p-4 sm:p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-extrabold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
                  {item.period}
                </span>
                <Badge variant="outline" className="text-[11px] font-mono">
                  {item.category}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-700 font-normal">
                {item.summary}
              </p>

              {item.details && (
                <p className="text-xs leading-relaxed text-slate-500 border-t border-slate-100 pt-2 font-mono">
                  {item.details}
                </p>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
