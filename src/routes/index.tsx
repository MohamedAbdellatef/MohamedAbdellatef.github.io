import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { FeaturedProjects } from "@/components/portfolio/featured-projects";
import { GithubSection } from "@/components/portfolio/github-section";
import { Resume } from "@/components/portfolio/resume";
import { Experience } from "@/components/portfolio/experience";
import { WhyHire } from "@/components/portfolio/why-hire";
import { Contact } from "@/components/portfolio/contact";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} · Junior Data Engineer · UAE Portfolio` },
      {
        name: "description",
        content:
          "Junior data engineer in the UAE building reliable ETL/ELT pipelines, dbt models, and cloud-based analytics. View projects, GitHub, and CV.",
      },
      { property: "og:title", content: `${site.name} — Junior Data Engineer` },
      {
        property: "og:description",
        content:
          "Reliable data pipelines, modern warehousing, and analytics engineering — built by a UAE-based junior data engineer.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <GithubSection />
      <Resume />
      <Experience />
      <WhyHire />
      <Contact />
    </>
  );
}
