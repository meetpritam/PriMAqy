import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { TechHighlightsSection } from '@/components/sections/TechHighlightsSection';
import { WhyPrimaqySection } from '@/components/sections/WhyPrimaqySection';
import { StartupAnchorSection } from '@/components/sections/StartupAnchorSection';
import { RoadmapPreviewSection } from '@/components/sections/RoadmapPreviewSection';
import { TeamPreviewSection } from '@/components/sections/TeamPreviewSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata = constructMetadata({
  title: 'PriMAqy — AI & Technology Venture',
  description:
    'PriMAqy is an emerging AI and technology venture building practical software products for the next generation of digital work.',
});

export default function HomePage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <TechHighlightsSection />
      <WhyPrimaqySection />
      <StartupAnchorSection />
      <RoadmapPreviewSection />
      <TeamPreviewSection />
      <FinalCTASection />
    </article>
  );
}
