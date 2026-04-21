import { Section } from "./section";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="journey"
      title="A growth-oriented track record."
      description="Self-driven projects, bootcamp work, and academic builds — chosen for what they taught and shipped."
    >
      <ol className="relative space-y-6 border-l border-border pl-6">
        {experience.map((e) => (
          <li key={e.title} className="relative">
            <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full border border-border bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
            <p className="text-base font-semibold">{e.title}</p>
            <p className="text-sm text-primary">{e.org}</p>
            <p className="mt-1 text-sm text-muted-foreground">{e.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}