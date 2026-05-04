'use client'

// domAnimation is loaded statically (not dynamically) so that scroll-driven
// useTransform values in m.div style props are available on the first render.
// We still use LazyMotion + m.* to exclude unused features (drag, layout animations)
// and keep the bundle smaller than importing motion.* directly.
import { LazyMotion, domAnimation } from 'framer-motion'

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}
