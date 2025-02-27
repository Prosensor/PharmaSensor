"use client"

import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { DemoForm } from "./demo-form"
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function DemoSection() {
  return (
    <AnimatedSection id="demo" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-[#0b89c0]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Découvrez <span className="text-[#a4c41d]">ProSensor</span> en action
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Voyez comment notre technologie de pointe peut révolutionner votre production de compotes
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div 
            className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#0b89c0]">Demandez votre démonstration</h3>
            <DemoForm />
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-[#0b89c0]">Contactez-nous</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#a4c41d] mt-1 flex-shrink-0" />
                  <span className="text-gray-600">15 Rue de Montvaux, 57865 Amanvillers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#a4c41d] flex-shrink-0" />
                  <span className="text-gray-600">+33 3 87 53 53 53</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#a4c41d] flex-shrink-0" />
                  <a href="mailto:contact@prosensor.com" className="text-[#0b89c0] hover:underline">
                    contact@prosensor.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/imageréfri.jpg"
                alt="ProSensor en action"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-lg font-semibold mb-2">Prêt à optimiser votre production ?</p>
                <Button className="bg-[#a4c41d] hover:bg-[#93b119] text-white">
                  Voir la vidéo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

