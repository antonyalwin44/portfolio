import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiAward, FiHeadphones, FiCpu, FiDatabase, FiTrendingUp, FiMaximize2, FiX, FiExternalLink } from 'react-icons/fi'

import certSql from '../assets/cert_sql_basics.png'
import certServiceDesk from '../assets/cert_service_desk.png'
import certIot from '../assets/cert_iot.png'
import certExcel from '../assets/cert_excel.png'

const certifications = [
  {
    title: 'SQL - Basics (Standard)',
    issuer: 'SkillRack',
    icon: <FiDatabase size={24} />,
    color: '#00D4FF',
    gradient: 'from-cyan-500/10 to-blue-500/10',
    description: 'Standard certification validating core knowledge in database queries, data manipulation, joins, subqueries, and table design.',
    image: certSql,
    verifyUrl: 'https://www.SkillRack.com/cert/614834/JWX',
    certId: '614834/JWX',
    date: '17-Feb-2026'
  },
  {
    title: 'Certification Program in Service Desk Operations',
    issuer: 'Capgemini | EduBridge',
    icon: <FiHeadphones size={24} />,
    color: '#8B5CF6',
    gradient: 'from-purple-500/10 to-indigo-500/10',
    description: 'Specialized certification focused on IT customer support, ticketing systems, incident management, and ITIL standards.',
    image: certServiceDesk,
    verifyUrl: '',
    certId: 'EBEON01261271936',
    date: '11 April 2026'
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL | IIT Kharagpur, SWAYAM',
    icon: <FiCpu size={24} />,
    color: '#FF0080',
    gradient: 'from-pink-500/10 to-rose-500/10',
    description: 'Academic certification covering IoT architecture, sensor networks, wireless protocols, and cloud integration.',
    image: certIot,
    verifyUrl: '',
    certId: 'NPTEL26CS37S1150302401',
    date: 'Jan-Apr 2026'
  },
  {
    title: 'Excel: From Beginner to Expert',
    issuer: 'Analytics Vidhya',
    icon: <FiTrendingUp size={24} />,
    color: '#217346',
    gradient: 'from-green-500/10 to-emerald-500/10',
    description: 'Comprehensive certification covering advanced data analytics, charting, formatting, formulas, and functions in MS Excel.',
    image: certExcel,
    verifyUrl: '',
    certId: 'cdy6vjfods',
    date: '27-May-2026'
  }
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedCert, setSelectedCert] = useState(null)

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
              className="glass rounded-3xl p-6 border border-white/5 bg-gradient-to-br transition-all duration-300 flex flex-col justify-between group"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <div>
                <div className="flex gap-4 items-start mb-4">
                  {/* Icon Container */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: cert.color + '15',
                      color: cert.color,
                      border: `1px solid ${cert.color}30`,
                      boxShadow: `0 0 20px ${cert.color}10`
                    }}
                  >
                    {cert.icon}
                  </div>

                  {/* Header text */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-1" style={{ color: cert.color }}>
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Certificate Image Preview Banner */}
              <div 
                className="relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer group/img aspect-[16/11] bg-black/40"
                onClick={() => setSelectedCert(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300">
                    ID: {cert.certId}
                  </span>
                  <div className="px-2.5 py-1 rounded-full glass border border-white/20 text-xs font-medium text-white flex items-center gap-1.5 bg-black/60 shadow-lg group-hover/img:border-cyan-400 transition-all">
                    <FiMaximize2 size={12} className="text-cyan-400" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full glass-strong rounded-2xl overflow-hidden border border-white/20 p-4 sm:p-6 flex flex-col gap-4 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-xs font-mono" style={{ color: selectedCert.color }}>
                    {selectedCert.issuer} • ID: {selectedCert.certId}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-full glass hover:bg-white/10 transition-all"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Full Image Display */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center p-2">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Modal Footer / Verification Link */}
              {selectedCert.verifyUrl && (
                <div className="flex justify-end pt-2">
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full font-semibold text-xs text-white border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 flex items-center gap-2"
                  >
                    <FiExternalLink size={14} />
                    <span>Verify Credential Online</span>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
