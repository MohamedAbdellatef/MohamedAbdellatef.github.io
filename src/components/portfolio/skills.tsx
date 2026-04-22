import { Section } from "./section";
import { skills } from "@/data/site";

const iconSlug: Record<string, string> = {
  // Programming
  Python: "python",
  SQL: "postgresql",
  Bash: "gnubash",
  TypeScript: "typescript",
  // Data Engineering
  "ETL / ELT": "apacheairflow",
  "Data Modeling": "databricks",
  Airflow: "apacheairflow",
  dbt: "dbt",
  Spark: "apachespark",
  Kafka: "apachekafka",
  // Warehousing & DBs
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  BigQuery: "googlebigquery",
  Snowflake: "snowflake",
  Redshift: "amazonredshift",
  // Cloud
  "AWS (S3, Glue, Lambda)": "amazonwebservices",
  "GCP (BigQuery, Cloud Run)": "googlecloud",
  Azure: "microsoftazure",
  // Tools
  Git: "git",
  Docker: "docker",
  Pandas: "pandas",
  "REST APIs": "openapiinitiative",
  "Terraform (basics)": "terraform",
  // BI & Analytics
  "Power BI": "powerbi",
  Tableau: "tableau",
  "Looker Studio": "looker",
  Excel: "microsoftexcel",
};

function iconUrl(name: string) {
  const slug = iconSlug[name];
  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="stack"
      title="The tools I reach for."
      description="Grouped by where they live in the data lifecycle — from raw ingestion to BI."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div
            key={g.group}
            className="group rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/40"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {g.group}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => {
                const url = iconUrl(i);
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium transition-smooth group-hover:border-primary/30"
                  >
                    {url && (
                      <img
                        src={url}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-3.5 w-3.5"
                      />
                    )}
                    {i}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}