// src/utils/en/navigation.ts

const navBarLinks = [
  { name: 'Home', url: '/en' },
  { name: 'Services', url: '/en/services' },
  { name: 'Products', url: '/en/products' },
  { name: 'Blog', url: '/en/blog' },
  { name: 'Insights', url: '/en/insights' },
  { name: 'Contact', url: '/en/contact' },
];

const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Products', url: '/en/products' },
      { name: 'Services', url: '/en/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Blog', url: '/en/blog' },
      { name: 'Insights', url: '/en/insights' },
      { name: 'Careers', url: '#' },
      { name: 'Customers', url: '/en/clients' },
    ],
  },
];

const socialLinks = {
  facebook: '#',
  x: '#',
  github: 'https://github.com/decernia',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
