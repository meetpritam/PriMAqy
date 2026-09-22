import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { JourneyTimelineSection } from '@/components/sections/JourneyTimelineSection';
import { roadmapData } from '@/data/roadmap';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Venture Roadmap & Build Journey — PriMAqy',
  description: 'Transparent multi-phase product and venture roadmap for PriMAqy and Toolsetic.',
});

export default function RoadmapPage() {
  return (
    <div>
      <PageHeader
        badge="Strategic Trajectory"
        title="Venture & Product Roadmap"
        description="A transparent phase-by-phase breakdown of our engineering milestones from foundation to ecosystem expansion."
      />

      {/* Primary Build Journey Timeline Section */}
      <JourneyTimelineSection />

      {/* Detailed Technical Phase Breakdown */}
      <SectionWrapper className="py-20 border-t border-slate-200/80 bg-white">
        <PageContainer size="lg" className="space-y-12">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="TECHNICAL MILESTONES"
              title="Phase-by-Phase Platform Roadmap"
              description="Granular deliverable tracking across core architectural modules."
              align="center"
            />
          </RevealWrapper>

          <div className="space-y-8">
            {roadmapData.map((milestone, idx) => (
              <RevealWrapper key={milestone.phase} animation="fade-up" delay={idx * 60}>
                <Card variant="glow" className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/90 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-mono font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
                        {milestone.phase}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {milestone.title}
                      </h3>
                    </div>

                    <Badge
                      variant={
                        milestone.status === 'Completed'
                          ? 'status'
                          : milestone.status === 'In Progress'
                          ? 'glow'
                          : 'outline'
                      }
                    >
                      {milestone.status}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {milestone.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Deliverables & Initiatives
                      </h4>
                      <ul className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {milestone.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                            {milestone.status === 'Completed' ? (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            ) : (
                              <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                            )}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </RevealWrapper>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-center text-xs font-mono font-semibold text-slate-600 pt-4">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
            <span>Roadmap items represent current plans and may change as product development progresses.</span>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
