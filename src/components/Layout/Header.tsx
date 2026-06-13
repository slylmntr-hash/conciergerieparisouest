'use client'
import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { href: '/gestion-locative-92/', label: 'Hauts-de-Seine' },
  { href: '/gestion-locative-78/', label: 'Yvelines' },
  { href: '/services/', label: 'Services' },
  { href: '/estimation-revenus/', label: 'Estimer mes revenus' },
  { href: '/blog/', label: 'Blog' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col">
            <span
              className="font-display text-lg font-light tracking-wide text-charcoal"
              style={{ letterSpacing: '0.04em' }}
            >
              Conciergerie
            </span>
            <span
              className="font-body text-xs font-medium tracking-widest text-gold uppercase"
              style={{ letterSpacing: '0.14em' }}
            >
              Paris Ouest
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+33100000000"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.06 3a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.84a16 16 0 006.25 6.25l1.1-1.1a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            01 00 00 00 00
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-charcoal"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-cream"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <nav className="container py-4 flex flex-col gap-1" aria-label="Menu mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link py-3"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+33100000000"
              className="mt-3 text-sm font-medium text-gold"
              onClick={() => setOpen(false)}
            >
              01 00 00 00 00
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
