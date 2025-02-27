"use client"

import { useState } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Star } from 'lucide-react'

const temoignages = [
  {
    nom: "Dr. Sophie Martin",
    role: "Pharmacienne, Paris",
    photo: "/sophie-martin.jpg",
    texte: "Grâce à PharmaSensor, nous avons pu réduire nos pertes de vaccins de 15% en seulement trois mois. La tranquillité d'esprit que cela nous apporte est inestimable.",
  },
  {
    nom: "Jean Dupont",
    role: "Gérant de pharmacie, Lyon",
    photo: "/jean-dupont.jpg",
    texte: "Les rapports automatisés de PharmaSensor nous ont fait gagner un temps précieux lors de notre dernier audit. C'est un outil indispensable pour notre conformité.",
  },
  {
    nom: "Marie Lefevre",
    role: "Responsable qualité, Pharmacie centrale de Marseille",
    photo: "/marie-lefevre.jpg",
    texte: "La précision de PharmaSensor nous permet d'optimiser notre gestion des stocks. Nous sommes maintenant capables de prévoir et prévenir les problèmes avant qu'ils ne surviennent.",
  },
]

const avantages = [
  {
    titre: "Réduction des pertes",
    description: "Minimisez les pertes de produits dues aux variations de température grâce à une surveillance précise et des alertes en temps réel.",
  },
  {
    titre: "Conformité simplifiée",
    description: "Générez automatiquement des rapports conformes aux normes réglementaires, facilitant les audits et inspections.",
  },
  {
    titre: "Optimisation des stocks",
    description: "Améliorez votre gestion des stocks en comprenant mieux les conditions de stockage et les cycles de température.",
  },
  {
    titre: "Économies d'énergie",
    description: "Identifiez les inefficacités énergétiques de vos équipements de réfrigération pour réduire votre consommation.",
  },
]

export function SectionAvantagesConcrets() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % temoignages.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + temoignages.length) % temoignages.length)
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-[#0b89c0]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Les Avantages Concrets de <span className="text-[#a4c41d]">PharmaSensor</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-[#0b89c0]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Bénéfices pour votre pharmacie
            </motion.h3>
            <div className="space-y-6">
              {avantages.map((avantage, index) => (
                <motion.div 
                  key={avantage.titre}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-medium text-[#0b89c0] mb-2">{avantage.titre}</h4>
                  <p className="text-gray-600">{avantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="relative h-[500px] bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="absolute inset-0 flex flex-col justify-between p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={"/user.png"}
                    alt={temoignages[currentTestimonial].nom}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-[#0b89c0]">{temoignages[currentTestimonial].nom}</h4>
                    <p className="text-sm text-gray-500">{temoignages[currentTestimonial].role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{temoignages[currentTestimonial].texte}"</p>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#a4c41d] fill-current" />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={prevTestimonial} className="p-2 rounded-full bg-[#e6f3f9] text-[#0b89c0] hover:bg-[#d1e9f5]">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextTestimonial} className="p-2 rounded-full bg-[#e6f3f9] text-[#0b89c0] hover:bg-[#d1e9f5]">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

