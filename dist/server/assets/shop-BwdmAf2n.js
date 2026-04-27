import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-AmhbgHG_.js";
import { c as createLucideIcon, u as useCart, S as ShoppingCart, L as Link } from "./router-B298CZy4.js";
import { S as SectionHeading } from "./SectionHeading-DrpHLupq.js";
import { C as Check, o as openWhatsApp } from "./whatsapp-DZAnCReB.js";
import { C as ChevronLeft } from "./chevron-left-BDVLVvFP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const SHOP_CATEGORIES = [
  {
    id: "programming",
    name: "خدمات برمجية",
    emoji: "💻",
    description: "تصميم وتطوير المواقع والمتاجر الإلكترونية باحترافية",
    products: [
      { id: "prog-website", name: "موقع إلكتروني تعريفي", description: "موقع شركة أو أعمال شخصية متجاوب" },
      { id: "prog-store", name: "متجر إلكتروني", description: "متجر متكامل مع نظام دفع وإدارة طلبات" },
      { id: "prog-academy", name: "أكاديمية تعليمية", description: "منصة كورسات ومحاضرات أونلاين" },
      { id: "prog-landing", name: "صفحة هبوط Landing Page", description: "صفحة تسويقية احترافية" },
      { id: "prog-dashboard", name: "لوحة تحكم Admin", description: "لوحة إدارة مخصصة لاحتياجاتك" },
      { id: "prog-app", name: "تطبيق ويب متكامل", description: "تطبيق ويب بميزات متقدمة" }
    ]
  },
  {
    id: "design",
    name: "خدمات تصميم ومونتاج",
    emoji: "🎨",
    description: "تصاميم احترافية ومونتاج فيديوهات بأعلى جودة",
    products: [
      { id: "des-logo", name: "تصميم لوجو", description: "هوية بصرية لعلامتك التجارية" },
      { id: "des-social", name: "تصميم سوشيال ميديا", description: "بوستات وستوريز لجميع المنصات" },
      { id: "des-banner", name: "تصميم بنرات وإعلانات", description: "بنرات ويب وإعلانات ممولة" },
      { id: "des-print", name: "مطبوعات وبروشورات", description: "كتالوجات وفلايرز وبطاقات أعمال" },
      { id: "des-book", name: "تصميم أغلفة كتب", description: "أغلفة كتب وكتب إلكترونية" },
      { id: "des-cert", name: "شهادات تقدير", description: "شهادات بتصميم أنيق" },
      { id: "des-video-long", name: "مونتاج فيديو طويل", description: "فيديوهات يوتيوب ودورات" },
      { id: "des-video-short", name: "مونتاج فيديو قصير", description: "ريلز، شورتس، تيكتوك" },
      { id: "des-audio", name: "هندسة صوتية", description: "تحسين الصوت ومكساج احترافي" }
    ]
  },
  {
    id: "social",
    name: "خدمات سوشيال ميديا",
    emoji: "📱",
    description: "زيادة المتابعين والتفاعل على جميع المنصات",
    products: [
      { id: "soc-followers-ig", name: "متابعين انستجرام", description: "متابعين حقيقيين ومتفاعلين" },
      { id: "soc-followers-tt", name: "متابعين تيكتوك", description: "زيادة جمهورك على تيكتوك" },
      { id: "soc-followers-yt", name: "مشتركين يوتيوب", description: "مشتركين حقيقيين على قناتك" },
      { id: "soc-likes", name: "لايكات وتفاعل", description: "تفاعل حقيقي على منشوراتك" },
      { id: "soc-comments", name: "تعليقات تفاعلية", description: "تعليقات مدروسة وجذابة" },
      { id: "soc-views", name: "مشاهدات فيديو", description: "زيادة عدد المشاهدات" }
    ]
  },
  {
    id: "management",
    name: "إدارة الصفحات والتسويق",
    emoji: "📊",
    description: "إدارة كاملة لصفحاتك مع خطط تسويقية احترافية",
    products: [
      { id: "mgt-identity", name: "هوية بصرية كاملة", description: "هوية بصرية متكاملة لعلامتك" },
      { id: "mgt-content", name: "إنتاج محتوى احترافي", description: "محتوى مكتوب وبصري متجدد" },
      { id: "mgt-competitors", name: "تحليل المنافسين", description: "دراسة شاملة لمنافسيك" },
      { id: "mgt-strategy", name: "خطة تسويقية", description: "خطة تسويق مخصصة لعملك" },
      { id: "mgt-ads", name: "إدارة إعلانات ممولة", description: "حملات فيسبوك وانستجرام وجوجل" },
      { id: "mgt-page", name: "إدارة صفحة كاملة", description: "إدارة شهرية متكاملة لصفحتك" }
    ]
  }
];
function ShopPage() {
  const {
    items,
    addItem,
    removeItem,
    updateDetails,
    clear,
    count
  } = useCart();
  const [activeCat, setActiveCat] = reactExports.useState(SHOP_CATEGORIES[0].id);
  const [showCheckout, setShowCheckout] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    address: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const inCart = reactExports.useMemo(() => new Set(items.map((i) => i.id)), [items]);
  const cartIsValid = items.length > 0 && form.name.trim() && form.phone.trim() && items.every((i) => i.details.trim().length > 5);
  function handleSubmit() {
    if (!cartIsValid) return;
    const lines = [];
    lines.push("🌟 *طلب جديد من THE 4 SEASON STUDIO* 🌟");
    lines.push("");
    lines.push("👤 *بيانات العميل:*");
    lines.push(`الاسم: ${form.name}`);
    lines.push(`الهاتف: ${form.phone}`);
    if (form.address.trim()) lines.push(`العنوان: ${form.address}`);
    lines.push("");
    lines.push(`🛒 *الخدمات المطلوبة (${items.length}):*`);
    lines.push("━━━━━━━━━━━━━━━━━━");
    items.forEach((it, idx) => {
      lines.push("");
      lines.push(`*${idx + 1}. ${it.name}*`);
      lines.push(`📂 القسم: ${it.category}`);
      lines.push(`📝 التفاصيل:`);
      lines.push(it.details);
      lines.push("━━━━━━━━━━━━━━━━━━");
    });
    lines.push("");
    lines.push("في انتظار تأكيد الطلب وعرض السعر، شكراً 💜");
    openWhatsApp(lines.join("\n"));
    setSubmitted(true);
    clear();
    setTimeout(() => {
      setSubmitted(false);
      setShowCheckout(false);
      setForm({
        name: "",
        phone: "",
        address: ""
      });
    }, 4e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "متجر الخدمات", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "اختر ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "خدمتك" })
    ] }), subtitle: "تصفح خدماتنا حسب القسم. اختر ما تحتاجه واضفه للسلة، ثم اكمل طلبك" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-8 sticky top-20 z-30 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-full p-1.5 flex flex-wrap gap-1 border border-white/10", children: SHOP_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      setActiveCat(c.id);
      document.getElementById(`cat-${c.id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, className: `px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCat === c.id ? "bg-gradient-brand text-white shadow-lg" : "text-muted-foreground hover:text-foreground"}`, children: [
      c.emoji,
      " ",
      c.name
    ] }, c.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16 max-w-6xl mx-auto pb-24", children: SHOP_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: `cat-${cat.id}`, className: "scroll-mt-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-black flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: cat.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: cat.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: cat.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: cat.products.map((p) => {
        const added = inCart.has(p.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative p-5 rounded-2xl glass-card border border-white/5 hover-lift flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-1.5", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 leading-relaxed flex-1", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => added ? removeItem(p.id) : addItem({
            id: p.id,
            name: p.name,
            category: cat.name
          }), className: `mt-auto w-full py-2.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${added ? "bg-white/10 text-foreground" : "bg-gradient-brand text-white hover:scale-105"}`, children: added ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
            " مضاف للسلة"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " أضف للسلة"
          ] }) })
        ] }, p.id);
      }) })
    ] }, cat.id)) }),
    count > 0 && !showCheckout && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowCheckout(true), className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-brand text-white font-bold shadow-elegant glow-purple animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5" }),
      "إتمام الطلب (",
      count,
      ")",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
    ] }),
    showCheckout && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-md overflow-y-auto animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto glass-card rounded-3xl border border-white/10 p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black", children: "إتمام الطلب" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowCheckout(false), className: "h-10 w-10 rounded-full glass flex items-center justify-center", children: "✕" })
      ] }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-20 w-20 rounded-full bg-gradient-brand items-center justify-center glow-purple", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "تم إرسال طلبك بنجاح! 🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "سيتم فتح الواتساب لإكمال الطلب مع فريقنا" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-3 text-gradient-brand", children: "بياناتك الشخصية" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "الاسم بالكامل *", value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }), className: "px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", placeholder: "رقم الهاتف *", value: form.phone, onChange: (e) => setForm({
              ...form,
              phone: e.target.value
            }), className: "px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "العنوان (اختياري)", value: form.address, onChange: (e) => setForm({
              ...form,
              address: e.target.value
            }), className: "px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm sm:col-span-2" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold mb-3 text-gradient-brand", children: [
            "الخدمات المختارة (",
            items.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-surface border border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: it.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: it.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeItem(it.id), className: "h-8 w-8 rounded-full glass flex items-center justify-center text-destructive", "aria-label": "حذف", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "اكتب تفاصيل ما تريده في هذه الخدمة... (مطلوب)", value: it.details, onChange: (e) => updateDetails(it.id, e.target.value), rows: 3, className: "w-full px-3 py-2.5 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm resize-none" })
          ] }, it.id)) })
        ] }),
        items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
          "السلة فارغة.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", onClick: () => setShowCheckout(false), className: "text-gradient-brand font-bold", children: "تصفح الخدمات" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSubmit, disabled: !cartIsValid, className: "w-full py-4 rounded-full bg-gradient-brand text-white font-black flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
          "إرسال الطلب على الواتساب"
        ] }),
        !cartIsValid && items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground mt-3", children: "⚠️ تأكد من ملء الاسم والهاتف وكتابة تفاصيل لكل خدمة (٦ أحرف على الأقل)" })
      ] })
    ] }) }) })
  ] });
}
export {
  ShopPage as component
};
