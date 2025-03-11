import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const formules = [
    {
      titre: "Achat",
      prix: "599€",
      description: "Achetez votre PharmaSensor et profitez d'un service complet",
      avantages: [
        "Appareil PharmaSensor",
        "Accès illimité au cloud",
        "Rapports mensuels",
        "Support technique 24/7",
        "Garantie 2 ans",
      ],
    },
    {
      titre: "Location",
      prix: "49€",
      description: "Optez pour la flexibilité avec notre formule location",
      avantages: [
        "Appareil PharmaSensor",
        "Accès illimité au cloud",
        "Rapports mensuels",
        "Support technique 24/7",
        "Remplacement gratuit en cas de panne",
      ],
    },
  ]

  const comparaisonDetails = [
    { feature: "Coût initial", achat: "Élevé", location: "Faible" },
    { feature: "Flexibilité", achat: "Limitée", location: "Élevée" },
    { feature: "Propriété de l'appareil", achat: "Oui", location: "Non" },
    { feature: "Mises à jour matérielles", achat: "Payantes", location: "Incluses" },
    { feature: "Engagement", achat: "Aucun", location: "Contrat annuel" },
  ]

  return (
    <section className="w-full py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">Tarification</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choisissez la Formule Adaptée à Vos Besoins
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Des solutions flexibles pour toutes les pharmacies, quelle que soit leur taille
          </p>
        </div>

        {/* Formules de prix */}
        <div className="grid gap-8 md:grid-cols-2">
          {formules.map((formule, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4">
                <div
                  className={`inline-block rounded-full ${index === 0 ? "bg-green-100 text-green-800" : "bg-emerald-100 text-emerald-800"} px-3 py-1 text-sm font-medium mb-2`}
                >
                  {formule.titre}
                </div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">{formule.prix}</span>
                  {formule.titre === "Location" && <span className="ml-1 text-lg text-muted-foreground">/mois</span>}
                </div>
                <p className="mt-2 text-muted-foreground">{formule.description}</p>
              </div>
              <div className="mt-4 flex-grow">
                <ul className="space-y-3">
                  {formule.avantages.map((avantage, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`mr-2 h-5 w-5 ${index === 0 ? "text-green-600" : "text-emerald-600"}`} />
                      <span className="text-sm">{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href="#contact"
                  className={`inline-flex h-10 w-full items-center justify-center rounded-md ${
                    index === 0
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  } px-4 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tableau comparatif */}
        <div className="mt-12 rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Comparaison des Formules</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium text-muted-foreground">Caractéristique</th>
                  <th className="py-3 px-4 text-center font-medium text-green-600">Achat</th>
                  <th className="py-3 px-4 text-center font-medium text-emerald-600">Location</th>
                </tr>
              </thead>
              <tbody>
                {comparaisonDetails.map((item, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 px-4 font-medium">{item.feature}</td>
                    <td className="py-3 px-4 text-center">{item.achat}</td>
                    <td className="py-3 px-4 text-center">{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ et Devis */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Questions Fréquentes</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">Y a-t-il des frais supplémentaires ?</h4>
                <p className="text-sm text-muted-foreground">
                  Non, nos tarifs sont tout compris. Il n'y a pas de frais cachés ou de coûts supplémentaires pour
                  l'accès au cloud, les mises à jour logicielles ou le support technique.
                </p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">Puis-je ajouter des capteurs supplémentaires ?</h4>
                <p className="text-sm text-muted-foreground">
                  Oui, vous pouvez ajouter des capteurs supplémentaires à tout moment. Chaque capteur additionnel coûte
                  149€ à l'achat ou 12€/mois en location.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Quelle est la durée minimale d'engagement ?</h4>
                <p className="text-sm text-muted-foreground">
                  La durée minimale d'engagement pour la formule location est de 12 mois. Après cette période, le
                  contrat est renouvelable mensuellement.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Besoin d'une Solution Personnalisée ?</h3>
            <p className="mb-4 text-muted-foreground">
              Nous proposons également des solutions sur mesure pour les groupements de pharmacies ou les établissements
              avec des besoins spécifiques.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xs font-medium text-green-800">1</span>
                </div>
                <span className="text-sm">Tarifs dégressifs pour les commandes multiples</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xs font-medium text-green-800">2</span>
                </div>
                <span className="text-sm">Intégration avec vos systèmes existants</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <span className="text-xs font-medium text-green-800">3</span>
                </div>
                <span className="text-sm">Formation personnalisée pour votre équipe</span>
              </li>
            </ul>
            <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Demander un devis personnalisé
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

