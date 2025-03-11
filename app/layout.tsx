import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/site-header"
import Footer from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

// Métadonnées SEO globales
export const metadata: Metadata = {
  title: {
    default: "PharmaSensor | Surveillance de température pour pharmacies",
    template: "%s | PharmaSensor",
  },
  description:
    "Solution de surveillance de température pour le secteur pharmaceutique. Protégez vos produits sensibles avec des alertes en temps réel et des rapports conformes aux normes.",
  keywords: [
    "surveillance température pharmacie",
    "capteurs température médicaments",
    "conformité température pharmaceutique",
    "monitoring température",
    "PharmaSensor",
  ],
  authors: [{ name: "PharmaSensor" }],
  creator: "PharmaSensor",
  publisher: "PharmaSensor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.pharmasensor.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "PharmaSensor | Surveillance de température pour pharmacies",
    description:
      "Solution de surveillance de température pour le secteur pharmaceutique. Protégez vos produits sensibles avec des alertes en temps réel.",
    url: "https://www.pharmasensor.com",
    siteName: "PharmaSensor",
    images: [
      {
        url: "https://www.pharmasensor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PharmaSensor - Solution de surveillance de température",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PharmaSensor | Surveillance de température pour pharmacies",
    description:
      "Solution de surveillance de température pour le secteur pharmaceutique. Protégez vos produits sensibles avec des alertes en temps réel.",
    images: ["https://www.pharmasensor.com/twitter-image.jpg"],
    creator: "@pharmasensor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}

