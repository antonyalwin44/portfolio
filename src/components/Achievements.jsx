import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiBriefcase, FiCode, FiTrendingUp } from 'react-icons/fi'

const achievements = [
  { icon: <FiAward size={28} />, value: 2026, label: 'MCA Graduate', suffix: '', prefix: '', color: '#00D4FF', description: 'Pursuing MCA at S.A Engineering College' },
  { icon: <FiBriefcase size={28} />, value: 2, label: 'Internships', suffix: '+', prefix: '', color: '#8B5CF6', description: 'CodSoft & TEACHNOOK' },
  { icon: <FiCode size={28} />, value: 3, label: 'Projects Built', suffix: '+', prefix: '', color: '#00FFFF', description: 'Real-world applications' },
  { icon: <FiTrendingUp size={28} />, value: 9, label: 'Technologies', suffix: '+', prefix: '', color: '#FF0080', description: 'Continuously learning more' },
]

function Counter({ target, inView, suffix, prefix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = target
    const duration = 2000
    const step = (end / duration) * 16

    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>{prefix}{count}{suffix}</span>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Full-width gradient background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.03) 0%, rgba(139,92,246,0.03) 100%)' }} />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-electric text-sm font-mono tracking-widest uppercase mb-2">Milestones</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: `0 20px 50px ${ach.color}25` }}
              className="glass rounded-3xl p-8 text-center border border-white/5 floating transition-all duration-300"
              style={{ animationDelay: `${i * 1.2}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: ach.color + '15', color: ach.color, border: `1px solid ${ach.color}30` }}>
                {ach.icon}
              </div>

              {/* Counter */}
              <div className="text-4xl font-display font-black mb-1" style={{ color: ach.color }}>
                <Counter target={ach.value} inView={inView} suffix={ach.suffix} prefix={ach.prefix} />
              </div>

              <div className="text-white font-bold text-sm mb-1">{ach.label}</div>
              <div className="text-slate-500 text-xs">{ach.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
