export type SkillLevel = 'Learning' | 'Working Knowledge' | 'Building With' | 'Strong';

export type StatusTag = 'CURRENT' | 'PLANNED' | 'COMPLETED';

export type PhotoCategory =
  | 'Founder'
  | 'Work'
  | 'Study'
  | 'Technology'
  | 'Journey'
  | 'Projects'
  | 'Events'
  | 'Learning'
  | 'Personal'
  | 'Future';

export interface FounderSkill {
  id: string;
  name: string;
  category: 'AI' | 'Programming' | 'Web Development' | 'Automation' | 'Product' | 'Business' | 'Startup Building';
  level: SkillLevel;
}

export interface FounderEducation {
  id: string;
  institution: string;
  field: string;
  status: StatusTag;
  description: string;
  timeline: string;
  subjects?: string[];
}

export interface FounderStudyPlan {
  id: string;
  stage: string;
  title: string;
  description: string;
  status: StatusTag;
  order: number;
}

export interface FounderJourney {
  id: string;
  period: string;
  title: string;
  summary: string;
  details?: string;
  category: 'Learning' | 'Exploration' | 'Building' | 'Entrepreneurship' | 'Venture' | 'Current' | 'Future';
}

export interface FounderProject {
  id: string;
  name: string;
  description: string;
  role: string;
  techStack: string[];
  status: 'Active' | 'In Development' | 'Completed' | 'Research';
  url?: string;
  imageUrl?: string;
}

export interface FounderLearning {
  id: string;
  topic: string;
  why: string;
  connectionToProducts: string;
}

export interface FounderPhilosophy {
  id: string;
  pillar: string;
  principle: string;
  description: string;
}

export interface FounderSocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Email' | 'Website' | 'Other';
  url: string;
  label: string;
}

export interface FounderPhoto {
  id: string;
  url: string;
  caption: string;
  category: PhotoCategory;
  altText: string;
  isHero?: boolean;
  isFeatured?: boolean;
  order: number;
}

export interface FounderSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  aiSummary: string;
  keywords: string[];
}

export interface FounderSectionControl {
  hero: boolean;
  about: boolean;
  journey: boolean;
  whatIBuild: boolean;
  currentWork: boolean;
  skills: boolean;
  education: boolean;
  studyRoadmap: boolean;
  projects: boolean;
  photoGallery: boolean;
  currentlyLearning: boolean;
  philosophy: boolean;
  primaqyConnection: boolean;
  contact: boolean;
}

export interface Founder {
  id: string;
  slug: string;
  name: string;
  publicDisplayName: string;
  role: 'Founder' | 'Co-Founder' | string;
  company: string;
  isFounder: boolean;
  isCoFounder: boolean;
  title: string;
  shortBio: string;
  heroStatement: string;
  aboutIntro: string;
  workingPhilosophy: string;
  motivation: string;
  avatarUrl: string;
  coverUrl?: string;
  isPublished: boolean;
  isFeatured: boolean;
  displayOrder: number;
  email?: string;
  location: string;
  
  // Categorized Data Arrays
  skills: FounderSkill[];
  education: FounderEducation[];
  studyRoadmap: FounderStudyPlan[];
  journey: FounderJourney[];
  projects: FounderProject[];
  photoGallery: FounderPhoto[];
  currentlyLearning: FounderLearning[];
  philosophy: FounderPhilosophy[];
  socialLinks: FounderSocialLink[];
  whatIBuild: string[];
  currentWork: string[];
  primaqyConnection: {
    relationship: string;
    description: string;
    impact: string[];
  };
  sectionControl?: FounderSectionControl;
  seo: FounderSeo;
  
  createdAt: string;
  updatedAt: string;
}
