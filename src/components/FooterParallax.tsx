'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function FooterParallax({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const [footerH, setFooterH] = useState(380)

  useLayoutEffect(() => {
    if (wrapperRef.current) setFooterH(wrapperRef.current.offsetHeight)
  }, [])

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ['start end', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [150, 0])

  return (
    <>
      <div ref={spacerRef} style={{ height: footerH, backgroundColor: '#F4EEE4' }} aria-hidden />

      <div className="fixed bottom-0 left-0 right-0" style={{ zIndex: 0, backgroundColor: '#F4EEE4' }}>
        <motion.div ref={wrapperRef} style={{ y, backgroundColor: '#F4EEE4' }}>
          {children}
        </motion.div>
      </div>
    </>
  )
}
