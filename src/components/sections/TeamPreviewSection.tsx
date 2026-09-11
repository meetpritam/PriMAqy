import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { leadershipData } from '@/data/team';
import { ArrowRight } from 'lucide-react';

export function TeamPreviewSection() {
  return (
    <section className="border-b border-[#e5e5e5] bg-[#fafafa] py-16 sm:py-24">
      <PageContainer size="lg" className="space-y-12">
        <SectionHeading
          eyebrow="LEADERSHIP & TEAM"
          title="The people behind PriMAqy."
          description="Driven by a focused founding team committed to technology products and AI innovation."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {leadershipData.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-[#e5e5e5] bg-white p-6 text-center space-y-4 shadow-xs transition-all duration-300 hover:border-[#d4d4d4] hover:shadow-md"
            >
              <div className="space-y-4">
                <Link
                  href={`/founders/${member.slug}`}
                  className="relative mx-auto h-24 w-24 block group/avatar"
                  aria-label={`View ${member.name} profile`}
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-xs">
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
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#2563eb] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {member.role}
                  </span>
                  <Link href={`/founders/${member.slug}`} className="block pt-2 group/name">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#171717] group-hover/name:text-[#2563eb] transition-colors">
                      {member.name}
                    </h3>
                  </Link>
                </div>
              </div>
              <div className="pt-2">
                <Button href={`/founders/${member.slug}`} variant="secondary" size="sm" shape="pill" className="w-full justify-center group">
                  <span>View Profile</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#2563eb]" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/founders" variant="primary" size="md" shape="pill" className="group">
            <span>Meet Founders</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
