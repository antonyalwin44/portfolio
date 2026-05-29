import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiPython, SiMysql,
  SiReact, SiGithub, SiOpenai
} from 'react-icons/si'
import { FiBarChart2 } from 'react-icons/fi'
import { FaFileExcel } from 'react-icons/fa'

const skills = [
  { name: 'React.js',          level: 80, color: '#00D4FF', Icon: SiReact },
  { name: 'SQL',               level: 80, color: '#00758F', Icon: SiMysql },
  { name: 'JavaScript',        level: 82, color: '#F7DF1E', Icon: SiJavascript },
  { name: 'Python (Basic)',    level: 70, color: '#3776AB', Icon: SiPython },
  { name: 'HTML5',             level: 90, color: '#E34F26', Icon: SiHtml5 },
  { name: 'CSS3',              level: 85, color: '#1572B6', Icon: SiCss },
  { name: 'GitHub',            level: 82, color: '#FFFFFF', Icon: SiGithub },
  { name: 'Prompt Eng.',       level: 88, color: '#00D4FF', Icon: SiOpenai },
  { name: 'Power BI',          level: 72, color: '#F2C811', Icon: FiBarChart2 },
  { name: 'MS Excel',          level: 85, color: '#217346', Icon: FaFileExcel },
]

function CircleProgress({ level, color, inView, Icon }) {
  const radius = 36
  const circ = 2 * Math.PI * radius
  const offset = circ - (level / 100) * circ

  return (
    <div className="relative flex items-center justify-center mb-3">
      <svg width="96" height="96">
        {/* Track */}
        <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        {/* Progress */}
        <motion.circle
          cx="48" cy="48" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: inView ? offset : circ }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
            filter: `drop-shadow(0 0 5px ${color}80)`,
          }}
        />
      </svg>
      {/* Icon in center */}
      <div className="absolute flex flex-col items-center justify-center">
        <Icon size={22} color={color} />
        <span className="text-[10px] font-bold mt-0.5" style={{ color }}>{level}%</span>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-electric text-sm font-mono tracking-widest uppercase mb-2">What I know</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)' }} />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Technologies I've worked with and continue to develop expertise in.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${skill.color}25`,
                borderColor: skill.color + '60',
              }}
              className="glass rounded-2xl p-5 text-center border border-white/5 cursor-default transition-all duration-300"
            >
              <CircleProgress level={skill.level} color={skill.color} inView={inView} Icon={skill.Icon} />
              <div className="text-sm font-semibold text-white">{skill.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech ecosystem tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['VS Code', 'GitHub', 'Excel', 'Power BI', 'Google Fonts', 'Figma'].map(tag => (
            <span key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 glass border border-white/10 hover:border-blue-electric/40 hover:text-blue-electric transition-all duration-300">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
