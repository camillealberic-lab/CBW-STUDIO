export default function About() {
  return (
    <section
      id="a-propos"
      className="bg-creme"
      style={{
        borderRadius: '40px 40px 0 0',
        padding: '96px 50px 80px',
      }}
    >
      <p
        className="font-medium leading-tight indent-right-401"
        style={{
          fontFamily: 'var(--font-geologica), system-ui, sans-serif',
          fontSize: '35px',
          color: '#1A1A17',
          marginBottom: 0,
        }}
      >
        Nous aidons les artisans et producteurs locaux
      </p>
      <p
        className="font-medium leading-tight"
        style={{
          fontFamily: 'var(--font-geologica), system-ui, sans-serif',
          fontSize: '35px',
          color: '#1A1A17',
          marginTop: 0,
        }}
      >
        à transformer leur savoir-faire en chiffre d&apos;affaires grâce à des
        écosystèmes digitaux haute performance.
      </p>
    </section>
  )
}
