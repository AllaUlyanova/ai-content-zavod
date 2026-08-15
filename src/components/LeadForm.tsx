"use client";

import { useState, type FormEvent } from "react";
import { leadFormData } from "@/data/leadForm";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  contact: string;
  niche: string;
  interest: string;
  website: string;
  consent: boolean;
}

const initialFormData: FormData = {
  name: "",
  contact: "",
  niche: "",
  interest: leadFormData.interestOptions[0],
  website: "",
  consent: false,
};

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setErrorMessage("Необходимо согласие на обработку персональных данных.");
      setStatus("error");
      return;
    }

    if (!webhookUrl) {
      if (process.env.NODE_ENV === "development") {
        setErrorMessage(
          "Webhook n8n не настроен. Добавьте NEXT_PUBLIC_N8N_WEBHOOK_URL в файл .env.local"
        );
      } else {
        setErrorMessage(
          "Форма временно недоступна. Напишите нам в Telegram."
        );
      }
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          niche: formData.niche,
          interest: formData.interest,
          website: formData.website || null,
          submittedAt: new Date().toISOString(),
          source: "landing",
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Не удалось отправить заявку. Попробуйте позже или напишите в Telegram."
      );
    }
  };

  if (status === "success") {
    return (
      <Section id="lead-form">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-graphite-950">
            {leadFormData.successMessage}
          </h2>
          <Button variant="ghost" onClick={() => setStatus("idle")}>
            Отправить ещё одну заявку
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="lead-form">
      <SectionHeader title={leadFormData.title} />

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl space-y-5"
        noValidate
      >
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-graphite-700">
            Имя
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100"
            placeholder="Как к вам обращаться"
          />
        </div>

        <div>
          <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-graphite-700">
            Telegram или телефон
          </label>
          <input
            id="contact"
            type="text"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100"
            placeholder="@username или +7..."
          />
        </div>

        <div>
          <label htmlFor="niche" className="mb-1.5 block text-sm font-medium text-graphite-700">
            Ваша ниша / деятельность
          </label>
          <input
            id="niche"
            type="text"
            required
            value={formData.niche}
            onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
            className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100"
            placeholder="Например: психолог, юрист, онлайн-школа"
          />
        </div>

        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-graphite-700">
            Что хотите автоматизировать?
          </label>
          <select
            id="interest"
            required
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100"
          >
            {leadFormData.interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-graphite-700">
            Ссылка на ваш сайт или соцсеть{" "}
            <span className="text-graphite-400">(необязательно)</span>
          </label>
          <input
            id="website"
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100"
            placeholder="https://..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-graphite-300 text-accent-600 focus:ring-accent-500"
          />
          <label htmlFor="consent" className="text-sm text-graphite-600">
            Согласен(на) на{" "}
            <a href="/consent" className="text-accent-600 underline hover:text-accent-700">
              обработку персональных данных
            </a>
          </label>
        </div>

        {status === "error" && errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Отправка..." : "Отправить заявку"}
        </Button>
      </form>
    </Section>
  );
}
