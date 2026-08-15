import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Согласие на обработку персональных данных — ${siteConfig.name}`,
  description: "Согласие на обработку персональных данных",
};

export default function ConsentPage() {
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
          Согласие на обработку персональных данных
        </h1>

        <div className="prose prose-graphite max-w-none space-y-6 text-graphite-600">
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Это placeholder-страница. Замените текст на ваше реальное согласие
            с указанием оператора, перечня данных и сроков хранения.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              Согласие субъекта персональных данных
            </h2>
            <p>
              Я даю согласие на обработку моих персональных данных, указанных в
              форме заявки на сайте {siteConfig.name}, в целях связи со мной и
              обсуждения услуг.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              Перечень персональных данных
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>Имя</li>
              <li>Telegram или телефон</li>
              <li>Ниша / деятельность</li>
              <li>Ссылка на сайт или соцсеть (при указании)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              Оператор персональных данных
            </h2>
            <p>
              [Вставьте ФИО, ИП/ООО, ИНН, адрес, контактный email]
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-graphite-900">
              Срок действия согласия
            </h2>
            <p>
              [Укажите срок хранения и условия отзыва согласия]
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
