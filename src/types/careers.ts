export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';

export interface CareerRole {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: EmploymentType;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  applicationStatus: 'Open' | 'Closed' | 'Future Interest';
  applyUrl?: string;
}

export interface GeneralApplicationPayload {
  name: string;
  email: string;
  areaOfInterest: string;
  linkedinOrPortfolio?: string;
  experienceLevel: string;
  message: string;
}
