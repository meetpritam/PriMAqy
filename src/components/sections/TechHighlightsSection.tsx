import React from 'react';
import { Cpu, Terminal, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';

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
    <section className="border-b border-[#e5e5e5] bg-[#ffffff] py-16 sm:py-24">
      <PageContainer size="lg">
        <SectionHeading
          eyebrow="ENGINEERING PHILOSOPHY"
          title="Technology should disappear into the experience."
          description="We build software with obsessive attention to performance, simplicity, and technical integrity."
          align="center"
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-6 sm:p-8 transition-all duration-300 hover:border-[#d4d4d4] hover:bg-white hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#e5e5e5] text-[#171717] group-hover:text-[#2563eb] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#171717] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#525252] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
