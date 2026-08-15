import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className = "", dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 ${
        dark ? "bg-graphite-950 text-white" : "bg-white text-graphite-900"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 lg:mb-20 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-700">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          light ? "text-white" : "text-graphite-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-lg ${
            light ? "text-graphite-300" : "text-graphite-600"
          } ${centered ? "" : "mx-0"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
