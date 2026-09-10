export type InquiryType =
  | 'General Inquiry'
  | 'Business Partnership'
  | 'Product Partnership'
  | 'Investor Inquiry'
  | 'Career Application'
  | 'Media / Press'
  | 'Community';

export interface ContactInquiryPayload {
  name: string;
  email: string;
  organization?: string;
  inquiryType: InquiryType;
  investmentInterest?: string;
  areaOfInterest?: string;
  message: string;
}
