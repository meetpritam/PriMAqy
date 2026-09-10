export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: 'Founder' | 'Co-Founder' | string;
  title: string;
  shortBio: string;
  cardTagline: string;
  story: string[];
  vision?: string;
  visionPoints?: string[];
  rolesList: string[];
  interestsList: string[];
  avatarUrl?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  isLeadership: boolean;
}
