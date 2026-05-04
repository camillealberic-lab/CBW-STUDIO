import type { Metadata } from "next";
import { Geologica, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CalInit from "@/components/CalInit";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Playfair Display: only italic 400 is rendered in the codebase.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  display: "swap",
});

const SITE_URL = "https://cbw-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CBW Studio. — Architecte Digital",
    template: "%s | CBW Studio.",
  },
  description:
    "Nous aidons les artisans et producteurs locaux à transformer leur savoir-faire en chiffre d'affaires grâce à des écosystèmes digitaux ultra-performants.",
  authors: [{ name: "CBW Studio" }],
  creator: "CBW Studio",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "CBW Studio.",
    title: "CBW Studio. — Architecte Digital",
    description:
      "Des écosystèmes digitaux haute performance pour artisans et producteurs locaux.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "CBW Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBW Studio. — Architecte Digital",
    description: "Des écosystèmes digitaux haute performance pour artisans et producteurs locaux.",
    images: ["/og-image.webp"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CBW Studio",
  url: SITE_URL,
  description:
    "Agence digitale spécialisée dans la création d'écosystèmes digitaux haute performance pour artisans et producteurs locaux.",
  founder: { "@type": "Person", name: "Camille" },
  serviceType: ["Web Design", "Développement Web", "SEO", "Stratégie Digitale"],
  areaServed: "FR",
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geologica.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* WCAG 2.4.1 — Bypass Blocks: skip-to-content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-jaune focus:text-noir focus:px-4 focus:py-2 focus:rounded-full focus:font-medium"
        >
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <CalInit />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
