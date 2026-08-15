"use client";

import { siteConfig } from "@/config/siteConfig";
import { videoDemoData } from "@/data/videoDemo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { getYouTubeVideoId } from "@/lib/youtube";
import { scrollToElement } from "@/lib/utils";

export function VideoDemo() {
  const hasVideo = Boolean(getYouTubeVideoId(siteConfig.youtubeDemoUrl));

  return (
    <Section id="video-demo" className="bg-graphite-50">
      <SectionHeader
        title={videoDemoData.title}
        subtitle={videoDemoData.subtitle}
      />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Video player */}
        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-graphite-200 bg-graphite-950 shadow-xl shadow-graphite-900/10">
            {hasVideo ? (
              <div className="aspect-[9/16]">
                <YouTubeEmbed title="Пример AI-видео" />
              </div>
            ) : (
              <div className="flex aspect-[9/16] flex-col items-center justify-center bg-gradient-to-br from-graphite-800 to-graphite-950 p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-600/20">
                  <svg
                    className="h-8 w-8 text-accent-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm text-graphite-400">
                  Вставьте ссылку на YouTube-ролик в файл{" "}
                  <code className="rounded bg-graphite-800 px-1.5 py-0.5 text-xs text-accent-300">
                    siteConfig.ts
                  </code>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-base leading-relaxed text-graphite-600 md:text-lg">
            {videoDemoData.note}
          </p>

          <ul className="mb-8 space-y-3">
            {videoDemoData.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-graphite-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToElement("lead-form")}>
            {videoDemoData.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
