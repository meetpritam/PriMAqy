import { ConversionDefinition } from '@/types/analytics';

export const primaryConversions: ConversionDefinition[] = [
  {
    id: 'conv-newsletter',
    name: 'Newsletter Subscription',
    type: 'primary',
    eventName: 'newsletter_signup',
    description: 'User subscribes to PriMAqy technical updates and newsletter.',
  },
  {
    id: 'conv-contact',
    name: 'General Contact Submission',
    type: 'primary',
    eventName: 'contact_submit',
    description: 'User submits inquiry via main contact form.',
  },
  {
    id: 'conv-investor',
    name: 'Investor Inquiry',
    type: 'primary',
    eventName: 'investor_contact_submit',
    description: 'Investor submits inquiry via investor portal.',
  },
  {
    id: 'conv-career',
    name: 'General Career Application',
    type: 'primary',
    eventName: 'career_application_submit',
    description: 'Builder submits general application interest.',
  },
];

export const secondaryConversions: ConversionDefinition[] = [
  {
    id: 'conv-document',
    name: 'Public Document Download',
    type: 'secondary',
    eventName: 'document_download',
    description: 'User downloads a public startup brief or roadmap PDF.',
  },
  {
    id: 'conv-article-share',
    name: 'Article Social Share',
    type: 'secondary',
    eventName: 'article_share',
    description: 'User shares an insight article via X, LinkedIn, or Copy Link.',
  },
  {
    id: 'conv-toolsetic',
    name: 'Toolsetic Product View',
    type: 'secondary',
    eventName: 'toolsetic_view',
    description: 'User explores Toolsetic flagship landing page.',
  },
];

export const growthFunnels = [
  {
    name: 'Newsletter Conversion Funnel',
    steps: ['page_view', 'newsletter_signup', 'newsletter_success'],
  },
  {
    name: 'Toolsetic Product Funnel',
    steps: ['page_view', 'toolsetic_view', 'cta_click'],
  },
  {
    name: 'Investor Inquiry Funnel',
    steps: ['page_view', 'investor_contact_submit'],
  },
];
