export type ProjectCategory =
  | "Data Pipelines"
  | "Analytics Engineering"
  | "Dashboards"
  | "Automation"
  | "SQL Projects"
  | "Cloud Projects";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  outcomes: string[];
  challenges: string[];
  architecture: string[];
  stack: string[];
  categories: ProjectCategory[];
  github?: string;
  demo?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  stars?: number;
  url: string;
}

export const site = {
  name: "Your Name",
  role: "Junior Data Engineer",
  location: "Dubai, UAE",
  email: "you@example.com",
  whatsapp: "", // e.g. "+971500000000"
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  cvUrl: "/cv.pdf",
  tagline:
    "I build reliable data pipelines and turn raw data into decisions teams can trust.",
  intro:
    "Data engineer focused on clean ETL/ELT design, scalable warehousing, and analytics that move the business forward. Currently open to junior roles in the UAE.",
};

export const whatIBring = [
  {
    title: "Reliable pipelines",
    body: "Idempotent ETL/ELT with monitoring, retries, and clear lineage.",
  },
  {
    title: "Modeled for decisions",
    body: "Star-schema warehouses and dbt models built for analyst velocity.",
  },
  {
    title: "Cloud-native mindset",
    body: "Cost-aware design across BigQuery, Snowflake, AWS and GCP.",
  },
  {
    title: "Business-aware",
    body: "I translate stakeholder questions into measurable data products.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Python", "SQL", "Bash", "TypeScript"] },
  {
    group: "Data Engineering",
    items: ["ETL / ELT", "Data Modeling", "Airflow", "dbt", "Spark", "Kafka"],
  },
  {
    group: "Warehousing & DBs",
    items: ["PostgreSQL", "MySQL", "BigQuery", "Snowflake", "Redshift"],
  },
  {
    group: "Cloud",
    items: ["AWS (S3, Glue, Lambda)", "GCP (BigQuery, Cloud Run)", "Azure"],
  },
  {
    group: "Tools",
    items: ["Git", "Docker", "Pandas", "REST APIs", "Terraform (basics)"],
  },
  {
    group: "BI & Analytics",
    items: ["Power BI", "Tableau", "Looker Studio", "Excel"],
  },
];

export const projects: Project[] = [
  {
    slug: "ecom-etl-pipeline",
    title: "E-Commerce ETL Pipeline on AWS",
    summary:
      "End-to-end batch pipeline ingesting multi-source sales data into a Redshift warehouse with daily orchestration.",
    problem:
      "A simulated retailer had sales, inventory and marketing data scattered across CSV exports, a MySQL operational DB and a marketing API — analysts spent days reconciling numbers.",
    role: "Sole data engineer — designed schema, built pipeline, wrote tests and deployed orchestration.",
    architecture: [
      "Sources → S3 raw zone (Parquet)",
      "AWS Glue + Python jobs for cleaning & conformance",
      "Loaded into Redshift star schema (fact_sales, dim_*)",
      "Airflow DAG for daily orchestration with SLA + retries",
      "Power BI dashboards on top of curated marts",
    ],
    stack: ["Python", "AWS S3", "Glue", "Redshift", "Airflow", "Power BI"],
    categories: ["Data Pipelines", "Cloud Projects"],
    outcomes: [
      "Reduced reporting cycle from 3 days to under 1 hour",
      "Single source of truth for 5 sales metrics",
      "98% pipeline success rate over 60-day test run",
    ],
    challenges: [
      "Late-arriving marketing data required idempotent upserts using staging tables and MERGE.",
      "Schema drift in CSVs handled by a schema-registry layer in Glue.",
    ],
    metrics: [
      { label: "Records / day", value: "1.2M" },
      { label: "Latency", value: "< 1h" },
      { label: "Pipelines", value: "7 DAGs" },
    ],
    featured: true,
    github: "https://github.com/your-handle/ecom-etl",
  },
  {
    slug: "sql-analytics-warehouse",
    title: "Analytics Warehouse with dbt + BigQuery",
    summary:
      "Modeled a SaaS company's raw event data into a tested, documented analytics layer powering self-serve reporting.",
    problem:
      "Raw product events and Stripe data lived in BigQuery with no consistent definitions of MRR, churn or active users.",
    role: "Built the dbt project from scratch — staging, intermediate and marts layers with tests and exposures.",
    architecture: [
      "Fivetran-style raw extracts in BigQuery",
      "dbt staging models for type casting & renaming",
      "Intermediate models for sessions and subscriptions",
      "Marts: fct_revenue, dim_customer, fct_engagement",
      "Looker Studio dashboards bound to mart layer",
    ],
    stack: ["dbt", "BigQuery", "SQL", "Looker Studio", "GitHub Actions"],
    categories: ["Analytics Engineering", "SQL Projects"],
    outcomes: [
      "Defined 12 canonical KPIs adopted by product & finance",
      "100% of marts covered by dbt tests",
      "Documented lineage with dbt docs site auto-deployed via CI",
    ],
    challenges: [
      "Modeled slowly-changing subscription states using Type-2 dimensions.",
      "Optimized partition + cluster keys to cut query cost ~40%.",
    ],
    metrics: [
      { label: "Models", value: "62" },
      { label: "Tests", value: "180+" },
      { label: "Cost saved", value: "~40%" },
    ],
    featured: true,
    github: "https://github.com/your-handle/dbt-analytics",
  },
  {
    slug: "api-to-dashboard",
    title: "Real-Time API → Dashboard Data Product",
    summary:
      "Streaming-ish pipeline pulling weather + air-quality APIs into a warehouse with a live Streamlit dashboard.",
    problem:
      "Stakeholders wanted hourly air-quality insights for UAE cities without standing up a heavy streaming stack.",
    role: "Designed the architecture, wrote ingestion + transforms, deployed dashboard.",
    architecture: [
      "Python jobs poll public APIs every 15 min",
      "Cloud Run scheduled service writes to PostgreSQL",
      "SQL views compute rolling averages and alerts",
      "Streamlit dashboard with city filters + KPIs",
    ],
    stack: ["Python", "PostgreSQL", "Cloud Run", "Streamlit", "Docker"],
    categories: ["Data Pipelines", "Dashboards", "Automation"],
    outcomes: [
      "Sub-15-minute data freshness with < $5/month infra cost",
      "Reusable ingestion framework for any REST API",
      "Alerting on threshold breaches via email",
    ],
    challenges: [
      "Built a retry + backoff layer for flaky public APIs.",
      "Containerized the whole stack for one-command deploys.",
    ],
    metrics: [
      { label: "Cities", value: "7" },
      { label: "Freshness", value: "15 min" },
      { label: "Uptime", value: "99.4%" },
    ],
    featured: true,
    github: "https://github.com/your-handle/api-dashboard",
    demo: "https://example.com",
  },
];

export const repos: Repo[] = [
  {
    name: "ecom-etl",
    description: "AWS-based ETL pipeline with Airflow + Redshift.",
    language: "Python",
    stars: 12,
    url: "https://github.com/your-handle/ecom-etl",
  },
  {
    name: "dbt-analytics",
    description: "Analytics engineering project on BigQuery using dbt.",
    language: "SQL",
    stars: 9,
    url: "https://github.com/your-handle/dbt-analytics",
  },
  {
    name: "api-dashboard",
    description: "API → Postgres → Streamlit live data product.",
    language: "Python",
    stars: 5,
    url: "https://github.com/your-handle/api-dashboard",
  },
  {
    name: "sql-playground",
    description: "Curated SQL exercises and warehouse modeling notes.",
    language: "SQL",
    stars: 3,
    url: "https://github.com/your-handle/sql-playground",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    title: "Self-directed Data Engineering Projects",
    org: "Independent",
    body: "Designed and shipped 3 end-to-end data projects covering ingestion, modeling, orchestration and BI.",
  },
  {
    period: "2024",
    title: "Data Engineering Bootcamp",
    org: "DataTalks.Club / Coursera",
    body: "Hands-on labs in Airflow, Spark, dbt, BigQuery and Docker. Capstone deployed to GCP.",
  },
  {
    period: "2023",
    title: "B.Sc. Computer Science — Capstone",
    org: "University",
    body: "Built a campus analytics warehouse with PostgreSQL + Power BI dashboards adopted by 2 departments.",
  },
];

export const certifications = [
  "Google Cloud — Associate Data Engineer (in progress)",
  "AWS Certified Cloud Practitioner",
  "dbt Fundamentals",
];

export const currentlyLearning = [
  "Apache Iceberg & lakehouse patterns",
  "Advanced dbt (snapshots, macros, tests)",
  "Terraform for data infra",
];

export const cvHighlights = [
  { label: "Projects shipped", value: "3+" },
  { label: "Core stack", value: "Python · SQL · dbt · Airflow" },
  { label: "Domains", value: "E-commerce · SaaS · Public data" },
  { label: "Certifications", value: "AWS · dbt" },
];