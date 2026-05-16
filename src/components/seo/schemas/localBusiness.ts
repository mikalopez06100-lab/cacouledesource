import { communes, site } from '../../../config/site';
import { absoluteUrl } from '../../../utils/seo';

export function localBusinessJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: site.name,
    alternateName: site.owner,
    description: `Plombier indépendant dans le Var depuis ${site.artisanSince}. Spécialiste rénovation salle de bain.`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl(site.defaultOgImage),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: communes.map((c) => ({
      '@type': 'City',
      name: c.name,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.stats.noteGoogle,
      bestRating: 5,
      ratingCount: 24,
    },
    foundingDate: String(site.artisanSince),
    identifier: {
      '@type': 'PropertyValue',
      name: 'SIREN',
      value: site.siren.replace(/\s/g, ''),
    },
  };
}
