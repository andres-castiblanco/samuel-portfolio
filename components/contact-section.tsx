"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tus ideas y explorar cómo podemos trabajar
            juntos para crear soluciones innovadoras.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Conectemos
                </h3>

                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración. Combino la visión
                    técnica y cuantitativa con una sólida formación en economía y finanzas, lo que me permite aportar
                    soluciones integrales e innovadoras. 🚀 Siempre abierto a nuevos retos y colaboraciones.
                    ¡Conectemos!
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C7.61 22 2 16.39 2 9.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                        <p className="text-sm text-muted-foreground">(+57) 310 570-0664</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Correo</p>
                        <p className="text-sm text-muted-foreground">sa.perezc1@uniandes.edu.co saaperezca@unal.edu.co</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Bogotá, Colombia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Redes Profesionales
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                    💼 Aquí puedes explorar mi trabajo y trayectoria profesional. En LinkedIn encontrarás mi experiencia y proyectos, y 
                    en GitHub comparto desarrollos, código y experimentos. Siempre abierto a nuevas conexiones y colaboraciones. 🚀
                </p>

                <div className="flex space-x-4 mt-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-orange-600"
                    onClick={() => window.open("https://www.linkedin.com/in/samuel-perez-spatial-data-scientist", "_blank")}
                  >
                    <svg className="w-5 h-5 mr-2 opacity-100 bg-transparent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-orange-600"
                    onClick={() => window.open("https://github.com/andres-castiblanco", "_blank")}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        className="bg-transparent text-orange-600"
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.304 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
