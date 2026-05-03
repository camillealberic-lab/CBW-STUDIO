'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { openCal } from '@/lib/cal'

const SERVICES = [
  { num: '1', title: 'Analyse marketing', href: '/services#analyse-marketing' },
  { num: '2', title: 'Design', href: '/services#design' },
  { num: '3', title: 'Développement', href: '/services#developpement' },
  { num: '4', title: 'Maintenance', href: '/services#maintenance' },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="bg-noir px-mob mob-services-padding"
      style={{ padding: '80px 50px 96px' }}
    >
      <div className="flex gap-20 col-mob pr-0-mob" style={{ paddingRight: '321px' }}>
        {/* Left: title */}
        <div className="col-321">
          <h2
            className="font-bold leading-none"
            style={{
              fontFamily: 'var(--font-geologica), system-ui, sans-serif',
              fontSize: '35px',
              color: '#F4EEE4',
            }}
          >
            Services
          </h2>
        </div>

        {/* Right: list + CTA */}
        <div className="flex-1 flex flex-col">
          <div style={{ borderTop: '1px solid rgba(244,238,228,0.1)' }}>
            {SERVICES.map((s, i) => (
              <a
                key={s.num}
                href={s.href}
                className="flex items-center justify-between py-6 outline-none"
                style={{ borderBottom: '1px solid rgba(244,238,228,0.1)' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(null)}
              >
                <div className="flex items-center gap-5">
                  {/* Circle — noir text on creme bg */}
                  <div
                    className="flex items-center justify-center rounded-full shrink-0 bg-creme"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <motion.span
                      className="font-semibold tabular-nums"
                      style={{ fontSize: '19px', color: '#1A1A17' }}
                      animate={{ opacity: hovered !== null && hovered !== i ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {s.num}
                    </motion.span>
                  </div>

                  {/* Title + underline sweep */}
                  <motion.span
                    className="font-normal relative inline-block"
                    style={{
                      fontFamily: 'var(--font-geologica), system-ui, sans-serif',
                      fontSize: '17px',
                      color: '#F4EEE4',
                    }}
                    animate={{ opacity: hovered !== null && hovered !== i ? 0.7 : 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {s.title}
                    <motion.span
                      className="absolute left-0 bg-[#F4EEE4]"
                      style={{
                        bottom: '-1px',
                        height: '1px',
                        width: '100%',
                        transformOrigin: 'left center',
                      }}
                      animate={{ scaleX: hovered === i ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.span>
                </div>

                {/* Arrow — visible only on hover */}
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <circle cx="13" cy="13" r="12" stroke="#F4EEE4" strokeWidth="1.5" />
                    <path
                      d="M10 13h6M13 10.5l2.5 2.5-2.5 2.5"
                      stroke="#F4EEE4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-3 mt-10 items-start">
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
              Contactez-nous
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
      </div>
    </section>
  )
}
