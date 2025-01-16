"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Thermometer, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  { label: "Accueil", href: "#" },
  { label: "Produits", href: "#" },
  { label: "À propos", href: "#" },
  { label: "Contact", href: "#" },
]

const WaveAnimation = () => (
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      d="M0,80 C320,110 480,60 720,70 C960,80 1200,140 1440,100 L1440,120 L0,120 Z"
      fill="#a4c41d"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        y: { repeat: Infinity, repeatType: "reverse", duration: 2 },
        opacity: { duration: 0.4 }
      }}
    />
  </svg>
)

export function SiteFooter() {
  return (
    <footer className="bg-[#0b89c0] text-white relative overflow-hidden pt-16 pb-8">
      <WaveAnimation />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Image
              src="/logo.jpg"
              alt="ProSensor Logo"
              width={150}
              height={75}
            />
            <p className="text-sm max-w-xs">
              ProSensor révolutionne le contrôle de température dans l'industrie alimentaire, 
              garantissant une qualité optimale pour vos produits.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="hover:text-[#a4c41d] transition-colors flex items-center"
                  >
                    <Thermometer className="w-4 h-4 mr-2" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contactez-nous</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <a href="mailto:contact@prosensor.com" className="flex items-center hover:text-[#a4c41d] transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@prosensor.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="tel:+33387535353" className="flex items-center hover:text-[#a4c41d] transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +33 3 87 53 53 53
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  15 Rue de Montvaux, 57865 Amanvillers
                </span>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#a4c41d] pt-8 mt-8 text-center">
          <p className="text-sm">© 2025 ProSensor. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

