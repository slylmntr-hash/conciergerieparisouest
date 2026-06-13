import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from '@/components/UI/LeadForm'
import { JsonLd } from '@/components/SEO/JsonLd'
import {
  buildLocalBusinessSchema,
  buildFaqSchema,
} from '@/lib/structured-data'
import { unsplashUrl } from '@/content/images'

export const metadata: Metadata = {
  title: 'Gestion Locative Paris Ouest 92 & 78 — Conciergerie Paris Ouest',
  description:
    'Confiez votre bien à la gestion locative #1 de Paris Ouest. 60 communes dans les Hauts-de-Seine (92) et Yvelines (78). Estimation gratuite en 48h.',
  alternates: {
    canonical: 'https://conciergerieparisouest.fr/',
  },
  openGraph: {
    title: 'Gestion Locative Paris Ouest 92 & 78',
    description: 'Conciergerie clé en main pour propriétaires. 60 communes. Estimation gratuite 48h.',
    url: 'https://conciergerieparisouest.fr/',
    type: 'website',
  },
}

const communes92Featured = [
  { slug: 'neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
  { slug: 'levallois-perret', label: 'Levallois-Perret' },
  { slug: 'boulogne-billancourt', label: 'Boulogne-Billancourt' },
  { slug: 'rueil-malmaison', label: 'Rueil-Malmaison' },
  { slug: 'saint-cloud', label: 'Saint-Cloud' },
  { slug: 'issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
  { slug: 'nanterre', label: 'Nanterre' },
  { slug: 'courbevoie', label: 'Courbevoie' },
  { slug: 'suresnes', label: 'Suresnes' },
  { slug: 'montrouge', label: 'Montrouge' },
  { slug: 'meudon', label: 'Meudon' },
  { slug: 'sevres', label: 'Sèvres' },
]

const communes78Featured = [
  { slug: 'versailles', label: 'Versailles' },
  { slug: 'velizy-villacoublay', label: 'Vélizy-Villacoublay' },
  { slug: 'saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
  { slug: 'le-chesnay-rocquencourt', label: 'Le Chesnay-Rocquencourt' },
  { slug: 'viroflay', label: 'Viroflay' },
  { slug: 'bougival', label: 'Bougival' },
]

const services = [
  {
    title: 'Accueil & Conciergerie',
    body: "Accueil personnalisé de vos voyageurs 7j/7, remise des clés, état des lieux d'entrée et de sortie.",
  },
  {
    title: 'Ménage & Linge',
    body: "Nettoyage professionnel après chaque séjour, fourniture et lavage du linge de maison hôtelier.",
  },
  {
    title: 'Gestion des annonces',
    body: 'Publication optimisée sur Airbnb, Booking, Vrbo. Tarification dynamique, gestion des avis.',
  },
  {
    title: 'Tarification dynamique',
    body: 'Ajustement automatique des prix en fonction des événements locaux, de la demande et de la saisonnalité.',
  },
  {
    title: 'Maintenance & Urgences',
    body: "Gestion des petites réparations, astreinte 24h/24 pour les urgences. Réseau d'artisans de confiance.",
  },
  {
    title: 'Reporting mensuel',
    body: 'Tableau de bord complet : revenus, taux d\'occupation, avis voyageurs. Virements automatiques.',
  },
]

const stats = [
  { number: '60', label: 'Communes couvertes' },
  { number: '95%', label: "Taux d'occupation moyen" },
  { number: '48h', label: 'Délai d\'estimation' },
  { number: '0€', label: 'Frais d\'entrée' },
]

const faqs = [
  {
    question: 'Quelle est la commission de Conciergerie Paris Ouest ?',
    answer:
      'Notre commission est de 20% des revenus générés, tout inclus : gestion des annonces, accueil voyageurs, ménage professionnel, linge de maison et reporting mensuel. Aucuns frais cachés.',
  },
  {
    question: 'Combien de temps faut-il pour démarrer la gestion de mon bien ?',
    answer:
      "En général, votre bien est prêt à accueillir ses premiers voyageurs dans les 7 à 10 jours suivant la signature du mandat de gestion. Nous gérons toute la mise en place.",
  },
  {
    question: 'Quelles plateformes gérez-vous ?',
    answer:
      'Nous gérons vos annonces sur Airbnb, Booking.com, Vrbo et d\'autres plateformes spécialisées selon votre secteur. Toutes les réservations sont centralisées.',
  },
  {
    question: 'Est-ce que je garde le contrôle sur les dates de blocage ?',
    answer:
      'Absolument. Vous pouvez bloquer des dates à tout moment pour un usage personnel. Notre système synchronise automatiquement tous les calendriers.',
  },
  {
    question: 'Qu\'advient-il en cas de dégradation par un voyageur ?',
    answer:
      'Nous effectuons un état des lieux systématique à chaque départ. En cas de dégradation, nous gérons les réclamations auprès des plateformes et des assurances pour vous.',
  },
]

const areaServed = [
  'Neuilly-sur-Seine', 'Levallois-Perret', 'Boulogne-Billancourt', 'Versailles',
  'Saint-Cloud', 'Rueil-Malmaison', 'Issy-les-Moulineaux', 'Meudon',
  'Sèvres', 'Vélizy-Villacoublay', 'Saint-Germain-en-Laye',
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildLocalBusinessSchema({ areaServed }),
          buildFaqSchema(faqs),
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero" aria-label="Présentation Conciergerie Paris Ouest">
        <Image
          src={unsplashUrl('photo-1502602898657-3e91760cbb34', 1920)}
          alt="Paris Ouest vue aérienne — gestion locative professionnelle"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-content w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100svh-5rem)]">
            {/* Left: headline */}
            <div className="py-12 lg:py-0">
              <p
                className="text-xs tracking-widest uppercase text-gold-light mb-4 font-medium"
                style={{ letterSpacing: '0.14em' }}
              >
                Gestion Locative · Paris Ouest
              </p>
              <h1 className="text-white mb-6" style={{ fontWeight: 300 }}>
                Votre bien géré,<br />
                <em className="not-italic text-gold-light">vos revenus maximisés</em>
              </h1>
              <p className="text-white/80 text-lg mb-6 leading-relaxed max-w-none">
                Conciergerie clé en main pour propriétaires à Paris Ouest.
                60 communes dans les Hauts-de-Seine (92) et les Yvelines (78).
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-light text-gold-light">{s.number}</div>
                    <div className="text-xs text-white/60 tracking-wide uppercase mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/estimation-revenus/" className="btn-gold">
                  Estimer mes revenus
                </Link>
                <Link href="/services/" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                  Nos services
                </Link>
              </div>
            </div>

            {/* Right: lead form */}
            <div className="pb-12 lg:py-0">
              <LeadForm variant="hero" source="homepage-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────── */}
      <section className="bg-cream-2 py-8" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-grid">
            {[
              { icon: '✓', label: 'Zéro frais d\'entrée' },
              { icon: '✓', label: 'Estimation sous 48h' },
              { icon: '✓', label: 'Contrat résiliable' },
              { icon: '✓', label: 'Reporting mensuel' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3 p-4 bg-cream-2">
                <span className="text-gold font-medium">{t.icon}</span>
                <span className="text-sm font-medium text-dark">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="gold-corners" style={{ position: 'relative', paddingTop: '66%' }}>
              <Image
                src={unsplashUrl('photo-1499856871958-5b9627545d1a', 1000)}
                alt="Appartement haussmannien Paris Ouest — gestion locative"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">
                Notre mission
              </p>
              <h2 className="mb-6">
                La gestion locative<br />réinventée à Paris Ouest
              </h2>
              <p className="mb-4">
                Conciergerie Paris Ouest gère votre bien de A à Z dans 60 communes des Hauts-de-Seine et des Yvelines.
                De la mise en ligne de l'annonce à l'accueil des voyageurs, en passant par l'entretien et le reporting mensuel.
              </p>
              <p className="mb-8">
                Notre connaissance hyperlocale de Paris Ouest — ses événements, ses flux de voyageurs, ses spécificités réglementaires —
                vous garantit un taux d'occupation et des revenus bien au-dessus de la moyenne du marché.
              </p>
              <Link href="/services/" className="btn-gold">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="section bg-cream-2">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Services</p>
            <h2>Une gestion locative<br />complète et transparente</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-grid">
            {services.map((s) => (
              <div key={s.title} className="p-8 bg-cream-2">
                <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-gold)', marginBottom: '1.25rem' }} />
                <h3 className="font-body text-base font-semibold text-dark mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed max-w-none">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services/" className="btn-outline">
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      {/* ── ZONES 92 ──────────────────────────────────────────── */}
      <section className="section bg-cream" id="communes-92">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Hauts-de-Seine</p>
            <h2>Gestion locative dans<br />les 36 communes du 92</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px border-grid mb-8">
            {communes92Featured.map((c) => (
              <Link
                key={c.slug}
                href={`/gestion-locative/${c.slug}/`}
                className="commune-card bg-cream"
              >
                <span className="text-sm font-medium text-dark block">{c.label}</span>
                <span className="text-xs text-muted mt-1 block">Gestion locative →</span>
              </Link>
            ))}
          </div>
          <Link href="/gestion-locative-92/" className="btn-outline">
            Voir les 36 communes du 92
          </Link>
        </div>
      </section>

      {/* ── ZONES 78 ──────────────────────────────────────────── */}
      <section className="section bg-cream-2" id="communes-78">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Yvelines</p>
            <h2>Gestion locative dans<br />les 14 communes du 78</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px border-grid mb-8">
            {communes78Featured.map((c) => (
              <Link
                key={c.slug}
                href={`/gestion-locative/${c.slug}/`}
                className="commune-card bg-cream-2"
              >
                <span className="text-sm font-medium text-dark block">{c.label}</span>
                <span className="text-xs text-muted mt-1 block">Gestion locative →</span>
              </Link>
            ))}
          </div>
          <Link href="/gestion-locative-78/" className="btn-outline">
            Voir les 14 communes du 78
          </Link>
        </div>
      </section>

      {/* ── STATS SECTION ─────────────────────────────────────── */}
      <section className="section bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-grid" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.08)' }}>
            {[
              { number: '2 800 €', label: 'Revenus moyens/mois à Neuilly' },
              { number: '85%', label: 'Taux occupation Corporate' },
              { number: '3 500 €', label: 'Revenus moyens/mois à Versailles' },
              { number: '60', label: 'Communes Paris Ouest' },
            ].map((s) => (
              <div key={s.label} className="p-8 text-center" style={{ backgroundColor: '#1a1a1a' }}>
                <div className="stat-number mb-2">{s.number}</div>
                <div className="stat-label text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ESTIMATION ────────────────────────────────────── */}
      <section className="section bg-gold-pale">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Simulation gratuite</p>
              <h2 className="mb-4">Combien peut rapporter<br />votre bien à Paris Ouest ?</h2>
              <p className="mb-6">
                Notre outil d'estimation prend en compte les spécificités de votre commune,
                le type de bien, les événements locaux et les données de marché 2026.
                Résultat en 48h.
              </p>
              <Link href="/estimation-revenus/" className="btn-gold">
                Simuler mes revenus
              </Link>
            </div>
            <div className="estimator-card">
              <p className="text-xs uppercase tracking-widest text-muted mb-4">Exemple — Neuilly-sur-Seine</p>
              <div className="revenue-range mb-2">2 800 € — 5 500 €</div>
              <p className="text-sm text-mid">Revenus mensuels estimés · Taux d'occupation 78%</p>
              <div className="mt-6 pt-6 flex gap-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <div className="font-display text-2xl font-light text-charcoal">135 €</div>
                  <div className="text-xs text-muted uppercase tracking-wide">Nuit moyenne</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-light text-charcoal">78%</div>
                  <div className="text-xs text-muted uppercase tracking-wide">Occupation moy.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">En 4 étapes</p>
            <h2>Comment ça fonctionne</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border-grid">
            {[
              { num: '01', title: 'Estimation', body: 'Nous analysons votre bien et estimons vos revenus potentiels. Gratuit et sans engagement.' },
              { num: '02', title: 'Mise en place', body: 'Shooting photo pro, rédaction de l\'annonce, mise en ligne sur toutes les plateformes.' },
              { num: '03', title: 'Gestion', body: 'Gestion complète des réservations, accueil des voyageurs, ménage, linge, maintenance.' },
              { num: '04', title: 'Reporting', body: 'Tableau de bord mensuel, virements automatiques, suivi de performance en temps réel.' },
            ].map((step) => (
              <div key={step.num} className="p-8 bg-cream">
                <div className="font-display text-4xl font-light text-gold mb-4">{step.num}</div>
                <h3 className="font-body text-base font-semibold text-dark mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed max-w-none">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section bg-cream-2">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">FAQ</p>
              <h2 className="mb-2">Questions fréquentes</h2>
              <p className="mb-6">Tout ce que vous devez savoir avant de nous confier votre bien.</p>
              <Link href="/estimation-revenus/" className="btn-gold">
                Obtenir mon estimation
              </Link>
            </div>
            <div>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <div className="faq-body">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="section bg-charcoal">
        <div className="container text-center">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Commencer</p>
          <h2 className="text-white mb-4" style={{ fontWeight: 300 }}>
            Prêt à maximiser<br />vos revenus locatifs ?
          </h2>
          <p className="text-white/70 mb-8 mx-auto" style={{ maxWidth: '42ch' }}>
            Estimation gratuite en 48h. Aucun frais d'entrée. Résiliable à tout moment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/estimation-revenus/" className="btn-gold">
              Estimer mes revenus
            </Link>
            <a href="mailto:conciergerieparisouest@gmail.com" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
