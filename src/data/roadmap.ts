export interface RoadmapMilestone {
  phase: string;
  moduleName: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
  deliverables: string[];
}

export const roadmapData: RoadmapMilestone[] = [
  {
    phase: 'Module 0',
    moduleName: 'Project Initialization',
    title: 'Engineering Foundation & Documentation',
    description: 'Establish Next.js App Router, TypeScript, Master Documentation, data architecture, and legal status guardrails.',
    status: 'Completed',
    deliverables: [
      '37 Architectural & Product Documents',
      'Data Layer & TypeScript Interfaces',
      'Legal Status Guardrail System',
      'App Router Route Skeleton',
    ],
  },
  {
    phase: 'Module 1',
    moduleName: 'Core Corporate Website',
    title: 'Corporate Portal & Toolsetic Showcase',
    description: 'Deploy core corporate pages including Home, About, Products, Toolsetic, Technology, and Team.',
    status: 'Not Started',
    deliverables: [
      'Home & About Portal',
      'Toolsetic Product Presentation',
      'Technology & Engineering Architecture Page',
      'Team & Leadership Profile',
    ],
  },
  {
    phase: 'Module 2',
    moduleName: 'Business & Startup Ecosystem',
    title: 'Startup Portal & Document Registry',
    description: 'Launch startup ecosystem pages, versioned public document registry, careers, media kit, and investor relations.',
    status: 'Not Started',
    deliverables: [
      'Startup Story & Location Anchor (Patna, Bihar)',
      'Public Document Registry',
      'Investor Relations & Career Center',
      'Press Kit & Media Assets',
    ],
  },
  {
    phase: 'Module 3',
    moduleName: 'Content & Community',
    title: 'Insights Hub & Community Portal',
    description: 'Publish technical insights blog, community guidelines, and newsletter capture integration.',
    status: 'Not Started',
    deliverables: [
      'Technical Insights & Markdown Engine',
      'Community Portal & Guidelines',
      'Newsletter Capture Integration',
    ],
  },
  {
    phase: 'Module 4',
    moduleName: 'Growth Engine',
    title: 'Dynamic SEO & Analytics',
    description: 'Implement dynamic sitemap, robots.txt, JSON-LD structured data, and modular analytics tracking.',
    status: 'Not Started',
    deliverables: [
      'Dynamic Sitemap & Indexing Handler',
      'JSON-LD Organization & Product Schemas',
      'Modular Analytics Event Layer',
    ],
  },
  {
    phase: 'Module 5',
    moduleName: 'Production Launch',
    title: 'Legal Center & Vercel Launch',
    description: 'Finalize Privacy Policy, Terms of Service, Legal Center, security audit, and production deployment.',
    status: 'Not Started',
    deliverables: [
      'Legal Center Hub & Policies',
      'Production Security Audit',
      'Vercel Deployment Launch',
    ],
  },
];
