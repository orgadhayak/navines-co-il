import { ServiceCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "שירותים",
  description: "שירותי נביא נס ישראל בע״מ לעסקים: אתרים, מערכות, אוטומציה, בינה מלאכותית, חנויות, אבטחה, מהירות וחיבורי מערכות שמייצרים סדר ותוצאות.",
  path: "/services",
});

const groups: { title: string; items: string[] }[] = [
  { title: "בינה מלאכותית ואוטומציה", items: ["צ׳אטבוטים", "וואטסאפ עסקי", "אוטומציות טלגרם", "סוכני בינה מלאכותית", "מערכות עוזר וירטואלי"] },
  { title: "פיתוח וטכנולוגיה", items: ["פיתוח אתרים", "וורדפרס", "מערכות מותאמות", "קוד נקי", "פיתוח צד שרת", "בדיקות איכות"] },
  { title: "איקומרס", items: ["שופיפיי", "ווקומרס", "אמזון", "איביי", "ניהול מלאי", "איקומרס לעסקים"] },
  { title: "תשתיות", items: ["קלאודפלייר", "דומיינים", "תעודת אבטחה", "אחסון", "ניטור אתרים", "מדידה ונתונים"] },
  { title: "שיווק ונתונים", items: ["קידום אורגני", "פרסום ממומן", "שיווק במייל", "יצירת פניות", "מוניטין", "ניתוח נתונים עסקיים"] },
];

export default function ServicesPage() {
  return (
    <>
      <Section eyebrow="שירותים" title="שירותים שמסדרים את העסק הדיגיטלי מקצה לקצה" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">אם האתר לא מביא פניות, החנות קשה לניהול, הצוות עובד ידנית או המערכות לא מדברות אחת עם השנייה, אנחנו עוזרים לעשות סדר. בונים את מה שצריך, מחברים את מה שקיים ומשפרים את מה שכבר עובד כדי שהעסק יהיה מהיר, ברור ומדיד יותר.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section eyebrow="יכולות" title="תחומי מומחיות שמתחברים לצרכים אמיתיים בעסק">
        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map(({ title, items }) => (
            <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5" key={title}>
              <h2 className="text-2xl font-black text-white">{title}</h2>
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
      <CTA title="לא בטוחים איזה שירות מתאים לכם?" text="כתבו לנו בוואטסאפ מה אתם רוצים לשפר: אתר, חנות, מערכת, אוטומציה או בעיית ביצועים. נכוון אתכם לשלב הראשון הכי נכון." />
    </>
  );
}
