import { companyData } from '@/data/company';
import { Founder } from '@/types/founder';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://primaqy.in';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PriMAqy',
    alternateName: companyData.legalGuardrails.entityStatus,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.jpg`,
    description: companyData.description,
    founder: [
      {
        '@type': 'Person',
        name: 'Pritam Kumar',
        jobTitle: 'Founder',
        url: `${baseUrl}/founders/pritam-kumar`,
        image: `${baseUrl}/images/pritam.jpg`,
      },
      {
        '@type': 'Person',
        name: 'Anshu Kumar',
        jobTitle: 'Co-Founder',
        url: `${baseUrl}/founders/anshu-kumar`,
        image: `${baseUrl}/images/anshu.jpg`,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      addressCountry: 'India',
    },
    sameAs: Object.values(companyData.socials).filter(Boolean),
  };
}

export function getPersonSchema(founder: Founder) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: founder.name,
    jobTitle: founder.role,
    url: `${baseUrl}/founders/${founder.slug}`,
    image: `${baseUrl}${founder.avatarUrl}`,
    description: founder.shortBio,
    worksFor: {
      '@type': 'Organization',
      name: 'PriMAqy',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.jpg`,
    },
    knowsAbout: founder.skills.map((s) => s.name),
    sameAs: founder.socialLinks.map((s) => s.url).filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      addressCountry: 'India',
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PriMAqy',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/insights/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getToolseticSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Toolsetic',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'AI-first productivity ecosystem unifying AI micro-tools, prompt frameworks, and workflow automation.',
  };
}

export function getBreadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  };
}
