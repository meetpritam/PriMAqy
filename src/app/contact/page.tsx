import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { companyData } from '@/data/company';
import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const metadata = constructMetadata({
  title: 'Contact Us — PriMAqy',
  description: 'Connect with PriMAqy. Submit general inquiries, business partnerships, media requests, or investor inquiries.',
});

export default function ContactPage() {
  const contactChannels = [
    {
      title: 'Founder Direct',
      email: companyData.founderEmail || 'founder.primaqy@outlook.com',
      badge: 'Pritam Kumar',
      bg: 'bg-blue-50/80 border-blue-200/90',
    },
    {
      title: 'Service & Support',
      email: companyData.serviceEmail || 'primaqy.service@outlook.com',
      badge: 'Help & Operations',
      bg: 'bg-emerald-50/80 border-emerald-200/90',
    },
    {
      title: 'Business & Ventures',
      email: companyData.businessEmail || 'primaqy.business@outlook.com',
      badge: 'Partnerships & Investors',
      bg: 'bg-indigo-50/80 border-indigo-200/90',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Connect With Us"
        title="Let's build what's next."
        description="Whether you have a question about Toolsetic, a technology partnership, media request, or general inquiry, we are here to connect."
      />

      <SectionWrapper className="py-10 sm:py-16 lg:py-20">
        <PageContainer size="lg">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* Direct Contact & Mobile Channels */}
            <div className="space-y-6 lg:col-span-5">
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Direct Channels
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  Reach out directly via WhatsApp, connect via specific department emails, or submit the inquiry form.
                </p>
              </div>

              {/* Prominent WhatsApp CTA Button */}
              {companyData.whatsappUrl && (
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white p-4 shadow-[0_4px_16px_rgba(5,150,105,0.25)] transition-all active:scale-[0.98] touch-manipulation group min-h-[52px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                      <MessageCircle className="h-5 w-5 fill-current" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-emerald-100">
                        Fastest Response
                      </span>
                      <span className="text-sm sm:text-base font-bold">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-emerald-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {/* Email Cards List */}
              <div className="space-y-3 pt-2">
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Official Outlook Channels
                </span>
                {contactChannels.map((channel) => (
                  <a
                    key={channel.email}
                    href={`mailto:${channel.email}`}
                    className="block group/email"
                    aria-label={`Send email to ${channel.title} (${channel.email})`}
                  >
                    <Card variant="glow" className={`p-4 border ${channel.bg} space-y-1.5 transition-all group-hover/email:border-blue-400 group-hover/email:shadow-xs`}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase text-slate-900">
                          {channel.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-700 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                          {channel.badge}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 group-hover/email:text-blue-600 transition-colors py-1 min-h-[36px] touch-manipulation break-all">
                        <Mail className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                        <span>{channel.email}</span>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Location Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 border border-slate-200 shadow-2xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono font-bold uppercase text-slate-700">
                    Venture Headquarters
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {companyData.location.formatted}
                  </span>
                </div>
              </div>
            </div>

            {/* Reusable Inquiry Form */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
