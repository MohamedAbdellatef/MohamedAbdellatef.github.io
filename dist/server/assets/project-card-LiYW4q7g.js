import { T as jsxRuntimeExports } from "./worker-entry-IXYjofTX.js";
import { d as createLucideIcon, L as Link, G as Github } from "./router-SqoSsefC.js";
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
const BAR_HEIGHTS = ["h-5", "h-8", "h-11", "h-6", "h-9"];
function ProjectCard({ p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-card shadow-[0_24px_80px_-54px_rgba(15,23,42,0.55)] transition-smooth hover:-translate-y-1 hover:border-primary/55 hover:shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-300/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[8.5rem] overflow-hidden border-b border-slate-900 bg-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200/80", children: "pipeline graph" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: BAR_HEIGHTS.map((heightClass, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-3 ${heightClass} bg-gradient-to-t from-cyan-300 to-emerald-300 transition-all duration-500 group-hover:scale-110`
        },
        i
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-3 flex flex-wrap gap-1", children: p.categories.slice(0, 2).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "border border-white/12 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur",
          children: c
        },
        c
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black leading-tight", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.stack.slice(0, 5).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "bg-secondary/85 px-2 py-1 font-mono text-[10px] text-muted-foreground",
          children: s
        },
        s
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/projects/$slug",
            params: { slug: p.slug },
            className: "inline-flex items-center gap-1 bg-slate-950 px-3 py-2 text-sm font-bold text-white transition-smooth hover:gap-1.5 hover:bg-primary",
            children: [
              "Case study ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
            ]
          }
        ),
        p.github && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: p.github,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex h-10 w-10 items-center justify-center border border-slate-200 bg-secondary text-slate-950 transition-smooth hover:-translate-y-0.5 hover:bg-slate-950 hover:text-white",
            "aria-label": "GitHub repo",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
export {
  ProjectCard as P
};
