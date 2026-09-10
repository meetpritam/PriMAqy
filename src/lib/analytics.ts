import { AnalyticsEventName, EventProperties, UTMParams } from '@/types/analytics';

type GtagFn = (...args: unknown[]) => void;

/**
 * Parses UTM campaign parameters from URL query string.
 */
export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || undefined,
    medium: params.get('utm_medium') || undefined,
    campaign: params.get('utm_campaign') || undefined,
    term: params.get('utm_term') || undefined,
    content: params.get('utm_content') || undefined,
  };
}

/**
 * Privacy consent state management.
 */
export function isAnalyticsAllowed(): boolean {
  if (typeof window === 'undefined') return true;
  const preference = localStorage.getItem('primaqy-analytics-consent');
  return preference !== 'declined';
}

export function setAnalyticsConsent(allowed: boolean): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('primaqy-analytics-consent', allowed ? 'allowed' : 'declined');
  }
}

/**
 * Main privacy-conscious event tracking function.
 */
export function trackEvent(eventName: AnalyticsEventName, properties?: EventProperties): void {
  if (!isAnalyticsAllowed()) return;

  const utm = getUTMParams();
  const payload: EventProperties = {
    path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    referrer: typeof document !== 'undefined' ? document.referrer : undefined,
    utm_source: utm.source,
    utm_medium: utm.medium,
    utm_campaign: utm.campaign,
    ...properties,
  };

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event: ${eventName}]`, payload);
  }

  if (typeof window !== 'undefined' && (window as unknown as { gtag?: GtagFn }).gtag) {
    (window as unknown as { gtag: GtagFn }).gtag('event', eventName, payload);
  }
}

export function trackPageView(url: string): void {
  trackEvent('page_view', { path: url });
}

export function trackDocumentDownload(documentSlug: string): void {
  trackEvent('document_download', { document_slug: documentSlug });
}
