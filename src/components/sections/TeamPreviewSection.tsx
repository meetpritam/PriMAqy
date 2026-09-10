import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { leadershipData } from '@/data/team';
import { ArrowRight } from 'lucide-react';

export function TeamPreviewSection() {
  return (
    <SectionWrapper className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 border-t border-slate-200/80">
      <PageContainer size="lg" className="space-y-8 sm:space-y-12">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind PriMAqy"
          description="Driven by a focused founding team committed to technology products and AI innovation."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {leadershipData.map((member) => (
            <Card key={member.id} variant="glow" className="flex flex-col justify-between text-center space-y-4 p-5 sm:p-6">
              <div className="space-y-4">
                <Link href={`/founders/${member.slug}`} className="relative mx-auto h-24 w-24 block group/avatar" aria-label={`View ${member.name} profile`}>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-25 blur-sm group-hover/avatar:opacity-40 transition-opacity" />
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm">
                    {member.avatarUrl ? (
                      <Image
                        src={member.avatarUrl}
                        alt={`${member.name} — ${member.role} of PriMAqy`}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-300 group-hover/avatar:scale-105"
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-bold text-slate-500 text-lg">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </Link>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                    {member.role}
                  </span>
                  <Link href={`/founders/${member.slug}`} className="block pt-1.5 group/name">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover/name:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                  </Link>
                </div>
              </div>
              <div className="pt-2 relative z-10">
                <Button href={`/founders/${member.slug}`} variant="outline" size="sm" className="w-full justify-center group">
                  <span>View Profile</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-blue-600" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/founders" variant="gradient" size="md" className="group w-full sm:w-auto justify-center">
            <span>Meet Founders</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
