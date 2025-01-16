import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SectionFonctionnalites } from "@/components/features-section"
import { SectionSpecifications } from "@/components/run-section"
import { SectionAvantagesConcrets } from "@/components/key-features-section"
import { SectionFormules } from "@/components/download-section"
import { SectionSeparation } from "@/components/faq-section"
import { DemoSection } from "@/components/demo-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SectionFonctionnalites />
        <SectionSpecifications />
        <SectionAvantagesConcrets />
        <SectionFormules />
        <SectionSeparation />
        <DemoSection />
      </main>
      <SiteFooter />
    </div>
  )
}

