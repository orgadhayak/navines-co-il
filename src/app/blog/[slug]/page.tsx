import { notFound } from "next/navigation";
import { BlogCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "NAVINES" },
    publisher: { "@type": "Organization", name: site.hebrewLegalName },
    datePublished: post.date,
    image: `${site.url}/og.svg`,
    inLanguage: "he-IL",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "בלוג", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }])} />
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8 min-h-64 rounded-premium border border-white/10 bg-[linear-gradient(135deg,rgba(225,29,46,0.38),rgba(255,255,255,0.08)),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]" aria-label="תמונת מאמר טכנולוגית" role="img" />
        <p className="text-sm font-black text-glowred">{post.category}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-white md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-xl leading-9 text-zinc-300">{post.excerpt}</p>
        <p className="mt-4 text-sm text-zinc-500">{post.date} · מחבר: NAVINES · {post.readingTime}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-secondary" href={`https://www.linkedin.com/sharing/share-offsite/?url=${site.url}/blog/${post.slug}`}>
            שיתוף ב־LinkedIn
          </a>
          <a className="btn-secondary" href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${site.url}/blog/${post.slug}`)}`}>
            שיתוף בוואטסאפ
          </a>
          <a className="btn-secondary" href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${site.url}/blog/${post.slug}`}>
            שיתוף במייל
          </a>
        </div>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-black prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
          <h2>למה זה חשוב לעסק?</h2>
          <p>{post.excerpt} עסקים שמטפלים בנושא הזה בצורה מסודרת מקבלים יותר שליטה, פחות עבודה ידנית ויכולת למדוד מה באמת מתקדם.</p>
          <h2>איך זה נראה בפועל?</h2>
          <p>העבודה מתחילה ממיפוי קצר של האתר, המערכות, הנתונים והתהליך העסקי. לאחר מכן בוחרים את הפעולות שייתנו ערך מהר: שיפור מהירות, חיבור מערכת, אוטומציה, ניטור או תיקון נקודת אמון קריטית.</p>
          <h2>דוגמאות מעשיות</h2>
          <ul>
            <li>בדיקת אתר עם Lighthouse וזיהוי צווארי בקבוק במובייל.</li>
            <li>חיבור טופס ל־CRM והפיכת פנייה למשימה מסודרת.</li>
            <li>הוספת ניטור שמתריע על בעיות לפני שהלקוחות מרגישים אותן.</li>
          </ul>
          <h2>רשימת בדיקה</h2>
          <ul>
            <li>האם ברור מה הבעיה העסקית ולא רק מה הכלי?</li>
            <li>האם יש מדידה לפני ואחרי?</li>
            <li>האם התהליך מחובר לאנשים ולמערכות הקיימות?</li>
            <li>האם אפשר להרחיב את הפתרון בהמשך?</li>
          </ul>
          <h2>סיכום</h2>
          <p>AI טוב מתחיל מתהליך עסקי נכון. לפני שמפתחים — מבינים את העסק, ואז בונים תשתית שמחברת מהירות, אבטחה, אוטומציה וחוויית משתמש במקום אחד.</p>
        </div>
      </article>
      <CTA title="רוצים שנבדוק את האתר או התהליך העסקי שלכם?" text="דברו עם NAVINES ישראל." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black text-white">מאמרים קשורים</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.slug} post={item} />
          ))}
        </div>
      </section>
    </>
  );
}
