import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Container>
        <p className="eyebrow mb-5">Backend Engineer — Java / Spring Boot</p>

        <h1 className="font-display font-semibold text-ink text-[2.5rem] leading-[1.05] tracking-tight sm:text-6xl md:text-7xl max-w-4xl">
          Two people, one seat,
          <br />
          zero conflicts.
        </h1>

        <p className="mt-7 max-w-xl text-base md:text-lg text-ink-soft">
          I build backend systems where the database is always right —
          booking engines, transaction ledgers, and the unglamorous
          logic that keeps them consistent when two requests land at once.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="font-mono text-sm bg-ink text-paper-card px-4 py-2.5 rounded-sm hover:bg-accent transition-colors"
          >
            View the work →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm border border-ink text-ink px-4 py-2.5 rounded-sm hover:bg-paper-card transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* ---- title block --------------------------------------------
            Modeled on the info block in the corner of an engineering
            drawing sheet: subject, revision, status, location. */}
        <div className="mt-16 max-w-2xl border border-rule-strong bg-paper-card font-mono text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            <TitleCell label="Name" value="N. Trivedi" />
            <TitleCell label="Rev" value="2026.1" />
            <TitleCell label="Status" value="Open to work" accent />
            <TitleCell label="Loc" value="Vadodara, IN" last />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TitleCell({
  label,
  value,
  accent,
  last,
}: {
  label: string;
  value: string;
  accent?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`border-t border-rule-strong px-4 py-3 ${
        !last ? "border-r" : ""
      }`}
    >
      <div className="text-ink-faint uppercase tracking-wide text-[0.65rem]">
        {label}
      </div>
      <div className={`mt-1 ${accent ? "text-accent" : "text-ink"}`}>
        {value}
      </div>
    </div>
  );
}