import { T as jsxRuntimeExports } from "./worker-entry-IXYjofTX.js";
import { D as Download, A as About, S as Skills, E as Experience, W as WhyHire } from "./why-hire-BfqxBZRG.js";
import { S as Section } from "./section-Qw-yanKX.js";
import { c as cvHighlights, B as Button, s as site, a as certifications, b as currentlyLearning } from "./router-SqoSsefC.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Resume() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "resume", eyebrow: "resume", title: "A snapshot worth a download.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[1.2fr_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "One PDF. Everything a hiring manager needs to know — focused on stack, projects, and outcomes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-4", children: cvHighlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: h.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold", children: h.value })
      ] }, h.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: site.cvUrl, download: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
        " Download CV (PDF)"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-primary", children: "certifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: certifications.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▹" }),
          " ",
          c
        ] }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-primary", children: "currently learning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: currentlyLearning.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▹" }),
          " ",
          c
        ] }, c)) })
      ] })
    ] })
  ] }) });
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-primary", children: "// about" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-2 text-4xl font-bold tracking-tight md:text-5xl", children: [
        "Engineer-minded. Data-driven. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "UAE-ready." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Resume, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyHire, {})
  ] });
}
export {
  AboutPage as component
};
