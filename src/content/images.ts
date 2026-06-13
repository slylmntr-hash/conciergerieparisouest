export const images = {
  hero: 'photo-1502602898657-3e91760cbb34',
  intro: 'photo-1581097159538-76acced7e742',
  whyUs: 'photo-1549439602-43ebca2327af',
  corporate: 'photo-1497366216548-37526070297c',
  expDinner: 'photo-1414235077428-338989a2e8c0',
  expEvent: 'photo-1540575467063-178a50c2df87',
  expShop: 'photo-1528360983277-13d401cdc186',
  expJet: 'photo-1436491865332-7a61a109cc05',
}

export function unsplashUrl(id: string, width: number): string {
  return `https://images.unsplash.com/${id}?w=${width}&q=75&auto=format&fit=crop`
}

// Map commune slugs to fitting Unsplash photos
const communeImages: Record<string, string> = {
  'neuilly-sur-seine': 'photo-1502602898657-3e91760cbb34',
  'levallois-perret': 'photo-1499856871958-5b9627545d1a',
  'boulogne-billancourt': 'photo-1558618666-fcd25c85cd64',
  'la-defense': 'photo-1541899481282-d53bffe3c35d',
  'versailles': 'photo-1565073182887-6bcefbe225b1',
  'saint-germain-en-laye': 'photo-1564501049412-61c2a3083791',
  'velizy-villacoublay': 'photo-1497366216548-37526070297c',
}

const fallbackCommuneImages = [
  'photo-1499856871958-5b9627545d1a',
  'photo-1502602898657-3e91760cbb34',
  'photo-1558618666-fcd25c85cd64',
  'photo-1549439602-43ebca2327af',
  'photo-1414235077428-338989a2e8c0',
]

export function communeImageId(slug: string): string {
  if (communeImages[slug]) return communeImages[slug]
  // Deterministic fallback based on slug hash
  const idx = slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % fallbackCommuneImages.length
  return fallbackCommuneImages[idx]
}
