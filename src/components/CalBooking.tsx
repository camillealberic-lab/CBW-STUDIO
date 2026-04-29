'use client'

import { openCal } from '@/lib/cal'

const FONT = 'var(--font-geologica), system-ui, sans-serif'

export default function CalBooking() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}>
      <button
        onClick={openCal}
        style={{
          fontFamily: FONT,
          fontSize: '16px',
          fontWeight: 400,
          padding: '17px 40px',
          borderRadius: '100px',
          border: 'none',
          backgroundColor: '#F6F5AE',
          color: '#1A1A17',
          cursor: 'pointer',
          lineHeight: 1,
        }}
      >
        Choisir un créneau
      </button>

      <p style={{ fontFamily: FONT, fontSize: '13px', color: 'rgba(26,26,23,0.4)', margin: 0, lineHeight: 1.6 }}>
        15 minutes · Sans engagement · Premier échange offert
      </p>
    </div>
  )
}
