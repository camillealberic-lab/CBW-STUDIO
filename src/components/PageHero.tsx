// Shared hero for inner pages: dark bg, large headline with a Playfair italic highlight.
// Pattern: "<prefix> <highlight>" where highlight renders in jaune italic.
interface PageHeroProps {
  prefix: string
  highlight: string
}

export default function PageHero({ prefix, highlight }: PageHeroProps) {
  return (
    <section className="bg-noir page-hero">
      <h1
        className="font-bold leading-[1.05]"
        style={{
          fontFamily: 'var(--font-geologica), system-ui, sans-serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          color: '#F4EEE4',
        }}
      >
        {prefix}{' '}
        <span className="font-playfair italic text-jaune">{highlight}</span>
      </h1>
    </section>
  )
}
