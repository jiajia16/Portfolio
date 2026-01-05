function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-white/70 py-8 text-sm text-slate-600 dark:border-white/10 dark:bg-night/70 dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center md:px-10">
        <p className="font-semibold text-slate-800 dark:text-white">Thanks for stopping by.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a className="text-accent hover:underline" href="#home">
            Back to top
          </a>
          <a className="text-accent hover:underline" href="#projects">
            Projects
          </a>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Last updated {year}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
