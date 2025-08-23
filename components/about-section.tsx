"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8 font-[family-name:var(--font-space-grotesk)]">
              Sobre mí
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              Ingeniero Catastral y Geodesta y Economista, con conocimiento de trabajos de campo, captura de información
              geográfica y Data Science, digitalización, georreferenciación, uso de tecnología GNSS, Spatial
              Econometrics, GIS, Geodesia, Percepción Remota.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Manejo una estructura conceptual sólida, producto del dominio de la macroeconomía, la microeconomía, y de
              herramientas cuantitativas, especialmente en finanzas. Transformo datos complejos en insights estratégicos
              para la toma de decisiones.
            </p>

            <div className="pt-8 border-t border-border/50">
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Pregrados</h4>
                  <p className="font-medium text-muted-foreground mb-1">UDFJC / Universidad Nacional</p>
                  <p className="text-muted-foreground">Ing. Catastral / Economía</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Especialización</h4>
                  <p className="font-medium text-muted-foreground mb-1">UDFJC</p>
                  <p className="text-muted-foreground">Avalúos</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Maestría</h4>
                  <p className="font-medium text-muted-foreground mb-1">Universidad de los Andes</p>
                  <p className="text-muted-foreground">Política Pública</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
