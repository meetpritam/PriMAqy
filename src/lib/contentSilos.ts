export interface ContentSilo {
  name: string;
  slug: string;
  description: string;
  primaryProductUrl: string;
  relatedCategories: string[];
  recommendedDocSlugs: string[];
}

export const contentSilosData: ContentSilo[] = [
  {
    name: 'AI & Machine Learning Ecosystem',
    slug: 'ai-machine-learning',
    description: 'Topical cluster exploring LLM architectures, vector embeddings, prompt engineering, and intelligent micro-tools.',
    primaryProductUrl: '/products/toolsetic',
    relatedCategories: ['AI & Machine Learning', 'Mathematics & Algorithms'],
    recommendedDocSlugs: ['product-overview', 'roadmap'],
  },
  {
    name: 'Modern Software Engineering',
    slug: 'software-engineering',
    description: 'Topical cluster exploring React Server Components, Next.js App Router, TypeScript boundaries, and Web performance.',
    primaryProductUrl: '/technology',
    relatedCategories: ['Software Engineering'],
    recommendedDocSlugs: ['company-overview', 'roadmap'],
  },
  {
    name: 'Venture & Product Growth',
    slug: 'startup-growth',
    description: 'Topical cluster detailing our Bihar/Patna origin narrative, transparent venture roadmap, and build-in-public notes.',
    primaryProductUrl: '/startup',
    relatedCategories: ['Founder Notes', 'Toolsetic'],
    recommendedDocSlugs: ['company-overview', 'business-model'],
  },
];
