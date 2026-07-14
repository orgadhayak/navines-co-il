"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { site } from "@/data/site";

type AssistantAction = {
  label: string;
  href: string;
  tone?: "primary" | "danger" | "neutral";
};

type Message = {
  role: "assistant" | "user";
  text: string;
  actions?: AssistantAction[];
};

type AssistantResponse = {
  answer?: string;
  actions?: AssistantAction[];
  source?: "openai" | "fallback";
  intent?: string;
};

const openingMessage =
  "שלום, אני העוזר החכם של נביא נס ישראל בע״מ. אפשר לשאול אותי על אתרים, AI, אוטומציה, קורסים, Amazon, תמיכה טכנית, Beacon, TalkToData או כל שירות באתר.";

const fallbackActions: AssistantAction[] = [
  { label: "דברו בוואטסאפ", href: site.whatsappHref, tone: "primary" },
  { label: "התקשרו עכשיו", href: site.phoneHref, tone: "danger" },
];

function AssistantIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="assistantBotGlow" x1="12" x2="54" y1="10" y2="58">
          <stop stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c084fc" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path d="M32 5.5 40.5 14l12.2 3.3 3.2 12.2L50.5 40 47 52.3l-12.1 3.2L24.4 50 12.1 46.7 8.9 34.6 14.4 24 17.7 11.9 32 5.5Z" fill="url(#assistantBotGlow)" opacity="0.24" />
      <path d="M20.5 24.2c0-5.7 4.6-10.2 10.2-10.2h2.6c5.6 0 10.2 4.5 10.2 10.2v2.1h1.4c3 0 5.4 2.4 5.4 5.4v8.6c0 3-2.4 5.4-5.4 5.4H19.1c-3 0-5.4-2.4-5.4-5.4v-8.6c0-3 2.4-5.4 5.4-5.4h1.4v-2.1Z" fill="#12051f" stroke="url(#assistantBotGlow)" strokeWidth="2.5" />
      <path d="M24 25.6h16M28.2 14v-4.5M35.8 14v-4.5" stroke="#f5f3ff" strokeLinecap="round" strokeWidth="2.5" />
      <circle cx="25.2" cy="34.5" r="3.1" fill="#f5f3ff" />
      <circle cx="38.8" cy="34.5" r="3.1" fill="#f5f3ff" />
      <path d="M27.6 41.3c2.6 1.8 6.2 1.8 8.8 0" stroke="#c084fc" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M11.8 31.4H7.5M56.5 31.4h-4.3M18.4 49.2l-2.8 3.1M45.6 49.2l2.8 3.1" stroke="#c084fc" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function actionClass(tone?: AssistantAction["tone"]) {
  if (tone === "danger") {
    return "border-rose-300/40 bg-rose-500/20 text-white shadow-[0_0_18px_rgba(244,63,94,0.2)] hover:bg-rose-500/30";
  }

  if (tone === "primary") {
    return "border-purple-100/45 bg-purple-500/30 text-white shadow-[0_0_22px_rgba(168,85,247,0.3)] hover:bg-purple-500/42";
  }

  return "border-white/12 bg-white/[0.07] text-zinc-100 hover:bg-purple-500/18";
}

export function SiteAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: openingMessage }]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  async function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.replace(/\s+/g, " ").trim().slice(0, 500);
    if (!question || loading) return;

    const history = messages
      .slice(-10)
      .filter((message) => message.text !== openingMessage)
      .map((message) => ({
        role: message.role,
        text: message.text.replace(/\s+/g, " ").trim().slice(0, 420),
      }))
      .filter((message) => message.text.length > 0);

    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", text: question }]);

    try {
      const response = await fetch("/api/site-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history }),
      });
      const data = (await response.json()) as AssistantResponse;
      const actions = Array.isArray(data?.actions)
        ? data.actions.filter((action: AssistantAction) => typeof action?.label === "string" && typeof action?.href === "string").slice(0, 3)
        : [];

      if (data?.source) {
        console.debug("site-assistant debug:", { source: data.source, intent: data.intent });
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: data?.answer || "כדאי לדבר איתנו בוואטסאפ ונכוון אתכם.",
          actions,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "יש תקלה רגעית בצ׳ט. כדאי לדבר איתנו בוואטסאפ או בטלפון ונכוון אתכם.",
          actions: fallbackActions,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-3 z-40 max-w-[calc(100vw-1.5rem)] sm:right-5">
      {open ? (
        <section
          aria-label="העוזר החכם של נביא נס"
          className="relative mb-3 grid max-h-[70svh] w-[min(22rem,calc(100vw-1.5rem))] max-w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-[2rem] border border-purple-200/24 bg-[radial-gradient(circle_at_18%_0%,rgba(233,213,255,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.2),transparent_32%),linear-gradient(145deg,rgba(38,11,68,0.96),rgba(6,3,13,0.98)_54%,rgba(30,7,53,0.96))] p-2.5 shadow-[0_0_58px_rgba(168,85,247,0.32),0_20px_70px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl sm:max-h-[min(43rem,calc(100svh-7.5rem))] sm:w-[23.5rem] sm:p-3"
        >
          <span className="pointer-events-none absolute left-10 top-8 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" aria-hidden="true" />
          <span className="pointer-events-none absolute right-14 top-20 h-1 w-1 rounded-full bg-purple-100 shadow-[0_0_14px_rgba(216,180,254,0.9)]" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-16 left-20 h-1 w-1 rounded-full bg-purple-200 shadow-[0_0_16px_rgba(192,132,252,0.9)]" aria-hidden="true" />

          <div className="relative flex items-start justify-between gap-3 border-b border-purple-100/12 pb-2.5 sm:pb-3">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-purple-100/22 bg-black/28 shadow-[0_0_24px_rgba(168,85,247,0.22)] sm:h-12 sm:w-12">
                <AssistantIcon className="h-8 w-8 drop-shadow-[0_0_12px_rgba(216,180,254,0.64)] sm:h-9 sm:w-9" />
              </span>
              <div className="min-w-0">
                <h2 className="text-base font-semibold leading-tight text-white sm:text-lg">העוזר החכם של נביא נס</h2>
                <p className="mt-1 text-xs leading-5 text-purple-100/82">תשובות קצרות על שירותים, AI, אתרים, קורסים ותמיכה</p>
              </div>
            </div>
            <button aria-label="סגירת צ׳ט" className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-lg font-semibold leading-none text-zinc-100 transition hover:bg-purple-500/18" onClick={() => setOpen(false)} type="button">
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div ref={scrollRef} className="site-assistant-scroll relative mt-2.5 grid min-h-0 gap-2 overflow-y-auto rounded-[1.35rem] bg-black/16 p-1.5 pr-1 sm:mt-3 sm:rounded-[1.45rem] sm:p-2">
            {messages.map((message, index) => (
              <div className={`grid gap-2 ${message.role === "user" ? "justify-items-end" : "justify-items-start"}`} key={`${message.role}-${index}`}>
                <p
                  className={`max-w-[95%] whitespace-pre-line px-3.5 py-3 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "rounded-[1.35rem] rounded-tr-md border border-purple-100/18 bg-[linear-gradient(145deg,rgba(20,8,36,0.86),rgba(50,18,83,0.55))] text-zinc-50 shadow-[0_0_22px_rgba(168,85,247,0.12)]"
                      : "rounded-[1.35rem] rounded-tl-md border border-purple-100/22 bg-[linear-gradient(145deg,rgba(109,40,217,0.5),rgba(59,7,100,0.62))] text-white shadow-[0_0_20px_rgba(168,85,247,0.18)]"
                  }`}
                >
                  {message.text}
                </p>
                {message.actions?.length ? (
                  <div className="flex max-w-[95%] flex-wrap gap-2">
                    {message.actions.map((action) => (
                      <a className={`rounded-full border px-3.5 py-2 text-xs font-semibold shadow-sm transition hover:-translate-y-0.5 ${actionClass(action.tone)}`} href={action.href} key={`${action.label}-${action.href}`}>
                        {action.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            {loading ? (
              <div className="site-assistant-typing" aria-label="העוזר מקליד" role="status">
                <span />
                <span />
                <span />
              </div>
            ) : null}
          </div>

          <form className="relative mt-2.5 grid gap-2 sm:mt-3" onSubmit={submitQuestion}>
            <label className="sr-only" htmlFor="site-assistant-message">שאלה לעוזר החכם</label>
            <input
              className="min-h-12 rounded-full border border-purple-100/24 bg-black/42 px-4 text-sm text-white outline-none transition placeholder:text-purple-100/45 focus:border-purple-100/55 focus:shadow-[0_0_24px_rgba(168,85,247,0.22)]"
              id="site-assistant-message"
              maxLength={500}
              onChange={(event) => setInput(event.target.value)}
              placeholder="כתבו שאלה קצרה"
              value={input}
            />
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <button className="rounded-full border border-purple-100/38 bg-purple-500/30 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(168,85,247,0.26)] transition hover:bg-purple-500/42 disabled:opacity-55" disabled={loading} type="submit">
                שליחה
              </button>
              <a className="rounded-full border border-white/12 bg-white/[0.07] px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-purple-500/18" href={site.whatsappHref}>
                וואטסאפ
              </a>
            </div>
          </form>
        </section>
      ) : null}

      <button
        aria-expanded={open}
        className="group relative flex min-h-16 items-center gap-3 overflow-hidden rounded-full border border-purple-100/34 bg-[linear-gradient(135deg,#241045,#6d28d9_48%,#111827)] px-4 py-3 text-right text-white shadow-[0_0_42px_rgba(168,85,247,0.38),0_14px_44px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_0_52px_rgba(216,180,254,0.46)]"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_78%_78%,rgba(192,132,252,0.18),transparent_34%)]" aria-hidden="true" />
        <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/18 bg-black/25">
          <AssistantIcon className="h-8 w-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.65)]" />
        </span>
        <span className="relative grid leading-tight">
          <span className="text-[0.72rem] font-semibold text-purple-100/85">צ׳ט AI</span>
          <span className="text-sm font-semibold text-white">העוזר החכם</span>
        </span>
      </button>
    </div>
  );
}
