import { ServiceCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { optimizationHub, serviceEcosystem, services } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "שירותים",
  description: "שירותי נביא נס ישראל בע״מ לעסקים: מרכז אופטימיזציה מלא, בינה מלאכותית, אוטומציה, אתרים, מערכות, איקומרס, אבטחה, ביצועים, שיווק ותשתיות דיגיטליות.",
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
      <Section eyebrow="מרכז אופטימיזציה" title="כל שירותי האופטימיזציה מהאתר הרשמי, בעברית ובשפה עסקית" id="optimization-hub">
        <p className="mb-8 max-w-4xl text-lg leading-8 text-zinc-300">
          באתר הבינלאומי יש שכבה רחבה של שירותי אופטימיזציה. כאן הם מסודרים לעסק ישראלי בצורה פשוטה:
          מהירות, מובייל, קוד, וורדפרס, ווקומרס, שופיפיי, שרתים, אבטחה, ניטור, מיילים ומדיה. כל פריט מוביל לעמוד השירות הרלוונטי.
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          {optimizationHub.map((group) => (
            <article className="rounded-[1.6rem] border border-purple-300/15 bg-black/30 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24)]" key={group.title}>
              <h2 className="text-2xl font-black text-white">{group.title}</h2>
              <p className="mt-3 text-base leading-7 text-zinc-300">{group.intro}</p>
              <div className="mt-5 grid gap-2">
                {group.items.map((item) => (
                  <a className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-3 transition hover:border-purple-300/45 hover:bg-purple-500/10" href={item.href} key={item.title}>
                    <span className="block text-lg font-black text-white">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-zinc-400">{item.description}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="אקוסיסטם השירותים" title="כל היכולות הדיגיטליות שהעסק יכול לקבל מנביא נס ישראל בע״מ" id="ecosystem">
        <p className="mb-8 max-w-4xl text-lg leading-8 text-zinc-300">
          לקחנו את רוח השירותים של המותג הבינלאומי ובנינו ממנה שכבה עברית ברורה לעסקים בישראל. במקום רשימת מושגים ריקים,
          כל תחום כאן מתורגם לצורך עסקי פשוט: יותר סדר, פחות עבודה ידנית, אתר מהיר יותר, חנות יציבה יותר, אבטחה טובה יותר
          ומערכות שמדברות אחת עם השנייה.
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          {serviceEcosystem.map(({ title, intro, items }) => (
            <article className="rounded-[1.6rem] border border-purple-300/15 bg-black/28 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24)]" key={title}>
              <h2 className="text-2xl font-black text-white">{title}</h2>
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
