import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Check, ShoppingCart, ChevronLeft, Trash2, Send } from "lucide-react";
import { SHOP_CATEGORIES } from "@/data/shop";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "@/components/SectionHeading";
import { openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "شراء خدمة — THE 4 SEASON STUDIO" },
      { name: "description", content: "تصفح كافة خدماتنا واختر ما يناسبك. خدمات برمجية، تصميم ومونتاج، سوشيال ميديا، وإدارة صفحات." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { items, addItem, removeItem, updateDetails, clear, count } = useCart();
  const [activeCat, setActiveCat] = useState<string>(SHOP_CATEGORIES[0].id);
  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const inCart = useMemo(() => new Set(items.map((i) => i.id)), [items]);

  const cartIsValid =
    items.length > 0 &&
    form.name.trim() &&
    form.phone.trim() &&
    items.every((i) => i.details.trim().length > 5);

  function handleSubmit() {
    if (!cartIsValid) return;
    const lines: string[] = [];
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
      setForm({ name: "", phone: "", address: "" });
    }, 4000);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="متجر الخدمات"
        title={<>اختر <span className="text-gradient-brand">خدمتك</span></>}
        subtitle="تصفح خدماتنا حسب القسم. اختر ما تحتاجه واضفه للسلة، ثم اكمل طلبك"
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 sticky top-20 z-30 py-3">
        <div className="glass rounded-full p-1.5 flex flex-wrap gap-1 border border-white/10">
          {SHOP_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCat(c.id);
                document.getElementById(`cat-${c.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCat === c.id
                  ? "bg-gradient-brand text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-16 max-w-6xl mx-auto pb-24">
        {SHOP_CATEGORIES.map((cat) => (
          <section key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-32">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-black flex items-center gap-3">
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-gradient-brand">{cat.name}</span>
              </h2>
              <p className="text-muted-foreground mt-2">{cat.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.products.map((p) => {
                const added = inCart.has(p.id);
                return (
                  <div
                    key={p.id}
                    className="group relative p-5 rounded-2xl glass-card border border-white/5 hover-lift flex flex-col"
                  >
                    <h3 className="font-bold mb-1.5">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed flex-1">
                      {p.description}
                    </p>
                    <button
                      onClick={() =>
                        added
                          ? removeItem(p.id)
                          : addItem({ id: p.id, name: p.name, category: cat.name })
                      }
                      className={`mt-auto w-full py-2.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        added
                          ? "bg-white/10 text-foreground"
                          : "bg-gradient-brand text-white hover:scale-105"
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="h-4 w-4" /> مضاف للسلة
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" /> أضف للسلة
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Floating cart button */}
      {count > 0 && !showCheckout && (
        <button
          onClick={() => setShowCheckout(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-brand text-white font-bold shadow-elegant glow-purple animate-fade-up"
        >
          <ShoppingCart className="h-5 w-5" />
          إتمام الطلب ({count})
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Checkout modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto glass-card rounded-3xl border border-white/10 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black">إتمام الطلب</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="h-10 w-10 rounded-full glass flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex h-20 w-20 rounded-full bg-gradient-brand items-center justify-center glow-purple">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">تم إرسال طلبك بنجاح! 🎉</h3>
                  <p className="text-muted-foreground">سيتم فتح الواتساب لإكمال الطلب مع فريقنا</p>
                </div>
              ) : (
                <>
                  {/* Personal info */}
                  <div className="mb-6">
                    <h3 className="font-bold mb-3 text-gradient-brand">بياناتك الشخصية</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="الاسم بالكامل *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="رقم الهاتف *"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm"
                      />
                      <input
                        type="text"
                        placeholder="العنوان (اختياري)"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm sm:col-span-2"
                      />
                    </div>
                  </div>

                  {/* Cart items */}
                  <div className="mb-6">
                    <h3 className="font-bold mb-3 text-gradient-brand">
                      الخدمات المختارة ({items.length})
                    </h3>
                    <div className="space-y-3">
                      {items.map((it) => (
                        <div
                          key={it.id}
                          className="p-4 rounded-2xl bg-surface border border-white/5"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-bold text-sm">{it.name}</p>
                              <p className="text-xs text-muted-foreground">{it.category}</p>
                            </div>
                            <button
                              onClick={() => removeItem(it.id)}
                              className="h-8 w-8 rounded-full glass flex items-center justify-center text-destructive"
                              aria-label="حذف"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <textarea
                            placeholder="اكتب تفاصيل ما تريده في هذه الخدمة... (مطلوب)"
                            value={it.details}
                            onChange={(e) => updateDetails(it.id, e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2.5 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm resize-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {items.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      السلة فارغة.{" "}
                      <Link to="/shop" onClick={() => setShowCheckout(false)} className="text-gradient-brand font-bold">
                        تصفح الخدمات
                      </Link>
                    </div>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!cartIsValid}
                      className="w-full py-4 rounded-full bg-gradient-brand text-white font-black flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform shadow-elegant"
                    >
                      <Send className="h-5 w-5" />
                      إرسال الطلب على الواتساب
                    </button>
                  )}
                  {!cartIsValid && items.length > 0 && (
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      ⚠️ تأكد من ملء الاسم والهاتف وكتابة تفاصيل لكل خدمة (٦ أحرف على الأقل)
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
