'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FONT } from '@/lib/fonts'

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

// Total pixel width of all cards laid side-by-side (including gaps between them)
const TOTAL_W = PROJECTS.length * CARD_W + (PROJECTS.length - 1) * GAP

// Default scroll distance based on a 1512px viewport (used as SSR/initial fallback).
// Updated reactively via ResizeObserver once the component mounts.
const DEFAULT_SCROLL_DIST = Math.max(0, TOTAL_W + PL * 2 - 1512)

// Next.js <Image fill> handles position/inset/width/height automatically.
// We only add the visual treatment via style prop.
const IMG_STYLE = {
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
  const trackRef = useRef<HTMLDivElement>(null)
  const mobileImgRefs = useRef<(HTMLDivElement | null)[]>([])

  // scrollDist must reflect the actual viewport width, not a magic constant.
  // We update it via ResizeObserver so it stays correct on resize and on all screen sizes.
  const [scrollDist, setScrollDist] = useState(DEFAULT_SCROLL_DIST)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const update = () => {
      setScrollDist(Math.max(0, TOTAL_W + PL - el.offsetWidth))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Desktop: horizontal translation — driven by the dynamic scrollDist
  const x = useTransform(scrollYProgress, [0, 0.08, 1], [0, 0, -scrollDist])

  // Mobile: IntersectionObserver — each image fades+slides in as it enters viewport
  useEffect(() => {
    const observers = mobileImgRefs.current.map((el) => {
      if (!el) return null
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            obs.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <div
      ref={containerRef}
      id="projets"
      className="bg-creme mob-height-auto"
      style={{
        height: `calc(100vh + ${scrollDist}px)`,
        borderRadius: '40px 40px 0 0',
      }}
    >
      {/* Sticky container — desktop: 100vh, mobile: auto (text only) */}
      <div
        className="md:sticky md:top-0 overflow-hidden flex flex-col bg-creme md:h-screen"
      >
        {/* Text header */}
        <div
          className="px-mob pr-0-mob"
          style={{ paddingTop: '110px', paddingBottom: '20px', flexShrink: 0 }}
        >
          <p
            className="font-medium leading-tight indent-right-401"
            style={{
              fontFamily: FONT,
              fontSize: '35px',
              color: '#1A1A17',
              marginBottom: 0,
            }}
          >
            Nous aidons les artisans et producteurs locaux
          </p>
          <p
            className="font-medium leading-tight desk-ml-50 mob-mt-16"
            style={{
              fontFamily: FONT,
              fontSize: '35px',
              color: '#1A1A17',
              marginTop: 0,
            }}
          >
            à transformer leur savoir-faire en chiffre d&apos;affaires grâce à des
            écosystèmes digitaux haute performance.
          </p>
        </div>

        {/* ── DESKTOP: horizontal scroll ── */}
        <div ref={trackRef} className="hidden md:flex flex-1 items-center overflow-hidden">
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
                  <Image
                    src={project.img}
                    alt=""
                    fill
                    sizes="566px"
                    style={IMG_STYLE}
                  />
                  <div style={OVERLAY_STYLE}>
                    <p style={LABEL_STYLE}>{LABEL}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE: 3 images in normal flow, triggered by IntersectionObserver ── */}
      <div
        className="flex flex-col md:hidden bg-creme"
        style={{ padding: '32px 20px 100px', gap: 20 }}
      >
        {PROJECTS.slice(0, 3).map((project, i) => (
          <div
            key={project.id}
            ref={(el) => { mobileImgRefs.current[i] = el }}
            style={{
              width: '100%',
              aspectRatio: `${CARD_W} / ${CARD_H}`,
              borderRadius: CARD_RADIUS,
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'rgba(26,26,23,0.08)',
            }}
          >
            <Image
              src={project.img}
              alt=""
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), 566px"
              style={IMG_STYLE}
            />
            <div style={OVERLAY_STYLE}>
              <p style={LABEL_STYLE}>{LABEL}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
