// OutlineCta = the jaune-border outline link (used on dark backgrounds).
// Always renders as a Next.js Link for client-side navigation.
import Link from 'next/link'

interface OutlineCtaProps {
  href: string
  children: React.ReactNode
  size?: 'default' | 'sm'
}

export default function OutlineCta({ href, children, size = 'default' }: OutlineCtaProps) {
  return (
    <Link
      href={href}
      className="font-normal rounded-full leading-none btn-outline"
      style={{
        display: 'inline-block',
        fontSize: size === 'sm' ? '15px' : '16px',
        padding: size === 'sm' ? '15px 28px' : '17px 32px',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 3px #F6F5AE',
        color: '#F6F5AE',
      }}
    >
      {children}
    </Link>
  )
}
