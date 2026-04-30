'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { openCal } from '@/lib/cal'

const WORDS = ['convertir.', 'performer.', 'dominer.', 'croître.']

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      className="bg-noir flex flex-col"
      style={{ height: '100vh' }}
    >
      <div style={{ height: '88px', flexShrink: 0 }} />

      <div
        className="flex-1 flex flex-col justify-end px-mob"
        style={{ padding: '0 50px 10vh' }}
      >
        <h1
          className="text-creme font-bold leading-[1.05] mb-4 md:mb-8 text-left"
          style={{
            fontFamily: 'var(--font-geologica), system-ui, sans-serif',
            fontSize: 'clamp(3.125rem, 7vw, 5.625rem)',
          }}
        >
          Des sites conçus pour
          <br />
          <span className="inline-flex items-baseline overflow-hidden" style={{ height: 'calc(1.15em + 20px)', paddingLeft: '4px', paddingRight: '8px' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-100%' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-playfair italic inline-block text-jaune"
              >
                {WORDS[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <div className="flex gap-3 flex-wrap justify-start">
          <button
            onClick={openCal}
            className="bg-jaune text-noir font-normal rounded-full leading-none btn-primary"
            style={{
              fontFamily: 'var(--font-geologica), system-ui, sans-serif',
              fontSize: '16px',
              padding: '17px 32px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Commencer un projet
          </button>
          <a
            href="/offres"
            className="font-normal rounded-full leading-none btn-outline"
            style={{
              fontFamily: 'var(--font-geologica), system-ui, sans-serif',
              fontSize: '16px',
              padding: '17px 32px',
              background: 'transparent',
              boxShadow: 'inset 0 0 0 3px #F6F5AE',
              color: '#F6F5AE',
            }}
          >
            Voir nos offres
          </a>
        </div>
      </div>
    </section>
  )
}
