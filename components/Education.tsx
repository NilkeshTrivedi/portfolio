import Section from "@/components/ui/Section";

const schools = [
  {
    period: "Jun 2023 – May 2026",
    school: "Parul University, Vadodara",
    program: "Bachelor of Computer Application",
    score: "CGPA 8.25 / 10",
  },
  {
    period: "2022 – 2023",
    school: "Royal High School, Vadodara",
    program: "HSC",
    score: "75%",
  },
];

export default function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {schools.map((s) => (
          <div key={s.school} className="border border-rule-strong bg-paper-card px-5 py-4">
            <p className="eyebrow">{s.period}</p>
            <p className="mt-2 font-display font-semibold text-ink text-lg">
              {s.school}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{s.program}</p>
            <p className="mt-3 font-mono text-xs text-accent">{s.score}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}