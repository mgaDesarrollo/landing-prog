"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
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
          <h2 className="section-heading text-gray-900">Contáctenos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            ¿Tiene un proyecto en mente? Envíenos un mensaje y hablemos sobre cómo podemos ayudarle a hacerlo realidad.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-purple-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <p className="mb-8 opacity-90">
                  Estamos listos para convertir sus ideas en realidad. Contáctenos y comencemos a trabajar juntos.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:mariogabriel.dvlp@gmail.com" className="hover:underline">
                      mariogabriel.dvlp@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                    <span>Córdoba, Argentina</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="font-medium mb-4">Síguenos en redes sociales</p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-8">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600 mb-8 max-w-md">
                      Gracias por contactarnos. Le responderemos lo antes posible a su dirección de correo electrónico.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg shadow-primary/25"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíenos un mensaje</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Correo Electrónico <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Asunto de tu mensaje"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <MessageSquare size={18} className="text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Cuéntenos sobre su proyecto..."
                        />
                      </div>
                    </div>

                    {error && <div className="bg-red-50 text-red-500 p-4 rounded-lg">{error}</div>}

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-colors disabled:opacity-70 shadow-lg shadow-primary/25"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Mensaje <Send size={18} className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
