"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import ContactHeroSection from "@/components/contact-hero-section"
import { useState } from "react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("submitting")
    setErrorMessage("")
    const formData = new FormData(e.currentTarget)
    const nom = formData.get("nom") as string
    const prenom = formData.get("prenom") as string
    const email = formData.get("email") as string
    const telephone = formData.get("telephone") as string
    const entreprise = formData.get("entreprise") as string
    const sujet = formData.get("sujet") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nom + (prenom ? " " + prenom : ""),
          email,
          phone: telephone,
          pharmacyName: entreprise,
          equipment: "",
          message: `Sujet : ${sujet}\n${message}`,
        }),
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
    <div className="w-full">
      <ContactHeroSection />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl py-16">

        {/* Contact Information Section */}
        <div className="mb-16" id="contact">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nos Coordonnées</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plusieurs façons de nous contacter pour répondre à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-gray-600 mb-4">
                Appelez-nous pour une assistance immédiate pendant nos heures d'ouverture.
              </p>
              <Link href="tel:+33123456789" className="text-green-600 hover:text-green-800 font-medium">
              +33 3 87 53 53 53
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Envoyez-nous un email et nous vous répondrons dans les 24 heures.</p>
              <Link href="mailto:info@prosensor.com" className="text-green-600 hover:text-green-800 font-medium">
                info@prosensor.com
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Adresse</h3>
              <p className="text-gray-600 mb-4">Venez nous rencontrer dans nos bureaux à Paris.</p>
              <address className="not-italic text-green-600">
              EcoParc, 5 rue Maud Fontenoy, 
                <br />
                57140 Norroy-le-Veneur
              </address>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Horaires</h3>
              <p className="text-gray-600 mb-4">Nos équipes sont disponibles aux horaires suivants.</p>
              <div className="text-green-600">
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi - Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">Message envoyé avec succès !</h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 disabled:opacity-50"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  {formStatus === "error" && (
                    <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
                      {errorMessage || "Une erreur s'est produite. Veuillez réessayer."}
                    </div>
                  )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div>
                  <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de la pharmacie
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Nom de votre pharmacie"
                  />
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="devis">Demande de devis</option>
                    <option value="demo">Demande de démonstration</option>
                    <option value="support">Support technique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-600">
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <Link href="/politique-de-confidentialite" className="text-green-600 hover:underline">
                        politique de confidentialité
                      </Link>
                      . <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                      disabled={formStatus === "submitting"}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  >
                      {formStatus === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
                </p>
              </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Support technique</h3>
                <p className="text-gray-600 mb-4">
                  Notre équipe de support technique est disponible pour vous aider avec toutes vos questions techniques.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hotline technique</p>
                    <Link href="tel:+33123456789" className="text-green-600 hover:text-green-800 font-medium">
                      +33 3 87 53 53 53
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email support</p>
                    <Link
                      href="mailto:info@prosensor.com"
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      info@prosensor.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Service commercial</h3>
                <p className="text-gray-600 mb-4">
                  Notre équipe commerciale est à votre disposition pour vous conseiller sur nos solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service commercial</p>
                    <Link href="tel:+33123456789" className="text-green-600 hover:text-green-800 font-medium">
                      +33 3 87 53 53 53
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email commercial</p>
                    <Link
                      href="mailto:info@prosensor.com"
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      info@prosensor.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

