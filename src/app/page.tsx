import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import { solutionPages } from "@/data/solutions";
import { blogPosts, courseTracks, products, site } from "@/data/site";
import { formatBlogDate } from "@/lib/dates";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "פתרונות בינה מלאכותית, אתרים ואוטומציה לעסקים בישראל",
  description: "נביא נס ישראל בע״מ בונה אתרים, מערכות, צ׳ט AI, TalkToData, תמיכה טכנית, קורסי AI וכלים חכמים לעסקים בישראל.",
});

const commandStats = [
  { label: "מה אנחנו עושים", value: "מחברים עסק, אתר ונתונים", text: "אתרים, מערכות, AI, אוטומציה ותמיכה טכנית במקום אחד", href: "/services" },
  { label: "למי זה מתאים", value: "עסקים שרוצים סדר", text: "פחות עבודה ידנית, יותר שליטה, מדידה ופניות איכותיות", href: "/solutions" },
  { label: "הצעד הבא", value: "שיחה קצרה בוואטסאפ", text: "שלחו מה יש לכם היום ונכוון אתכם לעמוד או לפתרון הנכון", href: site.whatsappHref },
];

const topServices = [
  {
    title: "לדבר עם הנתונים של העסק באמצעות ChatGPT",
    text: "חיבור מכירות, הזמנות, מלאי, לקוחות, דוחות ואימיילים לממשק שיחה פשוט וברור.",
    href: "/services/chatgpt-business-data",
    label: "TalkToData",
  },
  {
    title: "אתר תדמית מקצועי במחיר 999 ₪",
    text: "מסלול מהיר לעסק שצריך אתר נקי, ברור, מותאם למובייל ומוכן לפניות.",
    href: "/services/business-website-999",
    label: "מסלול מהיר",
  },
  {
    title: "כלי חכם וחינמי לגולשים באתר",
    text: "מחשבון, בדיקה, שאלון או עוזר שמוסיף ערך אמיתי ומעלה איכות פניות.",
    href: "/services/smart-website-lead-engine",
    label: "כלי לגולשים",
  },
  {
    title: "בניית אתרים ומערכות",
    text: "אתרים, דשבורדים, מערכות פנימיות ופורטלים שמשרתים תהליך עסקי ברור.",
    href: "/services/web-development",
    label: "אתרים ומערכות",
  },
  {
    title: "AI ואוטומציה לעסקים",
    text: "חיבור פניות, משימות, וואטסאפ, דוחות ותהליכים שחוזרים על עצמם.",
    href: "/services/ai-automation",
    label: "אוטומציה",
  },
  {
    title: "איקומרס ומרקטפלייסים",
    text: "Shopify, WooCommerce, Amazon וגם eBay עם תשתית מכירה מסודרת.",
    href: "/services/ecommerce",
    label: "איקומרס",
  },
];

const featuredNewServices = [
  {
    title: "אתר צמיחה אורגנית למוכרי Amazon",
    text: "אתר בינלאומי שמציג את המוצרים, מושך תנועה ממנועי חיפוש ומוביל לקוחות לעמודי Amazon.",
    href: "/services/amazon-seller-seo-website",
    cta: "רוצים להביא תנועה מחוץ ל Amazon?",
  },
  {
    title: "צ׳ט AI חכם לאתרים",
    text: "עוזר קצר וברור שמבין את תוכן האתר, מסביר לגולש מה מתאים לו ומוביל לוואטסאפ.",
    href: "/services/ai-chat-for-websites",
    cta: "לעמוד צ׳ט AI",
  },
  {
    title: "תמיכה טכנית, סייבר ורשתות",
    text: "אתר שנפל, מיילים, DNS, דומיין, רשת, ספקים או חשד לפריצה. טיפול מהיר וברור.",
    href: "/services/technical-support-cyber-networks",
    cta: "לתמיכה טכנית",
  },
  {
    title: "סיוע במקרה פריצה לחשבון",
    text: "אינסטגרם, פייסבוק, טלגרם, מייל, דומיין או נכס דיגיטלי שנפגע. פועלים רגוע, חוקי ומהר.",
    href: "/services/account-hack-recovery",
    cta: "לסיוע חירום דיגיטלי",
  },
  {
    title: "בדיקת עסק לפני רכישה",
    text: "בדיקת נתונים, תנועה, SEO, נכסים דיגיטליים, מוניטין וסיכונים לפני שמכניסים כסף.",
    href: "/services/business-due-diligence-intelligence",
    cta: "לבדיקת עסק",
  },
];

const solutionSummaries: Record<string, string> = {
  accountants: "דוחות, מסמכים, לקוחות ושאלות חוזרות בממשק עבודה חכם.",
  "amazon-sellers": "Account Health, דוחות, Listings, מלאי, התראות וטיפול דחוף.",
  freelancers: "לידים, לקוחות, משימות, תשלומים ותזכורות במקום מסודר אחד.",
};

const gatewayLinks = [
  { label: "כל השירותים", href: "/services" },
  { label: "מרכז אופטימיזציה", href: "/optimization-hub" },
  { label: "כלים ומוצרים", href: "/products" },
  { label: "קורסים", href: "/courses" },
  { label: "משחקים", href: "/games" },
  { label: "בלוג", href: "/blog" },
];

function compactText(text: string, length = 118) {
  return text.length > length ? `${text.slice(0, length).trim()}...` : text;
}

export default function HomePage() {
  const latestPosts = [...blogPosts].sort((first, second) => second.publishedAt.localeCompare(first.publishedAt)).slice(0, 3);
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_0.88fr] lg:px-8 lg:py-7">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="command-glass rounded-full px-4 py-2 text-sm font-black text-glowred">מרכז פיקוד דיגיטלי לעסקים</span>
            <span className="command-glass rounded-full px-4 py-2 text-sm font-black text-zinc-300">AI, אתרים, אוטומציה ותמיכה</span>
          </div>
          <h1 className="max-w-4xl text-[2.45rem] font-black leading-[1.03] text-white sm:text-[3rem] md:text-[3.55rem]">
            מערכות בינה מלאכותית, אתרים, אוטומציה ותשתיות דיגיטליות לעסקים
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            נביא נס ישראל בע״מ מספקת פתרונות AI, אוטומציה ותשתיות דיגיטליות לעסקים שרוצים לעבוד ברור יותר: אתר חכם, מערכת מסודרת, נתונים שאפשר להבין, ותמיכה כשמשהו נתקע.
          </p>

          <Link className="command-glass mt-4 block max-w-3xl rounded-[1.3rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" href="/services/chatgpt-business-data">
            <p className="text-sm font-black text-glowred">השירות החם עכשיו</p>
            <h2 className="mt-1 text-2xl font-black leading-tight text-white">TalkToData: לדבר עם הנתונים, הדוחות והאימיילים של העסק דרך ChatGPT</h2>
            <p className="mt-2 text-base leading-7 text-zinc-300">
              שאלות רגילות על מכירות, הזמנות, מלאי, לקוחות ופניות. בלי לחפש ידנית בין מערכות.
            </p>
          </Link>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-primary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ בחינם
            </a>
            <Link className="btn-secondary" href="/services">
              ראו שירותים
            </Link>
            <Link className="btn-secondary" href="/products">
              כלים ומוצרים
            </Link>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-3 sm:px-6 lg:grid-cols-3 lg:px-8">
        {commandStats.map((metric) => (
          <Link className="command-glass group rounded-[1.35rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={metric.href} key={metric.label}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-black text-glowred">{metric.label}</span>
              <span className="status-pip bg-purple-200 text-purple-200" />
            </div>
            <strong className="mt-3 block text-2xl font-black text-white">{metric.value}</strong>
            <span className="mt-2 block text-base leading-7 text-zinc-400">{metric.text}</span>
          </Link>
        ))}
      </section>

      <Section eyebrow="מה אנחנו עושים?" title="שירותים מרכזיים שמובילים לעמודים המלאים" className="py-5 lg:py-7">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {topServices.map((service) => (
            <Link className="dashboard-row group rounded-[1.25rem] p-4 transition" href={service.href} key={service.href}>
              <span className="rounded-full border border-purple-200/20 bg-purple-500/12 px-3 py-1 text-sm font-black text-glowred">{service.label}</span>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">{service.title}</h3>
              <p className="mt-2 text-base leading-7 text-zinc-300">{service.text}</p>
              <span className="mt-4 inline-flex text-base font-black text-silver transition group-hover:text-white">למידע נוסף</span>
            </Link>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="btn-secondary" href="/services">
            לכל השירותים
          </Link>
          <a className="btn-primary" href={site.whatsappHref}>
            לא בטוחים מה מתאים? כתבו לנו
          </a>
        </div>
      </Section>

      <Section eyebrow="שירותים חדשים ומובילים" title="שירותים קצרים להבנה ומהירים לפעולה" className="py-5 lg:py-7">
        <div className="grid gap-4 md:grid-cols-2">
          {featuredNewServices.map((service) => (
            <Link className="command-glass group rounded-[1.45rem] p-5 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={service.href} key={service.href}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-black leading-tight text-white">{service.title}</h2>
                <span className="status-pip bg-purple-200 text-purple-200" />
              </div>
              <p className="mt-3 text-base leading-7 text-zinc-300">{service.text}</p>
              <span className="mt-5 inline-flex rounded-full border border-purple-200/20 bg-purple-500/12 px-4 py-2 text-sm font-black text-glowred transition group-hover:bg-purple-500/24 group-hover:text-white">
                {service.cta}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="מה מתאים לכם?" title="פתרונות לפי סוג עסק" className="py-5 lg:py-7">
        <div className="grid gap-4 md:grid-cols-3">
          {solutionPages.map((solution) => (
            <article className="command-glass group rounded-[1.35rem] p-5 transition hover:-translate-y-0.5 hover:border-purple-200/45" key={solution.slug}>
              <p className="text-sm font-black text-glowred">{solution.eyebrow}</p>
              <Link className="mt-3 block text-2xl font-black leading-tight text-white transition hover:text-glowred" href={`/solutions/${solution.slug}`}>
                {solution.navLabel}
              </Link>
              <p className="mt-3 text-base leading-7 text-zinc-400">{solutionSummaries[solution.slug] || compactText(solution.seoDescription)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link className="rounded-full border border-purple-200/20 bg-purple-500/12 px-4 py-2 text-sm font-black text-white transition hover:bg-purple-500/24" href={`/solutions/${solution.slug}`}>
                  לעמוד הפתרון
                </Link>
                <a className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-zinc-200 transition hover:bg-purple-500/18 hover:text-white" href={site.whatsappHref}>
                  וואטסאפ
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="קורסי AI מעשיים" title="ללמוד לבנות דברים אמיתיים עם AI" className="py-5 lg:py-7">
        <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="command-glass rounded-[1.45rem] p-5">
            <p className="text-lg leading-8 text-zinc-300">
              קורסים פרונטליים לילדים ולבוגרים באזור פתח תקווה. לומדים לעבור מרעיון למוצר, אתר, כלי חכם או תהליך עבודה ברור, עם 10 מפגשים ושנה של ליווי.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="btn-secondary" href="/courses">
                לכל הקורסים
              </Link>
              <a className="btn-primary" href={site.whatsappHref}>
                בדיקת התאמה בוואטסאפ
              </a>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {courseTracks.map((course) => (
              <Link className="dashboard-row rounded-[1.25rem] p-4 transition" href={`/courses/${course.slug}`} key={course.slug}>
                <p className="text-sm font-black text-glowred">{course.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-white">{course.navLabel}</h3>
                <p className="mt-2 text-base leading-7 text-zinc-300">{compactText(course.summary, 120)}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="כלים ומוצרים" title="כלים שבנינו כדי לראות, להבין ולפעול מהר יותר" className="py-5 lg:py-7">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => {
            const content = (
              <>
                <span className="rounded-full border border-purple-200/20 bg-purple-500/12 px-3 py-1 text-sm font-black text-glowred">{product.status}</span>
                <h3 className="mt-3 text-2xl font-black leading-tight text-white">{product.hebrewName || product.name}</h3>
                <p className="mt-2 text-base leading-7 text-zinc-400">{compactText(product.description, 104)}</p>
                <span className="mt-4 inline-flex text-base font-black text-silver transition group-hover:text-white">למידע נוסף</span>
              </>
            );

            return product.url?.startsWith("/") ? (
              <Link className="command-glass group rounded-[1.25rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={product.url} key={product.slug}>
                {content}
              </Link>
            ) : (
              <a className="command-glass group rounded-[1.25rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={product.url || "/products"} key={product.slug} rel={product.url ? "noreferrer" : undefined} target={product.url ? "_blank" : undefined}>
                {content}
              </a>
            );
          })}
        </div>
        <div className="mt-5">
          <Link className="btn-secondary" href="/products">
            לכל הכלים והמוצרים
          </Link>
        </div>
      </Section>

      <Section eyebrow="שער מהיר" title="כל מה שחשוב נמצא בעמודים ייעודיים" className="py-5 lg:py-7">
        <div className="command-glass grid gap-3 rounded-[1.45rem] p-4 sm:grid-cols-2 lg:grid-cols-6">
          {gatewayLinks.map((link) => (
            <Link className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-base font-black text-zinc-200 transition hover:border-purple-200/35 hover:bg-purple-500/14 hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="בלוג" title="מדריכים קצרים לקבלת החלטות חכמות יותר" className="py-5 lg:py-7">
        <div className="grid gap-4 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link className="command-glass group block rounded-[1.25rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={`/blog/${post.slug}`} key={post.slug}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-black text-zinc-500">
                <span className="text-glowred">{post.category}</span>
                <span>{formatBlogDate(post.publishedAt)}</span>
              </div>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">{post.title}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-400">{compactText(post.excerpt, 120)}</p>
              <span className="mt-4 inline-flex rounded-full border border-white/10 px-4 py-2 text-base font-black text-zinc-200 transition group-hover:bg-purple-500/18 group-hover:text-white">
                לקריאת המדריך
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <Link className="btn-secondary" href="/blog">
            לכל המאמרים
          </Link>
        </div>
      </Section>

      <Section eyebrow="יצירת קשר" title="רוצים להבין מה נכון לעסק שלכם?" className="py-5 lg:py-8">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-premium lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-300">
              שלחו הודעה קצרה בוואטסאפ: איזה אתר, חנות, מערכת או תקלה יש לכם היום, ומה הייתם רוצים לשפר. נכוון אתכם לעמוד הנכון או לשיחה קצרה בלי חפירות.
            </p>
            <p className="mt-3 text-base text-zinc-400">{site.hebrewLegalName} · {site.companyNumberLabel} · {site.phone}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-0">
            <a className="btn-primary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ
            </a>
            <Link className="btn-secondary" href="/contact">
              יצירת קשר
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
