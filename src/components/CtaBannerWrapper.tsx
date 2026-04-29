'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

import CtaBanner from './CtaBanner'

export default function CtaBannerWrapper() {
  const { scrollYProgress } = useScroll()

  // As the footer rises (from 60% scroll onward), the CTA shrinks 20px per side
  const marginX = useTransform(scrollYProgress, [0.6, 1], [0, 20])

  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <motion.div
        style={{
          marginLeft: marginX,
          marginRight: marginX,
          borderRadius: '0 0 40px 40px',
          overflow: 'hidden',
        }}
      >
        <CtaBanner />
      </motion.div>
    </div>
  )
}
