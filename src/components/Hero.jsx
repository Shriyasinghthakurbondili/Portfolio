import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react'

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

const floatVariants2 = {
  animate: {
    y: [0, 20, 0],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating background shapes */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-600/20 blur-2xl"
      />
      <motion.div
        variants={floatVariants2}
        animate="animate"
        className="absolute top-40 right-16 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-purple-800/20 blur-3xl"
      />
      <motion.div
        variants={floatVariants2}
        animate="animate"
        className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-blue-600/15 blur-2xl"
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-sm text-white/70 font-medium">Available for work</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text text-glow">Shriya</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-semibold text-2xl md:text-3xl text-white/80 mb-4"
          >
            MERN Full Stack Developer
          </motion.h2>

          {/* Tech stack text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/50 text-base md:text-lg mb-8 font-mono"
          >
            React &nbsp;|&nbsp; JavaScript &nbsp;|&nbsp; Redux &nbsp;|&nbsp; Node.js &nbsp;|&nbsp; MongoDB
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('#projects')}
              className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-purple-900/40"
            >
              View Projects <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('#contact')}
              className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-purple-500/40 text-white font-semibold text-sm hover:border-purple-400/60 transition-colors"
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: 'https://github.com/Shriyasinghthakurbondili', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shriya-singh-0896671aa/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 glass rounded-xl flex items-center justify-center text-white/60 hover:text-purple-400 hover:border-purple-500/50 border border-white/10 transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-600/30 to-blue-600/20 blur-xl" />

            {/* Main card */}
            <div className="relative w-72 md:w-80 glass-dark rounded-3xl p-8 glow-purple">
              {/* Avatar */}
              <div className="relative mx-auto w-28 h-28 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-spin-slow opacity-70" />
                <div className="absolute inset-1 rounded-full bg-[#0d0d20] flex items-center justify-center">
                  <span className="font-display font-bold text-4xl gradient-text">S</span>
                </div>
              </div>

              {/* Name & title */}
              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-xl text-white mb-1">Shriya</h3>
                <p className="text-purple-400 text-sm font-medium">MERN Full Stack Developer</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: '3', label: 'Projects' },
                  { value: 'MERN', label: 'Stack' },
                  { value: 'JS', label: 'Expert' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-xl p-3 text-center"
                  >
                    <div className="font-display font-bold text-lg gradient-text">{stat.value}</div>
                    <div className="text-white/40 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                {['React', 'JavaScript', 'Redux', 'Node.js', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
