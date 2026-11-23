import { useEffect, useState } from "react";
import { awards, certifications, education, experience, profile, projects, skills, stats, stem, tallyPlate } from "./data/profile";
import { Award, Download, GitHub, LinkedIn, Mail, MapPin, Moon, Sun } from "./components/Icons";
import { Card, Chip, Section } from "./components/ui";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#stem", label: "STEM" },
  { href: "#contact", label: "Contact" },
];

// Assemble the address at runtime so it isn't in the static HTML.
function useEmail() {
  const [email, setEmail] = useState("");
  useEffect(() => setEmail(`${profile.emailUser}@${profile.emailDomain}`), []);
  return email;
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* storage unavailable */ }
  };
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-bold tracking-tight text-slate-900 dark:text-white">
          Murari<span className="text-teal-700 dark:text-teal-400">.</span>
        </a>
        <nav className="flex items-center gap-1">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 sm:block dark:text-slate-400 dark:hover:text-white">
              {n.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

const btnPrimary = "inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400";
const btnGhost = "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 ring-inset hover:bg-slate-50 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-900";

function Hero({ email }: { email: string }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/40 dark:to-slate-950" />
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
            <MapPin /> {profile.location}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{profile.name}</h1>
          <p className="mt-3 text-xl font-semibold text-teal-700 dark:text-teal-400">{profile.title}</p>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href={profile.cv} download className={btnPrimary}><Download /> Download CV</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btnGhost}><LinkedIn /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={btnGhost}><GitHub /> GitHub</a>
            {email && <a href={`mailto:${email}`} className={btnGhost}><Mail /> Email</a>}
          </div>
        </div>
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={208}
          height={208}
          className="size-44 shrink-0 rounded-full object-cover shadow-xl ring-4 ring-white sm:size-52 dark:ring-slate-800"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Architecture-minded, delivery-focused">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-lg leading-relaxed">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <Card key={s.label} className="p-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-extrabold text-slate-900 dark:text-white">{s.value}</dd>
              <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</dd>
            </Card>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-8 border-l border-slate-200 pl-6 sm:pl-8 dark:border-slate-800">
        {experience.map((r) => (
          <li key={r.title + r.period} className="relative">
            <span className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-teal-600 ring-4 ring-white sm:-left-[39px] dark:bg-teal-400 dark:ring-slate-950" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{r.title}</h3>
              <p className="text-sm font-medium whitespace-nowrap text-slate-500 dark:text-slate-400">{r.period}</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {r.company}{r.client && <> · Client: <span className="font-medium">{r.client}</span></>} · {r.location}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-teal-600">
              {r.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            {r.tech && (
              <div className="mt-3 flex flex-wrap gap-2">
                {r.tech.map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/40">
      <Section id="projects" eyebrow="Featured work" title="Selected projects">
        <TallyPlate />
        <h3 className="mt-14 mb-6 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Professional projects</h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.name} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">{p.org}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.role}</p>
              <p className="mt-4">{p.summary}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm marker:text-teal-600">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {p.tech.map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

function TallyPlate() {
  const t = tallyPlate;
  return (
    <Card className="p-0 overflow-hidden ring-1 ring-teal-600/20 dark:ring-teal-400/20">
      <div className="grid lg:grid-cols-2">
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">{t.badge}</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{t.name}</h3>
          <p className="mt-4">{t.summary}</p>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm marker:text-teal-600">
            {t.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.tech.map((x) => <Chip key={x}>{x}</Chip>)}
          </div>
          {t.url && <a href={t.url} target="_blank" rel="noreferrer" className={`${btnPrimary} mt-6`}>Visit Tally Plate</a>}
        </div>
        <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 lg:border-t-0 lg:border-l dark:border-slate-800 dark:bg-slate-950/50">
          <h4 className="font-semibold text-slate-900 dark:text-white">The agent pipeline</h4>
          <ol className="mt-5 space-y-4">
            {t.pipeline.map((p, i) => (
              <li key={p.step} className="flex gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white dark:bg-teal-500 dark:text-slate-950">{i + 1}</span>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">{p.step}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{p.agents}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-lg bg-white p-3 text-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
            <span className="font-semibold text-slate-900 dark:text-slate-100">Guardrails: </span>{t.guardrails}
          </p>
        </div>
      </div>
    </Card>
  );
}

function Stem() {
  return (
    <Section id="stem" eyebrow="Giving back" title={`${stem.role}, ${stem.org}`}>
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <div>
          <p className="text-lg leading-relaxed">{stem.summary}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Volunteering since {stem.since}</p>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            {stem.impact.map((s) => (
              <Card key={s.label} className="p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold text-slate-900 dark:text-white">{s.value}</dd>
                <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</dd>
              </Card>
            ))}
          </dl>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{stem.impactNote}</p>
        </div>
        <ul className="space-y-4">
          {stem.highlights.map((h) => (
            <li key={h.title}>
              <Card className="p-5">
                <p className="font-semibold text-slate-900 dark:text-slate-100">{h.title}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{h.detail}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <Card key={g.group}>
            <h3 className="font-semibold text-slate-900 dark:text-white">{g.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => <Chip key={i}>{i}</Chip>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Credentials() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/40">
      <Section id="credentials" eyebrow="Credentials" title="Certifications, education & awards">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="font-semibold text-slate-900 dark:text-white">Certifications</h3>
            <ul className="mt-4 space-y-4">
              {certifications.map((c) => (
                <li key={c.name}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="font-medium text-slate-900 hover:text-teal-700 dark:text-slate-100 dark:hover:text-teal-400">{c.name}</a>
                  ) : (
                    <span className="font-medium text-slate-900 dark:text-slate-100">{c.name}</span>
                  )}
                  <p className="text-sm text-slate-500 dark:text-slate-400">{c.issuer} · {c.date}</p>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-slate-900 dark:text-white">Education</h3>
            <p className="mt-4 font-medium text-slate-900 dark:text-slate-100">{education.degree}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{education.school} · {education.year}</p>
            <p className="mt-3 text-sm">{education.note}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-slate-900 dark:text-white">Awards</h3>
            <ul className="mt-4 space-y-3">
              {awards.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <Award className="mt-0.5 size-5 shrink-0 text-teal-600 dark:text-teal-400" /> {a}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
}

function Contact({ email }: { email: string }) {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <Card className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-lg">
          Open to conversations about senior engineering and technical leadership roles, architecture, and interesting .NET, React or AWS work.
        </p>
        <div className="flex flex-wrap gap-3">
          {email && <a href={`mailto:${email}`} className={btnPrimary}><Mail /> {email}</a>}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btnGhost}><LinkedIn /> LinkedIn</a>
        </div>
      </Card>
    </Section>
  );
}

export default function App() {
  const email = useEmail();
  return (
    <>
      <Header />
      <main>
        <Hero email={email} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Stem />
        <Contact email={email} />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
