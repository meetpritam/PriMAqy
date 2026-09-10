import React from 'react';
import { Founder } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FounderConnectionProps {
  founder: Founder;
}

export function FounderConnection({ founder }: FounderConnectionProps) {
  const { primaqyConnection } = founder;
  if (!primaqyConnection) return null;

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Venture Alignment"
        title="PriMAqy Connection"
        description="Factual relationship between the founder and the PriMAqy venture entity."
        align="left"
      />

      <Card variant="glow" className="p-8 space-y-6 bg-gradient-to-r from-blue-50/80 via-slate-50 to-white border-blue-200/90">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-blue-700">
              Official Position
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              {primaqyConnection.relationship}
            </h3>
          </div>
          <Button href="/about" variant="outline" size="sm" className="group shrink-0">
            <span>About PriMAqy</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <p className="text-sm leading-relaxed text-slate-700 font-normal">
          {primaqyConnection.description}
        </p>

        {primaqyConnection.impact && primaqyConnection.impact.length > 0 && (
          <div className="space-y-3 border-t border-slate-200/80 pt-4">
            <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider block">
              Venture Leadership Impact
            </span>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {primaqyConnection.impact.map((point) => (
                <div key={point} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
