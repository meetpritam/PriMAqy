import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { roadmapData } from '@/data/roadmap';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Venture Roadmap — PriMAqy',
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

      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-12">
          <div className="space-y-8">
            {roadmapData.map((milestone) => (
              <Card key={milestone.phase} variant="glow" className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/90 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-mono font-black text-blue-700">
                      {milestone.phase}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {milestone.title}
                    </h2>
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

                <div className="mt-4 space-y-4">
                  <p className="text-sm leading-relaxed text-slate-700">
                    {milestone.description}
                  </p>

                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      Deliverables & Initiatives
                    </h3>
                    <ul className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {milestone.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                          {milestone.status === 'Completed' ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          ) : (
                            <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-center text-xs font-mono font-semibold text-slate-700 pt-4">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
            <span>Roadmap items represent current plans and may change as product development progresses.</span>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
