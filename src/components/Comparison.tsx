import { comparisonData } from "@/data/comparison";
import { Section, SectionHeader } from "@/components/ui/Section";

function StepPill({
  text,
  variant,
}: {
  text: string;
  variant: "manual" | "automated";
}) {
  const isAutomated = variant === "automated";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${
        isAutomated
          ? "border border-accent-200/80 bg-white text-graphite-800"
          : "border border-graphite-200 bg-graphite-50 text-graphite-700"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
          isAutomated ? "bg-accent-500" : "bg-graphite-400"
        }`}
        aria-hidden="true"
      />
      {text}
    </span>
  );
}

function ProcessCard({
  title,
  subtitle,
  steps,
  footer,
  variant,
}: {
  title: string;
  subtitle: string;
  steps: { text: string }[];
  footer: string;
  variant: "manual" | "automated";
}) {
  const isAutomated = variant === "automated";

  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 md:p-7 ${
        isAutomated
          ? "border-accent-200 bg-accent-50/40"
          : "border-graphite-200 bg-white"
      }`}
    >
      <div className="mb-5">
        <h3
          className={`text-lg font-semibold md:text-xl ${
            isAutomated ? "text-accent-800" : "text-graphite-950"
          }`}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm text-graphite-500">{subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <span key={step.text} className="inline-flex items-center gap-2">
            <StepPill text={step.text} variant={variant} />
            {index < steps.length - 1 && (
              <span
                className={`hidden text-xs sm:inline ${
                  isAutomated ? "text-accent-300" : "text-graphite-300"
                }`}
                aria-hidden="true"
              >
                →
              </span>
            )}
          </span>
        ))}
      </div>

      <p
        className={`mt-5 border-t pt-4 text-sm ${
          isAutomated
            ? "border-accent-200/60 text-accent-700"
            : "border-graphite-100 text-graphite-600"
        }`}
      >
        {footer}
      </p>
    </div>
  );
}

export function Comparison() {
  return (
    <Section id="comparison" className="bg-graphite-50 py-16 md:py-20 lg:py-24">
      <SectionHeader
        title={comparisonData.title}
        subtitle={comparisonData.subtitle}
      />

      {/* Desktop: cards + VS */}
      <div className="hidden items-stretch gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8">
        <ProcessCard
          title={comparisonData.manual.title}
          subtitle={comparisonData.manual.subtitle}
          steps={comparisonData.manual.steps}
          footer={comparisonData.manual.footer}
          variant="manual"
        />

        <div className="flex items-center justify-center px-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-graphite-300">
            vs
          </span>
        </div>

        <ProcessCard
          title={comparisonData.automated.title}
          subtitle={comparisonData.automated.subtitle}
          steps={comparisonData.automated.steps}
          footer={comparisonData.automated.footer}
          variant="automated"
        />
      </div>

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-4 md:hidden">
        <ProcessCard
          title={comparisonData.manual.title}
          subtitle={comparisonData.manual.subtitle}
          steps={comparisonData.manual.steps}
          footer={comparisonData.manual.footer}
          variant="manual"
        />

        <div className="flex items-center justify-center py-1">
          <div className="h-px w-12 bg-graphite-200" aria-hidden="true" />
        </div>

        <ProcessCard
          title={comparisonData.automated.title}
          subtitle={comparisonData.automated.subtitle}
          steps={comparisonData.automated.steps}
          footer={comparisonData.automated.footer}
          variant="automated"
        />
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center md:mt-12">
        <p className="text-lg font-medium leading-relaxed text-graphite-800 md:text-xl">
          {comparisonData.conclusion}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-graphite-500 md:text-base">
          {comparisonData.conclusionNote}
        </p>
      </div>
    </Section>
  );
}
