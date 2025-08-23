"use client"

import { motion } from "framer-motion"
import HeroAnimation from "./hero-animation"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="relative w-full h-[70vh] min-h-[500px] rounded-2xl overflow-hidden md:hidden"
          >
            <HeroAnimation />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center space-y-4 z-10">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-light text-foreground/100"
                >
                  Samuel Pérez
                </motion.h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-[60vh] min-h-[400px] rounded-2xl overflow-hidden hidden md:block"
          >
            <iframe
              src="https://andres-castiblanco.github.io/SamuelPerezDot/"
              className="w-full h-full border-0"
              title="Samuel Perez Portfolio Animation"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
