"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, MessageSquareText, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/demo", {
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

  const faqs = [
    {
      question: "Comment fonctionne l'installation des capteurs PharmaSensor ?",
      answer:
        "L'installation est simple et non-invasive. Nos capteurs sans fil se placent directement dans vos réfrigérateurs et congélateurs. Un technicien certifié installe le routeur central et configure l'ensemble du système en moins de 2 heures, sans perturber votre activité. Tous les capteurs sont pré-étalonnés et prêts à l'emploi dès l'installation.",
    },
    {
      question: "Quelle est la durée de vie des batteries des capteurs ?",
      answer:
        "Nos capteurs sont équipés de batteries longue durée qui fonctionnent pendant 3 à 5 ans en utilisation normale. Le système vous alerte automatiquement lorsqu'une batterie atteint un niveau faible, vous laissant amplement le temps de la remplacer. Le remplacement est simple et peut être effectué par votre personnel sans intervention technique.",
    },
    {
      question: "Le système PharmaSensor est-il conforme aux réglementations pharmaceutiques ?",
      answer:
        "Absolument. Notre système est entièrement conforme aux exigences de la FDA, des BPD (Bonnes Pratiques de Distribution), des BPF (Bonnes Pratiques de Fabrication) et des normes USP. Nos capteurs sont étalonnés selon les normes COFRAC et nous fournissons toute la documentation nécessaire pour vos audits et inspections réglementaires.",
    },
    {
      question: "Que se passe-t-il en cas de coupure d'Internet ou de courant ?",
      answer:
        "Notre système est conçu pour fonctionner même en cas de panne. Les capteurs continuent d'enregistrer les données localement pendant une coupure d'Internet. Le routeur central dispose d'une batterie de secours qui lui permet de fonctionner jusqu'à 24 heures sans alimentation externe. Dès que la connexion est rétablie, toutes les données sont automatiquement synchronisées avec le cloud.",
    },
    {
      question: "Comment sont gérées les alertes en cas de dépassement de température ?",
      answer:
        "Vous pouvez configurer plusieurs niveaux d'alerte et plusieurs destinataires. Les notifications peuvent être envoyées par SMS, email ou appel téléphonique. Vous définissez les seuils de température, les délais avant déclenchement d'alerte, et les procédures d'escalade. Le système permet également de confirmer la réception des alertes et de documenter les actions correctives prises.",
    },
    {
      question: "Proposez-vous un contrat de maintenance et de support ?",
      answer:
        "Oui, tous nos systèmes sont accompagnés d'un contrat de service qui inclut la maintenance préventive, les mises à jour logicielles, l'étalonnage annuel des capteurs, et un support technique disponible 7j/7. Nous proposons différents niveaux de service selon vos besoins, avec des options de support prioritaire et d'intervention sur site sous 24h.",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
            Questions Fréquentes
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tout Ce Que Vous Devez Savoir</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Réponses aux questions les plus fréquemment posées sur notre solution de surveillance de température
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white shadow-sm transition-all hover:shadow-md overflow-hidden"
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-left font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 text-green-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`px-4 overflow-hidden transition-all ${openIndex === index ? "pb-4 max-h-96" : "max-h-0"}`}
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-8">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Vous avez d'autres questions ?</h3>
              <p className="mb-6 text-muted-foreground">
                Notre équipe d'experts est disponible pour répondre à toutes vos questions et vous aider à trouver la
                solution adaptée à vos besoins spécifiques.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Par téléphone</h4>
                    <p className="text-sm text-muted-foreground">Lun-Ven, 9h-18h</p>
                    <Link href="tel:+33123456789" className="text-green-600 hover:underline">
                      +33 1 23 45 67 89
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Par email</h4>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                    <Link href="mailto:contact@pharmasensor.com" className="text-green-600 hover:underline">
                      contact@pharmasensor.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <MessageSquareText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Chat en direct</h4>
                    <p className="text-sm text-muted-foreground">Support immédiat</p>
                    <button className="text-green-600 hover:underline">Démarrer une conversation</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de démo - Pleine largeur */}
        <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm w-full">
          <h3 className="text-xl font-bold mb-4">Demandez une démo personnalisée</h3>
          <p className="mb-6 text-muted-foreground">
            Voyez PharmaSensor en action avec une démonstration adaptée à vos besoins spécifiques.
          </p>
          {formStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <MessageSquareText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Demande envoyée avec succès !</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Merci pour votre intérêt. Notre équipe vous contactera très prochainement pour organiser votre
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
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="jean@pharmacie.fr"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message (facultatif)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  rows={3}
                  placeholder="Décrivez brièvement vos besoins ou posez-nous vos questions..."
                ></textarea>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  J'accepte de recevoir des informations de PharmaSensor <span className="text-red-500">*</span>
                </label>
              </div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {formStatus === "submitting" ? "Envoi en cours..." : "Demander une démo"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

