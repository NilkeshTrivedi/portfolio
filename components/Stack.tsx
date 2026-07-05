import Section from "@/components/ui/Section";

const groups = [
  { key: "languages", label: "Languages", items: ["Java", "Python", "SQL", "JavaScript"] },
  { key: "backend", label: "Backend", items: ["Spring Boot", "REST APIs", "Hibernate / JPA"] },
  { key: "databases", label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { key: "tools", label: "Tools", items: ["Git", "Docker", "Postman"] },
  {
    key: "concepts",
    label: "Concepts",
    items: ["OOP", "Data Structures & Algorithms", "SDLC", "Agile", "JWT Auth"],
  },
];

export default function Stack() {
  return (
    <Section id="stack" index="01" title="Stack" note="grouped by layer">
      <div className="border border-rule-strong divide-y divide-rule-strong bg-paper-card">
        {groups.map((group) => (
          <div
            key={group.key}
            className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 px-5 py-4"
          >
            <div className="font-mono text-xs uppercase tracking-wide text-ink-faint pt-0.5">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}