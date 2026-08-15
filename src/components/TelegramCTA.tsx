import { siteConfig } from "@/config/siteConfig";
import { telegramData } from "@/data/telegram";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TelegramIcon } from "@/components/ui/Icons";
import { isValidExternalUrl } from "@/lib/youtube";

export function TelegramCTA() {
  const telegramUrl = isValidExternalUrl(siteConfig.telegramChannelUrl)
    ? siteConfig.telegramChannelUrl
    : "#";

  return (
    <Section id="telegram" className="bg-gradient-to-br from-accent-600 to-accent-800 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
          <TelegramIcon className="h-8 w-8" />
        </div>

        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {telegramData.title}
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-white/80">
          {telegramData.description}
        </p>

        <Button
          href={telegramUrl}
          external
          variant="secondary"
          size="lg"
          className="bg-white text-accent-700 hover:bg-white/90"
        >
          <TelegramIcon className="h-5 w-5" />
          {telegramData.cta}
        </Button>
      </div>
    </Section>
  );
}
