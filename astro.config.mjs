// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL de production — à aligner avec site.ts après déploiement
const site = 'https://cacouledesource.fr';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  image: {
    // sharp installé pour l'optimisation des images importées depuis src/assets
  },
});
