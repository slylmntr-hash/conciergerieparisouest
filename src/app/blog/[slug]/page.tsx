import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LeadForm } from '@/components/UI/LeadForm'
import { JsonLd } from '@/components/SEO/JsonLd'
import { Breadcrumb } from '@/components/SEO/Breadcrumb'
import { buildArticleSchema } from '@/lib/structured-data'

type Props = { params: Promise<{ slug: string }> }

type Article = {
  slug: string
  title: string
  description: string
  date: string
  modified: string
  category: string
  readTime: string
  content: () => React.ReactNode
}

const articles: Record<string, Article> = {
  'rentabilite-gestion-locative-92': {
    slug: 'rentabilite-gestion-locative-92',
    title: 'Combien rapporte un bien en gestion locative dans le 92 en 2026 ? Guide complet par commune',
    description: 'Tableau de rentabilité complet pour les 36 communes des Hauts-de-Seine. Données marché 2026.',
    date: '2026-01-10',
    modified: '2026-01-15',
    category: 'Rentabilité',
    readTime: '12 min',
    content: () => (
      <div className="article-body">
        <p>La gestion locative dans les Hauts-de-Seine (92) offre des opportunités de revenus parmi les plus attractives d'Île-de-France. Entre la demande corporate de La Défense, les touristes haut de gamme à Neuilly-sur-Seine, et les cadres en mission à Levallois-Perret, le marché de la location courte durée dans le 92 présente une rentabilité souvent supérieure à Paris intramuros.</p>

        <h2>Revenus par commune — Données 2026</h2>
        <p>Voici un tableau de synthèse des revenus estimés par commune dans les Hauts-de-Seine, basé sur nos données de portefeuille 2026 :</p>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-cream-2)', borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Commune</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600 }}>Min/mois</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600 }}>Max/mois</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600 }}>Nuit moy.</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Neuilly-sur-Seine', '2 800 €', '5 500 €', '135 €'],
                ['Levallois-Perret', '1 800 €', '3 800 €', '95 €'],
                ['Boulogne-Billancourt', '1 500 €', '3 200 €', '85 €'],
                ['Rueil-Malmaison', '1 200 €', '2 800 €', '72 €'],
                ['Saint-Cloud', '1 300 €', '2 600 €', '78 €'],
                ['Issy-les-Moulineaux', '1 200 €', '2 500 €', '70 €'],
                ['Nanterre', '900 €', '1 900 €', '55 €'],
                ['Courbevoie', '1 100 €', '2 300 €', '65 €'],
                ['Suresnes', '1 000 €', '2 000 €', '62 €'],
                ['Meudon', '950 €', '2 000 €', '58 €'],
              ].map(([c, min, max, nuit]) => (
                <tr key={c} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--color-dark)' }}>{c}</td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--color-mid)' }}>{min}</td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--color-gold)', fontWeight: 500 }}>{max}</td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--color-mid)' }}>{nuit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Neuilly-sur-Seine : le marché le plus rentable du 92</h2>
        <p>Neuilly-sur-Seine est sans conteste la commune la plus rentable des Hauts-de-Seine pour la location courte durée. Avec une clientèle composite de cadres dirigeants, d'expatriés des grandes entreprises et de voyageurs haut de gamme, les tarifs à la nuit y sont parmi les plus élevés de la petite couronne.</p>
        <p>Les périodes de Fashion Week parisienne, Roland Garros et des grands salons professionnels font bondir le taux d'occupation à plus de 90%, permettant des pics de revenus exceptionnels. Sur une année, un T3 bien situé à Neuilly peut générer entre 35 000€ et 65 000€ de revenus bruts.</p>

        <h2>La Défense et la demande corporate</h2>
        <p>Le bassin de La Défense (Puteaux, Courbevoie, Nanterre) représente un marché spécifique dominé par la clientèle corporate. Les taux d'occupation en semaine y dépassent souvent 90%, même si les week-ends sont plus calmes. Cette dynamique particulière nécessite une stratégie de tarification adaptée : prix plus élevés du lundi au jeudi, promotions week-end.</p>

        <h2>Boulogne-Billancourt : le marché événementiel</h2>
        <p>Boulogne-Billancourt bénéficie d'atouts particuliers : les bords de Seine, la proximité du Bois de Boulogne, l'Île Seguin (Seine Musicale), et surtout la proximité de Roland Garros. En mai-juin, les deux semaines du tournoi font tripler ou quadrupler les tarifs à la nuit pour les biens proches du court.</p>

        <h2>Facteurs clés de la rentabilité dans le 92</h2>
        <ul>
          <li>Proximité des transports (métro, RER, Transilien) vers Paris et La Défense</li>
          <li>Surface du bien : les T2 et T3 offrent le meilleur ratio rendement/surface</li>
          <li>Standing et qualité du mobilier : un bien premium justifie des tarifs 30 à 50% supérieurs</li>
          <li>Événements locaux : identifier les pics de demande de votre commune</li>
          <li>Gestion professionnelle : un bon prestataire optimise le taux d'occupation de 15 à 25%</li>
        </ul>

        <h2>Réglementation et contraintes</h2>
        <p>Dans les Hauts-de-Seine, la plupart des communes n'appliquent pas la règle des 120 jours de Paris. Toutefois, un enregistrement en mairie est souvent requis, et les règles varient par commune. Nous vous recommandons de vérifier la situation spécifique de votre commune avant de démarrer une activité de location courte durée.</p>
      </div>
    ),
  },
  'reglementation-location-paris-ouest': {
    slug: 'reglementation-location-paris-ouest',
    title: 'Réglementation location courte durée Paris Ouest 2026 — Guide complet',
    description: 'Enregistrement en mairie, règle des 120 jours, DPE, règlement de copropriété. Tout ce qu\'il faut savoir.',
    date: '2026-01-08',
    modified: '2026-01-15',
    category: 'Réglementation',
    readTime: '10 min',
    content: () => (
      <div className="article-body">
        <p>La réglementation de la location courte durée en France a évolué significativement ces dernières années. En 2026, les propriétaires de Paris Ouest doivent naviguer un cadre légal de plus en plus précis. Ce guide fait le point sur toutes les obligations applicables dans les Hauts-de-Seine (92) et les Yvelines (78).</p>

        <h2>Qu'est-ce que la location courte durée (LCD) ?</h2>
        <p>La location courte durée désigne la location d'un logement meublé pour une durée inférieure ou égale à 90 jours consécutifs à un client de passage (article L.324-1-1 du Code du tourisme). Ce cadre est distinct du bail meublé classique et de la colocation.</p>

        <h2>L'enregistrement en mairie : obligatoire depuis 2019</h2>
        <p>Dans de nombreuses communes, tout propriétaire souhaitant mettre son logement en location courte durée doit d'abord obtenir un numéro d'enregistrement auprès de la mairie. Ce numéro doit apparaître sur toutes les annonces (Airbnb, Booking.com, etc.).</p>
        <p>Dans les Hauts-de-Seine, communes concernées : Neuilly-sur-Seine, Boulogne-Billancourt, Levallois-Perret, et d'autres selon les arrêtés locaux. Dans les Yvelines : Versailles a mis en place son propre système.</p>

        <h2>La règle des 120 jours</h2>
        <p>La règle des 120 jours s'applique uniquement à Paris et dans certaines communes qui l'ont explicitement adoptée. Elle limite à 120 nuits par an la location de la résidence principale en meublé touristique.</p>
        <p>Bonne nouvelle : la grande majorité des communes de Paris Ouest (92 et 78) ne sont PAS soumises à cette restriction. Vous pouvez louer votre résidence principale toute l'année, sous réserve du respect des autres réglementations.</p>

        <h2>Le changement d'usage</h2>
        <p>Si vous louez une résidence secondaire (non votre résidence principale), vous pouvez être soumis à l'obligation de "changement d'usage" auprès de la mairie. Ce régime s'applique dans les villes de plus de 200 000 habitants et dans certains départements. Certaines communes du 92 (Boulogne, Neuilly) ont adopté ce dispositif.</p>

        <h2>Le DPE et la réglementation énergétique</h2>
        <p>Depuis 2023, les logements classés G ne peuvent plus être mis en location (seuils progressifs). En 2025, les logements classés F sont également concernés. Il est essentiel de vérifier le DPE de votre bien avant de démarrer une activité LCD.</p>

        <h2>Le règlement de copropriété</h2>
        <p>Avant toute mise en location courte durée, vérifiez que votre règlement de copropriété ne l'interdit pas. Certains immeubles haussmanniens ou résidences de standing ont des clauses restrictives. En cas de doute, consultez votre syndic ou un juriste.</p>

        <h2>La fiscalité LMNP</h2>
        <p>Les revenus issus de la location meublée (dont la LCD) relèvent du régime LMNP (Loueur Meublé Non Professionnel). Vous bénéficiez d'un abattement forfaitaire de 50% (micro-BIC) ou d'une déduction des charges réelles (régime réel). Le régime réel est souvent plus avantageux à partir de 20 000€ de revenus annuels.</p>

        <h2>Nos conseils pratiques</h2>
        <ul>
          <li>Vérifiez les obligations d'enregistrement de votre commune avant de publier une annonce</li>
          <li>Conservez la preuve de déclaration fiscale de vos revenus locatifs</li>
          <li>Assurez votre bien avec une assurance spécifique LCD (responsabilité civile renforcée)</li>
          <li>Souscrivez à une assurance annulation et dégradation (souvent proposée par les plateformes)</li>
          <li>Faites appel à un expert-comptable pour optimiser votre fiscalité LMNP</li>
        </ul>
      </div>
    ),
  },
  'investir-lcd-78': {
    slug: 'investir-lcd-78',
    title: 'Investir en Location Courte Durée dans les Yvelines (78) : Guide 2026',
    description: 'Guide complet pour investir en LCD dans les Yvelines. Versailles, Vélizy, Saint-Germain. Rentabilité et fiscalité.',
    date: '2026-01-05',
    modified: '2026-01-15',
    category: 'Investissement',
    readTime: '15 min',
    content: () => (
      <div className="article-body">
        <p>Les Yvelines (78) constituent un territoire exceptionnellement diversifié pour la location courte durée. Du tourisme mondial à Versailles à la demande corporate à Vélizy-Villacoublay, en passant par la clientèle expatriée de Saint-Germain-en-Laye, le département offre des opportunités d'investissement LCD souvent sous-estimées.</p>

        <h2>Pourquoi investir en LCD dans le 78 en 2026 ?</h2>
        <p>Plusieurs facteurs rendent le marché LCD des Yvelines particulièrement attractif en 2026 :</p>
        <ul>
          <li>Prix d'achat immobilier inférieurs à Paris de 30 à 50%, pour des rendements similaires ou supérieurs</li>
          <li>Demande touristique mondiale grâce au Château de Versailles (10 millions de visiteurs/an)</li>
          <li>Demande corporate massive dans le cluster aérospatial de Vélizy (Thales, Dassault, Boeing)</li>
          <li>Forte communauté anglophone à Saint-Germain-en-Laye (écoles internationales)</li>
          <li>Réglementation plus souple qu'à Paris dans la plupart des communes</li>
        </ul>

        <h2>Versailles : le marché le plus international du 78</h2>
        <p>Versailles est l'une des destinations touristiques les plus visitées au monde. Le Château de Versailles attire 10 millions de visiteurs par an, dont une proportion croissante de voyageurs fortunés cherchant à loger à Versailles même plutôt que dans Paris.</p>
        <p>Les revenus estimés pour un T2 bien situé à Versailles : 1 600€ à 3 200€ par mois. Les périodes des Grandes Eaux Musicales (avril-octobre), des spectacles nocturnes et des séminaires professionnels permettent des pics de revenus exceptionnels.</p>

        <h2>Vélizy-Villacoublay : la poule aux œufs d'or corporate</h2>
        <p>Vélizy est l'un des marchés LCD les moins connus mais les plus rentables de Paris Ouest. Le cluster aérospatial et défense réunit Thales Group, Dassault Aviation, Boeing France et des dizaines de sous-traitants. Les ingénieurs et cadres en mission représentent une demande stable et solvable 48 semaines par an.</p>
        <p>Un T2 à Vélizy génère typiquement 1 400€ à 2 800€ par mois avec un taux d'occupation semaine proche de 90%.</p>

        <h2>Saint-Germain-en-Laye : la ville des expatriés</h2>
        <p>Saint-Germain-en-Laye abrite l'une des plus importantes communautés anglophones de la région parisienne, notamment en raison de l'école internationale britannique. Cette clientèle aisée cherche des logements de qualité pour des séjours de 1 à 6 mois.</p>

        <h2>Comment choisir son bien pour la LCD dans le 78 ?</h2>
        <ul>
          <li>Proximité des transports vers Paris et les zones d'emploi</li>
          <li>Surface optimale : T2 et T3 pour Versailles et Saint-Germain, studio/T2 pour Vélizy</li>
          <li>Qualité de la construction et des équipements</li>
          <li>Potentiel de rénovation (DPE minimum D conseillé)</li>
          <li>Présence de parking (valorisée par la clientèle corporate)</li>
        </ul>

        <h2>Fiscalité et rentabilité nette</h2>
        <p>En régime LMNP au réel, les investisseurs LCD dans le 78 peuvent déduire l'ensemble des charges : intérêts d'emprunt, amortissements, charges de copropriété, frais de gestion. La rentabilité nette après fiscalité se situe généralement entre 4% et 8% pour les meilleures opportunités.</p>
      </div>
    ),
  },
  'tarifs-conciergerie': {
    slug: 'tarifs-conciergerie',
    title: "Tarifs et Commissions d'une Conciergerie à Paris Ouest",
    description: "Quels sont les tarifs d'une gestion locative à Paris Ouest ? Commissions, services inclus, comparaison transparente.",
    date: '2026-01-03',
    modified: '2026-01-15',
    category: 'Tarifs',
    readTime: '8 min',
    content: () => (
      <div className="article-body">
        <p>Confier son bien à une conciergerie de gestion locative est une décision stratégique qui implique de comparer les offres disponibles. Les tarifs varient significativement selon les prestataires, les services inclus et la zone géographique. Voici un guide transparent sur les modèles tarifaires pratiqués à Paris Ouest.</p>

        <h2>Les modèles de commission</h2>
        <p>La grande majorité des conciergeries pratiquent un modèle à commission : elles prélèvent un pourcentage des revenus générés. C'est un modèle aligné avec les intérêts du propriétaire : si vous gagnez plus, elles gagnent plus.</p>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-cream-2)', borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Type de service</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600 }}>Commission moyenne</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 600 }}>Services inclus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gestion partielle', '10-12%', 'Annonces + calendrier'],
                ['Gestion standard', '15-18%', '+ Accueil voyageurs'],
                ['Gestion complète', '20-25%', '+ Ménage + Linge'],
                ['Gestion premium', '25-30%', '+ Conciergerie + Urgences 24h'],
              ].map(([type, commission, services]) => (
                <tr key={type} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--color-dark)' }}>{type}</td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--color-gold)', fontWeight: 500 }}>{commission}</td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'right', color: 'var(--color-mid)', fontSize: '0.8rem' }}>{services}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Ce que comprend notre offre à 20%</h2>
        <p>Chez Conciergerie Paris Ouest, nous pratiquons une commission de 20% des revenus générés, tout inclus. Cette formule comprend :</p>
        <ul>
          <li>Création et optimisation des annonces sur Airbnb, Booking.com, Vrbo</li>
          <li>Shooting photo professionnel</li>
          <li>Gestion du calendrier et des réservations</li>
          <li>Accueil des voyageurs 7j/7</li>
          <li>État des lieux d'entrée et de sortie</li>
          <li>Ménage professionnel après chaque séjour</li>
          <li>Fourniture et lavage du linge de maison</li>
          <li>Tarification dynamique</li>
          <li>Reporting mensuel et virement automatique</li>
          <li>Astreinte urgences 24h/24</li>
        </ul>

        <h2>Les frais cachés à surveiller</h2>
        <p>Certains prestataires affichent des commissions basses (10-12%) mais facturent ensuite des frais supplémentaires : frais de ménage, linge en supplément, frais d'installation, frais de résiliation. Demandez toujours une simulation de coût total sur la base de vos revenus estimés.</p>

        <h2>Commission vs rentabilité nette</h2>
        <p>Une commission de 20% peut sembler élevée, mais elle doit être mise en regard de l'optimisation apportée. Une bonne gestion locative professionnelle peut augmenter vos revenus bruts de 25 à 40% grâce à la tarification dynamique, l'optimisation des annonces et un meilleur taux d'occupation. In fine, vos revenus nets peuvent être supérieurs à une auto-gestion moins optimisée.</p>

        <h2>Comment choisir votre conciergerie ?</h2>
        <ul>
          <li>Vérifiez les avis propriétaires (pas seulement les avis voyageurs)</li>
          <li>Demandez des références dans votre commune</li>
          <li>Lisez attentivement le contrat : durée d'engagement, conditions de résiliation</li>
          <li>Assurez-vous d'un accès propriétaire en temps réel à vos réservations et revenus</li>
          <li>Vérifiez la couverture géographique : la connaissance hyperlocale de votre commune est un avantage décisif</li>
        </ul>
      </div>
    ),
  },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return { title: 'Article non trouvé' }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://conciergerieparisouest.fr/blog/${slug}/`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://conciergerieparisouest.fr/blog/${slug}/`,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.modified,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) notFound()

  const ArticleContent = article.content

  return (
    <>
      <JsonLd
        schema={buildArticleSchema({
          title: article.title,
          description: article.description,
          url: `/blog/${slug}/`,
          datePublished: article.date,
          dateModified: article.modified,
        })}
      />

      {/* Hero */}
      <section className="section bg-charcoal">
        <div className="container max-w-4xl">
          <Breadcrumb items={[
            { name: 'Accueil', url: '/' },
            { name: 'Blog', url: '/blog/' },
            { name: article.category, url: '/blog/' },
          ]} />
          <div className="mt-6 flex items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-widest text-gold font-medium">{article.category}</span>
            <span className="text-xs text-white/50">{article.readTime} de lecture</span>
            <span className="text-xs text-white/50">
              {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-white" style={{ fontWeight: 300, fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.5rem)' }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <ArticleContent />

              {/* CTA interne */}
              <div className="mt-12 p-8 bg-gold-pale" style={{ border: '1px solid var(--color-gold-light)' }}>
                <p className="text-xs uppercase tracking-widest text-gold mb-2 font-medium">Passez à l'action</p>
                <h3 className="font-display text-xl font-light text-charcoal mb-3">
                  Estimez vos revenus locatifs à Paris Ouest
                </h3>
                <p className="text-sm text-mid mb-4">Estimation gratuite en 48h. Aucun engagement.</p>
                <Link href="/estimation-revenus/" className="btn-gold">
                  Simuler mes revenus
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24">
                <LeadForm source={`blog-${slug}`} />
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest text-muted mb-4 font-medium">Autres articles</p>
                  <div className="space-y-3">
                    {Object.values(articles)
                      .filter((a) => a.slug !== slug)
                      .map((a) => (
                        <Link
                          key={a.slug}
                          href={`/blog/${a.slug}/`}
                          className="block text-sm text-dark hover:text-gold transition-colors py-2"
                          style={{ borderBottom: '1px solid var(--color-border)' }}
                        >
                          {a.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
