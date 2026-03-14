import { motion } from 'framer-motion'

const skillGroups = [
  { label: 'Programming Languages', skills: ['Java', 'Python', 'JavaScript'] },
  { label: 'Frontend', skills: ['HTML', 'CSS'] },
  { label: 'Tools & Platforms', skills: ['VS Code', 'Android Studio', 'LaTeX', 'Figma', 'Git', 'GitHub'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-surface/10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center dark:text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.08, boxShadow: '0 0 15px rgba(0,199,176,0.3)' }}
                    className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full font-bold dark:text-white cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
