import { useMemo, useState } from 'react';
import Section from './Section';

function Contact({ profile }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('Hello from your portfolio');
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name || 'A visitor'} (${formData.email || 'no email provided'})`,
    );
    return `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  }, [formData, profile.contact.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk"
      subtitle={profile.contact.message}
      subtitleClass="sm:whitespace-nowrap"
      className="pb-20"
    >
      <div className="grid gap-6 md:grid-cols-1">
        <div className="surface-card space-y-4">
          <p className="text-sm text-slate-700 dark:text-slate-200">
            Prefer a direct note? I read every message and reply within 24 hours.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <ContactCard title="Email" href={`mailto:${profile.contact.email}`} value={profile.contact.email} />
            <ContactCard title="LinkedIn" href={profile.contact.linkedin} value="Connect" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Calendars can get busy, drop a quick summary so I can come prepared.
          </p>
        </div>



      </div>
    </Section>
  );
}

function ContactCard({ title, href, value }) {
  return (
    <a
      className="surface-card flex items-center justify-between gap-3 border border-slate-200/70 text-slate-900 transition hover:border-accent hover:text-accent dark:border-white/10 dark:text-white"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{title}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
      <span aria-hidden>↗</span>
    </a>
  );
}

export default Contact;
