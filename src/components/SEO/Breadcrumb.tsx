import Link from 'next/link'
import { JsonLd } from './JsonLd'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

type BreadcrumbItem = {
  name: string
  url: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(items)} />
      <nav aria-label="Fil d'Ariane">
        <ol className="breadcrumb">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.url} className="flex items-center gap-2">
                {index > 0 && <span className="breadcrumb-sep" aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="text-charcoal">{item.name}</span>
                ) : (
                  <Link href={item.url} className="breadcrumb-link">
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
