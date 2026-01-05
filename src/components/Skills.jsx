import Section from './Section';
import SkillCard from './SkillCard';

function Skills({ profile }) {
  const { skills } = profile;

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {skills.strengths.map((strength) => (
          <div key={strength.title} className="surface-card space-y-2">
            <p className="text-sm uppercase tracking-[0.18em] text-accent">{strength.title}</p>
            <p className="text-sm text-slate-700 dark:text-slate-200">{strength.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <SkillCard title="Frontend" items={skills.frontend} />
        <SkillCard title="Backend" items={skills.backend} />
        <SkillCard title="Languages" items={skills.languages} />
        <SkillCard title="Tools" items={skills.tools} />
        <SkillCard title="Cloud / DevOps" items={skills.cloud} />
      </div>
    </Section>
  );
}

export default Skills;
