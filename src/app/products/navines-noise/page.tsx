import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

const chromeStoreUrl = "https://chromewebstore.google.com/detail/navines-noise/nlhpkfadkikhcaplbjeaehkiajhpiigi";
const productUrl = "https://seo.navines.com/he/";

const scanAreas = [
  ["SEO", "כותרת ותיאור, קנוניקל, robots, שפת מסמך, נתונים מובנים ואותות טכניים נוספים שנמצאים בעמוד המרונדר."],
  ["תוכן", "כותרות, מבנה, קישורים, תמונות, תצוגות שיתוף וסימנים שעוזרים להבין אם העמוד מסביר את מטרתו בצורה ברורה."],
  ["ביצועים", "נתוני טעינה שנצפו בדפדפן, משאבים כבדים, משימות ארוכות, גודל DOM וסימנים שדורשים בדיקת עומק."],
  ["אמון", "HTTPS, תוכן מעורב, קישורי יצירת קשר ופרטיות וסימנים בסיסיים שעוזרים למשתמש להבין מי מפעיל את האתר."],
  ["נגישות", "שפת מסמך, טקסט חלופי, שמות נגישים לקישורים ולכפתורים, תוויות בטפסים ומבנה עמוד בסיסי."],
];

const workflow = [
  ["פותחים עמוד", "נכנסים לעמוד שרוצים לבדוק ולוחצים על התוסף."],
  ["מריצים סריקה", "NAVINES NOISE קורא את העמוד הפעיל רק לאחר פעולה מפורשת של המשתמש."],
  ["מקבלים סדר עדיפויות", "הממצאים מחולקים לפי תחום וחומרה ומוצגים לצד הראיה שנמצאה."],
  ["עוברים לתיקון", "אפשר לפתוח דוח מלא, לייצא מידע או להעתיק תקציר תיקון מוגבל לשימוש עם AI או עם מפתח."],
];

const faqs = [
  { question: "האם NAVINES NOISE שולח את תוכן העמוד לשרת?", answer: "בגרסה 1.0.0 הסריקה פועלת מקומית לאחר לחיצה. הדוח האחרון נשמר מקומית בדפדפן, והסריקה אינה נשלחת לנביא נס או לצד שלישי." },
  { question: "האם הציון הוא ציון של גוגל?", answer: "לא. זהו מדד פנימי וכיווני שנועד לסדר ממצאים. הוא אינו מבטיח דירוג, תנועה, המרות או אינדוקס." },
  { question: "האם הכלי מחליף Search Console או בדיקת נגישות מקצועית?", answer: "לא. הוא אינו כולל נתוני Search Console, אנליטיקה, קישורים נכנסים, לוגים, נתוני שדה מלאים או בדיקת נגישות, אבטחה וציות מלאה." },
  { question: "אפשר לבנות תוסף כזה עבור מערכת עסקית אחרת?", answer: "כן. נביא נס ישראל בע״מ בונה תוספים מותאמים לפי תהליך, הרשאות ויכולות API. התאמה לדפדפנים נוספים נבדקת לפי מגבלות הפרויקט והדפדפן." },
];

export const metadata = createMetadata({
  title: "NAVINES NOISE: תוסף לבדיקת SEO, ביצועים ואמון",
  description: "תוסף לדפדפן שסורק את העמוד הפעיל לפי SEO, תוכן, ביצועים, אמון ונגישות ומארגן פעולות לפי סדר עדיפות.",
  path: "/products/navines-noise",
});

export default function NavinesNoisePage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NAVINES NOISE",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Google Chrome",
    softwareVersion: "1.0.0",
    description: "Read only website intelligence for SEO, content, performance, trust and accessibility signals.",
    url: `${site.url}/products/navines-noise`,
    downloadUrl: chromeStoreUrl,
    publisher: { "@id": `${site.url}/#organization`, name: site.legalName },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "מוצרים", href: "/products" }, { name: "NAVINES NOISE", href: "/products/navines-noise" }])} />

      <Section eyebrow="מוצר חדש מבית נביא נס ישראל בע״מ" title="NAVINES NOISE: למצוא את האות בתוך הרעש" titleAs="h1" className="py-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
          <div>
            <p className="max-w-4xl text-xl leading-9 text-zinc-300">
              תוסף לדפדפן שמנתח את העמוד הפעיל, מרכז אותות של SEO, תוכן, ביצועים, אמון ונגישות ומחזיר רשימת פעולות שאפשר להבין, לתעד ולבדוק.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-400">
              במקום לעבור בין בדיקות מפוזרות, מקבלים תמונת מצב אחת עם ראיות, חומרה, מגבלות ותקציר תיקון לשימוש מבוקר עם AI או עם צוות הפיתוח.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href={chromeStoreUrl} rel="noopener noreferrer" target="_blank">להתקנה מ־Chrome Web Store</a>
              <a className="btn-secondary" href={productUrl} rel="noopener noreferrer" target="_blank">לעמוד NAVINES NOISE</a>
              <Link className="editorial-link inline-flex items-center" href="/blog/navines-noise-website-intelligence-extension">לקריאת המאמר</Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image alt="האייקון של NAVINES NOISE" className="h-36 w-36" height={144} priority src="/products/navines-noise-icon.png" width={144} />
          </div>
        </div>
      </Section>

      <Section eyebrow="מה נבדק" title="חמישה תחומים, דוח אחד ברור">
        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {scanAreas.map(([title, text], index) => (
            <article className="grid gap-3 py-6 md:grid-cols-[3rem_10rem_minmax(0,1fr)] md:items-start" key={title}>
              <span className="editorial-index">0{index + 1}</span>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="text-lg leading-8 text-zinc-300">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="דרך העבודה" title="מהעמוד הפעיל לתוכנית תיקון">
        <ol className="process-line">
          {workflow.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></li>)}
        </ol>
      </Section>

      <section className="border-y" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="section-eyebrow">פרטיות לפי פעולה</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">הסריקה מתחילה רק כשמבקשים אותה</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">בגרסה 1.0.0 התוסף משתמש בהרשאות activeTab, scripting ו־storage. הוא קורא את העמוד שנבחר רק לאחר לחיצה ושומר מקומית את הדוח האחרון כדי שאפשר יהיה לפתוח אותו שוב.</p>
          </div>
          <div className="mt-9 lg:mt-0">
            <p className="section-eyebrow">גבולות ברורים</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">כלי בדיקה, לא הבטחת תוצאה</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">הציונים הם מדדים פנימיים וכיווניים. הם אינם ציון של גוגל ואינם הסמכת אבטחה, נגישות, משפט או ציות. בדיקה רחבה עדיין יכולה לדרוש Search Console, אנליטיקה, נתוני שדה, לוגים ובדיקת מומחה.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="שאלות נפוצות" title="מה חשוב לדעת לפני הסריקה">
        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {faqs.map((faq) => <details className="py-5" key={faq.question}><summary className="cursor-pointer text-xl font-semibold text-white">{faq.question}</summary><p className="mt-3 max-w-4xl text-lg leading-8 text-zinc-300">{faq.answer}</p></details>)}
        </div>
      </Section>

      <CTA title="רוצים כלי חכם שמותאם לעבודה שלכם?" text="ספרו לנו איזו בדיקה, פעולה או החלטה חוזרת אצלכם. נבדוק אם נכון להפוך אותה לתוסף, כלי באתר או מערכת פנימית ברורה ובטוחה." />
    </>
  );
}
