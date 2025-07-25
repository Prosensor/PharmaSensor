import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ | PharmaSensor",
  description: "Trouvez rapidement des réponses à vos questions sur PharmaSensor, notre solution de surveillance de température pour pharmacies.",
}

export default function FAQPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-800 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Questions Fréquentes
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Questions
                <br />
                <span className="text-green-600">Fréquentes</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Trouvez rapidement des réponses à vos questions sur PharmaSensor. 
                Notre équipe est également disponible pour vous accompagner.
              </p>
            </div>
            
            {/* Search bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl py-16">
        {/* FAQ Categories */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Installation & Configuration */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation & Configuration</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Combien de temps dure l'installation ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    L'installation est réalisée par vous-même, c'est très simple et prend environ 10 minutes. 
                    Aucun besoin d'équipe technique : tout est guidé étape par étape, sans compétence particulière requise.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">L'installation nécessite-t-elle des travaux ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Non, aucune modification de votre infrastructure n'est nécessaire. Nos capteurs sont 
                    autonomes et se connectent via WiFi. L'installation est non-invasive et peut être 
                    réalisée pendant vos heures d'ouverture.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Comment configurer les alertes ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    La configuration des alertes se fait via notre interface web intuitive. Vous pouvez 
                    définir les seuils de température, choisir les destinataires (email, SMS) et personnaliser 
                    les messages d'alerte selon vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fonctionnalités & Performance */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fonctionnalités & Performance</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Quelle est la précision des capteurs ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Nos capteurs offrent une précision de ±0.3°C, ce qui dépasse largement les exigences 
                    réglementaires pour le secteur pharmaceutique.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Que se passe-t-il en cas de panne internet ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Nos capteurs disposent d'une mémoire locale qui stocke les données pendant 30 jours 
                    en cas de perte de connexion. Dès que la connexion est rétablie, toutes les données 
                    sont synchronisées automatiquement.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Puis-je accéder aux données depuis mon mobile ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Oui, notre interface web est entièrement responsive et optimisée pour mobile. 
                    Vous pouvez consulter vos données, recevoir des alertes et gérer votre système 
                    depuis n'importe quel appareil connecté.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarification & Engagement */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tarification & Engagement</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Y a-t-il des frais cachés ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Non, notre tarification est totalement transparente. Le prix annoncé inclut tout : 
                    Aide à l'installation, configuration, formation, support technique et mises à jour logicielles. 
                    Aucun frais supplémentaire.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Puis-je résilier à tout moment ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Oui, aucun engagement n'est requis. Vous pouvez résilier votre abonnement à tout moment 
                    avec un préavis de 30 jours. Nous récupérons le matériel gratuitement.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Proposez-vous un essai gratuit ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Oui, nous proposons un essai gratuit de 30 jours sans engagement. Vous pouvez tester 
                    notre solution complète et nous retourner le matériel si vous n'êtes pas satisfait.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conformité & Sécurité */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conformité & Sécurité</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Le système est-il conforme aux normes ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Oui, PharmaSensor respecte toutes les normes en vigueur : FDA, GMP, USP, et les 
                    directives européennes. Nos capteurs sont certifiés et nos rapports sont acceptés 
                    par les autorités de contrôle.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Mes données sont-elles sécurisées ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Absolument. Toutes les données sont chiffrées et stockées sur des serveurs sécurisés 
                    en France. Nous respectons le RGPD et nos certificats de sécurité sont disponibles 
                    sur demande.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Puis-je exporter mes données ?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Oui, vous pouvez exporter vos données à tout moment dans différents formats (PDF, Excel, CSV). 
                    Nous fournissons également une API pour l'intégration avec vos systèmes existants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vous ne trouvez pas votre réponse ?</h2>
              <p className="text-lg text-gray-600">
                Notre équipe d'experts est là pour vous aider. Contactez-nous et nous vous répondrons sous 24h.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                <p className="text-sm text-gray-600 mb-4">Lun-Ven 9h-18h</p>
                <Link href="tel:+33123456789" className="text-green-600 hover:text-green-800 font-medium">
                +33 3 87 53 53 53
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-4">Réponse sous 24h</p>
                <Link href="mailto:info@prosensor.com" className="text-green-600 hover:text-green-800 font-medium">
                   info@prosensor.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 