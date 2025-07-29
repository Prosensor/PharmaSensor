import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Logos07Block from "@/components/logos-07/logos-07";

export default function FeaturesSection() {
  return (
    <section className="w-full  py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
            Fonctionnalités Avancées
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pourquoi Choisir PharmaSensor?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Notre solution offre une surveillance complète qui répond aux exigences strictes du secteur pharmaceutique
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Facilité d’utilisation</h3>
            <p className="mb-4 flex-grow text-muted-foreground">
              Notre solution à été conçue pour être facile à utiliser et accessible à tous.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-sm">Installation rapide</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-sm">Interface conviviale</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Alertes en Temps Réel</h3>
            <p className="mb-4 flex-grow text-muted-foreground">
              Recevez des notifications instantanées par SMS, email en cas de dépassement des seuils de
              température.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-sm">Alertes multicanaux configurables</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-sm">Délais d'alerte personnalisables</span> 
              </li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Rapports Automatisés</h3>
            <p className="mb-4 flex-grow text-muted-foreground">
              Générez des rapports conformes aux exigences réglementaires pour vos audits et inspections.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-sm">Formats PDF, Excel et CSV</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-sm">Archivage sécurisé pendant 5 ans</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-white p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Tableau de Bord Intuitif</h3>
              <p className="text-muted-foreground">
                Visualisez toutes vos données de température en un coup d'œil. Notre interface conviviale vous permet de
                surveiller plusieurs équipements simultanément et d'accéder à l'historique complet.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <span className="text-xs font-medium text-green-800">1</span>
                  </div>
                  <span>Vue d'ensemble de tous vos équipements</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <span className="text-xs font-medium text-green-800">2</span>
                  </div>
                  <span>Graphiques détaillés et personnalisables</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <span className="text-xs font-medium text-green-800">3</span>
                  </div>
                  <span>Accès sécurisé multi-utilisateurs</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/demande-devis">
                <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-green-500 focus:ring-offset-2">
                  Voir une démonstration
                </button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center rounded-lg bg-gray-100 p-4">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg border shadow-md">
                <Image
                  src="/image.png"
                  alt="Tableau de bord PharmaSensor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                <div className="absolute bottom-4 right-4 rounded-lg bg-white p-2 shadow-lg">
                  <div className="text-xs font-medium text-gray-500">Température Moyenne</div>
                  <div className="text-lg font-bold text-green-600">2.6°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Replace old logo section with new block */}
        <div className="mt-16">
          <Logos07Block />
        </div>
      </div>
    </section>
  )
}

