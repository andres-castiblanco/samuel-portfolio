"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function ReferencesSection() {
  const references = [
    {
      name: "Stephanie Majerowicz Nieto",
      email: "s.majerowicz@uniandes.edu.co / smajerowicz@fas.harvard.edu",
      institution: "Universidad de Los Andes",
    },
    {
      name: "Lorenzo Uribe Bardon",
      email: "lorenzouribe91@gmail.com",
      institution: "Consultor Independiente",
    },
    {
      name: "Juan Sebastian Ramirez Zuluaga",
      email: "jsebasramirez@gmail.com",
      institution: "Consultor Independiente",
    },
  ]

  return (
    <section id="referencias" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Referencias
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales que pueden dar testimonio de mi trabajo y experiencia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {references.map((reference, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{reference.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{reference.institution}</p>
                    <a
                      href={`mailto:${reference.email}`}
                      className="text-sm hover:text-orange-600/40 transition-colors"
                    >
                      {reference.email}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
