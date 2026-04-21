import { Section } from "./section";
import { skills } from "@/data/site";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="stack"
      title="The tools I reach for."
      description="Grouped by where they live in the data lifecycle — from raw ingestion to BI."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div
            key={g.group}
            className="group rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/40"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {g.group}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium transition-smooth group-hover:border-primary/30"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}