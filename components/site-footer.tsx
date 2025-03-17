import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-green-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Section principale du footer */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/logo.jpg" alt="PharmaSensor Logo" width={180} height={40} className="h-10 w-auto" />
              </Link>
            </div>
            <p className="text-sm text-green-100">
              Solutions innovantes de surveillance de température pour le secteur pharmaceutique. Protégez vos produits
              sensibles grâce à notre technologie de pointe.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/fonctionnalites" className="text-green-100 hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/tarification" className="text-green-100 hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Guides Techniques
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Réglementations Pharmaceutiques
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Centre d'Aide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-100" />
                <span className="text-green-100">
                  123 Avenue de la Santé
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-100" />
                <Link href="tel:+33123456789" className="text-green-100 hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-100" />
                <Link
                  href="mailto:contact@pharmasensor.com"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  contact@pharmasensor.com
                </Link>
              </li>
            </ul>
            <div className="mt-2 rounded-md bg-green-800 p-3">
              <p className="text-xs text-green-100">
                Horaires d'ouverture:
                <br />
                Lundi - Vendredi: 9h00 - 18h00
                <br />
                Samedi - Dimanche: Fermé
              </p>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="h-px w-full bg-green-800"></div>

        {/* Section inférieure du footer */}
        <div className="flex flex-col py-6 md:flex-row md:items-center md:justify-between">
          <div className="mb-4 flex flex-wrap gap-4 md:mb-0">
            <Link
              href="/politique-de-confidentialite"
              className="text-xs text-green-100 hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </Link>
            <Link href="/conditions-utilisation" className="text-xs text-green-100 hover:text-white transition-colors">
              Conditions d'Utilisation
            </Link>
            <Link href="/mentions-legales" className="text-xs text-green-100 hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link href="/cookies" className="text-xs text-green-100 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
          <div className="text-xs text-green-100">© {currentYear} PharmaSensor. Tous droits réservés.</div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-6 border-t border-green-800 py-6">
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
              <span className="text-xs font-medium text-white">FDA</span>
            </div>
            <span className="ml-2 text-xs text-green-100">FDA 21 CFR Part 11</span>
          </div>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
              <span className="text-xs font-medium text-white">GMP</span>
            </div>
            <span className="ml-2 text-xs text-green-100">EU GMP Annex 11</span>
          </div>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
              <span className="text-xs font-medium text-white">USP</span>
            </div>
            <span className="ml-2 text-xs text-green-100">USP &lt;789&gt;</span>
          </div>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
              <span className="text-xs font-medium text-white">ISO</span>
            </div>
            <span className="ml-2 text-xs text-green-100">ISO/IEC 27001</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

