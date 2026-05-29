import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiBriefcase, FiLayers, FiZap } from 'react-icons/fi'
import profileImg from '../assets/profile.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const stats = [
  { icon: <FiCode />, value: '3', label: 'Projects Built', color: '#00D4FF' },
  { icon: <FiBriefcase />, value: '2', label: 'Internships', color: '#8B5CF6' },
  { icon: <FiLayers />, value: '10', label: 'Technologies', color: '#00FFFF' },
  { icon: <FiZap />, value: '∞', label: 'Passion to Learn', color: '#FF0080' },
]

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'S.A. Engineering College, Chennai',
    years: '2024 – 2026',
    cgpa: '7.63',
    color: '#00D4FF',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Vel Tech Ranga Sanku Arts College, Chennai',
    years: '2021 – 2024',
    cgpa: '7.3',
    color: '#8B5CF6',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="section-container">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-16">
          <p className="text-blue-electric text-sm font-mono tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full blur-xl opacity-30"
                style={{ background: 'conic-gradient(from 0deg, #00D4FF, #8B5CF6, #FF0080, #00D4FF)' }} />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-blue-electric/30 overflow-hidden floating"
                style={{ boxShadow: '0 0 30px rgba(0,212,255,0.2)' }}>
                <img
                  src={profileImg}
                  alt="Antony Alwin S"
                  className="w-full h-full object-cover object-top"
                  style={{ transform: 'rotate(-6deg) scale(1.15)' }}
                />
              </div>
              {[
                { label: 'React Native', pos: { top: '-12px', right: '-20px' }, color: '#00D4FF', delay: '0s' },
                { label: 'SQL & Database', pos: { bottom: '20px', left: '-28px' }, color: '#8B5CF6', delay: '1.5s' },
                { label: 'MCA 2026', pos: { top: '40%', right: '-44px' }, color: '#00FFFF', delay: '3s' },
              ].map(b => (
                <div key={b.label} className="absolute glass px-3 py-1 rounded-full text-xs font-bold border floating"
                  style={{ ...b.pos, color: b.color, borderColor: b.color + '40', animationDelay: b.delay }}>
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
              className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a passionate MCA student and aspiring software engineer with a deep love for building
              modern, user-centric web applications. I blend creativity with technical skills to craft
              digital experiences that truly matter.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
              className="text-slate-400 leading-relaxed mb-8">
              Driven by curiosity and a passion for innovation, I actively explore AI-assisted development,
              modern frontend technologies, and real-world application building. I believe in continuous
              improvement and turning complex problems into elegant solutions.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4} className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="glass rounded-xl p-4 border transition-all duration-300 hover:scale-[1.02]"
                  style={{ borderColor: edu.color + '30' }}>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <div className="text-sm font-bold text-white">{edu.degree}</div>
                      <div className="text-xs text-slate-400 mt-1">{edu.school}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-mono font-bold" style={{ color: edu.color }}>{edu.years}</div>
                      <div className="text-xs text-slate-400 mt-1">CGPA: <span className="font-bold text-white">{edu.cgpa}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={5 + i * 0.5}
              whileHover={{ y: -5, boxShadow: `0 10px 30px ${stat.color}25` }}
              className="glass rounded-2xl p-6 text-center border border-white/5 transition-all duration-300">
              <div className="text-2xl mb-2 flex justify-center" style={{ color: stat.color }}>{stat.icon}</div>
              <div className="text-3xl font-display font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
