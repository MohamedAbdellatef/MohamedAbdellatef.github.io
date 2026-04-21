import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-primary/50 hover:shadow-elegant">
      <div className="relative h-36 overflow-hidden border-b border-border bg-gradient-to-br from-secondary via-card to-secondary">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                style={{ height: `${24 + ((i * 13) % 36)}px` }}
                className="w-3 rounded-sm bg-gradient-to-t from-primary/70 to-[var(--primary-glow)]/40"
              />
            ))}
          </div>
        </div>
        <div className="absolute right-3 top-3 flex flex-wrap gap-1">
          {p.categories.slice(0, 2).map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-background/70 px-2 py-0.5 text-[10px] font-medium backdrop-blur"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{p.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="rounded-md bg-secondary/70 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Case study <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="GitHub repo"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}