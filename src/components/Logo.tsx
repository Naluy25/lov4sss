import { Link } from "@tanstack/react-router";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { num: "text-2xl", text: "text-[10px]" },
    md: { num: "text-3xl", text: "text-[11px]" },
    lg: { num: "text-5xl", text: "text-base" },
  } as const;
  const s = sizes[size];

  return (
    <Link
      to="/"
      className="group flex items-center gap-3 hover-lift"
      aria-label="THE 4 SEASON STUDIO"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-brand blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg">
          <span className={`${s.num} font-black text-white leading-none`}>4</span>
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`${s.text} text-muted-foreground tracking-[0.3em] font-medium`}>THE</span>
        <span className="text-base md:text-lg font-extrabold text-gradient-brand tracking-wide">
          4 SEASON
        </span>
        <span className={`${s.text} text-muted-foreground tracking-[0.3em] font-medium`}>STUDIO</span>
      </div>
    </Link>
  );
}
