import Section from './Section';

function Education({ profile }) {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Foundations"

    >
      <div className="grid gap-4 md:grid-cols-1">
        {profile.education.map((edu) => (
          <div key={edu.school} className="surface-card space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.school}</h3>
                <p className="text-sm font-semibold text-accent">{edu.program}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{edu.period}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.details.map((detail) => (
                <span
                  key={detail}
                  className="chip bg-white/80 text-slate-700 dark:bg-white/5 dark:text-slate-100"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Education;
