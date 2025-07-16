import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedBeamSection from "@/components/animated-beam-demo"
import HeroSection from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Fonctionnalités | PharmaSensor",
  description: "Découvrez toutes les fonctionnalités de PharmaSensor, notre solution complète de surveillance de température pour le secteur pharmaceutique.",
}

export default function FonctionnalitesPage() {
  return (
    <div className="w-full pb-16 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <HeroSection />

        <AnimatedBeamSection />

        {/* Core Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Fonctionnalités Principales</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PharmaSensor offre une suite complète de fonctionnalités pour assurer une surveillance optimale de vos équipements pharmaceutiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Surveillance en Temps Réel</h3>
              <p className="text-gray-600 mb-4">
                Suivez les données de température de tous vos équipements en temps réel avec des mises à jour automatiques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Actualisation des données toutes les 5 minutes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Visualisation sur tableau de bord intuitif</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Accès depuis n'importe quel appareil</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Système d'Alertes Avancé</h3>
              <p className="text-gray-600 mb-4">
                Recevez des notifications instantanées en cas de dépassement des seuils de température définis.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Alertes par SMS, email et appels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Seuils d'alerte personnalisables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Procédures d'escalade automatiques</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Rapports Automatisés</h3>
              <p className="text-gray-600 mb-4">
                Générez des rapports conformes aux exigences réglementaires pour vos audits et inspections.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Formats PDF, Excel et CSV</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Programmation automatique des rapports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Archivage sécurisé pendant 5 ans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Tableau de Bord Intuitif</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une interface utilisateur intuitive qui vous permet de visualiser toutes vos données en un coup d'œil.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 overflow-hidden">
            <div className="relative h-[500px] w-full rounded-lg border border-gray-200">
              <Image
                src="/image.png"
                alt="PharmaSensor Dashboard Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Vue d'ensemble</h4>
                <p className="text-sm text-gray-600">Visualisez l'état de tous vos capteurs sur une seule page</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Graphiques détaillés</h4>
                <p className="text-sm text-gray-600">Analysez les tendances avec des graphiques interactifs</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Gestion des alertes</h4>
                <p className="text-sm text-gray-600">Configurez et gérez vos alertes en quelques clics</p>
              </div>
            </div>
          </div>
        </div>

        

        

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Comparaison des Fonctionnalités</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les fonctionnalités disponibles dans chaque formule PharmaSensor.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-50">
                    <th className="py-4 px-6 text-left font-bold text-gray-700">Fonctionnalité</th>
                    <th className="py-4 px-6 text-center font-bold text-gray-700">Essentiel</th>
                    <th className="py-4 px-6 text-center font-bold text-gray-700">Professionnel</th>
                    <th className="py-4 px-6 text-center font-bold text-gray-700">Entreprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Surveillance en temps réel</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Alertes par email</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Alertes par SMS</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Alertes par appel téléphonique</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Rapports automatisés</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Cartographie thermique</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Analyse prédictive</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-medium">Intégration logiciel de gestion</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
              <Link href="/tarification" className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1">
                Voir tous les détails de tarification
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="scroll-mt-24">
          <div className="bg-green-600 rounded-xl p-8 text-white shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Prêt à découvrir PharmaSensor ?</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour une démonstration personnalisée et découvrez comment nos fonctionnalités peuvent répondre à vos besoins spécifiques.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                    placeholder="vous@entreprise.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message (facultatif)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                    placeholder="Décrivez vos besoins spécifiques..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Demander un devis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
