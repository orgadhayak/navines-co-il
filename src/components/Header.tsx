"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, site } from "@/data/site";

const primaryDesktopNav = mainNav.filter((item) => ["/", "/about", "/services", "/optimization-hub", "/services/chatgpt-business-data", "/products", "/blog"].includes(item.href));
const secondaryDesktopNav = mainNav.filter((item) => !primaryDesktopNav.some((primary) => primary.href === item.href));

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/[0.88] backdrop-blur-xl">
      <div className="border-b border-purple-300/10 bg-black/[0.62] px-4 py-1.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <p className="bsd-mark text-glowred">בְּסִיַּעְתָּא דִשְׁמַיָּא</p>
          <a className="hidden text-sm font-black text-zinc-300 transition hover:text-white sm:inline-flex" href={site.whatsappHref}>
            שיחת היכרות חינם בוואטסאפ
          </a>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-2.5 sm:px-6 lg:grid-cols-[minmax(15rem,0.95fr)_minmax(0,1.7fr)_auto] lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Link className="inline-flex shrink-0 items-center transition hover:opacity-90" href="/" aria-label="חזרה לעמוד הבית">
            <img alt="NAVINES" className="h-5 w-auto object-contain drop-shadow-[0_0_14px_rgba(216,180,254,0.38)] sm:h-5" src="/brand/navines-wordmark-slim.png" />
          </Link>
          <Link className="block min-w-0 leading-tight" href="/" aria-label="נביא נס ישראל בע״מ, בית">
            <strong className="block truncate text-[1.05rem] font-black text-white sm:text-lg xl:text-xl">נביא נס ישראל בע״מ</strong>
            <span className="block truncate text-[0.76rem] text-zinc-400 sm:text-sm xl:text-base">בינה מלאכותית ותשתיות דיגיטליות</span>
          </Link>
        </div>

        <nav className="hidden min-w-0 items-center justify-center gap-1 lg:flex" aria-label="תפריט ראשי">
          {primaryDesktopNav.map((item) => (
            <Link className="whitespace-nowrap rounded-full px-2.5 py-2 text-[0.82rem] font-black text-zinc-300 transition hover:bg-white/8 hover:text-white xl:px-3 xl:text-sm" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <details className="group relative">
            <summary className="list-none whitespace-nowrap rounded-full px-2.5 py-2 text-[0.82rem] font-black text-zinc-300 transition hover:bg-white/8 hover:text-white xl:px-3 xl:text-sm">
              עוד
            </summary>
            <div className="absolute left-0 top-full z-50 mt-2 grid min-w-56 gap-1 rounded-[1.2rem] border border-white/10 bg-black/95 p-2 shadow-premium backdrop-blur-xl">
              {secondaryDesktopNav.map((item) => (
                <Link className="whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-black text-zinc-300 transition hover:bg-purple-500/12 hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="hidden justify-end lg:flex">
          <a className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full border border-purple-200/25 bg-purple-500/16 px-5 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(168,85,247,0.16)] transition hover:-translate-y-0.5 hover:bg-purple-500/24" href={site.whatsappHref}>
            וואטסאפ
          </a>
        </div>

        <button
          aria-expanded={open}
          aria-label="פתיחת תפריט"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink px-4 py-3 lg:hidden" aria-label="תפריט מובייל">
          <div className="mx-auto grid max-w-7xl gap-1">
            {mainNav.map((item) => (
              <Link className="rounded-full px-4 py-3.5 text-lg font-black text-zinc-200 hover:bg-white/8" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a className="mt-2 rounded-full border border-purple-300/20 bg-purple-500/15 px-4 py-3.5 text-center text-lg font-black text-white" href={site.whatsappHref} onClick={() => setOpen(false)}>
              דברו איתנו בוואטסאפ
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
