import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LanguageStrip } from "@/components/LanguageStrip";
import { Section } from "@/components/Section";
import { solutionPages } from "@/data/solutions";
import { blogPosts, products, site } from "@/data/site";
import { formatBlogDate } from "@/lib/dates";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "פתרונות בינה מלאכותית, תוכנה ואוטומציה לעסקים בישראל",
  description: "נביא נס ישראל בע״מ בונה אתרים, מערכות, אוטומציות, כלי AI, TalkToData ותשתיות דיגיטליות לעסקים בישראל.",
});

const serviceGroups = [
  { title: "AI ואוטומציה", text: "תהליכים שחוסכים עבודה ידנית, מחברים פניות, נתונים ומשימות, ומחזירים לצוות זמן.", href: "/services/ai-automation" },
  { title: "אתרים ומערכות", text: "אתרים, פורטלים, דשבורדים ומערכות פנימיות שנבנים סביב צורך עסקי ברור.", href: "/services/web-development" },
  { title: "TalkToData", text: "חיבור נתונים, דוחות ואימיילים לשיחה פשוטה שמאפשרת להבין מה קורה בעסק.", href: "/services/chatgpt-business-data" },
  { title: "איקומרס ומרקטפלייסים", text: "Shopify, WooCommerce, Amazon ו-eBay עם תשתית מכירה, מדידה ותפעול מסודרת.", href: "/services/ecommerce" },
  { title: "תמיכה, סייבר ושחזור", text: "תקלות אתר, מיילים, DNS, פריצות לחשבונות ונכסים דיגיטליים שדורשים תגובה אחראית.", href: "/services/technical-support-cyber-networks" },
  { title: "טכנולוגיה למשפט וציות", text: "פתרונות לארגון מידע, מיפוי מערכות, ניטור מותגים וניהול תהליכים עבור משרדי עורכי דין, מחלקות משפטיות ועסקים.", href: "/services/legal-operations-technology" },
  { title: "בדיקות ואופטימיזציה", text: "מהירות, SEO, תשתית, אבטחה, נתונים וחוויית משתמש, כדי שהאתר יעבוד טוב יותר.", href: "/optimization-hub" },
];

const highlighted = [
  { title: "צ׳ט AI חכם לאתרים", href: "/services/ai-chat-for-websites" },
  { title: "פיתוח תוספים לדפדפן", href: "/services/browser-extension-development" },
  { title: "אתר SEO למוכרי Amazon", href: "/services/amazon-seller-seo-website" },
  { title: "תהליכים משפטיים וציות", href: "/services/legal-operations-technology" },
  { title: "טכנולוגיה לתיקי תעבורה", href: "/services/traffic-case-technology" },
  { title: "בדיקת עסק לפני רכישה", href: "/services/business-due-diligence-intelligence" },
];

const process = [
  ["אבחון", "מבינים את העסק, התהליך, האתר או המערכת הקיימת."],
  ["תכנון", "מגדירים פתרון קטן וברור שאפשר לבנות, למדוד ולשפר."],
  ["בנייה וחיבור", "מפתחים אתר, כלי, אוטומציה, מערכת או אינטגרציה."],
  ["שיפור ותמיכה", "בודקים ביצועים, מתקנים תקלות וממשיכים לפתח לפי צורך."],
];

const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "נביא נס ישראל בע״מ", item: site.url },
  ],
};

function trimText(text: string, length = 118) {
  return text.length > length ? `${text.slice(0, length).trim()}...` : text;
}

export default function HomePage() {
  const latestPosts = [...blogPosts].sort((first, second) => second.publishedAt.localeCompare(first.publishedAt)).slice(0, 3);
  const featuredProducts = products.filter((product) => ["talk-to-data", "navines-beacon", "navines-tools-hub-extension"].includes(product.slug));

  return (
    <>
      <JsonLd data={homeBreadcrumbSchema} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:py-16">
        <div>
          <p className="mb-4 text-sm font-semibold text-glowred">חברת תוכנה ו-AI ישראלית לעסקים שרוצים פתרון מעשי</p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            מערכות AI, אתרים, אוטומציה ותשתיות דיגיטליות שמשרתות את העסק
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
            נביא נס ישראל בע״מ עוזרת לעסקים להפוך רעיון, בעיה או תהליך שחוזר על עצמו לפתרון דיגיטלי ברור: אתר, מערכת, כלי AI, אוטומציה, תוסף לדפדפן או תשתית נתונים שעובדת ביום-יום.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">דברו איתנו ב-WhatsApp</a>
            <Link className="btn-secondary" href="/services">צפייה בשירותים</Link>
          </div>
        </div>

        <div className="hidden rounded-lg border p-6 md:block" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
          <h2 className="text-2xl font-semibold">מה אפשר לבנות איתנו?</h2>
          <div className="mt-5 grid gap-4">
            {highlighted.map((item) => (
              <Link className="flex items-center justify-between gap-4 border-b pb-3 text-base font-medium transition hover:text-sky-700" href={item.href} key={item.href} style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                <span>{item.title}</span>
                <span aria-hidden="true">←</span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-base leading-7" style={{ color: "var(--text-muted)" }}>
            במקום להעמיס עשרות הבטחות, מתחילים בשאלה פשוטה: מה צריך לעבוד טוב יותר בעסק, ואיזה פתרון קטן וברור יכול להזיז את זה קדימה.
          </p>
        </div>
      </section>

      <LanguageStrip current="he" title="NAVINES בעולם" />

      <Section eyebrow="מה אנחנו עושים" title="תחומים מרכזיים, בלי לפזר אתכם בין עשרות מונחים">
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((service) => (
            <Link className="group border-t pt-5 transition" href={service.href} key={service.href} style={{ borderColor: "var(--border)" }}>
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{service.text}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-glowred transition group-hover:translate-x-[-2px]">למידע נוסף</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="מוצרים וכלים" title="מוצרים שמדגימים את דרך החשיבה של NAVINES">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {featuredProducts.map((product) => {
            const href = product.url || "/products";
            const content = (
              <>
                <p className="text-sm font-semibold text-glowred">{product.status}</p>
                <h2 className="mt-2 text-2xl font-semibold">{product.hebrewName || product.name}</h2>
                <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{trimText(product.description, 170)}</p>
              </>
            );

            return href.startsWith("http") ? (
              <a className="block border-t pt-5 transition hover:border-sky-400" href={href} key={product.slug} rel="noopener noreferrer" target="_blank" style={{ borderColor: "var(--border)" }}>{content}</a>
            ) : (
              <Link className="block border-t pt-5 transition hover:border-sky-400" href={href} key={product.slug} style={{ borderColor: "var(--border)" }}>{content}</Link>
            );
          })}
        </div>
        <Link className="btn-secondary mt-6" href="/products">לכל המוצרים והכלים</Link>
      </Section>

      <Section eyebrow="איך עובדים איתנו" title="תהליך קצר, מסודר ופרקטי">
        <ol className="grid gap-5 md:grid-cols-4">
          {process.map(([title, text], index) => (
            <li className="border-t pt-5" key={title} style={{ borderColor: "var(--border)" }}>
              <span className="text-sm font-semibold text-glowred">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="למי אנחנו עוזרים" title="עסקים ויזמים שצריכים יותר מסתם אתר יפה">
        <div className="grid gap-5 md:grid-cols-3">
          {solutionPages.slice(0, 3).map((solution) => (
            <Link className="command-glass block p-5" href={`/solutions/${solution.slug}`} key={solution.slug}>
              <p className="text-sm font-semibold text-glowred">{solution.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold">{solution.navLabel}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{trimText(solution.seoDescription, 150)}</p>
            </Link>
          ))}
        </div>
        <Link className="btn-secondary mt-6" href="/solutions">לכל הפתרונות</Link>
      </Section>

      <Section eyebrow="למה NAVINES" title="טכנולוגיה עם חשיבה עסקית">
        <div className="max-w-4xl space-y-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          <p>אנחנו לא מתחילים מכלי או מטרנד. מתחילים מהצורך: איפה העסק מאבד זמן, פניות, כסף או שליטה, ומה אפשר לבנות כדי להפוך את העבודה לברורה יותר.</p>
          <p>העבודה משלבת אפיון, פיתוח, אוטומציה, נתונים, SEO, תשתית ותמיכה טכנית. כשצריך, אנחנו בונים פתרון קטן וממוקד. כשנכון יותר, מחברים מערכות קיימות במקום להחליף הכול.</p>
        </div>
      </Section>

      <Section eyebrow="מאמרים אחרונים" title="תובנות קצרות לפני שמתחילים פרויקט">
        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link className="command-glass block p-5" href={`/blog/${post.slug}`} key={post.slug}>
              <div className="flex flex-wrap gap-2 text-sm font-medium" style={{ color: "var(--text-soft)" }}>
                <span>{post.category}</span>
                <span>{formatBlogDate(post.publishedAt)}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{trimText(post.excerpt, 130)}</p>
            </Link>
          ))}
        </div>
        <Link className="btn-secondary mt-6" href="/blog">לכל המאמרים</Link>
      </Section>

      <Section eyebrow="יצירת קשר" title="רוצים להבין מה נכון לעסק שלכם?">
        <div className="rounded-lg border p-6 md:flex md:items-center md:justify-between md:gap-8" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
          <p className="max-w-2xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>
            שלחו הודעה קצרה: איזה אתר, מערכת, חנות, תוסף או תהליך יש לכם היום, ומה הייתם רוצים לשפר. נחזור עם כיוון ברור לשיחה הבאה.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
            <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">WhatsApp</a>
            <a className="btn-secondary" href={site.emailHref}>Email</a>
          </div>
        </div>
      </Section>
    </>
  );
}
