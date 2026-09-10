export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerData: FooterColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'Toolsetic', href: '/products/toolsetic' },
      { label: 'All Products', href: '/products' },
      { label: 'Technology', href: '/technology' },
      { label: 'Venture Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Venture & Ecosystem',
    links: [
      { label: 'About PriMAqy', href: '/about' },
      { label: 'Startup Portal', href: '/startup' },
      { label: 'Public Documents', href: '/startup/documents' },
      { label: 'Investor Relations', href: '/investors' },
      { label: 'Careers', href: '/careers' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Resources & Legal',
    links: [
      { label: 'Media Center', href: '/media' },
      { label: 'Press Kit', href: '/media/press-kit' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Legal Center', href: '/legal' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
    ],
  },
];
