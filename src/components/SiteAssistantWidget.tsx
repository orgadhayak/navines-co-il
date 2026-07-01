"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "@/data/site";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const openingMessage = "שלום, אני העוזר החכם של נביא נס ישראל בע״מ. אפשר לשאול אותי על אתרים, AI, אוטומציה, קורסים, Amazon, תמיכה טכנית, Beacon, TalkToData או כל שירות באתר.";

export function SiteAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: openingMessage }]);

  async function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.replace(/\s+/g, " ").trim().slice(0, 500);
    if (!question || loading) return;

    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", text: question }]);

    try {
      const response = await fetch("/api/site-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await response.json();
      setMessages((current) => [...current, { role: "assistant", text: data?.answer || "כדאי לדבר איתנו בוואטסאפ ונכוון אתכם." }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", text: "יש תקלה רגעית בצ׳ט. כדאי לדבר איתנו בוואטסאפ ונכוון אתכם." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)]">
      {open ? (
        <section className="mb-3 w-[22rem] max-w-full rounded-[1.4rem] border border-purple-200/25 bg-black/95 p-3 shadow-[0_0_52px_rgba(168,85,247,0.28)] backdrop-blur-xl" aria-label="העוזר החכם של נביא נס">
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-black text-white">העוזר החכם של נביא נס</h2>
              <p className="text-xs leading-5 text-zinc-400">תשובות קצרות. בלי מידע רגיש.</p>
            </div>
            <button className="rounded-full border border-white/10 px-3 py-1 text-sm font-black text-zinc-200 transition hover:bg-purple-500/18" onClick={() => setOpen(false)} type="button">
              סגור
            </button>
          </div>
          <div className="mt-3 grid max-h-72 gap-2 overflow-y-auto pr-1">
            {messages.map((message, index) => (
              <p className={`rounded-[1rem] px-3 py-2 text-sm leading-6 ${message.role === "assistant" ? "bg-purple-500/12 text-zinc-100" : "bg-white/[0.06] text-white"}`} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
            {loading ? <p className="rounded-[1rem] bg-purple-500/10 px-3 py-2 text-sm text-zinc-300">בודק תשובה קצרה...</p> : null}
          </div>
          <form className="mt-3 grid gap-2" onSubmit={submitQuestion}>
            <label className="sr-only" htmlFor="site-assistant-message">שאלה לעוזר החכם</label>
            <input
              className="min-h-12 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-purple-200/45"
              id="site-assistant-message"
              maxLength={500}
              onChange={(event) => setInput(event.target.value)}
              placeholder="כתבו שאלה קצרה"
              value={input}
            />
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <button className="rounded-full border border-purple-200/25 bg-purple-500/18 px-4 py-2 text-sm font-black text-white transition hover:bg-purple-500/28 disabled:opacity-55" disabled={loading} type="submit">
                שליחה
              </button>
              <a className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-zinc-200 transition hover:bg-purple-500/18" href={site.whatsappHref}>
                וואטסאפ
              </a>
            </div>
          </form>
        </section>
      ) : null}
      <button
        aria-expanded={open}
        className="min-h-14 rounded-full border border-purple-200/35 bg-black/92 px-5 py-3 text-sm font-black text-white shadow-[0_0_36px_rgba(168,85,247,0.35)] transition hover:-translate-y-0.5 hover:bg-purple-950"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        העוזר החכם
      </button>
    </div>
  );
}
