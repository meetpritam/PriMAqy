import { CheckCircle2, Clock, Sparkles, Flag, Terminal, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface JourneyMilestone {
  id: string;
  period: string;
  year: string;
  stage: string;
  title: string;
  description: string;
  category: string;
  status: 'Completed' | 'Current' | 'Upcoming';
  icon: LucideIcon;
  deliverables?: string[];
}

export const companyJourneyData: JourneyMilestone[] = [
  {
    id: 'j-1',
    period: '2023 – Early Phase',
    year: '2023',
    stage: 'Stage 01',
    title: 'Early Learning & Coding Foundations',
    description:
      'Initiated systematic self-learning in web development, HTML, CSS, JavaScript, and programming fundamentals.',
    category: 'Learning & R&D',
    status: 'Completed',
    icon: Terminal,
    deliverables: [
      'HTML / CSS / JavaScript Mastery',
      'Git Version Control Practices',
      'Web Standards Study',
    ],
  },
  {
    id: 'j-2',
    period: 'Late 2023 – 2024',
    year: '2024',
    stage: 'Stage 02',
    title: 'Technology Exploration & Project Creation',
    description:
      'Built experimental web applications, explored React and modern UI libraries, and studied modern API patterns.',
    category: 'Exploration',
    status: 'Completed',
    icon: Cpu,
    deliverables: [
      'React & Next.js Architecture Experiments',
      'Tailwind CSS Utility Design Patterns',
      'API Integration Benchmarks',
    ],
  },
  {
    id: 'j-3',
    period: '2024 – 2025',
    year: '2025',
    stage: 'Stage 03',
    title: 'AI Micro-Tools & Toolsetic Conceptualization',
    description:
      'Recognized productivity friction in everyday workflows, leading to the creation of the Toolsetic product concept.',
    category: 'Product Design',
    status: 'Completed',
    icon: Sparkles,
    deliverables: [
      'Toolsetic Product Concept Definition',
      'AI Micro-Utility Architecture Blueprint',
      'Unified Developer Workflow Specs',
    ],
  },
  {
    id: 'j-4',
    period: 'Early 2026',
    year: '2026',
    stage: 'Stage 04',
    title: 'PriMAqy Venture Initialization',
    description:
      'Formally founded PriMAqy in Patna, Bihar, establishing the legal, brand, and architecture foundation of the venture.',
    category: 'Venture Foundation',
    status: 'Completed',
    icon: Flag,
    deliverables: [
      'Legal & Brand Guardrails Established',
      'Patna, Bihar Anchor Established',
      'Core Architecture & Web Platform Setup',
    ],
  },
  {
    id: 'j-5',
    period: 'Mid 2026 – Present',
    year: '2026',
    stage: 'Stage 05',
    title: 'Product Architecture & Platform Engineering',
    description:
      'Engineering the full PriMAqy web platform, Toolsetic ecosystem, technical publication pipeline, and venture roadmap.',
    category: 'Current Venture Stage',
    status: 'Current',
    icon: CheckCircle2,
    deliverables: [
      'Toolsetic Flagship Suite In Active Development',
      'PriMAqy Insights Technical Publication Engine',
      'Modules 0–5 Platform Architecture Completed',
    ],
  },
  {
    id: 'j-6',
    period: 'Upcoming Phase',
    year: 'Future',
    stage: 'Stage 06',
    title: 'Global Software Product Scale & Academic Advancement',
    description:
      'Combining advanced academic study in AI with the commercial and technological expansion of PriMAqy products.',
    category: 'Future Trajectory',
    status: 'Upcoming',
    icon: Clock,
    deliverables: [
      'PriMAqy Flow & Insights API Launch',
      'Commercial Software Suite Rollout',
      'AI & Mathematics Academic Integration',
    ],
  },
];
