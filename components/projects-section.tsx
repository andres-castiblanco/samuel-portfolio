"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Simulador de Trámites y Optimización Catastral",
    description: "Plataforma web para optimizar tramites catastrales bajo modelos matemáticos de optimización",
    technologies: ["Next.js", "Web Development"],
    year: "2025",
    link: "https://tramites-simulador-optimizacion.netlify.app",
  },
  {
    title: "Observatorio Región Metropolitana Bogotá-Cundinamarca",
    description: "Sistema de monitoreo para dinámicas regionales en Bogotá-Cundinamarca",
    technologies: ["Microsoft Fabric", "Azure Synapse", "SQL", "Power BI"],
    year: "2025",
    link: "https://regionmetropolitana.gov.co/observatorio",
  },
  {
    title: "Universidad de los Andes",
    description: "Focalización Espacial en Políticas Públicas: Una aproximación para mejorar la ruta integral de atención en salud para la Población Materno Perinatal mediante patrones geográficos en Colombia",
    technologies: ["Spatial Econometrics", "QGIS", "ArcGIS", "PostgreSQL", "R", "Data Structures"],
    year: "2023",
    link: "https://andres-castiblanco.github.io/TesisMPP",
  },
  {
    title: "Universidad de los Andes",
    description: "Suite de visualizaciones de indicadores para la fundación tiempo de juego",
    technologies: ["LookerStudio", "Python", "Economics", "Data Visualization"],
    year: "2022",
    link: "https://sites.google.com/view/tdj-uniandes",
  },
  {
    title: "Análisis Estadístico Catastral del Departamento de Caldas",
    description: "Propuesta de habilitación catastral para el Departamento de Caldas | Acceso:*********",
    technologies: ["Web Development", "Machine Learning", "Power Bi", "R"],
    year: "2021",
    link: "https://andres-castiblanco.github.io/Caldas-Asamblea/",
  },
  {
    title: "Mapas Interactivos de Dinámica Electoral - Bogotá",
    description: "Análisis electoral y visualización de datos geoespaciales",
    technologies: ["GIS", "HTML", "Css", "JavaScript", "Leaflet", "Stata"],
    year: "2018",
    link: "https://andres-castiblanco.github.io/samuel.perez-saaperezca-unal.edu.co1/",
  },
]

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8 font-[family-name:var(--font-space-grotesk)]">
            Proyectos
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-border/50 pb-8 last:border-b-0"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs hover:text-orange-600/40 transition-colors duration-200 text-orange-600"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Ver
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-primary/10 text-xs rounded text-orange-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
