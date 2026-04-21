import { Section } from "./section";
import { whatIBring, site } from "@/data/site";

export function About() {
  return (
    <Section id="about" eyebrow="about" title="Engineering data with intent.">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I chose data engineering because it sits exactly where rigor meets
            impact — clean systems that quietly move billions of rows so analysts
            and product teams can move fast.
          </p>
          <p>
            My focus is on building pipelines that don&apos;t wake people up at 3
            a.m.: idempotent jobs, proper data contracts, observability, and
            warehouses modeled for the questions the business actually asks.
          </p>
          <p>
            I&apos;m actively pursuing junior data engineering opportunities in{" "}
            <span className="text-foreground">{site.location}</span> — internships,
            full-time roles, or contract work where I can ship reliable data
            products from day one.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {whatIBring.map((w) => (
            <div
              key={w.title}
              className="rounded-lg border border-border bg-card p-4 transition-smooth hover:border-primary/40 hover:shadow-glow"
            >
              <p className="font-mono text-xs text-primary">→ {w.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}