import { T as jsxRuntimeExports } from "./worker-entry-AmhbgHG_.js";
import { c as createLucideIcon, L as Link } from "./router-B298CZy4.js";
import { S as SectionHeading } from "./SectionHeading-DrpHLupq.js";
import { w as workWeb1, b as workSocial1, c as workRestaurant, a as workLogo2 } from "./work-restaurant-ylM9qU8o.js";
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function PortfolioPage({
  title,
  subtitle,
  sections
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-sm text-muted-foreground mb-6 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "الرئيسية" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 rotate-180" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "hover:text-foreground", children: "أعمالنا" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 rotate-180" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "بورتفوليو", title, subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16 max-w-6xl mx-auto", children: sections.map((section, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "animate-fade-up", style: { animationDelay: `${idx * 80}ms` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-black mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-1.5 rounded-full bg-gradient-brand" }),
        section.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: section.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative aspect-square rounded-2xl overflow-hidden hover-lift glass-card border border-white/5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.src,
                alt: item.title,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-gradient-brand text-white text-[10px] font-bold mb-2 uppercase tracking-wider", children: item.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm", children: item.title })
            ] })
          ]
        },
        `${section.title}-${i}`
      )) })
    ] }, section.title)) })
  ] });
}
const workWeb2 = "/assets/work-web2-Df74WJFA.jpg";
const workLogo1 = "/assets/work-logo1-C8yu-QeA.jpg";
const workLogo3 = "/assets/work-logo3-zjqE2mhV.jpg";
const workEdu1 = "/assets/work-edu1-CVwGPWeH.jpg";
const workEdu2 = "/assets/work-edu2-QgWXyyej.jpg";
const workEdu3 = "/assets/work-edu3-CSR9V1Gi.jpg";
const workMontage = "/assets/work-montage-B5WzAnC0.jpg";
const PORTFOLIO = {
  web: {
    title: "تصميم وبرمجة المواقع",
    subtitle: "مواقع ومتاجر إلكترونية واحترافية بأحدث التقنيات",
    sections: [
      {
        title: "مواقع إلكترونية",
        items: [
          { src: workWeb1, title: "متجر إلكتروني", tag: "E-Commerce" },
          { src: workWeb2, title: "أكاديمية تعليمية", tag: "Education" },
          { src: workWeb1, title: "موقع شركة", tag: "Corporate" }
        ]
      },
      {
        title: "متاجر إلكترونية",
        items: [
          { src: workWeb1, title: "متجر أزياء", tag: "Fashion" },
          { src: workWeb2, title: "متجر إلكترونيات", tag: "Tech" }
        ]
      },
      {
        title: "مصادر تعليمية",
        items: [
          { src: workWeb2, title: "منصة تعليمية", tag: "LMS" },
          { src: workEdu1, title: "كتاب رقمي", tag: "E-Book" }
        ]
      }
    ]
  },
  design: {
    title: "التصميم والمونتاج",
    subtitle: "أعمال تصميم بصرية ومونتاج بإحساس سينمائي",
    sections: [
      {
        title: "تصاميم دراسية",
        items: [
          { src: workEdu1, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: workEdu2, title: "شهادات تقدير", tag: "Certificates" },
          { src: workEdu3, title: "كتب إلكترونية", tag: "E-Books" }
        ]
      },
      {
        title: "لوجوهات",
        items: [
          { src: workLogo1, title: "لوجو مطعم", tag: "Restaurants" },
          { src: workLogo2, title: "لوجو جيمنج", tag: "Gaming" },
          { src: workLogo3, title: "لوجو مؤسسة", tag: "Institutions" }
        ]
      },
      {
        title: "مطاعم وعلامات تجارية",
        items: [
          { src: workRestaurant, title: "هوية مطعم كاملة", tag: "Branding" },
          { src: workLogo1, title: "تصميم منيو", tag: "Menu Design" }
        ]
      },
      {
        title: "مونتاج فيديو",
        items: [{ src: workMontage, title: "مونتاج سينمائي", tag: "Video" }]
      }
    ]
  },
  social: {
    title: "خدمات السوشيال ميديا",
    subtitle: "حملات زيادة متابعين وتفاعل ناجحة",
    sections: [
      {
        title: "حملات سوشيال ميديا",
        items: [
          { src: workSocial1, title: "حملة انستجرام", tag: "Instagram" },
          { src: workSocial1, title: "حملة تيكتوك", tag: "TikTok" },
          { src: workSocial1, title: "حملة فيسبوك", tag: "Facebook" }
        ]
      }
    ]
  },
  management: {
    title: "إدارة الصفحات والتسويق",
    subtitle: "هويات بصرية ومحتوى وخطط تسويقية متكاملة",
    sections: [
      {
        title: "إدارة صفحات",
        items: [
          { src: workSocial1, title: "إدارة محتوى شامل", tag: "Content" },
          { src: workRestaurant, title: "هوية بصرية كاملة", tag: "Identity" }
        ]
      },
      {
        title: "حملات إعلانية",
        items: [
          { src: workSocial1, title: "حملة ممولة", tag: "Ads" },
          { src: workMontage, title: "إعلان فيديو", tag: "Video Ads" }
        ]
      }
    ]
  }
};
export {
  PortfolioPage as P,
  PORTFOLIO as a
};
