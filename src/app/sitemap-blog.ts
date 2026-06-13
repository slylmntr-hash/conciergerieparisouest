import type { MetadataRoute } from 'next'

const blogSlugs = [
  'rentabilite-gestion-locative-92',
  'reglementation-location-paris-ouest',
  'investir-lcd-78',
  'tarifs-conciergerie',
]

export default function sitemapBlog(): MetadataRoute.Sitemap {
  const base = 'https://conciergerieparisouest.fr'
  const lastModified = '2026-01-15'

  return blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
}
