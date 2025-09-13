"use client"

import Image from "next/image"
import { Code2, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="section-heading text-gray-900">Sobre Nosotros</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Conoce a nuestro equipo y nuestra misión de transformar el mundo digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Somos <span className="gradient-text">NexCode Solutions</span>
            </h3>
            <p className="text-gray-700 mb-6">
              Con más de 5 años de experiencia en el desarrollo web, nos especializamos en crear soluciones digitales
              personalizadas que combinan diseño atractivo con funcionalidad robusta. Nuestro enfoque se centra en
              construir experiencias web que no solo se vean bien, sino que también funcionen perfectamente.
            </p>
            <p className="text-gray-700 mb-8">
              Nuestro objetivo es ayudar a empresas y profesionales a establecer una presencia digital sólida mediante
              sitios web modernos, rápidos y optimizados para buscadores. Estamos ubicados en Córdoba, Argentina, pero
              trabajamos con clientes de todo el mundo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="text-primary" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Desarrollo Frontend</h4>
                <p className="text-gray-600 text-sm">Interfaces modernas y responsivas</p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-primary" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Desarrollo Backend</h4>
                <p className="text-gray-600 text-sm">Soluciones robustas y escalables</p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-primary" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Optimización</h4>
                <p className="text-gray-600 text-sm">Rendimiento y SEO mejorados</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Equipo de NexCode Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl">
                <div className="bg-gradient-to-br from-primary to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5+
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
