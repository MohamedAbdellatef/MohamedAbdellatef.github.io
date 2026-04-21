import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-mono text-sm text-muted-foreground">// signal</h3>
          <p className="mt-2 text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.role} · {site.location}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Building reliable data systems. Open to junior data engineering roles in the UAE.
          </p>
        </div>
        <div>
          <h3 className="font-mono text-sm text-muted-foreground">// explore</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href={site.cvUrl} className="hover:text-primary">Download CV</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm text-muted-foreground">// connect</h3>
          <div className="mt-3 flex gap-3">
            <a href={site.github} target="_blank" rel="noreferrer" className="rounded-md border border-border p-2 hover:bg-secondary" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-border p-2 hover:bg-secondary" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href={`mailto:${site.email}`} className="rounded-md border border-border p-2 hover:bg-secondary" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            $ echo "let&apos;s build something reliable."
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Crafted with care.
      </div>
    </footer>
  );
}