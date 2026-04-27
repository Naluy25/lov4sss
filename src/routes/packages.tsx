import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Rocket, Sparkles, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "الباقات والباكدجات — THE 4 SEASON STUDIO" },
      { name: "description", content: "خطط تسويق وباقات خدمات متنوعة تناسب جميع احتياجاتك بأسعار رمزية" },
    ],
  }),
  component: PackagesPage,
});

const plans = [
  {
    name: "الباقة الأساسية",
    Icon: Sparkles,
    tagline: "للمشاريع الناشئة والأعمال الجديدة",
    features: [
      "إدارة 1 منصة سوشيال ميديا",
      "8 تصاميم بوست شهرياً",
      "4 ستوريز شهرياً",
      "تحليل أساسي للأداء",
      "دعم فني عبر الواتساب",
      "تقرير شهري مفصل",
    ],
    highlight: false,
  },
  {
    name: "الباقة الاحترافية",
    Icon: Rocket,
    tagline: "الأكثر طلباً للأعمال المتوسطة",
    features: [
      "إدارة 3 منصات سوشيال ميديا",
      "20 تصميم بوست شهرياً",
      "15 ستوري + 4 ريلز شهرياً",
      "تحليل منافسين شامل",
      "خطة تسويقية مدروسة",
      "إدارة إعلانات ممولة",
      "هوية بصرية أساسية",
      "دعم فني على مدار الساعة",
    ],
    highlight: true,
  },
  {
    name: "الباقة الفاخرة",
    Icon: Crown,
    tagline: "للعلامات التجارية الكبرى",
    features: [
      "إدارة جميع المنصات",
      "تصاميم لا محدودة",
      "ريلز + فيديوهات أسبوعية",
      "هوية بصرية متكاملة",
      "خطة تسويقية ربعية",
      "حملات ممولة محترفة",
      "موقع إلكتروني هدية",
      "مدير حساب مخصص",
      "تقارير أسبوعية تفصيلية",
    ],
    highlight: false,
  },
];

const bundles = [
  {
    name: "باقة البداية الذكية",
    services: ["تصميم لوجو احترافي", "هوية بصرية أساسية", "10 تصاميم سوشيال"],
    badge: "وفر 30%",
  },
  {
    name: "باقة المتجر المتكامل",
    services: ["متجر إلكتروني", "تصميم لوجو", "20 تصميم منتج", "إدارة شهر مجاناً"],
    badge: "الأكثر مبيعاً",
  },
  {
    name: "باقة المحتوى الكامل",
    services: ["30 تصميم بوست", "10 ريلز/شورتس", "خطة محتوى شهرية", "هندسة صوتية"],
    badge: "وفر 25%",
  },
  {
    name: "باقة الإطلاق الكبير",
    services: ["موقع إلكتروني", "هوية بصرية كاملة", "حملة إعلانية مميزة", "إدارة 3 شهور"],
    badge: "حصري",
  },
];

function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="باقاتنا"
        title={<>خطط <span className="text-gradient-brand">التسويق</span> الاحترافية</>}
        subtitle="اختر الخطة المناسبة لمشروعك. كل خطة مصممة لتلبي احتياجات مختلفة وتحقق أهدافك"
      />

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
        {plans.map((p, i) => (
          <div
            key={p.name}
            className={`relative p-8 rounded-3xl border hover-lift animate-fade-up ${
              p.highlight
                ? "bg-gradient-brand-soft border-white/20 glow-purple md:scale-105"
                : "glass-card border-white/5"
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {p.highlight && (
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="px-4 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-black shadow-lg">
                  ⭐ الأكثر شعبية
                </span>
              </div>
            )}

            <div className={`inline-flex h-14 w-14 rounded-2xl items-center justify-center mb-5 ${p.highlight ? "bg-white/10" : "bg-gradient-brand"}`}>
              <p.Icon className="h-7 w-7 text-white" />
            </div>

            <h3 className="text-2xl font-black mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{p.tagline}</p>

            <div className="space-y-3 mb-8">
              {p.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-brand flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                openWhatsApp(
                  `السلام عليكم 👋\nأرغب في الاشتراك في *${p.name}*\nبرجاء التواصل معي لتفاصيل أكثر.`
                )
              }
              className={`w-full py-4 rounded-full font-bold transition-transform hover:scale-105 ${
                p.highlight
                  ? "bg-white text-background"
                  : "bg-gradient-brand text-white"
              }`}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>

      {/* Bundles */}
      <SectionHeading
        eyebrow="عروض حصرية"
        title={<>باقات وعروض <span className="text-gradient-orange">مميزة</span></>}
        subtitle="مجموعات خدمات مدروسة بأسعار رمزية لتوفر عليك أكثر"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bundles.map((b, i) => (
          <div
            key={b.name}
            className="relative p-6 rounded-3xl glass-card border border-white/5 hover-lift animate-fade-up overflow-hidden"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-black">
                {b.badge}
              </span>
            </div>
            <div className="inline-flex h-12 w-12 rounded-xl bg-gradient-brand items-center justify-center mb-4 mt-8">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-4">{b.name}</h3>
            <ul className="space-y-2 mb-6">
              {b.services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                openWhatsApp(
                  `السلام عليكم 👋\nأرغب في *${b.name}* (${b.services.join("، ")})\nبرجاء التواصل لتفاصيل السعر.`
                )
              }
              className="w-full py-3 rounded-full bg-gradient-brand text-white font-bold text-sm hover:scale-105 transition-transform"
            >
              اطلب العرض
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
