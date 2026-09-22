import React from 'react';
import { companyJourneyData, JourneyMilestone } from '@/data/journey';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Badge } from '@/components/ui/Badge';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export function JourneyTimelineSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden border-y border-slate-200/80 bg-slate-50/60 py-16 sm:py-24">
      <SpatialBackgroundEngine variant="system" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="OUR BUILD JOURNEY"
            title="How PriMAqy Evolved Into What It Is Today."
            description="A factual timeline tracking our journey from early technical experimentation to venture architecture and software development."
            align="center"
          />
        </RevealWrapper>

        {/* Desktop Alternating Spine Layout */}
        <div className="mt-16 hidden lg:block relative max-w-5xl mx-auto">
          {/* Central Vertical Spine Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-slate-200 via-blue-400 to-slate-200 z-0" />

          <div className="space-y-12 relative z-10">
            {companyJourneyData.map((item: JourneyMilestone, index: number) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              const isCurrent = item.status === 'Current';
              const isCompleted = item.status === 'Completed';

              return (
                <div key={item.id} className="relative grid grid-cols-12 items-center gap-8">
                  {/* Left Side Content (if even) or Date (if odd) */}
                  <div className={`col-span-5 ${isEven ? 'text-right' : 'col-start-8'}`}>
                    <RevealWrapper animation={isEven ? 'fade-up' : 'fade-up'} delay={index * 80}>
                      <Card
                        variant="glow"
                        className={`p-7 space-y-4 bg-white border-slate-200/90 transition-all duration-300 ${
                          isCurrent ? 'border-blue-400/80 shadow-md shadow-blue-500/10' : ''
                        }`}
                      >
                        <div
                          className={`flex flex-wrap items-center gap-2 ${
                            isEven ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
                            {item.period}
                          </span>
                          <Badge
                            variant={
                              isCompleted
                                ? 'status'
                                : isCurrent
                                ? 'glow'
                                : 'outline'
                            }
                          >
                            {isCompleted
                              ? 'Completed'
                              : isCurrent
                              ? 'Current Stage'
                              : 'Upcoming'}
                          </Badge>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                            {item.stage} • {item.category}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        {item.deliverables && item.deliverables.length > 0 && (
                          <div className="pt-3 border-t border-slate-100 space-y-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                              Key Milestones
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                              {item.deliverables.map((deliv, dIdx) => (
                                <li
                                  key={dIdx}
                                  className={`flex items-center gap-2 ${
                                    isEven ? 'justify-end' : 'justify-start'
                                  }`}
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                                  ) : isCurrent ? (
                                    <Sparkles className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                                  ) : (
                                    <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                                  )}
                                  <span>{deliv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </Card>
                    </RevealWrapper>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="col-span-2 flex justify-center items-center z-20">
                    <div
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
                        isCompleted
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-600 shadow-xs'
                          : isCurrent
                          ? 'border-blue-600 bg-white text-blue-600 shadow-md ring-4 ring-blue-100 scale-110'
                          : 'border-slate-300 bg-white text-slate-400'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {isCurrent && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Opposite Column Filler */}
                  <div className={`col-span-5 ${isEven ? 'col-start-8' : 'col-start-1 row-start-1'}`}>
                    <div className="hidden lg:block text-xs font-mono text-slate-400 font-bold p-4">
                      <span className="text-slate-900 font-extrabold text-sm block">
                        {item.year}
                      </span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline View */}
        <div className="mt-12 lg:hidden relative border-l-2 border-slate-200/90 pl-6 sm:pl-8 space-y-8 ml-3 sm:ml-4">
          {companyJourneyData.map((item: JourneyMilestone, index: number) => {
            const Icon = item.icon;
            const isCurrent = item.status === 'Current';
            const isCompleted = item.status === 'Completed';

            return (
              <div key={item.id} className="relative group">
                {/* Node Indicator */}
                <div
                  className={`absolute -left-[37px] sm:-left-[45px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white ${
                    isCompleted
                      ? 'border-emerald-500 text-emerald-600'
                      : isCurrent
                      ? 'border-blue-600 text-blue-600 ring-2 ring-blue-100'
                      : 'border-slate-300 text-slate-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <RevealWrapper animation="fade-up" delay={index * 60}>
                  <Card
                    variant="glow"
                    className={`p-5 sm:p-6 space-y-4 bg-white border-slate-200/90 ${
                      isCurrent ? 'border-blue-400/80 shadow-md shadow-blue-500/5' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
                        {item.period}
                      </span>
                      <Badge
                        variant={
                          isCompleted
                            ? 'status'
                            : isCurrent
                            ? 'glow'
                            : 'outline'
                        }
                      >
                        {isCompleted
                          ? 'Completed'
                          : isCurrent
                          ? 'Current Stage'
                          : 'Upcoming'}
                      </Badge>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {item.stage} • {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight mt-1">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {item.deliverables && item.deliverables.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          Key Milestones
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                          {item.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2">
                              {isCompleted ? (
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                              ) : isCurrent ? (
                                <Sparkles className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                              ) : (
                                <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                              )}
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </RevealWrapper>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
