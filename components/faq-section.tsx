"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import { Leaf, Recycle, Droplet, ArrowRight } from 'lucide-react'

const ecoFeatures = [
  {
    icon: Leaf,
    title: "Matériaux écologiques",
    description: "Nos sondes sont fabriquées à partir de matériaux recyclables et durables."
  },
  {
    icon: Recycle,
    title: "Économie d'énergie",
    description: "ProSensor optimise la consommation d'énergie dans votre processus de production."
  },
  {
    icon: Droplet,
    title: "Réduction du gaspillage",
    description: "Grâce à notre précision, réduisez les pertes et le gaspillage de ressources."
  }
]

export function SectionSeparation() {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#a4c41d]">
            ProSensor : <span className="text-[#0b89c0]">L'innovation durable</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre technologie contribue à une production plus écologique et responsable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ecoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-[#a4c41d] mb-4" />
              <h3 className="text-xl font-semibold text-[#0b89c0] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-[#a4c41d] text-white p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Engagez-vous pour une production plus verte</h3>
              <p className="text-[#f4f8e8]">Découvrez comment ProSensor peut vous aider à atteindre vos objectifs de durabilité</p>
            </div>
            <Button 
              className="bg-white text-[#a4c41d] hover:bg-[#f4f8e8] transition-colors duration-300"
              size="lg"
            >
              En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chez ProSensor, nous croyons que l'innovation technologique et la responsabilité environnementale vont de pair.
          </motion.p>
        </div>
      </div>
    </AnimatedSection>
  )
}

