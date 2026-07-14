import { GamesClient } from "@/components/GamesClient";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "משחקים חכמים בעברית",
  description: "משחקים קטנים, מהירים וחכמים בעברית מבית נביא נס ישראל בע״מ, חידונים, זיכרון, תגובה ורעיונות לעסקים.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <main>
      <Section eyebrow="משחקים" title="משחקים חכמים קטנים לעסקים ואנשים סקרנים" titleAs="h1" className="py-8 lg:py-12">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">
          משחק ארקייד מרכזי ועוד כמה משחקים קלים ומהירים בעברית שמתרגלים חשיבה עסקית, זיכרון נתונים, תגובה מהירה ורעיונות לכלים דיגיטליים. הכל עובד ישירות בדפדפן, בלי חיבור חיצוני ובלי שמירת מידע רגיש.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["מגן האתר", "חידון החלטות", "זיכרון נתונים", "מחולל רעיונות"].map((item) => (
            <span className="rounded-full border border-purple-200/18 bg-purple-500/12 px-4 py-2 text-sm font-semibold text-glowred" key={item}>
              {item}
            </span>
          ))}
        </div>
      </Section>
      <GamesClient />
    </main>
  );
}
