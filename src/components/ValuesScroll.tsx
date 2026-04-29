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

export default function ValuesScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const valEls       = useRef<(HTMLDivElement | null)[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const raw = v * VALUES.length

      valEls.current.forEach((el, i) => {
        if (!el) return
        const progress = Math.max(0, Math.min(1, raw - i))
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        el.style.transform = `translateX(${(1 - eased) * 105}%)`
      })
    })
  }, [scrollYProgress])

  return (
    <div
      ref={containerRef}
      className="bg-creme"
      style={{ height: `calc(100vh + ${SCROLL_DIST}px)` }}
    >
      <div
        className="sticky top-0 bg-creme flex flex-col px-mob"
        style={{ height: '100vh', padding: '110px 50px 0' }}
      >
        {/* Title — acts as header above the list */}
        <h2
          className="font-bold leading-none"
          style={{ fontFamily: FONT, fontSize: '35px', color: '#1A1A17', marginBottom: '24px', flexShrink: 0 }}
        >
          Nos valeurs
        </h2>

        {/* Values list — overflow hidden clips the slide-in */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
