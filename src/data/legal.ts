import { LegalDocument } from '@/types/legal';

export const legalPrivacyData: LegalDocument = {
  id: 'privacy',
  slug: 'privacy',
  title: 'Privacy Policy',
  lastUpdated: '2026-08-26',
  summary:
    'PriMAqy values user privacy. This document outlines how data is collected, processed, and protected across our websites and products.',
  sections: [
    {
      heading: '1. Information We Collect',
      content: [
        'We collect information directly provided by users, such as email addresses submitted via contact forms, newsletter subscriptions, or inquiry forms.',
        'We do not collect unnecessary sensitive personal information or engage in covert third-party tracking.',
      ],
    },
    {
      heading: '2. How We Use Information',
      content: [
        'Information collected is used solely to respond to user inquiries, send requested product updates, and maintain application security.',
        'We never sell or rent user data to third-party advertisers.',
      ],
    },
    {
      heading: '3. Data Security',
      content: [
        'PriMAqy enforces strict environment variable isolation, encrypted communications (HTTPS), and secure data access controls.',
      ],
    },
    {
      heading: '4. Legal Status & Entity Identity',
      content: [
        'PriMAqy operates as an early-stage technology venture based in Patna, Bihar, India. All legal notices and communications apply to PriMAqy technology initiatives.',
      ],
    },
  ],
};

export const legalTermsData: LegalDocument = {
  id: 'terms',
  slug: 'terms',
  title: 'Terms of Service',
  lastUpdated: '2026-08-26',
  summary:
    'By accessing PriMAqy websites and software applications, you agree to comply with these terms of service.',
  sections: [
    {
      heading: '1. Acceptance of Terms',
      content: [
        'By browsing PriMAqy website or using our software applications (including Toolsetic preview tools), you agree to these Terms of Service.',
      ],
    },
    {
      heading: '2. Acceptable Use',
      content: [
        'Users agree not to misuse PriMAqy services, attempt unauthorized access, or use our digital tools for harmful or illegal activities.',
      ],
    },
    {
      heading: '3. Intellectual Property',
      content: [
        'All software designs, source code, logos, product concepts, and documentation published on PriMAqy platforms are the property of PriMAqy.',
      ],
    },
    {
      heading: '4. Disclaimer of Warranties',
      content: [
        'Services and tools are provided "as is" without warranties of any kind during early-stage development.',
      ],
    },
  ],
};

export const legalCookiesData: LegalDocument = {
  id: 'cookies',
  slug: 'cookies',
  title: 'Cookie Policy',
  lastUpdated: '2026-08-26',
  summary: 'Explanation of technical cookies and local storage usage on PriMAqy.',
  sections: [
    {
      heading: '1. Technical Cookies',
      content: [
        'PriMAqy uses essential local storage keys (such as `primaqy-theme`) solely to remember user interface preferences like Light and Dark theme modes.',
      ],
    },
    {
      heading: '2. Analytics Cookies',
      content: [
        'If analytics tools are enabled, they run in privacy-preserving mode without identifying individual users.',
      ],
    },
  ],
};

export const legalDisclaimerData: LegalDocument = {
  id: 'disclaimer',
  slug: 'disclaimer',
  title: 'Venture & Legal Disclaimer',
  lastUpdated: '2026-08-26',
  summary: 'Important legal notices regarding PriMAqy venture positioning and forward-looking statements.',
  sections: [
    {
      heading: '1. Venture Positioning',
      content: [
        'PriMAqy is an early-stage technology venture based in Patna, Bihar, India. PriMAqy does not claim Private Limited, LLP, incorporated corporate status, government recognition, or third-party funding unless explicitly verified in official documentation.',
      ],
    },
    {
      heading: '2. Forward-Looking Statements',
      content: [
        'Product features, roadmap timelines, and launch dates represent current engineering targets and may change as software development progresses.',
      ],
    },
  ],
};
