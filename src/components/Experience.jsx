import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Lecturer',
    company: 'Yenepoya Institute of Arts, Science, Commerce and Management, Mangalore',
    badge: 'PRESENT',
    badgeClass: 'bg-primary/10 text-primary',
    bullets: [
      'Delivered lectures & practicals for BCA students.',
      'Curriculum design, course material preparation, and student evaluation.',
    ],
  },
  {
    title: 'Software Development Intern',
    company: 'A1 Logics',
    badge: 'Oct – Dec 2023',
    badgeClass: 'bg-slate-100 dark:bg-slate-800 text-slate-500',
    bullets: [
      'Participated in SDLC workflow and client interactions.',
      'Built Student Registration System using C#.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-surface/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center dark:text-white"
        >
          Professional Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-white dark:bg-surface rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl group hover:border-primary hover:shadow-primary/10 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold dark:text-white">{exp.title}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{exp.company}</p>
                </div>
                <span className={`px-3 py-1 ${exp.badgeClass} text-xs font-bold rounded-full shrink-0`}>{exp.badge}</span>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary font-bold">•</span> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
