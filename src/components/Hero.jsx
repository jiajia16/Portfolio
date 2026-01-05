import Section from './Section';
import memoji from '../assets/memoji.png';

function Hero({ profile }) {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="home" className="relative overflow-hidden pt-16 md:pt-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-6 h-60 w-60 rounded-full bg-gradient-to-br from-[#ff7a7a]/35 via-[#ff9f43]/25 to-[#c471ed]/25 blur-3xl" />
        <div className="absolute right-1/5 top-10 h-52 w-52 rounded-full bg-accent/18 blur-3xl" />
      </div>

      {/* Content wrapper (NOT a card) */}
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">

        {/* Avatar */}
        <div className="relative h-28 w-28 scale-[1.08] rounded-full bg-gradient-to-br from-[#ff7a7a] via-[#ff9f43] to-[#c471ed] p-[3px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 p-2 dark:bg-night">
            <img
              src={memoji}
              alt="avatar"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
        {/* Text */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {profile.role} • {profile.location}
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] text-slate-900 dark:text-white md:text-6xl">
            I like building software
            <br />
            <span className="bg-gradient-to-r from-[#ff7a7a] via-[#ff9f43] to-[#c471ed] bg-clip-text text-transparent">
              and learning along the way!
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
            I’m a computer science student with an interest in clean interfaces and well-structured systems.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Get In Touch
          </a>


          <a
            href="JiaJia_Resume2026.pdf"
            download
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/40 dark:text-white"
          >
            Download CV
          </a>


        </div>



      </div>
    </Section>
  );
}

export default Hero;
