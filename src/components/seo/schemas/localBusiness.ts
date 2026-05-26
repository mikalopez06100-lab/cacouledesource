import { communes, site } from '../../../config/site';
import { absoluteUrl } from '../../../utils/seo';

const PLACEHOLDER_STREET = 'Adresse à renseigner';

function postalAddress(): Record<string, unknown> {
  const address: Record<string, unknown> = {
    '@type': 'PostalAddress',
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };
  if (site.address.street && !site.address.street.startsWith(PLACEHOLDER_STREET)) {
    address.streetAddress = site.address.street;
  }
  return address;
}

export function localBusinessJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${site.url}/#plumber`,
    name: site.name,
    alternateName: site.owner,
    description: `Plombier indépendant dans le Var depuis ${site.artisanSince}. Spécialiste rénovation salle de bain, dépannage et plomberie générale.`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl(site.defaultOgImage),
    logo: absoluteUrl(site.logo),
    address: postalAddress(),
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
    foundingDate: String(site.artisanSince),
    identifier: {
      '@type': 'PropertyValue',
      name: 'SIREN',
      value: site.siren.replace(/\s/g, ''),
    },
    knowsAbout: [
      'Rénovation salle de bain',
      'Plomberie',
      'Dépannage plomberie',
      'Douche à l\'italienne',
    ],
  };
}
