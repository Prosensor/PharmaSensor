import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/run-section"
import FAQSection from "@/components/key-features-section"
import PricingSection from "@/components/download-section"
import ContactSection from "@/components/demo-section"
import type { Metadata } from "next"
import AnimatedBeamSection from "@/components/animated-beam-demo"
import HowItWorksSection from "@/components/how-it-works-section"


export const metadata: Metadata = {
  title: "PharmaSensor – Enregistreur de température pour pharmacies",
  description:
    "PharmaSensor est la solution Prosensor d’enregistrement et de surveillance de température pour pharmacies et armoires pharmaceutiques, avec alertes en temps réel et rapports conformes aux normes.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ContactSection />
    </>
  )
}

