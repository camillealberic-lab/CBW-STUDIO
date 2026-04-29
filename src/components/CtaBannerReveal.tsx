'use client'

import { useRef, useEffect } from 'react'
import { useScroll, useMotionValue, motion } from 'framer-motion'
import CtaBanner from './CtaBanner'

export default function CtaBannerReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const marginX = useMotionValue(0)

  useEffect(() => {
    // Cached layout values — recomputed on resize
    let animStart = 0
    let animEnd = 1

    const measure = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const viewportH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      // Start: section top is 1% viewport height above the viewport top
      animStart = window.scrollY + rect.top - viewportH * 0.01
      // End: maximum scroll position (footer fully revealed)
      animEnd = docH - viewportH
    }

    const update = (currentScrollY: number) => {
      const range = animEnd - animStart
      if (range <= 0) return
      const progress = Math.max(0, Math.min(1, (currentScrollY - animStart) / range))
      marginX.set(progress * 20)
    }

    measure()
    const unsubscribe = scrollY.on('change', update)
    window.addEventListener('resize', measure)

    return () => {
      unsubscribe()
      window.removeEventListener('resize', measure)
    }
  }, [scrollY, marginX])

  return (
    <div ref={ref} style={{ backgroundColor: '#F4EEE4' }}>
      <motion.div
        style={{
          marginLeft: marginX,
          marginRight: marginX,
          borderRadius: '0 0 40px 40px',
          overflow: 'clip',
        }}
      >
        <CtaBanner />
      </motion.div>
    </div>
  )
}
