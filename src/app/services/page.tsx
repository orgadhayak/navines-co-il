import { ServiceCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "שירותים",
  description: "שירותי NAVINES ישראל: AI, אוטומציה, אתרים, מערכות, איקומרס, אבטחה, ביצועים, SEO, BI ואינטגרציות.",
  path: "/services",
});

const groups: { title: string; items: string[] }[] = [
  { title: "AI ואוטומציה", items: ["צ׳אטבוטים", "WhatsApp Business", "אוטומציות Telegram", "סוכני AI", "מערכות עוזר וירטואלי"] },
  { title: "פיתוח וטכנולוגיה", items: ["פיתוח אתרים", "WordPress", "React", "Python", "Laravel", "QA ובדיקות"] },
  { title: "איקומרס", items: ["Shopify", "WooCommerce", "Amazon", "eBay", "ניהול מלאי", "איקומרס B2B"] },
  { title: "תשתיות", items: ["Cloudflare", "DNS", "SSL", "אחסון", "ניטור אתרים", "Google Analytics"] },
  { title: "שיווק ונתונים", items: ["SEO", "PPC", "Email Marketing", "יצירת לידים", "מוניטין", "ניתוח נתונים עסקיים"] },
];

export default function ServicesPage() {
  return (
    <>
      <Section eyebrow="שירותים" title="שירותי NAVINES ישראל" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">אנחנו מספקים מעטפת טכנולוגית מלאה לעסקים: מהקמת אתרים וחנויות, דרך מערכות AI ואוטומציה, ועד אבטחה, ניטור, ביצועים, אינטגרציות ושיווק דיגיטלי.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard index={index} key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section eyebrow="יכולות" title="תחומי מומחיות מתוך עולם NAVINES">
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
