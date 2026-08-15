import { problemsData } from "@/data/problems";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Problems() {
  return (
    <Section id="problems" className="bg-graphite-50">
      <SectionHeader
        title={problemsData.title}
        subtitle={problemsData.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problemsData.items.map((item) => (
          <Card key={item.title}>
            <h3 className="mb-3 text-lg font-semibold text-graphite-950">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-graphite-600">
              {item.description}
            </p>
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center text-xl font-semibold text-graphite-950 md:text-2xl lg:mt-16">
        {problemsData.conclusion}
      </p>
    </Section>
  );
}
