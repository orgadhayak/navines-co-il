"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="נביא נס ישראל, בית">
          <span className="inline-flex h-10 items-center rounded-premium bg-white px-3 shadow-[0_0_34px_rgba(255,255,255,0.08)]">
            <img alt="NAVINES" className="h-6 w-auto" src="/brand/navines-wordmark.png" />
          </span>
          <span className="leading-tight">
            <strong className="block text-lg font-black text-white">נביא נס ישראל</strong>
            <span className="block text-base text-zinc-400">AI ותשתיות דיגיטליות</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="תפריט ראשי">
          {mainNav.map((item) => (
            <Link className="rounded-premium px-3 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/8 hover:text-white" href={item.href} key={item.href}>
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
          className="grid h-11 w-11 place-items-center rounded-premium border border-white/10 bg-white/5 lg:hidden"
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
              <Link className="rounded-premium px-3 py-3 font-bold text-zinc-200 hover:bg-white/8" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
