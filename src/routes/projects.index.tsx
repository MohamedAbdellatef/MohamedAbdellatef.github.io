import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects, type ProjectCategory } from "@/data/site";
import { cn } from "@/lib/utils";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Data Pipelines",
  "Analytics Engineering",
  "Dashboards",
  "Automation",
  "SQL Projects",
  "Cloud Projects",
];

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects · Data Engineering Portfolio · UAE" },
      {
        name: "description",
        content:
          "Featured data engineering projects: ETL pipelines, dbt analytics, dashboards, automation, SQL and cloud builds.",
      },
      { property: "og:title", content: "Data Engineering Projects" },
      {
        property: "og:description",
        content:
          "Case studies covering ETL/ELT, dbt + BigQuery analytics, and API-to-dashboard data products.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.categories.includes(active))),
    [active],
  );
  return (
    <>
      <div className="border-b border-border bg-hero">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">// projects</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Case studies, not <span className="text-gradient">demos.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Each project documents the problem, the architecture, the trade-offs, and the
            measurable outcome — the way real engineering work gets evaluated.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-smooth",
                active === f
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No projects in this category yet — coming soon.
          </p>
        )}
      </section>
    </>
  );
}