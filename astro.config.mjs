import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oscarmolinar.dev',
  integrations: [
    tailwind(),
    alpinejs(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  },
});