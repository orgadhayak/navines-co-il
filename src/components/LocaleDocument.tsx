"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/i18n/locales";

const skipLabels = {
  he: "דלגו לתוכן המרכזי",
  de: "Zum Hauptinhalt springen",
  jp: "本文へスキップ",
  ar: "تخطي إلى المحتوى الرئيسي",
  hi: "मुख्य सामग्री पर जाएँ",
  fr: "Aller au contenu principal",
  zh: "跳到主要内容",
};

export function LocaleDocument() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = localeFromPath(pathname || "/");
    document.documentElement.lang = locale.lang;
    document.documentElement.dir = locale.dir;
  }, [pathname]);

  const locale = localeFromPath(pathname || "/");

  return (
    <a className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50 focus:rounded-premium focus:bg-white focus:px-4 focus:py-3 focus:text-ink" href="#main">
      {skipLabels[locale.slug] || skipLabels.he}
    </a>
  );
}
