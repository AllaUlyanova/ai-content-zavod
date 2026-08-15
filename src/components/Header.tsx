"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";
import { TelegramIcon, MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { scrollToElement } from "@/lib/utils";
import { isValidExternalUrl } from "@/lib/youtube";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    setIsMobileMenuOpen(false);
    if (external) return;
    if (href.startsWith("#")) {
      scrollToElement(href.slice(1));
    }
  };

  const telegramUrl = siteConfig.telegramChannelUrl;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-graphite-100 bg-white/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-graphite-950"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {siteConfig.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
          {siteConfig.navigation.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={isValidExternalUrl(telegramUrl) ? telegramUrl : "#telegram"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-graphite-600 transition-colors hover:text-accent-600"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-graphite-600 transition-colors hover:text-accent-600"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {isValidExternalUrl(telegramUrl) && (
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-graphite-200 text-graphite-600 transition-colors hover:border-accent-300 hover:text-accent-600"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
          )}
          <Button size="sm" onClick={() => scrollToElement("lead-form")}>
            Заказать ролик — 7 900 ₽
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-graphite-200 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-graphite-100 bg-white px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Мобильная навигация">
            {siteConfig.navigation.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={isValidExternalUrl(telegramUrl) ? telegramUrl : "#telegram"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-base text-graphite-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="py-2 text-left text-base text-graphite-700"
                >
                  {item.label}
                </button>
              )
            )}
            <Button
              className="mt-4 w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToElement("lead-form");
              }}
            >
              Заказать ролик — 7 900 ₽
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
