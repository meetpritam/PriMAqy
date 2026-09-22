import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { roadmapData } from '@/data/roadmap';

export function RoadmapPreviewSection() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
      <PageContainer size="lg">
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="VISION & ROADMAP"
            title="Building the intelligence layer for tomorrow's software."
            description="Our long-term architectural trajectory from foundational R&D to global ecosystem deployment."
            align="center"
          />
        </RevealWrapper>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapData.map((item, idx) => (
            <RevealWrapper key={idx} animation="fade-up" delay={idx * 60} className="h-full">
              <Card variant="glow" className="h-full p-6 sm:p-7 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-blue-600">
                      {item.phase}
                    </span>
                    <Badge
                      variant={
                        item.status === 'Completed'
                          ? 'status'
                          : item.status === 'In Progress'
                          ? 'glow'
                          : 'outline'
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-mono">
                    {item.moduleName}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
                  {item.deliverables.slice(0, 3).map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </RevealWrapper>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
