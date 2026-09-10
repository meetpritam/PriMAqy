import React from 'react';
import { Founder } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowDown } from 'lucide-react';

interface FounderStudyRoadmapProps {
  founder: Founder;
}

export function FounderStudyRoadmap({ founder }: FounderStudyRoadmapProps) {
  const sortedPlan = [...founder.studyRoadmap].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Future Academic & Intellectual Growth"
        title="Future Study Roadmap"
        description="Transparent 7-stage learning progression. All future stages are explicitly labeled as planned / aspirational."
        align="left"
      />

      <div className="relative space-y-4">
        {sortedPlan.map((stage, idx) => {
          const isCurrent = stage.status === 'CURRENT';
          return (
            <div key={stage.id} className="relative">
              <Card
                variant={isCurrent ? 'glow' : 'default'}
                className={`p-6 transition-all ${
                  isCurrent
                    ? 'border-blue-300 bg-gradient-to-r from-blue-50/60 via-white to-white ring-2 ring-blue-500/20'
                    : 'bg-white/90 border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-extrabold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200">
                        {stage.stage}
                      </span>
                      <Badge
                        variant={isCurrent ? 'status' : 'outline'}
                        className="text-[11px] font-mono"
                      >
                        {isCurrent ? '● CURRENT PHASE' : '○ PLANNED / ASPIRATIONAL'}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 pt-1">{stage.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-700 font-normal">{stage.description}</p>
                  </div>

                  <div className="shrink-0 font-mono text-xs text-slate-400 font-medium">
                    Stage {idx + 1} of {sortedPlan.length}
                  </div>
                </div>
              </Card>

              {/* Connecting Down Arrow except on last element */}
              {idx < sortedPlan.length - 1 && (
                <div className="my-2 flex justify-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400 border border-slate-200">
                    <ArrowDown className="h-3.5 w-3.5" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
