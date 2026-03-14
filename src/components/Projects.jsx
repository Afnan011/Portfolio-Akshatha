import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Cardiovascular Disease Prediction',
    desc: 'Machine learning model trained to predict the likelihood of cardiovascular diseases based on patient metrics using Random Forest (highest accuracy).',
    stack: ['Python', 'Scikit-Learn', 'Flask', 'HTML/CSS'],
    github: 'https://github.com/akshathaku',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5LvvQ_iMRLFLJp9vy_rsJnA_lOCn4uIdEcidlpxJF7uNZEeyfOIC7VVqe2f-yINId9l52wXO3s4JUKoI_in7npibYEnPL2bCdd7JVkj1kFyrN0QZyOv3dx8g-DV2FydgspXevAWzSSSIlrF-TDfCCez77DbYR_WCUw1Te9x_O4eYRCE7x1iwN_ReMFltToxzMK7yeANOqWRK4E_xnZiwZv0ePT-xpdzrBvc71d-0tZIoAhK07HbGHN4L1O8_-TfgnzD0ZaATbePGW',
  },
  {
    title: 'Online Pet Shop Management',
    desc: 'A full-stack web application for ordering and managing pets with cart, checkout, and admin dashboard functionality.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/akshathaku',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo2qRdoQenrYYH_a95tuK1u64GjIEGPVUrY8mBEpvfiIKhA2qZSubhKP7jOV0ajGrEVmbfl4KXC4WsV_4-NrX_WlpANR0HJeDjwqjp1iRylVVMGzi1pRMTzuAQW74UzFYgTjsibn_wmndnYpljKqNGLTzZ-zGO81JBI_LauweyEvosGhZWe628rhop5L6nIDe0-_jYbv_Nnxk3BcnMxyO6obDVwJrGhNVTw5vJ70svdye3e8qYtPdElSBwZseU9Ey455vUaZwCcaij',
  },
  {
    title: 'Colour Detection Application',
    desc: 'Computer vision desktop app that identifies and labels RGB color values on image click using image processing techniques.',
    stack: ['Python', 'OpenCV', 'Pandas'],
    github: 'https://github.com/akshathaku',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA4d2ZWLwHelGQj8O_Dnebj4h1AZ8GZfM0B0Vw6Q8sYEJDswNcBaqHsGZZl6SGxyEEiPVQtqDo9oF3TTha2F122nXPcRo4zEoksz6tWIegDvFDE3PDODsgQgtrVpGjraP1EYiVdxYDl_4cXxYgpjdTmhWxB9rNYf3N3VHW8EZ7Al3QUuH1lUnTxpL7EFrHh_vllt1TPx68icu3jQltkvYUodK9irb4f-2OnHthxnxKah8XK0My3_TAOKTXWEUoVHQ1iuBRILMwQba-',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,199,176,0.15)' }}
              className="bg-white dark:bg-surface rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col group"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }} />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">{tech}</span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold hover:underline">
                  <span className="material-symbols-outlined text-[18px]">link</span> GitHub Repository
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
