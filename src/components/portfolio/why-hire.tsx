import { Section } from "./section";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    h: "I build for reliability, not demos.",
    p: "Idempotent pipelines, tested models, and observability baked in from day one.",
  },
  {
    h: "I learn fast, in public.",
    p: "New tools land in working code within days — bootcamps, docs, real projects.",
  },
  {
    h: "I write clean, maintainable code.",
    p: "Type hints, modular Python, well-named SQL, version-controlled everything.",
  },
  {
    h: "I think about the business.",
    p: "Every model and metric ties back to a stakeholder question.",
  },
  {
    h: "I&apos;m UAE-based and ready.",
    p: "Open to junior roles, internships, and contract work — start immediately.",
  },
];

export function WhyHire() {
  return (
    <Section
      id="why-hire"
      eyebrow="why hire me"
      title="The case for a high-potential hire."
      description="A short, honest pitch — written for recruiters and hiring managers who scan first and read second."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {points.map((pt) => (
          <div
            key={pt.h}
            className="flex gap-3 rounded-xl border border-border bg-card p-5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold" dangerouslySetInnerHTML={{ __html: pt.h }} />
              <p className="mt-1 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: pt.p }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}