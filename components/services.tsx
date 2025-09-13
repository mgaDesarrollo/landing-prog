"use client"

import { Code, Database, Globe, ShoppingCart, Smartphone, BarChart, Wrench, Search } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Desarrollo Frontend",
      description:
        "Interfaces de usuario modernas y responsivas utilizando React, Vue.js y otras tecnologías de vanguardia.",
    },
    {
      icon: <Database size={40} />,
      title: "Desarrollo Backend",
      description: "Sistemas robustos y APIs escalables con Node.js, Express, MongoDB y otras tecnologías backend.",
    },
    {
      icon: <Globe size={40} />,
      title: "Desarrollo Full-Stack",
      description: "Soluciones web completas que integran frontend y backend para crear aplicaciones web potentes.",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce",
      description:
        "Tiendas online personalizadas con gestión de productos, pagos seguros y experiencia de usuario optimizada.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Diseño Responsivo",
      description:
        "Sitios web que se adaptan perfectamente a todos los dispositivos, desde móviles hasta pantallas de escritorio.",
    },
    {
      icon: <BarChart size={40} />,
      title: "Optimización de Rendimiento",
      description:
        "Mejora de la velocidad y rendimiento de sitios web existentes para una experiencia de usuario superior.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Mantenimiento Web",
      description:
        "Servicios de mantenimiento y actualización para mantener tu sitio web seguro, actualizado y funcionando correctamente.",
    },
    {
      icon: <Search size={40} />,
      title: "Optimización SEO",
      description:
        "Implementación de mejores prácticas SEO para aumentar la visibilidad de tu sitio web en los motores de búsqueda.",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary/30 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-secondary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      {/* Patrón de puntos */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="section-heading text-gray-900">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Ofrecemos soluciones web completas y personalizadas para ayudar a su empresa a establecer una presencia
            digital sólida y efectiva.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/80 group"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-primary/10 to-purple-500/10 p-4 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            ¿Necesita alguno de estos servicios? Contáctenos para discutir su próximo proyecto.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-primary/25"
          >
            Hablemos de su Proyecto
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
