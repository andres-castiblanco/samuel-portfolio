"use client"

import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight)
    }

    const createDots = () => {
      const dots: Dot[] = []
      const numDots = Math.floor((canvas.width * canvas.height) / 10000)

      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // movimiento más suave
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 0.8 + 0.8, // puntos más pequeños
          opacity: Math.random() * 1 + 1, // más brillantes
        })
      }

      dotsRef.current = dots
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1

        dot.x = Math.max(0, Math.min(canvas.width, dot.x))
        dot.y = Math.max(0, Math.min(canvas.height, dot.y))

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2000)
        ctx.fillStyle = `rgba(156, 163, 175, ${dot.opacity})` // color de los dots
        ctx.fill()
      })

      dotsRef.current.forEach((dot, i) => {
        dotsRef.current.slice(i + 1).forEach((otherDot) => {
          const dx = dot.x - otherDot.x
          const dy = dot.y - otherDot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.strokeStyle = `rgba(113, 113, 122, ${0.2 * (1 - distance / 120)})`// azul claro y más tenue
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createDots()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createDots()
    }

    const handleScroll = () => {
      const newHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight)
      if (canvas.height !== newHeight) {
        resizeCanvas()
        createDots()
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, border: "none" }}
    />
  )
}
