import type { ReactNode } from "react";

export function CTAButton({
  children,
  variant = "primary",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "white";
  onClick?: () => void;
}) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer select-none";
  const variants = {
    primary: "bg-[#E87C4A] text-white hover:bg-[#D96A37] shadow-md hover:shadow-lg",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-foreground hover:text-primary underline-offset-4 hover:underline",
    white: "bg-white text-primary hover:bg-[#fdf0e8]",
  };
  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
