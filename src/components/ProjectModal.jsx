import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    // lock background scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    // focus panel when opened
    panelRef.current?.focus?.();
  }, [project]);

  if (!project) return null;

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-10 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onMouseDown={onClose} // click outside closes
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        onMouseDown={(e) => e.stopPropagation()} // prevent closing when clicking inside
        className="
          relative w-full max-w-3xl
          max-h-[85vh] overflow-y-auto
          rounded-2xl border border-white/10
          bg-slate-950/90 text-white
          shadow-2xl
          p-6
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Project</p>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-sm text-white/70">{project.oneLiner}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close dialog"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="mt-4 space-y-4 text-sm text-white/85">
          <p className="rounded-xl border border-white/10 bg-white/5 p-4">
            {project.description}
          </p>

          <InfoBlock title="Problem" body={project.problem} />
          <InfoBlock title="Solution" body={project.solution} />

          <ListBlock title="Key Features" items={project.highlights} />
          <ListBlock title="Challenges" items={project.challenges} />
          <ListBlock title="What I learned" items={project.whatILearned} />
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

function InfoBlock({ title, body }) {
  if (!body) return null;
  return (
    <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{title}</p>
      <p className="text-white/85">{body}</p>
    </div>
  );
}

function ListBlock({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="text-white/85">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectModal;
