"use client"

import { useState } from 'react'
import Image from "next/image"
import { Thermometer, Wifi, CloudIcon as CloudCheck, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  { icon: Thermometer, title: "Précision ±0.1°C" },
  { icon: Wifi, title: "Connexion Wi-Fi" },
  { icon: CloudCheck, title: "Stockage cloud" },
  { icon: FileText, title: "Rapports mensuels" },
]

export function HeroSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#e6f3f9] via-[#f4f8e8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-[#0b89c0] mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PharmaSensor
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Surveillance de température intelligente pour vos vaccins et produits pharmaceutiques
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-[#0b89c0] mb-4">Fonctionnalités clés</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature.title}
                    className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors ${
                      index === activeFeature ? 'bg-[#e8f0d9]' : 'hover:bg-[#e6f3f9]'
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <feature.icon className="w-6 h-6 text-[#0b89c0]" />
                    <span className="text-gray-700">{feature.title}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-[#0b89c0] text-white hover:bg-[#096d99]"
              >
                Demander une démo
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={`/bg${activeFeature + 1}.jpg`}
                  alt={`Illustration de ${features[activeFeature].title}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  )
}

