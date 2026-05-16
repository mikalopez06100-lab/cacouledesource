import { site } from '../../../config/site';
import { absoluteUrl } from '../../../utils/seo';

export function serviceJsonLd(
  name: string,
  description: string,
  path: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Plumber',
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Var, Provence-Alpes-Côte d\'Azur',
    },
    url: absoluteUrl(path),
  };
}
