import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const SECTIONS = [
  {
    title: 'Éditeur du site',
    rows: [
      { label: 'Raison sociale', value: 'CBW Studio' },
      { label: 'Forme juridique', value: 'Auto-entrepreneur (micro-entreprise)' },
      { label: 'Représentant légal', value: 'Camille Breton' },
      { label: 'Adresse', value: 'France — précisée sur devis' },
      { label: 'Email', value: 'contact@cbwstudio.fr' },
      { label: 'SIRET', value: 'À compléter' },
      { label: 'Numéro de TVA intracommunautaire', value: 'Non assujetti (franchise en base de TVA)' },
    ],
  },
  {
    title: 'Hébergement',
    rows: [
      { label: 'Hébergeur', value: 'Vercel Inc.' },
      { label: 'Adresse', value: '340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis' },
      { label: 'Site web', value: 'vercel.com' },
    ],
  },
  {
    title: 'Directeur de la publication',
    rows: [
      { label: 'Nom', value: 'Camille Breton' },
      { label: 'Qualité', value: 'Fondateur & dirigeant de CBW Studio' },
    ],
  },
  {
    title: 'Propriété intellectuelle',
    content: `L'ensemble des contenus présents sur ce site (textes, images, illustrations, logotypes, icônes, graphiques, mise en page) sont la propriété exclusive de CBW Studio ou de leurs auteurs respectifs. Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie de ces éléments, sans l'accord préalable et écrit de CBW Studio, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`,
  },
  {
    title: 'Limitation de responsabilité',
    content: `CBW Studio met tout en œuvre pour offrir aux utilisateurs des informations et des outils disponibles et vérifiés. Cependant, CBW Studio ne pourra être tenu responsable des erreurs, d'une absence de disponibilité des fonctionnalités ou de la présence de virus sur son site. Les liens hypertextes établis en direction d'autres sites depuis le site de CBW Studio ne sauraient, en aucun cas, engager la responsabilité de CBW Studio quant aux informations diffusées sur ces sites.`,
  },
  {
    title: 'Droit applicable',
    content: `Le présent site est régi par le droit français. En cas de litige, les tribunaux français seront seuls compétents. Toute réclamation relative à l'utilisation du site doit être adressée en premier lieu à CBW Studio par email à contact@cbwstudio.fr, afin de rechercher une solution amiable.`,
  },
  {
    title: 'Données personnelles',
    content: `Pour toute information relative à la collecte et au traitement de vos données personnelles, veuillez consulter notre Politique de confidentialité accessible depuis le bas de chaque page du site.`,
  },
]

export default function MentionsLegalesPage() {
  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        <PageHero prefix="Mentions" highlight="légales." />

        <main style={{ backgroundColor: '#F4EEE4' }}>
          <div style={{ padding: '80px 50px 120px', maxWidth: '760px' }}>
          <p
            style={{
              fontFamily: FONT,
              fontSize: '14px',
              color: 'rgba(26,26,23,0.5)',
              marginBottom: '64px',
              lineHeight: 1.7,
            }}
          >
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est porté à la connaissance des utilisateurs les présentes mentions légales.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2
                  style={{
                    fontFamily: FONT,
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1A1A17',
                    marginBottom: '20px',
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h2>

                {'rows' in s && s.rows ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {s.rows.map((row) => (
                      <div
                        key={row.label}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '200px 1fr',
                          gap: '16px',
                          paddingBottom: '10px',
                          borderBottom: '1px solid rgba(26,26,23,0.07)',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: FONT,
                            fontSize: '13px',
                            color: 'rgba(26,26,23,0.45)',
                            lineHeight: 1.6,
                          }}
                        >
                          {row.label}
                        </span>
                        <span
                          style={{
                            fontFamily: FONT,
                            fontSize: '13px',
                            color: '#1A1A17',
                            lineHeight: 1.6,
                          }}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    style={{
                      fontFamily: FONT,
                      fontSize: '14px',
                      color: 'rgba(26,26,23,0.7)',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {s.content}
                  </p>
                )}
              </div>
            ))}
          </div>
          </div>
        </main>

        <CtaBannerReveal />
      </div>
      <FooterParallax>
        <Footer />
      </FooterParallax>
    </div>
  )
}
