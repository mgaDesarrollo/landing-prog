"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Importar el logo
import Logo from "./logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Modificar el array navLinks para eliminar la referencia a Portfolio
  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="#" className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Logo />
              <span className={cn("transition-colors duration-300", !isScrolled && "text-white")}>
                NexCode<span className="text-primary">Solutions</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-gray-700" : "text-white",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-primary/25"
            >
              Contáctenos
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary",
              )}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block px-3 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-md hover:from-primary/90 hover:to-purple-600/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contáctenos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
