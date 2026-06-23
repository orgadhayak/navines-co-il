import { notFound } from "next/navigation";
import { BrandInline } from "@/components/BrandInline";
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
    author: { "@type": "Organization", name: site.hebrewLegalName },
    publisher: { "@type": "Organization", name: site.hebrewLegalName },
    datePublished: post.date,
    inLanguage: "he-IL",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "בלוג", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }])} />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-sm font-black text-glowred">
          <BrandInline text={post.category} />
        </p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-white md:text-6xl">
          <BrandInline text={post.title} />
        </h1>
        <p className="mt-5 text-xl leading-9 text-zinc-300">
          <BrandInline text={post.excerpt} />
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          {post.date} • מחבר:{" "}
          {site.name}{" "}
          • {post.readingTime}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-secondary" href={`https://www.linkedin.com/sharing/share-offsite/?url=${site.url}/blog/${post.slug}`}>
            שיתוף בלינקדאין
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
          <p>
            <BrandInline text={post.excerpt} /> עסקים שמטפלים בנושא הזה בצורה מסודרת מקבלים יותר שליטה, פחות עבודה ידנית ויכולת למדוד מה באמת מתקדם.
          </p>
          <h2>איך זה נראה בפועל?</h2>
          <p>העבודה מתחילה ממיפוי קצר של האתר, המערכות, הנתונים והתהליך העסקי. לאחר מכן בוחרים את הפעולות שייתנו ערך מהיר: שיפור מהירות, חיבור מערכת, אוטומציה, ניטור או תיקון נקודת אמון קריטית.</p>
          <h2>דוגמאות מעשיות</h2>
          <ul>
            <li>בדיקת אתר עם כלי מדידה מקצועיים וזיהוי צווארי בקבוק במובייל.</li>
            <li>חיבור פניות מוואטסאפ, מייל או האתר למעקב מסודר כדי ששום דבר לא ילך לאיבוד.</li>
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
          <p>בינה מלאכותית טובה מתחילה מתהליך עסקי נכון. לפני שמפתחים, מבינים את העסק, ואז בונים תשתית שמחברת מהירות, אבטחה, אוטומציה וחוויית משתמש במקום אחד.</p>
        </div>
      </article>
      <CTA title="רוצים שנבדוק את האתר או התהליך העסקי שלכם?" text="כתבו לנו בוואטסאפ מה אתם רוצים לשפר. נענה בצורה פשוטה ונכוון אתכם לצעד הבא." />
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
