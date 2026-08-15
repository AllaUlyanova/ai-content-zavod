import { benefitsData } from "@/data/benefits";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeader title={benefitsData.title} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefitsData.items.map((item) => (
          <Card key={item.title}>
            <h3 className="mb-2 text-lg font-semibold text-graphite-950">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-graphite-600">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
