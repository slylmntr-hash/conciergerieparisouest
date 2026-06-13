import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page introuvable | Conciergerie Paris Ouest',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center">
      <div className="container text-center py-24">
        <p className="font-display text-8xl font-light text-gold mb-4">404</p>
        <h1 className="font-display text-2xl font-light text-charcoal mb-4">
          Page introuvable
        </h1>
        <p className="text-mid mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-gold">
            Retour à l'accueil
          </Link>
          <Link href="/estimation-revenus/" className="btn-outline">
            Estimer mes revenus
          </Link>
        </div>
      </div>
    </div>
  )
}
