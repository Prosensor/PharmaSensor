import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedBeamSection from "@/components/animated-beam-demo"

export const metadata: Metadata = {
  title: "Fonctionnalités | PharmaSensor",
  description: "Découvrez toutes les fonctionnalités de PharmaSensor, notre solution complète de surveillance de température pour le secteur pharmaceutique.",
}

export default function FonctionnalitesPage() {
  return (
    <div className="w-full pt-24 pb-16 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
              Fonctionnalités Avancées
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Fonctionnalités PharmaSensor</h1>
            <p className="text-xl text-gray-600">
              Découvrez comment notre solution complète répond aux exigences strictes du secteur pharmaceutique avec des fonctionnalités innovantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
              >
                Demander une démo
              </Link>
              <Link
                href="/tarification"
                className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-700 shadow-sm transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-1"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/image.png"
                alt="Fonctionnalités PharmaSensor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100">
                      <span className="text-xs font-medium text-green-800">Pro</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium">Solution complète de surveillance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Advanced Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Fonctionnalités Avancées</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PharmaSensor va au-delà de la simple surveillance de température avec des fonctionnalités avancées pour optimiser votre conformité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advanced Feature 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Cartographie Thermique</h3>
                <p className="text-gray-600 mb-4">
                  Identifiez les zones à risque dans vos espaces de stockage grâce à notre technologie de cartographie thermique.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Visualisation en 3D des gradients de température</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Identification des points chauds et froids</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Optimisation du placement des produits</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Cartographie thermique"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Feature 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Analyse Prédictive</h3>
                <p className="text-gray-600 mb-4">
                  Anticipez les problèmes avant qu'ils ne surviennent grâce à notre technologie d'analyse prédictive basée sur l'IA.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Détection précoce des anomalies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Prévision des tendances de température</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Recommandations d'actions préventives</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Analyse prédictive"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Feature 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Gestion des Stocks Intégrée</h3>
                <p className="text-gray-600 mb-4">
                  Associez vos données de température à votre inventaire pour une gestion optimale de vos produits sensibles.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Suivi des dates de péremption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Historique des conditions de stockage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Intégration avec votre logiciel de gestion</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Gestion des stocks intégrée"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Feature 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Conformité Réglementaire</h3>
                <p className="text-gray-600 mb-4">
                  Assurez votre conformité aux normes pharmaceutiques avec nos outils dédiés.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Rapports conformes BPD, BPF, FDA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Traçabilité complète des données</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Signatures électroniques conformes</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Conformité réglementaire"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Application Mobile</h2>
                <p className="text-gray-600 mb-4">
                  Surveillez vos équipements où que vous soyez grâce à notre application mobile intuitive et puissante.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-medium text-green-800">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Notifications push en temps réel</span>
                      <p className="text-sm text-gray-600">Recevez des alertes instantanées sur votre smartphone</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-medium text-green-800">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Tableau de bord complet</span>
                      <p className="text-sm text-gray-600">Accédez à toutes vos données depuis votre mobile</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-medium text-green-800">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Gestion des alertes</span>
                      <p className="text-sm text-gray-600">Accusez réception et gérez les incidents en déplacement</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-medium text-green-800">4</span>
                    </div>
                    <div>
                      <span className="font-medium">Mode hors ligne</span>
                      <p className="text-sm text-gray-600">Consultez les données même sans connexion internet</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <div className="flex space-x-4">
                    <Link href="#" className="flex items-center justify-center rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                      </svg>
                      App Store
                    </Link>
                    <Link href="#" className="flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition-colors">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Google Play
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/image.png"
                  alt="Application mobile PharmaSensor"
                  fill
                  className="object-contain"
                />
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
                  Demander une démo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
