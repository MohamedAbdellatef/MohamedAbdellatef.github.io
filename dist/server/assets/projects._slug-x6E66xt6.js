import { T as jsxRuntimeExports } from "./worker-entry-IXYjofTX.js";
import { d as createLucideIcon, R as Route, L as Link, B as Button, G as Github } from "./router-SqoSsefC.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
function ProjectPage() {
  const data = Route.useLoaderData();
  const p = data.project;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10 bg-hero text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-5 py-8 md:px-6 md:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-1 text-sm text-slate-300 transition-smooth hover:text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
        " All projects"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-white/12 bg-white/10 px-2.5 py-1 text-xs text-white", children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-4xl", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg leading-relaxed text-slate-300", children: p.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
        p.github && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "gap-2 bg-cyan-300 text-slate-950 hover:bg-cyan-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.github, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
          " View code"
        ] }) }),
        p.demo && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.demo, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
          " Live demo"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-5 py-8 md:px-6 md:py-10", children: [
      p.metrics && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 grid gap-3 sm:grid-cols-3", children: p.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-200 bg-card p-5 text-center transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gradient", children: m.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground", children: m.label })
      ] }, m.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "Problem", children: p.problem }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { title: "My role", children: p.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { label: "architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-3 space-y-2", children: p.architecture.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 border border-slate-200 bg-card p-3 text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { label: "stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/80 bg-secondary/65 px-2.5 py-1 text-xs font-medium", children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListBlock, { title: "outcomes", items: p.outcomes }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListBlock, { title: "challenges", items: p.challenges })
      ] })
    ] })
  ] });
}
function Block({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { label: title.toLowerCase() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-relaxed text-muted-foreground", children })
  ] });
}
function ListBlock({
  title,
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { label: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm leading-relaxed", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
    ] }, item)) })
  ] });
}
function SectionLabel({
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-primary/85", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-14 bg-gradient-to-r from-primary/70 to-transparent", "aria-hidden": true })
  ] });
}
export {
  ProjectPage as component
};
