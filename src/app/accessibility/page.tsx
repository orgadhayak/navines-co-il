import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "הצהרת נגישות",
  description: "הצהרת נגישות בעברית עבור אתר נביא נס ישראל בע\"מ.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <Section eyebrow="נגישות" title="הצהרת נגישות" titleAs="h1">
      <div className="grid gap-6 text-lg leading-8 text-zinc-300">
        <p>נביא נס ישראל בע"מ מחויבת להנגשת האתר ככל הניתן ולשימוש נוח וברור עבור כלל המשתמשים.</p>
        <p>
          באתר בוצעו התאמות בסיסיות כגון RTL תקין, היררכיית כותרות, ניגודיות טובה, ניווט מקלדת, טקסטים קריאים, כפתורי יצירת קשר ברורים וטקסט חלופי לאלמנטים ויזואליים משמעותיים.
        </p>
        <p>
          אם נתקלתם בקושי נגישות, ניתן לפנות אלינו במייל <span className="english-tech">{site.email}</span>, בטלפון {site.phone}, או בכתובת {site.hebrewAddress}.
        </p>
        <p>יש לעדכן הצהרה זו לאחר בדיקת נגישות בפועל ולפי ממצאי הבדיקה.</p>
      </div>
    </Section>
  );
}
