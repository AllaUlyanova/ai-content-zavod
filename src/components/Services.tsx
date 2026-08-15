import { servicesData } from "@/data/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Services() {
  return (
    <Section id="services">
      <SectionHeader title={servicesData.title} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.items.map((service) => (
          <Card
            key={service.title}
            className={service.highlighted ? "border-accent-200 bg-accent-50/30 ring-1 ring-accent-200" : ""}
          >
            <h3 className="mb-2 text-lg font-semibold text-graphite-950">
              {service.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-graphite-600">
              {service.description}
            </p>
            <p className="text-lg font-bold text-accent-600">{service.price}</p>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-sm leading-relaxed text-graphite-500 md:mt-12">
        {servicesData.disclaimer}
      </p>
    </Section>
  );
}
