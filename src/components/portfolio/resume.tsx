import { Section } from "./section";
import { cvHighlights, site, certifications, currentlyLearning } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="resume"
      title="A snapshot worth a download."
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            One PDF. Everything a hiring manager needs to know — focused on
            stack, projects, and outcomes.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {cvHighlights.map((h) => (
              <div key={h.label} className="rounded-lg border border-border bg-background p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {h.label}
                </p>
                <p className="mt-1 text-sm font-semibold">{h.value}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-6 gap-2">
            <a href={site.cvUrl} download>
              <Download className="h-4 w-4" /> Download CV (PDF)
            </a>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              certifications
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-primary">▹</span> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              currently learning
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {currentlyLearning.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-primary">▹</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}