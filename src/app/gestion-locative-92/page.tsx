import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LeadForm } from '@/components/UI/LeadForm'
import { JsonLd } from '@/components/SEO/JsonLd'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'
import { buildLocalBusinessSchema, buildFaqSchema } from '@/lib/structured-data'
import { unsplashUrl } from '@/content/images'
import { communes92, communeToDisplay } from '@/content/keywords'

export const metadata: Metadata = {
  title: 'Gestion Locative 92 Hauts-de-Seine | Gestion LCD — Conciergerie Paris Ouest',
  description:
    'Gestion locative dans les Hauts-de-Seine (92). 36 communes couvertes. Gestion complète, revenus maximisés. Estimation gratuite.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/gestion-locative-92/' },
  openGraph: {
    title: 'Gestion Locative Hauts-de-Seine (92)',
    description: 'Gestion locative professionnelle dans le 92. 36 communes. Estimation gratuite.',
    url: 'https://conciergerieparisouest.fr/gestion-locative-92/',
  },
}

const zones = [
  { name: 'La Défense & Puteaux', communes: ['puteaux', 'courbevoie', 'nanterre', 'la-defense'] },
  { name: 'Boulogne & Seine', communes: ['boulogne-billancourt', 'issy-les-moulineaux', 'vanves', 'malakoff'] },
  { name: 'Prestige Ouest', communes: ['neuilly-sur-seine', 'levallois-perret', 'saint-cloud', 'suresnes'] },
  { name: 'Rueil & Garches', communes: ['rueil-malmaison', 'garches', 'vaucresson', 'la-garenne-colombes'] },
  { name: 'Vallée de la Seine', communes: ['meudon', 'sevres', 'chaville', 'ville-d-avray'] },
  { name: 'Sud 92', communes: ['montrouge', 'chatillon', 'clamart', 'antony', 'sceaux', 'bourg-la-reine'] },
]

const faqs = [
  {
    question: 'Quels types de biens gérez-vous dans le 92 ?',
    answer: 'Nous gérons tous types de biens résidentiels : appartements, maisons, studios meublés. Du T1 au T5+, dans toutes les communes des Hauts-de-Seine.',
  },
  {
    question: 'La réglementation est-elle différente dans le 92 vs Paris ?',
    answer: 'Dans le 92, la plupart des communes ne sont pas soumises à la règle des 120 jours (contrairement à Paris). Certaines communes comme Neuilly et Boulogne ont toutefois des règles spécifiques. Nous vous accompagnons dans toutes les démarches.',
  },
  {
    question: 'Quel est le revenu moyen dans le 92 ?',
    answer: 'Les revenus varient de 800€/mois pour un studio en périphérie à 5 500€/mois pour un grand appartement à Neuilly-sur-Seine. La moyenne se situe entre 1 200€ et 2 800€ selon la commune.',
  },
]

export default function Page92() {
  return (
    <>
      <JsonLd schema={[buildLocalBusinessSchema({ areaServed: ['Neuilly-sur-Seine', 'Levallois-Perret', 'Boulogne-Billancourt'] }), buildFaqSchema(faqs)]} />

      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <Image
          src={unsplashUrl('photo-1499856871958-5b9627545d1a', 1600)}
          alt="Hauts-de-Seine vue aérienne — gestion locative 92"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.4 }}
        />
        <div className="container relative z-10 py-20">
          <Breadcrumb items={[
            { name: 'Accueil', url: '/' },
            { name: 'Hauts-de-Seine (92)', url: '/gestion-locative-92/' },
          ]} />
          <h1 className="text-white mt-6 mb-4">
            Gestion Locative Hauts-de-Seine (92)<br />
            <em className="not-italic text-gold-light">Service professionnel, 36 communes</em>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mb-8">
            De Neuilly-sur-Seine à Antony, nous gérons votre bien dans l'ensemble des Hauts-de-Seine.
            Clientèle corporate, revenus optimisés, gestion clé en main.
          </p>
          <Link href="/estimation-revenus/" className="btn-gold">Estimation gratuite 92</Link>
        </div>
      </section>

      {/* Communes par zone */}
      <section className="section bg-cream">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">36 communes</p>
            <h2>Nos zones de couverture<br />dans le 92</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zones.map((zone) => (
              <div key={zone.name} className="border" style={{ borderColor: 'var(--color-border)' }}>
                <div className="px-5 py-3 bg-cream-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <p className="font-body text-xs uppercase tracking-widest font-medium text-gold">{zone.name}</p>
                </div>
                <div className="p-4 grid grid-cols-2 gap-2">
                  {zone.communes.map((slug) => (
                    <Link
                      key={slug}
                      href={`/gestion-locative/${slug}/`}
                      className="commune-card text-sm"
                    >
                      {communeToDisplay(slug)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All 92 communes list */}
          <div className="mt-12">
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest text-muted mb-4">
              Toutes les communes du 92
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {communes92.map((slug) => (
                <Link
                  key={slug}
                  href={`/gestion-locative/${slug}/`}
                  className="commune-card text-sm"
                >
                  {communeToDisplay(slug)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="section bg-gold-pale">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-4">Pourquoi confier votre bien<br />à Conciergerie Paris Ouest ?</h2>
            <ul className="space-y-3 text-mid text-sm">
              {[
                'Connaissance hyperlocale de chaque commune du 92',
                'Clientèle corporate, expats et cadres supérieurs',
                'Tarification dynamique sur événements (Roland Garros, LVMH, Salon de l\'Auto)',
                'Réseau d\'artisans locaux de confiance',
                'Reporting mensuel détaillé',
                'Aucuns frais d\'entrée, commission transparente',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm source="pillar-92" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container max-w-3xl">
          <h2 className="mb-8">Questions fréquentes — Gestion locative 92</h2>
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
