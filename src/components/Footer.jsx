import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Shriyasinghthakurbondili', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shriya-singh-0896671aa/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kshatrishriyasinghthakur@gmail.com', label: 'Email' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-3xl gradient-text mb-3">Shriya</div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              MERN Full Stack Developer crafting modern, high-performance web experiences with
              React, JavaScript, Redux, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-white/40 hover:text-purple-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/50 hover:text-purple-400 border border-white/10 hover:border-purple-500/40 transition-all"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-white/30 text-xs">kshatrishriyasinghthakur@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Shriya. Made with{' '}
            <Heart size={13} className="text-purple-400 fill-purple-400" /> using React &amp; Tailwind
          </p>

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/50 hover:text-purple-400 border border-white/10 hover:border-purple-500/40 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
