import Navbar from '@/components/Navbar'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const BLURRY_IMAGES = [
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80',
]

export default function ProjetsPage() {
  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        <section className="bg-noir page-hero">
          <h1
            className="font-bold leading-[1.05]"
            style={{ fontFamily: FONT, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F4EEE4' }}
          >
            Tous nos{' '}
            <span className="font-playfair italic text-jaune">projets.</span>
          </h1>
        </section>

        <main className="px-mob" style={{ padding: '80px 50px 100px', backgroundColor: '#F4EEE4' }}>
          <div
            className="grid-1-mob"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}
          >
            {BLURRY_IMAGES.map((src, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  aspectRatio: '566 / 360',
                  borderRadius: '13px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(26,26,23,0.05)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.08)',
                    filter: 'blur(28px) brightness(0.55)',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: FONT,
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#F4EEE4',
                      textAlign: 'center',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Agence en lancement — 3 projets à tarif découverte disponibles.
                  </p>
                </div>
              </div>
            ))}
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
