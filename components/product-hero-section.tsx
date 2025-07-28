import Image from "next/image"
import Link from "next/link"

export default function ProductHeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-pulse delay-500" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-white text-sm font-medium shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Solution Certifiée
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-green-600">
                  Notre
                </span>
                <br />
                <span className="text-gray-900">Solution</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Découvrez notre système de surveillance de température intelligent, 
                conçu spécifiquement pour les pharmacies et leurs exigences strictes.
              </p>
            </div>
            
            {/* Features list */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">Surveillance 24h/24 et 7j/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">Alertes instantanées par SMS/Email</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">Connectivité sans fil</span>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-700"
              >
                Demander un Devis
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/fonctionnalites"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-200 text-green-700 font-semibold rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                Voir les Fonctionnalités
              </Link>
            </div>
          </div>
          
          {/* Right side - Product showcase */}
          <div className="relative">
            <div className="relative h-[500px] w-full max-w-md mx-auto">
              {/* Main product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <Image
                    src="/Capture d'écran 2025-07-25 105515.png"
                    alt="Sonde de température PharmaSensor"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating status cards */}
              <div className="absolute top-8 right-0 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="text-sm text-gray-500">Connecté</div>
                    <div className="font-semibold text-green-600">Sans fil</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-0 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2.8°C</div>
                  <div className="text-sm text-gray-500">Température actuelle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">99.9%</div>
            <div className="text-sm text-gray-600">Fiabilité</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-sm text-gray-600">Surveillance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">500+</div>
            <div className="text-sm text-gray-600">Pharmacies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">5 ans</div>
            <div className="text-sm text-gray-600">Garantie</div>
          </div>
        </div>
      </div>
    </section>
  )
} 