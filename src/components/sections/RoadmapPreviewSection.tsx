import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { roadmapData } from '@/data/roadmap';

export function RoadmapPreviewSection() {
  return (
    <section className="border-b border-[#e5e5e5] bg-[#ffffff] py-16 sm:py-24">
      <PageContainer size="lg">
        <SectionHeading
          eyebrow="VISION & ROADMAP"
          title="Building the intelligence layer for tomorrow's software."
          description="Our long-term architectural trajectory from foundational R&D to global ecosystem deployment."
          align="center"
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#d4d4d4] hover:bg-white hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase text-[#2563eb]">
                    {item.phase}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
                      item.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : item.status === 'In Progress'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#171717] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-[#737373] font-mono">
                  {item.moduleName}
                </p>

                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <ul className="mt-6 pt-4 border-t border-[#e5e5e5] space-y-2 text-xs text-[#171717] font-medium">
                {item.deliverables.slice(0, 3).map((deliv, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#2563eb]" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
