import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/contact";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name} · Junior Data Engineer UAE` },
      {
        name: "description",
        content:
          "Get in touch — open to junior data engineering roles, internships, and data-focused opportunities in the UAE.",
      },
      { property: "og:title", content: `Contact ${site.name}` },
      {
        property: "og:description",
        content: "Open to junior data engineering roles in the UAE. Email, LinkedIn, GitHub.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <div className="border-b border-border bg-hero">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">// contact</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s build something <span className="text-gradient">reliable.</span>
          </h1>
        </div>
      </div>
      <Contact />
    </>
  );
}