export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center bg-white dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com/akshathaku" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="GitHub">
            <span className="material-symbols-outlined">terminal</span>
          </a>
          <a href="https://leetcode.com/aksh0067" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="LeetCode">
            <span className="material-symbols-outlined">code</span>
          </a>
          <a href="mailto:akshatha2022@gmail.com" className="text-slate-400 hover:text-primary transition-colors" aria-label="Email">
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Built with ❤️ by Akshatha S. © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  )
}
