export interface LegalSection {
  heading: string;
  content: string[];
}

export interface LegalDocument {
  id: string;
  slug: string;
  title: string;
  lastUpdated: string;
  summary: string;
  sections: LegalSection[];
}
