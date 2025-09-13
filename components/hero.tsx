"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 animated-bg z-0"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-[10%] w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-[20%] w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Patrón de puntos */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-2 inline-block"
            >
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium">
                Desarrollo Web Profesional
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Soluciones <span className="gradient-text">Digitales</span> a Medida
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transformamos ideas en experiencias digitales excepcionales. Somos expertos en crear sitios web modernos,
              rápidos y totalmente responsivos con las últimas tecnologías.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                href="#contact"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:gap-3 group shadow-lg shadow-primary/25"
              >
                Solicitar Presupuesto
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="glass-effect text-white px-6 py-3 rounded-full font-medium transition-colors hover:bg-white/20"
              >
                Ver Servicios
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-[500px] h-[450px] blob bg-gradient-to-br from-primary/80 to-purple-600/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div
                className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl"
                style={{ width: "480px" }}
              >
                <div className="w-full h-[400px] rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-8">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <div className="text-base font-jetbrains text-gray-300">
                        <span className="text-primary">const</span> <span className="text-purple-400">future</span> ={" "}
                        <span className="text-green-400">createWebsite</span>(
                        <span className="text-yellow-400">yourIdeas</span>);
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-300 font-mono">NexCode Solutions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-primary to-purple-600 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
