import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = ['MCA Graduate', 'Lecturer', 'Software Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Akshatha_Resume.pdf'
    link.download = 'Akshatha_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,199,176,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-primary blur-2xl opacity-20 animate-pulse" />
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary p-2 overflow-hidden bg-surface shadow-2xl shadow-primary/20 glow-ring">
            <img src="/profile.jpeg" alt="Akshatha S" className="w-full h-full rounded-full object-cover" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight dark:text-white"
        >
          Hi, I'm <span className="text-primary">Akshatha S</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-4 font-medium h-8"
        >
          <span className="cursor-blink">{text}</span>
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg text-slate-400 dark:text-slate-500 mb-10"
        >
          Building web apps. Teaching code. Exploring ML.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-primary text-bg-dark font-bold rounded-xl hover:scale-105 transition-transform">View Projects</a>
          <button onClick={() => downloadResume()} className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/10 transition-colors cursor-pointer">Download Resume</button>
          <a href="#contact" className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-surface transition-colors dark:text-white">Contact Me</a>
        </motion.div>
      </div>
    </section>
  )
}
