import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "אודות",
  description: "NAVINES ישראל היא חברת טכנולוגיה שמתמחה בפיתוח אתרים, מערכות, אוטומציות, כלי AI ותשתיות דיגיטליות לעסקים.",
  path: "/about",
});

const values = ["ביצוע לפני דיבורים", "פתרונות חכמים ולא מסובכים", "קוד ותשתית שאפשר להרחיב", "חשיבה עסקית", "שקיפות", "מהירות תגובה", "אחריות", "חדשנות מעשית"];

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="אודות" title="אנחנו בונים את התשתית הדיגיטלית שמאחורי עסקים חכמים" titleAs="h1">
        <div className="grid gap-6 text-lg leading-8 text-zinc-300 lg:grid-cols-3">
          <p>NAVINES ישראל היא חברת טכנולוגיה שמתמחה בפיתוח אתרים, מערכות, אוטומציות, כלי AI ותשתיות דיגיטליות לעסקים. אנחנו משלבים חשיבה עסקית עם יכולות פיתוח, איקומרס, אבטחה, ביצועים, SEO ואינטגרציות.</p>
          <p>הגישה שלנו פשוטה: לפני שבונים, מבינים. אנחנו בודקים מה העסק באמת צריך, איפה יש צווארי בקבוק, אילו תהליכים אפשר לשפר ומה ניתן לאוטומט.</p>
          <p>אתר טוב הוא לא רק עיצוב יפה. הוא צריך לטעון מהר, לעבוד במובייל, להביא לידים, לשדר אמון, להתחבר למערכות ולהישאר יציב לאורך זמן.</p>
        </div>
      </Section>
      <Section eyebrow="ערכים" title="איך אנחנו עובדים">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div className="rounded-premium border border-white/10 bg-white/[0.045] p-5 font-black text-silver" key={value}>
              {value}
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
