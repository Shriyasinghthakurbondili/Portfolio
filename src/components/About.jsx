import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Zap, Globe } from 'lucide-react'

const traits = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, and well-documented code is my priority.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Crafting beautiful, intuitive interfaces that users love to interact with.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Optimizing every layer of the stack for blazing-fast user experiences.',
    color: 'from-purple-600 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Full Stack',
    desc: 'End-to-end development from database design to polished frontend.',
    color: 'from-blue-600 to-purple-600',
  },
]

function TraitCard({ trait, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = trait.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-dark rounded-2xl p-6 group cursor-default border border-white/5 hover:border-purple-500/30 transition-all duration-300"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${trait.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="font-display font-semibold text-white text-lg mb-2">{trait.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{trait.desc}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            Get to know me
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-dark rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl" />
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Passionate Developer &amp; Creator
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I'm Shriya, a MERN Full Stack Developer with a passion for building modern,
                high-performance web applications. I specialize in React, Redux, Node.js,
                Express, and MongoDB — turning complex problems into elegant, user-friendly solutions.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                I've built real-world projects including an e-commerce platform with Redux state
                management, a live weather app with API integration, and a full CRUD blog
                management system. I'm always learning and pushing the boundaries of what's
                possible on the web.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Redux', 'Node.js', 'MongoDB', 'Express', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '3', label: 'Projects Built', color: 'from-purple-600 to-purple-800' },
              { value: 'MERN', label: 'Full Stack', color: 'from-blue-600 to-blue-800' },
              { value: '9+', label: 'Technologies', color: 'from-purple-700 to-blue-700' },
              { value: 'Open', label: 'To Work', color: 'from-blue-700 to-purple-700' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`glass-dark rounded-2xl p-6 text-center border border-white/5 hover:border-purple-500/30 transition-all`}
              >
                <div className={`font-display font-bold text-3xl gradient-text mb-1`}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trait cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {traits.map((trait, i) => (
            <TraitCard key={trait.title} trait={trait} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
