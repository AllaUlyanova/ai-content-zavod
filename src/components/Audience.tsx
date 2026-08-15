import { audienceData } from "@/data/audience";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Audience() {
  return (
    <Section id="audience" className="bg-graphite-50">
      <SectionHeader title={audienceData.title} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audienceData.items.map((item) => (
          <Card key={item.title}>
            <h3 className="mb-3 text-lg font-semibold text-graphite-950">
              {item.title}
            </h3>
            <blockquote className="border-l-2 border-accent-300 pl-4 text-sm italic leading-relaxed text-graphite-600">
              «{item.quote}»
            </blockquote>
          </Card>
        ))}
      </div>
    </Section>
  );
}
