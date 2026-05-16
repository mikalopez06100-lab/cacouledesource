/**
 * Configuration centrale du site — modifier ici les infos de David.
 * Les valeurs marquées PLACEHOLDER doivent être remplacées avant mise en ligne.
 */

export const site = {
  name: 'Ça Coule de Source',
  owner: 'David COLLONGE',
  tagline: 'Plombier indépendant — Var (83)',
  /** URL canonique du site en production */
  url: 'https://cacouledesource.fr',
  /** Logo officiel (fond blanc) */
  logo: '/images/logo.jpg',
  logoWebp: '/images/logo.webp',
  useLogo: true,
  /** Photo portrait (section À propos) */
  portrait: '/images/portrait.webp',
  portraitFallback: '/images/portrait.jpg',

  // ——— NAP (Name, Address, Phone) ———
  phone: '+33650160238',
  phoneDisplay: '06 50 16 02 38',
  email: 'contact@cacouledesource.fr',
  address: {
    street: 'Adresse à renseigner', // PLACEHOLDER
    city: 'La Garde',
    postalCode: '83130',
    region: 'Var',
    country: 'FR',
  },
  /** Coordonnées GPS pour Schema.org — PLACEHOLDER */
  geo: {
    latitude: 43.124,
    longitude: 6.010,
  },

  // ——— Identité légale & faits vérifiables ———
  siren: '792 487 837',
  ape: '4322A',
  artisanSince: 2013,
  stats: {
    experienceYears: 13,
    sallesDeBainRenovees: 35,
    noteGoogle: 4.8,
    communesCount: 18,
    rayonMinutes: 40,
  },
  hours: 'Lun-Ven 8h-18h',
  decennale: 'Assurance décennale en cours de validité',

  social: {
    instagram: 'https://www.instagram.com/cacouledesource',
  },

  defaultOgImage: '/images/placeholders/hero-chantier.svg',
} as const;

/** Communes desservies avec temps de trajet approximatif depuis La Garde */
export const communes = [
  { name: 'Toulon', travelMinutes: 15 },
  { name: 'La Garde', travelMinutes: 0 },
  { name: 'La Valette-du-Var', travelMinutes: 10 },
  { name: 'Hyères', travelMinutes: 25 },
  { name: 'Le Pradet', travelMinutes: 12 },
  { name: 'Carqueiranne', travelMinutes: 18 },
  { name: 'La Crau', travelMinutes: 20 },
  { name: 'La Farlède', travelMinutes: 8 },
  { name: 'Solliès-Pont', travelMinutes: 15 },
  { name: 'Cuers', travelMinutes: 22 },
  { name: 'Pierrefeu-du-Var', travelMinutes: 28 },
  { name: 'Le Castellet', travelMinutes: 30 },
  { name: 'Le Beausset', travelMinutes: 32 },
  { name: 'Sanary-sur-Mer', travelMinutes: 25 },
  { name: 'Six-Fours-les-Plages', travelMinutes: 20 },
  { name: 'La Seyne-sur-Mer', travelMinutes: 18 },
  { name: 'Ollioules', travelMinutes: 22 },
  { name: 'Bandol', travelMinutes: 35 },
] as const;

export const testimonials = [
  {
    quote:
      "David est intervenu pour la rénovation complète de notre salle de bain. Très professionnel, travail propre et soigné, dans les délais annoncés. Je recommande sans hésiter.",
    author: 'Sylvie M.',
    location: 'Toulon',
    service: 'Rénovation salle de bain',
  },
  {
    quote:
      "Fuite un dimanche matin, David a été disponible et réactif. Diagnostic clair, intervention efficace, tarif honnête. C'est devenu mon plombier de confiance.",
    author: 'Jean-Marc D.',
    location: 'La Garde',
    service: 'Dépannage urgent',
  },
  {
    quote:
      "Remplacement de notre chauffe-eau et installation d'un nouveau robinet de cuisine. Devis détaillé en amont, aucune mauvaise surprise. Je le recommande à mon entourage.",
    author: 'Patrick et Anne B.',
    location: 'La Crau',
    service: 'Plomberie générale',
  },
] as const;

export const values = [
  {
    title: 'Devis détaillé',
    text: "Pas de mauvaise surprise. Chaque devis liste précisément matériaux, main d'œuvre et délais.",
  },
  {
    title: 'Un seul interlocuteur',
    text: 'De la conception à la livraison, vous avez affaire à une seule personne. Disponible et joignable.',
  },
  {
    title: 'Garantie décennale',
    text: 'Tous mes travaux sont couverts par une assurance décennale à jour.',
  },
] as const;

export const services = [
  {
    id: 'renovation',
    slug: '/renovation-salle-de-bain',
    featured: true,
    tag: 'Spécialité',
    title: 'Rénovation salle de bain',
    description:
      'Le projet complet, de A à Z. Je gère la coordination des corps d\'état si besoin (carrelage, électricité, plâtrerie).',
    items: [
      'Conception et plan 3D',
      'Dépose intégrale',
      'Plomberie complète',
      'Pose receveur, vasque, robinetterie',
      'Coordination autres corps d\'état',
      'Livraison clé en main',
    ],
    icon: 'bath',
  },
  {
    id: 'plomberie',
    slug: '/plomberie-depannage',
    featured: false,
    title: 'Plomberie générale',
    description: 'Toutes les interventions classiques sur votre installation existante.',
    items: [
      'Pose et remplacement chauffe-eau',
      'Installation chaudière gaz',
      'Création réseau eau/gaz',
      'Pose équipements sanitaires',
      'Mise aux normes',
    ],
    icon: 'wrench',
  },
  {
    id: 'depannage',
    slug: '/plomberie-depannage',
    featured: false,
    title: 'Dépannage',
    description: 'Quand quelque chose lâche, je passe rapidement. Diagnostic clair, devis avant intervention.',
    items: [
      'Fuites d\'eau',
      'Canalisations bouchées',
      'Robinetterie défectueuse',
      'Chasse d\'eau, ballon, mitigeur',
      'Diagnostic avant travaux',
    ],
    icon: 'bolt',
  },
] as const;

export type FaqItem = { question: string; answer: string };

/** FAQ partagée — phrases autonomes pour citabilité IA */
export const faqGeneral: FaqItem[] = [
  {
    question: 'Combien coûte une rénovation de salle de bain ?',
    answer:
      "Le coût d'une rénovation de salle de bain dans le Var varie selon la surface, les matériaux et l'état existant. David COLLONGE établit un devis détaillé gratuit après visite sur place à Toulon, La Garde ou dans les communes environnantes.",
  },
  {
    question: 'Intervenez-vous en urgence pour une fuite ?',
    answer:
      "David COLLONGE, plombier à La Garde, intervient en dépannage pour les fuites d'eau, canalisations bouchées et pannes de chauffe-eau sur le grand Toulonnais, avec diagnostic et devis avant travaux.",
  },
  {
    question: 'Quelle est votre zone d\'intervention ?',
    answer:
      "L'entreprise Ça Coule de Source intervient dans un rayon d'environ 40 minutes autour de La Garde : Toulon, Hyères, La Crau, La Valette-du-Var, Six-Fours, La Seyne-sur-Mer et 18 communes du Var.",
  },
  {
    question: 'Proposez-vous un devis gratuit ?',
    answer:
      'Oui. David COLLONGE propose un devis gratuit et détaillé pour toute rénovation de salle de bain ou intervention de plomberie chez les particuliers du Var.',
  },
];

export const faqRenovation: FaqItem[] = [
  {
    question: 'Combien de temps dure une rénovation de salle de bain ?',
    answer:
      "Une rénovation complète de salle de bain prend en général 2 à 4 semaines selon la surface et la coordination des corps d'état. David COLLONGE planifie les délais dans le devis.",
  },
  {
    question: 'Gérez-vous le carrelage et l\'électricité ?',
    answer:
      "David COLLONGE coordonne les corps d'état (carrelage, électricité, plâtrerie) pour une rénovation clé en main, tout en restant votre interlocuteur unique.",
  },
  ...faqGeneral.slice(2),
];

export const faqPlomberie: FaqItem[] = [
  {
    question: 'Remplacez-vous les chauffe-eau et chaudières ?',
    answer:
      'Oui. David COLLONGE pose et remplace les chauffe-eau et installe les chaudières gaz pour les particuliers du Var, avec devis détaillé préalable.',
  },
  {
    question: 'Faites-vous le dépannage le week-end ?',
    answer:
      "Les urgences (fuites importantes) sont traitées en priorité. Contactez David COLLONGE par téléphone pour connaître les disponibilités du jour.",
  },
  ...faqGeneral.slice(2),
];

/** Métadonnées SEO par page */
export const pageMeta = {
  home: {
    title: 'Ça Coule de Source — David COLLONGE, plombier Var',
    description:
      'Ça Coule de Source — David COLLONGE, plombier dans le Var depuis 2013. Spécialiste rénovation salle de bain. Toulon, La Garde, Hyères, La Crau et alentours.',
  },
  renovation: {
    title: 'Rénovation salle de bain Toulon & Var — David COLLONGE',
    description:
      'Rénovation salle de bain clé en main à Toulon, La Garde et dans le Var. Artisan plombier depuis 2013. Devis gratuit, un seul interlocuteur.',
  },
  plomberie: {
    title: 'Plombier dépannage Toulon & Var — Ça Coule de Source',
    description:
      'Plomberie générale et dépannage urgent à La Garde, Toulon et le grand Toulonnais. Fuites, chauffe-eau, canalisations. David COLLONGE, plombier depuis 2013.',
  },
  realisations: {
    title: 'Réalisations plomberie & salles de bain — Var',
    description:
      'Photos avant/après de chantiers de rénovation salle de bain et plomberie réalisés par David COLLONGE dans le Var.',
  },
  zones: {
    title: 'Zone d\'intervention plombier Var — Toulon, La Garde, Hyères',
    description:
      'David COLLONGE intervient dans 18 communes du Var autour de La Garde et Toulon. Temps de trajet et liste des villes desservies.',
  },
  contact: {
    title: 'Contact & devis gratuit — Plombier La Garde',
    description:
      'Contactez David COLLONGE pour un devis plomberie ou rénovation salle de bain dans le Var. Réponse rapide.',
  },
} as const;
