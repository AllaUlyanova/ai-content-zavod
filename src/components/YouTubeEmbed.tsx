"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

interface YouTubeEmbedProps {
  title?: string;
  className?: string;
}

export function YouTubeEmbed({
  title = "Пример AI-видео",
  className = "",
}: YouTubeEmbedProps) {
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);

  useEffect(() => {
    const origin = window.location.origin;
    setEmbedUrl(getYouTubeEmbedUrl(siteConfig.youtubeDemoUrl, origin));
  }, []);

  if (!embedUrl) {
    return (
      <div
        className={`flex aspect-[9/16] items-center justify-center bg-graphite-950 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <iframe
      src={embedUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      loading="lazy"
      className={`h-full w-full border-0 ${className}`}
    />
  );
}
