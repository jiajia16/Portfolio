import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Navbar({ activeSection, name, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const initials = (name || 'JiaJia')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const navLinkClasses = (id) =>
    `text-sm font-medium transition ${activeSection === id
      ? 'text-accent'
      : 'text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-night/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <span className="text-base font-semibold">{initials}</span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Portfolio</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">{name}</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={navLinkClasses(item.id)}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="JiaJia_Resume2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/15 dark:text-white"
            >
              Resume
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white/80 text-slate-700 transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200/60 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-night/80 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={navLinkClasses(item.id)}
                    href={`#${item.id}`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/70 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/15 dark:text-white"
              onClick={() => setOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
