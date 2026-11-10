import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { featuredTalkToData } from "@/data/talktodata";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "לדבר עם הנתונים: פלאגינים וחיבורים לעסק",
  description: "מוצרי נביא נס ישראל בע״מ לשיחה עם נתוני העסק: חמישה חיבורים נבחרים לצד פיתוח פלאגינים וסביבות עבודה מותאמות.",
  path: "/plugins",
});

const requestHref = `${site.whatsappHref}?text=${encodeURIComponent("שלום, אשמח לבדוק חיבור מערכת או פיתוח פלאגין מותאם. המערכת והמשימה שרציתי לחבר הן:")}`;

export default function PluginsPage() {
  return (
    <>
      <Section eyebrow="מוצרי נביא נס ישראל בע״מ" title="לדבר עם הנתונים" titleAs="h1" className="pb-10">
        <p className="max-w-4xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          נביא נס ישראל בע״מ בונה מוצרים שמאפשרים לדבר עם נתוני העסק מתוך סביבת העבודה שלכם. משפחת החיבורים הבינלאומית שלנו נקראת TalkToData: מתחילים ממקור נתונים מאושר ושואלים שאלות בהקשר שלו. כשצריך תהליך אחר, אנחנו מאפיינים ובונים פלאגין, חיבור מותאם, שרת MCP או סביבת עבודה ייעודית.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="btn-primary" href={requestHref} rel="noopener noreferrer" target="_blank">ספרו לנו מה תרצו לחבר</a>
          <a className="btn-secondary" href="https://talktodata.navines.com/connections" rel="noopener noreferrer" target="_blank">לכל החיבורים הבינלאומיים</a>
        </div>
      </Section>

      <Section eyebrow="המוצרים שלנו" title="חמישה מקומות להתחיל מהם" className="pt-8">
        <p className="max-w-4xl leading-7" style={{ color: "var(--text-muted)" }}>
          אלה חמישה מסלולים נבחרים, לא כל הקטלוג. חלקם פלאגינים בתוך ChatGPT וחלקם GPT ייעודיים. בכל מקרה צריך לחבר חשבון מתאים ולאשר הרשאות לפני שמתקבלים נתונים. זמינות היכולות תלויה במקור ובהרשאות שלכם.
        </p>
        <div className="mt-8 divide-y border-y" style={{ borderColor: "var(--border)" }}>
          {featuredTalkToData.map((item, index) => (
            <article className="grid gap-4 py-7 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,2fr)] md:gap-7" key={item.name} style={{ borderColor: "var(--border)" }}>
              <span className="editorial-index">0{index + 1}</span>
              <div>
                <p className="text-sm font-semibold text-glowred">{item.kind} · {item.source}</p>
                <h3 className="mt-2 text-xl font-semibold" dir="ltr" style={{ color: "var(--text)" }}>{item.name}</h3>
              </div>
              <div>
                <p className="leading-7" style={{ color: "var(--text-muted)" }}>{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <a className="editorial-link" href={item.href} rel="noopener noreferrer" target="_blank">לפתיחה ב־ChatGPT</a>
                  <a className="editorial-link" href={item.connectionHref} rel="noopener noreferrer" target="_blank">על החיבור וההרשאות</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="מהקיים אל המותאם" title="לא חייבים להתאים את העסק לתוכנה">
        <p className="max-w-4xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          יש מערכות מדף טובות, אבל לעסק עם תהליך ייחודי כדאי לפעמים לבנות סביבת עבודה ששייכת לו ומתפתחת איתו. אנחנו מתחילים בשאלה עסקית ובמקור המידע, בודקים מי רשאי לגשת אליו ואיך מאמתים תשובות, ורק אז בוחרים ארכיטקטורה.
        </p>
        <div className="mt-9 grid gap-8 md:grid-cols-3">
          <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}><h3 className="text-xl font-semibold">חיבור למערכת קיימת</h3><p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>API רשמי, הרשאה מתאימה או ייצוא מסודר יכולים לספק נתונים למשימה ממוקדת. בוחנים מגבלות ספק, פרטיות ובדיקות לפני פיתוח.</p></div>
          <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}><h3 className="text-xl font-semibold">כשאין API מתאים</h3><p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>בודקים ייצוא נתונים, תהליך ידני מבוקר או כלי דפדפן מורשה כאשר תנאי השימוש מאפשרים זאת. אם אין דרך בטוחה וחוקית, אומרים זאת ולא מבטיחים חיבור.</p></div>
          <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}><h3 className="text-xl font-semibold">נכס עבודה משלכם</h3><p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>אפשר לבנות מערכת, פלאגין צוותי, MCP או כלי פנימי לפי המשימה. נתונים רגישים, פעולות כתיבה ושליחה דורשים בקרות ואישור אנושי בהתאם לסיכון.</p></div>
        </div>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link className="editorial-link" href="/services/custom-ai-plugins-mcp-workspaces">פיתוח פלאגינים וסביבות עבודה</Link>
          <Link className="editorial-link" href="/services/api-integrations">Connector ו־API מותאם</Link>
          <Link className="editorial-link" href="/services/business-systems-chatgpt-integration">חיבור מערכות עסקיות ל־ChatGPT</Link>
        </div>
      </Section>

      <Section eyebrow="ממשיכים לפתח" title="עוד חיבורים נבחנים כל הזמן" className="pt-8">
        <p className="max-w-4xl leading-7" style={{ color: "var(--text-muted)" }}>
          TalkToData מציג חיבורים נוספים מעבר לחמישה שמופיעים כאן. אנחנו ממשיכים לבדוק מקורות מידע, מגבלות והרשאות ולפתח פתרונות חדשים. לא כל רעיון הופך מיד לחיבור ציבורי; קודם בודקים מה עובד בפועל ומה מתאים למשתמשים.
        </p>
        <a className="editorial-link mt-5 inline-flex" href="https://talktodata.navines.com/connections" rel="noopener noreferrer" target="_blank">לרשימת החיבורים העדכנית</a>
      </Section>
      <CTA title="יש לכם מערכת שתרצו לדבר עם הנתונים שלה?" text="כתבו איזו מערכת יש לכם, איזו שאלה אתם רוצים לשאול ומה כבר אפשר לייצא ממנה. נבדוק את דרך החיבור, ההרשאות והשלב הראשון שמתאים לפרויקט." whatsappHref={requestHref} whatsappLabel="שלחו בקשת חיבור בוואטסאפ" secondaryHref="/contact" secondaryLabel="יצירת קשר במייל" />
    </>
  );
}
