"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedBeamSection from "@/components/animated-beam-demo"
import ProductHeroSection from "@/components/product-hero-section"
import { useState } from "react"

export default function FonctionnalitesPage() {
  // Ajout de l'état pour le formulaire CTA
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  async function handleCtaSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("submitting")
    setErrorMessage("")
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, pharmacyName: "Formulaire Notre Produit", equipment: "", message }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Une erreur s'est produite")
      setFormStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setFormStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Une erreur s'est produite")
    }
  }

  return (
    <div className="w-full pb-16 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <ProductHeroSection />

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
                  <span className="text-sm">Actualisation des données toutes les 30 minutes</span>
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
                  <span className="text-sm">Alertes par SMS, email</span>
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

        {/* Gallery Section */}
        <div className="bg-base-100 py-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Gallerie de photos</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez notre capteur PharmaSensor en action dans différents environnements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  src: "/IMG_7233.jpg",
                  alt: "Capteur PharmaSensor - Vue principale",
                  title: "Vue principale",
                  span: "md:col-span-2 lg:col-span-1"
                },
                {
                  src: "/IMG_7230.jpg",
                  alt: "Capteur PharmaSensor - Détail capteur 1",
                  title: "Détail capteur 1",
                  span: ""
                },
                {
                  src: "/IMG_7231.jpg",
                  alt: "Capteur PharmaSensor - Détail capteur 2",
                  title: "Détail capteur 2",
                  span: ""
                },
                {
                  src: "/IMG_7223.jpg",
                  alt: "Capteur PharmaSensor en situation",
                  title: "En situation",
                  span: "md:col-span-2"
                },
                {
                  src: "/IMG_7224.jpg",
                  alt: "Capteur PharmaSensor dans réfrigérateur",
                  title: "Dans réfrigérateur",
                  span: ""
                }
              ].map((image, index) => (
                <div 
                  key={index} 
                  className={`group cursor-pointer ${image.span}`}
                  onClick={() => openModal(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 md:h-80 object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="scroll-mt-24">
          <div className="bg-green-600 rounded-xl p-8 text-white shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Prêt à découvrir PharmaSensor ?</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour un devis personnalisée et découvrez comment nos fonctionnalités peuvent répondre à vos besoins spécifiques.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Demande envoyée avec succès !</h3>
                  <p className="text-green-100 mb-6">
                    Merci pour votre intérêt. Notre équipe vous contactera rapidement pour répondre à votre demande.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-green-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 disabled:opacity-50"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleCtaSubmit}>
                  {formStatus === "error" && (
                    <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
                      {errorMessage || "Une erreur s'est produite. Veuillez réessayer."}
                    </div>
                  )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                      name="name"
                      required
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
                      name="email"
                      required
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
                      name="phone"
                      required
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
                      name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                    placeholder="Décrivez vos besoins spécifiques..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                    disabled={formStatus === "submitting"}
                  className="w-full bg-white text-green-600 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                >
                    {formStatus === "submitting" ? "Envoi en cours..." : "Demander un devis"}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour image en grand */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Image en grand"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
