/**
 * Извлекает ID видео из URL YouTube или YouTube Shorts.
 */
export function getYouTubeVideoId(url: string): string | null {
  if (!url || url.includes("ВСТАВИТЬ")) {
    return null;
  }

  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, "");

    // youtu.be/VIDEO_ID
    if (host === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0] || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      // /shorts/VIDEO_ID
      const shortsMatch = parsed.pathname.match(/\/shorts\/([^/?]+)/);
      if (shortsMatch?.[1]) {
        return shortsMatch[1];
      }

      // /embed/VIDEO_ID
      const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
      if (embedMatch?.[1]) {
        return embedMatch[1];
      }

      // /watch?v=VIDEO_ID
      const watchId = parsed.searchParams.get("v");
      if (watchId) {
        return watchId;
      }

      // /live/VIDEO_ID
      const liveMatch = parsed.pathname.match(/\/live\/([^/?]+)/);
      if (liveMatch?.[1]) {
        return liveMatch[1];
      }
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * Преобразует URL YouTube или YouTube Shorts в embed-URL для iframe.
 * origin нужен для корректной работы плеера на сторонних сайтах.
 */
export function getYouTubeEmbedUrl(url: string, origin?: string): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) {
    return null;
  }

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
  });

  if (origin) {
    params.set("origin", origin);
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

/**
 * URL превью (thumbnail) YouTube-видео для Hero и других блоков.
 */
export function getYouTubeThumbnailUrl(url: string): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) {
    return null;
  }

  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function isValidExternalUrl(url: string): boolean {
  return Boolean(url && !url.includes("ВСТАВИТЬ") && url.startsWith("http"));
}
