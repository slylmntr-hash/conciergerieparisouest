import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Conciergerie Paris Ouest',
  description: 'Politique de confidentialité et protection des données personnelles — Conciergerie Paris Ouest.',
  alternates: { canonical: 'https://conciergerieparisouest.fr/politique-confidentialite/' },
  robots: { index: false, follow: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="section bg-charcoal">
        <div className="container">
          <Breadcrumb items={[{ name: 'Accueil', url: '/' }, { name: 'Confidentialité', url: '/politique-confidentialite/' }]} />
          <h1 className="text-white mt-6">Politique de Confidentialité</h1>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl article-body">
          <p>Dernière mise à jour : 15 janvier 2026</p>

          <h2>Responsable du traitement</h2>
          <p>
            Conciergerie Paris Ouest<br />
            Email : <a href="mailto:conciergerieparisouest@gmail.com">conciergerieparisouest@gmail.com</a>
          </p>

          <h2>Données collectées</h2>
          <p>Lors de l'utilisation de nos formulaires de contact et d'estimation, nous collectons :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Commune du bien (facultatif)</li>
          </ul>

          <h2>Finalités du traitement</h2>
          <p>Ces données sont utilisées exclusivement pour :</p>
          <ul>
            <li>Répondre à vos demandes d'estimation et de contact</li>
            <li>Vous envoyer des informations relatives à nos services, si vous y avez consenti</li>
          </ul>
          <p>Vos données ne sont ni vendues, ni louées, ni transmises à des tiers.</p>

          <h2>Base légale</h2>
          <p>Le traitement est fondé sur l'intérêt légitime de Conciergerie Paris Ouest à répondre aux demandes entrantes (article 6.1.f du RGPD), et sur votre consentement pour les communications commerciales (article 6.1.a).</p>

          <h2>Conservation des données</h2>
          <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact, conformément aux obligations légales applicables.</p>

          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> : vous opposer à certains traitements</li>
          </ul>
          <p>Pour exercer ces droits, contactez-nous à <a href="mailto:conciergerieparisouest@gmail.com">conciergerieparisouest@gmail.com</a>. Vous pouvez également adresser une réclamation à la CNIL (<a href="https://www.cnil.fr" rel="noopener noreferrer" target="_blank">cnil.fr</a>).</p>

          <h2>Sécurité</h2>
          <p>Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.</p>

          <h2>Cookies</h2>
          <p>Ce site n'utilise pas de cookies de traçage publicitaire. Les seuls cookies utilisés sont strictement nécessaires au bon fonctionnement du site (session, sécurité).</p>
        </div>
      </section>
    </div>
  )
}
