import { notFound } from "next/navigation";
import { BrandInline } from "@/components/BrandInline";
import { BlogCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, site } from "@/data/site";
import { formatBlogDate } from "@/lib/dates";
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
  const isTalkToDataPost = post.slug === "talk-to-business-data-chatgpt";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: site.hebrewLegalName },
    publisher: { "@type": "Organization", name: site.hebrewLegalName },
    datePublished: post.publishedAt,
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
        {post.englishTitle && post.englishExcerpt ? (
          <div className="mt-5 rounded-[1.4rem] border border-purple-300/16 bg-purple-500/[0.07] p-5">
            <p className="text-sm font-black text-glowred">תקציר באנגלית</p>
            <h2 className="mt-2 text-2xl font-black text-white">
              <BrandInline text={post.englishTitle} />
            </h2>
            <p className="mt-3 text-lg leading-8 text-zinc-300">
              <BrandInline text={post.englishExcerpt} />
            </p>
          </div>
        ) : null}
        <p className="mt-4 text-sm text-zinc-500">
          {formatBlogDate(post.publishedAt)} • מחבר:{" "}
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

        {isTalkToDataPost ? <TalkToDataArticleBody /> : <DefaultArticleBody post={post} />}
      </article>
      <CTA
        title={isTalkToDataPost ? "רוצים לדבר עם הנתונים של העסק שלכם דרך ChatGPT?" : "רוצים שנבדוק את האתר או התהליך העסקי שלכם?"}
        text={isTalkToDataPost ? "שלחו לנו בוואטסאפ איזו מערכת יש לכם: שופיפיי, ווקומרס, אמזון, איביי, CRM, ERP, גוגל אנליטיקס או מערכת פנימית. נבדוק איך אפשר לחבר אותה בצורה שימושית וברורה." : "כתבו לנו בוואטסאפ מה אתם רוצים לשפר. שיחת היכרות חינם וחברית, אנחנו מפתח תקווה, ונשמח להבין יחד מה הצעד הבא הכי נכון."}
      />
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

function DefaultArticleBody({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-black prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה זה חשוב לעסק?</h2>
      <p>
        <BrandInline text={post.excerpt} /> עסקים שמטפלים בנושא הזה בצורה מסודרת מקבלים יותר שליטה, פחות עבודה ידנית ויכולת למדוד מה באמת מתקדם.
      </p>
      <h2>איך זה נראה בפועל?</h2>
      <p>
        {post.serviceIntro ? (
          <BrandInline text={post.serviceIntro} />
        ) : (
          "העבודה מתחילה ממיפוי קצר של האתר, המערכות, הנתונים והתהליך העסקי. לאחר מכן בוחרים את הפעולות שייתנו ערך מהיר: שיפור מהירות, חיבור מערכת, אוטומציה, ניטור או תיקון נקודת אמון קריטית."
        )}
      </p>
      {post.englishServiceIntro ? (
        <>
          <h2>הסבר באנגלית</h2>
          <p>
            <BrandInline text={post.englishServiceIntro} />
          </p>
        </>
      ) : null}
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
      <p>אנחנו גאים במערכות, בכלים ובאתרים שבנינו כי הם נולדו מתוך בעיות אמיתיות של עסקים. אם אתם לא בטוחים מאיפה להתחיל, שלחו לנו הודעה בוואטסאפ. שיחת ההיכרות חינם וחברית, אנחנו מפתח תקווה, מחכים לשמוע מכם וגם אפשר להיפגש אם זה נכון לפרויקט.</p>
    </div>
  );
}

function TalkToDataArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-black prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>מה זה אומר לדבר עם הנתונים?</h2>
      <p>במקום לפתוח כמה מערכות, להוריד קבצים, לחפש בטבלאות ולנסות להבין מה קרה, אפשר לחבר את הנתונים העסקיים לשכבת שיחה. בעל העסק שואל שאלה רגילה, והמערכת מחזירה תשובה שמבוססת על הנתונים הקיימים.</p>
      <p>הרעיון פשוט: אתם לא צריכים ללמוד מערכת מורכבת. אתם צריכים לשאול את השאלה הנכונה ולקבל תשובה ברורה מספיק כדי לקבל החלטה.</p>
      <h2>למה זה חשוב לבעלי עסקים?</h2>
      <p>עסקים רבים כבר מחזיקים נתונים טובים, אבל הם מפוזרים בין שופיפיי, ווקומרס, אמזון, איביי, מערכת ניהול לקוחות, גוגל אנליטיקס, מערכות הזמנות, מלאי או קבצים פנימיים. כשהמידע מפוזר, קשה להבין מהר מה עובד ומה דורש טיפול.</p>
      <p>חיבור נתונים ל־ChatGPT יכול להפוך את המידע הזה לשיחה אחת: מה מכר, מה ירד, מי לא חזר, איזה מוצר תקוע ואילו הזמנות צריכות תשומת לב.</p>
      <h2>מה אפשר לשאול?</h2>
      <ul>
        <li>כמה מכרנו החודש?</li>
        <li>איזה מוצר הכי נמכר?</li>
        <li>איזה לקוחות לא חזרו הרבה זמן?</li>
        <li>איפה יש ירידה בביצועים?</li>
        <li>איזה הזמנות דורשות טיפול?</li>
        <li>אילו מוצרים נמכרים פחות למרות שיש להם תנועה?</li>
        <li>מה השתנה לעומת החודש הקודם?</li>
      </ul>
      <h2>איך TalkToData מדגים את הרעיון?</h2>
      <p>TalkToData הוא כלי שבנינו כדי להראות איך נתונים יכולים להפוך לשיחה פשוטה: Your data. Your ChatGPT. One conversation. במקום דוח כבד, העסק מקבל דרך לשאול, להבין ולהמשיך לשאלת המשך.</p>
      <p>זה מתאים במיוחד לעסקים שרוצים להבין מכירות, הזמנות, מלאי, לקוחות, מוצרים, ביצועים ודוחות בלי להסתבך עם לוחות בקרה גדולים.</p>
      <h2>איך מתחילים?</h2>
      <p>לא צריך להבין בטכנולוגיה. מספרים לנו באיזו מערכת אתם משתמשים: שופיפיי, ווקומרס, אמזון, איביי, מערכת ניהול לקוחות, ERP, גוגל אנליטיקס, מערכת מלאי, בסיס נתונים או כל API עסקי. אנחנו בודקים מה אפשר לחבר, מה כדאי לחבר קודם, ואיך לעשות את זה בצורה בטוחה ושימושית.</p>
      <h2>רשימת בדיקה קצרה</h2>
      <ul>
        <li>איזו מערכת מחזיקה את הנתונים החשובים ביותר?</li>
        <li>אילו שאלות חוזרות על עצמן בעסק בכל שבוע?</li>
        <li>מי צריך לקבל את התשובות: הנהלה, מכירות, שירות או תפעול?</li>
        <li>האם צריך תשובה יומית, שבועית או בזמן אמת?</li>
      </ul>
      <h2>סיכום</h2>
      <p>לדבר עם הנתונים באמצעות ChatGPT זו דרך להפוך מידע עסקי למשהו שאפשר להבין מהר. אם אתם רוצים לדעת מה אפשר לשאול את הנתונים שלכם, שלחו לנו הודעה קצרה בוואטסאפ ונכוון אתכם.</p>
    </div>
  );
}
