"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Wifi, Cloud, Bell, BarChart, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const fonctionnalites = [
  {
    icon: Thermometer,
    titre: "Mesure Précise",
    description: "Surveillance continue de la température avec une précision de ±0.1°C, idéale pour les vaccins et médicaments sensibles.",
    details: "Notre technologie de pointe assure une mesure constante et fiable, essentielle pour maintenir l'efficacité des produits pharmaceutiques. Le capteur PharmaSensor est calibré pour répondre aux normes les plus strictes de l'industrie."
  },
  {
    icon: Wifi,
    titre: "Connectivité Wi-Fi",
    description: "Transmission automatique des données via votre réseau Wi-Fi existant pour une surveillance sans interruption.",
    details: "Le PharmaSensor s'intègre facilement à votre infrastructure réseau existante. Une fois configuré, il transmet automatiquement les données, éliminant le besoin de relevés manuels et réduisant les risques d'erreur humaine."
  },
  {
    icon: Cloud,
    titre: "Stockage Cloud",
    description: "Accès sécurisé à vos données de température depuis n'importe où, à tout moment, sur tous vos appareils.",
    details: "Nos serveurs cloud sécurisés stockent vos données de température avec un chiffrement de bout en bout. Accédez à l'historique complet, générez des rapports personnalisés et partagez les informations avec les autorités réglementaires en quelques clics."
  },
  {
    icon: Bell,
    titre: "Alertes Instantanées",
    description: "Notifications immédiates en cas d'écart de température pour une action rapide et la préservation de vos produits.",
    details: "Configurez des seuils d'alerte personnalisés. En cas de dépassement, recevez instantanément des notifications par SMS, email ou push sur votre smartphone. Cette réactivité peut sauver des stocks entiers de produits sensibles."
  },
  {
    icon: BarChart,
    titre: "Rapports Détaillés",
    description: "Génération automatique de rapports mensuels pour un suivi précis et une conformité réglementaire simplifiée.",
    details: "Nos rapports mensuels offrent une vue d'ensemble claire de vos données de température. Ils incluent des graphiques, des statistiques et des analyses de tendances, vous aidant à identifier les problèmes potentiels avant qu'ils ne deviennent critiques."
  },
  {
    icon: ShieldCheck,
    titre: "Conformité Réglementaire",
    description: "Assurance de conformité aux normes pharmaceutiques et réglementations en vigueur.",
    details: "PharmaSensor est conçu pour répondre aux exigences strictes des organismes de réglementation tels que la FDA et l'EMA. Notre système aide à maintenir la conformité aux BPD (Bonnes Pratiques de Distribution) et facilite les audits avec des enregistrements précis et inaltérables."
  }
]

export function SectionFonctionnalites() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  return (
    <section className="py-24" id="fonctionnalites">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0b89c0]">
            Fonctionnalités Clés de <span className="text-[#a4c41d]">PharmaSensor</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez comment PharmaSensor révolutionne la surveillance de la température pour vos produits pharmaceutiques
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fonctionnalites.map((fonctionnalite, index) => (
            <motion.div
              key={fonctionnalite.titre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`border-2 ${activeFeature === index ? 'border-[#0b89c0]' : 'border-transparent'} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full`}
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#e6f3f9] flex items-center justify-center mr-4">
                      <fonctionnalite.icon className="w-6 h-6 text-[#0b89c0]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0b89c0]">{fonctionnalite.titre}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{fonctionnalite.description}</p>
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-gray-500 mt-4 bg-[#f4f8e8] p-4 rounded-md">
                          {fonctionnalite.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

