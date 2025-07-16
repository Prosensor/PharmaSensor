import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Tarification | PharmaSensor",
  description: "Découvrez nos formules tarifaires flexibles pour la surveillance de température dans le secteur pharmaceutique.",
}

export default function TarificationPage() {
  return (
    <div className="w-full pt-24 pb-16 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="w-full mb-16 pt-8 pb-8  rounded-xl shadow-sm flex flex-col items-center text-center">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4 mt-2">
            Tarification Transparente
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Nos Formules Tarifaires</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Des solutions flexibles et sans surprise, adaptées à toutes les pharmacies. Comparez nos offres et choisissez la formule qui vous correspond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium">Sans engagement caché</span>
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium">Support 24/7 inclus</span>
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium">Essai gratuit 30 jours</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
            >
              Demander un devis
            </Link>
            <Link
              href="/fonctionnalites"
              className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-700 shadow-sm transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-1"
            >
              Voir les fonctionnalités
            </Link>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Choisissez Votre Formule</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous proposons des formules flexibles pour répondre aux besoins de toutes les pharmacies, des plus petites aux plus grandes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Solo</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">35€</span>
                  <span className="ml-1 text-lg text-gray-500">/mois</span>
                </div>
                <p className="mt-2 text-gray-600">Pour les petites pharmacies</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-bold">1 routeur + 1 sonde</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Alertes par email</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Rapports mensuels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Conservation des données 1 an</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Support par email</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Demander un devis
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Populaire
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Dual</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">38€</span>
                  <span className="ml-1 text-lg text-gray-500">/mois</span>
                </div>
                <p className="mt-2 text-gray-600">Pour les pharmacies moyennes</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-bold">1 routeur + 2 sonde</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Alertes par email et SMS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Rapports hebdomadaires</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Conservation des données 3 ans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Support prioritaire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Cartographie thermique</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Demander un devis
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Supplémentaire</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">3€</span>
                  <span className="ml-1 text-lg text-gray-500">/mois</span>
                </div>
                <p className="mt-2 text-gray-600">Pour les grandes pharmacies et groupements</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-bold">Sonde supplémentaire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Alertes multicanaux personnalisables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Rapports personnalisés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Conservation des données 5 ans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Support dédié 24/7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Toutes les fonctionnalités avancées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">API pour intégration personnalisée</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        {/* Hardware Options Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Options Matérielles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choisissez entre l'achat ou la location de votre matériel PharmaSensor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Achat</h3>
                <div className="mt-2 flex items-baseline mb-4">
                  <span className="text-3xl font-bold">599€</span>
                  <span className="ml-1 text-lg text-gray-500">/capteur</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Achetez votre matériel PharmaSensor et profitez d'un service complet.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Appareil PharmaSensor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Garantie 2 ans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Installation et configuration incluses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Étalonnage annuel (en option)</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Option d'achat PharmaSensor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sérénité</h3>
                <div className="mt-2 flex items-baseline mb-4">
                  <span className="text-3xl font-bold">49€</span>
                  <span className="ml-1 text-lg text-gray-500">/capteur/mois</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Optez pour la flexibilité avec notre formule location sans engagement à long terme.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Appareil PharmaSensor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Remplacement gratuit en cas de panne</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Étalonnage annuel inclus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Mises à jour matérielles gratuites</span>
                  </li>
                </ul>
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Option de location PharmaSensor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        

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
                Oui, vous pouvez ajouter des capteurs supplémentaires à tout moment. Chaque capteur additionnel coûte 149€ à l'achat ou 12€/mois en location.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Quelle est la durée minimale d'engagement ?</h3>
              <p className="text-gray-600">
                La durée minimale d'engagement pour la formule location est de 12 mois. Après cette période, le contrat est renouvelable mensuellement.
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
                    href="#contact"
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
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Nom de la pharmacie
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded-md border-0 text-gray-900"
                    placeholder="Nom de votre pharmacie"
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
