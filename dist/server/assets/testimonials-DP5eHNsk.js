import { T as jsxRuntimeExports } from "./worker-entry-AmhbgHG_.js";
import { S as SectionHeading } from "./SectionHeading-DrpHLupq.js";
import { c as createLucideIcon } from "./router-B298CZy4.js";
import { S as Star } from "./star-CbDtROjz.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const reviews = [{
  name: "أحمد المصري",
  role: "صاحب متجر إلكتروني",
  rating: 5,
  text: "تجربة فوق الممتازة! صمموا لي متجر إلكتروني احترافي خلال أسبوع واحد فقط، والمبيعات زادت بشكل ملحوظ بعد إطلاقه. شكراً لفريق ذا فور سيزون."
}, {
  name: "سارة عبدالله",
  role: "مديرة تسويق",
  rating: 5,
  text: "أفضل وكالة تعاملت معاها في إدارة السوشيال ميديا، المحتوى دائماً متجدد ومبدع، والتفاعل زاد بنسبة كبيرة جداً."
}, {
  name: "محمد علي",
  role: "صاحب مطعم",
  rating: 5,
  text: "صمموا لي هوية بصرية كاملة لمطعمي، اللوجو والمنيو والباكدج. كل اللي شافهم اعجبهم، والمطعم بقى معروف بالاستايل ده."
}, {
  name: "فاطمة الزهراء",
  role: "صانعة محتوى",
  rating: 5,
  text: "المونتاج بتاعهم سينمائي حقيقي، الفيديو بتاعي حقق ملايين المشاهدات بعد ما اشتغلوا عليه. تعامل راقي وسرعة في التنفيذ."
}, {
  name: "خالد السيد",
  role: "مؤسس أكاديمية أونلاين",
  rating: 5,
  text: "بنوا لي منصة تعليمية كاملة تنافس أكبر المنصات في المنطقة. التصميم نظيف، الكود محترف، والدعم بعد التسليم ممتاز."
}, {
  name: "نورا حسن",
  role: "ميك أب أرتيست",
  rating: 5,
  text: "شغلهم في السوشيال ميديا غير حياتي المهنية! اتنين شهور بس وعدد المتابعين وصل لـ 50 ألف. شغل احترافي ومستوى عالي."
}];
function TestimonialsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "آراء العملاء", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "ماذا يقول ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "عملاؤنا" })
    ] }), subtitle: "أكثر من 5000 عميل سعيد بخدماتنا. اقرأ بعض من تجاربهم وآرائهم الحقيقية" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 rounded-3xl glass-card border border-white/5 hover-lift animate-fade-up overflow-hidden", style: {
      animationDelay: `${i * 80}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-4 left-4 h-12 w-12 text-primary/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: Array.from({
          length: r.rating
        }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed mb-6 text-muted-foreground", children: r.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-gradient-brand flex items-center justify-center text-white font-black", children: r.name.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: r.role })
          ] })
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "سكرين شوتس", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "محادثات ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "حقيقية" }),
        " من عملائنا"
      ] }), subtitle: "لقطات من محادثات الواتساب مع عملائنا الكرام" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: Array.from({
        length: 6
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[3/4] rounded-3xl glass-card border border-white/5 p-6 flex flex-col gap-3 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-gradient-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-xs", children: [
              "عميل ",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "متصل الآن" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-xs flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-elevated rounded-2xl rounded-tr-sm p-3 self-start max-w-[80%]", children: "مساء الخير، شكراً جزيلاً على الشغل الرائع! 🔥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-brand text-white rounded-2xl rounded-tl-sm p-3 self-end max-w-[80%]", children: "العفو، سعدنا بخدمتك 💜" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface-elevated rounded-2xl rounded-tr-sm p-3 self-start max-w-[80%]", children: "محتاج خدمة جديدة بإذن الله ⭐" })
        ] })
      ] }, i)) })
    ] })
  ] });
}
export {
  TestimonialsPage as component
};
