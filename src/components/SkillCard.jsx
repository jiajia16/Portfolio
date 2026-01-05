function SkillCard({ title, items }) {
  return (
    <div className="surface-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <span className="h-2 w-2 rounded-full bg-accent" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="chip bg-white/80 text-slate-700 dark:bg-white/5 dark:text-slate-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
