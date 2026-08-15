/**
 * Главный конфигурационный файл сайта.
 * Здесь вы меняете ссылки, контакты и название проекта.
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const siteConfig = {
  /** Название проекта / бренда */
  name: "AI-Контент-Завод",

  /** Краткое описание для Schema.org */
  description:
    "Создание системы регулярного видеоконтента для экспертов и бизнеса: AI-аватар, сценарии, генерация видео и автоматизация публикации.",

  /** SEO title */
  seoTitle: "AI-контент-завод — видео с цифровым аватаром и автоматизацией",

  /** Meta description */
  seoDescription:
    "Создание системы регулярного видеоконтента для экспертов и бизнеса: AI-аватар, сценарии, генерация видео и автоматизация публикации.",

  /** URL сайта (замените после публикации) */
  siteUrl: "https://example.com",

  /**
   * Ссылка на YouTube-ролик для блока «Пример видео».
   * Поддерживаются обычные ссылки YouTube и YouTube Shorts.
   */
  youtubeDemoUrl: "https://www.youtube.com/shorts/xi9Q48_zO4g",

  /**
   * Ссылка на ваш Telegram-канал.
   * Используется в Header, Footer, блоке Telegram и кнопках «Задать вопрос».
   */
  telegramChannelUrl: "https://t.me/Reels_bez_kamery",

  /**
   * Скриншот рабочего процесса n8n.
   * Положите файл, например, в public/images/proof/n8n-workflow.jpg
   * и укажите путь: "/images/proof/n8n-workflow.jpg"
   * Оставьте пустую строку, пока скриншота нет.
   */
  n8nWorkflowImage: "/images/n8n-workflow.png",

  /**
   * Скриншот подтверждения публикации.
   * Положите файл, например, в public/images/proof/publication.jpg
   * и укажите путь: "/images/proof/publication.jpg"
   * Оставьте пустую строку, пока скриншота нет.
   */
  publicationProofImage: "",

  /**
   * Изображение сертификата об обучении.
   * Файл: public/images/certificate-vibe-coding.png
   */
  certificateImage: "/images/certificate-vibe-coding.png",

  /** Контактные данные */
  contacts: {
    email: "ВСТАВИТЬ_EMAIL",
    phone: "ВСТАВИТЬ_ТЕЛЕФОН",
  },

  /** Цены тестового ролика */
  pricing: {
    testDriveOld: 15000,
    testDriveNew: 7900,
    currency: "₽",
  },

  /** Навигация в Header */
  navigation: [
    { label: "Как работает", href: "#how-it-works" },
    { label: "Пример", href: "#video-demo" },
    { label: "Услуги", href: "#services" },
    { label: "Тарифы", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Telegram", href: "telegram", external: true },
  ] satisfies NavItem[],
};

export type SiteConfig = typeof siteConfig;
