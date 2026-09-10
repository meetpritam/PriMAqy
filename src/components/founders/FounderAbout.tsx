import React from 'react';
import { Founder } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FounderAboutProps {
  founder: Founder;
}

export function FounderAbout({ founder }: FounderAboutProps) {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Founder Overview"
        title={`About ${founder.publicDisplayName}`}
        description="Factual overview of founder background, working philosophy, and core motivations."
        align="left"
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        <Card variant="glow" className="p-5 sm:p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
            <Compass className="h-5 w-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">Background & Role</h3>
          <p className="text-xs leading-relaxed text-slate-700 font-normal">
            {founder.aboutIntro}
          </p>
        </Card>

        <Card variant="glow" className="p-5 sm:p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">Working Philosophy</h3>
          <p className="text-xs leading-relaxed text-slate-700 font-normal">
            {founder.workingPhilosophy}
          </p>
        </Card>

        <Card variant="glow" className="p-5 sm:p-6 space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">Core Motivation</h3>
          <p className="text-xs leading-relaxed text-slate-700 font-normal">
            {founder.motivation}
          </p>
        </Card>
      </div>
    </div>
  );
}
