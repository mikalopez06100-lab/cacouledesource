import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const typeChantier = z.enum([
  'Rénovation salle de bain',
  'Plomberie',
  'Dépannage',
  'Cuisine',
]);

const chantiers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chantiers' }),
  schema: z.object({
    titre: z.string(),
    ville: z.string(),
    type: typeChantier,
    date: z.coerce.date(),
    surface: z.string().optional(),
    description: z.string(),
    /** Chemins publics (/images/chantiers/...) — compatibles Decap CMS */
    photoAvant: z.string(),
    photoApres: z.string(),
    galerie: z.array(z.string()).optional(),
    miseEnAvant: z.boolean().default(false),
  }),
});

export const collections = { chantiers };

export { typeChantier };
