# AI-Контент-Завод — Лендинг

Продающий одностраничный сайт для услуги автоматизированного производства видеоконтента с AI-аватаром.

## Быстрый старт

1. Установите [Node.js](https://nodejs.org/) (версия 18 или новее)
2. Откройте папку проекта в терминале
3. Выполните команды:

```bash
npm install
npm run dev
```

4. Откройте в браузере: http://localhost:3000

## Что нужно настроить перед публикацией

Откройте файл `src/config/siteConfig.ts` и замените placeholder-значения:

- `youtubeDemoUrl` — ссылка на ваш YouTube-ролик
- `telegramChannelUrl` — ссылка на ваш Telegram-канал
- `contacts.email` — ваш email
- `siteUrl` — адрес сайта после публикации

Создайте файл `.env.local` (скопируйте из `.env.example`):

```
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://ваш-n8n-webhook-url
```

## Структура проекта

```
src/
├── config/
│   └── siteConfig.ts       ← Ссылки, контакты, цены тестового ролика
├── data/
│   ├── services.ts         ← Услуги и цены
│   ├── pricing.ts          ← Тарифы
│   ├── faq.ts              ← Вопросы и ответы
│   ├── problems.ts         ← Блок проблем
│   ├── howItWorks.ts       ← Как работает система
│   ├── benefits.ts         ← Преимущества
│   ├── audience.ts         ← Целевая аудитория
│   ├── caseStudies.ts      ← Кейсы (добавляйте реальные)
│   └── ...
├── components/             ← Секции лендинга
└── app/                    ← Страницы Next.js
public/
└── images/                 ← Изображения и скриншоты
```

## Как добавить новый кейс

Откройте `src/data/caseStudies.ts` и добавьте объект в массив `cases`:

```typescript
{
  id: "case-1",
  title: "Название проекта",
  description: "Описание кейса",
  image: "/images/cases/case-1.jpg",
  tags: ["AI-аватар", "Shorts"],
  published: true,
}
```

Положите изображение в `public/images/cases/`.

## Публикация в интернете

Рекомендуемые платформы (бесплатный тариф):

1. **Vercel** — vercel.com → Import Git Repository → Deploy
2. **Netlify** — netlify.com → Deploy from Git

После деплоя добавьте переменную окружения `NEXT_PUBLIC_N8N_WEBHOOK_URL` в настройках платформы.

## Команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск для разработки |
| `npm run build` | Сборка для продакшена |
| `npm run start` | Запуск собранного сайта |
| `npm run lint` | Проверка кода |
