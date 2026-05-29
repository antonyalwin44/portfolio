import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiChevronDown, FiArrowRight } from 'react-icons/fi'
import resumePdf from '../assets/resume.pdf'

// Static role subtitle is used instead of rotating array

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '#00D4FF' : '#8B5CF6',
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      })

      // Draw lines between close particles
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = '#00D4FF'
            ctx.globalAlpha = (1 - dist / 100) * 0.12
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default function Hero() {
  // Static subtitle used; no roles array or timer needed

  const handleScroll = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated particle canvas */}
      <ParticleCanvas />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 floating"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)', animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #FF0080, transparent)' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center section-container">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-blue-electric/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-slate-300 font-medium tracking-wide">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl lg:text-9xl font-display font-black tracking-tighter mb-4 leading-none"
        >
          <span className="block text-white">ANTONY</span>
          <span className="block gradient-text">ALWIN S</span>
        </motion.h1>

        {/* Subtitle */}
        <div className="mb-6">
          <p className="text-xl sm:text-2xl font-medium text-blue-electric tracking-wide">
            MCA Student & Web/Mobile Developer
          </p>
        </div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building modern digital experiences with creativity, code, and continuous learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-white text-sm tracking-wide transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)' }}
            id="explore-projects-btn"
          >
            Explore Projects
          </motion.button>
          <motion.a
            href={resumePdf}
            download="Antony_Alwin_Resume.pdf"
            whileHover={{ scale: 1.05, borderColor: '#00D4FF', boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide border border-slate-600 text-slate-300 hover:text-white transition-all duration-300"
            id="download-resume-btn"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: <FiGithub size={20} />, href: 'https://github.com/antonyalwin44', label: 'GitHub', id: 'hero-github' },
            { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/antony-alwin', label: 'LinkedIn', id: 'hero-linkedin' },
            {icon: <FiMail size={20} />, href: 'mailto:antonyalwin2003@gmail.com', label: 'Email', id: 'hero-email' },
          ].map(social => (
            <motion.a
              key={social.label}
              href={social.href}
              id={social.id}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, color: '#00D4FF' }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 border border-slate-700 hover:border-blue-electric hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-blue-electric transition-colors duration-300"
        id="scroll-down-btn"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
