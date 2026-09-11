import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { AiAutomationSection } from '@/components/sections/AiAutomationSection';
import { TechHighlightsSection } from '@/components/sections/TechHighlightsSection';
import { StartupAnchorSection } from '@/components/sections/StartupAnchorSection';
import { TeamPreviewSection } from '@/components/sections/TeamPreviewSection';
import { RoadmapPreviewSection } from '@/components/sections/RoadmapPreviewSection';
import { WhyPrimaqySection } from '@/components/sections/WhyPrimaqySection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata = constructMetadata({
  title: 'PriMAqy — AI, Automation & Software',
  description:
    'PriMAqy is an emerging AI and technology venture building practical software products like Toolsetic for the next generation of digital work.',
});

export default function HomePage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <AiAutomationSection />
      <TechHighlightsSection />
      <StartupAnchorSection />
      <TeamPreviewSection />
      <RoadmapPreviewSection />
      <WhyPrimaqySection />
      <FinalCTASection />
    </article>
  );
}
