import { Link } from "@tanstack/react-router";
import { Section } from "./section";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const list = projects.filter((p) => p.featured);
  return (
    <Section
      id="projects"
      eyebrow="featured work"
      title="Projects that prove the craft."
      description="Each case study includes the problem, architecture, and measurable outcomes — the way recruiters and tech leads actually evaluate engineers."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" className="gap-2">
          <Link to="/projects">
            See all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}