import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "dark";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "border-graphite-200 bg-graphite-50 text-graphite-600",
    accent: "border-accent-200 bg-accent-50 text-accent-700",
    dark: "border-white/20 bg-white/10 text-white/90",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
