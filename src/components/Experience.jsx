import Section from './Section';
import TimelineItem from './TimelineItem';

function Experience({ profile }) {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Places I've learned from"

    >
      <div className="space-y-8">
        {profile.experience.map((entry) => (
          <TimelineItem key={`${entry.company}-${entry.period}`} entry={entry} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
