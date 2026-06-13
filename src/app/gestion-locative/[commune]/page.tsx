import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { LeadForm } from '@/components/UI/LeadForm'
import { JsonLd } from '@/components/SEO/JsonLd'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'
import {
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '@/lib/structured-data'
import { unsplashUrl, communeImageId } from '@/content/images'
import {
  keywordsMatrix,
  allCommunes,
  communes92,
  communeToDisplay,
} from '@/content/keywords'
import { revenueEstimates } from '@/content/revenue-estimates'

type Props = { params: Promise<{ commune: string }> }

export async function generateStaticParams() {
  return allCommunes.map((slug) => ({ commune: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { commune } = await params
  const url = `/gestion-locative/${commune}/`
  const data = keywordsMatrix[url]
  if (!data) return { title: 'Commune non trouvée' }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://conciergerieparisouest.fr${url}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://conciergerieparisouest.fr${url}`,
      type: 'website',
    },
  }
}

function buildCommuneFaqs(commune: string, displayName: string, isSilo92: boolean) {
  const dept = isSilo92 ? '92' : '78'
  return [
    {
      question: `Combien peut rapporter mon bien en location courte durée à ${displayName} ?`,
      answer: `À ${displayName}, les revenus mensuels estimés varient selon la taille et l'emplacement du bien. Nos données de marché indiquent des revenus entre ${revenueEstimates[commune]?.minMonthly ?? 800}€ et ${revenueEstimates[commune]?.maxMonthly ?? 2500}€ par mois. Demandez une estimation gratuite et personnalisée.`,
    },
    {
      question: `Y a-t-il une réglementation spécifique pour la location courte durée à ${displayName} ?`,
      answer: `La plupart des communes du ${dept} requièrent un numéro d'enregistrement en mairie pour la location meublée touristique. Nous vous accompagnons dans toutes les démarches administratives et veillons à la conformité de votre activité.`,
    },
    {
      question: `Quel type de voyageurs accueille-t-on à ${displayName} ?`,
      answer: `${displayName} attire principalement des voyageurs d'affaires, des cadres en mission et des familles touristiques de passage à Paris Ouest. Notre gestion ciblée optimise les profils de voyageurs pour maximiser vos revenus.`,
    },
    {
      question: `Conciergerie Paris Ouest gère-t-il tous les types de biens à ${displayName} ?`,
      answer: `Nous gérons tous les types de biens résidentiels meublés à ${displayName} : studios, appartements T1 à T5+, maisons. La seule condition est que le bien soit meublé conformément à la réglementation LMNP.`,
    },
  ]
}

export default async function CommunePage({ params }: Props) {
  const { commune } = await params
  const url = `/gestion-locative/${commune}/`
  const data = keywordsMatrix[url]

  if (!data) notFound()

  const displayName = communeToDisplay(commune)
  const isSilo92 = communes92.includes(commune)
  const pillarUrl = isSilo92 ? '/gestion-locative-92/' : '/gestion-locative-78/'
  const pillarLabel = isSilo92 ? 'Hauts-de-Seine (92)' : 'Yvelines (78)'
  const revenue = revenueEstimates[commune]
  const faqs = buildCommuneFaqs(commune, displayName, isSilo92)
  const imgId = communeImageId(commune)

  // Neighbor communes for internal linking
  const siloCommunes = isSilo92 ? communes92 : ['versailles', 'le-chesnay-rocquencourt', 'viroflay', 'velizy-villacoublay', 'la-celle-saint-cloud', 'bougival', 'jouy-en-josas', 'saint-germain-en-laye', 'poissy', 'maisons-laffitte', 'conflans-sainte-honorine', 'louveciennes', 'marly-le-roi', 'le-pecq']
  const neighbors = siloCommunes.filter((s) => s !== commune).slice(0, 4)

  return (
    <>
      <JsonLd
        schema={[
          buildLocalBusinessSchema({ areaServed: [displayName] }),
          buildBreadcrumbSchema([
            { name: 'Accueil', url: '/' },
            { name: pillarLabel, url: pillarUrl },
            { name: `Gestion locative ${displayName}`, url },
          ]),
          buildFaqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section
        className="relative bg-charcoal overflow-hidden"
        style={{ minHeight: '55vh', display: 'flex', alignItems: 'center' }}
      >
        <Image
          src={unsplashUrl(imgId, 1600)}
          alt={`${displayName} — gestion locative`}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.38 }}
        />
        <div className="container relative z-10 py-16">
          <Breadcrumb
            items={[
              { name: 'Accueil', url: '/' },
              { name: pillarLabel, url: pillarUrl },
              { name: `Gestion locative ${displayName}`, url },
            ]}
          />
          <h1 className="text-white mt-6 mb-4">
            {data.h1}
          </h1>
          {data.angle && (
            <p className="text-white/75 text-lg max-w-2xl mb-6 leading-relaxed">
              {data.angle}
            </p>
          )}
          <Link href="/estimation-revenus/" className="btn-gold">
            {data.cta}
          </Link>
        </div>
      </section>

      {/* Revenue card + intro */}
      {revenue && (
        <section className="section bg-gold-pale">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">
                Revenus estimés
              </p>
              <h2 className="mb-4">
                Combien rapporte votre bien<br />
                à {displayName} ?
              </h2>
              <p className="mb-6">
                Basé sur nos données de marché 2026 pour {displayName}. Ces estimations
                tiennent compte du type de bien, de l'emplacement et de la saisonnalité.
              </p>
              <Link href="/estimation-revenus/" className="btn-gold">
                Simulation précise gratuite
              </Link>
            </div>
            <div className="estimator-card">
              <p className="text-xs uppercase tracking-widest text-muted mb-4">
                Estimation mensuelle · {displayName}
              </p>
              <div className="revenue-range mb-2">
                {revenue.minMonthly.toLocaleString('fr-FR')} € — {revenue.maxMonthly.toLocaleString('fr-FR')} €
              </div>
              <p className="text-sm text-mid mb-6">Revenus mensuels estimés</p>
              <div className="grid grid-cols-2 gap-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <div className="font-display text-2xl font-light text-charcoal">{revenue.avgNightlyRate} €</div>
                  <div className="text-xs text-muted uppercase tracking-wide mt-1">Nuit moyenne</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-light text-charcoal">{revenue.avgOccupancy}%</div>
                  <div className="text-xs text-muted uppercase tracking-wide mt-1">Occupation moy.</div>
                </div>
              </div>
              {revenue.peaks && revenue.peaks.length > 0 && (
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <p className="text-xs text-muted">
                    Pics de demande : {revenue.peaks.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Lead Form */}
      <section className="section bg-cream">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">
              Conciergerie Paris Ouest à {displayName}
            </p>
            <h2 className="mb-4">
              Confiez votre bien<br />à des experts locaux
            </h2>
            <p className="mb-6">
              Notre équipe connaît {displayName} et ses spécificités : les flux de voyageurs,
              les événements qui font monter les prix, et les attentes des propriétaires locaux.
            </p>
            <ul className="space-y-3 text-mid text-sm mb-6">
              {[
                `Gestion complète à ${displayName}`,
                'Zéro frais d\'entrée, commission transparente',
                'Estimation de revenus gratuite sous 48h',
                'Résiliable à tout moment',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm commune={displayName} source={`commune-${commune}`} />
        </div>
      </section>

      {/* Services */}
      <section className="section bg-cream-2">
        <div className="container">
          <h2 className="mb-8">Nos services de gestion locative<br />à {displayName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px border-grid">
            {[
              { title: 'Gestion des annonces', body: 'Airbnb, Booking.com, Vrbo. Optimisation des titres, photos professionnelles, gestion des avis.' },
              { title: 'Accueil voyageurs', body: '7j/7. Remise des clés, état des lieux d\'entrée et sortie, guide de bienvenue personnalisé.' },
              { title: 'Ménage & Linge', body: 'Nettoyage professionnel après chaque séjour. Linge de maison hôtelier fourni et lavé.' },
              { title: 'Tarification dynamique', body: 'Ajustement automatique des prix. Événements locaux, saisonnalité, demande en temps réel.' },
              { title: 'Maintenance', body: 'Astreinte urgences 24h/24. Réseau d\'artisans locaux à proximité de ' + displayName + '.' },
              { title: 'Reporting mensuel', body: 'Tableau de bord : revenus, occupation, avis. Virement automatique chaque mois.' },
            ].map((s) => (
              <div key={s.title} className="p-6 bg-cream-2">
                <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-gold)', marginBottom: '1rem' }} />
                <h3 className="font-body text-sm font-semibold text-dark mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed max-w-none">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container max-w-3xl">
          <h2 className="mb-8">Questions fréquentes —<br />{displayName}</h2>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <div className="faq-body">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Internal links — neighbor communes */}
      <section className="section bg-cream-2">
        <div className="container">
          <p className="text-xs tracking-widest uppercase text-gold mb-4 font-medium">
            Communes voisines
          </p>
          <h2 className="mb-6">Gestion locative dans le {isSilo92 ? '92' : '78'}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border-grid mb-6">
            {neighbors.map((slug) => (
              <Link
                key={slug}
                href={`/gestion-locative/${slug}/`}
                className="commune-card bg-cream-2"
              >
                <span className="text-sm font-medium text-dark block">{communeToDisplay(slug)}</span>
                <span className="text-xs text-muted mt-1 block">Gestion locative →</span>
              </Link>
            ))}
          </div>
          <Link href={pillarUrl} className="btn-outline">
            Toutes les communes {pillarLabel}
          </Link>
        </div>
      </section>
    </>
  )
}
