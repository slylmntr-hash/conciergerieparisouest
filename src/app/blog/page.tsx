import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'

export const metadata: Metadata = {
  title: 'Blog — Gestion Locative Paris Ouest | Conciergerie Paris Ouest',
  description:
    'Guides, conseils et données sur la gestion locative à Paris Ouest. Rentabilité, réglementation, investissement LCD dans le 92 et le 78.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/blog/' },
}

const articles = [
  {
    slug: 'rentabilite-gestion-locative-92',
    title: 'Combien rapporte un bien en gestion locative dans le 92 en 2026 ? Guide complet par commune',
    description: 'Tableau de rentabilité complet pour les 36 communes des Hauts-de-Seine. Données marché 2026.',
    category: 'Rentabilité',
    readTime: '12 min',
    date: '2026-01-10',
  },
  {
    slug: 'reglementation-location-paris-ouest',
    title: 'Réglementation location courte durée Paris Ouest 2026 — Guide complet',
    description: 'Enregistrement en mairie, règle des 120 jours, DPE, règlement de copropriété. Tout ce qu\'il faut savoir en 2026.',
    category: 'Réglementation',
    readTime: '10 min',
    date: '2026-01-08',
  },
  {
    slug: 'investir-lcd-78',
    title: 'Investir en Location Courte Durée dans les Yvelines (78) : Guide 2026',
    description: 'Guide complet pour investir en LCD dans les Yvelines. Versailles, Vélizy, Saint-Germain. Rentabilité et fiscalité.',
    category: 'Investissement',
    readTime: '15 min',
    date: '2026-01-05',
  },
  {
    slug: 'tarifs-conciergerie',
    title: "Tarifs et Commissions d'une Conciergerie à Paris Ouest",
    description: "Quels sont les tarifs d'une gestion locative à Paris Ouest ? Commissions, services inclus, comparaison transparente.",
    category: 'Tarifs',
    readTime: '8 min',
    date: '2026-01-03',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="section bg-charcoal">
        <div className="container">
          <Breadcrumb items={[{ name: 'Accueil', url: '/' }, { name: 'Blog', url: '/blog/' }]} />
          <h1 className="text-white mt-6 mb-4">
            Guides & Conseils<br />
            <em className="not-italic text-gold-light">Gestion Locative Paris Ouest</em>
          </h1>
          <p className="text-white/70">
            Données de marché, réglementation et stratégies pour propriétaires à Paris Ouest.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}/`}
                className="block p-8 bg-white hover:border-gold transition-colors"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-widest text-gold font-medium">{article.category}</span>
                  <span className="text-xs text-muted">{article.readTime} de lecture</span>
                </div>
                <h2 className="font-body text-lg font-semibold text-dark mb-3 leading-snug">{article.title}</h2>
                <p className="text-sm text-mid line-clamp-2 max-w-none">{article.description}</p>
                <p className="text-xs text-muted mt-4">
                  {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
