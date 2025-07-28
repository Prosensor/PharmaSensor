"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from 'lucide-react'
import PricingHeroSection from "@/components/pricing-hero-section"
import { useState } from "react"

export default function TarificationPage() {
  // Ajout de l'état pour le formulaire CTA
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  async function handleCtaSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("submitting")
    setErrorMessage("")
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const pharmacyName = formData.get("company") as string
    const formule = formData.get("formule") as string
    const sondes = formData.get("sondes") as string
    const message = formData.get("message") as string

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, pharmacyName, formule, sondes, equipment: sondes, message }),
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

  const plans = [
    {
      name: "Solo",
      price: "43€",
      priceSuffix: "/mois",
      badge: null,
      for: "Petites pharmacies",
      equip: "1 routeur + 1 sonde",
      alertes: "Email",
      rapports: "Mensuels",
      data: "1 an",
      support: "Email",
      avancées: "-",
      button: true,
    },
    {
      name: "Dual",
      price: "47€",
      priceSuffix: "/mois",
      badge: "Populaire",
      for: "Pharmacies moyennes",
      equip: "1 routeur + 2 sondes",
      alertes: "Email & SMS",
      rapports: "Hebdomadaires",
      data: "3 ans",
      support: "Prioritaire",
      avancées: "Cartographie thermique",
      button: true,
    },
    {
      name: "Supplémentaire",
      price: "+5€",
      priceSuffix: "/sonde/mois",
      badge: null,
      for: "Grandes pharmacies & groupements",
      equip: "Sonde supplémentaire",
      alertes: "Multicanaux personnalisables",
      rapports: "Personnalisés",
      data: "5 ans",
      support: "Dédié 24/7",
      avancées: "Toutes + API intégration",
      button: true,
    },
  ];
  const [currentPlan, setCurrentPlan] = useState(1); // default to Dual
  const planFields = [
    { label: "Pour qui ?", key: "for" },
    { label: "Équipement inclus", key: "equip" },
    { label: "Alertes", key: "alertes" },
    { label: "Rapports", key: "rapports" },
    { label: "Conservation des données", key: "data" },
    { label: "Support", key: "support" },
    { label: "Fonctionnalités avancées", key: "avancées" },
  ];

  return (
    <div className="w-full">
      <PricingHeroSection />
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl py-16">

        {/* Pricing Plans Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Prix en location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous proposons des formules flexibles pour répondre aux besoins de toutes les pharmacies, des plus petites aux plus grandes.
            </p>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="min-w-[600px] w-full border-collapse rounded-xl overflow-hidden bg-white shadow-md">
              <thead>
                <tr className="bg-green-50">
                  <th className="py-4 px-2 text-lg font-bold border-b text-center">Produit</th>
                  <th className="py-4 px-2 text-lg font-bold border-b text-center">Image</th>
                  <th className="py-4 px-2 text-lg font-bold border-b text-center">Prix mensuel</th>
                  <th className="py-4 px-2 text-lg font-bold border-b text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center font-medium">Solo<br/><span className="text-sm text-gray-500">1 routeur + 1 sonde</span></td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex justify-center">
                      <img src="/CapteurDraginoPharmasensor_capteurs1.jpg" alt="Pack Solo" className="h-16 w-16 object-contain rounded" />
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center text-2xl font-bold text-green-700">43€<span className="text-base font-normal">/mois</span></td>
                  <td className="py-4 px-2 text-center">
                    <Link href="/demande-devis" className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Demander un devis</Link>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center font-medium">Dual<br/><span className="text-sm text-gray-500">1 routeur + 2 sondes</span></td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex justify-center">
                      <img src="/CapteurDraginoPharmasensor_capteurs2.jpg" alt="Pack Dual" className="h-16 w-16 object-contain rounded" />
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center text-2xl font-bold text-green-700">47€<span className="text-base font-normal">/mois</span></td>
                  <td className="py-4 px-2 text-center">
                    <Link href="/demande-devis" className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Demander un devis</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 text-center font-medium">Sonde supplémentaire</td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex justify-center">
                      <img src="/CapteurDraginoPharmasensor.jpg" alt="Sonde supplémentaire" className="h-16 w-16 object-contain rounded" />
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center text-2xl font-bold text-green-700">+5€<span className="text-base font-normal">/mois</span></td>
                  <td className="py-4 px-2 text-center">
                    <Link href="/demande-devis" className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Demander un devis</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Prix à l'achat */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Prix à l'achat</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez nos tarifs à l'achat, adaptés à tous les besoins. Les images seront bientôt disponibles !
            </p>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="min-w-[600px] w-full border-collapse rounded-xl overflow-hidden bg-white shadow-md">
              <thead>
                <tr className="bg-green-50">
                  <th className="py-4 px-2 text-lg font-bold border-b text-center">Produit</th>
                  <th className="py-4 px-2 text-lg font-bold border-b text-center">Image</th>
                  <th className="py-4 px-2 text-lg font-bold border-b text-center">Prix à l'achat</th>
                  <th className="py-4 px-2 text-lg font-bold border-b text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center font-medium">Pack Solo<br/><span className="text-sm text-gray-500">1 routeur + 1 sonde</span></td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex justify-center">
                      <img src="/CapteurDraginoPharmasensor_capteurs1.jpg" alt="Pack Solo" className="h-16 w-16 object-contain rounded" />
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center text-2xl font-bold text-green-700">525€</td>
                  <td className="py-4 px-2 text-center">
                    <Link href="/demande-devis" className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Demander un devis</Link>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 text-center font-medium">Pack Dual<br/><span className="text-sm text-gray-500">1 routeur + 2 sondes</span></td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex justify-center">
                      <img src="/CapteurDraginoPharmasensor_capteurs2.jpg" alt="Pack Dual" className="h-16 w-16 object-contain rounded" />
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center text-2xl font-bold text-green-700">629€</td>
                  <td className="py-4 px-2 text-center">
                    <Link href="/demande-devis" className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Demander un devis</Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 text-center font-medium">Sonde supplémentaire</td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex justify-center">
                      <img src="/CapteurDraginoPharmasensor.jpg" alt="Sonde supplémentaire" className="h-16 w-16 object-contain rounded" />
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center text-2xl font-bold text-green-700">105€</td>
                  <td className="py-4 px-2 text-center">
                    <Link href="/demande-devis" className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors">Demander un devis</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trouvez les réponses à vos questions sur nos formules tarifaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Y a-t-il des frais supplémentaires ?</h3>
              <p className="text-gray-600">
                Non, nos tarifs sont tout compris. Il n'y a pas de frais cachés ou de coûts supplémentaires pour l'accès au cloud, les mises à jour logicielles ou le support technique.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Puis-je ajouter des capteurs supplémentaires ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez ajouter des capteurs supplémentaires à tout moment. Chaque capteur additionnel coûte 5€/mois en location.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Quelle est la durée minimale d'engagement ?</h3>
              <p className="text-gray-600">
              Nos formules sont flexibles, sans durée minimale d'engagement, pour répondre aux besoins de toutes les pharmacies, des plus petites aux plus grandes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Proposez-vous des remises pour les groupements ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons des tarifs dégressifs pour les groupements de pharmacies. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Solutions Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Solutions Sur Mesure</h2>
                <p className="text-gray-600 mb-4">
                  Nous proposons également des solutions sur mesure pour les groupements de pharmacies ou les établissements avec des besoins spécifiques.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-medium text-green-800">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Tarifs dégressifs pour les commandes multiples</span>
                      <p className="text-sm text-gray-600">Économisez jusqu'à 30% sur les grandes commandes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-medium text-green-800">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Intégration avec vos systèmes existants</span>
                      <p className="text-sm text-gray-600">Compatible avec les principaux logiciels de gestion</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-medium text-green-800">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Formation personnalisée pour votre équipe</span>
                      <p className="text-sm text-gray-600">Sessions de formation adaptées à vos besoins</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/demande-devis"
                    className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Demander un devis personnalisé
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Solutions sur mesure PharmaSensor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="scroll-mt-24">
          <div className="bg-green-600 rounded-xl p-8 text-white shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Prêt à démarrer avec PharmaSensor ?</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment nos solutions peuvent répondre à vos besoins spécifiques.
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
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Nom de la pharmacie
                  </label>
                  <input
                    type="text"
                    id="company"
                      name="company"
                      required
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                    placeholder="Nom de votre pharmacie"
                  />
                </div>
                <div>
                  <label htmlFor="formule" className="block text-sm font-medium mb-1">
                    Quelle formule vous intéresse ?
                  </label>
                  <select
                    id="formule"
                    name="formule"
                    required
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                  >
                    <option value="">Sélectionnez une formule</option>
                    <option value="Achat">Achat</option>
                    <option value="Clés en main">Clés en main</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="sondes" className="block text-sm font-medium mb-1">
                    Combien de sondes souhaiteriez-vous ?
                  </label>
                  <select
                    id="sondes"
                    name="sondes"
                    required
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="+ de 5">+ de 5</option>
                  </select>
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
    </div>
  )
}
