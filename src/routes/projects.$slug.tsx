import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project: Project | undefined = projects.find(
      (p) => p.slug === params.slug,
    );
    if (!project) throw notFound();
    return { project: project as Project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Case Study` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.summary },
        ]
      : [{ title: "Project not found" }],
  }),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-destructive">{error.message}</p>
      <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <p className="mt-2 text-muted-foreground">This case study doesn&apos;t exist.</p>
      <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const data = Route.useLoaderData() as { project: Project };
  const p = data.project;
  return (
    <article>
      <div className="border-b border-border bg-hero">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.categories.map((c) => (
              <span key={c} className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs">
                {c}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {p.github && (
              <Button asChild variant="outline" className="gap-2">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> View code
                </a>
              </Button>
            )}
            {p.demo && (
              <Button asChild className="gap-2">
                <a href={p.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {p.metrics && (
          <div className="mb-10 grid gap-3 sm:grid-cols-3">
            {p.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-card p-5 text-center">
                <p className="text-2xl font-bold text-gradient">{m.value}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <Block title="Problem">{p.problem}</Block>
        <Block title="My role">{p.role}</Block>

        <div className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-primary">// architecture</h2>
          <ol className="mt-3 space-y-2">
            {p.architecture.map((a, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-3 text-sm">
                <span className="font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-primary">// stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-primary">// outcomes</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {p.outcomes.map((o) => (
                <li key={o} className="flex gap-2"><span className="text-primary">▹</span>{o}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-primary">// challenges</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {p.challenges.map((c) => (
                <li key={c} className="flex gap-2"><span className="text-primary">▹</span>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="font-mono text-xs uppercase tracking-wider text-primary">// {title.toLowerCase()}</h2>
      <p className="mt-2 text-base text-muted-foreground">{children}</p>
    </div>
  );
}