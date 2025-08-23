"use client"

import { motion } from "framer-motion"

const skills = [
  "Azure Services",
  "Fabric",
  "GCP",
  "PowerBI Embedded",
  "Tableau",
  "Mapbox",
  "LookerStudio",
  "Plotly",
  "D3",
  "Python",
  "R",
  "Stata",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "HTML",
  "CSS",
  "JavaScript",
  "PostgreSQL",
  "GitHub",
  "GIS",
  "QGIS",
  "ArcGIS",
  "Spatial Econometrics",
  "GNSS",
  "Percepción Remota",
  "Machine Learning",
  "Data Structures",
  "Econometría",
]

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8 font-[family-name:var(--font-space-grotesk)]">
            Habilidades
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-full border border-border/50 hover:bg-primary/10 hover:border-primary/20 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
