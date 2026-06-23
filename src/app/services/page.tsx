import { ServiceCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "שירותים",
  description: "שירותי נביא נס ישראל: בינה מלאכותית, אוטומציה, אתרים, מערכות, איקומרס, אבטחה, ביצועים, קידום אורגני, ניתוח נתונים ואינטגרציות.",
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
      <Section eyebrow="שירותים" title="שירותי נביא נס ישראל" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">אנחנו מספקים מעטפת טכנולוגית מלאה לעסקים: מהקמת אתרים וחנויות, דרך מערכות בינה מלאכותית ואוטומציה, ועד אבטחה, ניטור, ביצועים, אינטגרציות ושיווק דיגיטלי.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section eyebrow="יכולות" title="תחומי מומחיות מתוך עולם נביא נס">
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
      <CTA />
    </>
  );
}
