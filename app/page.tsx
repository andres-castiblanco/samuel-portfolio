"use client"

import { motion } from "framer-motion"
import AnimatedBackground from "@/components/animated-background"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ReferencesSection from "@/components/references-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <AboutSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsSection />

          <ReferencesSection />

          {/* Contact Section */}
          <ContactSection />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
