"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/[0.88] backdrop-blur-xl">
      <div className="border-b border-purple-300/10 bg-black/[0.62] px-4 py-1.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-sm sm:text-base">
          <p className="font-black text-glowred">בְּסִיַּעְתָּא דִשְׁמַיָּא</p>
          <a className="hidden font-black text-zinc-300 transition hover:text-white sm:inline-flex" href={site.whatsappHref}>
            דברו איתנו בוואטסאפ
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <a className="inline-flex h-12 min-w-40 items-center rounded-full border border-purple-300/16 bg-white/[0.035] px-4 shadow-[0_0_34px_rgba(168,85,247,0.16)] transition hover:border-purple-300/34 hover:bg-white/[0.055] sm:h-[3.25rem]" href={site.internationalUrl} rel="noreferrer" target="_blank" aria-label="האתר הרשמי של NAVINES">
            <img alt="NAVINES" className="h-7 w-auto object-contain drop-shadow-[0_0_18px_rgba(216,180,254,0.36)] sm:h-9" src="/brand/navines-wordmark-slim.png" />
          </a>
          <Link className="hidden leading-tight sm:block" href="/" aria-label="נביא נס ישראל בע״מ, בית">
            <strong className="block text-base font-black text-white xl:text-lg">נביא נס ישראל בע״מ</strong>
            <span className="block text-sm text-zinc-400 xl:text-base">בינה מלאכותית ותשתיות דיגיטליות</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="תפריט ראשי">
          {mainNav.map((item) => (
            <Link className="rounded-full px-2.5 py-2 text-sm font-black text-zinc-300 transition hover:bg-white/8 hover:text-white xl:px-3.5 xl:text-base" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a className="btn-primary min-w-0 px-5 py-2.5 text-base" href={site.whatsappHref}>
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
