import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { startupDocumentsData } from '@/data/documents';
import { Download, Clock } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Public Startup Documents — PriMAqy',
  description: 'Access official PriMAqy startup briefs, product overview documents, technical roadmap, and public resources.',
});

export default function DocumentsPage() {
  return (
    <div>
      <PageHeader
        badge="Resource Center"
        title="Public Startup Documents"
        description="Official PriMAqy venture overview documents, product architecture briefs, and public resources."
      />

      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {startupDocumentsData.map((doc) => (
              <Card key={doc.id} variant="glow" className="flex flex-col justify-between space-y-6 p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      {doc.category}
                    </span>
                    <Badge
                      variant={
                        doc.status === 'Public'
                          ? 'status'
                          : doc.status === 'In Preparation'
                          ? 'glow'
                          : 'outline'
                      }
                    >
                      {doc.status}
                    </Badge>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {doc.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {doc.description}
                  </p>
                </div>

                <div className="border-t border-slate-200/90 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700">
                    <Clock className="h-3.5 w-3.5 text-slate-500" />
                    <span>Updated: {doc.date}</span>
                  </div>

                  <div>
                    {doc.status === 'Public' && doc.fileUrl ? (
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:underline"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download ({doc.fileSize})</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono font-bold text-amber-700">
                        In Preparation
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
