import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simulateur de Revenus Locatifs Paris Ouest | Conciergerie Paris Ouest',
  description:
    'Simulez gratuitement vos revenus en location courte durée à Paris Ouest. 50 communes dans le 92 et le 78. Résultat instantané, estimation personnalisée sous 48h.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/estimation-revenus/' },
  openGraph: {
    title: 'Simulateur Revenus Locatifs Paris Ouest',
    description: 'Combien peut rapporter votre bien en location courte durée ? Simulez gratuitement sur 50 communes.',
    url: 'https://conciergerieparisouest.fr/estimation-revenus/',
  },
}

export default function EstimationLayout({ children }: { children: React.ReactNode }) {
  return children
}
