import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/UI/LeadForm'
import { JsonLd } from '@/components/SEO/JsonLd'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'
import { buildLocalBusinessSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Nos Services de Gestion Locative Paris Ouest | Conciergerie Paris Ouest',
  description:
    'Gestion locative clé en main à Paris Ouest : annonces, accueil voyageurs, ménage, tarification dynamique, maintenance, reporting. Zéro frais d\'entrée.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/services/' },
}

const services = [
  {
    id: 'annonces',
    title: 'Gestion des annonces',
    subtitle: 'Airbnb, Booking, Vrbo',
    body: 'Création et optimisation professionnelle de vos annonces sur toutes les plateformes. Shooting photo inclus, descriptions en français et en anglais, gestion des avis voyageurs.',
    details: ['Shooting photo professionnel', 'Rédaction FR/EN/ES', 'Synchronisation multi-plateformes', 'Gestion des avis et réponses'],
  },
  {
    id: 'accueil',
    title: 'Accueil & Conciergerie',
    subtitle: '7j/7, 24h/24',
    body: 'Accueil personnalisé de vos voyageurs, remise des clés, état des lieux d\'entrée et de sortie systématiques. Guide d\'accueil personnalisé pour chaque propriété.',
    details: ['Remise des clés 7j/7', 'État des lieux entrée/sortie', 'Guide d\'accueil personnalisé', 'Assistance voyageurs en séjour'],
  },
  {
    id: 'menage',
    title: 'Ménage & Linge de maison',
    subtitle: 'Standards hôteliers',
    body: 'Nettoyage professionnel après chaque séjour. Fourniture et lavage du linge de maison aux standards hôteliers. Réapprovisionnement des consommables.',
    details: ['Nettoyage professionnel', 'Linge de maison fourni et lavé', 'Consommables réapprovisionnés', 'Contrôle qualité systématique'],
  },
  {
    id: 'tarification',
    title: 'Tarification dynamique',
    subtitle: 'Revenue Management',
    body: 'Ajustement automatique des prix en temps réel selon la demande, les événements locaux, la concurrence et la saisonnalité. Résultat : revenus maximisés tout au long de l\'année.',
    details: ['Algorithme de prix en temps réel', 'Veille événements locaux', 'Analyse concurrentielle', 'Maximisation des périodes creuses'],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Urgences',
    subtitle: 'Réseau local de confiance',
    body: 'Astreinte 24h/24 pour les urgences. Réseau d\'artisans locaux de confiance pour les petites réparations. Suivi et coordination de l\'ensemble des interventions.',
    details: ['Astreinte urgences 24h/24', 'Artisans locaux de confiance', 'Coordination des interventions', 'Suivi et reporting'],
  },
  {
    id: 'reporting',
    title: 'Reporting mensuel',
    subtitle: 'Transparence totale',
    body: 'Tableau de bord mensuel complet : revenus générés, taux d\'occupation, avis voyageurs, dépenses. Virements automatiques et relevés fiscaux (LMNP).',
    details: ['Tableau de bord mensuel', 'Virement automatique', 'Relevés fiscaux LMNP', 'Accès propriétaire en ligne'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={buildLocalBusinessSchema()} />

      {/* Hero */}
      <section className="section bg-charcoal">
        <div className="container">
          <Breadcrumb items={[{ name: 'Accueil', url: '/' }, { name: 'Services', url: '/services/' }]} />
          <h1 className="text-white mt-6 mb-4">
            Gestion locative clé en main<br />
            <em className="not-italic text-gold-light">de A à Z à Paris Ouest</em>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Nous prenons en charge l'intégralité de la gestion de votre bien.
            Vous recevez vos revenus chaque mois, sans vous soucier de rien.
          </p>
        </div>
      </section>

      {/* Pricing highlight */}
      <section className="section bg-gold-pale">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-px border-grid">
          {[
            { label: 'Commission', value: '20%', note: 'Tout inclus, aucun frais caché' },
            { label: 'Frais d\'entrée', value: '0 €', note: 'Démarrage sans investissement' },
            { label: 'Engagement', value: 'Aucun', note: 'Résiliable à tout moment' },
          ].map((item) => (
            <div key={item.label} className="text-center p-8 bg-gold-pale">
              <div className="font-display text-3xl font-light text-gold mb-2">{item.value}</div>
              <div className="font-medium text-dark mb-1">{item.label}</div>
              <div className="text-xs text-muted">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services detail */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="mb-10">Ce qui est inclus<br />dans notre gestion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="p-8" style={{ border: '1px solid var(--color-border)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-body font-semibold text-lg text-dark">{service.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-gold mt-1">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm mb-4 max-w-none">{service.body}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-mid">
                      <span className="text-gold mt-0.5">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-cream-2">
        <div className="container">
          <h2 className="text-center mb-10">Comment démarrer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border-grid">
            {[
              { num: '01', title: 'Demande', body: 'Remplissez le formulaire. Nous vous contactons sous 48h.' },
              { num: '02', title: 'Estimation', body: 'Estimation gratuite et personnalisée de vos revenus potentiels.' },
              { num: '03', title: 'Signature', body: 'Mandat de gestion simple. Mise en place en 7 jours.' },
              { num: '04', title: 'Revenus', body: 'Votre bien est en ligne. Les revenus arrivent dès le 1er séjour.' },
            ].map((step) => (
              <div key={step.num} className="p-8 bg-cream-2 text-center">
                <div className="font-display text-4xl font-light text-gold mb-3">{step.num}</div>
                <h3 className="font-body font-semibold text-dark mb-2">{step.title}</h3>
                <p className="text-sm max-w-none">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section bg-cream">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-4">Prêt à commencer ?</h2>
            <p className="mb-4">Estimation gratuite en 48h. Aucun engagement.</p>
            <div className="flex gap-4">
              <Link href="/estimation-revenus/" className="btn-outline">Simuler mes revenus</Link>
            </div>
          </div>
          <LeadForm source="services" />
        </div>
      </section>
    </>
  )
}
