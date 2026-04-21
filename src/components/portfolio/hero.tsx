import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1 text-xs backdrop-blur"
        >
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-mono text-muted-foreground">
            available for junior data engineering roles · {site.location}
          </span>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
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
              className="mt-8 flex flex-wrap gap-3"
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
            className="relative rounded-xl border border-border/80 bg-card/60 p-1 shadow-elegant backdrop-blur"
          >
            <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                ~/pipelines/health.sh
              </span>
            </div>
            <pre className="overflow-x-auto p-4 text-[12.5px] leading-relaxed">
              <code className="font-mono">
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-foreground">airflow dags list-runs --state success</span>
                {"\n"}
                <span className="text-emerald-500">✓</span> dag_sales_etl       last_run=01:14 UTC
                {"\n"}
                <span className="text-emerald-500">✓</span> dag_dbt_marts       last_run=01:32 UTC
                {"\n"}
                <span className="text-emerald-500">✓</span> dag_api_ingest      last_run=02:00 UTC
                {"\n\n"}
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-foreground">dbt build --select marts</span>
                {"\n"}
                <span className="text-primary">PASS</span> 62 models · 184 tests · 0 failures
                {"\n"}
                <span className="text-muted-foreground">// shipping data products since 2023</span>
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}