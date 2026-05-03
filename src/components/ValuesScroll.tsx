'use client'

import { useRef, useEffect } from 'react'
import { useScroll } from 'framer-motion'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const VALUES = [
  { num: '1', title: 'Transparence', desc: "Chaque décision est partagée avec vous. Pas de jargon, pas de boîte noire — une collaboration directe et honnête." },
  { num: '2', title: 'Exigence', desc: "Nous ne livrons que ce dont nous sommes fiers. Le « ça fera l'affaire » n'a pas sa place dans notre méthode." },
  { num: '3', title: 'Impact', desc: "Notre succès se mesure à vos résultats : trafic, conversions, chiffre d'affaires. Pas au nombre de livrables." },
  { num: '4', title: 'Durabilité', desc: "Des solutions robustes techniquement, solides stratégiquement, et pensées pour évoluer avec vous dans le temps." },
]

const SCROLL_PER  = 500
const SCROLL_DIST = VALUES.length * SCROLL_PER  // 2000px

function ValueRow({ v }: { v: typeof VALUES[number] }) {
  return (
    <>
      <div
        className="flex items-center justify-center rounded-full shrink-0 bg-noir"
        style={{ width: '38px', height: '38px', marginTop: '2px' }}
      >
        <span
          className="font-semibold tabular-nums"
          style={{ fontSize: '19px', color: '#F4EEE4' }}
        >
          {v.num}
        </span>
      </div>
      <div>
        <p
          style={{
            fontFamily: FONT,
            fontSize: '20px',
            color: '#1A1A17',
            margin: '0 0 6px',
            fontWeight: 400,
          }}
        >
          {v.title}
        </p>
        <p
          style={{
            fontFamily: FONT,
            fontSize: '14px',
            color: '#1A1A17',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {v.desc}
        </p>
      </div>
    </>
  )
}

export default function ValuesScroll() {
  const containerRef  = useRef<HTMLDivElement>(null)
  const valEls        = useRef<(HTMLDivElement | null)[]>([])
  const mobileValRefs = useRef<(HTMLDivElement | null)[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Desktop: scroll-driven translateX slide-in
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const raw = v * VALUES.length
      valEls.current.forEach((el, i) => {
        if (!el) return
        const progress = Math.max(0, Math.min(1, raw - i))
        const eased = 1 - Math.pow(1 - progress, 3)
        el.style.transform = `translateX(${(1 - eased) * 105}%)`
      })
    })
  }, [scrollYProgress])

  // Mobile: IntersectionObserver — each value fades+slides in as it enters viewport
  useEffect(() => {
    const observers = mobileValRefs.current.map((el) => {
      if (!el) return null
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            obs.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <>
      {/* ── DESKTOP: sticky scroll + translateX slide-in ── */}
      <div
        ref={containerRef}
        className="hidden md:block bg-creme"
        style={{ height: `calc(100vh + ${SCROLL_DIST}px)` }}
      >
        <div
          className="sticky top-0 bg-creme flex flex-col"
          style={{ height: '100vh', padding: '110px 50px 0' }}
        >
          <h2
            className="font-bold leading-none"
            style={{ fontFamily: FONT, fontSize: '35px', color: '#1A1A17', marginBottom: '24px', flexShrink: 0 }}
          >
            Nos valeurs
          </h2>
          <div className="flex-1 flex flex-col justify-center" style={{ overflow: 'hidden' }}>
            <div>
              {VALUES.map((v, i) => (
                <div
                  key={v.num}
                  ref={el => { valEls.current[i] = el }}
                  className="flex items-start gap-5 py-6"
                  style={{
                    borderBottom: '1px solid rgba(26,26,23,0.1)',
                    transform: 'translateX(105%)',
                  }}
                >
                  <ValueRow v={v} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE: normal flow + IntersectionObserver fade-in ── */}
      <div
        className="md:hidden bg-creme"
        style={{ padding: '80px 20px 60px' }}
      >
        <h2
          className="font-bold leading-none"
          style={{ fontFamily: FONT, fontSize: '35px', color: '#1A1A17', marginBottom: '32px' }}
        >
          Nos valeurs
        </h2>
        {VALUES.map((v, i) => (
          <div
            key={v.num}
            ref={el => { mobileValRefs.current[i] = el }}
            className="flex items-start gap-5 py-6"
            style={{ borderBottom: '1px solid rgba(26,26,23,0.1)' }}
          >
            <ValueRow v={v} />
          </div>
        ))}
      </div>
    </>
  )
}
