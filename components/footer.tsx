import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/10 to-transparent opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Patrón de puntos */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-10 h-10" />
              <h3 className="text-xl font-bold">
                NexCode<span className="text-primary">Solutions</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Desarrollo web profesional y personalizado para hacer crecer su negocio en línea.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:mariogabriel.dvlp@gmail.com"
                className="bg-white/10 p-3 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Desarrollo Frontend
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Desarrollo Backend
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Optimización SEO
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-md mr-3 mt-1">
                  <Mail size={16} />
                </div>
                <div>
                  <Link href="mailto:mariogabriel.dvlp@gmail.com" className="hover:text-primary transition-colors">
                    mariogabriel.dvlp@gmail.com
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-md mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>Córdoba, Argentina</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} NexCode Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
