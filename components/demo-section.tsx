"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const formValues = {
      name: formData.get("nom") as string,
      email: formData.get("email") as string,
      pharmacyName: formData.get("pharmacie") as string,
      phone: formData.get("telephone") as string,
      equipment: formData.get("equipements") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Une erreur s'est produite")
      }

      setFormStatus("success")
    } catch (error) {
      setFormStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Une erreur s'est produite")
    }
  }

  return (
    <section id="contact" className="w-full bg-white py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
            Contactez-nous
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Demandez une Démonstration</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Découvrez comment PharmaSensor peut transformer la surveillance de température dans votre pharmacie
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formulaire de contact */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Demande envoyée avec succès !</h3>
                <p className="text-muted-foreground mb-6">
                  Merci pour votre intérêt. Notre équipe vous contactera dans les 24 heures pour organiser votre
                  démonstration personnalisée.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 disabled:opacity-50"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus === "error" && (
                  <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
                    {errorMessage || "Une erreur s'est produite. Veuillez réessayer."}
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="mb-2 block text-sm font-medium">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="pharmacie" className="mb-2 block text-sm font-medium">
                      Nom de la pharmacie <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="pharmacie"
                      name="pharmacie"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Pharmacie du Centre"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="jean@pharmacie.fr"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="mb-2 block text-sm font-medium">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="equipements" className="mb-2 block text-sm font-medium">
                    Nombre d'équipements à surveiller
                  </label>
                  <select
                    id="equipements"
                    name="equipements"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="1-3">1 à 3 équipements</option>
                    <option value="4-6">4 à 6 équipements</option>
                    <option value="7-10">7 à 10 équipements</option>
                    <option value="10+">Plus de 10 équipements</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message (facultatif)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Précisez vos besoins spécifiques ou posez-nous vos questions..."
                  ></textarea>
                </div>
                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-muted-foreground">
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <Link href="#privacy" className="text-green-600 hover:underline">
                        politique de confidentialité
                      </Link>
                      . <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "Envoi en cours..." : "Demander une démo"}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
                </p>
              </form>
            )}
          </div>

          {/* Informations de contact et carte */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Nos Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <Link href="tel:+33123456789" className="text-muted-foreground hover:text-green-600">
                      +33 1 23 45 67 89
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <Link href="mailto:contact@pharmasensor.com" className="text-muted-foreground hover:text-green-600">
                      contact@pharmasensor.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-muted-foreground">
                      123 Avenue de la Santé
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-medium">Horaires</h4>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h00 - 18h00
                      <br />
                      Samedi - Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Pourquoi Nous Choisir</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span className="text-sm text-muted-foreground">Plus de 500 pharmacies équipées en France</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span className="text-sm text-muted-foreground">Support technique basé en France</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span className="text-sm text-muted-foreground">Installation et formation incluses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span className="text-sm text-muted-foreground">
                    Garantie satisfait ou remboursé pendant 30 jours
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full h-[200px] overflow-hidden rounded-lg border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1321.4236985876257!2d6.137738561781498!3d49.1823345793769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1741598524199!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Témoignage client */}
        <div className="mt-12 rounded-lg border bg-green-50 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <Image src="/docteur1.jpg" alt="Photo de client" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="italic text-muted-foreground mb-2">
                "L'équipe de PharmaSensor a été exceptionnelle lors de la démonstration et de l'installation. Le système
                est intuitif et nous a permis de passer notre inspection réglementaire avec succès. Je recommande
                vivement leur solution à toutes les pharmacies."
              </p>
              <div>
                <p className="font-medium">Dr. Sophie Martin</p>
                <p className="text-sm text-muted-foreground">Pharmacienne Titulaire, Pharmacie des Alpes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

