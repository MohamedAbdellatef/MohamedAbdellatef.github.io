import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import profilePhoto from "@/assets/profile.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-20 md:pt-28">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1 text-[11px] backdrop-blur"
            >
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-mono text-muted-foreground">
                open to junior roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
            >
              {site.name}.
              <br />
              <span className="text-gradient">{site.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <Button asChild size="lg" className="gap-2">
                <Link to="/projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={site.cvUrl} download>
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2">
                <a href={site.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2">
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2">
                <Link to="/contact">
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-elegant backdrop-blur">
              <img
                src={profilePhoto}
                alt={`${site.name} — ${site.role}`}
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}