import React from 'react';
import { Founder, SkillLevel } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Code, Cpu, Globe, Zap, Layers, Briefcase, Rocket } from 'lucide-react';

interface FounderSkillsProps {
  founder: Founder;
}

const levelBadgeStyles: Record<SkillLevel, string> = {
  Strong: 'bg-emerald-50 text-emerald-700 border-emerald-200/90 font-bold',
  'Building With': 'bg-blue-50 text-blue-700 border-blue-200/90 font-semibold',
  'Working Knowledge': 'bg-amber-50 text-amber-700 border-amber-200/90 font-medium',
  Learning: 'bg-indigo-50 text-indigo-700 border-indigo-200/90 font-medium',
};

const categoryIcons: Record<string, React.ReactNode> = {
  AI: <Cpu className="h-4 w-4 text-purple-600" />,
  Programming: <Code className="h-4 w-4 text-blue-600" />,
  'Web Development': <Globe className="h-4 w-4 text-emerald-600" />,
  Automation: <Zap className="h-4 w-4 text-amber-600" />,
  Product: <Layers className="h-4 w-4 text-indigo-600" />,
  Business: <Briefcase className="h-4 w-4 text-slate-600" />,
  'Startup Building': <Rocket className="h-4 w-4 text-rose-600" />,
};

export function FounderSkills({ founder }: FounderSkillsProps) {
  const categories = Array.from(new Set(founder.skills.map((s) => s.category)));

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Capabilities & Focus"
        title="Technical & Operational Skills"
        description="Qualitative capability breakdown with verified skill levels (no arbitrary percentages)."
        align="left"
      />

      <div className="grid grid-cols-1 gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const categorySkills = founder.skills.filter((s) => s.category === category);
          return (
            <Card key={category} variant="glow" className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100/80 border border-slate-200">
                  {categoryIcons[category] || <Code className="h-4 w-4 text-blue-600" />}
                </div>
                <h3 className="text-base font-bold text-slate-900">{category}</h3>
              </div>

              <div className="space-y-2.5">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 rounded-xl bg-slate-50/80 p-2.5 border border-slate-200/70"
                  >
                    <span className="text-xs font-semibold text-slate-800 leading-snug">{skill.name}</span>
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono shrink-0 self-start sm:self-auto ${
                        levelBadgeStyles[skill.level] || 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
