'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PrimaryButton from './ui/PrimaryButton'
import OutlineCta from './ui/OutlineCta'

const WORDS = ['convertir.', 'performer.', 'dominer.', 'croître.']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // For users with prefers-reduced-motion, skip the RAF-based reverse loop —
    // manually decrementing currentTime at 60fps is CPU-heavy on lower-end devices
    // and disorienting for vestibular disorders.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.loop = true
      return
    }

    let rafId: number
    let lastTime: number | null = null

    const playReverse = (now: number) => {
      if (lastTime !== null) {
        const delta = (now - lastTime) / 1000
        video.currentTime = Math.max(0, video.currentTime - delta)
        if (video.currentTime <= 0) {
          lastTime = null
          video.play()
          return
        }
      }
      lastTime = now
      rafId = requestAnimationFrame(playReverse)
    }

    const handleEnded = () => {
      lastTime = null
      rafId = requestAnimationFrame(playReverse)
    }

    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('ended', handleEnded)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100vh', background: '#0A0A0A' }}
    >
      {/* Video background */}
      {/* poster prevents a flash of black before the first video frame is decoded */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        poster="/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.55 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay bottom → top for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.1) 100%)',
        }}
      />

      <div className="relative z-10" style={{ height: '88px', flexShrink: 0 }} />

      <div
        className="relative z-10 flex-1 flex flex-col justify-end px-mob mob-hero-pb"
        style={{ padding: '0 50px 5vh' }}
      >
        <h1
          className="text-creme font-bold leading-[1.05] mb-2 md:mb-3 text-left"
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
          <PrimaryButton>Commencer un projet</PrimaryButton>
          <OutlineCta href="/offres">Voir nos offres</OutlineCta>
        </div>
      </div>
    </section>
  )
}
