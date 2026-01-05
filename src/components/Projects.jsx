import { lazy, Suspense, useMemo, useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects, moreProjects } from '../data/projects';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectModal = lazy(() => import('./ProjectModal'));

const filters = ['All', 'Frontend', 'Backend', 'Systems', 'Data', 'More'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const isMoreView = activeFilter === 'More';

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
    if (activeFilter === 'All') return sorted;
    return sorted.filter((project) => project.categoryTags.includes(activeFilter));
  }, [activeFilter]);

  const count = isMoreView ? (moreProjects?.length || 0) : filteredProjects.length;

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="Data-driven stories with lean surfaces, crisp interactions, and a calm sense of velocity."
    >
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setSelectedProject(null);
              }}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${isActive
                ? 'bg-accent text-slate-900 shadow-glow'
                : 'border border-slate-200/80 bg-white/70 text-slate-700 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5 dark:text-slate-100'
                }`}
            >
              {filter}
              {isActive && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-accent"
                />
              )}
            </button>
          );
        })}

        {/* small count badge */}
        <div className="ml-auto hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-2 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 md:flex">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-semibold">{count}</span>
          <span className="text-slate-500 dark:text-slate-400">projects</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-8">
        {/* MORE LIST VIEW */}
        {isMoreView ? (
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="mx-auto grid max-w-3xl gap-3"
          >
            {(!moreProjects || moreProjects.length === 0) ? (
              <div className="surface-card text-center text-slate-700 dark:text-slate-200">
                <p className="text-lg font-semibold">No projects in this view yet.</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Add items to <span className="font-semibold">moreProjects</span> and they’ll show up here.
                </p>
              </div>
            ) : (
              moreProjects.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-accent dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                        {p.title}
                      </h4>
                      {p.shortDesc && (
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          {p.shortDesc}
                        </p>
                      )}
                    </div>

                    {p.period && (
                      <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {p.period}
                      </span>
                    )}
                  </div>

                  {!!p.tags?.length && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="chip bg-white/80 text-slate-700 dark:bg-white/5 dark:text-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {(p.githubUrl || p.liveUrl) && (
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-accent hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-accent hover:underline"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </motion.div>
        ) : (

          <motion.div layout className="grid gap-8">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                className="surface-card col-span-2 text-center text-slate-700 dark:text-slate-200"
              >
                <p className="text-lg font-semibold">No projects in this view yet.</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Try another filter or check back soon — more case studies on the way.
                </p>
              </motion.div>
            ) : (
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 14, scale: 0.98, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(6px)' }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <ProjectCard project={project} onSelect={setSelectedProject} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </motion.div>
        )}
      </div>

      {/* ✅ Modal ONLY for non-More */}
      {!isMoreView && (
        <Suspense fallback={null}>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </Suspense>
      )}
    </Section>
  );
}

export default Projects;
