import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { leadershipData } from '@/data/team';
import { ArrowRight } from 'lucide-react';

export function TeamPreviewSection() {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-24">
      <PageContainer size="lg" className="space-y-12">
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="LEADERSHIP & TEAM"
            title="The people behind PriMAqy."
            description="Driven by a focused founding team committed to technology products and AI innovation."
            align="center"
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {leadershipData.map((member, idx) => (
            <RevealWrapper key={member.id} animation="fade-up" delay={idx * 100}>
              <Card
                variant="glow"
                className="h-full p-6 text-center space-y-4 flex flex-col justify-between bg-white border-slate-200/90"
              >
                <div className="space-y-4">
                  <Link
                    href={`/founders/${member.slug}`}
                    className="relative mx-auto h-24 w-24 block group/avatar"
                    aria-label={`View ${member.name} profile`}
                  >
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-slate-900 shadow-md ring-2 ring-blue-500/20">
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
                        <div className="flex h-full w-full items-center justify-center font-bold text-slate-300 text-lg">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="space-y-1.5">
                    <Badge variant={member.role === 'Founder' ? 'status' : 'accent'} className="mx-auto font-mono text-[11px]">
                      {member.role}
                    </Badge>
                    <Link href={`/founders/${member.slug}`} className="block group/name pt-1">
                      <h3 className="text-xl font-bold text-slate-900 group-hover/name:text-blue-600 transition-colors tracking-tight">
                        {member.name}
                      </h3>
                    </Link>
                    <p className="text-xs font-mono text-slate-500">
                      {member.title}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button href={`/founders/${member.slug}`} variant="outline" size="sm" shape="pill" className="w-full justify-center group">
                    <span>View Profile</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper animation="fade-up" delay={200} className="text-center">
          <Button href="/founders" variant="gradient" size="md" shape="pill" className="group">
            <span>Meet Founders</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </RevealWrapper>
      </PageContainer>
    </section>
  );
}
