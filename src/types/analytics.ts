export type AnalyticsEventName =
  | 'page_view'
  | 'session_start'
  | 'cta_click'
  | 'product_view'
  | 'toolsetic_view'
  | 'article_view'
  | 'article_share'
  | 'article_search'
  | 'newsletter_signup'
  | 'newsletter_success'
  | 'newsletter_error'
  | 'community_join_click'
  | 'document_view'
  | 'document_download'
  | 'investor_contact_submit'
  | 'career_application_submit'
  | 'contact_submit'
  | 'inquiry_submitted'
  | 'outbound_link_click'
  | 'search'
  | 'search_result_click';

export interface EventProperties {
  path?: string;
  referrer?: string;
  title?: string;
  category?: string;
  label?: string;
  value?: number | string;
  document_slug?: string;
  emailDomain?: string;
  query?: string;
  method?: string;
  type?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface ConversionDefinition {
  id: string;
  name: string;
  type: 'primary' | 'secondary';
  eventName: AnalyticsEventName;
  description: string;
}

export interface UTMParams {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}
