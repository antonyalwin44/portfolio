import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    company: 'CodSoft',
    role: 'Web Development Intern',
    period: 'May 2025 – June 2025',
    location: 'Remote',
    color: '#00D4FF',
    responsibilities: [
      'Developed responsive web applications following modern design principles',
      'Built a fully functional calculator application with advanced operations',
      'Designed and coded engaging landing pages with modern UI/UX',
      'Created a personal portfolio website with interactive components',
    ],
  },
  {
    company: 'TEACHNOOK',
    role: 'Web Development Intern',
    period: 'February 2024 – March 2024',
    location: 'Remote',
    color: '#8B5CF6',
    responsibilities: [
      'Completed intensive frontend development training and hands-on projects',
      'Built multiple responsive web pages using HTML, CSS & JavaScript',
      'Learned and applied professional GitHub workflows for version control',
      'Debugged and optimized web applications for performance and usability',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-electric text-sm font-mono tracking-widest uppercase mb-2">My journey</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #00D4FF, #8B5CF6)' }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 pl-16 md:pl-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full border-2 z-10"
                style={{
                  backgroundColor: exp.color,
                  borderColor: exp.color,
                  boxShadow: `0 0 15px ${exp.color}80`,
                }}
              >
                <div className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ backgroundColor: exp.color }} />
              </div>

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-32px)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: `0 20px 40px ${exp.color}20` }}
                  className="glass rounded-2xl p-6 border transition-all duration-300"
                  style={{ borderColor: exp.color + '30' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FiBriefcase size={14} style={{ color: exp.color }} />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: exp.color }}>
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <FiCalendar size={11} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 justify-end">
                        <FiMapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.color }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
