import { T as jsxRuntimeExports } from "./worker-entry-AmhbgHG_.js";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-right"} mb-12 md:mb-16 animate-fade-up`,
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-gradient-brand mb-4 uppercase", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-extrabold leading-tight", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed", children: subtitle })
      ]
    }
  );
}
export {
  SectionHeading as S
};
