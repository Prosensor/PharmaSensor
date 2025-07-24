import Link from "next/link"

export default function PricingHeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-800 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Tarification Simple
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Des prix
                <br />
                <span className="text-green-600">transparents</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Une formule unique, des prix clairs. Pas de surprise, pas de frais cachés. 
                Juste une solution efficace pour votre pharmacie.
              </p>
            </div>
            
            {/* Key pricing info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">43€</div>
                <div className="text-sm text-gray-500">par mois</div>
                <div className="text-xs text-gray-400 mt-1">Formule de base</div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">Gratuit</div>
                <div className="text-sm text-gray-500">installation</div>
                <div className="text-xs text-gray-400 mt-1">Incluse</div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing-plans"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-700"
              >
                Voir les Détails
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-200 text-green-700 font-semibold rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
          
          {/* Right side - Visual pricing */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="text-center space-y-6">
                <div className="text-6xl font-bold text-green-600">43€</div>
                <div className="text-xl text-gray-600">par mois</div>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Routeur + Sonde</span>
                    <span className="text-green-600 font-semibold">Inclus</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Installation</span>
                    <span className="text-green-600 font-semibold">Gratuite</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Support</span>
                    <span className="text-green-600 font-semibold">24/7</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-700">Engagement</span>
                    <span className="text-green-600 font-semibold">Aucun</span>
                  </div>
                </div>
                
                <div className="pt-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                    </svg>
                    Essai gratuit 30 jours
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-200 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-200 rounded-full opacity-50" />
          </div>
        </div>
        
        {/* Bottom trust section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600">Pharmacies équipées</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">5 ans</div>
              <div className="text-sm text-gray-600">Garantie matériel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 