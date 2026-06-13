import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mentions Légales | Conciergerie Paris Ouest',
  description: 'Mentions légales de Conciergerie Paris Ouest.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/mentions-legales/' },
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="section bg-charcoal">
        <div className="container">
          <Breadcrumb items={[{ name: 'Accueil', url: '/' }, { name: 'Mentions légales', url: '/mentions-legales/' }]} />
          <h1 className="text-white mt-6">Mentions Légales</h1>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl article-body">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Conciergerie Paris Ouest</strong><br />
            Paris Ouest — Hauts-de-Seine (92) & Yvelines (78)<br />
            Email : <a href="mailto:conciergerieparisouest@gmail.com">conciergerieparisouest@gmail.com</a>
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong><br />
            340 Pine Street, Suite 900, San Francisco, California 94104, USA<br />
            <a href="https://vercel.com" rel="noopener noreferrer" target="_blank">vercel.com</a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de Conciergerie Paris Ouest, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus, en tout ou en partie, est strictement interdite sans autorisation préalable écrite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations collectées via les formulaires de contact sont utilisées exclusivement pour répondre à vos demandes. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:conciergerieparisouest@gmail.com">conciergerieparisouest@gmail.com</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de suivi ou publicitaires. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
          </p>

          <h2>Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens vers des sites tiers. Conciergerie Paris Ouest n'est pas responsable du contenu de ces sites externes.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. Tout litige relatif à son utilisation sera soumis aux tribunaux compétents de Paris.
          </p>
        </div>
      </section>
    </div>
  )
}
