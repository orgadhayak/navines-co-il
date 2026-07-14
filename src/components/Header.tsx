"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { languageLinks, localeFromPath, type LocaleSlug } from "@/i18n/locales";
import { solutionPages } from "@/data/solutions";
import { courseTracks, services, site } from "@/data/site";

type DropdownKey = "services" | "solutions" | "language" | null;
type MobileGroup = "services" | "solutions" | "language" | null;

const serviceGroups = [
  {
    title: "AI, תוכנה ואתרים",
    links: [
      ["בינה מלאכותית ואוטומציה", "/services/ai-automation"],
      ["חיבור נתונים ל-ChatGPT", "/services/chatgpt-business-data"],
      ["צ׳ט AI לאתרים", "/services/ai-chat-for-websites"],
      ["בניית אתרים ומערכות", "/services/web-development"],
      ["פיתוח תוספים לדפדפן", "/services/browser-extension-development"],
      ["פיתוח אפליקציות", "/services/mobile-app-development"],
    ],
  },
  {
    title: "מסחר, תמיכה וסיכון",
    links: [
      ["איקומרס", "/services/ecommerce"],
      ["אתר SEO למוכרי Amazon", "/services/amazon-seller-seo-website"],
      ["תמיכה טכנית וסייבר", "/services/technical-support-cyber-networks"],
      ["סיוע בפריצה לחשבון", "/services/account-hack-recovery"],
      ["בדיקת עסק לפני רכישה", "/services/business-due-diligence-intelligence"],
      ["מרכז אופטימיזציה", "/optimization-hub"],
    ],
  },
  {
    title: "מסלולים וכלים",
    links: [
      ["אתר תדמית 999 ₪", "/services/business-website-999"],
      ["כלי חכם לגולשים", "/services/smart-website-lead-engine"],
      ["קורסי AI", "/courses"],
      ["משחקים", "/games"],
      ["כל השירותים", "/services"],
    ],
  },
];

const localizedNav: Record<Exclude<LocaleSlug, "he">, { services: string; solutions: string; process: string; why: string; insights: string; contact: string; cta: string; home: string; menu: string; language: string }> = {
  de: { services: "Leistungen", solutions: "Lösungen", process: "Arbeitsweise", why: "Warum NAVINES", insights: "Insights", contact: "Kontakt", cta: "WhatsApp", home: "Startseite", menu: "Menü", language: "Sprache" },
  jp: { services: "サービス", solutions: "ソリューション", process: "進め方", why: "NAVINESについて", insights: "インサイト", contact: "お問い合わせ", cta: "WhatsApp", home: "ホーム", menu: "メニュー", language: "言語" },
  ar: { services: "الخدمات", solutions: "الحلول", process: "طريقة العمل", why: "لماذا NAVINES", insights: "المقالات", contact: "تواصل", cta: "واتساب", home: "الرئيسية", menu: "القائمة", language: "اللغة" },
  hi: { services: "सेवाएँ", solutions: "समाधान", process: "काम करने का तरीका", why: "NAVINES क्यों", insights: "लेख", contact: "संपर्क", cta: "WhatsApp", home: "होम", menu: "मेन्यू", language: "भाषा" },
  fr: { services: "Services", solutions: "Solutions", process: "Méthode", why: "Pourquoi NAVINES", insights: "Articles", contact: "Contact", cta: "WhatsApp", home: "Accueil", menu: "Menu", language: "Langue" },
  zh: { services: "服务", solutions: "解决方案", process: "合作方式", why: "为什么选择 NAVINES", insights: "洞察", contact: "联系", cta: "WhatsApp", home: "首页", menu: "菜单", language: "语言" },
};

const localizedTagline: Record<LocaleSlug, string> = {
  he: "חברת תוכנה, AI ותשתיות דיגיטליות",
  de: "Software, KI und digitale Infrastruktur",
  jp: "ソフトウェア、AI、デジタル基盤",
  ar: "برمجيات وذكاء اصطناعي وبنية رقمية",
  hi: "सॉफ्टवेयर, AI और डिजिटल आधार",
  fr: "Logiciel, IA et infrastructure numérique",
  zh: "软件、AI 与数字基础设施",
};

export function Header({ initialLocale = "he" }: { initialLocale?: LocaleSlug }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<DropdownKey>(null);
  const [mobileGroup, setMobileGroup] = useState<MobileGroup>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const activeLocale = localeFromPath(pathname || "/").slug || initialLocale;
  const isHebrew = activeLocale === "he";
  const localized = isHebrew ? null : localizedNav[activeLocale as Exclude<LocaleSlug, "he">];
  const homeHref = isHebrew ? "/" : `/${activeLocale}`;

  useEffect(() => {
    setDropdown(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    function handleOutsideInteraction(event: PointerEvent | MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setDropdown(null);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdown(null);
        setMobileOpen(false);
        setMobileGroup(null);
      }
    }

    document.addEventListener("pointerdown", handleOutsideInteraction);
    document.addEventListener("click", handleOutsideInteraction);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideInteraction);
      document.removeEventListener("click", handleOutsideInteraction);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeAll = () => {
    setDropdown(null);
    setMobileOpen(false);
    setMobileGroup(null);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex min-w-0 items-center gap-3" href={homeHref} aria-label={isHebrew ? "חזרה לעמוד הבית" : localized?.home || "Home"} onClick={closeAll}>
          <img alt="NAVINES" className="brand-logo h-5 w-auto shrink-0 object-contain" src="/brand/navines-wordmark-slim.png" />
          <span className="hidden min-w-0 leading-tight sm:block">
            <strong className="block truncate text-base font-semibold" style={{ color: "var(--text)" }}>{isHebrew ? site.hebrewLegalName : "NAVINES"}</strong>
            <span className="block truncate text-sm" style={{ color: "var(--text-muted)" }}>{localizedTagline[activeLocale]}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={isHebrew ? "תפריט ראשי" : "Primary navigation"}>
          {isHebrew ? (
            <>
              <DropdownButton isOpen={dropdown === "services"} label="שירותים" onClick={() => setDropdown((current) => (current === "services" ? null : "services"))} />
              <DropdownButton isOpen={dropdown === "solutions"} label="פתרונות" onClick={() => setDropdown((current) => (current === "solutions" ? null : "solutions"))} />
              <NavLink href="/products" label="מוצרים" onClick={closeAll} />
              <NavLink href="/blog" label="מאמרים" onClick={closeAll} />
              <NavLink href="/about" label="אודות" onClick={closeAll} />
              <NavLink href="/contact" label="יצירת קשר" onClick={closeAll} />
            </>
          ) : (
            <>
              <NavLink href={`/${activeLocale}#services`} label={localized?.services || "Services"} onClick={closeAll} />
              <NavLink href={`/${activeLocale}#solutions`} label={localized?.solutions || "Solutions"} onClick={closeAll} />
              <NavLink href={`/${activeLocale}#process`} label={localized?.process || "Process"} onClick={closeAll} />
              <NavLink href={`/${activeLocale}#why`} label={localized?.why || "Why NAVINES"} onClick={closeAll} />
              <NavLink href={`/${activeLocale}#insights`} label={localized?.insights || "Insights"} onClick={closeAll} />
              <NavLink href={`/${activeLocale}#contact`} label={localized?.contact || "Contact"} onClick={closeAll} />
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle locale={activeLocale} />
          <button
            aria-expanded={dropdown === "language"}
            className="hidden min-h-10 rounded-lg border px-3 py-2 text-sm font-medium transition lg:inline-flex"
            onClick={() => setDropdown((current) => (current === "language" ? null : "language"))}
            style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text)" }}
            type="button"
          >
            {isHebrew ? "שפה" : localized?.language || "Language"}
          </button>
          <a className="hidden min-h-10 items-center rounded-lg px-4 py-2 text-sm font-semibold text-white lg:inline-flex" href={site.whatsappHref} rel="noopener noreferrer" target="_blank" style={{ background: "var(--primary)" }}>
            {isHebrew ? "דברו איתנו" : localized?.cta || "WhatsApp"}
          </a>
          <button
            aria-expanded={mobileOpen}
            aria-label={isHebrew ? "פתיחת תפריט" : localized?.menu || "Open menu"}
            className="mobile-menu-button inline-flex min-h-10 items-center justify-center px-3 py-2 text-sm font-semibold lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            {isHebrew ? "תפריט" : localized?.menu || "Menu"}
          </button>
        </div>
      </div>

      {dropdown && (
        <div className="hidden border-t lg:block" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            {dropdown === "services" ? <ServicesDropdown onClick={closeAll} /> : null}
            {dropdown === "solutions" ? <SolutionsDropdown onClick={closeAll} /> : null}
            {dropdown === "language" ? <LanguageDropdown onClick={closeAll} /> : null}
          </div>
        </div>
      )}

      {mobileOpen ? (
        <nav className="mobile-menu-panel px-4 py-4 lg:hidden" aria-label={isHebrew ? "תפריט מובייל" : "Mobile navigation"}>
          <div className="mx-auto grid max-w-7xl gap-2 pb-6">
            {isHebrew ? (
              <>
                <MobileGroupButton label="שירותים" open={mobileGroup === "services"} onClick={() => setMobileGroup((current) => (current === "services" ? null : "services"))} />
                {mobileGroup === "services" ? <MobileLinks links={[["כל השירותים", "/services"], ...services.slice(0, 18).map((service) => [service.title, `/services/${service.slug}`] as [string, string])]} onClick={closeAll} /> : null}
                <MobileGroupButton label="פתרונות" open={mobileGroup === "solutions"} onClick={() => setMobileGroup((current) => (current === "solutions" ? null : "solutions"))} />
                {mobileGroup === "solutions" ? <MobileLinks links={[["כל הפתרונות", "/solutions"], ...solutionPages.map((solution) => [solution.navLabel, `/solutions/${solution.slug}`] as [string, string])]} onClick={closeAll} /> : null}
                <MobileLinks links={[["מוצרים", "/products"], ["מאמרים", "/blog"], ["קורסים", "/courses"], ["אודות", "/about"], ["יצירת קשר", "/contact"]]} onClick={closeAll} />
              </>
            ) : (
              <MobileLinks
                links={[
                  [localized?.services || "Services", `/${activeLocale}#services`],
                  [localized?.solutions || "Solutions", `/${activeLocale}#solutions`],
                  [localized?.process || "Process", `/${activeLocale}#process`],
                  [localized?.why || "Why NAVINES", `/${activeLocale}#why`],
                  [localized?.insights || "Insights", `/${activeLocale}#insights`],
                  [localized?.contact || "Contact", `/${activeLocale}#contact`],
                ]}
                onClick={closeAll}
              />
            )}
            <MobileGroupButton label={isHebrew ? "שפות" : localized?.language || "Languages"} open={mobileGroup === "language"} onClick={() => setMobileGroup((current) => (current === "language" ? null : "language"))} />
            {mobileGroup === "language" ? <MobileLanguageLinks onClick={closeAll} /> : null}
            <a className="mobile-menu-cta" href={site.whatsappHref} rel="noopener noreferrer" target="_blank" onClick={closeAll}>
              {isHebrew ? "דברו איתנו בוואטסאפ" : localized?.cta || "WhatsApp"}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-sky-50 hover:text-sky-700" href={href} onClick={onClick} style={{ color: "var(--text)" }}>
      {label}
    </Link>
  );
}

function DropdownButton({ isOpen, label, onClick }: { isOpen: boolean; label: string; onClick: () => void }) {
  return (
    <button
      aria-expanded={isOpen}
      className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-sky-50 hover:text-sky-700"
      onClick={onClick}
      style={{ color: isOpen ? "var(--primary)" : "var(--text)", background: isOpen ? "var(--surface-soft)" : "transparent" }}
      type="button"
    >
      {label}
    </button>
  );
}

function ServicesDropdown({ onClick }: { onClick: () => void }) {
  return (
    <div className="grid gap-6 rounded-lg border p-5 lg:grid-cols-3" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      {serviceGroups.map((group) => (
        <div key={group.title}>
          <h2 className="mb-3 text-base font-semibold">{group.title}</h2>
          <div className="grid gap-2">
            {group.links.map(([label, href]) => (
              <Link className="rounded-md px-2 py-2 text-sm transition hover:bg-white hover:text-sky-700" href={href} key={href} onClick={onClick} style={{ color: "var(--text-muted)" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SolutionsDropdown({ onClick }: { onClick: () => void }) {
  return (
    <div className="grid gap-3 rounded-lg border p-5 md:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      <Link className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-white hover:text-sky-700" href="/solutions" onClick={onClick}>
        כל הפתרונות
      </Link>
      {solutionPages.map((solution) => (
        <Link className="rounded-md px-3 py-2 text-sm transition hover:bg-white hover:text-sky-700" href={`/solutions/${solution.slug}`} key={solution.slug} onClick={onClick} style={{ color: "var(--text-muted)" }}>
          {solution.navLabel}
        </Link>
      ))}
      {courseTracks.map((course) => (
        <Link className="rounded-md px-3 py-2 text-sm transition hover:bg-white hover:text-sky-700" href={`/courses/${course.slug}`} key={course.slug} onClick={onClick} style={{ color: "var(--text-muted)" }}>
          {course.navLabel}
        </Link>
      ))}
    </div>
  );
}

function LanguageDropdown({ onClick }: { onClick: () => void }) {
  return (
    <div className="grid gap-2 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      {languageLinks.map((locale) => {
        const isExternal = locale.href.startsWith("http");
        const className = "rounded-md px-3 py-2 text-sm font-medium transition hover:bg-white hover:text-sky-700";
        return isExternal ? (
          <a className={className} href={locale.href} key={locale.nativeName} rel="noopener noreferrer" target="_blank" onClick={onClick}>
            {locale.nativeName}
          </a>
        ) : (
          <Link className={className} href={locale.href} key={locale.nativeName} onClick={onClick}>
            {locale.nativeName}
          </Link>
        );
      })}
    </div>
  );
}

function MobileGroupButton({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button aria-expanded={open} className="mobile-menu-group-title justify-between px-4" onClick={onClick} type="button">
      <span>{label}</span>
      <span aria-hidden="true">{open ? "−" : "+"}</span>
    </button>
  );
}

function MobileLinks({ links, onClick }: { links: [string, string][]; onClick: () => void }) {
  return (
    <div className="grid gap-1.5">
      {links.map(([label, href]) => (
        <Link className="mobile-menu-sub-link" href={href} key={`${href}-${label}`} onClick={onClick}>
          {label}
        </Link>
      ))}
    </div>
  );
}

function MobileLanguageLinks({ onClick }: { onClick: () => void }) {
  return (
    <div className="grid gap-1.5">
      {languageLinks.map((locale) => {
        const isExternal = locale.href.startsWith("http");
        return isExternal ? (
          <a className="mobile-menu-sub-link" href={locale.href} key={locale.nativeName} rel="noopener noreferrer" target="_blank" onClick={onClick}>
            {locale.nativeName}
          </a>
        ) : (
          <Link className="mobile-menu-sub-link" href={locale.href} key={locale.nativeName} onClick={onClick}>
            {locale.nativeName}
          </Link>
        );
      })}
    </div>
  );
}
