import type { Metadata } from 'next'
import { LeadForm } from '@/components/UI/LeadForm'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'

export const metadata: Metadata = {
  title: 'Contact | Conciergerie Paris Ouest',
  description:
    'Contactez Conciergerie Paris Ouest pour une estimation gratuite de vos revenus locatifs. Réponse sous 48h.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <section className="section bg-charcoal">
        <div className="container">
          <Breadcrumb items={[{ name: 'Accueil', url: '/' }, { name: 'Contact', url: '/contact/' }]} />
          <h1 className="text-white mt-6 mb-4">Contactez-nous</h1>
          <p className="text-white/75">Estimation gratuite, réponse sous 48h.</p>
        </div>
      </section>
      <section className="section bg-cream">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-4">Parlons de votre bien</h2>
            <p className="mb-6">Nos experts locaux vous répondent sous 48h avec une estimation personnalisée pour votre commune.</p>
            <div className="space-y-4 text-sm text-mid">
              <div className="flex gap-3">
                <span className="text-gold">—</span>
                <span>60 communes Paris Ouest couvertes</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">—</span>
                <a href="mailto:conciergerieparisouest@gmail.com" className="hover:text-gold transition-colors">
                  conciergerieparisouest@gmail.com
                </a>
              </div>
            </div>
          </div>
          <LeadForm source="contact-page" />
        </div>
      </section>
    </>
  )
}
