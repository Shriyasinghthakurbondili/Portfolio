import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, ShoppingCart, Cloud, BookOpen } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Ecommerce Website',
    description:
      'A full-featured MERN stack e-commerce platform with product listings, cart management, user authentication, order tracking, and Redux for global state management.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    github: 'https://github.com/Shriyasinghthakurbondili/API-Integration',
    live: 'https://api-integration-vv17.vercel.app/',
    icon: ShoppingCart,
    gradient: 'from-purple-600 via-purple-700 to-blue-700',
    tag: 'Full Stack',
    features: ['Redux Cart', 'Auth', 'Orders', 'REST API'],
  },
  {
    id: 2,
    title: 'OpenWeather App',
    description:
      'Real-time weather application using OpenWeatherMap API. Search any city worldwide and get live temperature, humidity, wind speed, and weather conditions with a beautiful responsive UI.',
    tech: ['React', 'JavaScript (ES6+)', 'Weather API', 'CSS3', 'HTML5'],
    github: 'https://github.com/Shriyasinghthakurbondili/openWeather-app',
    live: 'https://open-weather-app-ten.vercel.app/',
    icon: Cloud,
    gradient: 'from-blue-500 via-cyan-600 to-blue-700',
    tag: 'Frontend',
    features: ['Live Weather', 'City Search', 'API Integration', 'Responsive'],
  },
  {
    id: 3,
    title: 'Blog Management System',
    description:
      'A full CRUD blog platform with a modern dashboard UI. Create, read, update, and delete blog posts with React state management, rich text editing, and a clean admin interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'HTML5', 'CSS3'],
    github: 'https://github.com/Shriyasinghthakurbondili/Blog-app',
    live: 'https://premium-blog-ui.vercel.app/',
    icon: BookOpen,
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    tag: 'Full Stack',
    features: ['CRUD', 'Dashboard', 'State Mgmt', 'REST API'],
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="glass-dark rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 group flex flex-col"
    >
      {/* Banner */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

        {/* Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon size={36} className="text-white" />
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/30 text-white/80 backdrop-blur-sm border border-white/20">
            {project.tag}
          </span>
        </div>

        {/* Feature pills at bottom */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.features.map((f) => (
            <span
              key={f}
              className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/40 text-white/70 backdrop-blur-sm border border-white/10"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/60 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/10 hover:border-purple-500/40 text-white/70 hover:text-white text-sm font-medium transition-all"
          >
            <Github size={15} /> GitHub
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium btn-glow"
          >
            <ExternalLink size={15} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3 block">
            My Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Real-world MERN stack projects — from e-commerce to weather apps and blog platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
