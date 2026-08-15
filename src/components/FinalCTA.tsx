"use client";

import { siteConfig } from "@/config/siteConfig";
import { finalCtaData } from "@/data/finalCta";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { TelegramIcon } from "@/components/ui/Icons";
import { scrollToElement } from "@/lib/utils";
import { isValidExternalUrl } from "@/lib/youtube";

export function FinalCTA() {
  const { testDriveOld, testDriveNew } = siteConfig.pricing;
  const telegramUrl = isValidExternalUrl(siteConfig.telegramChannelUrl)
    ? siteConfig.telegramChannelUrl
    : "#";

  return (
    <Section id="final-cta" dark className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-accent-600/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
          {finalCtaData.title}
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-graphite-300 md:text-xl">
          {finalCtaData.subtitle}
        </p>

        <div className="mb-8 flex justify-center">
          <PriceDisplay
            oldPrice={testDriveOld}
            newPrice={testDriveNew}
            note={finalCtaData.priceNote}
            size="lg"
            light
          />
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={() => scrollToElement("lead-form")}>
            {finalCtaData.primaryCta}
          </Button>
          <Button
            variant="outline"
            size="lg"
            href={telegramUrl}
            external
          >
            <TelegramIcon className="h-5 w-5" />
            {finalCtaData.secondaryCta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
