function TimelineItem({ entry }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-1 top-2 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-night text-accent shadow-glow dark:bg-nightSoft" />
      <div className="absolute left-3 top-6 h-full w-px bg-slate-200 dark:bg-white/10" aria-hidden />
      <div className="surface-card">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{entry.company}</h3>
            <p className="text-sm font-semibold text-accent">{entry.role}</p>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{entry.period}</p>
        </div>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
          {entry.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimelineItem;
