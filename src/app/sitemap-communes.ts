import type { MetadataRoute } from 'next'
import { allCommunes } from '@/content/keywords'

export default function sitemapCommunes(): MetadataRoute.Sitemap {
  const base = 'https://conciergerieparisouest.fr'
  const lastModified = '2026-01-15'

  return allCommunes.map((slug) => ({
    url: `${base}/gestion-locative/${slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
}
