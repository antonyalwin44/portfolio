import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiHeadphones, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi'

const certifications = [
  {
    title: 'Excel: From Beginner to Expert',
    issuer: 'Analytics Vidhya',
    icon: <FiTrendingUp size={24} />,
    color: '#217346',
    gradient: 'from-green-500/10 to-emerald-500/10',
    description: 'Comprehensive certification covering advanced data analytics, charting, formatting, formulas, and functions in MS Excel.'
  },
  {
    title: 'Certification in Service Desk Operations',
    issuer: 'Edu Bridge / Capgemini',
    icon: <FiHeadphones size={24} />,
    color: '#8B5CF6',
    gradient: 'from-purple-500/10 to-indigo-500/10',
    description: 'Specialized certification focused on IT customer support, ticketing systems, incident management, and ITIL standards.'
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL | IIT Kharagpur, SWAYAM',
    icon: <FiCpu size={24} />,
    color: '#FF0080',
    gradient: 'from-pink-500/10 to-rose-500/10',
    description: 'Academic certification covering IoT architecture, sensor networks, wireless protocols, and cloud integration.'
  },
  {
    title: 'SQL - Basics',
    issuer: 'Skill Rack',
    icon: <FiDatabase size={24} />,
    color: '#00D4FF',
    gradient: 'from-cyan-500/10 to-blue-500/10',
    description: 'Standard certification validating core knowledge in database queries, data manipulation, joins, subqueries, and table design.'
  }
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.02) 0%, rgba(139,92,246,0.02) 100%)' }} />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-electric text-sm font-mono tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${cert.color}15`, borderColor: cert.color + '40' }}
              className="glass rounded-3xl p-6 border border-white/5 bg-gradient-to-br transition-all duration-300 flex gap-5 items-start cursor-default"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              {/* Icon Container */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: cert.color + '15',
                  color: cert.color,
                  border: `1px solid ${cert.color}30`,
                  boxShadow: `0 0 20px ${cert.color}10`
                }}
              >
                {cert.icon}
              </div>

              {/* Text content */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1" style={{ color: cert.color }}>
                  {cert.issuer}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
