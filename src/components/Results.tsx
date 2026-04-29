'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const GROUPS = [
  {
    label: 'Optimisé pour convertir.',
    words: ['Taux de conversion.', 'Entonnoir.', 'A/B Testing.', 'CTA.'],
  },
  {
    label: 'Performance et rapidité.',
    words: ['Core Web Vitals.', 'PageSpeed.', 'LCP.', 'Lazy loading.'],
  },
  {
    label: 'SEO intégré.',
    words: ['GEO.', 'Schema.org.', 'Sémantique.', 'Indexation.'],
  },
]

const FLAT        = GROUPS.flatMap(g => g.words)
const TOTAL       = FLAT.length              // 12
const GPG         = GROUPS[0].words.length   // 4
const ITEM_H      = 72
const SCROLL_DIST = (TOTAL - 1) * 150        // 1650px

// Lines between groups — [3.5, 7.5]
const DIVIDERS = [1, 2].map(g => g * GPG - 0.5)

// Tight center band — edges fade in/out over 18% leaving ~4 words visible
const MASK = 'linear-gradient(to bottom, transparent 0%, transparent 18%, black 50%, transparent 82%, transparent 100%)'

export default function Results() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordEls      = useRef<(HTMLDivElement | null)[]>([])
  const lineEls      = useRef<(HTMLDivElement | null)[]>([])
  const [activeGroup, setActiveGroup] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    let lastGroup = 0

    return scrollYProgress.on('change', (v) => {
      const raw = v * (TOTAL - 1)

      // Direct DOM — 60 fps, no React re-render, no spring
      wordEls.current.forEach((el, i) => {
        if (!el) return
        const yOffset = (i - raw) * ITEM_H
        // Words below center slide in from the right
        const xOffset = yOffset > 0 ? Math.min(yOffset * 0.3, 70) : 0
        el.style.transform = `translateY(calc(-50% + ${yOffset}px)) translateX(${xOffset}px)`
      })
      lineEls.current.forEach((el, i) => {
        if (el) el.style.transform = `translateY(calc(-50% + ${(DIVIDERS[i] - raw) * ITEM_H}px))`
      })

      // Left panel update only on group change
      const word  = Math.min(TOTAL - 1, Math.max(0, Math.round(raw)))
      const group = Math.floor(word / GPG)
      if (group !== lastGroup) {
        lastGroup = group
        setActiveGroup(group)
      }
    })
  }, [scrollYProgress])

  return (
    <div
      ref={containerRef}
      className="bg-creme"
      style={{ height: `calc(100vh + ${SCROLL_DIST}px)` }}
    >
      <div
        className="sticky top-0 flex bg-creme"
        style={{ height: '100vh', padding: '0 50px', gap: '72px' }}
      >

        {/* Left column */}
        <div
          className="flex flex-col justify-center shrink-0"
          style={{ width: '401px', paddingRight: '28px' }}
        >
          {/* clip-path instead of overflow:hidden — extends right boundary for italic overhang
              without reducing the text content width */}
          <div style={{ clipPath: 'inset(-8px -32px -28px 0)' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={activeGroup}
                className="font-playfair italic inline-block"
                style={{
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  color: '#1A1A17',
                  lineHeight: 1.05,
                }}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-110%', opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {GROUPS[activeGroup].label}
              </motion.span>
            </AnimatePresence>
          </div>

          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: FONT,
              fontSize: '14px',
              color: '#1A1A17',
              marginTop: '20px',
              marginBottom: '36px',
            }}
          >
            <div style={{ overflow: 'hidden', height: '1.25em' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeGroup}
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-110%' }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  {activeGroup + 1}
                </motion.span>
              </AnimatePresence>
            </div>
            <span>—</span>
            <span>{GROUPS.length}</span>
          </div>

          <p
            className="leading-relaxed"
            style={{
              fontFamily: FONT,
              fontSize: '14px',
              color: 'rgba(26,26,23,0.5)',
              maxWidth: '270px',
            }}
          >
            Des fondations techniques solides pour une présence digitale qui travaille pour vous.
          </p>
        </div>

        {/* Right column — gradient-masked word carousel */}
        <div
          className="flex-1 relative overflow-hidden"
          style={{
            maskImage: MASK,
            WebkitMaskImage: MASK,
          }}
        >
          {/* Group divider lines */}
          {DIVIDERS.map((boundary, i) => (
            <div
              key={i}
              ref={el => { lineEls.current[i] = el }}
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: 1,
                background: 'rgba(26, 26, 23, 0.15)',
                transform: `translateY(calc(-50% + ${boundary * ITEM_H}px))`,
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* 12 words — DOM-driven */}
          {FLAT.map((word, i) => (
            <div
              key={`${word}-${i}`}
              ref={el => { wordEls.current[i] = el }}
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: ITEM_H,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 'calc(12% + 20px)',
                transform: `translateY(calc(-50% + ${i * ITEM_H}px))`,
                userSelect: 'none',
              }}
            >
              <span
                className="font-playfair italic"
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2.4rem)',
                  color: '#1A1A17',
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
