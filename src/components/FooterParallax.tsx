'use client'

import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'

export default function FooterParallax({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const [footerH, setFooterH] = useState(380)
  const [isMobile, setIsMobile] = useState(false)
  const yMobile = useMotionValue(600)

  useLayoutEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768)
      if (wrapperRef.current) setFooterH(wrapperRef.current.offsetHeight)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    // Capture once — stable against browser-chrome show/hide changing window.innerHeight
    const viewportH = window.innerHeight
    const revealZone = Math.max(viewportH - 65, 300)

    const onScroll = () => {
      const docH = document.documentElement.scrollHeight
      const scrollY = window.scrollY
      const distFromBottom = docH - scrollY - viewportH
      const progress = Math.max(0, Math.min(1, 1 - distFromBottom / revealZone))
      yMobile.set(revealZone * (1 - progress))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile, yMobile])

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ['start end', 'end end'],
  })
  const yDesktop = useTransform(scrollYProgress, [0, 1], [150, 0])

  return (
    <>
      <div
        ref={spacerRef}
        style={{ height: isMobile ? 0 : footerH, backgroundColor: '#F4EEE4' }}
        aria-hidden
      />

      <div
        className="fixed left-0 right-0"
        style={
          isMobile
            ? { top: '65px', bottom: 0, zIndex: 20, backgroundColor: '#F4EEE4', overflowY: 'auto' }
            : { bottom: 0, zIndex: 0, backgroundColor: '#F4EEE4' }
        }
      >
        <motion.div
          ref={wrapperRef}
          style={{ y: isMobile ? yMobile : yDesktop, backgroundColor: '#F4EEE4' }}
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}
