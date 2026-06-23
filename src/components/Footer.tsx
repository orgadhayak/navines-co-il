import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const serviceLinks = [
    ["אתרים ומערכות", "/services/web-development"],
    ["AI ואוטומציה", "/services/ai-automation"],
    ["איקומרס", "/services/ecommerce"],
    ["שיפור מהירות", "/services/website-speed-optimization"],
    ["אבטחה", "/services/security-recovery"],
    ["SEO", "/services/seo-digital-marketing"],
    ["ייעוץ טכנולוגי", "/services/consulting"],
  ];

  const toolLinks = ["NAVINES Beacon", "TalkToData", "Website Analyzer", "CheckLink.ai", "Real Estate Intelligence", "Maor Israel"];

  return (
    <footer className="border-t border-white/10 bg-[#050506]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-premium border border-white/10 bg-gradient-to-br from-navred/18 to-white/[0.03] p-8">
          <p className="mb-3 text-sm font-black text-glowred">תשתיות דיגיטליות</p>
          <h2 className="max-w-3xl text-4xl font-black text-white md:text-5xl">תשתית דיגיטלית חכמה לעסק שרוצה לגדול.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/contact">
              דברו איתנו
            </Link>
            <a className="btn-secondary" href={site.whatsappHref}>
              שלחו וואטסאפ
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 items-center rounded-premium bg-white px-3">
                <img alt="NAVINES" className="h-6 w-auto" src="/brand/navines-wordmark.png" />
              </span>
              <strong className="text-lg text-white">נביא נס ישראל</strong>
            </div>
            <p className="text-base leading-8 text-zinc-400">נביא נס ישראל בע"מ בונה אתרים, מערכות, אוטומציות, כלי AI ותשתיות דיגיטליות לעסקים. אנחנו בונים מערכות שעובדות, לא רק אתרים שנראים טוב.</p>
            <p className="mt-3 text-base font-black text-silver">{site.companyNumberLabel}</p>
          </div>

          <FooterColumn title="שירותים" items={serviceLinks} />
          <div>
            <h3 className="mb-4 font-black text-white">כלים</h3>
            <div className="grid gap-2">
              {toolLinks.map((tool) => (
                <Link className="text-base text-zinc-400 hover:text-white" href="/products" key={tool}>
                  {tool}
                </Link>
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
              <a href={site.emailHref}>{site.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <span>© 2026 נביא נס ישראל בע"מ, ח.פ. {site.companyNumber}. כל הזכויות שמורות.</span>
          <Link href={site.internationalUrl}>navines.com</Link>
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
