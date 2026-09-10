export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const structuredNavigation: NavGroup[] = [
  {
    label: 'Products',
    items: [
      { title: 'Toolsetic', href: '/products/toolsetic', description: 'AI-first productivity ecosystem' },
      { title: 'All Products', href: '/products', description: 'Product suite & roadmap pipeline' },
    ],
  },
  {
    label: 'Company',
    items: [
      { title: 'About Us', href: '/about', description: 'Our story, mission & principles' },
      { title: 'Meet Founders', href: '/founders', description: 'Pritam Kumar & Anshu Kumar' },
      { title: 'Technology', href: '/technology', description: 'Architecture & engineering' },
      { title: 'Team', href: '/team', description: 'Leadership & engineering team' },
      { title: 'Roadmap', href: '/roadmap', description: 'Multi-phase venture trajectory' },
    ],
  },
  {
    label: 'Startup',
    items: [
      { title: 'Startup Overview', href: '/startup', description: 'Patna, Bihar venture journey' },
      { title: 'Public Documents', href: '/startup/documents', description: 'Startup briefs & public resources' },
      { title: 'Investor Relations', href: '/investors', description: 'Early-stage venture overview' },
      { title: 'Careers', href: '/careers', description: 'Build with PriMAqy' },
      { title: 'Community', href: '/community', description: 'Developer & creator ecosystem' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { title: 'Insights / Blog', href: '/insights', description: 'Venture thoughts, tech & AI essays' },
      { title: 'Media / Press', href: '/media', description: 'Press kit & brand assets' },
      { title: 'Newsletter', href: '/newsletter', description: 'Product updates & insights' },
      { title: 'Legal Center', href: '/legal', description: 'Policies & disclaimers' },
    ],
  },
];

export const flatNavigation: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Founders', href: '/founders' },
  { title: 'Products', href: '/products' },
  { title: 'Toolsetic', href: '/products/toolsetic' },
  { title: 'Technology', href: '/technology' },
  { title: 'Startup', href: '/startup' },
  { title: 'Documents', href: '/startup/documents' },
  { title: 'Investors', href: '/investors' },
  { title: 'Careers', href: '/careers' },
  { title: 'Roadmap', href: '/roadmap' },
  { title: 'Media', href: '/media' },
  { title: 'Community', href: '/community' },
  { title: 'Newsletter', href: '/newsletter' },
  { title: 'Legal', href: '/legal' },
  { title: 'Contact', href: '/contact' },
];
