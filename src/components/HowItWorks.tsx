import { howItWorksData } from "@/data/howItWorks";
import { Section, SectionHeader } from "@/components/ui/Section";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader title={howItWorksData.title} />

      {/* Desktop horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          <div
            className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-accent-300 to-transparent"
            aria-hidden="true"
          />
          <div className="grid grid-cols-6 gap-4">
            {howItWorksData.steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-200 bg-white shadow-sm">
                  <span className="text-xl font-bold text-accent-600">{step.number}</span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-graphite-950">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-graphite-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet grid */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:hidden">
        {howItWorksData.steps.map((step) => (
          <div
            key={step.number}
            className="flex gap-4 rounded-2xl border border-graphite-100 bg-white p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-lg font-bold text-accent-600">
              {step.number}
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-graphite-950">{step.title}</h3>
              <p className="text-sm leading-relaxed text-graphite-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden">
        <div className="relative ml-6 border-l-2 border-accent-200 pl-8">
          {howItWorksData.steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative ${index < howItWorksData.steps.length - 1 ? "pb-8" : ""}`}
            >
              <div className="absolute -left-[calc(2rem+5px)] flex h-10 w-10 items-center justify-center rounded-xl border-2 border-accent-200 bg-white text-sm font-bold text-accent-600">
                {step.number}
              </div>
              <h3 className="mb-1 font-semibold text-graphite-950">{step.title}</h3>
              <p className="text-sm leading-relaxed text-graphite-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-12 text-center text-lg text-graphite-600 md:mt-16 md:text-xl">
        {howItWorksData.subtitle}
      </p>
    </Section>
  );
}
