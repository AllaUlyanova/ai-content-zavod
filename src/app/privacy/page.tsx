import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Политика конфиденциальности — ${siteConfig.name}`,
  description: "Политика конфиденциальности сайта AI-Контент-Завод",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-graphite-100 px-4 py-6">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm text-accent-600 hover:text-accent-700">
            ← На главную
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="mb-8 text-3xl font-semibold text-graphite-950">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-graphite max-w-none space-y-6 text-graphite-600">
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Это placeholder-страница. Замените текст на вашу реальную политику
            конфиденциальности с указанием оператора персональных данных, целей
            обработки и прав пользователей.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              1. Общие положения
            </h2>
            <p>
              Настоящая политика конфиденциальности определяет порядок обработки
              и защиты персональных данных пользователей сайта {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              2. Какие данные собираются
            </h2>
            <p>
              При заполнении формы заявки могут собираться: имя, контактные
              данные (Telegram или телефон), информация о нише/деятельности,
              ссылка на сайт или соцсеть.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              3. Цели обработки
            </h2>
            <p>
              Данные используются для связи с вами по вашей заявке и обсуждения
              услуг.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              4. Контактная информация
            </h2>
            <p>
              [Вставьте контактные данные оператора персональных данных: ФИО,
              email, адрес]
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
