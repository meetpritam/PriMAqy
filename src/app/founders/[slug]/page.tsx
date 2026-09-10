import React from 'react';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { PageContainer } from '@/components/layout/PageContainer';
import { FounderRepository } from '@/lib/founderRepository';
import { FounderHero } from '@/components/founders/FounderHero';
import { FounderAbout } from '@/components/founders/FounderAbout';
import { FounderJourneyTimeline } from '@/components/founders/FounderJourneyTimeline';
import { FounderSkills } from '@/components/founders/FounderSkills';
import { FounderEducation } from '@/components/founders/FounderEducation';
import { FounderStudyRoadmap } from '@/components/founders/FounderStudyRoadmap';
import { FounderProjects } from '@/components/founders/FounderProjects';
import { FounderPhotoGallery } from '@/components/founders/FounderPhotoGallery';
import { FounderLearning } from '@/components/founders/FounderLearning';
import { FounderPhilosophy } from '@/components/founders/FounderPhilosophy';
import { FounderConnection } from '@/components/founders/FounderConnection';
import { FounderAiSummary } from '@/components/founders/FounderAiSummary';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Button } from '@/components/ui/Button';
import { Mail, ArrowUpRight } from 'lucide-react';

interface FounderProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: FounderProfilePageProps) {
  const { slug } = await params;
  const founder = FounderRepository.getFounderBySlug(slug);

  if (!founder) {
    return constructMetadata({
      title: 'Founder Profile Not Found — PriMAqy',
      description: 'The requested founder profile does not exist.',
    });
  }

  return constructMetadata({
    title: founder.seo.title || `${founder.publicDisplayName} — ${founder.role}, PriMAqy`,
    description: founder.seo.description || founder.shortBio,
    image: founder.seo.ogImage || founder.avatarUrl,
    canonical: `/founders/${founder.slug}`,
  });
}

export async function generateStaticParams() {
  const founders = FounderRepository.getPublishedFounders();
  return founders.map((f) => ({ slug: f.slug }));
}

export default async function FounderProfilePage({ params }: FounderProfilePageProps) {
  const { slug } = await params;
  const founder = FounderRepository.getFounderBySlug(slug);

  if (!founder) {
    notFound();
  }

  const personSchema = getPersonSchema(founder);
  const breadcrumbsSchema = getBreadcrumbSchema([
    { label: 'Home', href: '/' },
    { label: 'Founders', href: '/founders' },
    { label: founder.publicDisplayName, href: `/founders/${founder.slug}` },
  ]);

  const control = founder.sectionControl || {
    hero: true,
    about: true,
    journey: true,
    whatIBuild: true,
    currentWork: true,
    skills: true,
    education: true,
    studyRoadmap: true,
    projects: true,
    photoGallery: true,
    currentlyLearning: true,
    philosophy: true,
    primaqyConnection: true,
    contact: true,
  };

  return (
    <div className="space-y-10 sm:space-y-16 pb-16 sm:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Section 1: Hero */}
      {control.hero !== false && <FounderHero founder={founder} />}

      <PageContainer size="lg" className="space-y-10 sm:space-y-16 lg:space-y-20">
        {/* AI & Search Knowledge Block */}
        <FounderAiSummary founder={founder} />

        {/* Section 2: About */}
        {control.about !== false && <FounderAbout founder={founder} />}

        {/* Section 3: Founder Journey */}
        {control.journey !== false && <FounderJourneyTimeline founder={founder} />}

        {/* Section 4: Education & Learning */}
        {control.education !== false && (
          <div className="border-t border-slate-200/90 pt-10 sm:pt-16">
            <FounderEducation founder={founder} />
          </div>
        )}

        {/* Section 5: Future Study Plan */}
        {control.studyRoadmap !== false && (
          <div className="border-t border-slate-200/90 pt-10 sm:pt-16">
            <FounderStudyRoadmap founder={founder} />
          </div>
        )}

        {/* Section 6: Skills */}
        {control.skills !== false && (
          <div className="border-t border-slate-200/90 pt-10 sm:pt-16">
            <FounderSkills founder={founder} />
          </div>
        )}

        {/* Section 7: Projects */}
        {control.projects !== false && (
          <div className="border-t border-slate-200/90 pt-10 sm:pt-16">
            <FounderProjects founder={founder} />
          </div>
        )}

        {/* Section 8: Currently Building & Active Work */}
        {(control.whatIBuild !== false || control.currentWork !== false || control.currentlyLearning !== false) && (
          <div id="current-work" className="space-y-8 sm:space-y-12 border-t border-slate-200/90 pt-10 sm:pt-16">
            {(control.whatIBuild !== false || control.currentWork !== false) && (
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                {control.whatIBuild !== false && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                    <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-blue-700 block">
                      What I Build
                    </span>
                    <ul className="space-y-2.5">
                      {founder.whatIBuild.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {control.currentWork !== false && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                    <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-emerald-700 block">
                      Current Work & Active Endeavors
                    </span>
                    <ul className="space-y-2.5">
                      {founder.currentWork.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {control.currentlyLearning !== false && (
              <FounderLearning founder={founder} />
            )}
          </div>
        )}

        {/* Section 9: Photo Gallery (Only render when at least 3 real photos exist) */}
        {control.photoGallery !== false &&
          founder.photoGallery &&
          founder.photoGallery.filter((p) => Boolean(p.url)).length >= 3 && (
            <div className="border-t border-slate-200/90 pt-10 sm:pt-16">
              <FounderPhotoGallery founder={founder} />
            </div>
          )}

        {/* Section 10: Founder Philosophy */}
        {control.philosophy !== false && (
          <div className="border-t border-slate-200/90 pt-10 sm:pt-16">
            <FounderPhilosophy founder={founder} />
          </div>
        )}

        {/* Section 11: PriMAqy Connection */}
        {control.primaqyConnection !== false && (
          <div className="border-t border-slate-200/90 pt-10 sm:pt-16">
            <FounderConnection founder={founder} />
          </div>
        )}

        {/* Section 12: Contact */}
        {control.contact !== false && (
          <div id="contact" className="border-t border-slate-200/90 pt-12 sm:pt-16">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-5 sm:p-8 lg:p-12 text-white text-center space-y-6 shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Connect with {founder.publicDisplayName}
              </h2>
              <p className="mx-auto max-w-xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Interested in collaborating, discussing AI software development, or learning more about the PriMAqy venture roadmap?
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 pt-2">
                {founder.email && (
                  <Button href={`mailto:${founder.email}`} variant="gradient" size="lg" className="w-full sm:w-auto">
                    <Mail className="h-4 w-4" />
                    <span>Email {founder.publicDisplayName}</span>
                  </Button>
                )}

                {founder.socialLinks.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 min-h-[44px] text-xs font-mono font-bold text-slate-200 hover:border-blue-400 hover:text-white transition-colors w-full sm:w-auto touch-manipulation"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  );
}
