import { d as createLucideIcon, s as site, w as whatIBring, i as skills, j as experience } from "./router-SqoSsefC.js";
import { T as jsxRuntimeExports } from "./worker-entry-IXYjofTX.js";
import { S as Section, C as CircleCheck } from "./section-Qw-yanKX.js";
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "about",
      eyebrow: "about",
      title: "Engineering data with intent.",
      description: "I build reliable data foundations that help teams ship faster decisions.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-[1.2fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-900 bg-slate-950 p-6 text-base leading-relaxed text-slate-200 shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I focus on practical data engineering: clean ingestion, trusted models, and analytics outputs teams can actually use." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "My default standard is reliability first: idempotent jobs, clear data contracts, and observability that catches issues early." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4", children: [
            "I'm actively pursuing junior opportunities in",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-cyan-300", children: site.location }),
            " where I can contribute from day one."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: whatIBring.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group border border-slate-200 bg-card p-4 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.16em] text-primary", children: w.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: w.body })
            ]
          },
          w.title
        )) })
      ] })
    }
  );
}
const iconSlug = {
  Python: "python",
  SQL: "postgresql",
  dbt: "dbt",
  Airflow: "apacheairflow",
  "ETL / ELT": "apacheairflow",
  "Data Modeling": "databricks",
  Spark: "apachespark",
  Kafka: "apachekafka",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "Azure SQL": "microsoftazure",
  "SQL Server": "microsoftsqlserver",
  Azure: "microsoftazure",
  "Azure Data Factory": "microsoftazure",
  "Azure Blob Storage": "microsoftazure",
  "Azure Synapse": "microsoftazure",
  Git: "git",
  Docker: "docker",
  Pandas: "pandas",
  "REST APIs": "openapiinitiative",
  "Terraform (basics)": "terraform",
  "Power BI": "powerbi",
  Tableau: "tableau",
  Excel: "microsoftexcel"
};
function iconUrl(name) {
  const slug = iconSlug[name];
  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "skills",
      eyebrow: "stack",
      title: "The tools I reach for.",
      description: "Grouped by where they live in the data lifecycle - from raw ingestion to BI.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: skills.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group overflow-hidden border border-slate-200 bg-card shadow-[0_18px_60px_-48px_rgba(15,23,42,0.55)] transition-smooth hover:-translate-y-1 hover:border-primary/45 hover:shadow-elegant",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950 px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.16em] text-cyan-200", children: g.group }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-cyan-300 transition-transform duration-300 group-hover:scale-150" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 p-4", children: g.items.map((i) => {
              const url = iconUrl(i);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 border border-border/75 bg-secondary/75 px-2.5 py-1 text-xs font-semibold transition-smooth group-hover:border-primary/30",
                  children: [
                    url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: url, alt: "", "aria-hidden": true, loading: "lazy", className: "h-3.5 w-3.5" }),
                    i
                  ]
                },
                i
              );
            }) })
          ]
        },
        g.group
      )) })
    }
  );
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "experience",
      eyebrow: "journey",
      title: "Learning journey and project work.",
      description: "Self-driven projects, bootcamp work, and academic builds - chosen for what they taught and shipped.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative space-y-4 border-l-2 border-slate-950 pl-6", children: experience.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "relative border border-slate-200 bg-card p-5 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[33px] top-5 grid h-5 w-5 place-items-center border-2 border-slate-950 bg-cyan-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-slate-950" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.14em] text-primary", children: e.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-black", children: e.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary", children: e.org }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: e.body })
          ]
        },
        e.title
      )) })
    }
  );
}
const points = [
  {
    h: "Reliability first",
    p: "Idempotent pipelines, tested models, and clear failure handling from day one."
  },
  {
    h: "Proof over claims",
    p: "Projects show architecture, trade-offs, tests, and measurable outcomes."
  },
  {
    h: "Clean engineering habits",
    p: "Readable Python, well-named SQL, Git workflow, and documented assumptions."
  },
  {
    h: "Business-aware delivery",
    p: "Every model and metric ties back to a stakeholder question or reporting need."
  }
];
function WhyHire() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "why-hire",
      eyebrow: "why hire me",
      title: "A junior hire with engineering discipline.",
      description: "A concise case for recruiters and hiring managers who scan first and read second.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group flex gap-4 border border-slate-200 bg-card p-5 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-slate-950 text-cyan-300 transition-transform duration-300 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black", children: pt.h }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: pt.p })
            ] })
          ]
        },
        pt.h
      )) })
    }
  );
}
export {
  About as A,
  Download as D,
  Experience as E,
  Skills as S,
  WhyHire as W
};
