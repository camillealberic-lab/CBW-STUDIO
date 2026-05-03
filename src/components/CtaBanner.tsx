'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { openCal } from '@/lib/cal'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

export default function CtaBanner() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section
      ref={ref}
      className="bg-noir text-center pt-4 pb-[140px] px-[25px] md:pt-[120px] md:px-[50px]"
      style={{ borderTop: '1px solid rgba(240,234,224,0.07)' }}
    >
      <div className="flex flex-col items-center gap-4 md:gap-10 max-w-4xl mx-auto">

        <motion.p
          className="hidden md:block font-playfair italic leading-none"
          style={{ fontSize: '18px', color: '#F4EEE4' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Besoin d&apos;un nouveau site ?
        </motion.p>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            className="font-playfair italic leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#F4EEE4' }}
            initial={{ y: '105%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            Commence aujourd&apos;hui
          </motion.h2>
        </div>

        <motion.button
          onClick={openCal}
          className="bg-jaune text-noir font-normal rounded-full leading-none btn-primary"
          style={{
            fontFamily: FONT,
            fontSize: '16px',
            padding: '17px 32px',
            border: 'none',
            cursor: 'pointer',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          Contactez-nous
        </motion.button>
      </div>
    </section>
  )
}
