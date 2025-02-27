"use client"

import { useState } from 'react'
import Image from "next/image"
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const specifications = [
  {
    title: "Plage de mesure étendue",
    description: "De -40°C à +85°C avec une précision de ±0.1°C",
    details: "Idéal pour surveiller une large gamme de produits pharmaceutiques, des vaccins ultra-froids aux médicaments à température ambiante."
  },
  {
    title: "Batterie longue durée",
    description: "Autonomie jusqu'à 2 ans",
    details: "Réduit les interventions de maintenance et assure une surveillance continue sans interruption."
  },
  {
    title: "Conformité réglementaire",
    description: "Conforme aux normes FDA 21 CFR Part 11 et GDP",
    details: "Garantit que vos pratiques de surveillance de la température répondent aux exigences réglementaires les plus strictes."
  },
  {
    title: "Rapports personnalisables",
    description: "Rapports mensuels détaillés et adaptables",
    details: "Générez des rapports sur mesure pour répondre à vos besoins spécifiques et faciliter les audits."
  },
  {
    title: "Support technique premium",
    description: "Assistance 24/7 et remplacement rapide",
    details: "Notre équipe d'experts est toujours disponible pour vous aider, avec un service de remplacement express en cas de besoin."
  }
]

export function SectionSpecifications() {
  const [expandedSpec, setExpandedSpec] = useState<number | null>(null)

  return (
    <section id="specifications" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-[#0b89c0]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Spécifications <span className="text-[#a4c41d]">techniques</span>
              <br />
              de pointe pour vos vaccins
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              PharmaSensor allie technologie de pointe et facilité d'utilisation pour une surveillance optimale de vos produits pharmaceutiques sensibles.
            </motion.p>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {specifications.map((spec, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div 
                    className="flex items-center justify-between p-4 cursor-pointer"
                    onClick={() => setExpandedSpec(expandedSpec === index ? null : index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#a4c41d] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-[#0b89c0]">{spec.title}</span>
                    </div>
                    {expandedSpec === index ? (
                      <ChevronUp className="w-5 h-5 text-[#0b89c0]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#0b89c0]" />
                    )}
                  </div>
                  <AnimatePresence>
                    {expandedSpec === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-gray-600 mb-2">{spec.description}</p>
                        <p className="text-sm text-gray-500">{spec.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div 
            className="relative h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/capteur1.webp"
              alt="Spécifications techniques de PharmaSensor"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

