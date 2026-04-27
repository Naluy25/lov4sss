import { T as jsxRuntimeExports } from "./worker-entry-AmhbgHG_.js";
import { c as createLucideIcon, L as Link } from "./router-B298CZy4.js";
import { S as SectionHeading } from "./SectionHeading-DrpHLupq.js";
import { w as workWeb1, a as workLogo2, b as workSocial1, c as workRestaurant } from "./work-restaurant-ylM9qU8o.js";
import { P as Palette, C as ChartColumn } from "./palette-bVf0WV6v.js";
import { S as Smartphone } from "./smartphone-BRZooM0g.js";
import { C as ChevronLeft } from "./chevron-left-BDVLVvFP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
const Code = createLucideIcon("code", __iconNode);
const sections = [{
  to: "/portfolio/web",
  title: "تصميم وبرمجة المواقع",
  desc: "مواقع ومتاجر إلكترونية ومنصات تعليمية",
  Icon: Code,
  img: workWeb1
}, {
  to: "/portfolio/design",
  title: "التصميم والمونتاج",
  desc: "لوجوهات، تصاميم دراسية، هويات بصرية ومونتاج",
  Icon: Palette,
  img: workLogo2
}, {
  to: "/portfolio/social",
  title: "خدمات السوشيال ميديا",
  desc: "حملات زيادة متابعين وتفاعل ناجحة",
  Icon: Smartphone,
  img: workSocial1
}, {
  to: "/portfolio/management",
  title: "إدارة الصفحات والتسويق",
  desc: "هويات بصرية ومحتوى وحملات إعلانية",
  Icon: ChartColumn,
  img: workRestaurant
}];
function PortfolioIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "بورتفوليو", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "أعمالنا ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "المميزة" })
    ] }), subtitle: "نخبة من أعمالنا في كل قسم. اختر القسم لاستعراض الأعمال التفصيلية" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: sections.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "group relative aspect-[4/3] rounded-3xl overflow-hidden hover-lift animate-fade-up", style: {
      animationDelay: `${i * 100}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 md:p-8 flex flex-col justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 rounded-2xl bg-gradient-brand items-center justify-center mb-3 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "h-6 w-6 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black mb-1", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-sm font-bold text-gradient-brand", children: [
          "استعرض الأعمال",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 group-hover:-translate-x-1 transition-transform" })
        ] })
      ] })
    ] }, s.to)) })
  ] });
}
export {
  PortfolioIndex as component
};
