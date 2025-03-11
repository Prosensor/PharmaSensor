import  HeroSection  from "@/components/hero-section"
import  FeaturesSection  from "@/components/features-section"
import TestimonialsSection from "@/components/run-section"
import FAQSection from "@/components/key-features-section"
import PricingSection from "@/components/download-section"
import ContactSection from "@/components/demo-section"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"
import AnimatedBeamSection from "@/components/animated-beam-demo"


export const metadata: Metadata = {
  title: "Accueil | Surveillance de température pour pharmacies",
  description:
    "PharmaSensor offre des solutions de surveillance de température précises et fiables pour le secteur pharmaceutique. Découvrez nos capteurs IoT et notre plateforme cloud.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PharmaSensor",
          url: "https://www.pharmasensor.com",
          logo: "https://www.pharmasensor.com/logo.jpg",
          sameAs: [
            "https://www.facebook.com/pharmasensor",
            "https://www.twitter.com/pharmasensor",
            "https://www.linkedin.com/company/pharmasensor",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+33-1-23-45-67-89",
            contactType: "customer service",
            availableLanguage: ["French", "English"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Avenue de la Santé",
            addressLocality: "Paris",
            postalCode: "75001",
            addressCountry: "FR",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PharmaSensor Pro",
          image: "https://www.pharmasensor.com/product-image.jpg",
          description:
            "Système de surveillance de température pour le stockage pharmaceutique avec alertes en temps réel et rapports conformes aux normes.",
          brand: {
            "@type": "Brand",
            name: "PharmaSensor",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "599",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "89",
          },
        }}
      />
      <HeroSection />
      <AnimatedBeamSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <PricingSection />
      <ContactSection />
    </>
  )
}

