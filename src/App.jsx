import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certifications from './components/Certifications'

function App() {
  const cursorDotRef = useRef(null)
  const cursorRingRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    // Loading animation
    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 400)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const dot = cursorDotRef.current
    const ring = cursorRingRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animateRing)
    }

    const handleHover = () => ring.classList.add('hovering')
    const handleLeave = () => ring.classList.remove('hovering')

    document.addEventListener('mousemove', moveCursor)
    animateRing()

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => document.removeEventListener('mousemove', moveCursor)
  }, [loading])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-[9999]">
        <div className="mb-8">
          <div className="text-4xl font-display font-black gradient-text tracking-widest animate-pulse">
            AA
          </div>
        </div>
        <div className="text-sm text-slate-400 mb-4 font-mono tracking-widest uppercase">
          Loading Portfolio...
        </div>
        <div className="w-64 h-0.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${loadProgress}%`,
              background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)'
            }}
          />
        </div>
        <div className="text-xs text-slate-600 mt-2 font-mono">{loadProgress}%</div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Custom cursor */}
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
      <div ref={cursorRingRef} className="cursor-ring hidden md:block" />

      {/* Mouse glow background effect */}
      <div className="fixed inset-0 pointer-events-none z-0" id="mouse-glow" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App
