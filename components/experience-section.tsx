"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "PNUD - Programa de Naciones Unidas para el Desarrollo",
    description:
      "Diseño de modelo integral para optimizar talento, tiempos, cargas y costos en catastro. Elaboración de lineamientos para el Plan Nacional de Descongestión Catastral.",
    year: "2025",
  },
  {
    title: "Secretaría Distrital de Planeación",
    description:
      "Construcción y optimización de sistemas para gestionar datos a gran escala. Desarrollo de metodologías de formulación, seguimiento y evaluación del Plan de Desarrollo.",
    year: "2024",
  },
  {
    title: "Alcaldía Mayor de Bogotá",
    description:
      "Asesor en Analítica de Datos y Transformación Digital. Apoyo con seguimiento, análisis y gestión de datos para temas prioritarios. Certificación What Work Cities 2024 Bloomberg.",
    year: "2022-2023",
  },
  {
    title: "IGAC - Instituto Geográﬁco Agustín Codazzi",
    description:
      "Desarrollo de software e implementación de historias de usuario del sistema de información del Observatorio Inmobiliario Catastral.",
    year: "2023",
  },
  {
    title: "Wikimedia Foundation",
    description:
      "Analista de Datos y Mercados. Análisis económicos y mercados potenciales alrededor del mundo para respaldar informes anuales y creación de paneles de datos.",
    year: "2022",
  },
  {
    title: "Concejo de Bogotá",
    description:
      "Asesor Catastral, Económico y de Data. Liderazgo en investigación y análisis de datos para decisiones de política pública y debates de control político.",
    year: "2020-2022",
  },
  {
    title: "Universidad de los Andes",
    description:
      "Asistente Graduado de Investigación, Soporte en revisión de literatura, construcción y limpieza de bases de datos, así como soporte en análisis econométrico y visualización de datos.",
    year: "2021-2022",
  },
  {
    title: "Congreso de la República",
    description:
      "Pasante Comisión III, Se apoyó el análisis de temas económicos, ﬁscales, monetarios y del mercado de valores en proyectos de ley, aplicando Data Science, GIS y econometría espacial para la evaluación técnica de iniciativas en curso.",
    year: "2019",
  },
  {
    title: "IGAC - Instituto Geográﬁco Agustín Codazzi",
    description:
      "Estandarización y regulación componentes catastrales y económicos para la habilitación de gestores y operadores, e implementó información gráﬁca y alfanumérica en catastros candidatos. Realizó control de calidad de bases geoespaciales en SQL y generó productos cartográﬁcos, brindando soporte en ArcGIS, QGIS, Python y R.",
    year: "2016-2019",
  },
  {
    title: "Oﬃce National des Forets",
    description:
      "Realizar tareas del componente SIG del proyecto de Plan de manejo de la Reserva Forestal Protectora Productora de la Cuenca Alta del Río Bogotá en la administración del Sistema de Información Geográﬁco y generación de productos cartográﬁcos. Asesorar soporte en manejo de ArcGis, QGis, y Autocad para realizar salidas gráﬁcas",
    year: "2015",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8 font-[family-name:var(--font-space-grotesk)]">
            Experiencia
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 pb-8 last:pb-0"
            >
              <div className="flex-shrink-0 w-16 text-xs text-muted-foreground font-medium">{experience.year}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-foreground mb-2">{experience.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
