"use client"
import { CheckCircle, Wifi, FileText, Shield, Clock, Smartphone, ChevronLeft, ChevronRight, Zap, Users, Award } from "lucide-react"
import { useState } from "react"

const steps = [
  {
    number: "1",
    title: "Installation Rapide",
    description: "Recevez votre capteur PharmaSensor et installez-le en quelques minutes dans votre pharmacie, sans outils complexes.",
    icon: <CheckCircle className="h-5 w-5" />,
    details: [
      "Livraison sous 48h",
      "Installation en 30 minutes",
      "Configuration automatique",
      "Formation incluse"
    ]
  },
  {
    number: "2",
    title: "Surveillance Automatique",
    description: "Les données de température sont relevées en continu et transmises automatiquement à notre plateforme cloud sécurisée.",
    icon: <Wifi className="h-5 w-5" />,
    details: [
      "Mesures toutes les 5 minutes",
      "Transmission en temps réel",
      "Stockage sécurisé",
      "Sauvegarde automatique"
    ]
  },
  {
    number: "3",
    title: "Alertes & Rapports",
    description: "Recevez des alertes en temps réel en cas d'anomalie et accédez à des rapports de conformité prêts pour les inspections.",
    icon: <FileText className="h-5 w-5" />,
    details: [
      "Alertes instantanées",
      "Rapports conformes",
      "Export PDF/Excel",
      "Historique complet"
    ]
  }
]

export default function CommentCaMarchePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      if (currentStep < 3) {
        setCompletedSteps([...completedSteps, currentStep])
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetStepper = () => {
    setCurrentStep(1)
    setCompletedSteps([])
  }

  const isStepActive = (step: number) => currentStep === step
  const isStepCompleted = (step: number) => completedSteps.includes(step)
  const isStepSuccess = (step: number) => isStepCompleted(step) && currentStep > step

  return (
    <div className="w-full">
      {/* Hero Section avec Stepper FlyonUI */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-800 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Processus Simple
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Comment ça
              <br />
              <span className="text-green-600">marche ?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              PharmaSensor simplifie la surveillance de température en 3 étapes simples. 
              De l'installation à la conformité, nous vous accompagnons à chaque étape.
            </p>
          </div>

          {/* Stepper FlyonUI Interactif */}
          <div className="max-w-4xl mx-auto">
            {/* Stepper Nav */}
            <ul className="relative flex flex-row gap-x-2">
              {steps.map((step, idx) => {
                const stepNumber = idx + 1
                const isActive = isStepActive(stepNumber)
                const isCompleted = isStepCompleted(stepNumber)
                const isSuccess = isStepSuccess(stepNumber)
                
                return (
                  <li key={idx} className="group flex flex-1 shrink basis-0 items-center gap-x-2">
                    <span className="min-h-7.5 min-w-7.5 inline-flex items-center align-middle text-sm">
                      <span className={`flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium ${
                        isActive ? 'bg-green-100 text-green-600 shadow-sm' :
                        isSuccess ? 'bg-green-100 text-green-600 shadow-sm' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {isSuccess ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          step.icon
                        )}
                      </span>
                      <span className="text-gray-900 ms-2 max-sm:hidden font-medium">{step.title}</span>
                    </span>
                    <div className={`h-px w-full flex-1 group-last:hidden ${
                      isSuccess ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                  </li>
                )
              })}
            </ul>
            {/* End Stepper Nav */}

            {/* Stepper Content */}
            <div className="mt-8">
              {/* First Content */}
              <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Installation Rapide</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Recevez votre capteur PharmaSensor et installez-le en quelques minutes dans votre pharmacie, sans outils complexes.
                  </p>
                  <ul className="space-y-3">
                    {steps[0].details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End First Content */}

              {/* Second Content */}
              <div style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                      <Wifi className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Surveillance Automatique</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Les données de température sont relevées en continu et transmises automatiquement à notre plateforme cloud sécurisée.
                  </p>
                  <ul className="space-y-3">
                    {steps[1].details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End Second Content */}

              {/* Third Content */}
              <div style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full mr-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Alertes & Rapports</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Recevez des alertes en temps réel en cas d'anomalie et accédez à des rapports de conformité prêts pour les inspections.
                  </p>
                  <ul className="space-y-3">
                    {steps[2].details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End Third Content */}

              {/* Final Content */}
              <div style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                <div className="bg-green-50 rounded-xl border border-green-200 p-8 shadow-lg text-center">
                  <div className="bg-green-100 text-green-600 p-4 rounded-full mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Processus Terminé !</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Vous avez maintenant une vue d'ensemble complète du processus PharmaSensor. 
                    Prêt à sécuriser votre pharmacie ?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Commencer maintenant
                    </a>
                    <a
                      href="/tarification"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                    >
                      Voir les tarifs
                    </a>
                  </div>
                </div>
              </div>
              {/* End Final Content */}

              {/* Button Group */}
              <div className="mt-8 flex items-center justify-between gap-x-4">
                <button 
                  type="button" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Précédent
                </button>
                
                {currentStep < 4 ? (
                  <button 
                    type="button" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    onClick={nextStep}
                  >
                    Suivant
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <button 
                    type="button" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    onClick={resetStepper}
                  >
                    Recommencer
                  </button>
                )}
              </div>
              {/* End Button Group */}
            </div>
            {/* End Stepper Content */}
          </div>
          {/* End Stepper */}
        </div>
      </section>

      {/* Points Clés Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Pourquoi PharmaSensor est Différent</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez ce qui rend notre solution unique dans le marché de la surveillance de température.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Côté gauche - Statistiques */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Installation Express</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">30</div>
                    <div className="text-sm text-gray-600">minutes max</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">0</div>
                    <div className="text-sm text-gray-600">outils requis</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sécurité Maximale</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">conforme</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">surveillance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Côté droit - Avantages uniques */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Capteurs Intelligents</h4>
                  <p className="text-gray-600 text-sm">Nos capteurs s'adaptent automatiquement à votre environnement et optimisent leur consommation d'énergie.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg flex-shrink-0">
                  <Wifi className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Connectivité Avancée</h4>
                  <p className="text-gray-600 text-sm">Technologie IoT de dernière génération avec transmission sécurisée et redondance automatique.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg flex-shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Rapports Intelligents</h4>
                  <p className="text-gray-600 text-sm">Génération automatique de rapports conformes avec analyse prédictive des tendances.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 p-2 rounded-lg flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Équipe Dédiée</h4>
                  <p className="text-gray-600 text-sm">Experts pharmaceutiques spécialisés dans la conformité et la surveillance de température.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-green-600">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <Award className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à Sécuriser Votre Pharmacie ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines de pharmacies qui font confiance à PharmaSensor pour leur surveillance de température.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Demander un devis
            </a>
            <a
              href="/fonctionnalites"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Découvrir les fonctionnalités
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 