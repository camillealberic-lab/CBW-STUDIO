'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const LABEL = 'Agence en lancement — 3 projets à tarif découverte disponibles.'

const PROJECTS = [
  { id: '01', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80' },
  { id: '02', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80' },
  { id: '03', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80' },
  { id: '04', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80' },
  { id: '05', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&q=80' },
  { id: '06', img: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=900&q=80' },
]

const CARD_W = 566
const CARD_H = 360
const CARD_RADIUS = 13
const GAP = 24
const PL = 50
const VIEWPORT_W = 1512

const TOTAL_W = PROJECTS.length * CARD_W + (PROJECTS.length - 1) * GAP
const SCROLL_DIST = TOTAL_W + PL * 2 - VIEWPORT_W

const IMG_STYLE = {
  position: 'absolute' as const,
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  transform: 'scale(1.08)',
  filter: 'blur(22px) brightness(0.5)',
}

const OVERLAY_STYLE = {
  position: 'absolute' as const,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px',
}

const LABEL_STYLE = {
  fontFamily: FONT,
  fontSize: '15px',
  fontWeight: 500,
  color: '#F4EEE4',
  textAlign: 'center' as const,
  lineHeight: 1.5,
  margin: 0,
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Desktop: horizontal translation
  const x = useTransform(scrollYProgress, [0, 0.08, 1], [0, 0, -SCROLL_DIST])

  // Mobile: crossfade between cards via direct DOM updates
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const raw = v * (PROJECTS.length - 1)
      mobileCardRefs.current.forEach((el, i) => {
        if (!el) return
        const dist = Math.abs(i - raw)
        el.style.opacity = String(Math.max(0, 1 - dist))
        el.style.transform = `translateY(${(i - raw) * 8}%)`
      })
    })
  }, [scrollYProgress])

  return (
    <div
      ref={containerRef}
      id="projets"
      className="bg-creme"
      style={{
        height: `calc(100vh + ${SCROLL_DIST}px)`,
        borderRadius: '40px 40px 0 0',
      }}
    >
      <div
        className="sticky top-0 overflow-hidden flex flex-col bg-creme"
        style={{ height: '100vh' }}
      >
        {/* Text header — responsive */}
        <div
          className="px-mob"
          style={{ paddingTop: '110px', paddingBottom: '20px', flexShrink: 0 }}
        >
          <p
            className="font-medium leading-tight indent-right-401"
            style={{
              fontFamily: FONT,
              fontSize: 'clamp(20px, 2.3vw, 35px)',
              color: '#1A1A17',
              marginBottom: 0,
            }}
          >
            Nous aidons les artisans et producteurs locaux
          </p>
          <p
            className="font-medium leading-tight"
            style={{
              fontFamily: FONT,
              fontSize: 'clamp(20px, 2.3vw, 35px)',
              color: '#1A1A17',
              marginTop: 0,
              marginLeft: '50px',
            }}
          >
            à transformer leur savoir-faire en chiffre d&apos;affaires grâce à des
            écosystèmes digitaux haute performance.
          </p>
        </div>

        {/* ── DESKTOP: horizontal scroll ── */}
        <div className="hidden md:flex flex-1 items-center overflow-hidden">
          <motion.div
            className="flex items-start"
            style={{ x, paddingLeft: PL, gap: GAP }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="shrink-0 flex flex-col"
                style={{ width: CARD_W, gap: 14 }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: CARD_W,
                    height: CARD_H,
                    borderRadius: CARD_RADIUS,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(26,26,23,0.08)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.img} alt="" style={IMG_STYLE} />
                  <div style={OVERLAY_STYLE}>
                    <p style={LABEL_STYLE}>{LABEL}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── MOBILE: vertical crossfade between cards ── */}
        <div
          className="md:hidden flex-1 flex items-center"
          style={{ padding: '0 20px 36px' }}
        >
          <div
            style={{
              width: '100%',
              position: 'relative',
              aspectRatio: `${CARD_W} / ${CARD_H}`,
            }}
          >
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => { mobileCardRefs.current[i] = el }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: CARD_RADIUS,
                  overflow: 'hidden',
                  opacity: i === 0 ? 1 : 0,
                  backgroundColor: 'rgba(26,26,23,0.08)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.img} alt="" style={IMG_STYLE} />
                <div style={OVERLAY_STYLE}>
                  <p style={LABEL_STYLE}>{LABEL}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
