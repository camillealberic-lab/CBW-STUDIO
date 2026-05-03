// This layout exists solely to export metadata for the /offres route.
// page.tsx must be 'use client' for the accordion interactivity, so metadata
// cannot live there — Next.js App Router requires metadata to be in a Server Component.
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos offres — CBW Studio.',
  description: 'Vitrine, Croissance ou Écosystème : choisissez l\'offre adaptée à votre ambition et démarrez votre transformation digitale avec CBW Studio.',
}

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
