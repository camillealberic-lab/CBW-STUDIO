'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

import Results from './Results'
import CtaBanner from './CtaBanner'

export default function FooterRevealSection() {
  const { scrollYProgress } = useScroll()

  const marginX = useTransform(scrollYProgress, [0.90, 1], [0, 20])

  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <motion.div
        style={{
          marginLeft: marginX,
          marginRight: marginX,
          borderRadius: '0 0 40px 40px',
          overflow: 'clip',
        }}
      >
        <Results />
        <CtaBanner />
      </motion.div>
    </div>
  )
}
