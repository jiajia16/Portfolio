function ProjectCard({ project, onSelect, index = 0 }) {
  const reversed = index % 2 === 1;

  return (
    <article
      className={`relative h-full cursor-pointer overflow-hidden rounded-3xl border border-[#2d1d46] bg-gradient-to-br from-[#0f0a1a] via-[#140d25] to-[#0d091a] p-6 shadow-[0_20px_80px_rgba(92,36,200,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_120px_rgba(92,36,200,0.35)] ${project.featured ? 'md:col-span-2' : ''
        }`}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} details`}
    >
      {/* Glow background */}
      <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-[#6a2fe4]/30 blur-3xl" aria-hidden />
      <div className="absolute right-10 top-4 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className={`relative flex flex-col gap-10 ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center`}>
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8a8ff]">
            {project.featured ? 'Featured Project' : 'Project'}
          </p>
          <h3 className="text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5d4fb1] via-[#9b7cf4] to-[#5d4fb1] opacity-80 blur-md" aria-hidden />
            <div className="relative rounded-3xl bg-gradient-to-r from-[#2d2344]/90 via-[#3c2a5f]/92 to-[#2d2344]/90 px-5 py-4 text-sm text-slate-100 shadow-lg">
              {project.description}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-accent">
            <a className="hover:underline" href={project.githubUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-2xl border border-[#3a285a] bg-[#1b132d] shadow-[0_18px_60px_rgba(38,15,71,0.45)]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-48 items-center justify-center text-sm text-slate-300 md:h-56">
                Image coming soon
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative sparks */}
      <div className="pointer-events-none absolute -bottom-3 left-6 flex gap-2 text-white/60 md:static md:mt-4">
        <span>✺</span>
        <span>✺</span>
      </div>
    </article>
  );
}

export default ProjectCard;
