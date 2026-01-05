import { useEffect, useRef, useState } from 'react';

function Section({ id, eyebrow, title, subtitle, subtitleClass = '', className = '', children }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      data-section-id={id}
      ref={sectionRef}
      className={`py-16 md:py-24 ${className}`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-6 px-6 md:px-10 transition duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {(eyebrow || title || subtitle) && (
          <header className="max-w-3xl space-y-3">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <div className="flex items-center gap-4">
                <div className="accent-bar" aria-hidden />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p className={`text-lg text-slate-600 dark:text-slate-300 ${subtitleClass}`}>{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
