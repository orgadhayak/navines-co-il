import Link from "next/link";
import { ServiceCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { OptimizationHubShowcase } from "@/components/OptimizationHubShowcase";
import { Section } from "@/components/Section";
import { serviceEcosystem, services, site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "שירותים",
  description: "שירותי נביא נס לעסקים: מרכז אופטימיזציה מלא, בינה מלאכותית, אוטומציה, אתרים, מערכות, איקומרס, שמאות, אבטחה, ביצועים, שיווק ותשתיות דיגיטליות.",
  path: "/services",
});

const groups: { title: string; description?: string; items: string[] }[] = [
  { title: "בינה מלאכותית ואוטומציה", items: ["חיבור Morning, Priority, ריווחית ומערכות נוספות ל־ChatGPT", "NAVINES IQ", "צ׳ט AI חכם לאתרים", "העוזר החכם של נביא נס", "לדבר עם הנתונים באמצעות ChatGPT", "חיבור נתונים עסקיים אל ChatGPT", "צ׳אטבוטים", "וואטסאפ עסקי", "אוטומציות טלגרם", "סוכני בינה מלאכותית", "מערכות עוזר וירטואלי"] },
  { title: "פיתוח, מותגים וטכנולוגיה", items: ["פיתוח אתרים", "פלטפורמת מותג גלובלית ו-B2B", "אתר תאגידי בינלאומי", "עמודי שווקים ושותפים", "פיתוח תוספים לדפדפנים", "Chrome, Edge, Brave ו Opera לפי התאמה", "וורדפרס", "מערכות מותאמות", "קוד נקי", "פיתוח צד שרת", "בדיקות איכות"] },
  { title: "איקומרס", items: ["שופיפיי", "ווקומרס", "אמזון", "איביי", "ניהול מלאי", "איקומרס לעסקים"] },
  { title: "תשתיות וחירום דיגיטלי", items: ["תמיכה טכנית, סייבר ורשתות", "סיוע במקרה פריצה לחשבון", "תמיכה מרחוק והגעה לפי צורך", "קלאודפלייר", "דומיינים", "תעודת אבטחה", "אחסון", "ניטור אתרים", "מדידה ונתונים"] },
  { title: "שמאות והערכת נזקים", description: "בדיקות מקצועיות וחוות דעת בתחומי הרכב, הרכוש והחקלאות, בשילוב תיעוד וכלים טכנולוגיים.", items: ["שמאות רכב", "שמאות רכוש", "שמאות חקלאות", "תיעוד נזק", "חוות דעת שמאית", "בקרת מסמכים", "מדידות ונספחים"] },
  { title: "שיווק, נתונים ובדיקות עסק", items: ["מערכת תוכנית שותפים לאתר קיים", "בדיקת חיובים, תשלומים והחזרים אפשריים", "פורטל ליוצרים ואנשי תוכן", "קידום אורגני", "פרסום ממומן", "שיווק במייל", "בדיקת עסק לפני רכישה", "יצירת פניות", "מוניטין", "ניתוח נתונים עסקיים"] },
  { title: "משפט וטכנולוגיה", description: "מידע והכוונה כללית לבחירת משרדי עורכי דין המשתמשים בכלים טכנולוגיים, לצד פתרונות תוכנה של נביא נס ישראל בע״מ לארגון מידע ותהליכים.", items: ["בחירת משרד עם יתרון טכנולוגי", "תעבורה וטכנולוגיה", "ארגון מסמכים", "ניהול מועדים", "הרשאות ובקרה", "הימנעות מהבטחות לתוצאה"] },
];

export default function ServicesPage() {
  const systemsIntegrationService = services.find((service) => service.slug === "business-systems-chatgpt-integration");
  const affiliateProgramService = services.find((service) => service.slug === "affiliate-program-platform");
  const financialReviewService = services.find((service) => service.slug === "payment-discrepancy-review");

  return (
    <>
      <Section eyebrow="שירותים" title="שירותים שמסדרים את העסק הדיגיטלי מקצה לקצה" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">אם האתר לא מביא פניות, החנות קשה לניהול, הצוות עובד ידנית או המערכות לא מדברות אחת עם השנייה, אנחנו עוזרים לעשות סדר. בונים את מה שצריך, מחברים את מה שקיים ומשפרים את מה שכבר עובד כדי שהעסק יהיה מהיר, ברור ומדיד יותר.</p>
        {systemsIntegrationService ? (
          <div className="mt-8 border-y py-8 lg:grid lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-10" style={{ borderColor: "var(--border)" }}>
            <div>
              <p className="text-sm font-semibold text-glowred">השירות הראשון שכדאי להכיר</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-5xl">{systemsIntegrationService.title}</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-300">{systemsIntegrationService.summary}</p>
            </div>
            <div className="mt-5 grid gap-3 lg:mt-0">
              <Link className="btn-primary" href="/services/business-systems-chatgpt-integration">
                לעמוד השירות
              </Link>
              <a className="btn-secondary" href="https://talktodata.navines.com" rel="noreferrer" target="_blank"> לצפייה ב TalkToData </a>
              <Link className="btn-secondary" href="/products/amazoniq">לצפייה בדוגמת AmazonIQ</Link>
              <a className="btn-secondary" href={site.whatsappHref}>
                שלחו לנו איזו מערכת יש לכם ונבדוק איך אפשר לחבר אותה
              </a>
            </div>
          </div>
        ) : null}
      {affiliateProgramService ? (
          <div className="mt-8 border-y py-7 lg:flex lg:items-center lg:justify-between lg:gap-10" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-glowred">צמיחה דרך שותפים ויוצרים</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-white">{affiliateProgramService.title}</h2>
              <p className="mt-3 text-lg leading-8 text-zinc-300">{affiliateProgramService.summary}</p>
            </div>
            <Link className="btn-secondary mt-5 shrink-0 lg:mt-0" href={`/services/${affiliateProgramService.slug}`}>לפרטי המערכת</Link>
          </div>
      ) : null}
      {financialReviewService ? (
        <div className="mt-8 border-y py-7 lg:flex lg:items-center lg:justify-between lg:gap-10" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-glowred">בדיקה מסודרת לפני פנייה לגוף הרלוונטי</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-white">{financialReviewService.title}</h2>
            <p className="mt-3 text-lg leading-8 text-zinc-300">{financialReviewService.summary}</p>
          </div>
          <Link className="btn-secondary mt-5 shrink-0 lg:mt-0" href={`/services/${financialReviewService.slug}`}>לפרטי הבדיקה</Link>
        </div>
      ) : null}
        <div className="service-directory-grid mt-10 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section eyebrow="מוצר למוכרי אמזון" title="AmazonIQ, שכבת מודיעין לקריאה בלבד" className="py-5 lg:py-8">
        <div className="grid gap-5 border-t pt-5 lg:grid-cols-[1fr_auto] lg:items-center" style={{ borderColor: "var(--border)" }}>
          <p className="max-w-4xl text-lg leading-8 text-zinc-300">
            לצד שירותי ניהול, תוכן ותפעול אנושיים, AmazonIQ מציג דשבורד ו GPT ייעודי לחקירת הזמנות, ליסטינגים, עמלות, מלאי FBA ודוחות זמינים על בסיס חיבור Seller Central מורשה לקריאה בלבד. המוצר אינו מבצע פעולות בחשבון.
          </p>
          <Link className="btn-secondary" href="/products/amazoniq">לפרטי AmazonIQ</Link>
        </div>
      </Section>
      <Section eyebrow="יכולות" title="תחומי מומחיות שמתחברים לצרכים אמיתיים בעסק">
        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map(({ title, description, items }) => (
            <article className="border-t py-6" key={title} style={{ borderColor: "var(--border)" }}>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              {description ? <p className="mt-3 text-base leading-7 text-zinc-300">{description}</p> : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="מרכז אופטימיזציה" title="כל שירותי האופטימיזציה מהאתר הרשמי, בעברית ובשפה עסקית" id="optimization-hub">
        <p className="mb-8 max-w-4xl text-lg leading-8 text-zinc-300">
          באתר הבינלאומי יש שכבה רחבה של שירותי אופטימיזציה. כאן הם מסודרים לעסק ישראלי בצורה פשוטה:
          מהירות, מובייל, קוד, וורדפרס, ווקומרס, שופיפיי, שרתים, אבטחה, ניטור, מיילים ומדיה. כל פריט מוביל לעמוד השירות הרלוונטי.
        </p>
        <OptimizationHubShowcase />
        <div className="mt-8">
          <a className="btn-primary" href={site.whatsappHref}>
            לא בטוחים מה תוקע את האתר? כתבו לנו בוואטסאפ
          </a>
        </div>
      </Section>
      <Section eyebrow="אקוסיסטם השירותים" title="כל היכולות הדיגיטליות שהעסק יכול לקבל מנביא נס" id="ecosystem">
        <p className="mb-8 max-w-4xl text-lg leading-8 text-zinc-300">
          לקחנו את רוח השירותים של המותג הבינלאומי ובנינו ממנה שכבה עברית ברורה לעסקים בישראל. במקום רשימת מושגים ריקים,
          כל תחום כאן מתורגם לצורך עסקי פשוט: יותר סדר, פחות עבודה ידנית, אתר מהיר יותר, חנות יציבה יותר, אבטחה טובה יותר
          ומערכות שמדברות אחת עם השנייה.
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          {serviceEcosystem.map(({ title, intro, items }) => (
            <article className="border-t py-6" key={title} style={{ borderColor: "var(--border)" }}>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-base leading-7 text-zinc-300">{intro}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CTA title="לא בטוחים איזה שירות מתאים לכם?" text="כתבו לנו בוואטסאפ מה אתם רוצים לשפר: אתר, חנות, מערכת, אוטומציה או בעיית ביצועים. נכוון אתכם לשלב הראשון הכי נכון." />
    </>
  );
}
