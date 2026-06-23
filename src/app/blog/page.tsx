import { BlogFilter } from "@/components/BlogFilter";
import { Section } from "@/components/Section";
import { blogCategories, blogPosts } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "בלוג",
  description: "מאמרים בעברית על בינה מלאכותית, אוטומציה, אתרים, איקומרס, קידום אורגני, אבטחה, ביצועים וכלים דיגיטליים לעסקים.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section eyebrow="בלוג" title="מאמרים, תובנות וכלים לעסקים דיגיטליים" titleAs="h1">
      <p className="mb-8 max-w-4xl text-lg leading-8 text-zinc-300">מדריכים, תובנות, ניתוחים ודוגמאות מעשיות על בינה מלאכותית, אוטומציה, אתרים, איקומרס, קידום אורגני, אבטחה, ביצועים, שיווק וכלים דיגיטליים לעסקים.</p>
      <div className="mb-8 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 shadow-premium sm:p-7">
        <p className="text-base font-black text-glowred">ידע מעשי לעסקים בישראל</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-black leading-tight text-white">פחות מאמרים כלליים, יותר החלטות טכנולוגיות שאפשר לבצע</h2>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-zinc-300">כל מאמר בבלוג נכתב כדי לעזור להבין בעיה אמיתית: מה לבדוק, מה לחבר, מה למדוד ואיפה בינה מלאכותית או אוטומציה באמת יכולים לחסוך זמן.</p>
      </div>
      <BlogFilter categories={blogCategories} posts={blogPosts} />
    </Section>
  );
}
