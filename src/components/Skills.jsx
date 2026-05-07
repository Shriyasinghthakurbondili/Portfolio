import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 92 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React', level: 90 },
  { name: 'Redux', level: 82 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 82 },
  { name: 'MongoDB', level: 78 },
]

const techIcons = [
  {
    name: 'HTML5',
    bg: 'from-orange-500/20 to-orange-700/20',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    symbol: 'H5',
    glow: 'hover:shadow-orange-500/20',
  },
  {
    name: 'CSS3',
    bg: 'from-blue-500/20 to-blue-700/20',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    symbol: 'C3',
    glow: 'hover:shadow-blue-500/20',
  },
  {
    name: 'JS ES6+',
    bg: 'from-yellow-500/20 to-yellow-700/20',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    symbol: 'JS',
    glow: 'hover:shadow-yellow-500/20',
  },
  {
    name: 'React',
    bg: 'from-cyan-500/20 to-cyan-700/20',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    symbol: '⚛',
    glow: 'hover:shadow-cyan-500/20',
  },
  {
    name: 'Redux',
    bg: 'from-purple-500/20 to-purple-700/20',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    symbol: 'Rx',
    glow: 'hover:shadow-purple-500/20',
  },
  {
    name: 'Tailwind',
    bg: 'from-sky-500/20 to-sky-700/20',
    border: 'border-sky-500/30',
    text: 'text-sky-400',
    symbol: '~',
    glow: 'hover:shadow-sky-500/20',
  },
  {
    name: 'Node.js',
    bg: 'from-green-500/20 to-green-700/20',
    border: 'border-green-500/30',
    text: 'text-green-400',
    symbol: '⬡',
    glow: 'hover:shadow-green-500/20',
  },
  {
    name: 'Express',
    bg: 'from-gray-500/20 to-gray-700/20',
    border: 'border-gray-400/30',
    text: 'text-gray-300',
    symbol: 'Ex',
    glow: 'hover:shadow-gray-400/20',
  },
  {
    name: 'MongoDB',
    bg: 'from-emerald-500/20 to-emerald-700/20',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    symbol: 'DB',
    glow: 'hover:shadow-emerald-500/20',
  },
]

// MERN stack highlight
const mernStack = [
  { label: 'M', full: 'MongoDB', color: 'text-emerald-400', bg: 'from-emerald-500/20 to-emerald-700/20', border: 'border-emerald-500/30' },
  { label: 'E', full: 'Express.js', color: 'text-gray-300', bg: 'from-gray-500/20 to-gray-700/20', border: 'border-gray-400/30' },
  { label: 'R', full: 'React', color: 'text-cyan-400', bg: 'from-cyan-500/20 to-cyan-700/20', border: 'border-cyan-500/30' },
  { label: 'N', full: 'Node.js', color: 'text-green-400', bg: 'from-green-500/20 to-green-700/20', border: 'border-green-500/30' },
]

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white/80 font-medium text-sm">{skill.name}</span>
        <span className="text-purple-400 text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-purple-500/50" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function TechCard({ tech, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.06 }}
      className={`glass-dark rounded-2xl p-4 flex flex-col items-center gap-2.5 border ${tech.border} hover:shadow-lg ${tech.glow} transition-all duration-300 cursor-default group`}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.bg} flex items-center justify-center text-xl font-bold ${tech.text} group-hover:scale-110 transition-transform`}
      >
        {tech.symbol}
      </div>
      <span className="text-white/70 text-xs font-medium text-center leading-tight">{tech.name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            What I know
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        {/* MERN Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-dark rounded-2xl p-5 mb-10 border border-purple-500/20"
        >
          <p className="text-center text-white/40 text-xs uppercase tracking-widest mb-4 font-mono">
            MERN Full Stack Developer
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {mernStack.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className={`flex items-center gap-3 glass rounded-xl px-5 py-3 border ${item.border} cursor-default`}
              >
                <span className={`font-display font-black text-2xl ${item.color}`}>
                  {item.label}
                </span>
                <span className="text-white/60 text-sm font-medium">{item.full}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark rounded-3xl p-8"
          >
            <h3 className="font-display font-semibold text-xl text-white mb-6">Proficiency</h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>

          {/* Tech icon grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display font-semibold text-xl text-white mb-6"
            >
              Technologies
            </motion.h3>
            <div className="grid grid-cols-3 gap-3">
              {techIcons.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
