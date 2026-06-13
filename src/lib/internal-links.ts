import { siloRegistry, interSiloLinks } from '@/content/silos'
import { communeToDisplay } from '@/content/keywords'

export type InternalLink = {
  url: string
  label: string
  type: 'silo-internal' | 'inter-silo' | 'pillar' | 'hub'
}

export function getCommuneInternalLinks(communeUrl: string): InternalLink[] {
  const links: InternalLink[] = []

  // Find which silo this commune belongs to
  let communeSilo: string | null = null
  for (const [siloId, silo] of Object.entries(siloRegistry)) {
    if ('communes' in silo && silo.communes.includes(communeUrl)) {
      communeSilo = siloId
      break
    }
  }

  if (!communeSilo) return links

  const silo = siloRegistry[communeSilo as keyof typeof siloRegistry]
  const siloCommunes = 'communes' in silo ? silo.communes : []

  // Pillar link (always present)
  links.push({
    url: silo.pillarUrl,
    label:
      communeSilo === 'silo-la-defense-92'
        ? 'Gestion locative Hauts-de-Seine (92)'
        : communeSilo === 'silo-versailles-78'
        ? 'Gestion locative Yvelines (78)'
        : 'Blog',
    type: 'pillar',
  })

  // 3 sibling commune links from same silo
  const siblings = siloCommunes
    .filter((u: string) => u !== communeUrl)
    .slice(0, 3)

  for (const siblingUrl of siblings) {
    const slug = siblingUrl.replace('/gestion-locative/', '').replace('/', '')
    links.push({
      url: siblingUrl,
      label: `Gestion locative ${communeToDisplay(slug)}`,
      type: 'silo-internal',
    })
  }

  // Inter-silo links if authorized
  const interSilo = interSiloLinks[communeUrl]
  if (interSilo) {
    for (const targetUrl of interSilo.slice(0, 1)) {
      const slug = targetUrl.replace('/gestion-locative/', '').replace('/', '')
      links.push({
        url: targetUrl,
        label: `Gestion locative ${communeToDisplay(slug)}`,
        type: 'inter-silo',
      })
    }
  }

  return links
}

export function getPillarInternalLinks(
  siloId: 'silo-la-defense-92' | 'silo-versailles-78'
): InternalLink[] {
  const silo = siloRegistry[siloId]
  if (!silo || !('communes' in silo)) return []

  return silo.communes.slice(0, 12).map((url: string) => {
    const slug = url.replace('/gestion-locative/', '').replace('/', '')
    return {
      url,
      label: communeToDisplay(slug),
      type: 'silo-internal' as const,
    }
  })
}

export function getBlogInternalLinks(): InternalLink[] {
  return [
    { url: '/', label: 'Accueil Conciergerie Paris Ouest', type: 'hub' },
    { url: '/gestion-locative-92/', label: 'Gestion locative Hauts-de-Seine', type: 'hub' },
    { url: '/gestion-locative-78/', label: 'Gestion locative Yvelines', type: 'hub' },
    { url: '/estimation-revenus/', label: 'Simulateur de revenus', type: 'hub' },
  ]
}
