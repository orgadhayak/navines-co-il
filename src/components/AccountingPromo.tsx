import Link from "next/link";
import { accountingPlugin } from "@/data/talktodata";
import { site } from "@/data/site";

const requestHref = `${site.whatsappHref}?text=${encodeURIComponent("שלום, אשמח לדבר עם הנתונים בתוכנת החשבוניות שלי או לבדוק חיבור פרטי. שם התוכנה והצורך שלי:")}`;
const questions = [
  ["מוצאים מסמך", "מצאו את החשבונית לפי המספר שלה."],
  ["מבינים תקופה", "סכמו את החשבוניות מהחודש, בנפרד לפי מטבע."],
  ["מגיעים מוכנים לשיחה", "אילו מסמכים קיימים ללקוח בתקופה שבחרתי?"],
];

export function AccountingPromo({ full = false }: { full?: boolean }) {
  const Heading = full ? "h1" : "h2";

  return (
    <section className="accounting-promo" aria-labelledby="accounting-title" dir="rtl">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="accounting-intro">
          <div>
            <p className="section-eyebrow">לדבר עם הנתונים · מוצר של נביא נס ישראל בע״מ</p>
            <Heading id="accounting-title" className="accounting-heading">דברו עם תוכנת החשבוניות שלכם</Heading>
            <p className="accounting-lead">המסמך שאתם מחפשים. הלקוח שעל הקו. התמונה של החודש. עכשיו אפשר להתחיל בשאלה, במקום לעבור בין דוחות.</p>
            <p className="accounting-copy">מחברים תוכנה נתמכת דרך TalkToData, פותחים את הפלאג ב־ChatGPT ושואלים בעברית על המידע הקיים. החיבור הרגיל מיועד לקריאה בלבד, גם לעובדים ולאנשי שירות מורשים. תוכנת החשבוניות נשארת מקור האמת.</p>
            <div className="accounting-actions">
              <a className="btn-primary" href={accountingPlugin.href} target="_blank" rel="noopener noreferrer">לפתיחת פלאג החשבוניות</a>
              <a className="btn-secondary" href={accountingPlugin.connectionHref} target="_blank" rel="noopener noreferrer">לחיבור התוכנה שלכם</a>
            </div>
            {!full && <Link className="editorial-link mt-5 inline-flex" href="/products/talktodata-accounting">איך זה עובד ומה אפשר לחבר?</Link>}
          </div>
          <aside className="accounting-questions" aria-label="דוגמאות לשאלות שאפשר לשאול">
            <p className="accounting-aside-title">מה תרצו לדעת היום?</p>
            <ol>
              {questions.map(([label, question], index) => (
                <li key={label}>
                  <span className="editorial-index" aria-hidden="true">0{index + 1}</span>
                  <div><h3>{label}</h3><p>״{question}״</p></div>
                </li>
              ))}
            </ol>
            <p className="accounting-note">דוגמאות לשאלות, לא נתוני לקוח. התשובה תלויה במידע ובהרשאות הזמינים בחיבור.</p>
          </aside>
        </div>

        <div className="accounting-connections">
          <div>
            <h3>מתחילים מהתוכנה שלכם</h3>
            <p>במסלול החיבור מופיעות מורנינג / חשבונית ירוקה (Morning), ריווחית אונליין (Rivhit Online), חשבונית אונליין (Invoice Online) וסאמיט (SUMIT). בתוכנת תקבול (Takbull) ניתן לאתר הזמנה קיימת לפי מזהה. זמינות החיבור והיקף הנתונים תלויים בספק, בסוג החשבון ובהרשאות; לא כל גרסה או יכולת נתמכת.</p>
          </div>
          <div>
            <h3>התוכנה שלכם לא מופיעה? דברו איתנו</h3>
            <p>אייקאונט (iCount), חשבשבת, פריוריטי (Priority), חשבונית פור יו (Invoice4u), הייפ / איזיקאונט (HYP / EasyCount), כספית, לירם או מליין לתזרים מזומנים (Malyan): אפשר לבקש בדיקת היתכנות לחיבור פרטי. אלה אינן הבטחות לחיבורים מוכנים.</p>
            <p>גם בלי API נבחן ייצוא נתונים או תהליך דפדפן מורשה, כשיש דרך בטוחה ובהתאם לתנאי השימוש. לא עוקפים הרשאות ולא מבטיחים שכל מערכת ניתנת לחיבור.</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <a className="editorial-link" href={requestHref} target="_blank" rel="noopener noreferrer">בקשו חיבור בוואטסאפ</a>
              <a className="editorial-link" href="mailto:hello@navines.com?subject=בקשה%20לחיבור%20תוכנת%20חשבוניות">שלחו לנו בקשה במייל</a>
            </div>
          </div>
        </div>

        {full && <div className="accounting-details">
          <h2>מתחברים, מגדירים הרשאות, מתחילים לשאול</h2>
          <ol className="accounting-steps">
            <li><strong>01 · בוחרים תוכנה</strong><p>בפורטל החיבור בודקים את הספק והחשבון המתאימים. אם אין מסלול מתאים, שולחים לנו בקשה לפני שמתחילים.</p></li>
            <li><strong>02 · מאשרים גישה</strong><p>בעל הרשאה מתאים מחבר את החשבון בתהליך הייעודי. אין לשלוח סיסמאות, מפתחות API או מסמכים רגישים בצ׳אט, במייל או בוואטסאפ.</p></li>
            <li><strong>03 · שואלים ובודקים</strong><p>פותחים את הפלאג ושואלים על מסמכים קיימים. מסכמים בנפרד לפי סוג מסמך ומטבע, בודקים אם התוצאה חלקית ומאמתים החלטות במערכת המקור.</p></li>
          </ol>
          <h2 className="mt-10">עסקי Pro: כמה מערכות, תמונה עסקית אחת</h2>
          <p>בשיחת אפיון נגדיר את הנתונים וההרשאות, ונבחן שילוב של כמה תוכנות בדשבורד מותאם: יתרות, הכנסות, הוצאות, מגמות ותרחישי ״מה אם״. אפשר לבנות גם סוכנים, אוטומציות ופעולות כתיבה במסגרת פתרון נפרד ובהרשאות שתבחרו. בפורטל מוצגת הדגמה עם נתונים מלאכותיים, לא נתוני לקוחות.</p>
          <p>הפלאג הציבורי אינו מפיק, משנה או שולח חשבוניות ואינו מבצע תשלומים או החזרים. הניתוח מסייע בבדיקה ואינו מחליף הנהלת חשבונות או ייעוץ מקצועי. אין להסיק יתרת חוב או הכנסה מחיבור סכומים של חשבוניות וקבלות ללא בדיקת כפילויות ומשמעות המסמכים.</p>
          <div className="accounting-actions">
            <a className="btn-primary" href={requestHref} target="_blank" rel="noopener noreferrer">נאפיין יחד את החיבור שלכם</a>
            <a className="editorial-link" href="tel:+972548180200"><bdi dir="ltr">+972-54-818-0200</bdi></a>
            <Link className="editorial-link" href="/services/business-systems-chatgpt-integration">חיבור מערכות עסקיות ל־ChatGPT</Link>
          </div>
        </div>}
        <p className="accounting-note mt-8">המוצרים שלנו זמינים בעולם בשם <a href="https://talktodata.navines.com" target="_blank" rel="noopener noreferrer">TalkToData</a>. <Link href="/plugins">הכירו גם את החיבורים למסחר, שיווק וחיפוש</Link>. משהו לא הסתדר או חסר לכם חיבור? נשמח לשמוע ולעזור לבדוק.</p>
      </div>
    </section>
  );
}
