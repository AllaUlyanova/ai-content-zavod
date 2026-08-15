"use client";

import { pricingData } from "@/data/pricing";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/Icons";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { scrollToElement } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" dark className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-950/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeader
          title={pricingData.title}
          subtitle={pricingData.subtitle}
          light
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingData.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "border-accent-500 bg-white text-graphite-950 shadow-2xl shadow-accent-600/20 lg:scale-105"
                  : plan.dark
                    ? "border-white/10 bg-graphite-900/80 text-white"
                    : "border-white/10 bg-white/5 text-white backdrop-blur-sm"
              }`}
            >
              {plan.badge && (
                <Badge
                  variant={plan.highlighted ? "accent" : "dark"}
                  className="mb-4 self-start"
                >
                  {plan.badge}
                </Badge>
              )}

              <h3
                className={`mb-4 text-xl font-semibold ${
                  plan.highlighted ? "text-graphite-950" : "text-white"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-6">
                {plan.oldPrice ? (
                  <PriceDisplay
                    oldPrice={plan.oldPrice}
                    newPrice={plan.price}
                    note={plan.priceNote}
                    size="md"
                    light={!plan.highlighted}
                  />
                ) : (
                  <PriceDisplay
                    newPrice={plan.price}
                    size="md"
                    light={!plan.highlighted}
                  />
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? "bg-accent-100 text-accent-600"
                          : "bg-white/10 text-accent-400"
                      }`}
                    >
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-graphite-700" : "text-graphite-300"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "primary" : plan.dark ? "secondary" : "outline"}
                className={`w-full ${plan.highlighted ? "" : plan.dark ? "bg-white text-graphite-950 hover:bg-graphite-100" : ""}`}
                onClick={() => scrollToElement("lead-form")}
              >
                {plan.cta}
              </Button>

              {plan.ctaNote && (
                <p className="mt-3 text-center text-xs text-graphite-500">
                  {plan.ctaNote}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-graphite-400 md:mt-12">
          {pricingData.disclaimer}
        </p>
      </div>
    </Section>
  );
}
