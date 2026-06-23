"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, site } from "@/data/site";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <a className="inline-flex shrink-0 items-center transition hover:opacity-90" href={site.internationalUrl} rel="noreferrer" target="_blank" aria-label="האתר הרשמי של NAVINES">
            <img alt="NAVINES" className="h-5 w-auto object-contain drop-shadow-[0_0_14px_rgba(216,180,254,0.38)] sm:h-5" src="/brand/navines-wordmark-slim.png" />
          </a>
          <Link className="block min-w-0 leading-tight" href="/" aria-label="נבינס ישראל בע״מ, בית">
            <strong className="block truncate text-[1.05rem] font-black text-white sm:text-lg xl:text-xl">נבינס ישראל בע״מ</strong>
            <span className="block truncate text-[0.76rem] text-zinc-400 sm:text-sm xl:text-base">בינה מלאכותית ותשתיות דיגיטליות</span>
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
          <a className="inline-flex h-8 items-center transition hover:opacity-90" href={site.internationalUrl} rel="noreferrer" target="_blank" aria-label="NAVINES.COM">
            <img alt="NAVINES" className="h-4 w-auto object-contain opacity-90 drop-shadow-[0_0_10px_rgba(216,180,254,0.25)]" src="/brand/navines-wordmark-slim.png" />
          </a>
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
