import { BlogFilter } from "@/components/BlogFilter";
import { Section } from "@/components/Section";
import { blogCategories, blogPosts } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "בלוג",
  description: "מאמרים קצרים וברורים לבעלי עסקים על בינה מלאכותית, אוטומציה, אתרים, איקומרס, קידום אורגני, אבטחה וביצועים.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section eyebrow="בלוג" title="מאמרים, תובנות וכלים לעסקים דיגיטליים" titleAs="h1">
      <p className="mb-8 max-w-4xl text-lg leading-8 text-zinc-300">מדריכים קצרים לבעלי עסקים שרוצים להבין מה באמת חשוב באתר, בחנות, באוטומציה או במערכת שלהם. הוספנו גם סקירות שירותים קצרות עם תקציר באנגלית מתחת לעברית, כדי שיהיה קל לשתף עם שותפים, צוותים או לקוחות.</p>
      <div className="mb-8 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 shadow-premium sm:p-7">
        <p className="text-base font-black text-glowred">ידע מעשי לעסקים בישראל</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-black leading-tight text-white">תוכן שעוזר להבין מה כדאי לעשות עכשיו</h2>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-zinc-300">כל מאמר נכתב מנקודת מבט פרקטית: איך לזהות בעיה, איך למדוד אותה, מה אפשר לשפר לבד ומתי כדאי לשלוח לנו הודעה בוואטסאפ. השיחה הראשונית חינם וחברית, ואנחנו באמת שמחים לשמוע על רעיונות, תקלות ודברים שצריך לבנות.</p>
      </div>
      <BlogFilter categories={blogCategories} posts={blogPosts} />
    </Section>
  );
}
