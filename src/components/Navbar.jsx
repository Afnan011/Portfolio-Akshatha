import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
  const [dark, setDark] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    setHidden(latest > prev && latest > 150)
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const links = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact']

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-bg-dark/70 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-bg-dark font-black text-xl">A</div>
          <span className="text-xl font-bold tracking-tight dark:text-white">Akshatha S</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              {link}
            </a>
          ))}
          <button onClick={() => setDark(!dark)} className="p-2 bg-slate-100 dark:bg-surface rounded-lg hover:ring-2 ring-primary/50 transition-all" aria-label="Toggle theme">
            <span className="material-symbols-outlined text-[20px] block">{dark ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Menu">
          <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white dark:bg-bg-dark border-t border-slate-200 dark:border-slate-800 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              {link}
            </a>
          ))}
          <button onClick={() => setDark(!dark)} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined text-[18px]">{dark ? 'light_mode' : 'dark_mode'}</span>
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
