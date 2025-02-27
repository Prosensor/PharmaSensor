"use client"

import { useState } from 'react'
import { Check, X, Info, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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
    couleur: "bg-[#0b89c0]",
  },
  {
    titre: "Location",
    prix: "49€/mois",
    description: "Optez pour la flexibilité avec notre formule location",
    avantages: [
      "Appareil PharmaSensor",
      "Accès illimité au cloud",
      "Rapports mensuels",
      "Support technique 24/7",
      "Remplacement gratuit en cas de panne",
    ],
    couleur: "bg-[#a4c41d]",
  },
]

const comparaisonDetails = [
  { feature: "Coût initial", achat: "Élevé", location: "Faible" },
  { feature: "Flexibilité", achat: "Limitée", location: "Élevée" },
  { feature: "Propriété de l'appareil", achat: "Oui", location: "Non" },
  { feature: "Mises à jour matérielles", achat: "Payantes", location: "Incluses" },
  { feature: "Engagement", achat: "Aucun", location: "Contrat annuel" },
]

export function SectionFormules() {
  const [activeFormule, setActiveFormule] = useState<number | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section id="formules" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0b89c0]">
            Choisissez la formule <span className="text-[#a4c41d]">adaptée à vos besoins</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Que vous préfériez acheter ou louer, PharmaSensor s'adapte à votre stratégie d'investissement et à vos exigences opérationnelles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {formules.map((formule, index) => (
            <motion.div
              key={formule.titre}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ${
                activeFormule === index ? 'ring-2 ring-[#0b89c0] shadow-xl' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setActiveFormule(index)}
              onMouseLeave={() => setActiveFormule(null)}
            >
              <div className={`${formule.couleur} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{formule.titre}</h3>
                <p className="text-4xl font-bold mb-4">{formule.prix}</p>
                <p>{formule.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {formule.avantages.map((avantage, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-[#a4c41d] mr-2" />
                      <span>{avantage}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-4">
                  <Button className={`w-full text-white hover:opacity-90 ${formule.couleur}`}>
                    Choisir cette formule
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    {formule.titre === "Achat" ? 
                      "Idéal pour les pharmacies cherchant un investissement à long terme" :
                      "Parfait pour ceux qui veulent rester à la pointe de la technologie"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            onClick={() => setShowComparison(!showComparison)}
            className="bg-[#0b89c0] text-white hover:bg-[#096d99] transition-colors duration-300 text-lg font-semibold px-8 py-3 flex items-center space-x-2"
          >
            <span>{showComparison ? "Masquer la comparaison détaillée" : "Voir la comparaison détaillée"}</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showComparison ? 'rotate-90' : ''}`} />
          </Button>
        </motion.div>

        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0b89c0] text-white">
                      <th className="py-3 px-4 text-left">Caractéristique</th>
                      <th className="py-3 px-4 text-center">Achat</th>
                      <th className="py-3 px-4 text-center">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparaisonDetails.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-4">{item.feature}</td>
                        <td className="py-3 px-4 text-center">{item.achat}</td>
                        <td className="py-3 px-4 text-center">{item.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-16 bg-[#f4f8e8] border-l-4 border-[#a4c41d] p-6 rounded-r-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-[#0b89c0] mb-4 flex items-center">
            <Info className="w-6 h-6 mr-2" />
            Conseil pour choisir votre formule
          </h3>
          <p className="text-gray-700">
            La formule d'achat est idéale si vous avez un budget d'investissement disponible et souhaitez une solution à long terme. 
            Optez pour la location si vous préférez une plus grande flexibilité financière et des mises à jour régulières du matériel. 
            Dans les deux cas, vous bénéficiez de la même qualité de service et de support. 
            N'hésitez pas à contacter notre équipe pour une consultation personnalisée qui vous aidera à faire le meilleur choix pour votre pharmacie.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

