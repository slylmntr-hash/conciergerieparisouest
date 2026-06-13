import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LeadForm } from '@/components/UI/LeadForm'
import { JsonLd } from '@/components/SEO/JsonLd'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'
import { buildLocalBusinessSchema, buildFaqSchema } from '@/lib/structured-data'
import { unsplashUrl } from '@/content/images'
import { communes78, communeToDisplay } from '@/content/keywords'

export const metadata: Metadata = {
  title: 'Gestion Locative 78 Yvelines | Versailles & Environs — Conciergerie Paris Ouest',
  description:
    'Gestion locative dans les Yvelines (78). Versailles, Saint-Germain, Vélizy. Conciergerie professionnelle, estimation gratuite 48h.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/gestion-locative-78/' },
  openGraph: {
    title: 'Gestion Locative Yvelines (78)',
    description: 'Gestion locative professionnelle dans les Yvelines. Versailles, Vélizy, Saint-Germain. Estimation gratuite.',
    url: 'https://conciergerieparisouest.fr/gestion-locative-78/',
  },
}

const faqs = [
  {
    question: 'Y a-t-il une règle des 120 jours dans le 78 ?',
    answer: 'La règle des 120 jours s\'applique uniquement aux communes ayant adopté ce cadre réglementaire. Dans les Yvelines, seule Versailles a mis en place un système d\'enregistrement obligatoire. Nous vous aidons à naviguer la réglementation locale.',
  },
  {
    question: 'Quel est le marché locatif à Versailles ?',
    answer: 'Versailles dispose d\'un marché locatif exceptionnel grâce au château et au tourisme mondial. Les pics tarifaires lors des Grandes Eaux, des festivals et des salons professionnels permettent des revenus bien supérieurs à la moyenne régionale.',
  },
  {
    question: 'Gérez-vous des biens proches des zones aérospatiales comme Vélizy ?',
    answer: 'Absolument. Vélizy-Villacoublay est l\'un de nos marchés les plus dynamiques grâce à la présence de Thales, Dassault et Boeing. Le taux d\'occupation en semaine y est parmi les plus élevés de notre portefeuille.',
  },
]

export default function Page78() {
  return (
    <>
      <JsonLd schema={[buildLocalBusinessSchema({ areaServed: ['Versailles', 'Vélizy-Villacoublay', 'Saint-Germain-en-Laye'] }), buildFaqSchema(faqs)]} />

      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <Image
          src={unsplashUrl('photo-1565073182887-6bcefbe225b1', 1600)}
          alt="Château de Versailles — gestion locative Yvelines 78"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.4 }}
        />
        <div className="container relative z-10 py-20">
          <Breadcrumb items={[
            { name: 'Accueil', url: '/' },
            { name: 'Yvelines (78)', url: '/gestion-locative-78/' },
          ]} />
          <h1 className="text-white mt-6 mb-4">
            Gestion Locative Yvelines (78)<br />
            <em className="not-italic text-gold-light">Versailles, Vélizy, Saint-Germain</em>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mb-8">
            Gestion locative professionnelle dans les 14 communes des Yvelines.
            Tourisme mondial à Versailles, demande corporate à Vélizy, expatriés à Saint-Germain.
          </p>
          <Link href="/estimation-revenus/" className="btn-gold">Estimation gratuite 78</Link>
        </div>
      </section>

      {/* Communes */}
      <section className="section bg-cream">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">14 communes</p>
            <h2>Nos communes dans les Yvelines</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px border-grid mb-8">
            {communes78.map((slug) => (
              <Link
                key={slug}
                href={`/gestion-locative/${slug}/`}
                className="commune-card bg-cream"
              >
                <span className="text-sm font-medium text-dark block">{communeToDisplay(slug)}</span>
                <span className="text-xs text-muted mt-1 block">Gestion locative →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Versailles & tourisme mondial */}
      <section className="section bg-cream-2">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Versailles</p>
              <h2 className="mb-4">Le marché locatif<br />le plus international du 78</h2>
              <p className="mb-4">
                Versailles attire 10 millions de visiteurs par an. Les Grandes Eaux Musicales,
                les festivals de nuit, les congrès au Palais des Congrès — autant d'événements
                qui font exploser la demande locative et permettent une tarification premium.
              </p>
              <p className="mb-6">
                Notre expertise Versailles : gestion multilingue (FR/EN/ES/ZH), profils voyageurs
                haut de gamme, tarification événementielle automatisée.
              </p>
              <Link href="/gestion-locative/versailles/" className="btn-gold">
                Gestion locative Versailles
              </Link>
            </div>
            <div className="estimator-card">
              <p className="text-xs uppercase tracking-widest text-muted mb-4">Estimation — Versailles</p>
              <div className="revenue-range mb-2">2 200 € — 4 500 €</div>
              <p className="text-sm text-mid">Revenus mensuels estimés · Taux d'occupation 72%</p>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <p className="text-xs text-muted">Pics tarifaires : Grandes Eaux (+40%), Noël (+35%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="section bg-gold-pale">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-4">Confiez votre bien<br />dans les Yvelines</h2>
            <ul className="space-y-3 text-mid text-sm">
              {[
                'Versailles et le tourisme mondial',
                'Vélizy : demande corporate Thales, Dassault, Boeing',
                'Saint-Germain-en-Laye : forte communauté expatriée anglophone',
                'Tarification dynamique événementielle',
                'Reporting mensuel détaillé',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm source="pillar-78" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container max-w-3xl">
          <h2 className="mb-8">Questions fréquentes — Gestion locative 78</h2>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <div className="faq-body">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
