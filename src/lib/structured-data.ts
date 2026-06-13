const BASE_URL = 'https://conciergerieparisouest.fr'
const BRAND_NAME = 'Conciergerie Paris Ouest'
const BRAND_EMAIL = 'conciergerieparisouest@gmail.com'
const BRAND_PHONE = '+33 1 00 00 00 00'
const BRAND_ADDRESS = {
  streetAddress: 'Paris Ouest',
  addressLocality: 'Paris',
  addressRegion: 'Île-de-France',
  addressCountry: 'FR',
}

export function buildLocalBusinessSchema(params?: {
  name?: string
  url?: string
  description?: string
  areaServed?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: params?.name ?? BRAND_NAME,
    url: params?.url ?? BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/og-image.jpg`,
    email: BRAND_EMAIL,
    telephone: BRAND_PHONE,
    address: {
      '@type': 'PostalAddress',
      ...BRAND_ADDRESS,
    },
    description:
      params?.description ??
      'Gestion locative clé en main à Paris Ouest — 60 communes dans les Hauts-de-Seine (92) et les Yvelines (78).',
    priceRange: '€€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: (params?.areaServed ?? []).map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: [],
  }
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BRAND_NAME,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND_PHONE,
      contactType: 'customer service',
      availableLanguage: ['French', 'English'],
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Paris Ouest — Hauts-de-Seine (92) et Yvelines (78)',
    },
  }
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BRAND_NAME,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/estimation-revenus/?commune={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildArticleSchema(params: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url.startsWith('http') ? params.url : `${BASE_URL}${params.url}`,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    image: params.image ?? `${BASE_URL}/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
  }
}
