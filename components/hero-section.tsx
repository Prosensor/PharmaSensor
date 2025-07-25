import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-50" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-25 animate-pulse delay-500" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
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
                La surveillance de température
                <br />
                <span className="text-green-600">réinventée</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                PharmaSensor révolutionne la surveillance de température dans les pharmacies. 
                Alertes instantanées, conformité garantie, tranquillité assurée.
              </p>
            </div>
            
            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Surveillance continue</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-green-600">±0.3°C</div>
                <div className="text-sm text-gray-600">Précision extrême</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-green-600">Sans fil</div>
                <div className="text-sm text-gray-600">Connectivité</div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demande-devis"
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
                Découvrir les Fonctionnalités
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Conforme aux normes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Installation gratuite</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Product showcase */}
          <div className="relative">
            <div className="relative h-[600px] w-full max-w-lg mx-auto">
              {/* Main product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  <Image
                    src="/sondenew.png"
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
                    <div className="text-sm text-gray-500">Statut</div>
                    <div className="font-semibold text-green-600">Connecté</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-0 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
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
              
              <div className="absolute top-1/2 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">±0.3°C</div>
                  <div className="text-xs text-gray-500">Précision</div>
                </div>
              </div>
              
              {/* Connection lines */}
              <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-green-400 to-green-600 opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}