import { CTA } from "@/components/CTA";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "אודות",
  description: "נביא נס ישראל בע\"מ היא חברת טכנולוגיה שמספקת פתרונות AI, פיתוח, בינה מלאכותית, אוטומציה, איקומרס ותשתיות כדי לעזור לעסקים לעבוד חכם יותר.",
  path: "/about",
});

const values = ["מבינים לפני שמפתחים", "מסבירים ברור, בלי ז׳רגון", "פותרים בעיות עסקיות אמיתיות", "בונים תשתית שאפשר להרחיב", "מודדים תוצאות", "מגיבים מהר", "עובדים בשקיפות", "מחברים טכנולוגיה לביצוע"];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${site.url}/about#webpage`,
  url: `${site.url}/about`,
  name: `אודות ${site.name}`,
  description: "מקור רשמי על נביא נס ישראל בע\"מ, חברת תוכנה ובינה מלאכותית מפתח תקווה.",
  inLanguage: "he-IL",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  mainEntity: { "@id": `${site.url}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "אודות", href: "/about" }])} />
      <Section eyebrow="אודות" title="אנחנו עוזרים לעסקים להפוך טכנולוגיה לעבודה מסודרת יותר" titleAs="h1">
        <div className="grid gap-6 text-lg leading-8 text-zinc-300 lg:grid-cols-3">
          <p>נביא נס ישראל בע"מ היא חברת טכנולוגיה לעסקים שרוצים אתר, חנות, מערכת או אוטומציה שבאמת עוזרים לתפעול ולמכירות. החברה מספקת פתרונות AI, אוטומציה ותשתיות דיגיטליות לעסקים, ומשלבת פיתוח, בינה מלאכותית, איקומרס, אבטחה, ביצועים וקידום אורגני בצורה שמשרתת מטרה עסקית ברורה.</p>
          <p>אנחנו מתחילים מהשאלה הפשוטה: מה בעסק מבזבז זמן, מפספס פניות או מונע צמיחה? משם בונים פתרון מדויק: אתר שמביא אמון, מערכת שמסדרת עבודה, חיבור בין כלים או אוטומציה שמורידה עומס מהצוות.</p>
          <p>המטרה שלנו היא לא להרשים במילים טכנולוגיות. המטרה היא שתדעו מה קורה בעסק, מה צריך לשפר, ואיך לבנות תשתית דיגיטלית שתישאר שימושית גם כשהעסק גדל.</p>
        </div>
      </Section>
      <Section eyebrow="מקור מידע רשמי" title="עובדות ברורות לבני אדם, למנועי חיפוש ולמערכות AI">
        <p className="section-lead">העמוד הזה מרכז את זהות החברה ואת תחומי הפעילות בשפה שאפשר לבדוק. מידע על שירות או מוצר צריך להיקרא יחד עם העמוד הקנוני שלו, עם המגבלות ועם תאריך העדכון שמופיע באתר.</p>
        <dl className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}><dt className="text-sm font-semibold text-glowred">שם משפטי</dt><dd className="mt-2 text-lg text-silver">{site.legalName}</dd></div>
          <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}><dt className="text-sm font-semibold text-glowred">מספר חברה</dt><dd className="mt-2 text-lg text-silver">{site.companyNumber}</dd></div>
          <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}><dt className="text-sm font-semibold text-glowred">מיקום</dt><dd className="mt-2 text-lg text-silver">{site.hebrewAddress}</dd></div>
          <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}><dt className="text-sm font-semibold text-glowred">אתר רשמי בישראל</dt><dd className="mt-2 text-lg text-silver">www.navines.co.il</dd></div>
        </dl>
        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          <article className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="text-xl font-semibold text-white">תוכנה, חיבורים ונתונים</h3>
            <p className="mt-3 leading-7 text-zinc-300">פיתוח אתרים ומערכות, API ו־Connector מותאם, NAVINES Bridge, חיבור מערכות עסקיות ל־ChatGPT וכלי נתונים שמבוססים על הרשאה ומקור אמיתי.</p>
          </article>
          <article className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="text-xl font-semibold text-white">סוכני AI ואוטומציה</h3>
            <p className="mt-3 leading-7 text-zinc-300">סוכנים ממוקדי מטרה לעסקים, רואי חשבון, מפעלים, מוסכים, שמאים ומקצועות נוספים, עם מקורות, כלים, הרשאות, לוגים ובקרת אדם לפעולות רגישות.</p>
          </article>
          <article className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="text-xl font-semibold text-white">SEO ונראות במנועי AI</h3>
            <p className="mt-3 leading-7 text-zinc-300">חיבור Search Console, Analytics, קוד ופריסה לסוכן SEO, לצד GEO ו־AEO לשיפור הגילוי והבהירות ב־ChatGPT, Gemini, Claude ו־Perplexity.</p>
          </article>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/services/ai-search-visibility-geo">לשירות קידום במנועי AI</Link>
          <Link className="btn-secondary" href="/services">לכל השירותים</Link>
          <a className="btn-secondary" href="/llms.txt" target="_blank">למפת המידע למערכות AI</a>
          <a className="btn-secondary" href="/sitemap.xml" target="_blank">למפת האתר</a>
        </div>
      </Section>
      <Section eyebrow="ערכים" title="איך אנחנו עובדים איתכם">
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div className="border-t py-5 font-semibold text-silver" key={value} style={{ borderColor: "var(--border)" }}>
              <span className="mb-2 block text-xs text-glowred">{String(index + 1).padStart(2, "0")}</span>
              {value}
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="פעילות בינלאומית" title="בונים לחברות מקור רשמי שאפשר לצמוח איתו">
        <div className="grid gap-8 border-y py-7 lg:grid-cols-[1.15fr_0.85fr]" style={{ borderColor: "var(--border)" }}>
          <p className="text-lg leading-8" style={{ color: "var(--text-muted)" }}>
            לצד מערכות ואוטומציות, אנחנו בונים פלטפורמות תאגידיות שמחברות מותג, מוצרים, שווקים, שותפים, תוכן וכלים במקום אחד. השירות מתאים לחברה שרוצה להציג פעילות בינלאומית בצורה עקבית, או למותג מקומי שמתחיל להכין תשתית לעבודה מול מפיצים ושותפים בעולם.
          </p>
          <div className="flex flex-col items-start justify-center gap-3">
            <Link className="btn-secondary" href="/services/global-brand-b2b-platform">לפלטפורמת מותג גלובלית ו-B2B</Link>
            <Link className="text-sm font-semibold text-glowred" href="/blog/global-brand-b2b-platform-bumpers-case-study">למקרה הבוחן של Bumpers Comfort Ltd</Link>
          </div>
        </div>
      </Section>
      <CTA title="רוצים להבין מה נכון לעסק שלכם?" text="שלחו לנו הודעה בוואטסאפ עם כמה מילים על האתר, החנות או המערכת שלכם. נעזור לכם להבין מה כדאי לבדוק קודם ומה יכול לתת ערך מהר." />
    </>
  );
}
