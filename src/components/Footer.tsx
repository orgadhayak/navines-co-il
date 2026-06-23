import Link from "next/link";
import { BrandInline } from "@/components/BrandInline";
import { site } from "@/data/site";

export function Footer() {
  const serviceLinks = [
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

  return (
    <footer className="border-t border-white/10 bg-[#050506]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-premium border border-white/10 bg-gradient-to-br from-navred/18 to-white/[0.03] p-8">
          <p className="mb-3 text-sm font-black text-glowred">תשתיות דיגיטליות</p>
          <h2 className="max-w-3xl text-4xl font-black text-white md:text-5xl">רוצים להבין מה כדאי לשפר קודם?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">שיחת היכרות חינם וחברית בוואטסאפ. אנחנו מפתח תקווה, גאים במערכות ובכלים שבנינו, ומחכים לשמוע מה תרצו לבנות או לשפר.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ בחינם
            </a>
            <a className="btn-secondary" href={site.whatsappHref}>
              שלחו הודעה זריזה
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <a className="inline-flex h-10 items-center rounded-premium bg-white px-3" href={site.internationalUrl} rel="noreferrer" target="_blank" aria-label="האתר הרשמי הבינלאומי">
                <img alt="NAVINES" className="h-6 w-auto" src="/brand/navines-wordmark.png" />
              </a>
              <strong className="text-lg text-white">נביא נס ישראל בע״מ</strong>
            </div>
            <p className="text-base leading-8 text-zinc-400">נביא נס ישראל בע״מ בונה אתרים, מערכות, אוטומציות, כלי בינה מלאכותית ותשתיות דיגיטליות לעסקים שרוצים לעבוד ברור, מהר ומסודר יותר.</p>
            <p className="mt-3 text-base font-black text-silver">{site.companyNumberLabel}</p>
          </div>

          <FooterColumn title="שירותים" items={serviceLinks} />
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
