import { T as jsxRuntimeExports } from "./worker-entry-AmhbgHG_.js";
import { S as SectionHeading } from "./SectionHeading-DrpHLupq.js";
import { C as Check, o as openWhatsApp } from "./whatsapp-DZAnCReB.js";
import { S as Sparkles, Z as Zap } from "./zap-COUapVBH.js";
import { c as createLucideIcon } from "./router-B298CZy4.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Crown = createLucideIcon("crown", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode);
const plans = [{
  name: "الباقة الأساسية",
  Icon: Sparkles,
  tagline: "للمشاريع الناشئة والأعمال الجديدة",
  features: ["إدارة 1 منصة سوشيال ميديا", "8 تصاميم بوست شهرياً", "4 ستوريز شهرياً", "تحليل أساسي للأداء", "دعم فني عبر الواتساب", "تقرير شهري مفصل"],
  highlight: false
}, {
  name: "الباقة الاحترافية",
  Icon: Rocket,
  tagline: "الأكثر طلباً للأعمال المتوسطة",
  features: ["إدارة 3 منصات سوشيال ميديا", "20 تصميم بوست شهرياً", "15 ستوري + 4 ريلز شهرياً", "تحليل منافسين شامل", "خطة تسويقية مدروسة", "إدارة إعلانات ممولة", "هوية بصرية أساسية", "دعم فني على مدار الساعة"],
  highlight: true
}, {
  name: "الباقة الفاخرة",
  Icon: Crown,
  tagline: "للعلامات التجارية الكبرى",
  features: ["إدارة جميع المنصات", "تصاميم لا محدودة", "ريلز + فيديوهات أسبوعية", "هوية بصرية متكاملة", "خطة تسويقية ربعية", "حملات ممولة محترفة", "موقع إلكتروني هدية", "مدير حساب مخصص", "تقارير أسبوعية تفصيلية"],
  highlight: false
}];
const bundles = [{
  name: "باقة البداية الذكية",
  services: ["تصميم لوجو احترافي", "هوية بصرية أساسية", "10 تصاميم سوشيال"],
  badge: "وفر 30%"
}, {
  name: "باقة المتجر المتكامل",
  services: ["متجر إلكتروني", "تصميم لوجو", "20 تصميم منتج", "إدارة شهر مجاناً"],
  badge: "الأكثر مبيعاً"
}, {
  name: "باقة المحتوى الكامل",
  services: ["30 تصميم بوست", "10 ريلز/شورتس", "خطة محتوى شهرية", "هندسة صوتية"],
  badge: "وفر 25%"
}, {
  name: "باقة الإطلاق الكبير",
  services: ["موقع إلكتروني", "هوية بصرية كاملة", "حملة إعلانية مميزة", "إدارة 3 شهور"],
  badge: "حصري"
}];
function PackagesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "باقاتنا", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "خطط ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "التسويق" }),
      " الاحترافية"
    ] }), subtitle: "اختر الخطة المناسبة لمشروعك. كل خطة مصممة لتلبي احتياجات مختلفة وتحقق أهدافك" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24", children: plans.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative p-8 rounded-3xl border hover-lift animate-fade-up ${p.highlight ? "bg-gradient-brand-soft border-white/20 glow-purple md:scale-105" : "glass-card border-white/5"}`, style: {
      animationDelay: `${i * 100}ms`
    }, children: [
      p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 inset-x-0 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-black shadow-lg", children: "⭐ الأكثر شعبية" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-14 w-14 rounded-2xl items-center justify-center mb-5 ${p.highlight ? "bg-white/10" : "bg-gradient-brand"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.Icon, { className: "h-7 w-7 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black mb-2", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: p.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-brand flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openWhatsApp(`السلام عليكم 👋
أرغب في الاشتراك في *${p.name}*
برجاء التواصل معي لتفاصيل أكثر.`), className: `w-full py-4 rounded-full font-bold transition-transform hover:scale-105 ${p.highlight ? "bg-white text-background" : "bg-gradient-brand text-white"}`, children: "اشترك الآن" })
    ] }, p.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "عروض حصرية", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "باقات وعروض ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "مميزة" })
    ] }), subtitle: "مجموعات خدمات مدروسة بأسعار رمزية لتوفر عليك أكثر" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: bundles.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 rounded-3xl glass-card border border-white/5 hover-lift animate-fade-up overflow-hidden", style: {
      animationDelay: `${i * 80}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-black", children: b.badge }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 rounded-xl bg-gradient-brand items-center justify-center mb-4 mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: b.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mb-6", children: b.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-accent flex-shrink-0" }),
        s
      ] }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openWhatsApp(`السلام عليكم 👋
أرغب في *${b.name}* (${b.services.join("، ")})
برجاء التواصل لتفاصيل السعر.`), className: "w-full py-3 rounded-full bg-gradient-brand text-white font-bold text-sm hover:scale-105 transition-transform", children: "اطلب العرض" })
    ] }, b.name)) })
  ] });
}
export {
  PackagesPage as component
};
