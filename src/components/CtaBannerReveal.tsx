'use client'

import CtaBanner from './CtaBanner'

export default function CtaBannerReveal() {
  return (
    <div className="sticky top-0 md:static" style={{ backgroundColor: '#F4EEE4' }}>
      <div style={{ borderRadius: '0 0 40px 40px', overflow: 'clip' }}>
        <CtaBanner />
      </div>
      {/* Mobile spacer: scroll room for footer reveal. 100svh is stable (doesn't change
          when browser chrome shows/hides), which prevents layout jank on scroll. */}
      <div
        className="md:hidden"
        style={{ height: 'max(calc(100svh - 65px), 300px)', backgroundColor: '#F4EEE4' }}
        aria-hidden
      />
    </div>
  )
}
