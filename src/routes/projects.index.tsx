import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/data/site";

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
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </>
  );
}