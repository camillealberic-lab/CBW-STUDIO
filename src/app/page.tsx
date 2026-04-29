import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Results from '@/components/Results'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'

export default function Home() {
  return (
    <div className="bg-noir">
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Projects />
        <Services />
        <Results />
        <CtaBannerReveal />
      </div>

      <FooterParallax>
        <Footer />
      </FooterParallax>
    </div>
  )
}
