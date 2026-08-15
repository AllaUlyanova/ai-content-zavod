import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export function Card({ children, className = "", hover = true, dark = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
        dark
          ? "border-white/10 bg-white/5 backdrop-blur-sm"
          : "border-graphite-100 bg-white shadow-sm"
      } ${
        hover
          ? dark
            ? "hover:border-white/20 hover:bg-white/10"
            : "hover:border-accent-200 hover:shadow-lg hover:shadow-accent-600/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
