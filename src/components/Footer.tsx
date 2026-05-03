import CalButton from './CalButton'

const LINKS: Record<string, { label: string; href: string }[]> = {
  "L'agence": [
    { label: 'Projets', href: '/projets' },
    { label: 'À propos', href: '/a-propos' },
  ],
  Services: [
    { label: 'Analyse marketing', href: '/services' },
    { label: 'Design', href: '/services' },
    { label: 'Développement', href: '/services' },
    { label: 'Maintenance', href: '/services' },
    { label: 'Contact', href: '/commencer' },
  ],
  Légal: [
    { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
    { label: 'Mentions légales', href: '/mentions-legales' },
  ],
}

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: '#F4EEE4' }}>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-[130px] px-[25px] lg:px-[50px] pb-10 lg:pb-[110px]"
      >
        <div className="flex flex-col gap-6">
          <div>
            <h3
              className="font-medium leading-snug"
              style={{
                fontFamily: 'var(--font-geologica), system-ui, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 25px)',
                color: '#1A1A17',
                margin: 0,
              }}
            >
              Vous avez un projet à nous confier ?<br />
              Nous sommes toujours disponibles pour en discuter.
            </h3>
          </div>
          <CalButton
            className="bg-jaune text-noir font-normal rounded-full leading-none w-fit btn-primary"
            style={{
              fontFamily: 'var(--font-geologica), system-ui, sans-serif',
              fontSize: '16px',
              padding: '17px 32px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Contactez-nous
          </CalButton>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4
                className="font-semibold"
                style={{
                  fontFamily: 'var(--font-geologica), system-ui, sans-serif',
                  fontSize: '14px',
                  color: '#1A1A17',
                }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:opacity-60 transition-opacity leading-none"
                      style={{
                        fontSize: '13px',
                        color: '#1A1A17',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex items-center justify-between py-5 px-[25px] lg:px-[50px]"
        style={{ borderTop: '1px solid rgba(26,26,23,0.12)' }}
      >
        <span
          className="font-bold"
          style={{
            fontFamily: 'var(--font-geologica), system-ui, sans-serif',
            fontSize: '20px',
            color: '#1A1A17',
          }}
        >
          CBW<span style={{ color: 'rgba(26,26,23,0.35)' }}>.</span>
        </span>
        <div className="flex items-center gap-6">
          {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="hover:opacity-60 transition-opacity"
              style={{ fontSize: '14px', color: '#1A1A17' }}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
