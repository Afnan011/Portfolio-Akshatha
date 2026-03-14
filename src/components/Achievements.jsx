import { motion } from 'framer-motion'

const achievements = [
  {
    icon: 'description',
    title: 'Paper Presentation',
    desc: '"HealthGuard: Prediction and Analysis of Cardiovascular Disease Using Machine Learning" — DRISHTI-2024, VCET Puttur',
  },
  {
    icon: 'emoji_events',
    title: '🥇 1st Place — Web Design',
    desc: 'National-level IT Fest, NMAM Institute of Technology, Nitte (2023)',
  },
  {
    icon: 'volunteer_activism',
    title: 'NSS Participation',
    desc: "Republic Day Camp (Alva's College Moodabidiri) + Annual NSS Camp (Kuriya)",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center dark:text-white"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 bg-white dark:bg-surface rounded-xl border-l-4 border-primary shadow-lg hover:shadow-primary/10 transition-shadow"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
