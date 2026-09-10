import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Shield, FileText, Cookie, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Legal Center — PriMAqy',
  description: 'Access PriMAqy official privacy policy, terms of service, cookie policy, and legal disclaimers.',
});

export default function LegalCenterPage() {
  const legalDocs = [
    {
      icon: Shield,
      title: 'Privacy Policy',
      href: '/legal/privacy',
      desc: 'How user data and inquiries are securely handled.',
    },
    {
      icon: FileText,
      title: 'Terms of Service',
      href: '/legal/terms',
      desc: 'Terms governing website and tool usage.',
    },
    {
      icon: Cookie,
      title: 'Cookie Policy',
      href: '/legal/cookies',
      desc: 'Explanation of essential local storage and preferences.',
    },
    {
      icon: AlertTriangle,
      title: 'Venture Disclaimer',
      href: '/legal/disclaimer',
      desc: 'Legal positioning and forward-looking statements.',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Legal & Compliance"
        title="PriMAqy Legal Center"
        description="Review our official policies, terms of service, privacy standards, and venture disclosures."
      />

      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {legalDocs.map((doc) => {
              const Icon = doc.icon;
              return (
                <Card key={doc.title} variant="glow" className="space-y-4 p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{doc.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-700">{doc.desc}</p>
                  <Link
                    href={doc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:underline pt-2"
                  >
                    <span>Read Policy</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
