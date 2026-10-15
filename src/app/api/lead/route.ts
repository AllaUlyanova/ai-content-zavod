import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Lead = {
  name?: unknown;
  contact?: unknown;
  niche?: unknown;
  interest?: unknown;
  website?: unknown;
  submittedAt?: unknown;
  source?: unknown;
};

function clean(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = (await request.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const lead = {
    name: clean(body.name, 200),
    contact: clean(body.contact, 200),
    niche: clean(body.niche, 300),
    interest: clean(body.interest, 300),
    website: clean(body.website, 300),
    submittedAt: clean(body.submittedAt, 50) || new Date().toISOString(),
    source: clean(body.source, 50) || "landing",
  };

  if (!lead.name || !lead.contact) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    const text = [
      "Новая заявка с сайта",
      "",
      `Имя: ${lead.name}`,
      `Контакт: ${lead.contact}`,
      `Ниша: ${lead.niche || "–"}`,
      `Интерес: ${lead.interest || "–"}`,
      `Сайт клиента: ${lead.website || "–"}`,
    ].join("\n");

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      if (!response.ok) {
        return NextResponse.json({ ok: false }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    } catch {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  }

  // Пока Telegram-бот не настроен – прежний путь через вебхук n8n
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, website: lead.website || null }),
      });
      return NextResponse.json({ ok: response.ok }, { status: response.ok ? 200 : 502 });
    } catch {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: false }, { status: 503 });
}
