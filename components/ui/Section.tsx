import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  id: string;
  index: string; // e.g. "01"
  title: string;
  note?: string; // small right-aligned mono note, e.g. a count or date range
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  index,
  title,
  note,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container>
        <div className="hairline pt-6 flex items-baseline justify-between gap-4 mb-10 md:mb-14">
          <h2 className="font-display font-semibold uppercase tracking-wide text-ink text-sm md:text-base">
            <span className="text-accent">§{index}</span>{" "}
            <span className="ml-1">{title}</span>
          </h2>
          {note && (
            <span className="eyebrow whitespace-nowrap hidden sm:inline">
              {note}
            </span>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}