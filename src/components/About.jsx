import Section from './Section';

function About({ profile }) {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="About me"
      subtitle={
        <span className="whitespace-nowrap">
          Computer science student who enjoys building clean interfaces, solid systems, and projects that feel good to use.
        </span>
      }
    >
      <div className="grid gap-6">
        <div className="surface-card space-y-4">
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
            {profile.about.summary}
          </p>

          <ul className="space-y-3">
            {profile.about.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                <span className="mt-1 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default About;
