"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const solutionsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  // Gérer le changement de style du header lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Gérer les clics en dehors des dropdowns pour les fermer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openDropdown === "solutions" &&
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }

      if (
        openDropdown === "resources" &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openDropdown])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="PharmaSensor Logo"
              width={240}
              height={55}
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium relative ${
                isScrolled ? "text-gray-700 hover:text-green-600" : "text-gray-700 hover:text-green-600"
              } transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              Accueil
            </Link>

            <Link
              href="/notre-produit"
              className={`px-3 py-2 text-sm font-medium relative ${
                isScrolled ? "text-gray-700 hover:text-green-600" : "text-gray-700 hover:text-green-600"
              } transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              Notre produit
            </Link>

           

            <Link
              href="/tarification"
              className={`px-3 py-2 text-sm font-medium relative ${
                isScrolled ? "text-gray-700 hover:text-green-600" : "text-gray-700 hover:text-green-600"
              } transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              Tarifs
            </Link>

            {/* Dropdown Ressources */}
            <div ref={resourcesRef} className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className={`flex items-center px-3 py-2 text-sm font-medium relative ${
                  isScrolled ? "text-gray-700 hover:text-green-600" : "text-gray-700 hover:text-green-600"
                } transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full`}
              >
                Informations
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === "resources" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-white py-2 shadow-lg z-50">
                 
                  <Link
                    href="/comment-ca-marche"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Comment ça marche ?
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/avis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                   Avis clients
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium relative ${
                isScrolled ? "text-gray-700 hover:text-green-600" : "text-gray-700 hover:text-green-600"
              } transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              Nous contacter
            </Link>
          </nav>

          {/* Boutons d'action */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              href="#contact"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-all duration-300"
            >
              Demander un devis
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button onClick={toggleMenu} className="text-green-600 lg:hidden" aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div
            className={`mt-2 rounded-lg bg-white p-4 shadow-lg transition-all duration-300 transform ${
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                onClick={toggleMenu}
              >
                Accueil
              </Link>

              {/* Dropdown Solutions Mobile */}
              <div className="group">
                <button
                  onClick={() => toggleDropdown("solutions-mobile")}
                  className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 ${openDropdown === "solutions-mobile" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "solutions-mobile" && (
                  <div className="ml-4">
                    <div className="mt-1 flex flex-col space-y-1 border-l-2 border-green-100 pl-4">
                      <Link
                        href="/solutions/pharmasensor-pro"
                        className="px-3 py-1 text-sm text-gray-700 hover:text-green-600"
                        onClick={toggleMenu}
                      >
                        PharmaSensor Pro
                      </Link>
                      <Link
                        href="/solutions/pharmasensor-cloud"
                        className="px-3 py-1 text-sm text-gray-700 hover:text-green-600"
                        onClick={toggleMenu}
                      >
                        PharmaSensor Cloud
                      </Link>
                      <Link
                        href="/solutions/capteurs-specialises"
                        className="px-3 py-1 text-sm text-gray-700 hover:text-green-600"
                        onClick={toggleMenu}
                      >
                        Capteurs spécialisés
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/notre-produit"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                onClick={toggleMenu}
              >
                Notre produit
              </Link>

              <Link
                href="#testimonials"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                onClick={toggleMenu}
              >
                Témoignages
              </Link>

              <Link
                href="/tarification"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                onClick={toggleMenu}
              >
                Tarifs
              </Link>

              {/* Dropdown Ressources Mobile */}
              <div className="group">
                <button
                  onClick={() => toggleDropdown("resources-mobile")}
                  className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                >
                  Informations
                  <ChevronDown className={`h-4 w-4 ${openDropdown === "resources-mobile" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "resources-mobile" && (
                  <div className="ml-4">
                    <div className="mt-1 flex flex-col space-y-1 border-l-2 border-green-100 pl-4">
                    <Link
                    href="/comment-ca-marche"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Comment ça marche ?
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/avis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                   Avis clients
                  </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600"
                onClick={toggleMenu}
              >
                 Nous contacter
              </Link>
            </nav>

            <div className="mt-4 flex flex-col space-y-2">
              <Link
                href="#contact"
                className="rounded-md bg-green-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-700 transition-all duration-300"
                onClick={toggleMenu}
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

