type JsonLdProps = {
  schema: object | object[]
}

export function JsonLd({ schema }: JsonLdProps) {
  const json = Array.isArray(schema) ? schema : [schema]

  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}
