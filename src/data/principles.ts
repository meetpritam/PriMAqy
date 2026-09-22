import { Cpu, Zap, Code2, Target, ShieldCheck, Compass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface PrincipleItem {
  id: string;
  number: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  category: string;
  engineeringEthos: string;
}

export const companyPrinciples: PrincipleItem[] = [
  {
    id: 'practicality',
    number: '01',
    name: 'Practicality',
    desc: 'Build tools that solve tangible problems for real workflows.',
    icon: Cpu,
    category: 'Product Engineering',
    engineeringEthos: 'Focus on direct utility and real-world workflow efficiency over hype.',
  },
  {
    id: 'accessibility',
    number: '02',
    name: 'Accessibility',
    desc: 'Make intelligent digital utilities easy to discover and use.',
    icon: Zap,
    category: 'User Experience',
    engineeringEthos: 'Frictionless entry and intuitive interaction models for all users.',
  },
  {
    id: 'simplicity',
    number: '03',
    name: 'Simplicity',
    desc: 'Intuitive user experiences with zero unnecessary clutter.',
    icon: Code2,
    category: 'Interface Architecture',
    engineeringEthos: 'Radical visual clarity, minimal cognitive load, and zero UI noise.',
  },
  {
    id: 'innovation',
    number: '04',
    name: 'Innovation',
    desc: 'Harness modern AI models and high-performance web standards.',
    icon: Target,
    category: 'Applied Research',
    engineeringEthos: 'Integrating cutting-edge computational tools with modern Web standards.',
  },
  {
    id: 'privacy',
    number: '05',
    name: 'Privacy',
    desc: 'Zero unauthorized tracking and strong data isolation.',
    icon: ShieldCheck,
    category: 'Data Governance',
    engineeringEthos: 'Default data protection, no third-party telemetry, and strict isolation.',
  },
  {
    id: 'security',
    number: '06',
    name: 'Security',
    desc: 'Strict secret management and defense-in-depth architecture.',
    icon: ShieldCheck,
    category: 'Infrastructure',
    engineeringEthos: 'Zero trust controls, encrypted credentials, and CSP enforcement.',
  },
  {
    id: 'reliability',
    number: '07',
    name: 'Reliability',
    desc: 'High availability, fast loading speeds, and predictable behavior.',
    icon: Zap,
    category: 'System Performance',
    engineeringEthos: 'Sub-second edge routing, zero layout shift, and high system availability.',
  },
  {
    id: 'long-term-thinking',
    number: '08',
    name: 'Long-Term Thinking',
    desc: 'Build scalable software and infrastructure meant to endure.',
    icon: Compass,
    category: 'Craftsmanship',
    engineeringEthos: 'Decoupled architecture and maintainable codebases designed for growth.',
  },
];
