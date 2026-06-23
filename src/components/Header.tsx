"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <div className="border-b border-purple-300/10 bg-black/55 px-4 py-1 text-center text-sm font-black text-glowred sm:text-base">
        בְּסִיַּעְתָּא דִשְׁמַיָּא
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <a className="inline-flex h-10 items-center rounded-full bg-white px-3 shadow-[0_0_34px_rgba(255,255,255,0.08)]" href={site.internationalUrl} rel="noreferrer" target="_blank" aria-label="האתר הרשמי של NAVINES">
            <img alt="NAVINES" className="h-6 w-auto" src="/brand/navines-wordmark.png" />
          </a>
          <Link className="leading-tight" href="/" aria-label="נביא נס ישראל בע״מ, בית">
            <strong className="block text-lg font-black text-white">נביא נס ישראל בע״מ</strong>
            <span className="block text-base text-zinc-400">בינה מלאכותית ותשתיות דיגיטליות</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="תפריט ראשי">
          {mainNav.map((item) => (
            <Link className="rounded-full px-3.5 py-2.5 text-base font-black text-zinc-300 transition hover:bg-white/8 hover:text-white xl:px-4" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a className="btn-secondary" href={site.phoneHref}>
            התקשרו עכשיו
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
          </div>
        </nav>
      )}
    </header>
  );
}
