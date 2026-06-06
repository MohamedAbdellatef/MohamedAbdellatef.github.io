import { T as jsxRuntimeExports } from "./worker-entry-IXYjofTX.js";
import { L as Link } from "./router-SqoSsefC.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6 py-24 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive", children: error.message }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "mt-4 inline-block text-primary hover:underline", children: "Back to projects" })
] });
export {
  SplitErrorComponent as errorComponent
};
