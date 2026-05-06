import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi'

const contactInfo = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'antonyalwin@email.com', href: 'mailto:antonyalwin@email.com', color: '#00D4FF', id: 'contact-email' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 63699 21880', href: 'tel:+916369921880', color: '#8B5CF6', id: 'contact-phone' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/antony-alwin', href: 'https://www.linkedin.com/in/antony-alwin', color: '#0077B5', id: 'contact-linkedin' },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/antonyalwin44', href: 'https://github.com/antonyalwin44', color: '#ffffff', id: 'contact-github' },
  { icon: <FiMapPin size={18} />, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: '#', color: '#FF0080', id: 'contact-location' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-electric text-sm font-mono tracking-widest uppercase mb-2">Let's connect</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)' }} />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Open to internships, collaborations, and full-time opportunities. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map(info => (
              <motion.a
                key={info.id}
                href={info.href}
                id={info.id}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ x: 6, boxShadow: `0 8px 25px ${info.color}20` }}
                className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-opacity-50 transition-all duration-300 block"
                style={{ '--hover-border': info.color }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: info.color + '15', color: info.color }}>
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wide">{info.label}</div>
                  <div className="text-sm text-slate-300 font-medium">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

              {[
                { name: 'name', type: 'text', label: 'Your Name', placeholder: 'Antony Alwin', id: 'form-name' },
                { name: 'email', type: 'email', label: 'Email Address', placeholder: 'you@example.com', id: 'form-email' },
              ].map(field => (
                <div key={field.name}>
                  <label className="text-xs text-slate-400 font-mono uppercase tracking-wide mb-1.5 block">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-blue-electric/60 focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="text-xs text-slate-400 font-mono uppercase tracking-wide mb-1.5 block">Message</label>
                <textarea
                  id="form-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-blue-electric/60 focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                id="submit-form-btn"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 transition-all duration-300"
                style={{ background: sent ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #00D4FF, #8B5CF6)' }}
              >
                {sent ? '✓ Message Sent!' : <><FiSend size={16} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
