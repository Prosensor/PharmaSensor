"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FileText, Download, BookOpen, Search } from "lucide-react"

// Définition des types pour les guides
type Guide = {
  id: string
  title: string
  description: string
  type: "manual" | "technical"
  fileSize: string
  fileType: string
  category: string[]
  downloadUrl: string
}

// Données des guides
const guides: Guide[] = [
  {
    id: "guide-installation",
    title: "Guide d'installation",
    description:
      "Instructions détaillées pour l'installation et la configuration initiale de votre système PharmaSensor.",
    type: "manual",
    fileSize: "4.2 MB",
    fileType: "PDF",
    category: ["Installation", "Configuration"],
    downloadUrl: "#",
  },
  {
    id: "manuel-utilisateur",
    title: "Manuel utilisateur",
    description: "Guide complet pour l'utilisation quotidienne de votre système PharmaSensor et de son interface.",
    type: "manual",
    fileSize: "8.7 MB",
    fileType: "PDF",
    category: ["Utilisation", "Interface"],
    downloadUrl: "#",
  },
  {
    id: "guide-administration",
    title: "Guide d'administration",
    description:
      "Instructions pour les administrateurs système sur la gestion des utilisateurs et des paramètres avancés.",
    type: "manual",
    fileSize: "6.1 MB",
    fileType: "PDF",
    category: ["Administration", "Configuration"],
    downloadUrl: "#",
  },
  {
    id: "guide-depannage",
    title: "Guide de dépannage",
    description: "Solutions aux problèmes courants et procédures de diagnostic pour votre système PharmaSensor.",
    type: "manual",
    fileSize: "3.5 MB",
    fileType: "PDF",
    category: ["Dépannage", "Support"],
    downloadUrl: "#",
  },
  {
    id: "guide-rapports",
    title: "Guide des rapports",
    description: "Instructions détaillées pour la création, la personnalisation et l'exportation des rapports.",
    type: "manual",
    fileSize: "5.3 MB",
    fileType: "PDF",
    category: ["Rapports", "Exportation"],
    downloadUrl: "#",
  },
  {
    id: "guide-app-mobile",
    title: "Guide de l'application mobile",
    description: "Instructions pour l'installation et l'utilisation de l'application mobile PharmaSensor.",
    type: "manual",
    fileSize: "2.8 MB",
    fileType: "PDF",
    category: ["Mobile", "Application"],
    downloadUrl: "#",
  },
  {
    id: "specs-techniques",
    title: "Spécifications techniques",
    description: "Spécifications techniques détaillées de tous les capteurs et équipements PharmaSensor.",
    type: "technical",
    fileSize: "7.8 MB",
    fileType: "PDF",
    category: ["Technique", "Spécifications"],
    downloadUrl: "#",
  },
  {
    id: "guide-api",
    title: "Guide d'intégration API",
    description: "Documentation complète de l'API PharmaSensor pour l'intégration avec vos systèmes existants.",
    type: "technical",
    fileSize: "12.3 MB",
    fileType: "PDF",
    category: ["API", "Intégration", "Développement"],
    downloadUrl: "#",
  },
  {
    id: "guide-securite",
    title: "Guide de sécurité",
    description: "Informations détaillées sur les mesures de sécurité et les bonnes pratiques pour votre système.",
    type: "technical",
    fileSize: "5.6 MB",
    fileType: "PDF",
    category: ["Sécurité", "Conformité"],
    downloadUrl: "#",
  },
  {
    id: "guide-conformite",
    title: "Guide de conformité",
    description: "Informations sur la conformité aux normes pharmaceutiques et réglementaires.",
    type: "technical",
    fileSize: "8.2 MB",
    fileType: "PDF",
    category: ["Conformité", "Réglementation"],
    downloadUrl: "#",
  },
]

// Catégories pour les tags de recherche
const categories = [
  "Installation",
  "Configuration",
  "Utilisation",
  "Dépannage",
  "Rapports",
  "Sécurité",
  "Conformité",
  "API",
  "Mobile",
]

export default function GuidesTechniquesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredManuals, setFilteredManuals] = useState<Guide[]>([])
  const [filteredTechnical, setFilteredTechnical] = useState<Guide[]>([])

  // Filtrer les guides en fonction du terme de recherche et de la catégorie sélectionnée
  useEffect(() => {
    const filterGuides = () => {
      const filtered = guides.filter((guide) => {
        const matchesSearch =
          searchTerm === "" ||
          guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.description.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory =
          selectedCategory === null ||
          guide.category.some((cat) => cat.toLowerCase() === selectedCategory.toLowerCase())

        return matchesSearch && matchesCategory
      })

      setFilteredManuals(filtered.filter((guide) => guide.type === "manual"))
      setFilteredTechnical(filtered.filter((guide) => guide.type === "technical"))
    }

    filterGuides()
  }, [searchTerm, selectedCategory])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(category)
    }
  }

  return (
    <div className="w-full pt-24 pb-16 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
              Documentation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Guides Techniques</h1>
            <p className="text-xl text-gray-600">
              Consultez nos guides techniques, manuels d'utilisation et ressources pour tirer le meilleur parti de votre
              solution PharmaSensor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#manuels"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
              >
                Manuels d'utilisation
              </Link>
              <Link
                href="#documentation"
                className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-700 shadow-sm transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-1"
              >
                Documentation technique
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/image.png"
                alt="Guides techniques PharmaSensor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100">
                      <FileText className="h-4 w-4 text-green-800" />
                    </div>
                  </div>
                  <span className="text-sm font-medium">Ressources complètes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Rechercher dans la documentation</h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un guide ou un manuel..."
                  className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User Manuals Section */}
        <div id="manuels" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Manuels d'Utilisation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Téléchargez nos manuels d'utilisation détaillés pour chaque produit PharmaSensor.
            </p>
          </div>

          {filteredManuals.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredManuals.map((manual) => (
                <div key={manual.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">{manual.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{manual.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {manual.fileType} - {manual.fileSize}
                      </span>
                      <Link href={manual.downloadUrl} className="flex items-center text-green-600 hover:text-green-800">
                        <Download className="h-4 w-4 mr-1" />
                        Télécharger
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Aucun manuel ne correspond à votre recherche.</p>
            </div>
          )}
        </div>

        {/* Technical Documentation Section */}
        <div id="documentation" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Documentation Technique</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Documentation technique détaillée pour les intégrateurs et les administrateurs système.
            </p>
          </div>

          {filteredTechnical.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredTechnical.map((doc) => (
                <div key={doc.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">{doc.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {doc.fileType} - {doc.fileSize}
                      </span>
                      <Link href={doc.downloadUrl} className="flex items-center text-green-600 hover:text-green-800">
                        <Download className="h-4 w-4 mr-1" />
                        Télécharger
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Aucune documentation technique ne correspond à votre recherche.</p>
            </div>
          )}
        </div>

        {/* Support Section */}
        <div className="mb-16">
          <div className="bg-green-600 rounded-xl p-8 text-white shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Besoin d'aide supplémentaire ?</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Notre équipe de support technique est disponible pour vous aider avec toutes vos questions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="mb-4">Envoyez-nous un email et nous vous répondrons dans les 24 heures.</p>
                <Link
                  href="mailto:support@pharmasensor.com"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-green-600 hover:bg-gray-100 transition-colors"
                >
                  support@pharmasensor.com
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                <p className="mb-4">Appelez-nous pour une assistance immédiate pendant les heures d'ouverture.</p>
                <Link
                  href="tel:+33123456789"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-green-600 hover:bg-gray-100 transition-colors"
                >
                  +33 1 23 45 67 89
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Chat en direct</h3>
                <p className="mb-4">Discutez en direct avec un membre de notre équipe de support technique.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-green-600 hover:bg-gray-100 transition-colors"
                >
                  Démarrer un chat
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trouvez rapidement des réponses aux questions les plus fréquemment posées.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex w-full items-center justify-between p-4 text-left font-medium">
                  <span>Comment puis-je mettre à jour mon système PharmaSensor ?</span>
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    Les mises à jour du système PharmaSensor sont automatiques pour le logiciel cloud. Pour les
                    capteurs, veuillez consulter notre guide de mise à jour dans la section des manuels d'utilisation.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex w-full items-center justify-between p-4 text-left font-medium">
                  <span>Comment puis-je étalonner mes capteurs ?</span>
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    L'étalonnage des capteurs doit être effectué annuellement. Vous pouvez soit nous renvoyer vos
                    capteurs pour un étalonnage en usine, soit faire appel à notre service d'étalonnage sur site.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex w-full items-center justify-between p-4 text-left font-medium">
                  <span>Comment puis-je exporter mes données pour un audit ?</span>
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    Vous pouvez exporter vos données dans plusieurs formats (PDF, Excel, CSV) depuis la section
                    "Rapports" de votre tableau de bord. Consultez notre guide des rapports pour des instructions
                    détaillées.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex w-full items-center justify-between p-4 text-left font-medium">
                  <span>Que faire si un capteur ne répond plus ?</span>
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-4 pb-4">
                  <p className="text-gray-600">
                    Si un capteur ne répond plus, consultez notre guide de dépannage ou contactez notre support
                    technique. Dans la plupart des cas, un simple redémarrage ou un remplacement de la batterie résout
                    le problème.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
              >
                Voir toutes les FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

