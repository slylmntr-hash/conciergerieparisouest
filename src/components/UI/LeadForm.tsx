'use client'
import { useState } from 'react'

type LeadFormProps = {
  commune?: string
  variant?: 'hero' | 'inline' | 'sidebar'
  source?: string
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function LeadForm({ commune, variant = 'inline', source = 'website' }: LeadFormProps) {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      nom: (form.elements.namedItem('nom') as HTMLInputElement).value,
      prenom: (form.elements.namedItem('prenom') as HTMLInputElement).value,
      telephone: (form.elements.namedItem('telephone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      commune: commune ?? '',
      source,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setState('success')
    } catch {
      setState('error')
      setErrorMsg('Une erreur s\'est produite. Veuillez réessayer ou nous appeler directement.')
    }
  }

  if (state === 'success') {
    return (
      <div className="lead-form text-center py-8">
        <div className="gold-line flex justify-center" />
        <h3 className="font-display text-2xl font-light text-charcoal mb-3">
          Merci pour votre demande
        </h3>
        <p className="text-mid text-sm">
          Nous vous recontactons sous 48h pour votre estimation gratuite.
        </p>
      </div>
    )
  }

  const isHero = variant === 'hero'

  return (
    <form
      onSubmit={handleSubmit}
      className="lead-form"
      noValidate
    >
      <div className="mb-4">
        <p
          className="font-body text-xs tracking-widest uppercase text-gold mb-2"
          style={{ letterSpacing: '0.1em' }}
        >
          Estimation gratuite
        </p>
        <h2
          className={`font-display font-light text-charcoal ${isHero ? 'text-2xl' : 'text-xl'} leading-snug`}
        >
          {commune
            ? `Estimez vos revenus à ${commune}`
            : 'Estimez vos revenus locatifs'}
        </h2>
      </div>

      <div className="form-grid mb-4">
        <div>
          <label htmlFor="nom" className="sr-only">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            placeholder="Nom *"
            required
            autoComplete="family-name"
          />
        </div>
        <div>
          <label htmlFor="prenom" className="sr-only">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            placeholder="Prénom *"
            required
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="sr-only">Téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="Téléphone *"
            required
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Adresse e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Adresse e-mail *"
            required
            autoComplete="email"
          />
        </div>
      </div>

      {errorMsg && (
        <p className="text-sm text-red-600 mb-3" role="alert">{errorMsg}</p>
      )}

      <button
        type="submit"
        className="btn-gold w-full"
        disabled={state === 'loading'}
        aria-busy={state === 'loading'}
      >
        {state === 'loading' ? 'Envoi en cours…' : 'Obtenir mon estimation gratuite'}
      </button>

      <p className="text-xs text-muted mt-3 text-center">
        Réponse sous 48h · Aucun engagement
      </p>
    </form>
  )
}
