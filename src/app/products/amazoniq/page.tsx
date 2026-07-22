import Link from "next/link";
import type { ReactNode } from "react";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

const externalLinks = {
  home: "https://amazoniq.navines.com/",
  signup: "https://amazoniq.navines.com/signup",
  pricing: "https://amazoniq.navines.com/pricing",
  gpt: "https://chatgpt.com/g/g-6a30aa44dcbc8191806063bb3c23a5f5-navines-amazoniq",
  faq: "https://amazoniq.navines.com/faq",
};

export const metadata = createMetadata({
  title: "AmazonIQ למוכרי Amazon: דשבורד, GPT ומודיעין Seller Central",
  description: "חברו Seller Central בהרשאה לקריאה בלבד וקבלו דשבורד למכירות, הזמנות, ליסטינגים, עמלות, מלאי FBA וסיכונים, לצד GPT ייעודי לחקירה בשפה טבעית.",
  path: "/products/amazoniq",
});

const coverage = [
  ["הזמנות ומכירות", "הזמנות, פריטי הזמנה, ASIN, SKU, יחידות, מצב הזמנה, FBA או MFN ומדדי מכירה כאשר אמזון מחזירה אותם. פרטי קונים אינם מוצגים."],
  ["מוצרים וליסטינגים", "גילוי ליסטינגים, מצב buyable, שגיאות, אזהרות, מאפיינים חסרים ומידע קטלוגי זמין לפי החשבון וה Marketplace."],
  ["כספים ועמלות", "אירועים פיננסיים, עמלות Amazon, החזרים, reimbursements, התאמות, סכומים מעוכבים ו Amazon net proceeds."],
  ["מלאי FBA", "מלאי fulfillable, reserved, inbound, unsellable, researching, future supply ותוכניות inbound כאשר הנתונים זמינים."],
  ["תנועות ואחסון", "קבלות, משלוחים, החזרות, removals, התאמות, אובדן, נזק והעברות בין מרכזי FBA, לצד מלאי מיושן וחשיפת אחסון כאשר הדוחות זמינים."],
  ["ביצועים והקשר", "אינדיקטורים נבחרים ולחשבונות זכאים נתוני Sales and Traffic כגון sessions, page views, conversion ו Buy Box percentage."],
];

const questions = [
  "מה השתנה לעומת התקופה הקודמת?",
  "איזה ASIN ו SKU נמכרו בהזמנה האחרונה שאינה Pending?",
  "אילו ליסטינגים אינם buyable או כוללים שגיאות ואזהרות?",
  "כמה Amazon גבתה בעמלות בתקופה שבחרתי?",
  "איזה מלאי נמצא ב reserved, inbound או אינו זמין?",
  "איפה יש מלאי מיושן, עודף או תנועה שדורשת בדיקה?",
  "מהי תרומת המוצר המשוערת לאחר העלאת קובץ העלויות שלי?",
];

const faqs = [
  ["מה ההבדל בין AmazonIQ Dashboard ל AmazonIQ GPT?", "הדשבורד מציג תמונת מצב מובנית. GPT מאפשר לשאול שאלות ולחקור נתונים מורשים בשפה טבעית. אלו חוויות נפרדות שיכולות להשתמש באותו חיבור מורשה."],
  ["האם AmazonIQ יכול לשנות מחירים או ליסטינגים?", "לא. AmazonIQ הוא מוצר לקריאה בלבד ואינו משנה מחירים, ליסטינגים, מלאי, הזמנות, החזרים, משלוחים או הודעות לקונים."],
  ["האם אפשר לראות ASIN ו SKU של הזמנה?", "כאשר אמזון מחזירה את השדות המתאימים, אפשר לחקור ASIN, seller SKU, כותרת, כמות, מחיר ורכיבי מס. פרטי קונים מוחרגים."],
  ["האם אפשר לנתח עמלות והחזרות?", "כן, לפי נתונים פיננסיים שאמזון מחזירה: עמלות, החזרים, reimbursements, התאמות, סכומים מעוכבים ו net proceeds. אירועים כספיים עשויים להתעכב."],
  ["האם AmazonIQ מציג רווח נקי?", "לא כרווח מובטח. Amazon net proceeds אינם כוללים בהכרח עלות מוצר, פרסום והוצאות חיצוניות. אפשר לשלב קובץ עלויות של המוכר כדי לקבל הערכת תרומה ורווחיות."],
  ["האם Amazon Ads מחובר?", "לא דרך חיבור Seller Central הנוכחי. Amazon Ads דורש הרשאה נפרדת ואינו מוצג כיכולת פעילה של AmazonIQ כיום."],
  ["האם כל Marketplace וכל דוח זמינים?", "לא. הזמינות תלויה בחשבון, אזור, Marketplace, תפקידים, זכאות לדוחות, מגבלות קצב ושירותי אמזון."],
  ["האם AmazonIQ הוא מוצר של Amazon?", "לא. AmazonIQ הוא מוצר עצמאי של Navines ואינו מאושר, מופעל, משויך או נתמך על ידי Amazon."],
];

export default function AmazonIQProductPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AmazonIQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: externalLinks.home,
    brand: { "@type": "Brand", name: "Navines", legalName: site.legalName },
    sameAs: [externalLinks.home, externalLinks.gpt],
    description: "מוצר מודיעין לקריאה בלבד למוכרי Amazon, עם דשבורד, GPT וכלי What If על בסיס חיבור Seller Central מורשה.",
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AmazonIQ — דשבורד ו־GPT ייעודי למוכרי Amazon",
    url: `${site.url}/products/amazoniq`,
    inLanguage: "he-IL",
    isPartOf: { "@type": "WebSite", name: "NAVINES", url: site.url },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "מוצרים", href: "/products" }, { name: "AmazonIQ", href: "/products/amazoniq" }])} />

      <Section eyebrow="מודיעין למוכרי Amazon" title="AmazonIQ — דשבורד ו־GPT ייעודי למוכרי Amazon" titleAs="h1" className="py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="max-w-3xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>
              AmazonIQ הופך את הנתונים המפוזרים ב Seller Central לתמונה שאפשר להבין ולחקור. במקום לעבור בין עשרות מסכים ודוחות, מקבלים דשבורד מובנה לבדיקת המצב הנוכחי, GPT ייעודי לשאלות מעמיקות ו What If לבחינת תרחישים מפורשים.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7" style={{ color: "var(--text-soft)" }}>
              החיבור נעשה בהרשאת המוכר ובמצב קריאה בלבד. AmazonIQ אינו משנה מחירים, ליסטינגים, מלאי, הזמנות או משלוחים, והשליטה בחשבון נשארת אצל המוכר.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExternalLink className="btn-primary" href={externalLinks.home} label="להכיר את AmazonIQ">להכיר את AmazonIQ</ExternalLink>
              <ExternalLink className="btn-secondary" href={externalLinks.signup} label="להתחיל בגישה מוגבלת בחינם">להתחיל בגישה מוגבלת בחינם</ExternalLink>
              <ExternalLink className="btn-secondary" href={externalLinks.gpt} label="לפתוח את AmazonIQ GPT">לפתוח את AmazonIQ GPT</ExternalLink>
            </div>
          </div>
          <ProductIllustration />
        </div>
      </Section>

      <Section eyebrow="שלוש שכבות מוצר" title="לראות, לחקור ולבחון תרחישים" className="py-6 lg:py-10">
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-3">
          {[
            ["AmazonIQ Dashboard", "לראות מה נכון עכשיו", "מכירות, הזמנות, יחידות, ליסטינגים, מצב buyable, שגיאות, עמלות, מלאי FBA, דוחות וסימנים שדורשים בדיקה."],
            ["AmazonIQ GPT", "לחקור מה השתנה ולמה", "שאלה רגילה במקום חיפוש בתפריטי דוחות: השוואת תקופות, בדיקת ASIN ו SKU, ליסטינגים, עמלות, מלאי וקובץ עלויות."],
            ["What If Lab", "לבחון מה יכול לקרות", "תרחישי מלאי, עמלות ותרומה על בסיס הנחות מפורשות. התוצאות מסומנות כהערכות ולא מוצגות כנתוני אמת של Amazon."],
          ].map(([name, title, text]) => (
            <article className="border-t pt-5" key={name} style={{ borderColor: "var(--border)" }}>
              <p className="english-tech text-sm font-semibold text-sky-700 dark:text-sky-300">{name}</p>
              <h2 className="mt-2 text-2xl font-semibold" style={{ color: "var(--text)" }}>{title}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="המחשת מוצר" title="תמונת מצב בלי מספרים מומצאים" className="py-6 lg:py-10">
        <ProductIllustration expanded />
        <p className="mt-4 text-sm" style={{ color: "var(--text-soft)" }}>המחשה בלבד. AmazonIQ מציג רק נתונים שאמזון החזירה לחשבון המורשה, ל Marketplace ולתקופה שנבחרו.</p>
      </Section>

      <Section eyebrow="תחומי כיסוי" title="נתונים שנועדו לעזור למוכר להבין איפה לבדוק קודם" className="py-6 lg:py-10">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map(([title, text]) => (
            <article className="border-t pt-4" key={title} style={{ borderColor: "var(--border)" }}>
              <h2 className="text-xl font-semibold" style={{ color: "var(--text)" }}>{title}</h2>
              <p className="mt-2 text-base leading-7" style={{ color: "var(--text-muted)" }}>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="חקירה בשפה טבעית" title="פשוט מתחילים מהשאלה העסקית" className="py-6 lg:py-10">
        <div className="grid gap-3 md:grid-cols-2">
          {questions.map((question) => <p className="border-r-2 border-sky-400 py-2 pr-4 text-lg leading-8" key={question} style={{ color: "var(--text-muted)" }}>{question}</p>)}
        </div>
        <p className="mt-5 text-base leading-7" style={{ color: "var(--text-soft)" }}>התשובה תלויה בנתונים, בתפקידים, ב Marketplace, באזור ובדוחות שאמזון מאפשרת לחשבון.</p>
      </Section>

      <Section eyebrow="חיבור אזורי ואמון" title="מודיעין בלי שליטה בחשבון" className="py-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>עבודה אזורית לפי Seller Central</h2>
            <p className="mt-3 text-lg leading-8" style={{ color: "var(--text-muted)" }}>החיבור נעשה לפי חשבון Seller Central אזורי. AmazonIQ מציג רק Marketplaces שאמזון מאשרת לחשבון, עם active workspace אחד בכל רגע. התמיכה משתנה לפי החשבון, האזור והנתונים הזמינים.</p>
            <p className="mt-3 text-base" style={{ color: "var(--text-soft)" }}>צפון אמריקה, אירופה, המזרח התיכון, אפריקה והודו, ואסיה פסיפיק, לפי הרשאה וזמינות בפועל.</p>
          </div>
          <div className="border-r-4 border-sky-400 bg-sky-50/65 p-5 dark:bg-sky-950/15">
            <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>מה המוצר בכוונה לא עושה</h2>
            <ul className="mt-4 grid gap-2 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              <li>אין בקשת סיסמת Seller Central, אין פעולות כתיבה ואין פרטי קונים.</li>
              <li>אין שינוי מחיר, ליסטינג, מלאי, הזמנה, החזר, משלוח או הודעה לקונה.</li>
              <li>אין Account Health מלא, Message Center מלא, Ads פעיל, התראות יזומות או זמינות מובטחת לכל dataset.</li>
              <li>AmazonIQ הוא מוצר עצמאי של Navines ואינו מאושר, מופעל או משויך ל Amazon.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="זמינות ותמחור" title="מתחילים להכיר, וממשיכים לפי מה שמתאים" className="py-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          <p className="text-lg leading-8" style={{ color: "var(--text-muted)" }}>אפשר להכיר את AmazonIQ באמצעות Free Limited Access. המשך השימוש דורש תוכנית פעילה. למחיר ההשקה המעודכן ולתנאים המלאים, עברו לעמוד התמחור של AmazonIQ. זמינות נתונים תלויה בחשבון, Marketplace, Region, הרשאות, זכאות לדוחות, rate limits ושירותי Amazon. דוחות מסוימים נוצרים באופן אסינכרוני ועלולים לקחת זמן.</p>
          <div className="flex flex-wrap content-start gap-3"><ExternalLink className="btn-primary" href={externalLinks.pricing} label="לתמחור AmazonIQ">לתמחור AmazonIQ</ExternalLink><ExternalLink className="btn-secondary" href={externalLinks.faq} label="לשאלות נפוצות של AmazonIQ">לשאלות נפוצות</ExternalLink></div>
        </div>
      </Section>

      <Section eyebrow="TalkToData ו AmazonIQ" title="שני מוצרים משלימים, שני שימושים שונים" className="py-6 lg:py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="border-t pt-5" style={{ borderColor: "var(--border)" }}><h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>TalkToData</h2><p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>נבנה לחיבור מגוון מערכות עסקיות, חנויות, דוחות ומקורות מידע. הוא מתאים לשיחה עסקית רחבה יותר סביב מערכות שהעסק כבר מפעיל.</p><a aria-label="לפתוח את TalkToData באתר החיצוני" className="mt-4 inline-flex font-semibold text-sky-700 dark:text-sky-300" href="https://talktodata.navines.com" rel="noopener noreferrer" target="_blank">לפתוח את TalkToData</a></article>
          <article className="border-t pt-5" style={{ borderColor: "var(--border)" }}><h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>AmazonIQ</h2><p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>נבנה במיוחד לעולם Amazon Seller Central, ולכן כולל מודל נתונים, דשבורד, שאלות, דוחות ומסלולי חקירה המותאמים למוכרי Amazon.</p><Link className="mt-4 inline-flex font-semibold text-sky-700 dark:text-sky-300" href="/solutions/amazon-sellers">לפתרונות למוכרי Amazon</Link></article>
        </div>
      </Section>

      <Section eyebrow="שאלות נפוצות" title="תשובות קצרות לפני החיבור" className="py-6 lg:py-10">
        <div className="grid gap-3">
          {faqs.map(([question, answer]) => <details className="border-b py-4" key={question} style={{ borderColor: "var(--border)" }}><summary className="cursor-pointer text-xl font-semibold" style={{ color: "var(--text)" }}>{question}</summary><p className="mt-3 max-w-4xl text-base leading-7" style={{ color: "var(--text-muted)" }}>{answer}</p></details>)}
        </div>
      </Section>

      <CTA title="רוצים להבין מה אפשר לראות בחשבון Amazon שלכם?" text="אפשר לפתוח את AmazonIQ ולבחון את המוצר, או לשלוח לנו הודעה קצרה בוואטסאפ על סוג הפעילות וה Marketplace שבו אתם מוכרים." />
    </>
  );
}

function ExternalLink({ href, label, className, children }: { href: string; label: string; className: string; children: ReactNode }) {
  return <a aria-label={label} className={className} href={href} rel="noopener noreferrer" target="_blank">{children}</a>;
}

function ProductIllustration({ expanded = false }: { expanded?: boolean }) {
  const rows = ["Money Snapshot", "Sales Pulse", "Product 360", "Seller Briefing", "Risk Radar", "Listing Issues", "FBA Inventory", "What Changed", "What If"];
  return (
    <div className={`border p-4 sm:p-5 ${expanded ? "" : "max-w-xl justify-self-end"}`} style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}><span className="english-tech text-sm font-semibold" style={{ color: "var(--text)" }}>AmazonIQ</span><span className="text-xs font-medium text-sky-700 dark:text-sky-300">המחשה בלבד</span></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {rows.map((row, index) => <div className={`border-t pt-3 ${index === 0 ? "sm:col-span-2" : ""}`} key={row} style={{ borderColor: "var(--border)" }}><p className="english-tech text-sm font-semibold" style={{ color: "var(--text)" }}>{row}</p><div className="mt-3 h-2 w-full rounded bg-sky-200/70 dark:bg-sky-300/20" /><div className="mt-2 h-2 w-2/3 rounded bg-slate-200 dark:bg-white/10" /></div>)}
      </div>
    </div>
  );
}
