import { notFound } from "next/navigation";
import Link from "next/link";
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

const solutionArticleContent: Record<
  string,
  {
    solutionHref: string;
    solutionLabel: string;
    intro: string;
    why: string;
    examples: string[];
    checklist: string[];
    summary: string;
  }
> = {
  "accountants-ai-data-automation": {
    solutionHref: "/solutions/accountants",
    solutionLabel: "פתרונות AI ואוטומציה לרואי חשבון",
    intro:
      "במשרד רואי חשבון יש הרבה מידע חשוב: דוחות, מסמכים, שאלות לקוחות, טבלאות, תזכורות ומשימות. כשהמידע מפוזר, הצוות מבזבז זמן על חיפוש במקום על עבודה מקצועית. מערכת AI טובה לא מחליפה רואה חשבון, אלא עוזרת לסדר את המידע ולהחזיר תשובות ראשוניות וברורות.",
    why:
      "הערך העסקי פשוט: במקום לחפש ידנית בקבצים, דוחות וטבלאות, אפשר לשאול את המערכת שאלה בעברית ולקבל סיכום, כיוון לבדיקה או רשימת פעולות להמשך. הפתרון מבוסס על יכולות AI מתקדמות וטכנולוגיות OpenAI, אבל נבנה סביב תהליך העבודה של המשרד ולא סביב מילים טכנולוגיות מסובכות.",
    examples: [
      "אילו לקוחות חסרים מסמכים החודש?",
      "סכם לי את הנקודות החשובות בדוח לפני שיחה עם לקוח",
      "אילו משימות פתוחות דורשות טיפול השבוע?",
      "האם יש חריגה שצריך לבדוק לפני שליחת הדוח?",
    ],
    checklist: [
      "איפה נשמרים הדוחות והמסמכים היום?",
      "אילו שאלות חוזרות מגיעות מלקוחות?",
      "איזה מידע הצוות מחפש שוב ושוב?",
      "אילו פעולות אפשר להפוך לתזכורת או משימה אוטומטית?",
    ],
    summary:
      "AI לרואי חשבון עובד טוב כשהוא בנוי בזהירות, עם הבנה מקצועית ועם גבולות ברורים. המטרה היא לחסוך זמן, לארגן מידע ולהציף נקודות חשובות, בזמן ששיקול הדעת המקצועי נשאר אצל רואה החשבון.",
  },
  "amazon-sellers-ai-data-monitoring": {
    solutionHref: "/solutions/amazon-sellers",
    solutionLabel: "פתרונות למוכרי Amazon",
    intro:
      "מוכר Amazon צריך לעקוב אחרי הרבה דברים במקביל: Account Health, השעיות, Listings, מלאי, מחירים, ביקורות, הודעות, דוחות ופרסום. כשהכל מפוזר, קל לפספס סימן חשוב או להגיב מאוחר מדי.",
    why:
      "שילוב של AI, דאטה וניטור עוזר להפוך את הפעילות מתגובה ללחץ לניהול מסודר. במקום לפתוח הרבה דוחות ולנסות להבין מה דחוף, אפשר לבנות דשבורד, התראות ושכבת שאלות שמראה מה ירד, מה דורש טיפול ומה מסוכן. אין כאן הבטחה לתוצאה או להחזרת חשבון, אלא דרך מסודרת לנתח מצב ולפעול נכון יותר.",
    examples: [
      "איזה מוצר ירד בביצועים השבוע?",
      "איזה Listing דורש שיפור תוכן או מחיר?",
      "מה ההתראה הכי דחופה ב־Account Health?",
      "איפה יש סיכון במלאי, ביקורות או הודעות לקוחות?",
    ],
    checklist: [
      "האם יש מעקב קבוע אחרי Account Health?",
      "האם יש דוח ברור למלאי, מחירים ומוצרים חלשים?",
      "האם אתם יודעים לזהות התראות לפני שהן הופכות לחירום?",
      "האם יש לכם דרך לשאול את הדאטה שאלות רגילות ולקבל כיוון?",
    ],
    summary:
      "מוכרי Amazon צריכים גם תפעול וגם מודיעין עסקי. NAVINES Beacon, TalkToData ואוטומציות מותאמות יכולים לעזור לראות בעיות מוקדם יותר, להבין דוחות מהר יותר ולנהל חשבון בצורה רגועה וחכמה יותר.",
  },
  "freelancers-ai-automation-systems": {
    solutionHref: "/solutions/freelancers",
    solutionLabel: "פתרונות AI ואוטומציה לפרילנסרים",
    intro:
      "פרילנסר מנהל עסק שלם לבד או עם צוות קטן: לידים, לקוחות, הצעות מחיר, משימות, תשלומים, דוחות ותזכורות. כשכל דבר נמצא במקום אחר, הרבה אנרגיה הולכת על מעקב במקום על עבודה מקצועית.",
    why:
      "אוטומציה טובה לפרילנסרים לא חייבת להיות גדולה או יקרה. לפעמים מערכת קטנה שמרכזת פניות, משימות ותשלומים משנה את כל היום. אפשר גם לחבר שכבת AI שמאפשרת לשאול מה פתוח, מי מחכה לתשובה, איזה פרויקט תקוע ומה צריך לעשות השבוע.",
    examples: [
      "איזה לקוחות מחכים להצעת מחיר?",
      "מי לא שילם עדיין?",
      "איזה פרויקט תקוע יותר מדי זמן?",
      "איזה אתר לקוח האט או מציג תקלה?",
    ],
    checklist: [
      "מאיפה מגיעות הפניות היום?",
      "איפה נשמרות הצעות מחיר ומשימות?",
      "מה חוזר על עצמו בכל שבוע ואפשר לאוטומט?",
      "האם אתם מנהלים אתרי לקוחות שצריכים ניטור?",
    ],
    summary:
      "פרילנסרים לא צריכים לעבוד ידנית על כל דבר. מערכת קטנה, ברורה וחכמה יכולה לתת סדר, לחסוך זמן ולעזור לתת שירות טוב יותר בלי להרגיש שהעסק בורח מהידיים.",
  },
};

const courseArticleContent: Record<
  string,
  {
    courseHref: string;
    courseLabel: string;
    intro: string;
    why: string;
    practical: string;
    yearSupport: string;
    examples: string[];
    checklist: string[];
    summary: string;
  }
> = {
  "ai-course-for-kids-from-idea-to-product": {
    courseHref: "/courses/ai-for-kids",
    courseLabel: "קורס AI לילדים",
    intro:
      "ילדים גדלים לתוך עולם שבו AI נמצא כמעט בכל מקום, אבל הדרך הנכונה ללמוד אותו היא לא רק לשאול צ׳אטבוט שאלות. הדרך הנכונה היא להבין איך רעיון הופך למשהו שאפשר לבנות, לבדוק, לשפר ולהציג.",
    why:
      "ילד שלומד AI בצורה מעשית לומד לחשוב אחרת: לשאול שאלות טובות, לפרק בעיה לחלקים קטנים, לבחור כיוון, לעבוד עם זמן ולהמשיך גם כשהדבר הראשון שבנה עדיין לא מושלם.",
    practical:
      "במקום רק לצפות בשיעורים, החניכים עובדים על פרויקטים. הם לומדים לבנות אתרים קטנים, כלים חכמים, עוזרים דיגיטליים ופרויקטים יצירתיים שמתאימים לרמה שלהם. המטרה היא לא להפוך כל רעיון לעסק, אלא לתת ביטחון וכלים ליצור.",
    yearSupport:
      "הליווי לאורך שנה חשוב כי רעיונות טובים לא נגמרים אחרי 10 מפגשים. במהלך השנה אפשר להמשיך לשפר, לשאול, לקבל כיוון ולהפוך תוצר ראשוני למשהו הרבה יותר ברור ואיכותי.",
    examples: [
      "ילד שמגיע עם רעיון למשחק, אתר או עוזר דיגיטלי ולומד להפוך אותו לתוצר שאפשר להציג",
      "ילדה שרוצה לבנות כלי שעוזר לה ללמוד, לארגן מידע או להציג תחום שמעניין אותה",
      "חניך שלומד לא להיתקע בגלל חוסר זמן, אלא לפרק את הפרויקט לצעדים קטנים",
      "פרויקט שמתחיל פשוט ומשתפר מפגישה לפגישה"
    ],
    checklist: [
      "האם הילד סקרן ורוצה ליצור?",
      "האם הוא מוכן לעבוד גם בין המפגשים?",
      "האם יש רעיון שמסקרן אותו, גם אם הוא עדיין לא מסודר?",
      "האם המשפחה מבינה שהתהליך דורש התמדה ולא רק השתתפות בשיעור?"
    ],
    summary:
      "קורס AI לילדים צריך לתת הרבה יותר מידע. הוא צריך לתת צורת חשיבה, ביטחון ליצור ויכולת להתחיל לבנות דברים אמיתיים בעולם החדש. לכן המסלול של נביא נס ישראל בע״מ משלב מפגשים פרונטליים, פרויקטים וליווי לאורך שנה.",
  },
  "ai-course-for-adults-build-products-with-ai": {
    courseHref: "/courses/ai-for-adults",
    courseLabel: "קורס AI לבוגרים",
    intro:
      "AI הפך לכלי עבודה אמיתי, אבל הרבה אנשים עדיין משתמשים בו בצורה שטחית: כותבים שאלה, מקבלים תשובה, וממשיכים הלאה. בקורס מעשי לומדים איך להפוך AI לשיטת עבודה שמייצרת תוצרים.",
    why:
      "בוגרים, בעלי עסקים, פרילנסרים ומנהלים צריכים לדעת לא רק איזה כלי לפתוח, אלא איך לחשוב מוצרית: מה הבעיה, למי זה מיועד, איזה תוצר צריך לבנות ואיך מתקדמים גם בלי רקע טכנולוגי.",
    practical:
      "במהלך המסלול עובדים על רעיונות אמיתיים: כלי קטן שחוסך זמן, אתר שמציג שירות, תהליך עבודה שמסדר משימות או מוצר דיגיטלי שאפשר להציג. לא חושפים שיטות פנימיות פרטיות, אלא מלמדים עקרונות עבודה, סדר, תכנון ובנייה.",
    yearSupport:
      "ליווי לאורך שנה משנה את הקורס מתוכן שנגמר למסגרת שממשיכה לדחוף קדימה. המשתתפים יכולים לחזור לפרויקטים, לשפר אותם, לקבל כיוון ולהבין מה הצעד הבא במקום להיתקע לבד אחרי המפגשים.",
    examples: [
      "בעל עסק שמבין איך להפוך תהליך ידני לכלי עבודה פשוט",
      "פרילנסר שבונה עמוד או מוצר שמציג את השירות שלו טוב יותר",
      "מנהל שרוצה לסדר משימות, תוכן ונתונים בעזרת AI",
      "יזם שמתחיל מרעיון ומתקדם לתוצר שאפשר להראות למשקיעים, לקוחות או שותפים"
    ],
    checklist: [
      "איזה רעיון או תהליך הייתם רוצים לשפר?",
      "איפה אתם מבזבזים זמן ידני היום?",
      "איזה תוצר הייתם רוצים להציג בסוף התהליך?",
      "האם אתם מוכנים לעבוד בין המפגשים ולהמשיך לשפר לאורך השנה?"
    ],
    summary:
      "קורס AI לבוגרים צריך ללמד שיטת עבודה ולא רק כלי אחד. המטרה היא לעזור למשתתפים לבנות כמה פרויקטים אמיתיים בהתאם למחויבות ולהתקדמות שלהם, בלי הבטחות שווא ובלי צורך ברקע טכנולוגי קודם.",
  },
};

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const isTalkToDataPost = post.slug === "talk-to-business-data-chatgpt";
  const isEmailDataPost = post.slug === "email-to-chatgpt-talktodata";
  const solutionArticle = solutionArticleContent[post.slug];
  const courseArticle = courseArticleContent[post.slug];

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

        {isEmailDataPost ? <EmailToChatGptArticleBody /> : isTalkToDataPost ? <TalkToDataArticleBody /> : solutionArticle ? <SolutionArticleBody content={solutionArticle} /> : courseArticle ? <CourseArticleBody content={courseArticle} /> : <DefaultArticleBody post={post} />}
      </article>
      <CTA
        title={courseArticle ? "רוצים לבדוק התאמה לקורס AI מעשי?" : isEmailDataPost ? "רוצים לחבר אימיילים ונתונים ל־ChatGPT בצורה מאובטחת?" : isTalkToDataPost || solutionArticle ? "רוצים לדבר עם הנתונים של העסק שלכם דרך ChatGPT?" : "רוצים שנבדוק את האתר או התהליך העסקי שלכם?"}
        text={courseArticle ? "שלחו לנו בוואטסאפ מי מתעניין במסלול, ילד או בוגר, ומה הייתם רוצים לבנות או ללמוד. נבדוק התאמה ונכוון אתכם בצורה פשוטה." : isEmailDataPost ? "שלחו לנו בוואטסאפ איזה מייל יש לכם, איזה מידע חשוב לכם להבין ומה הייתם רוצים לשאול. נבדוק אם יש דרך גישה מסודרת ובטוחה ונכוון אתכם לפתרון נכון." : isTalkToDataPost || solutionArticle ? "שלחו לנו בוואטסאפ איזו מערכת יש לכם, מה אתם רוצים להבין מהר יותר ואיפה יש עבודה ידנית שחוזרת על עצמה. נבדוק איך אפשר לחבר את זה בצורה שימושית, ברורה וזהירה." : "כתבו לנו בוואטסאפ מה אתם רוצים לשפר. שיחת היכרות חינם וחברית, אנחנו מפתח תקווה, ונשמח להבין יחד מה הצעד הבא הכי נכון."}
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

function CourseArticleBody({ content }: { content: (typeof courseArticleContent)[string] }) {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-black prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה ללמוד AI בצורה מעשית?</h2>
      <p>
        <BrandInline text={content.intro} />
      </p>
      <h2>למה זה חשוב דווקא עכשיו?</h2>
      <p>
        <BrandInline text={content.why} />
      </p>
      <h2>למה פרויקטים חשובים יותר מצפייה בשיעורים?</h2>
      <p>
        <BrandInline text={content.practical} />
      </p>
      <h2>למה ליווי לאורך שנה משנה את התהליך?</h2>
      <p>
        <BrandInline text={content.yearSupport} />
      </p>
      <h2>דוגמאות מעשיות</h2>
      <ul>
        {content.examples.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>רשימת בדיקה לפני שנרשמים</h2>
      <ul>
        {content.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>המסלול המתאים</h2>
      <p>
        <Link className="font-black text-glowred hover:text-white" href={content.courseHref}>
          {content.courseLabel}
        </Link>
      </p>
      <h2>סיכום</h2>
      <p>
        <BrandInline text={content.summary} />
      </p>
      <p>
        רוצים לבדוק אם זה מתאים? שלחו הודעה קצרה בוואטסאפ. לא צריך לבוא עם תוכנית מושלמת, רק עם רצון ללמוד, לבנות ולהתקדם.
      </p>
    </div>
  );
}

function SolutionArticleBody({ content }: { content: (typeof solutionArticleContent)[string] }) {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-black prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>מה זה אומר בפועל?</h2>
      <p>
        <BrandInline text={content.intro} />
      </p>
      <h2>למה זה חשוב לעסק?</h2>
      <p>
        <BrandInline text={content.why} />
      </p>
      <h2>דוגמאות לשאלות שאפשר לשאול</h2>
      <ul>
        {content.examples.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>רשימת בדיקה קצרה לפני שמתחילים</h2>
      <ul>
        {content.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>הפתרון המתאים</h2>
      <p>
        נביא נס ישראל בע״מ בונה פתרונות כאלה לפי סוג העסק, בלי להעמיס מערכת מיותרת ובלי להבטיח קסמים. מתחילים
        משיחה פשוטה, מבינים איפה המידע נמצא ומה באמת כואב, ואז בודקים מה אפשר לחבר, לאוטומט ולמדוד.
      </p>
      <p>
        <Link className="font-black text-glowred hover:text-white" href={content.solutionHref}>
          {content.solutionLabel}
        </Link>
      </p>
      <h2>סיכום</h2>
      <p>
        <BrandInline text={content.summary} />
      </p>
      <p>
        רוצים לבדוק מה אפשר לבנות אצלכם? שלחו הודעה קצרה בוואטסאפ, ספרו לנו איזה עסק יש לכם ואיפה אתם מרגישים
        שהמידע או העבודה הידנית מעכבים אתכם. נכוון אתכם בצורה פשוטה וחברית.
      </p>
    </div>
  );
}

function EmailToChatGptArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-black prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה אימייל הוא מקור נתונים חשוב כל כך?</h2>
      <p>
        תיבת המייל של העסק מחזיקה הרבה יותר מהודעות. יש בה פניות חדשות, שאלות לקוחות, הצעות מחיר, בקשות שירות,
        חשבוניות, הודעות מספקים, שרשורי טיפול ומשימות שמחכות למענה. בפועל, הרבה עסקים מנהלים חלק גדול מהתפעול
        מתוך המייל, אבל עדיין מחפשים ידנית ומפספסים דברים.
      </p>
      <h2>מה TalkToData יכול לעשות עם אימיילים?</h2>
      <p>
        באמצעות TalkToData אפשר לבדוק חיבור מאובטח לתיבת מייל ולהפוך אותה למקור מידע שאפשר לשאול עליו שאלות
        רגילות. זה לא חייב להיות רק Gmail או Outlook/Hotmail. במקרים רבים אפשר לבדוק גם תיבות מייל אחרות, כל עוד
        יש דרך גישה מסודרת כמו IMAP, API, ייצוא נתונים או חיבור דרך ספק המייל.
      </p>
      <p>
        הפתרון מבוסס על יכולות AI מתקדמות וטכנולוגיות OpenAI, אבל העבודה האמיתית היא תכנון נכון: מה מחברים, מה
        לא מחברים, אילו הרשאות נותנים, איזה מידע צריך לסכם ואיזה מידע צריך להישאר מחוץ למערכת.
      </p>
      <h2>דוגמאות לשאלות שאפשר לשאול</h2>
      <ul>
        <li>אילו לקוחות מחכים לתשובה?</li>
        <li>אילו מיילים דחופים הגיעו השבוע?</li>
        <li>איזה פניות חוזרות על עצמן הרבה?</li>
        <li>מי ביקש הצעת מחיר ועדיין לא קיבל מענה?</li>
        <li>אילו שרשורים קשורים להזמנה, חשבונית או תקלה פתוחה?</li>
        <li>מה הנושאים הכי נפוצים בשירות לקוחות החודש?</li>
      </ul>
      <h2>למה זה יכול להיות שינוי גדול לעסק?</h2>
      <p>
        במקום לפתוח עשרות הודעות ולנסות לזכור מה חשוב, העסק מקבל דרך לשאול ולקבל סיכום ברור. זה יכול לחסוך זמן
        לצוות שירות, מכירות, הנהלה ותפעול. זה גם עוזר לזהות פניות שלא טופלו, לקוחות שמחכים יותר מדי זמן ונושאים
        שחוזרים שוב ושוב.
      </p>
      <h2>אבטחה והרשאות</h2>
      <p>
        חיבור מיילים חייב להיות זהיר. לא מחברים הכל בלי לחשוב. מתחילים ממיפוי: איזה מידע צריך, מי רשאי לראות אותו,
        מה רגיש, מה לא צריך להיכנס ומה מטרת השימוש. נביא נס ישראל בע״מ בודקת את דרך החיבור האפשרית ומתכננת שכבת
        עבודה שמעדיפה מינימום גישה, שימוש ברור ותוצאה מעשית.
      </p>
      <h2>רשימת בדיקה לפני שמתחילים</h2>
      <ul>
        <li>באיזה ספק מייל העסק משתמש?</li>
        <li>האם קיימת גישה מסודרת דרך IMAP, API או ייצוא נתונים?</li>
        <li>אילו סוגי הודעות חשוב לנתח?</li>
        <li>מי בצוות צריך לקבל תשובות מהמערכת?</li>
        <li>אילו תהליכים ידניים אפשר להפוך לסיכום, תזכורת או משימה?</li>
      </ul>
      <h2>איך מתחילים?</h2>
      <p>
        לא צריך להחליף את המייל ולא צריך להבין בטכנולוגיה. שולחים לנו איזה ספק מייל יש לכם, מה אתם רוצים לשאול ומה
        כואב בתהליך היום. אנחנו בודקים אם יש דרך חיבור מאובטחת ומסודרת, ומציעים כיוון מעשי.
      </p>
      <p>
        <Link className="font-black text-glowred hover:text-white" href="/services/chatgpt-business-data">
          לעמוד השירות: חיבור נתונים עסקיים ל־ChatGPT בהתאמה אישית
        </Link>
      </p>
    </div>
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
