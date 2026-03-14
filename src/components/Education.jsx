import { motion } from 'framer-motion'

const timeline = [
  { year: '2021 - 2023', degree: 'Master of Computer Applications (MCA)', institution: 'Vivekananda College of Engineering & Technology, Puttur', score: 'CGPA: 8.98' },
  { year: '2018 - 2021', degree: 'Bachelor of Computer Applications (BCA)', institution: 'St Philomena College Darbe', score: 'CGPA: 8.89' },
  { year: '2016 - 2018', degree: 'Pre-University Course (PUC)', institution: 'St Philomena PU College Darbe', score: '81.83%' },
  { year: '2016', degree: 'SSLC', institution: "St Victor's Girls High School", score: '82.88%' },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center dark:text-white"
        >
          Education Journey
        </motion.h2>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`${i < timeline.length - 1 ? 'mb-12' : ''} ml-8 relative`}
            >
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-primary rounded-full ring-4 ring-primary/20" />
              <span className="text-primary font-bold text-sm tracking-wider uppercase">{item.year}</span>
              <h3 className="text-2xl font-bold mt-1 dark:text-white">{item.degree}</h3>
              <p className="text-slate-500 dark:text-slate-400">{item.institution} | {item.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
