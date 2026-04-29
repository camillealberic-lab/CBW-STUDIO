import Navbar from '@/components/Navbar'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const SERVICES = [
  {
    num: '01',
    id: 'analyse-marketing',
    title: 'Analyse marketing',
    tagline: "Comprendre avant d'agir.",
    description:
      "Nous décortiquons votre marché, votre positionnement et vos concurrents pour construire une stratégie digitale sur-mesure. Sans diagnostic solide, tout le reste est hasard.",
    features: [
      'Audit SEO & technique complet',
      'Analyse concurrentielle approfondie',
      'Définition des persona & audiences cibles',
      'Stratégie de contenu & mots-clés',
      'Rapport de recommandations détaillé',
    ],
    dark: false,
  },
  {
    num: '02',
    id: 'design',
    title: 'Design',
    tagline: "L'identité qui crée la confiance.",
    description:
      "Du premier coup d'œil à l'expérience complète, nous concevons des interfaces qui séduisent et convertissent. Chaque pixel est une décision intentionnelle.",
    features: [
      'Maquettes UX/UI desktop & mobile',
      'Identité visuelle sur-mesure',
      'Design system & composants réutilisables',
      'Exports Figma production',
      'Revues itératives illimitées',
    ],
    dark: true,
  },
  {
    num: '03',
    id: 'developpement',
    title: 'Développement',
    tagline: 'La performance au cœur du code.',
    description:
      'Nous construisons des sites et applications web avec les technologies les plus modernes. Résultat : des scores parfaits, un chargement instantané, une expérience fluide.',
    features: [
      'Développement Next.js / React',
      'Responsive & cross-browser garanti',
      'Optimisation Core Web Vitals',
      'Intégration CMS (Sanity, Notion...)',
      'Mise en ligne & déploiement inclus',
    ],
    dark: false,
  },
  {
    num: '04',
    id: 'maintenance',
    title: 'Maintenance',
    tagline: 'Votre site toujours au sommet.',
    description:
      "Un site livré n'est pas un site fini. Nous assurons sa pérennité — mises à jour, sécurité, performance — pour qu'il reste un actif, pas un passif.",
    features: [
      'Mises à jour régulières & sécurité',
      'Monitoring de performance 24/7',
      'Support réactif sous 48 h',
      'Sauvegardes automatisées',
      'Rapport mensuel de performance',
    ],
    dark: true,
  },
]

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        {/* Hero */}
        <section className="bg-noir page-hero">
          <h1
            className="font-bold leading-[1.05]"
            style={{ fontFamily: FONT, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F4EEE4' }}
          >
            Des services pensés pour{' '}
            <span className="font-playfair italic text-jaune">performer.</span>
          </h1>
        </section>

        {/* Service sections */}
        {SERVICES.map((s) => (
          <section
            key={s.num}
            id={s.id}
            className="px-mob"
            style={{
              backgroundColor: s.dark ? '#1A1A17' : '#F4EEE4',
              padding: '96px 50px',
            }}
          >
            <div className="flex gap-20 col-mob pr-0-mob" style={{ paddingRight: '80px' }}>
              {/* Left */}
              <div className="col-401">
                <p
                  className="font-playfair italic"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 9rem)',
                    color: s.dark ? 'rgba(244,238,228,0.07)' : 'rgba(26,26,23,0.07)',
                    lineHeight: 1,
                    marginBottom: '24px',
                    userSelect: 'none',
                  }}
                >
                  {s.num}
                </p>
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: FONT,
                    fontSize: '35px',
                    color: s.dark ? '#F4EEE4' : '#1A1A17',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {s.title}
                </h2>
                <p
                  className="font-playfair italic"
                  style={{
                    fontSize: '18px',
                    color: s.dark ? '#F4EEE4' : '#1A1A17',
                    marginBottom: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {s.tagline}
                </p>
              </div>

              {/* Right */}
              <div className="flex-1 flex flex-col justify-center">
                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: '16px',
                    color: s.dark ? '#F4EEE4' : '#1A1A17',
                    lineHeight: 1.75,
                    marginBottom: '40px',
                    maxWidth: '520px',
                  }}
                >
                  {s.description}
                </p>

                <div style={{ borderTop: `1px solid ${s.dark ? 'rgba(244,238,228,0.1)' : 'rgba(26,26,23,0.1)'}` }}>
                  {s.features.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '16px 0',
                        borderBottom: `1px solid ${s.dark ? 'rgba(244,238,228,0.08)' : 'rgba(26,26,23,0.08)'}`,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="8" cy="8" r="7" stroke={s.dark ? '#F4EEE4' : '#1A1A17'} strokeWidth="1.2" strokeOpacity={0.3} />
                        <path d="M5 8l2 2 4-4" stroke={s.dark ? '#F4EEE4' : '#1A1A17'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0.6} />
                      </svg>
                      <span style={{ fontFamily: FONT, fontSize: '15px', color: s.dark ? '#F4EEE4' : '#1A1A17' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <CtaBannerReveal />
      </div>
      <FooterParallax>
        <Footer />
      </FooterParallax>
    </div>
  )
}
