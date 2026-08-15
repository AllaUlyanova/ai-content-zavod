"use client";

import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { getYouTubeThumbnailUrl } from "@/lib/youtube";
import { scrollToElement } from "@/lib/utils";

const benefits = [
  "Без постоянных съёмок",
  "Регулярный контент",
  "Автоматизация через n8n",
];

const workflowSteps = [
  "Тема",
  "Сценарий",
  "AI-аватар",
  "Видео",
  "Публикация",
];

function HeroVideoPreview() {
  const thumbnailUrl = getYouTubeThumbnailUrl(siteConfig.youtubeDemoUrl);

  return (
    <button
      type="button"
      onClick={() => scrollToElement("video-demo")}
      className="group relative mx-auto w-full max-w-[240px] transition-transform duration-300 hover:scale-[1.02] sm:max-w-[260px] lg:max-w-[280px]"
      aria-label="Посмотреть пример AI-видео"
    >
      <div className="absolute -inset-3 rounded-[2.75rem] bg-accent-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

      <div className="relative rounded-[2.25rem] border-[5px] border-graphite-900 bg-graphite-900 p-1.5 shadow-xl shadow-graphite-900/20">
        <div className="absolute left-1/2 top-2.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-graphite-800" />

        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-graphite-950">
          {thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnailUrl}
              alt="Превью AI-видео с цифровым аватаром"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-graphite-900 text-sm text-graphite-500">
              Превью видео
            </div>
          )}

          <div className="absolute inset-0 bg-graphite-950/20 transition-colors duration-300 group-hover:bg-graphite-950/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-accent-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function WorkflowLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-xs text-graphite-500 ${className}`}
    >
      {workflowSteps.map((step, index) => (
        <span key={step} className="flex items-center gap-1.5">
          <span className="font-medium text-graphite-600">{step}</span>
          {index < workflowSteps.length - 1 && (
            <span className="text-graphite-300" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

function HeroPrice() {
  const { testDriveOld, testDriveNew, currency } = siteConfig.pricing;

  return (
    <div className="mt-5">
      <p className="text-sm text-graphite-500">Стартовая цена для первых клиентов</p>
      <p className="mt-1 flex items-baseline gap-2">
        <span className="text-sm text-graphite-400 line-through">
          {testDriveOld.toLocaleString("ru-RU")} {currency}
        </span>
        <span className="text-2xl font-semibold tracking-tight text-graphite-950">
          {testDriveNew.toLocaleString("ru-RU")} {currency}
        </span>
      </p>
    </div>
  );
}

function HeroCTAs({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToElement("lead-form")}>
        Заказать тестовый ролик за 7 900 ₽
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="w-full sm:w-auto"
        onClick={() => scrollToElement("video-demo")}
      >
        Посмотреть пример видео
      </Button>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6b57f1 1px, transparent 1px), linear-gradient(to bottom, #6b57f1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-16">
          {/* Левая часть */}
          <div>
            <span className="mb-5 inline-flex items-center rounded-full border border-accent-200/80 bg-white/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-accent-700 shadow-sm backdrop-blur-sm animate-fade-in">
              AI-АВАТАР • ВИДЕО • АВТОМАТИЗАЦИЯ
            </span>

            <h1 className="max-w-2xl animate-slide-up text-[2rem] font-bold leading-[1.12] tracking-tight text-graphite-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Регулярные видео для вашего бизнеса — без постоянных съёмок
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite-700 md:text-lg">
              Создам вашего AI-аватара и настрою систему, которая превращает темы и
              сценарии в готовые вертикальные ролики и помогает автоматически их
              публиковать.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-graphite-500 md:text-base">
              Вы занимаетесь своей работой — система берёт на себя повторяющиеся
              этапы производства контента.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-graphite-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Desktop: CTA + цена */}
            <div className="hidden lg:block">
              <HeroCTAs className="mt-8" />
              <HeroPrice />
            </div>
          </div>

          {/* Правая часть — превью видео */}
          <div className="flex flex-col items-center lg:items-end">
            <HeroVideoPreview />

            <div className="mt-4 text-center lg:text-right">
              <p className="text-sm font-medium text-graphite-900">Реальный пример</p>
              <p className="mt-0.5 text-xs text-graphite-500">AI-аватар • вертикальное видео</p>
            </div>

            <WorkflowLine className="mt-4 hidden max-w-xs lg:flex lg:justify-end" />
          </div>

          {/* Mobile: CTA + цена + workflow */}
          <div className="lg:hidden">
            <HeroCTAs className="mt-2" />
            <HeroPrice />
            <WorkflowLine className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
