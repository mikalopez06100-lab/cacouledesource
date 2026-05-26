import type { CollectionEntry } from 'astro:content';
import { site } from '../config/site';

export function absoluteUrl(path: string): string {
  const base = site.url.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqPageJsonLd(
  faq: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    alternateName: site.owner,
    url: site.url,
    inLanguage: 'fr-FR',
    description:
      'Plombier indépendant dans le Var — rénovation salle de bain, plomberie et dépannage à Toulon, La Garde et alentours.',
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: absoluteUrl(site.logo),
    },
  };
}

export function itemListJsonLd(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Réalisations plomberie et salles de bain — Var',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  };
}

export function chantierArticleJsonLd(
  chantier: CollectionEntry<'chantiers'>,
  path: string,
): Record<string, unknown> {
  const { titre, ville, type, date, description, photoApres, photoAvant, galerie } = chantier.data;
  const images = [photoApres, photoAvant, ...(galerie ?? [])]
    .filter(Boolean)
    .map((src) => absoluteUrl(src));

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: titre,
    description,
    image: images,
    datePublished: date.toISOString().split('T')[0],
    author: {
      '@type': 'Person',
      name: site.owner,
      jobTitle: 'Plombier',
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(site.logo),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(path),
    },
    about: {
      '@type': 'Service',
      name: type,
      areaServed: {
        '@type': 'City',
        name: ville,
      },
    },
  };
}
