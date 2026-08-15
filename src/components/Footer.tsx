import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { TelegramIcon } from "@/components/ui/Icons";
import { isValidExternalUrl } from "@/lib/youtube";

export function Footer() {
  const telegramUrl = isValidExternalUrl(siteConfig.telegramChannelUrl)
    ? siteConfig.telegramChannelUrl
    : "#";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite-100 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="mb-3 text-lg font-semibold text-graphite-950">
              {siteConfig.name}
            </p>
            <p className="text-sm leading-relaxed text-graphite-500">
              Система регулярного видеоконтента с AI-аватаром и автоматизацией.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-graphite-400">
              Навигация
            </p>
            <nav className="flex flex-col gap-2" aria-label="Навигация в подвале">
              <a href="#how-it-works" className="text-sm text-graphite-600 hover:text-accent-600">
                Как работает
              </a>
              <a href="#video-demo" className="text-sm text-graphite-600 hover:text-accent-600">
                Пример
              </a>
              <a href="#services" className="text-sm text-graphite-600 hover:text-accent-600">
                Услуги
              </a>
              <a href="#pricing" className="text-sm text-graphite-600 hover:text-accent-600">
                Тарифы
              </a>
              <a href="#faq" className="text-sm text-graphite-600 hover:text-accent-600">
                FAQ
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-graphite-400">
              Контакты
            </p>
            <div className="flex flex-col gap-2">
              {siteConfig.contacts.email && !siteConfig.contacts.email.includes("ВСТАВИТЬ") && (
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="text-sm text-graphite-600 hover:text-accent-600"
                >
                  {siteConfig.contacts.email}
                </a>
              )}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-graphite-600 hover:text-accent-600"
              >
                <TelegramIcon className="h-4 w-4" />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-graphite-100 pt-8 md:flex-row">
          <p className="text-sm text-graphite-400">
            © {currentYear} {siteConfig.name}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-graphite-500 hover:text-accent-600"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/consent"
              className="text-sm text-graphite-500 hover:text-accent-600"
            >
              Согласие на обработку персональных данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
