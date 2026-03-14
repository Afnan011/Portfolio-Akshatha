import { motion } from 'framer-motion'

const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/akshathaku',
    label: 'github.com/akshathaku',
    icon: 'terminal',
    bg: 'bg-slate-900',
    textColor: 'text-white',
    subColor: 'text-slate-400',
    iconColor: 'text-white/20 group-hover:text-primary',
    ring: 'ring-primary/30',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/aksh0067',
    label: 'leetcode.com/aksh0067',
    icon: 'code_off',
    bg: 'bg-[#FFA116]/10 border-2 border-[#FFA116]/20',
    textColor: 'text-[#FFA116]',
    subColor: 'text-slate-500 dark:text-slate-400',
    iconColor: 'text-[#FFA116]/20 group-hover:text-[#FFA116]',
    ring: 'ring-[#FFA116]/30',
  },
]

export default function CodingProfiles() {
  return (
    <section className="py-24 bg-white dark:bg-surface/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center dark:text-white"
        >
          Coding Profiles
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`p-10 ${p.bg} rounded-3xl flex items-center justify-between group hover:ring-4 ${p.ring} transition-all overflow-hidden relative`}
            >
              <div className="relative z-10">
                <h3 className={`text-3xl font-black ${p.textColor} mb-2`}>{p.name}</h3>
                <p className={p.subColor}>{p.label}</p>
              </div>
              <span className={`material-symbols-outlined text-6xl ${p.iconColor} transition-colors`}>{p.icon}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
