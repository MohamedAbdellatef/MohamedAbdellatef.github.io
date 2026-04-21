import { Link } from "@tanstack/react-router";
import { Moon, Sun, Github, Linkedin } from "lucide-react";
import { useTheme } from "./theme-provider";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-primary to-[var(--primary-glow)] font-mono text-xs font-bold text-primary-foreground shadow-glow">
            {site.name
              .split(" ")
              .map((s) => s[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
          <span className="font-mono text-sm tracking-tight">
            <span className="text-muted-foreground">~/</span>
            <span className="text-foreground">{site.name.split(" ")[0].toLowerCase()}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-smooth hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary/60" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild size="icon" variant="ghost" aria-label="GitHub">
            <a href={site.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="LinkedIn">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}