import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050510] flex flex-col items-center justify-center z-50">
      {/* Glowing background blobs */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px]" />

      {/* Logo animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 rounded-2xl glass-dark flex items-center justify-center glow-purple">
          <span className="font-display font-bold text-3xl gradient-text">S</span>
        </div>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-48 h-1 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-white/40 text-sm font-display tracking-widest uppercase"
      >
        Loading...
      </motion.p>
    </div>
  )
}
