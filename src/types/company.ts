export interface LegalStatusGuardrails {
  entityStatus: 'PriMAqy — AI & Technology Venture' | string;
  isPrivateLimited: boolean;
  isLLP: boolean;
  isIncorporated: boolean;
  isDpiitRecognized: boolean;
  isStartupBiharRecognized: boolean;
  isPatentHolder: boolean;
  isTrademarkOwner: boolean;
  isGovernmentApproved: boolean;
  isInvestorBacked: boolean;
}

export interface CompanyLocation {
  city: string;
  state: string;
  country: string;
  formatted: string;
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  whatsapp?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  location: CompanyLocation;
  stage: string;
  foundedYear: string;
  contactEmail: string;
  founderEmail?: string;
  serviceEmail?: string;
  businessEmail?: string;
  whatsappUrl?: string;
  socials: SocialLinks;
  legalGuardrails: LegalStatusGuardrails;
}
