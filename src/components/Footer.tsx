import Link from "next/link";
import { BrandInline } from "@/components/BrandInline";
import { courseTracks, site } from "@/data/site";

export function Footer() {
  const serviceLinks = [
    ["אתר תדמית ב־999 ₪", "/services/business-website-999"],
    ["נתונים ו־ChatGPT", "/services/chatgpt-business-data"],
    ["אתרים ומערכות", "/services/web-development"],
    ["בינה מלאכותית ואוטומציה", "/services/ai-automation"],
    ["איקומרס", "/services/ecommerce"],
    ["שיפור מהירות", "/services/website-speed-optimization"],
    ["אבטחה", "/services/security-recovery"],
    ["קידום אורגני", "/services/seo-digital-marketing"],
    ["ייעוץ טכנולוגי", "/services/consulting"],
  ];

  const toolLinks = [
    ["ביקון", "https://beacon.navines.com"],
    ["לדבר עם הנתונים", "https://talktodata.navines.com"],
    ["בודק אתרים", "https://analyze.navines.com"],
    ["בדיקת קישורים", "https://checklink.ai"],
    ["מודיעין נדל״ן", "/products"],
    ["מאור ישראל", "https://maorisrael.com"],
  ];

  const courseLinks = [
    ["כל קורסי ה־AI", "/courses"],
    ...courseTracks.map((course) => [course.navLabel, `/courses/${course.slug}`]),
  ];

  return (
    <footer className="border-t border-white/10 bg-[#050506]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="command-glass mb-10 rounded-[1.8rem] p-6 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-black text-glowred">תשתיות דיגיטליות</p>
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">רוצים להבין מה כדאי לשפר קודם?</h2>
            <p className="mt-3 text-lg leading-8 text-zinc-300">שיחת היכרות חינם וחברית בוואטסאפ. אנחנו מפתח תקווה, גאים במערכות ובכלים שבנינו, ומחכים לשמוע מה תרצו לבנות או לשפר.</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <a className="btn-primary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ בחינם
            </a>
            <a className="btn-secondary" href={site.whatsappHref}>
              שלחו הודעה זריזה
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.95fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <a className="inline-flex items-center transition hover:opacity-90" href={site.internationalUrl} rel="noreferrer" target="_blank" aria-label="האתר הרשמי הבינלאומי">
                <img alt="NAVINES" className="h-5 w-auto object-contain drop-shadow-[0_0_14px_rgba(216,180,254,0.34)]" src="/brand/navines-wordmark-slim.png" />
              </a>
            </div>
            <strong className="block text-xl font-black text-white">נביא נס ישראל בע״מ</strong>
            <p className="mt-3 text-base leading-8 text-zinc-400">בונים אתרים, מערכות, אוטומציות, כלי בינה מלאכותית ותשתיות דיגיטליות לעסקים שרוצים לעבוד ברור, מהר ומסודר יותר.</p>
            <p className="mt-3 text-base font-black text-silver">{site.companyNumberLabel}</p>
          </div>

          <FooterColumn title="שירותים" items={serviceLinks} />
          <FooterColumn title="קורסים" items={courseLinks} />
          <div>
            <h3 className="mb-4 font-black text-white">כלים</h3>
            <div className="grid gap-2">
              {toolLinks.map(([label, href]) => (
                href.startsWith("http") ? (
                  <a className="text-base text-zinc-400 hover:text-white" href={href} key={label} rel="noreferrer" target="_blank">
                    <BrandInline text={label} />
                  </a>
                ) : (
                  <Link className="text-base text-zinc-400 hover:text-white" href={href} key={label}>
                    <BrandInline text={label} />
                  </Link>
                )
              ))}
            </div>
          </div>
          <FooterColumn
            title="חברה"
            items={[
              ["אודות", "/about"],
              ["בלוג", "/blog"],
              ["יצירת קשר", "/contact"],
              ["הצהרת נגישות", "/accessibility"],
              ["מדיניות פרטיות", "/privacy"],
              ["תנאי שימוש", "/terms"],
            ]}
          />
          <div>
            <h3 className="mb-4 font-black text-white">יצירת קשר</h3>
            <div className="grid gap-2 text-base text-zinc-400">
              <span>{site.hebrewLegalName}</span>
              <span>{site.companyNumberLabel}</span>
              <span>{site.hebrewAddress}</span>
              <a href={site.phoneHref}>{site.phone}</a>
              <a className="english-tech" href={site.emailHref}>{site.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <span>© 2026 נביא נס ישראל בע״מ, ח.פ. {site.companyNumber}. כל הזכויות שמורות.</span>
          <a className="english-tech text-glowred hover:text-white" href={site.internationalUrl} rel="noreferrer" target="_blank">{site.internationalDisplay}</a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 font-black text-white">{title}</h3>
      <div className="grid gap-2">
        {items.map(([label, href]) => (
          <Link className="text-base text-zinc-400 hover:text-white" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
