import Link from "next/link";
import { CTA } from "@/components/CTA";
import { HebrewToolsClient } from "@/components/HebrewToolsClient";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "20 כלים שימושיים בעברית לבדיקות דיגיטליות",
  description: "20 כלים מקומיים וחינמיים בעברית מבית נביא נס ישראל בע״מ: קישורים, QR מתמונה, אימיילים, בקשות תשלום, הפניות, קמפיינים וחשבונות.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <Section eyebrow="כלים שימושיים בעברית" title="בדיקה קטנה לפני פעולה גדולה" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">
          בנינו 20 כלים קצרים שעוזרים לעצור לרגע לפני שלוחצים, סורקים QR, מגיבים, מאשרים תשלום, עולים עם קמפיין או מטפלים באירוע דיגיטלי. הם פועלים בדפדפן, בעברית, בלי הרשמה ובלי לשלוח את הקלט לשרת. התוצאות הן סימנים לבדיקה, לא הבטחה שהקישור, ההודעה או הבקשה בטוחים.
        </p>
        <HebrewToolsClient />
      </Section>

      <section className="tools-trust-band">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div><span>01</span><h2>פרטיות מקומית</h2><p>הכלים החדשים מנתחים את הקלט בדפדפן. אל תכניסו סיסמאות, קודים או מידע שלא הייתם מפרסמים.</p></div>
          <div><span>02</span><h2>סימנים, לא פסק דין</h2><p>HTTPS, דמיון בכתיב או הודעה דחופה הם רק חלק מהתמונה. במקרה רגיש מאמתים מול מקור רשמי.</p></div>
          <div><span>03</span><h2>כלים שנבנים סביב בעיה</h2><p>כך גם בנינו את <a className="tools-inline-link" href="https://checklink.ai" rel="noopener noreferrer" target="_blank">CheckLink.ai</a>, את <a className="tools-inline-link" href="https://talktodata.navines.com" rel="noopener noreferrer" target="_blank">TalkToData</a> ואת <a className="tools-inline-link" href="https://iq.navines.com" rel="noopener noreferrer" target="_blank">AmazonIQ</a>: מתחילים מצורך ברור ובונים שימוש שאפשר להבין.</p></div>
        </div>
      </section>

      <Section eyebrow="עוד כלים מבית נביא נס" title="רוצים בדיקה עמוקה יותר?">
        <div className="tools-related-links">
          <a href="https://checklink.ai" rel="noopener noreferrer" target="_blank"><strong>CheckLink.ai</strong><span>סריקה רחבה יותר של קישורים וסימני אמון</span></a>
          <Link href="/products"><strong>כל המוצרים</strong><span>ל־TalkToData, AmazonIQ, Beacon וכלי עבודה נוספים יש עמודים וקישורים מסודרים.</span></Link>
          <Link href="/blog/business-tools-built-by-navines-israel"><strong>איך נבנו הכלים</strong><span>הסיפור, השימושים והדרך להפוך צורך לכלי</span></Link>
          <Link href="/blog/qr-email-and-link-safety-tools"><strong>המדריך לכלים החדשים</strong><span>QR מתמונה, כותרות אימייל, בקשות תשלום ושרשראות הפניה</span></Link>
        </div>
      </Section>
      <CTA title="יש לכם רעיון לכלי שיעזור לגולשים שלכם?" text="ספרו לנו מה המשתמשים שלכם צריכים לעשות. נחשוב על כלי קטן, ברור ושימושי שאפשר להוסיף לאתר ולתת בו ערך אמיתי." />
    </>
  );
}
