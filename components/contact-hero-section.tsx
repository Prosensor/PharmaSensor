import Link from "next/link"

export default function ContactHeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-800 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Direct
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Parlons de
                <br />
                <span className="text-green-600">votre projet</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Notre équipe d'experts est là pour vous accompagner dans la mise en place 
                de votre solution de surveillance de température.
              </p>
            </div>
            
            {/* Contact methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-sm text-gray-600">contact@pharmasensor.fr</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-sm text-gray-600">01 23 45 67 89</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-700"
              >
                Envoyer un Message
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-200 text-green-700 font-semibold rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                Demander une Démo
              </Link>
            </div>
          </div>
          
          {/* Right side - Contact card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">Réponse rapide</div>
                  <div className="text-green-600 font-semibold">Sous 24h</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">Devis personnalisé gratuit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">Installation sur site</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">Formation incluse</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">Support technique dédié</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Disponible</div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-600 font-semibold">Lun-Ven 9h-18h</span>
                    </div>
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
              <div className="text-2xl font-bold text-green-600">24h</div>
              <div className="text-sm text-gray-600">Délai de réponse</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Devis gratuits</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">5j</div>
              <div className="text-sm text-gray-600">Installation moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 