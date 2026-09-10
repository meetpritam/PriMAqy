import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Badge } from '@/components/ui/Badge';
import { MapPin, Globe } from 'lucide-react';

export function TrustStrip() {
  const categories = [
    'Artificial Intelligence',
    'Software Engineering',
    'Workflow Automation',
    'Digital Productivity',
    'Developer Tools',
  ];

  return (
    <div className="border-b border-slate-200/90 bg-gradient-to-r from-blue-50/40 via-slate-50 to-indigo-50/40 py-5">
      <PageContainer size="lg">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-slate-800 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-blue-600 animate-bounce" />
            <span>From Bihar, India — Building for the world.</span>
            <Globe className="h-3.5 w-3.5 text-indigo-500 ml-1" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <Badge key={cat} variant="outline" className="text-xs bg-white/90 hover:border-blue-400">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
