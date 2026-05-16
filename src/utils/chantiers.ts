import type { CollectionEntry } from 'astro:content';

/** Alt descriptif pour le SEO et l'accessibilité */
export function getChantierAlt(
  chantier: CollectionEntry<'chantiers'>,
  moment: 'avant' | 'après' | 'galerie',
  index = 0,
): string {
  const { titre, ville, type } = chantier.data;
  const momentLabel =
    moment === 'avant' ? 'avant travaux' : moment === 'après' ? 'après travaux' : `photo ${index + 1}`;
  return `${type} à ${ville} — ${titre}, ${momentLabel}`;
}

export function formatChantierDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(date);
}
