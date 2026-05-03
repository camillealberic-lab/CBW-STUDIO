'use client'

import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { openCal } from '@/lib/cal'

// PrimaryButton = the canonical jaune CTA that opens Cal.com.
// forwardRef makes it composable with Framer Motion: motion(PrimaryButton).
type Props = Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'type'> & {
  size?: 'default' | 'sm'
}

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, size = 'default', style, className, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={openCal}
      className={`bg-jaune text-noir font-normal rounded-full leading-none btn-primary ${className ?? ''}`.trim()}
      style={{
        fontSize: size === 'sm' ? '15px' : '16px',
        padding: size === 'sm' ? '15px 28px' : '17px 32px',
        border: 'none',
        cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  )
)

PrimaryButton.displayName = 'PrimaryButton'
export default PrimaryButton
