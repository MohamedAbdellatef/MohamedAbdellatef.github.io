import { Section } from "./section";
import { repos, site } from "@/data/site";
import { Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GithubSection() {
  return (
    <Section
      id="github"
      eyebrow="open source"
      title="On GitHub."
      description="Selected repositories. Pulled from a local config now — easily swap to the GitHub API when ready."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/40 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-sm">{r.name}</span>
              </div>
              {r.stars !== undefined && (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5" /> {r.stars}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">{r.language}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" className="gap-2">
          <a href={site.github} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" /> View all on GitHub
          </a>
        </Button>
      </div>
    </Section>
  );
}