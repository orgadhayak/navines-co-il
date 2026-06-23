"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { solutionPages } from "@/data/solutions";
import { mainNav, site } from "@/data/site";

const primaryDesktopNav = mainNav.filter((item) => ["/", "/about", "/services", "/optimization-hub", "/services/chatgpt-business-data", "/products", "/blog"].includes(item.href));
const secondaryDesktopNav = mainNav.filter((item) => !primaryDesktopNav.some((primary) => primary.href === item.href));
const solutionNav = solutionPages.map((solution) => ({ label: solution.navLabel, href: `/solutions/${solution.slug}` }));

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/[0.9] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <Link className="grid shrink-0 justify-items-center gap-1 transition hover:opacity-90" href="/" aria-label="חזרה לעמוד הבית">
          <span className="bsd-royal inline-flex items-center justify-center gap-1">
            <span className="crown-mark" aria-hidden="true">♛</span>
            בְּסִיַּעְתָּא דִשְׁמַיָּא
          </span>
          <img alt="NAVINES" className="h-4 w-auto object-contain drop-shadow-[0_0_13px_rgba(216,180,254,0.42)] sm:h-[1.1rem]" src="/brand/navines-wordmark-slim.png" />
        </Link>

        <Link className="min-w-0 justify-self-center text-center leading-tight" href="/" aria-label="נביא נס ישראל בע״מ, בית">
          <strong className="block truncate text-[1.18rem] font-black text-white sm:text-2xl lg:text-[1.65rem]">נביא נס ישראל בע״מ</strong>
          <span className="block truncate text-[0.76rem] text-zinc-400 sm:text-sm lg:text-base">בינה מלאכותית ותשתיות דיגיטליות</span>
        </Link>

        <div className="flex justify-end">
          <a className="hidden min-h-10 items-center justify-center whitespace-nowrap rounded-full border border-purple-200/25 bg-purple-500/16 px-5 py-2 text-sm font-black text-white shadow-[0_0_28px_rgba(168,85,247,0.16)] transition hover:-translate-y-0.5 hover:bg-purple-500/24 lg:inline-flex" href={site.whatsappHref}>
            וואטסאפ
          </a>
          <button
            aria-expanded={open}
            aria-label="פתיחת תפריט"
            className="mobile-menu-button inline-flex min-h-10 min-w-[4.2rem] items-center justify-center px-1 text-center transition lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span className="text-[0.9rem] font-black leading-none text-purple-100">תפריט</span>
          </button>
        </div>
      </div>

      <div className="hidden border-t border-white/5 lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4 py-2 sm:px-6 lg:px-8" aria-label="תפריט ראשי">
          {primaryDesktopNav.map((item) => (
            <Fragment key={item.href}>
              <Link className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-black text-zinc-300 transition hover:bg-white/8 hover:text-white" href={item.href}>
                {item.label}
              </Link>
              {item.href === "/services" ? (
                <details className="group relative">
                  <summary className="list-none whitespace-nowrap rounded-full px-3 py-2 text-sm font-black text-zinc-300 transition hover:bg-white/8 hover:text-white">
                    פתרונות
                  </summary>
                  <div className="absolute left-0 top-full z-50 mt-2 grid min-w-60 gap-1 rounded-[1.2rem] border border-white/10 bg-black/95 p-2 shadow-premium backdrop-blur-xl">
                    <Link className="whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-black text-zinc-300 transition hover:bg-purple-500/12 hover:text-white" href="/solutions">
                      כל הפתרונות
                    </Link>
                    {solutionNav.map((item) => (
                      <Link className="whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-black text-zinc-300 transition hover:bg-purple-500/12 hover:text-white" href={item.href} key={item.href}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : null}
            </Fragment>
          ))}
          <details className="group relative">
            <summary className="list-none whitespace-nowrap rounded-full px-3 py-2 text-sm font-black text-zinc-300 transition hover:bg-white/8 hover:text-white">
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
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-4 py-3 lg:hidden" aria-label="תפריט מובייל">
          <div className="mx-auto grid max-w-7xl gap-1">
            {mainNav.map((item) => (
              <Link className="rounded-full px-4 py-3 text-center text-lg font-black text-zinc-200 hover:bg-white/8" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="rounded-[1.25rem] border border-purple-200/16 bg-purple-500/[0.06] p-2">
              <Link className="block rounded-full px-4 py-3 text-center text-lg font-black text-purple-100 hover:bg-purple-500/12" href="/solutions" onClick={() => setOpen(false)}>
                פתרונות
              </Link>
              <div className="grid gap-1">
                {solutionNav.map((item) => (
                  <Link className="rounded-full px-4 py-2.5 text-center text-base font-black text-zinc-200 hover:bg-white/8" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <a className="mt-2 rounded-full border border-purple-300/20 bg-purple-500/15 px-4 py-3 text-center text-lg font-black text-white" href={site.whatsappHref} onClick={() => setOpen(false)}>
              דברו איתנו בוואטסאפ
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
