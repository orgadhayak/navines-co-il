import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LanguageStrip } from "@/components/LanguageStrip";
import { Section } from "@/components/Section";
import { solutionPages } from "@/data/solutions";
import { blogPosts, products, site } from "@/data/site";
import { formatBlogDate } from "@/lib/dates";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "בית תוכנה, בינה מלאכותית ואוטומציה לעסקים בישראל",
  description: "נביא נס ישראל בע״מ מתכננת ומפתחת מערכות תוכנה, פתרונות AI, אוטומציות, אתרים, מסחר דיגיטלי ותשתיות לעסקים.",
});

const capabilityGroups = [
  {
    title: "תוכנה ומערכות עסקיות",
    text: "מערכות פנימיות, פורטלים, אתרים ואפליקציות שנבנים סביב תהליך עסקי מוגדר, לא סביב תבנית.",
    links: [["פיתוח אתרים ומערכות", "/services/web-development"], ["פיתוח אפליקציות", "/services/mobile-app-development"], ["פיתוח תוספים לדפדפנים", "/services/browser-extension-development"]],
  },
  {
    title: "AI, נתונים ואוטומציה",
    text: "חיבור מידע, מערכות ומשימות לכלים חכמים שמקצרים עבודה ידנית ועוזרים לקבל החלטות מהר יותר.",
    links: [["AI ואוטומציה", "/services/ai-automation"], ["חיבור מערכות ל־ChatGPT", "/services/business-systems-chatgpt-integration"], ["צ׳ט AI לאתרים", "/services/ai-chat-for-websites"]],
  },
  {
    title: "מסחר ותשתיות דיגיטליות",
    text: "חנויות, מרקטפלייסים, ביצועים, אבטחה ותמיכה טכנית שמחזיקים את הפעילות הדיגיטלית יציבה ומדידה.",
    links: [["איקומרס", "/services/ecommerce"], ["מרכז אופטימיזציה", "/optimization-hub"], ["תמיכה טכנית וסייבר", "/services/technical-support-cyber-networks"]],
  },
];

const process = [
  ["מבינים", "ממפים את הבעיה, התהליך והמערכות שכבר קיימות."],
  ["מתכננים", "מגדירים תוצאה, סדרי עדיפויות ופתרון שאפשר לתחזק."],
  ["בונים", "מפתחים, מחברים ובודקים מול שימוש אמיתי."],
  ["משפרים", "מודדים, מתקנים ומרחיבים לפי מה שהעסק צריך."],
];

const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: site.name, item: site.url }],
};

function trimText(text: string, length = 150) {
  return text.length > length ? `${text.slice(0, length).trim()}...` : text;
}

export default function HomePage() {
  const latestPosts = [...blogPosts].sort((first, second) => second.publishedAt.localeCompare(first.publishedAt)).slice(0, 3);
  const featuredProducts = products.filter((product) => ["talk-to-data", "amazoniq", "checklink"].includes(product.slug));
  const featuredSolutions = solutionPages.slice(0, 3);

  return (
    <>
      <JsonLd data={homeBreadcrumbSchema} />

      <section className="home-hero">
        <div className="home-hero-visual" aria-hidden="true">
          <Image alt="" className="home-hero-mark" fill priority sizes="(max-width: 768px) 80vw, 44vw" src="/brand/navines-symbol.jpg" />
        </div>
        <div className="home-hero-inner mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="home-hero-copy">
            <p className="home-hero-kicker">בית תוכנה ישראלי לעסקים וארגונים</p>
            <h1>נביא נס ישראל בע״מ</h1>
            <p className="home-hero-offer">תוכנה, בינה מלאכותית ותשתיות דיגיטליות שבנויות לעבודה אמיתית.</p>
            <p className="home-hero-summary">
              אנחנו מתכננים ומפתחים מערכות, אתרים, אוטומציות וכלי נתונים שמחברים בין צורך עסקי, חוויית משתמש וטכנולוגיה יציבה.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">ספרו לנו מה צריך לבנות</a>
              <Link className="btn-on-dark" href="/services">לכל השירותים</Link>
            </div>
          </div>
          <div className="home-hero-proof" aria-label="תחומי פעילות מרכזיים">
            <span>מערכות AI</span>
            <span>פיתוח תוכנה</span>
            <span>מסחר דיגיטלי</span>
            <span>אבטחה ותשתיות</span>
          </div>
        </div>
      </section>

      <LanguageStrip current="he" title="נביא נס ישראל בע״מ בעולם" />

      <Section eyebrow="היכולות שלנו" title="טכנולוגיה שמתחילה בצורך העסקי">
        <p className="section-lead">במקום למכור כלי אחד לכל בעיה, אנחנו בודקים מה צריך לעבוד טוב יותר ובונים את השילוב הנכון בין תוכנה, נתונים, אוטומציה ותשתית.</p>
        <div className="capability-columns mt-10">
          {capabilityGroups.map((group, index) => (
            <article className="capability-column" key={group.title}>
              <span className="editorial-index">0{index + 1}</span>
              <h2>{group.title}</h2>
              <p>{group.text}</p>
              <nav aria-label={group.title}>
                {group.links.map(([label, href]) => <Link href={href} key={href}>{label}<span aria-hidden="true">←</span></Link>)}
              </nav>
            </article>
          ))}
        </div>
      </Section>

      <section className="feature-band">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="section-eyebrow">שירות מוביל</p>
            <h2>המערכות שלכם, בשיחה אחת עם ChatGPT</h2>
            <p>מחברים חשבוניות, ERP, CRM, חנויות, דוחות ומאגרי מידע לממשק מאובטח שמאפשר לשאול שאלות רגילות ולקבל תמונה עסקית ברורה.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/services/business-systems-chatgpt-integration">איך החיבור עובד</Link>
              <a className="btn-secondary" href="https://talktodata.navines.com" rel="noopener noreferrer" target="_blank">לצפייה ב־TalkToData</a>
            </div>
          </div>
          <dl className="feature-specs">
            <div><dt>חיבור</dt><dd>למערכות הקיימות, בלי להחליף את כל סביבת העבודה.</dd></div>
            <div><dt>שימוש</dt><dd>שאלות בעברית על מכירות, תפעול, לקוחות, מלאי ודוחות.</dd></div>
            <div><dt>שליטה</dt><dd>תכנון הרשאות, גבולות מידע ותהליך מסודר לפני שעולים לאוויר.</dd></div>
          </dl>
        </div>
      </section>

      <Section eyebrow="מוצרים וכלים" title="מוצרים שבנינו כדי להפוך מידע לפעולה">
        <div className="product-editorial-list">
          {featuredProducts.map((product, index) => {
            const href = product.url || "/products";
            const content = <><span className="editorial-index">0{index + 1}</span><span className="product-editorial-copy"><small>{product.status}</small><strong>{product.hebrewName || product.name}</strong><span>{trimText(product.description, 180)}</span></span><span className="product-editorial-arrow" aria-hidden="true">←</span></>;
            return href.startsWith("http") ? <a href={href} key={product.slug} rel="noopener noreferrer" target="_blank">{content}</a> : <Link href={href} key={product.slug}>{content}</Link>;
          })}
        </div>
        <div className="mt-7 flex flex-wrap gap-3"><Link className="btn-secondary" href="/products">לכל המוצרים</Link><Link className="editorial-link inline-flex items-center gap-2" href="/blog/business-tools-built-by-navines-israel">הסיפור מאחורי הכלים <span aria-hidden="true">←</span></Link></div>
      </Section>

      <Section eyebrow="איך עובדים איתנו" title="תהליך שקוף מהרעיון ועד למערכת פעילה">
        <ol className="process-line">
          {process.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></li>)}
        </ol>
      </Section>

      <Section eyebrow="פתרונות לפי פעילות" title="מכירים את התהליך לפני שנוגעים בטכנולוגיה">
        <div className="solution-directory">
          {featuredSolutions.map((solution) => (
            <Link href={`/solutions/${solution.slug}`} key={solution.slug}>
              <span><small>{solution.eyebrow}</small><strong>{solution.navLabel}</strong></span>
              <p>{trimText(solution.seoDescription, 155)}</p>
              <span className="solution-directory-arrow" aria-hidden="true">←</span>
            </Link>
          ))}
        </div>
        <Link className="btn-secondary mt-7" href="/solutions">לכל הפתרונות</Link>
      </Section>

      <Section eyebrow="קורסי AI מעשיים" title="לומדים לבנות, לא רק להשתמש בכלים">
        <div className="course-preview">
          <Link href="/courses/ai-for-kids"><small>מסלול לילדים</small><h2>מרעיון למוצר אמיתי</h2><p>חשיבה יצירתית, בניית פרויקטים וליווי שמאפשר להתקדם בקצב הנכון.</p><span>לפרטי המסלול ←</span></Link>
          <Link href="/courses/ai-for-adults"><small>מסלול לבוגרים</small><h2>מוצרים, תהליכים וכלים חכמים</h2><p>מסלול מעשי לבעלי עסקים, מנהלים, פרילנסרים ויזמים שרוצים לעבוד נכון עם AI.</p><span>לפרטי המסלול ←</span></Link>
        </div>
      </Section>

      <Section eyebrow="תובנות" title="מידע מעשי לפני שמקבלים החלטה">
        <div className="insights-layout">
          {latestPosts.map((post, index) => (
            <Link className={index === 0 ? "insight-featured" : "insight-secondary"} href={`/blog/${post.slug}`} key={post.slug}>
              <div><span>{post.category}</span><span>{formatBlogDate(post.publishedAt)}</span></div>
              <h2>{post.title}</h2>
              <p>{trimText(post.excerpt, index === 0 ? 210 : 130)}</p>
              <strong>לקריאת המאמר ←</strong>
            </Link>
          ))}
        </div>
        <Link className="btn-secondary mt-7" href="/blog">לכל המאמרים</Link>
      </Section>

      <section className="home-final-cta">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-8 lg:py-20">
          <div><p>הצעד הבא</p><h2>יש לכם רעיון, מערכת או תהליך שצריך לעבוד טוב יותר?</h2><span>שלחו כמה מילים. נבין את הצורך ונציע נקודת התחלה מעשית.</span></div>
          <div className="mt-8 flex shrink-0 flex-wrap gap-3 lg:mt-0"><a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">דברו איתנו בוואטסאפ</a><Link className="btn-on-dark" href="/contact">אפשרויות יצירת קשר</Link></div>
        </div>
      </section>
    </>
  );
}
