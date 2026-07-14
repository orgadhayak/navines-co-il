import Link from "next/link";
import { languageLinks, type LocaleSlug } from "@/i18n/locales";

type LanguageStripProps = {
  current?: LocaleSlug;
  title?: string;
  compact?: boolean;
};

export function LanguageStrip({ current = "he", title = "NAVINES בעולם", compact = false }: LanguageStripProps) {
  return (
    <section className={compact ? "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" : "mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8"}>
      <div className="flex flex-col gap-4 border-y py-5 md:flex-row md:items-center md:justify-between" style={{ borderColor: "var(--border)" }}>
        <p className="text-base font-semibold" style={{ color: "var(--text)" }}>{title}</p>
        <nav aria-label={title} className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {languageLinks.map((locale, index) => {
            const isCurrent = locale.slug === current;
            const content = (
              <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium">
                <span className="english-tech text-xs font-semibold">{locale.shortLabel}</span>
                <span>{locale.nativeName}</span>
              </span>
            );
            const className = `inline-flex min-h-9 items-center border-b px-1.5 py-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
              isCurrent ? "border-sky-500 text-sky-700" : "border-transparent hover:border-sky-400"
            }`;
            const style = { color: isCurrent ? "var(--primary)" : "var(--text-muted)" };

            return (
              <span className="inline-flex items-center gap-3" key={locale.nativeName}>
                {locale.href.startsWith("http") ? (
                  <a aria-current={isCurrent ? "page" : undefined} aria-label={`${locale.nativeName} language`} className={className} href={locale.href} rel="noopener noreferrer" style={style} target="_blank">
                    {content}
                  </a>
                ) : (
                  <Link aria-current={isCurrent ? "page" : undefined} aria-label={`${locale.nativeName} language`} className={className} href={locale.href} style={style}>
                    {content}
                  </Link>
                )}
                {index < languageLinks.length - 1 ? <span aria-hidden="true" className="hidden h-4 w-px sm:inline-block" style={{ background: "var(--border)" }} /> : null}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
