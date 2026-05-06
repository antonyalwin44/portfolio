import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/antonyalwin44', label: 'GitHub', id: 'footer-github' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/antony-alwin', label: 'LinkedIn', id: 'footer-linkedin' },
  { icon: <FiMail size={18} />, href: 'mailto:antonyalwin@email.com', label: 'Email', id: 'footer-email' },
]

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00D4FF, #8B5CF6, transparent)' }} />

      <div className="section-container py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-3xl font-display font-black gradient-text mb-2">AA</div>
            <p className="text-slate-500 text-sm max-w-xs">
              Building modern digital experiences with creativity, code, and continuous learning.
            </p>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap gap-6 justify-center">
            {navLinks.map(link => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-sm text-slate-400 hover:text-blue-electric transition-colors duration-300"
                  id={`footer-nav-${link.toLowerCase()}`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(s => (
              <motion.a
                key={s.id}
                href={s.href}
                id={s.id}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.2, color: '#00D4FF' }}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 border border-slate-700 hover:border-blue-electric hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Animated divider */}
        <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(139,92,246,0.2), transparent)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Antony Alwin S. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Designed & Developed with <FiHeart size={12} className="text-pink-500 animate-pulse" /> by Antony Alwin S
          </span>
        </div>
      </div>
    </footer>
  )
}
