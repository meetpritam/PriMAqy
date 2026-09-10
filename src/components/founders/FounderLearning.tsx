import React from 'react';
import { Founder } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { BookOpen } from 'lucide-react';

interface FounderLearningProps {
  founder: Founder;
}

export function FounderLearning({ founder }: FounderLearningProps) {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Active Intellectual Pursuits"
        title="Currently Learning"
        description="Current self-directed study domains and how they directly inform PriMAqy product architecture."
        align="left"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {founder.currentlyLearning.map((item) => (
          <Card key={item.id} variant="glow" className="p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                <BookOpen className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.topic}</h3>
              <p className="text-xs leading-relaxed text-slate-700 font-normal">
                <strong className="font-semibold text-slate-900">Why:</strong> {item.why}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Connection to Products
              </span>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">{item.connectionToProducts}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
