import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LanguageStrip } from "@/components/LanguageStrip";
import { Section } from "@/components/Section";
import { solutionPages } from "@/data/solutions";
import { blogPosts, hebrewTools, products, services, site } from "@/data/site";
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
    links: [["פיתוח אתרים ומערכות", "/services/web-development"], ["פיתוח אפליקציות", "/services/mobile-app-development"], ["מדריך לבניית אפליקציה לעסק", "/blog/mobile-app-service-guide"], ["פיתוח תוספים לדפדפנים", "/services/browser-extension-development"]],
  },
  {
    title: "AI, נתונים ואוטומציה",
    text: "חיבור מידע, מערכות ומשימות לכלים חכמים שמקצרים עבודה ידנית ועוזרים לקבל החלטות מהר יותר.",
    links: [["AI ואוטומציה", "/services/ai-automation"], ["Connector ו־API מותאם", "/services/api-integrations"], ["מדריך לחיבור כל תוכנה", "/blog/connect-any-software-chatgpt-custom-connector"], ["מדריך לאוטומציה עסקית", "/blog/business-automation-start"], ["סריקת חשבוניות עם AI", "/blog/ai-invoice-scanning-and-filtering"], ["חשבונית אונליין ומורנינג ל־ChatGPT", "/services/business-systems-chatgpt-integration"], ["סוכני AI לעסקים", "/services/chatgpt-ai-agents-business"], ["סוכן SEO אוטונומי", "/services/autonomous-seo-agent-search-console-chatgpt"], ["קידום במנועי AI ו־ChatGPT", "/services/ai-search-visibility-geo"], ["צ׳ט AI לאתרים", "/services/ai-chat-for-websites"], ["מחקר החלטות וניסויים", "/services/website-decision-research-experiments"]],
  },
  {
    title: "מסחר ותשתיות דיגיטליות",
    text: "חנויות, מרקטפלייסים, ביצועים, אבטחה ותמיכה טכנית שמחזיקים את הפעילות הדיגיטלית יציבה ומדידה.",
    links: [["איקומרס", "/services/ecommerce"], ["מדריך להקמת חנות איקומרס", "/blog/ecommerce-service-guide"], ["מערכת תוכנית שותפים לאתר קיים", "/services/affiliate-program-platform"], ["בדיקת חיובים והחזרים אפשריים", "/services/payment-discrepancy-review"], ["מרכז אופטימיזציה", "/optimization-hub"], ["תמיכה טכנית וסייבר", "/services/technical-support-cyber-networks"]],
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
  const featuredProducts = products.filter((product) => ["navines-noise", "navines-seo-lab", "talk-to-data", "amazoniq", "checklink"].includes(product.slug));
  const featuredTools = hebrewTools.filter((tool) => ["experiment", "qr", "email-header", "bec-request", "redirect-chain", "link"].includes(tool.id));
  const featuredSolutions = solutionPages.slice(0, 3);
  const musicDistributionService = services.find((service) => service.slug === "music-distribution-artist-digital-presence");
  const robloxExperienceService = services.find((service) => service.slug === "roblox-brand-experiences");
  const affiliateProgramService = services.find((service) => service.slug === "affiliate-program-platform");
  const financialReviewService = services.find((service) => service.slug === "payment-discrepancy-review");
  const navinesNoiseProduct = products.find((product) => product.slug === "navines-noise");

  return (
    <>
      <JsonLd data={homeBreadcrumbSchema} />

      <section className="home-hero">
        <div className="home-hero-inner mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="home-hero-copy">
            <p className="home-hero-kicker">בית תוכנה ישראלי לעסקים וארגונים</p>
            <h1>נביא נס ישראל בע״מ</h1>
            <p className="home-hero-offer">תוכנה, בינה מלאכותית ותשתיות דיגיטליות שבנויות לעבודה אמיתית.</p>
            <p className="home-hero-summary">
              אנחנו מתכננים ומפתחים מערכות, אתרים, אוטומציות וכלי נתונים שמחברים בין צורך עסקי, חוויית משתמש וטכנולוגיה יציבה.
            </p>
            <div className="home-hero-actions">
              <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">ספרו לנו מה צריך לבנות</a>
              <Link className="btn-on-dark" href="/services">לכל השירותים</Link>
            </div>
          </div>
          <nav className="home-hero-proof" aria-label="תחומי פעילות מרכזיים">
            <Link href="/services/ai-automation">מערכות AI</Link>
            <Link href="/services/web-development">פיתוח תוכנה</Link>
            <Link href="/services/ecommerce">מסחר דיגיטלי</Link>
            <Link href="/services/technical-support-cyber-networks">אבטחה ותשתיות</Link>
          </nav>
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
                {group.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
              </nav>
            </article>
          ))}
        </div>
      </Section>

      {musicDistributionService ? (
        <section className="feature-band border-y" style={{ borderColor: "var(--border)" }} aria-labelledby="music-distribution-title">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-16">
            <div className="max-w-4xl">
              <p className="section-eyebrow">מוזיקה, הפצה וניהול אמן</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl" id="music-distribution-title">{musicDistributionService.title}</h2>
              <p className="mt-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>מהכנת מאסטר, עטיפה ומטא־דאטה ועד בחירת מפיץ, פרופילי אמן, ספוטיפיי (Spotify), אפל מיוזיק (Apple Music), יוטיוב (YouTube), תוכן וקידום אורגני. נביא נס מנהלת את הנוכחות הדיגיטלית של הפרויקט של רננו ומציגה אותו כמקרה בוחן ציבורי.</p>
              <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-soft)" }}>הפצה מקצועית מסדרת את הדרך אל הפלטפורמות; היא אינה מבטיחה השמעות, הכנסה, חשיפה או קבלה לפלייליסטים.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" href={`/services/${musicDistributionService.slug}`}>לפרטי השירות</Link>
              <a className="btn-on-dark" href="https://open.spotify.com/artist/6dAsJpPkTJK8ONY4HN1Vs7" rel="noopener noreferrer" target="_blank">רננו בספוטיפיי</a>
              <Link className="editorial-link inline-flex items-center" href="/blog/how-to-distribute-music-spotify-apple-youtube">למדריך ההפצה</Link>
            </div>
          </div>
        </section>
      ) : null}

      {robloxExperienceService ? (
        <section className="feature-band border-y" style={{ borderColor: "var(--border)" }} aria-labelledby="roblox-brand-title">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-16">
            <div className="max-w-4xl">
              <p className="section-eyebrow">משחקים וחוויות מותג</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl" id="roblox-brand-title">{robloxExperienceService.title}</h2>
              <p className="mt-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>הופכים סיפור, מוצר או קהילה לעולם שאפשר להיכנס אליו: קונספט, משחקיות, עיצוב, פיתוח, ביצועים והשקה. אפשר להתחיל במשחק חדש או לשפר חוויה קיימת.</p>
              <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-soft)" }}>עולם נביא נס (NAVINES WORLD) הוא עולם התנסות שבנינו כדי ללמוד ולבדוק רעיונות בתוך רובלוקס (Roblox). הוא אינו מוצג כמשחק ויראלי או כהבטחה לתוצאה.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-primary" href={`/services/${robloxExperienceService.slug}`}>לפרטי השירות</Link>
              <a className="btn-on-dark" href="https://www.roblox.com/games/8820246222/NAVINES-WORLD" rel="noopener noreferrer" target="_blank">לשחק בעולם נביא נס</a>
              <Link className="editorial-link inline-flex items-center" href="/blog/roblox-brand-experience-for-business">למדריך למותגים</Link>
            </div>
          </div>
        </section>
      ) : null}

      {affiliateProgramService ? (
        <section className="feature-band border-y" style={{ borderColor: "var(--border)" }}>
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-8 lg:py-16">
            <div className="max-w-4xl">
              <p className="section-eyebrow">צמיחה דרך שותפים ויוצרים</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">{affiliateProgramService.title}</h2>
              <p className="mt-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>הופכים המלצות של יוצרי תוכן, לקוחות ושותפים עסקיים לתהליך מסודר: קישורים אישיים, אזור שותפים, חומרים מעודכנים, סטטוסים ובקרה שמתחברים לאתר שכבר קיים.</p>
            </div>
            <div className="mt-7 flex shrink-0 flex-wrap gap-3 lg:mt-0">
              <Link className="btn-primary" href={`/services/${affiliateProgramService.slug}`}>לפרטי השירות</Link>
              <Link className="btn-on-dark" href="/blog/affiliate-program-for-existing-website">למדריך המלא</Link>
            </div>
          </div>
        </section>
      ) : null}
      {financialReviewService ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="financial-review-title">
          <div className="border-y py-7 lg:flex lg:items-end lg:justify-between lg:gap-10" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-glowred">סדר מול חיובים, זיכויים ותשלומים</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-white" id="financial-review-title">{financialReviewService.title}</h2>
              <p className="mt-3 text-lg leading-8 text-zinc-300">{financialReviewService.summary}</p>
            </div>
            <div className="mt-5 flex shrink-0 flex-wrap gap-3 lg:mt-0">
              <Link className="btn-secondary" href={`/services/${financialReviewService.slug}`}>לבדיקה מסודרת</Link>
              <Link className="editorial-link inline-flex items-center" href="/blog/how-to-review-payments-and-refunds">למדריך המעשי</Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="feature-band">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="section-eyebrow">שירות מוביל</p>
            <h2>חשבונית אונליין, SUMIT, ריווחית, Priority וכל תוכנה בתוך צ׳ט ג׳י פי טי</h2>
            <p>מחברים Morning ומורנינג, Green Invoice וגרין אינוויס, SUMIT, המוכר בחיפוש גם כסמיט, סמית או סאמיט, וכן ריווחית, iCount, חשבשבת, Priority ופריוריטי, קו מערכות, מוסכית 2020, נשר, שמאית ומערכות נוספות ל־ChatGPT. כשיש API משתמשים בו; כשאין חיבור מוכן, NAVINES Bridge יכולה לעבוד דרך Webhook, קבצים, מסד נתונים, Plugin או Connector מורשה אחר.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/services/business-systems-chatgpt-integration">חיבור חשבונית אונליין ומערכות</Link>
              <Link className="btn-secondary" href="/services/api-integrations">פיתוח Connector מותאם</Link>
              <Link className="btn-secondary" href="/services/chatgpt-ai-agents-business">בניית סוכן AI לעסק</Link>
              <a className="btn-secondary" href="https://talktodata.navines.com" rel="noopener noreferrer" target="_blank">לצפייה ב־TalkToData</a>
            </div>
          </div>
          <dl className="feature-specs">
            <div><dt>חיבור</dt><dd>NAVINES Bridge דרך API, Webhook, מסד נתונים, קבצים, Plugin או ממשק מורשה, בלי להחליף אוטומטית את המערכת הקיימת.</dd></div>
            <div><dt>שימוש</dt><dd>שאלות בעברית על חשבוניות, לקוחות, מכירות, מלאי, מוסך, מפעל, שמאות, תיקים ודוחות. זו יכולת חדשה מעל כל תוכנה מורשית.</dd></div>
            <div><dt>שליטה</dt><dd>הרשאות, מקורות, לוגים ואישור אנושי לפני פעולות רגישות או בלתי הפיכות.</dd></div>
          </dl>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }} aria-labelledby="autonomous-seo-home-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <p className="section-eyebrow">SEO, AI וקוד בלופ אחד</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-4xl" id="autonomous-seo-home-title">מחברים Google Search Console לצ׳ט ג׳י פי טי ובונים סוכן SEO אוטונומי</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">הסוכן קורא שאילתות, עמודים, חשיפות, CTR ומיקום, משלב Google Analytics, סריקות ולוגים, מכין שינוי בקוד, מריץ בדיקות, פורס Preview או שינוי מאושר ומודד שוב. במקביל אפשר לחזק נראות ב־ChatGPT, Gemini, Claude ו־Perplexity באמצעות מקור אמת, Schema, תוכן שניתן לצטט וגישה תקינה לזחלנים.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/services/autonomous-seo-agent-search-console-chatgpt">לשירות סוכן SEO אוטונומי</Link>
              <Link className="btn-secondary" href="/services/ai-search-visibility-geo">לקידום במנועי AI</Link>
              <Link className="btn-secondary" href="/blog/google-search-console-chatgpt-autonomous-seo-agent">למדריך המלא</Link>
              <a className="btn-secondary" href="https://seo.navines.com/he/" rel="noopener noreferrer" target="_blank">ל־NAVINES SEO Lab</a>
            </div>
          </div>
          <dl className="feature-specs">
            <div><dt>אותות</dt><dd>Search Console, GA4, Sitemap, סריקה, ביצועים ולוגי שרת זמינים.</dd></div>
            <div><dt>פעולה</dt><dd>תוכן, קישורים, Schema, מטא־דאטה ותיקוני קוד עם בדיקות ו־Git.</dd></div>
            <div><dt>למידה</dt><dd>תיעוד השערה, דיפלוי, מדדים ותוצאה כדי לשפר את המחזור הבא.</dd></div>
          </dl>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: "var(--border)" }} aria-labelledby="agi-console-home-title">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <p className="section-eyebrow">ממענה של AI לעבודה מתמשכת</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-4xl" id="agi-console-home-title">NAVINES AGI Console מפעילה עובדי AI עם משימה, גבולות, ראיות והמשך עבודה</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">במקום לפתוח עוד צ׳ט ולהתחיל מחדש, מגדירים Mission ברורה ומאפשרים לעובד AI להתקדם במחזורים מתועדים. המערכת כבר יודעת לעבוד עם Search Console לקריאה, מאגר GitHub מוגדר ויעד Vercel Production אחד, להכין דוחות, להריץ בדיקות ולהמתין לאישור בנקודות רגישות.</p>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-400">אפשר להתחיל בזול ממשימה תחומה אחת ולהרחיב רק כשהראיות מצדיקות זאת. המוצר משתפר בקצב יומי ונבנה כדי לשנות את חלוקת העבודה בין אנשים ל־AI — בלי להעמיד פנים שכל מערכת מחוברת אליו אוטומטית.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href="https://console.agi.navines.com" rel="noopener noreferrer" target="_blank">לפתיחת AGI Console</a>
              <Link className="btn-secondary" href="/blog/agi-console-autonomous-ai-workers-change-how-work-gets-done">איך עובדי AI משנים את העבודה</Link>
              <a className="btn-secondary" href="https://agi.navines.com/research/the-operating-system-for-autonomous-ai-work/" rel="noopener noreferrer" target="_blank">למחקר המעמיק</a>
            </div>
          </div>
          <dl className="feature-specs">
            <div><dt>Mission</dt><dd>מטרה, היקף, תקציב, בדיקות ותנאי עצירה ברורים.</dd></div>
            <div><dt>Evidence</dt><dd>דוחות, לוגים ותוצרים שמאפשרים לראות מה בוצע ולמה.</dd></div>
            <div><dt>Control</dt><dd>אישורים לפני פעולה רגישה והרחבת סמכות בהדרגה.</dd></div>
          </dl>
        </div>
      </section>

      {navinesNoiseProduct ? (
        <section className="border-y" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }} aria-labelledby="navines-noise-home-title">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[7rem_minmax(0,1fr)_auto] lg:items-center lg:px-8 lg:py-14">
            <Image alt="האייקון של NAVINES NOISE" className="h-24 w-24" height={96} src="/products/navines-noise-icon.png" width={96} />
            <div>
              <p className="section-eyebrow">חדש מבית נביא נס ישראל בע״מ</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-4xl" id="navines-noise-home-title">NAVINES NOISE: למצוא את האות בתוך הרעש</h2>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-300">{navinesNoiseProduct.description}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:max-w-56 lg:flex-col">
              <Link className="btn-primary" href="/products/navines-noise">לפרטי התוסף</Link>
              <a className="btn-secondary" href="https://chromewebstore.google.com/detail/navines-noise/nlhpkfadkikhcaplbjeaehkiajhpiigi" rel="noopener noreferrer" target="_blank">להתקנה בחנות</a>
              <Link className="editorial-link inline-flex items-center" href="/blog/navines-noise-website-intelligence-extension">למאמר המלא</Link>
            </div>
          </div>
        </section>
      ) : null}

      <Section eyebrow="מוצרים וכלים" title="מוצרים שבנינו כדי להפוך מידע לפעולה">
        <div className="product-editorial-list">
          {featuredProducts.map((product, index) => {
            const href = product.url || "/products";
            const content = <><span className="editorial-index">0{index + 1}</span><span className="product-editorial-copy"><small>{product.status}</small><strong>{product.hebrewName || product.name}</strong><span>{trimText(product.description, 180)}</span></span></>;
            return href.startsWith("http") ? <a href={href} key={product.slug} rel="noopener noreferrer" target="_blank">{content}</a> : <Link href={href} key={product.slug}>{content}</Link>;
          })}
        </div>
        <div className="mt-7 flex flex-wrap gap-3"><Link className="btn-secondary" href="/products">לכל המוצרים</Link><Link className="editorial-link inline-flex items-center gap-2" href="/blog/business-tools-built-by-navines-israel">הסיפור מאחורי הכלים</Link></div>
      </Section>

      <Section eyebrow="כלים שימושיים בעברית" title="בדיקה קטנה לפני פעולה גדולה">
        <p className="section-lead">21 כלים קצרים שפועלים בדפדפן ועוזרים לבדוק קישורים, קודי QR, כותרות אימייל, בקשות תשלום, ניסויי אתר, הפניות, קמפיינים וחשבונות לפני שמתקדמים. בלי הרשמה ובלי להעלות את הקלט לשרת.</p>
        <div className="home-tools-list">
          {featuredTools.map((tool, index) => (
            <Link href={`/tools#${tool.id}`} key={tool.id}>
              <span className="editorial-index">0{index + 1}</span>
              <span><strong>{tool.title}</strong><small>{tool.summary}</small></span>
              <span className="editorial-link">לבדיקה</span>
            </Link>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/tools">לכל הכלים בעברית</Link>
          <Link className="btn-secondary" href="/blog/qr-email-and-link-safety-tools">למדריך על הכלים החדשים</Link>
          <a className="btn-secondary" href="https://checklink.ai" rel="noopener noreferrer" target="_blank">ל־CheckLink.ai המלא</a>
        </div>
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
            </Link>
          ))}
        </div>
        <Link className="btn-secondary mt-7" href="/solutions">לכל הפתרונות</Link>
      </Section>

      <Section eyebrow="קורסי AI מעשיים" title="לומדים לבנות, לא רק להשתמש בכלים">
        <div className="course-preview">
          <Link href="/courses/ai-for-kids"><small>מסלול לילדים</small><h2>מרעיון למוצר אמיתי</h2><p>חשיבה יצירתית, בניית פרויקטים וליווי שמאפשר להתקדם בקצב הנכון.</p><span>לפרטי המסלול</span></Link>
          <Link href="/courses/ai-for-adults"><small>מסלול לבוגרים</small><h2>מוצרים, תהליכים וכלים חכמים</h2><p>מסלול מעשי לבעלי עסקים, מנהלים, פרילנסרים ויזמים שרוצים לעבוד נכון עם AI.</p><span>לפרטי המסלול</span></Link>
        </div>
      </Section>

      <Section eyebrow="תובנות" title="מידע מעשי לפני שמקבלים החלטה">
        <div className="insights-layout">
          {latestPosts.map((post, index) => (
            <Link className={index === 0 ? "insight-featured" : "insight-secondary"} href={`/blog/${post.slug}`} key={post.slug}>
              <div><span>{post.category}</span><span>{formatBlogDate(post.publishedAt)}</span></div>
              <h2>{post.title}</h2>
              <p>{trimText(post.excerpt, index === 0 ? 210 : 130)}</p>
              <strong>לקריאת המאמר</strong>
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
