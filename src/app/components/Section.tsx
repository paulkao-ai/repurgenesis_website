import type { ReactNode } from "react";

export function SectionLabel({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 font-mono ${light ? "text-white/60" : "text-primary"}`}>
      <span className={`w-6 h-px inline-block ${light ? "bg-white/40" : "bg-primary"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${light ? "text-white" : "text-foreground"}`}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {children}
    </h2>
  );
}
