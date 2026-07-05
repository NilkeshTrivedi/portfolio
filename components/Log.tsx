import Section from "@/components/ui/Section";

interface Entry {
  date: string;
  type: "training" | "cert" | "achievement";
  title: string;
  detail: string;
}

const entries: Entry[] = [
  {
    date: "2026",
    type: "cert",
    title: "DevOps Bootcamp — Udemy",
    detail: "Completed.",
  },
  {
    date: "2025.06–08",
    type: "training",
    title: "Impact Training for Placement",
    detail:
      "Intensive DSA, Java, and coding-interview practice; applied agile-inspired workflows to debugging and code quality.",
  },
  {
    date: "2025",
    type: "achievement",
    title: "250+ DSA problems solved",
    detail: "Across LeetCode and GeeksforGeeks.",
  },
  {
    date: "2025",
    type: "achievement",
    title: "HackerRank certifications",
    detail: "Software Engineer, and REST API.",
  },
  {
    date: "2024",
    type: "cert",
    title: "Java Programming — NPTEL, IIT Kharagpur",
    detail: "Completed.",
  },
];

const typeLabel: Record<Entry["type"], string> = {
  training: "TRAINING",
  cert: "CERT",
  achievement: "ACHIEVEMENT",
};

export default function Log() {
  return (
    <Section id="log" index="03" title="Log" note="reverse chronological">
      <div className="font-mono text-sm">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="grid grid-cols-[5.5rem_6rem_1fr] sm:grid-cols-[6rem_7rem_1fr] gap-4 py-4 border-b border-rule last:border-b-0"
          >
            <span className="text-ink-faint">{entry.date}</span>
            <span className="text-accent text-xs pt-0.5">
              {typeLabel[entry.type]}
            </span>
            <div>
              <p className="text-ink">{entry.title}</p>
              <p className="text-ink-soft text-xs mt-1 font-sans">
                {entry.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}