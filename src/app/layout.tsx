import type { Metadata } from "next";
import { Geologica, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CalInit from "@/components/CalInit";
import "./globals.css";

// Geologica is a variable font — we only declare the weights we actually use:
// 400 (normal text), 500 (medium), 600 (semibold via 700 interpolation), 700 (bold).
// Removed 300 (font-light) and 900 (font-black) — neither appears in the codebase.
const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Playfair Display is NOT a variable font — each weight × style is a separate file.
// Audit result: only italic 400 is rendered (every use is `font-playfair italic`).
// Removing normal style and weights 500/700/900 saves ~6 network requests.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "CBW Studio. — Architecte Digital",
  description:
    "Nous aidons les artisans et producteurs locaux à transformer leur savoir-faire en chiffre d'affaires grâce à des écosystèmes digitaux ultra-performants.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "CBW Studio.",
    title: "CBW Studio. — Architecte Digital",
    description:
      "Des écosystèmes digitaux haute performance pour artisans et producteurs locaux.",
    images: [{ url: "/hero-poster.webp", width: 1280, alt: "CBW Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBW Studio. — Architecte Digital",
    description: "Des écosystèmes digitaux haute performance pour artisans et producteurs locaux.",
    images: ["/hero-poster.webp"],
  },
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
        <CalInit />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
