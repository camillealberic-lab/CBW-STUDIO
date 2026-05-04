import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import PageHero from '@/components/PageHero'
import ValuesScroll from '@/components/ValuesScroll'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'
import { FONT } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'À propos — CBW Studio.',
  description: 'Camille, designer et stratège digital indépendant : découvrez la mission, les valeurs et l\'approche de CBW Studio pour construire des présences digitales qui convertissent.',
}


export default function AProposPage() {
  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        <PageHero prefix="Une agence taillée pour votre" highlight="ambition." />

        {/* Mission */}
        <section className="bg-creme px-mob" style={{ paddingTop: '116px', paddingBottom: '40px', paddingLeft: '50px', paddingRight: '50px' }}>
          <p
            className="font-medium leading-tight indent-right-401"
            style={{
              fontFamily: FONT,
              fontSize: '35px',
              color: '#1A1A17',
              marginBottom: 0,
            }}
          >
            Nous aidons les marques ambitieuses à bâtir
          </p>
          <p
            className="font-medium leading-tight"
            style={{
              fontFamily: FONT,
              fontSize: '35px',
              color: '#1A1A17',
              marginTop: 0,
            }}
          >
            des écosystèmes digitaux haute performance — pensés pour convertir, conçus pour durer et toujours mesurés à leur impact réel.
          </p>
        </section>

        {/* Valeurs */}
        <div id="valeurs">
          <ValuesScroll />
        </div>

        {/* Équipe — noir, single freelance */}
        <section className="bg-noir px-mob" style={{ padding: '80px 50px' }}>
          <h2
            style={{
              fontFamily: FONT,
              fontSize: '35px',
              fontWeight: 700,
              color: '#F4EEE4',
              marginBottom: '48px',
            }}
          >
            L'équipe
          </h2>
          <div className="flex gap-16 items-start col-mob">
            {/* Left — descriptive text */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: FONT,
                  fontSize: '16px',
                  color: '#F4EEE4',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                  marginTop: 0,
                }}
              >
                Je suis Camille, designer et stratège digital indépendant. Je travaille avec des marques ambitieuses pour construire des présences digitales qui convertissent et qui durent dans le temps.
              </p>
              <p
                style={{
                  fontFamily: FONT,
                  fontSize: '16px',
                  color: '#F4EEE4',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Mon approche : comprendre votre marché avant de toucher à un pixel, livrer des solutions mesurables à leur impact réel — pas au nombre de livrables.
              </p>
            </div>

            {/* Right — photo + caption */}
            <div className="col-401">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '566 / 360', borderRadius: 13, overflow: 'hidden', marginBottom: '14px' }}>
                <Image
                  src="/Photo_profil.jpg"
                  alt="Camille, fondateur de CBW Studio"
                  fill
                  sizes="(max-width: 767px) 100vw, 401px"
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
              <p style={{ fontFamily: FONT, fontSize: '16px', fontWeight: 600, color: '#F4EEE4', margin: '0 0 2px' }}>
                Camille
              </p>
              <p style={{ fontFamily: FONT, fontSize: '13px', color: '#F4EEE4', margin: 0 }}>
                Freelance — Design & Stratégie Digitale
              </p>
            </div>
          </div>
        </section>

        <CtaBannerReveal />
      </div>

      <FooterParallax>
        <Footer />
      </FooterParallax>
    </div>
  )
}
