export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  oldPrice?: number;
  price: string;
  priceNote?: string;
  features: PricingFeature[];
  cta: string;
  ctaNote?: string;
  highlighted?: boolean;
  dark?: boolean;
}

export const pricingData = {
  title: "Выберите, с чего начать",
  subtitle:
    "Не обязательно сразу запускать большой проект. Можно сначала проверить результат на одном видео.",
  disclaimer:
    "Подписки на сторонние AI-сервисы и расходы API оплачиваются отдельно. Финальная стоимость зависит от задачи и сложности автоматизации.",
  plans: [
    {
      id: "test-drive",
      name: "Тест-драйв",
      badge: "Для первых клиентов",
      oldPrice: 15000,
      price: "7 900 ₽",
      priceNote: "Специальная стартовая стоимость",
      features: [
        { text: "определение темы ролика" },
        { text: "сценарий" },
        { text: "подготовка текста для AI-аватара" },
        { text: "создание 1 вертикального AI-ролика" },
        { text: "готовое видео" },
        { text: "рекомендации по дальнейшей автоматизации" },
      ],
      cta: "Заказать тестовый ролик за 7 900 ₽",
      ctaNote: "Вы увидите реальный результат до заказа полноценной системы.",
      highlighted: true,
    },
    {
      id: "auto-factory",
      name: "Автозавод",
      badge: "Оптимально для старта",
      price: "от 40 000 ₽",
      features: [
        { text: "серия из 10 роликов" },
        { text: "темы" },
        { text: "сценарии" },
        { text: "настройка процесса создания видео" },
        { text: "автоматизация согласованных этапов" },
        { text: "готовая серия вертикального контента" },
      ],
      cta: "Запустить Автозавод",
    },
    {
      id: "noya",
      name: "NOYA / Под ключ",
      price: "от 115 000 ₽",
      features: [
        { text: "AI-аватар" },
        { text: "контент-система" },
        { text: "темы" },
        { text: "сценарии" },
        { text: "генерация видео" },
        { text: "автоматизация n8n" },
        { text: "публикация в согласованные каналы" },
        { text: "настройка рабочего процесса" },
        { text: "возможность дальнейшего сопровождения" },
      ],
      cta: "Обсудить систему под ключ",
      dark: true,
    },
  ] satisfies PricingPlan[],
};
