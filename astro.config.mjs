import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// Bepaal de actieve site URL via een omgevingsvariabele (handig voor .nl / .eu splitsing)
const siteUrl = process.env.SITE_URL || 'https://decernia.nl';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  server: {
    port: 4321,
    host: true,
  },
  image: {
    domains: ['images.unsplash.com'],
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'nl',
        locales: {
          nl: 'nl',
          en: 'en',
        },
      },
    }),
    starlight({
      title: 'Decernia Docs',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Nederlands',
          lang: 'nl',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: 'Snel Aan de Slag',
          items: [{ autogenerate: { directory: 'guides' } }],
        },
        {
          label: 'Architectuur & Kaders',
          items: [
            { label: 'Overzicht', link: 'architecture/overzicht/' },
            {
              label: 'Capability Mapping',
              link: 'architecture/capability-mapping/',
            },
          ],
        },
        {
          label: 'Governance & Strategie',
          items: [{ autogenerate: { directory: 'governance' } }],
        },
        {
          label: 'Geavanceerde Onderwerpen',
          items: [{ autogenerate: { directory: 'advanced' } }],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Decernia',
        },
      ],
      disable404Route: true,
      customCss: ['./src/assets/styles/starlight.css'],
      favicon: '/favicon.ico',
      components: {
        SiteTitle: './src/components/ui/starlight/SiteTitle.astro',
        Head: './src/components/ui/starlight/Head.astro',
        MobileMenuFooter:
          './src/components/ui/starlight/MobileMenuFooter.astro',
        ThemeSelect: './src/components/ui/starlight/ThemeSelect.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: `${siteUrl}/social.webp`,
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: `${siteUrl}/social.webp`,
          },
        },
      ],
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
