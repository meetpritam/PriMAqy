import React from 'react';
import { Cpu, Terminal, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

const principles = [
  {
    icon: Cpu,
    title: 'Practical AI Systems',
    description:
      'We focus on building targeted, high-utility AI tools that solve concrete user problems rather than hype-driven chatbots.',
  },
  {
    icon: Terminal,
    title: 'Developer-First Tooling',
    description:
      'Engineered with clean interfaces, low latency, and modular architectures that integrate seamlessly into existing workflows.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge & Prompt Systems',
    description:
      'Structured prompt libraries and contextual repositories that make complex AI interactions reliable and repeatable.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible & Private',
    description:
      'Strict adherence to user privacy, transparent legal guardrails, and secure data handling standards across all products.',
  },
  {
    icon: Zap,
    title: 'High-Performance Edge Architecture',
    description:
      'Built on Next.js 16 App Router and static edge infrastructure for instant page loads and zero unnecessary client JS.',
  },
];

export function TechHighlightsSection() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
      <PageContainer size="lg">
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="ENGINEERING PHILOSOPHY"
            title="Technology should disappear into the experience."
            description="We build software with obsessive attention to performance, simplicity, and technical integrity."
            align="center"
          />
        </RevealWrapper>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealWrapper key={idx} animation="fade-up" delay={idx * 80}>
                <Card variant="glow" className="space-y-4 p-6 sm:p-8 h-full">
                  <IconWrapper size="md" variant="accent">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </IconWrapper>
                  <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </RevealWrapper>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
