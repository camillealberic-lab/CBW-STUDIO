'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { openCal } from '@/lib/cal'
import Navbar from '@/components/Navbar'
import CtaBannerReveal from '@/components/CtaBannerReveal'
import Footer from '@/components/Footer'
import FooterParallax from '@/components/FooterParallax'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

const OFFRES = [
  {
    id: 'vitrine',
    label: 'Essentiel',
    title: 'Vitrine',
    tagline: 'Pour établir votre présence.',
    price: 'À partir de 800 €',
    featured: false,
    features: [
      "Design sur-mesure (jusqu'à 5 pages)",
      'Développement responsive',
      'SEO technique de base',
      'Formulaire de contact',
      'Mise en ligne incluse',
    ],
  },
  {
    id: 'croissance',
    label: 'Recommandé',
    title: 'Croissance',
    tagline: 'Pour convertir et performer.',
    price: 'À partir de 2 000 €',
    featured: true,
    features: [
      'Tout de Vitrine, et bien plus',
      'Audit marketing complet',
      'SEO avancé (GEO, Schema.org, Core Web Vitals)',
      'Analytics & reporting mensuel',
      "Jusqu'à 15 pages + blog",
    ],
  },
  {
    id: 'ecosysteme',
    label: 'Premium',
    title: 'Écosystème',
    tagline: 'Pour dominer votre marché.',
    price: 'Sur devis',
    featured: false,
    features: [
      'Tout de Croissance, et bien plus',
      'Maintenance 12 mois incluse',
      'Stratégie SEO locale & internationale',
      'Accompagnement dédié mensuel',
      'Formation équipe incluse',
    ],
  },
]

const PROCESS = [
  {
    num: '1',
    title: 'Découverte',
    desc: "On commence par comprendre votre activité, vos objectifs et votre marché avant toute chose.",
  },
  {
    num: '2',
    title: 'Stratégie',
    desc: "Nous construisons une feuille de route claire — design, contenu, technique, référencement.",
  },
  {
    num: '3',
    title: 'Réalisation',
    desc: "Nos équipes design et développement travaillent en tandem pour livrer un résultat irréprochable.",
  },
  {
    num: '4',
    title: 'Lancement',
    desc: "Mise en ligne, suivi des performances et ajustements — nous restons présents après la livraison.",
  },
]

export default function OffresPage() {
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null)
  const [expandedProcess, setExpandedProcess] = useState<number | null>(null)

  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        {/* Hero — noir, compact */}
        <section className="bg-noir page-hero">
          <h1
            className="font-bold leading-[1.05]"
            style={{ fontFamily: FONT, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F4EEE4' }}
          >
            Choisissez votre niveau{' '}
            <span className="font-playfair italic text-jaune">d'ambition.</span>
          </h1>
        </section>

        {/* Offres — 3 cards */}
        <section id="offres" className="px-mob" style={{ padding: '96px 50px', backgroundColor: '#F4EEE4' }}>
          <div
            className="grid-1-mob"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              alignItems: 'stretch',
            }}
          >
            {OFFRES.map((offre) => (
              <div
                key={offre.id}
                style={{
                  borderRadius: '20px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: offre.featured ? '#1A1A17' : 'rgba(26,26,23,0.05)',
                  border: offre.featured ? 'none' : '1px solid rgba(26,26,23,0.08)',
                }}
              >
                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: offre.featured ? '#F6F5AE' : '#1A1A17',
                    marginBottom: '24px',
                  }}
                >
                  {offre.label}
                </p>

                <h2
                  style={{
                    fontFamily: FONT,
                    fontSize: '32px',
                    fontWeight: 700,
                    color: offre.featured ? '#F4EEE4' : '#1A1A17',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {offre.title}
                </h2>

                <p
                  className="font-playfair italic"
                  style={{
                    fontSize: '17px',
                    color: offre.featured ? '#F4EEE4' : '#1A1A17',
                    marginBottom: '36px',
                  }}
                >
                  {offre.tagline}
                </p>

                <div
                  style={{
                    flex: 1,
                    borderTop: `1px solid ${offre.featured ? 'rgba(244,238,228,0.12)' : 'rgba(26,26,23,0.1)'}`,
                    marginBottom: '36px',
                  }}
                >
                  {offre.features.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '14px 0',
                        borderBottom: `1px solid ${offre.featured ? 'rgba(244,238,228,0.08)' : 'rgba(26,26,23,0.07)'}`,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="8" cy="8" r="7" stroke={offre.featured ? '#F6F5AE' : '#1A1A17'} strokeWidth="1.2" strokeOpacity={offre.featured ? 1 : 0.35} />
                        <path d="M5 8l2 2 4-4" stroke={offre.featured ? '#F6F5AE' : '#1A1A17'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={offre.featured ? 1 : 0.5} />
                      </svg>
                      <span style={{ fontFamily: FONT, fontSize: '14px', color: offre.featured ? '#F4EEE4' : '#1A1A17', lineHeight: 1.5 }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontFamily: FONT, fontSize: '13px', color: offre.featured ? '#F4EEE4' : '#1A1A17', marginBottom: '16px' }}>
                    {offre.price}
                  </p>
                  <button
                    onClick={openCal}
                    className={`font-normal rounded-full leading-none${offre.featured ? ' btn-primary' : ' btn-outline'}`}
                    style={{
                      fontFamily: FONT,
                      fontSize: '15px',
                      padding: '15px 28px',
                      border: 'none',
                      cursor: 'pointer',
                      ...(offre.featured
                        ? { backgroundColor: '#F6F5AE', color: '#1A1A17' }
                        : { background: 'transparent', boxShadow: 'inset 0 0 0 1.5px rgba(26,26,23,0.25)', color: '#1A1A17' }),
                    }}
                  >
                    Commencer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comment ça marche — accordion, design Services homepage */}
        <section className="bg-noir px-mob" style={{ padding: '80px 50px 96px' }}>
          <div className="flex gap-20 col-mob pr-0-mob" style={{ paddingRight: '321px' }}>
            <div className="col-321">
              <h2
                className="font-bold leading-none"
                style={{ fontFamily: FONT, fontSize: '35px', color: '#F4EEE4' }}
              >
                Comment ça marche
              </h2>
            </div>

            <div className="flex-1 flex flex-col">
              <div style={{ borderTop: '1px solid rgba(244,238,228,0.1)' }}>
                {PROCESS.map((step, i) => {
                  const isExpanded = expandedProcess === i
                  const isHovered = hoveredProcess === i

                  return (
                    <div
                      key={step.num}
                      style={{ borderBottom: '1px solid rgba(244,238,228,0.1)' }}
                    >
                      {/* Row — clickable */}
                      <div
                        className="flex items-center justify-between py-6"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setExpandedProcess(isExpanded ? null : i)}
                        onMouseEnter={() => setHoveredProcess(i)}
                        onMouseLeave={() => setHoveredProcess(null)}
                      >
                        <div className="flex items-center gap-5">
                          <div
                            className="flex items-center justify-center rounded-full shrink-0 bg-creme"
                            style={{ width: '38px', height: '38px' }}
                          >
                            <motion.span
                              className="font-semibold tabular-nums"
                              style={{ fontSize: '19px', color: '#1A1A17' }}
                              animate={{ opacity: hoveredProcess !== null && !isHovered && !isExpanded ? 0 : 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {step.num}
                            </motion.span>
                          </div>

                          <motion.span
                            className="font-normal relative inline-block"
                            style={{ fontFamily: FONT, fontSize: '20px', color: '#F4EEE4' }}
                            animate={{ opacity: hoveredProcess !== null && !isHovered && !isExpanded ? 0.7 : 1 }}
                            transition={{ duration: 0.25 }}
                          >
                            {step.title}
                            <motion.span
                              className="absolute left-0 bg-[#F4EEE4]"
                              style={{ bottom: '-1px', height: '1px', width: '100%', transformOrigin: 'left center' }}
                              animate={{ scaleX: isHovered || isExpanded ? 1 : 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </motion.span>
                        </div>

                        <motion.div
                          animate={{
                            opacity: isHovered || isExpanded ? 1 : 0,
                            rotate: isExpanded ? 90 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <circle cx="13" cy="13" r="12" stroke="#F4EEE4" strokeWidth="1.5" />
                            <path d="M10 13h6M13 10.5l2.5 2.5-2.5 2.5" stroke="#F4EEE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Expandable description */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p
                              style={{
                                fontFamily: FONT,
                                fontSize: '14px',
                                color: '#F4EEE4',
                                lineHeight: 1.7,
                                paddingBottom: '24px',
                                paddingLeft: '58px',
                                margin: 0,
                              }}
                            >
                              {step.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <CtaBannerReveal />
      </div>
      <FooterParallax>
        <Footer />
      </FooterParallax>
    </div>
  )
}
