// Links voor de Nederlandse navigatiebalk (root /)
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Diensten', url: '/services' },
  { name: 'Producten', url: '/products' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];

// Links voor de Nederlandse footer
const footerLinks = [
  {
    section: 'Ecosysteem',
    links: [
      { name: 'Documentatie', url: '/welcome-to-docs/' },
      { name: 'Producten', url: '/products' },
      { name: 'Diensten', url: '/services' },
    ],
  },
  {
    section: 'Organisatie',
    links: [
      { name: 'Over ons', url: '#' },
      { name: 'Blog', url: '/blog' },
      { name: 'Carrière', url: '#' },
      { name: 'Klanten', url: '#' },
    ],
  },
];

// Social media links
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
