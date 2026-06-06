import { T as jsxRuntimeExports } from "./worker-entry-IXYjofTX.js";
import { P as ProjectCard } from "./project-card-LiYW4q7g.js";
import { p as projects } from "./router-SqoSsefC.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10 bg-hero text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2.5 bg-white/8 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-cyan-300", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "all projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-gradient-to-r from-cyan-300/70 to-transparent", "aria-hidden": true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-3xl font-bold md:text-4xl", children: [
        "Case studies, not ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-300", children: "demos." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl leading-relaxed text-slate-300", children: "Each project documents the problem, the architecture, the trade-offs, and the measurable outcome - the way real engineering work gets evaluated." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 py-7 md:px-6 md:py-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { p }, p.slug)) }) })
  ] });
}
export {
  ProjectsPage as component
};
