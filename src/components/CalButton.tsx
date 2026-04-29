'use client'

import { openCal } from '@/lib/cal'

interface CalButtonProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function CalButton({ children, className, style }: CalButtonProps) {
  return (
    <button onClick={openCal} className={className} style={style}>
      {children}
    </button>
  )
}
