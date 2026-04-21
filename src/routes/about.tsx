import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { WhyHire } from "@/components/portfolio/why-hire";
import { Resume } from "@/components/portfolio/resume";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name} · Junior Data Engineer` },
      {
        name: "description",
        content:
          "About me — a junior data engineer in the UAE focused on reliable pipelines, clean SQL, and analytics that drive decisions.",
      },
      { property: "og:title", content: `About ${site.name}` },
      {
        property: "og:description",
        content:
          "Background, skills, learning journey, and why I'm a strong junior data engineering hire in the UAE.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="border-b border-border bg-hero">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">// about</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Engineer-minded. Data-driven. <span className="text-gradient">UAE-ready.</span>
          </h1>
        </div>
      </div>
      <About />
      <Skills />
      <Experience />
      <Resume />
      <WhyHire />
    </>
  );
}