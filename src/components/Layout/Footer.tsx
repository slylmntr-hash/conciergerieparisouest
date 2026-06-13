import Link from 'next/link'

const zones92 = [
  { href: '/gestion-locative/neuilly-sur-seine/', label: 'Neuilly-sur-Seine' },
  { href: '/gestion-locative/levallois-perret/', label: 'Levallois-Perret' },
  { href: '/gestion-locative/boulogne-billancourt/', label: 'Boulogne-Billancourt' },
  { href: '/gestion-locative/rueil-malmaison/', label: 'Rueil-Malmaison' },
  { href: '/gestion-locative/saint-cloud/', label: 'Saint-Cloud' },
  { href: '/gestion-locative/issy-les-moulineaux/', label: 'Issy-les-Moulineaux' },
]

const zones78 = [
  { href: '/gestion-locative/versailles/', label: 'Versailles' },
  { href: '/gestion-locative/velizy-villacoublay/', label: 'Vélizy-Villacoublay' },
  { href: '/gestion-locative/saint-germain-en-laye/', label: 'Saint-Germain-en-Laye' },
  { href: '/gestion-locative/le-chesnay-rocquencourt/', label: 'Le Chesnay-Rocquencourt' },
  { href: '/gestion-locative/viroflay/', label: 'Viroflay' },
  { href: '/gestion-locative/bougival/', label: 'Bougival' },
]

const services = [
  { href: '/services/', label: 'Nos services' },
  { href: '/estimation-revenus/', label: 'Simulation de revenus' },
  { href: '/gestion-locative-92/', label: 'Hauts-de-Seine (92)' },
  { href: '/gestion-locative-78/', label: 'Yvelines (78)' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
]

export function Footer() {
  const year = 2026

  return (
    <footer>
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-light text-white mb-1">Conciergerie</p>
            <p className="text-xs tracking-widest uppercase text-gold-light mb-4">Paris Ouest</p>
            <p className="text-sm leading-relaxed mb-6 max-w-none">
              Gestion locative professionnelle dans 60 communes des Hauts-de-Seine (92) et des Yvelines (78).
            </p>
            <a
              href="mailto:conciergerieparisouest@gmail.com"
              className="text-sm hover:text-gold-light transition-colors"
            >
              conciergerieparisouest@gmail.com
            </a>
          </div>

          {/* Communes 92 */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-white mb-4 font-medium">
              Hauts-de-Seine
            </h3>
            <ul className="space-y-2">
              {zones92.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-gold-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/gestion-locative-92/" className="text-sm text-gold hover:text-gold-light transition-colors">
                  Voir les 36 communes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Communes 78 */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-white mb-4 font-medium">
              Yvelines
            </h3>
            <ul className="space-y-2">
              {zones78.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-gold-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/gestion-locative-78/" className="text-sm text-gold hover:text-gold-light transition-colors">
                  Voir les 14 communes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-white mb-4 font-medium">
              Navigation
            </h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-gold-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
          <p>© {year} Conciergerie Paris Ouest. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales/" className="hover:text-gold-light transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite/" className="hover:text-gold-light transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
