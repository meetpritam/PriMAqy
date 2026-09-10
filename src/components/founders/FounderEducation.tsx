import React from 'react';
import { Founder, StatusTag } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

interface FounderEducationProps {
  founder: Founder;
}

const statusTagBadgeStyles: Record<StatusTag, string> = {
  CURRENT: 'bg-blue-50 text-blue-700 border-blue-200 font-bold',
  PLANNED: 'bg-indigo-50 text-indigo-700 border-indigo-200 font-bold',
  COMPLETED: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-bold',
};

export function FounderEducation({ founder }: FounderEducationProps) {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Academic & Self-Directed Learning"
        title="Education & Study Foundations"
        description="Factual breakdown of current academic studies, self-directed engineering, and future academic plans."
        align="left"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {founder.education.map((edu) => (
          <Card key={edu.id} variant="glow" className="p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-mono uppercase tracking-wider ${
                    statusTagBadgeStyles[edu.status]
                  }`}
                >
                  {edu.status === 'CURRENT' && <Clock className="h-3 w-3 text-blue-600" />}
                  {edu.status === 'PLANNED' && <Calendar className="h-3 w-3 text-indigo-600" />}
                  {edu.status === 'COMPLETED' && <CheckCircle2 className="h-3 w-3 text-emerald-600" />}
                  <span>{edu.status}</span>
                </span>
                <span className="text-xs font-mono font-medium text-slate-500">{edu.timeline}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
              <p className="text-sm font-semibold font-mono text-blue-700">{edu.field}</p>
              <p className="text-xs leading-relaxed text-slate-700 font-normal">{edu.description}</p>
            </div>

            {edu.subjects && edu.subjects.length > 0 && (
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 block">
                  Core Subjects & Domains
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/80"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
