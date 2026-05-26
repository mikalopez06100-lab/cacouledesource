// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL de production — à aligner avec site.ts après déploiement
const site = 'https://cacouledesource.fr';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/merci') && !page.includes('/forms/'),
    }),
  ],
  image: {
    // sharp installé pour l'optimisation des images importées depuis src/assets
  },
});
