import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kshatrishriyasinghthakur@gmail.com',
    href: 'mailto:kshatrishriyasinghthakur@gmail.com',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9959947721',
    href: 'tel:+919959947721',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Shriyasinghthakurbondili',
    href: 'https://github.com/Shriyasinghthakurbondili',
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shriya-singh-0896671aa',
    href: 'https://www.linkedin.com/in/shriya-singh-0896671aa/',
    color: 'from-blue-600 to-blue-800',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend only — just show success state
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            Let's talk
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-white/50 max-w-md mx-auto text-sm">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-dark rounded-3xl p-6 mb-2">
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                Let's build something amazing
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                Reach out and let's create something great together.
              </p>
            </div>

            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="glass-dark rounded-2xl p-4 flex items-center gap-4 border border-white/5 hover:border-purple-500/30 transition-all group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">{item.label}</div>
                    <div className="text-white/80 text-sm font-medium">{item.value}</div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-dark rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry"
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all bg-transparent resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-glow flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all"
                >
                  {sent ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
