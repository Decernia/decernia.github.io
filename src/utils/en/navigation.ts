// src/utils/en/navigation.ts

const navBarLinks = [
  { name: 'Home', url: '/en' },
  { name: 'Services', url: '/en/services' },
  { name: 'Products', url: '/en/products' },
  { name: 'Blog', url: '/en/blog' },
  { name: 'Contact', url: '/en/contact' },
];

const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Tools & Equipment', url: '/en/products' },
      { name: 'Services', url: '/en/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Blog', url: '/en/blog' },
      { name: 'Careers', url: '#' },
      { name: 'Customers', url: '#' },
    ],
  },
];

const socialLinks = {
  facebook: '#',
  x: '#',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
