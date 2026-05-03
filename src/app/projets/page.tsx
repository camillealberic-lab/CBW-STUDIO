import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'

export const metadata: Metadata = {
  title: 'Nos projets — CBW Studio.',
  description: 'Découvrez les réalisations de CBW Studio : sites web haute performance pour artisans, producteurs locaux et marques ambitieuses.',
}

const FONT = 'var(--font-geologica), system-ui, sans-serif'

// Blurred placeholder images — replace with real project photos when available.
// Loaded at w=400 via Next.js sizes: the blur filter makes anything above ~200px indistinguishable.
const BLURRY_IMAGES = [
  'https://images.unsplash.com/photo-1547658719-da2b51169166',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
]

export default function ProjetsPage() {
  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <PageHero prefix="Tous nos" highlight="projets." />

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
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), calc(50vw - 62px)"
                  style={{
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
