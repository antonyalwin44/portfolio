import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import powerbiImg1 from '../assets/powerbi_healthcare_summary.png'
import powerbiImg2 from '../assets/powerbi_healthcare_detail.png'

const projects = [
  {
    title: 'Healthcare Patient Waitlist Analysis',
    subtitle: 'Power BI Dashboard Project',
    description: 'A Healthcare Analytics Dashboard built using Power BI to analyze patient waitlists, inpatient & outpatient trends, average & median wait times, specialty-wise metrics, and age profiles.',
    tech: ['Power BI', 'DAX', 'Data Modeling', 'Data Visualization', 'Data Cleaning'],
    features: [
      'Patient Waitlist Tracking',
      'Inpatient & Outpatient Trends',
      'Average & Median Waitlist',
      'Specialty-wise Insights',
      'Age Profile Analysis',
      'Interactive Slicers & Filters'
    ],
    color: '#F2C811',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    emoji: '📊',
    image: powerbiImg1,
    images: [
      { src: powerbiImg1, title: 'Summary Overview Dashboard' },
      { src: powerbiImg2, title: 'Detailed Analysis Breakdown' }
    ],
    github: '',
    demo: '',
    id: 'powerbi-healthcare-waitlist',
  },
  {
    title: 'BuildMate',
    subtitle: 'Final Year MCA Project',
    description: 'Developed a scalable, multi-role mobile application mapping workflows for 5 to 6 user profiles, implementing role-based access control (RBAC), real-time order tracking, and inventory management.',
    tech: ['React Native', 'TypeScript', 'Supabase', 'PostgreSQL'],
    features: ['RBAC', 'Real-time Tracking', 'Inventory Mgmt', 'Proof of Delivery', 'Supabase DB Sync'],
    color: '#00D4FF',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    emoji: '🏗️',
    github: 'https://github.com/antonyalwin44/Thangam-Agency',
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
    github: 'https://github.com/antonyalwin44/TEACHNOOK-CAPSTONE-PROJECT',
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
    github: '',
    demo: '',
    id: 'ai-virtual-mouse',
  },
]

function ProjectCard({ project, i, inView, onOpenModal }) {
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
      transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-3xl overflow-hidden border group transition-all duration-300 flex flex-col justify-between"
      style={{
        borderColor: project.color + '30',
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.3s ease'
      }}
      id={`project-card-${project.id}`}
    >
      {/* Card top banner */}
      <div 
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden ${project.image ? 'cursor-pointer group/banner' : ''}`}
        style={{ borderBottom: `1px solid ${project.color}20` }}
        onClick={() => project.image && onOpenModal(project)}
      >
        {project.image ? (
          <>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/banner:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass border border-white/20 text-xs font-medium text-white flex items-center gap-1.5 opacity-90 group-hover/banner:opacity-100 transition-all shadow-lg bg-black/40">
              <FiMaximize2 size={12} className="text-yellow-400" />
              <span>View Dashboard</span>
            </div>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-yellow-300 drop-shadow-md">
                {project.subtitle}
              </span>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="mb-2">
            <h3 className="text-xl font-display font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
              {project.title}
            </h3>
            {!project.image && project.subtitle && (
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
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setCurrentImgIndex(0)
  }

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
            <ProjectCard key={project.id} project={project} i={i} inView={inView} onOpenModal={handleOpenModal} />
          ))}
        </div>
      </div>

      {/* Lightbox / Dashboard Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full glass-strong rounded-2xl overflow-hidden border border-white/20 p-4 sm:p-6 flex flex-col gap-4 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-xs text-yellow-400 font-mono">
                    {selectedProject.images?.[currentImgIndex]?.title || selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-full glass hover:bg-white/10 transition-all"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
                <img
                  src={selectedProject.images[currentImgIndex].src}
                  alt={selectedProject.images[currentImgIndex].title}
                  className="max-h-full max-w-full object-contain"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                      className="absolute left-3 p-2 text-white bg-black/60 hover:bg-black/90 rounded-full border border-white/20 transition-all hover:scale-110"
                    >
                      <FiChevronLeft size={22} />
                    </button>
                    <button
                      onClick={() => setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 p-2 text-white bg-black/60 hover:bg-black/90 rounded-full border border-white/20 transition-all hover:scale-110"
                    >
                      <FiChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-3 justify-center pt-2">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImgIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all h-16 w-28 ${
                        currentImgIndex === idx ? 'border-yellow-400 scale-105 shadow-lg' : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
