import { faqData } from "@/data/faq";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <Section id="faq" className="bg-graphite-50">
      <SectionHeader title={faqData.title} />
      <Accordion items={faqData.items} />
    </Section>
  );
}
