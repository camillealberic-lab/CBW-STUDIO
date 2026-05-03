'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import CalButton from './CalButton'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const NAV_LINKS = [
  { label: 'Projets', href: '/projets' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/a-propos' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [showMobileCta, setShowMobileCta] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const check = () => {
      const scrollY = window.scrollY
      const viewportH = window.innerHeight
      const docH = document.documentElement.scrollHeight

      const inHero = pathname === '/' && scrollY < viewportH * 0.85
      const inFooter = scrollY + viewportH > docH - 480

      setShowMobileCta(!inHero && !inFooter)
      setIsPastHero(!inHero)
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [pathname])

  return (
    <>
      {/* ── DESKTOP ── hidden on mobile ── */}
      <header
        className="hidden md:block fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{
          height: '100px',
          mixBlendMode: isPastHero ? 'difference' : 'normal',
        }}
      >
        <div
          className="flex items-center h-full"
          style={{ paddingLeft: '50px', paddingRight: '390px' }}
        >
          <a
            href="/"
            className="font-bold leading-none pointer-events-auto"
            style={{
              fontFamily: FONT,
              fontSize: '30px',
              color: isPastHero ? '#ffffff' : '#F4EEE4',
              transition: 'color 0.3s ease',
            }}
          >
            CBW Studio.
          </a>

          <nav className="ml-auto flex items-center pointer-events-auto" style={{ gap: '35px' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`font-normal leading-none nav-link${pathname === href ? ' active' : ''}`}
                style={{
                  fontFamily: FONT,
                  fontSize: '16px',
                  color: isPastHero ? '#ffffff' : '#F4EEE4',
                  transition: 'color 0.3s ease',
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div
        className="hidden md:flex fixed top-0 right-0 z-50 items-center"
        style={{ height: '100px', paddingRight: '50px' }}
      >
        <CalButton
          className="bg-jaune text-noir font-normal rounded-full leading-none btn-primary"
          style={{ fontFamily: FONT, fontSize: '16px', padding: '17px 32px', border: 'none' }}
        >
          Commencer un projet
        </CalButton>
      </div>

      {/* ── MOBILE HEADER ── */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-50"
        style={{
          height: '64px',
          mixBlendMode: isPastHero ? 'difference' : 'normal',
        }}
      >
        <div
          className="flex items-center justify-between h-full"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <a
            href="/"
            className="font-bold leading-none"
            style={{
              fontFamily: FONT,
              fontSize: '22px',
              color: isPastHero ? '#ffffff' : '#F4EEE4',
              transition: 'color 0.3s ease',
            }}
          >
            CBW Studio.
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            {[
              open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
              null,
              open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
            ].map((transform, i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '1.5px',
                  background: isPastHero ? '#ffffff' : '#F4EEE4',
                  transformOrigin: 'center',
                  ...(transform !== null ? { transform } : {}),
                  opacity: i === 1 && open ? 0 : 1,
                  transition: i === 1 ? 'opacity 0.2s ease, background 0.3s ease' : 'transform 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ backgroundColor: '#1A1A17' }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Centered block, text left-aligned */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '36px', width: '72vw', maxWidth: '300px' }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-bold leading-none"
                  style={{
                    fontFamily: FONT,
                    fontSize: 'clamp(2.25rem, 10vw, 3.25rem)',
                    color: '#F4EEE4',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.07 }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE BOTTOM CTA — scroll-driven visibility ── */}
      <AnimatePresence>
        {showMobileCta && (
          <motion.div
            className="md:hidden fixed z-50"
            style={{ bottom: '24px', right: '20px' }}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <CalButton
              className="bg-jaune text-noir font-normal rounded-full leading-none btn-primary"
              style={{
                fontFamily: FONT,
                fontSize: '15px',
                padding: '15px 28px',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
            >
              Commencer un projet
            </CalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
