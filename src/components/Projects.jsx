import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'BuildMate',
    subtitle: 'Final Year MCA Project',
    description: 'Developed a scalable, multi-role mobile application mapping workflows for 5 to 6 user profiles, implementing role-based access control (RBAC), real-time order tracking, and inventory management.',
    tech: ['React Native', 'TypeScript', 'Supabase', 'PostgreSQL'],
    features: ['RBAC', 'Real-time Tracking', 'Inventory Mgmt', 'Proof of Delivery', 'Supabase DB Sync'],
    color: '#00D4FF',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    emoji: '🏗️',
    github: 'https://github.com/antonyalwin44',
    demo: '',
    id: 'buildmate',
  },
  {
    title: 'Rhyno EV Website',
    subtitle: 'Teachnook Capstone Project',
    description: 'Engineered a highly responsive electric vehicle web application using React for optimal cross-device performance, featuring modular UI components and booking flows.',
    tech: ['React', 'CSS3', 'GitHub', 'Netlify'],
    features: ['Responsive UI', 'Reusable Components', 'Booking Flows', 'Product Navigation'],
    color: '#8B5CF6',
    gradient: 'from-purple-500/20 to-pink-500/20',
    emoji: '⚡',
    github: 'https://github.com/antonyalwin44',
    demo: 'https://spiffy-starship-98da1.netlify.app/',
    id: 'rhyno-ev',
  },
  {
    title: 'AI Virtual Mouse',
    subtitle: 'BCA Final Year Project (2024)',
    description: 'A computer vision project utilizing hand gesture recognition to control the desktop mouse cursor and execute triggers without physical hardware.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    features: ['Gesture Recognition', 'Virtual Cursor', 'Click Actions', 'Scroll Control', 'Drag & Drop'],
    color: '#00FFFF',
    gradient: 'from-teal-500/20 to-cyan-500/20',
    emoji: '🖱️',
    github: 'https://github.com/antonyalwin44',
    demo: '',
    id: 'ai-virtual-mouse',
  },
]

function ProjectCard({ project, i, inView }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
    setTilt({ x, y })
  }
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-3xl overflow-hidden border group transition-all duration-300"
      style={{ borderColor: project.color + '30', transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`, transition: 'transform 0.3s ease' }}
      id={`project-card-${project.id}`}
    >
      {/* Card top banner */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
        style={{ borderBottom: `1px solid ${project.color}20` }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        {/* Glow center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full blur-3xl opacity-30"
            style={{ background: project.color }} />
        </div>
        <div className="relative text-center">
          <div className="text-6xl mb-2">{project.emoji}</div>
          <div className="text-xs font-mono tracking-widest uppercase text-slate-400">{project.title}</div>
        </div>

      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <div className="mb-2">
            <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
            {project.subtitle && (
              <span className="text-xs font-mono font-semibold uppercase tracking-wider block mt-1" style={{ color: project.color }}>
                {project.subtitle}
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.features.map(f => (
              <span key={f} className="px-2 py-0.5 text-xs rounded-full glass border border-white/10 text-slate-300">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with Tech & Links */}
        <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: `1px solid ${project.color}20` }}>
          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {project.tech.map(t => (
              <span key={t} className="px-2 py-0.5 text-[10px] font-bold rounded-full"
                style={{ background: project.color + '15', color: project.color, border: `1px solid ${project.color}30` }}>
                {t}
              </span>
            ))}
          </div>
          {/* Links */}
          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="GitHub Link">
                <FiGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Demo Link">
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-electric text-sm font-mono tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)' }} />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            A selection of projects that demonstrate my skills and passion for building real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
