import type { Metadata } from "next";
import { Geologica, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CalInit from "@/components/CalInit";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "CBW Studio. — Architecte Digital",
  description:
    "Nous aidons les artisans et producteurs locaux à transformer leur savoir-faire en chiffre d'affaires grâce à des écosystèmes digitaux ultra-performants.",

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
