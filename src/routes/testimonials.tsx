import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "آراء العملاء — THE 4 SEASON STUDIO" },
      { name: "description", content: "اقرأ آراء وتجارب أكثر من 5000 عميل تعاملوا معنا" },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  {
    name: "أحمد المصري",
    role: "صاحب متجر إلكتروني",
    rating: 5,
    text: "تجربة فوق الممتازة! صمموا لي متجر إلكتروني احترافي خلال أسبوع واحد فقط، والمبيعات زادت بشكل ملحوظ بعد إطلاقه. شكراً لفريق ذا فور سيزون.",
  },
  {
    name: "سارة عبدالله",
    role: "مديرة تسويق",
    rating: 5,
    text: "أفضل وكالة تعاملت معاها في إدارة السوشيال ميديا، المحتوى دائماً متجدد ومبدع، والتفاعل زاد بنسبة كبيرة جداً.",
  },
  {
    name: "محمد علي",
    role: "صاحب مطعم",
    rating: 5,
    text: "صمموا لي هوية بصرية كاملة لمطعمي، اللوجو والمنيو والباكدج. كل اللي شافهم اعجبهم، والمطعم بقى معروف بالاستايل ده.",
  },
  {
    name: "فاطمة الزهراء",
    role: "صانعة محتوى",
    rating: 5,
    text: "المونتاج بتاعهم سينمائي حقيقي، الفيديو بتاعي حقق ملايين المشاهدات بعد ما اشتغلوا عليه. تعامل راقي وسرعة في التنفيذ.",
  },
  {
    name: "خالد السيد",
    role: "مؤسس أكاديمية أونلاين",
    rating: 5,
    text: "بنوا لي منصة تعليمية كاملة تنافس أكبر المنصات في المنطقة. التصميم نظيف، الكود محترف، والدعم بعد التسليم ممتاز.",
  },
  {
    name: "نورا حسن",
    role: "ميك أب أرتيست",
    rating: 5,
    text: "شغلهم في السوشيال ميديا غير حياتي المهنية! اتنين شهور بس وعدد المتابعين وصل لـ 50 ألف. شغل احترافي ومستوى عالي.",
  },
];

function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="آراء العملاء"
        title={<>ماذا يقول <span className="text-gradient-brand">عملاؤنا</span></>}
        subtitle="أكثر من 5000 عميل سعيد بخدماتنا. اقرأ بعض من تجاربهم وآرائهم الحقيقية"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="relative p-6 rounded-3xl glass-card border border-white/5 hover-lift animate-fade-up overflow-hidden"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/10" />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-muted-foreground">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="h-11 w-11 rounded-full bg-gradient-brand flex items-center justify-center text-white font-black">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Screenshots placeholder section */}
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="سكرين شوتس"
          title={<>محادثات <span className="text-gradient-orange">حقيقية</span> من عملائنا</>}
          subtitle="لقطات من محادثات الواتساب مع عملائنا الكرام"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-3xl glass-card border border-white/5 p-6 flex flex-col gap-3 hover-lift"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-white/5">
                <div className="h-8 w-8 rounded-full bg-gradient-brand" />
                <div>
                  <p className="font-bold text-xs">عميل {i + 1}</p>
                  <p className="text-[10px] text-muted-foreground">متصل الآن</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-xs flex-1">
                <div className="bg-surface-elevated rounded-2xl rounded-tr-sm p-3 self-start max-w-[80%]">
                  مساء الخير، شكراً جزيلاً على الشغل الرائع! 🔥
                </div>
                <div className="bg-gradient-brand text-white rounded-2xl rounded-tl-sm p-3 self-end max-w-[80%]">
                  العفو، سعدنا بخدمتك 💜
                </div>
                <div className="bg-surface-elevated rounded-2xl rounded-tr-sm p-3 self-start max-w-[80%]">
                  محتاج خدمة جديدة بإذن الله ⭐
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
