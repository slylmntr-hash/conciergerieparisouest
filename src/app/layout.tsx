import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'
import { JsonLd } from '@/components/SEO/JsonLd'
import { buildOrganizationSchema, buildWebsiteSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://conciergerieparisouest.fr'),
  title: {
    default: 'Conciergerie Paris Ouest — Gestion Locative 92 & 78',
    template: '%s | Conciergerie Paris Ouest',
  },
  description:
    'Gestion locative clé en main à Paris Ouest. 60 communes couvertes dans les Hauts-de-Seine (92) et les Yvelines (78). Estimation gratuite en 48h.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: 'Conciergerie Paris Ouest',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://conciergerieparisouest.fr/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          as="style"
        />
        <JsonLd schema={[buildOrganizationSchema(), buildWebsiteSchema()]} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-white focus:px-4 focus:py-2"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
