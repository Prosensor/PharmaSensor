import Header from "@/components/site-header"
import  HeroSection  from "@/components/hero-section"
import  FeaturesSection  from "@/components/features-section"
import TestimonialsSection from "@/components/run-section"
import FAQSection from "@/components/key-features-section"
import PricingSection from "@/components/download-section"
import ContactSection from "@/components/demo-section"
import Footer from "@/components/site-footer"
import AnimatedBeamDemo from "@/components/animated-beam-demo"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedBeamDemo />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

