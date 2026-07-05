interface ProjectCardProps {
  method: string;
  endpoint: string;
  name: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  href?: string;
}

export default function ProjectCard({
  method,
  endpoint,
  name,
  period,
  summary,
  points,
  stack,
  href = "#",
}: ProjectCardProps) {
  return (
    <article className="border border-rule-strong bg-paper-card">
      {/* request line */}
      <div className="flex flex-wrap items-center gap-3 border-b border-rule-strong px-5 py-3 font-mono text-xs">
        <span className="text-accent font-semibold">{method}</span>
        <span className="text-ink">{endpoint}</span>
        <span className="ml-auto text-ink-faint">{period}</span>
      </div>

      <div className="px-5 py-6">
        <h3 className="font-display text-2xl font-semibold text-ink tracking-tight">
          {name}
        </h3>
        <p className="mt-2 text-sm text-ink-soft max-w-xl">{summary}</p>

        <ul className="mt-5 space-y-2.5">
          {points.map((point) => (
            <li
              key={point}
              className="text-sm text-ink-soft pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
          <a
            href={href}
            className="font-mono text-xs text-ink underline decoration-rule-strong underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            source →
          </a>
        </div>
      </div>
    </article>
  );
}