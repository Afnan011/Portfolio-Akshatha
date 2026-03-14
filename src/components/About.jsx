import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const cards = [
  { icon: 'code', title: 'Web Development', desc: 'Building modern, responsive web applications' },
  { icon: 'psychology', title: 'Machine Learning', desc: 'Data-driven solutions with Python & scikit-learn', accent: true },
  { icon: 'school', title: 'Teaching', desc: 'Empowering the next generation of developers' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden aspect-square shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800"
          >
            <img src="/profile.jpeg" alt="Akshatha S" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6 dark:text-white">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I am a passionate MCA graduate and dedicated Lecturer from Puttur, Karnataka. My journey in technology is driven by a deep-seated interest in problem-solving and a commitment to nurturing the next generation of tech professionals. I specialize in bridging the gap between academic theory and practical software development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-4 bg-white dark:bg-surface rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
                >
                  <span className={`material-symbols-outlined mb-2 text-3xl ${card.accent ? 'text-secondary-accent' : 'text-primary'}`}>{card.icon}</span>
                  <span className="font-bold text-sm dark:text-white">{card.title}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{card.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
