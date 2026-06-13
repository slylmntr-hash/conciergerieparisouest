'use client'
import { useState } from 'react'
import Link from 'next/link'
import { LeadForm } from '@/components/UI/LeadForm'
import { allCommunes, communeToDisplay } from '@/content/keywords'
import { revenueEstimates } from '@/content/revenue-estimates'

type EstimationResult = {
  commune: string
  displayName: string
  bedrooms: string
  minMonthly: number
  maxMonthly: number
  avgNightlyRate: number
  avgOccupancy: number
  peaks?: string[]
  annualMin: number
  annualMax: number
}

const bedroomMultipliers: Record<string, number> = {
  studio: 0.7,
  t1: 1.0,
  t2: 1.35,
  t3: 1.65,
  t4: 2.0,
  t5plus: 2.5,
}

export default function EstimationRevenusPage() {
  const [commune, setCommune] = useState('')
  const [bedrooms, setBedrooms] = useState('t2')
  const [result, setResult] = useState<EstimationResult | null>(null)
  const [submitted] = useState(false)

  function handleEstimate() {
    if (!commune) return
    const base = revenueEstimates[commune]
    if (!base) return

    const mult = bedroomMultipliers[bedrooms] ?? 1.0
    const minMonthly = Math.round(base.minMonthly * mult / 50) * 50
    const maxMonthly = Math.round(base.maxMonthly * mult / 50) * 50

    setResult({
      commune,
      displayName: communeToDisplay(commune),
      bedrooms,
      minMonthly,
      maxMonthly,
      avgNightlyRate: Math.round(base.avgNightlyRate * mult),
      avgOccupancy: base.avgOccupancy,
      peaks: base.peaks,
      annualMin: minMonthly * 10,
      annualMax: maxMonthly * 12,
    })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header section */}
      <section className="section bg-charcoal">
        <div className="container text-center">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Outil gratuit</p>
          <h1 className="text-white mb-4" style={{ fontWeight: 300 }}>
            Simulez vos revenus<br />en location courte durée
          </h1>
          <p className="text-white/70 mx-auto" style={{ maxWidth: '44ch' }}>
            Renseignez votre commune et la taille du bien pour obtenir une estimation de vos revenus locatifs à Paris Ouest.
          </p>
        </div>
      </section>

      {/* Estimator form */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="estimator-card">
                <h2 className="font-body text-xl font-semibold text-dark mb-6">Votre bien</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="commune-select" className="block text-sm font-medium text-dark mb-2">
                      Commune *
                    </label>
                    <select
                      id="commune-select"
                      value={commune}
                      onChange={(e) => {
                        setCommune(e.target.value)
                        setResult(null)
                      }}
                    >
                      <option value="">Choisissez une commune</option>
                      <optgroup label="Hauts-de-Seine (92)">
                        {allCommunes.slice(0, 36).map((slug) => (
                          <option key={slug} value={slug}>
                            {communeToDisplay(slug)}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Yvelines (78)">
                        {allCommunes.slice(36).map((slug) => (
                          <option key={slug} value={slug}>
                            {communeToDisplay(slug)}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bedrooms-select" className="block text-sm font-medium text-dark mb-2">
                      Type de bien *
                    </label>
                    <select
                      id="bedrooms-select"
                      value={bedrooms}
                      onChange={(e) => {
                        setBedrooms(e.target.value)
                        setResult(null)
                      }}
                    >
                      <option value="studio">Studio</option>
                      <option value="t1">T1 (1 pièce)</option>
                      <option value="t2">T2 (2 pièces)</option>
                      <option value="t3">T3 (3 pièces)</option>
                      <option value="t4">T4 (4 pièces)</option>
                      <option value="t5plus">T5 et plus</option>
                    </select>
                  </div>

                  <button
                    onClick={handleEstimate}
                    disabled={!commune}
                    className="btn-gold w-full"
                  >
                    Calculer mon estimation
                  </button>
                </div>
              </div>

              {/* Result */}
              {result && (
                <div className="estimator-card mt-6">
                  <p className="text-xs uppercase tracking-widest text-muted mb-4">
                    Estimation · {result.displayName}
                  </p>
                  <div className="revenue-range mb-2">
                    {result.minMonthly.toLocaleString('fr-FR')} € — {result.maxMonthly.toLocaleString('fr-FR')} €
                  </div>
                  <p className="text-sm text-mid mb-6">Revenus mensuels estimés</p>

                  <div className="grid grid-cols-3 gap-4 py-4" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                    <div className="text-center">
                      <div className="font-display text-xl font-light text-charcoal">{result.avgNightlyRate} €</div>
                      <div className="text-xs text-muted mt-1">Nuit moy.</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-xl font-light text-charcoal">{result.avgOccupancy}%</div>
                      <div className="text-xs text-muted mt-1">Occupation</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-xl font-light text-charcoal">
                        {result.annualMin.toLocaleString('fr-FR')} €
                      </div>
                      <div className="text-xs text-muted mt-1">Min annuel</div>
                    </div>
                  </div>

                  {result.peaks && result.peaks.length > 0 && (
                    <p className="text-xs text-muted mt-4">
                      Pics de demande : {result.peaks.join(' · ')}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* CTA form */}
            <div>
              {!submitted ? (
                <>
                  <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">
                    Estimation personnalisée
                  </p>
                  <h2 className="mb-4">Obtenez une estimation<br />précise et gratuite</h2>
                  <p className="mb-6 text-sm">
                    Notre simulateur donne une fourchette indicative. Pour une estimation personnalisée
                    tenant compte de votre adresse exacte, de l'état du bien et du potentiel d'optimisation,
                    remplissez ce formulaire. Réponse sous 48h.
                  </p>
                  <div className="bg-white" style={{ border: '1px solid var(--color-border)', padding: '1.5rem' }}>
                    <LeadForm
                      commune={result?.displayName}
                      source="estimateur"
                    />
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="font-display text-3xl text-gold mb-4">Merci</div>
                  <p className="text-mid">Nous vous recontactons sous 48h avec votre estimation détaillée.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-cream-2">
        <div className="container text-center">
          <h2 className="mb-10">Pourquoi nos estimations<br />sont fiables ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border-grid">
            {[
              { title: 'Données 2026', body: 'Basées sur les transactions réelles et les taux d\'occupation dans notre portefeuille Paris Ouest.' },
              { title: '60 communes', body: 'Données hyperlocales pour chaque commune : événements, demande corporate, tourisme.' },
              { title: 'Mis à jour', body: 'Nos estimations sont actualisées trimestriellement pour refléter l\'évolution du marché.' },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-cream-2">
                <h3 className="font-body font-semibold text-base text-dark mb-2">{item.title}</h3>
                <p className="text-sm max-w-none">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commune links */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="mb-6">Nos communes les plus demandées</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px border-grid">
            {['neuilly-sur-seine', 'versailles', 'boulogne-billancourt', 'levallois-perret', 'saint-germain-en-laye', 'velizy-villacoublay', 'rueil-malmaison', 'saint-cloud'].map((slug) => (
              <Link key={slug} href={`/gestion-locative/${slug}/`} className="commune-card">
                <span className="text-sm font-medium text-dark block">{communeToDisplay(slug)}</span>
                <span className="text-xs text-muted mt-1 block">Voir l'estimation →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
