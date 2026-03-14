import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8 dark:text-white">Let's Connect</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
              I'm always open to discussing new projects, teaching opportunities, or just chatting about the latest in technology.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Email</h4>
                  <a href="mailto:akshatha2022@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">akshatha2022@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Location</h4>
                  <p className="text-slate-500 dark:text-slate-400">Puttur, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Phone</h4>
                  <a href="tel:+91990229869" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">+91-990229869</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white dark:bg-surface p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
              <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-sm font-bold mb-2 dark:text-white">Name</label>
                  <input name="name" type="text" placeholder="Your Name" required className="w-full bg-slate-50 dark:bg-bg-dark border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 ring-primary focus:border-transparent outline-none text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 dark:text-white">Email</label>
                  <input name="email" type="email" placeholder="you@example.com" required className="w-full bg-slate-50 dark:bg-bg-dark border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 ring-primary focus:border-transparent outline-none text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 dark:text-white">Message</label>
                  <textarea name="message" placeholder="Your message here..." rows="4" required className="w-full bg-slate-50 dark:bg-bg-dark border border-slate-200 dark:border-slate-800 rounded-xl p-4 focus:ring-2 ring-primary focus:border-transparent outline-none text-slate-900 dark:text-white resize-none" />
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-bg-dark font-black rounded-xl hover:opacity-90 transition-opacity uppercase tracking-widest">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
