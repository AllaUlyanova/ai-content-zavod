export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

export const howItWorksData = {
  title: "От идеи до опубликованного видео",
  subtitle:
    "Вместо постоянного ручного производства контента вы получаете настроенный рабочий процесс.",
  steps: [
    {
      number: 1,
      title: "Контент-стратегия",
      description:
        "Определяем аудиторию, задачи, темы и формат контента.",
    },
    {
      number: 2,
      title: "Темы и сценарии",
      description: "Формируем идеи и сценарии коротких роликов.",
    },
    {
      number: 3,
      title: "Цифровой аватар",
      description: "Создаём и настраиваем AI-аватара клиента.",
    },
    {
      number: 4,
      title: "Генерация видео",
      description: "Создаётся готовое вертикальное видео.",
    },
    {
      number: 5,
      title: "Автоматизация n8n",
      description:
        "Связываем необходимые этапы производства контента в единый workflow.",
    },
    {
      number: 6,
      title: "Публикация",
      description:
        "Готовые ролики могут автоматически передаваться в подключённые каналы публикации согласно настроенной схеме.",
    },
  ] satisfies HowItWorksStep[],
};
