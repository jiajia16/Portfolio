import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile } from './data/profile';

const sectionOrder = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return stored || (prefersDark ? 'dark' : 'light');
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const { title, description, ogImage } = profile.seo;
    document.title = title;
    const ensureMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    ensureMeta('description', description);
    ensureMeta('og:title', title, 'property');
    ensureMeta('og:description', description, 'property');
    ensureMeta('og:image', ogImage, 'property');
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length) {
          const topMost = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          const id = topMost.target.getAttribute('data-section-id');
          if (id) setActiveSection(id);
        }
      },
      { threshold: [0.35, 0.6], rootMargin: '-15% 0px -45% 0px' },
    );

    const sections = Array.from(document.querySelectorAll('[data-section-id]'));
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const layoutBackground =
    'relative min-h-screen bg-lightBg text-slate-900 dark:bg-night dark:text-slate-100 transition-colors duration-300';

  return (
    <div className={layoutBackground}>
      <Navbar name={profile.name} activeSection={activeSection} theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main className="space-y-6 pb-10">
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects />
        <Skills profile={profile} />
        <Experience profile={profile} />
        <Education profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
