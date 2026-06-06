import { T as jsxRuntimeExports } from "./worker-entry-IXYjofTX.js";
import { d as createLucideIcon, s as site, B as Button, L as Link, G as Github, e as Linkedin, M as Mail, p as projects } from "./router-SqoSsefC.js";
import { m as motion, S as Section } from "./section-Qw-yanKX.js";
import { D as Download, E as Experience, S as Skills, W as WhyHire, A as About } from "./why-hire-BfqxBZRG.js";
import { P as ProjectCard } from "./project-card-LiYW4q7g.js";
import { C as Contact } from "./contact-Ba30rhi3.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$2);
const __iconNode$1 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const profilePhoto = "/assets/profile-C5U9HSPA.png";
const proofPoints = [
  { label: "Projects shipped", value: "3+" },
  { label: "dbt tests", value: "180+" },
  { label: "Cloud focus", value: "Azure" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden bg-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-70", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55 },
            className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse-dot h-1.5 w-1.5 rounded-full bg-primary" }),
              "open to junior data roles"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.65, delay: 0.05 },
            className: "mt-6 max-w-4xl text-4xl font-black leading-[1.02] text-foreground md:text-[4.35rem]",
            children: [
              site.name,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient md:text-[3.15rem]", children: site.role })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.12 },
            className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground",
            children: site.tagline
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.18 },
            className: "mt-5 flex flex-wrap items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/85 px-3 py-1.5 text-xs text-muted-foreground shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
                "Egypt / UAE / GCC"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "h-3.5 w-3.5" }),
                "Azure-focused"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-3.5 w-3.5" }),
                "SQL / Python / Power BI"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.24 },
            className: "mt-7 flex flex-wrap gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  size: "lg",
                  className: "gap-2 bg-primary text-primary-foreground hover:bg-primary/90",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", children: [
                    "View Projects ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "gap-2 bg-card/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: site.cvUrl, download: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                " Download CV"
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.3 },
            className: "mt-6 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-border bg-card/85 shadow-sm backdrop-blur",
            children: proofPoints.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-r border-border p-3.5 last:border-r-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black text-primary", children: point.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground", children: point.label })
            ] }, point.label))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55, delay: 0.36 },
            className: "mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  className: "inline-flex items-center gap-2 hover:text-foreground",
                  href: site.github,
                  target: "_blank",
                  rel: "noreferrer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                    " GitHub"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  className: "inline-flex items-center gap-2 hover:text-[#0A66C2]",
                  href: site.linkedin,
                  target: "_blank",
                  rel: "noreferrer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
                    " LinkedIn"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 hover:text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                " Contact"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.7, delay: 0.12 },
          className: "relative mx-auto w-full max-w-sm lg:max-w-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/8 to-transparent blur-2xl",
                "aria-hidden": true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elegant", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: profilePhoto,
                  alt: `${site.name} - ${site.role}`,
                  className: "aspect-[4/5] w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-card/95 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.14em] text-primary", children: "Junior data engineer portfolio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Built for recruiters scanning real projects, stack, and readiness." })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function FeaturedProjects() {
  const list = projects.filter((p) => p.featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "projects",
      title: "Projects that prove the craft.",
      description: "Each case study shows the business problem, architecture choices, and measurable outcomes.",
      className: "pt-8 md:pt-10",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { p }, p.slug)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "gap-2 bg-slate-950 text-white hover:bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", children: [
          "See all projects ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }) })
      ]
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyHire, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  HomePage as component
};
