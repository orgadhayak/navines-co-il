import Link from "next/link";
import { BlogCard, ProductCard } from "@/components/Cards";
import { HeroVisual } from "@/components/HeroVisual";
import { OptimizationHubShowcase } from "@/components/OptimizationHubShowcase";
import { Section } from "@/components/Section";
import { blogPosts, products, serviceEcosystem, site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "פתרונות בינה מלאכותית, אתרים ואוטומציה לעסקים בישראל",
  description: "נביא נס ישראל בע״מ עוזרת לעסקים לדבר עם הנתונים באמצעות ChatGPT, לבנות אתר, חנות, מערכת, אוטומציה ומרכז אופטימיזציה מלא.",
});

const ecosystemLinks: Record<string, string> = {
  "בינה מלאכותית ואוטומציה": "/services/ai-automation",
  "פיתוח אתרים, מערכות וקוד": "/services/web-development",
  "אופטימיזציה, מהירות וביצועים": "/services/website-speed-optimization",
  "תשתיות, אחסון ואבטחת תקשורת": "/services/api-integrations",
  "אבטחה, תיקון תקלות ושחזור": "/services/security-recovery",
  "איקומרס ומרקטפלייסים": "/services/ecommerce",
  "שיווק דיגיטלי וצמיחה": "/services/seo-digital-marketing",
  "נתונים, מודיעין עסקי ואסטרטגיה": "/services/business-intelligence",
  "מובייל ואפליקציות": "/services/mobile-app-development",
  "בדיקות איכות וניטור משתמשים": "/services/consulting",
  "מדיה, נכסים ותוכן דיגיטלי": "/services/consulting",
  "כלים מבית נביא נס ישראל בע״מ": "/products",
};

const commandStats = [
  { label: "פניות ושירות", value: "פחות פספוסים", text: "וואטסאפ, אתר ומשימות במקום אחד", href: "/services/ai-automation" },
  { label: "מהירות ואמון", value: "טעינה ברורה", text: "אתר שמרגיש יציב גם במובייל", href: "/optimization-hub" },
  { label: "נתונים ו־ChatGPT", value: "שיחה עם העסק", text: "שאלות רגילות על מכירות, מלאי ודוחות", href: "/services/chatgpt-business-data" },
];

const improvementRows = [
  { title: "רוצים לשאול את הנתונים שלכם שאלות רגילות", text: "נחבר את ChatGPT למכירות, הזמנות, מלאי, לקוחות, מוצרים ודוחות כדי לקבל תשובות בלי לחפש ידנית במערכות.", status: "TalkToData", href: "/services/chatgpt-business-data" },
  { title: "האתר איטי או לא מביא מספיק פניות", text: "נבדוק מה מעכב טעינה, מסר, מובייל ואמון, ונראה מה כדאי לתקן קודם.", status: "בדיקת אתר", href: "/services/website-speed-optimization" },
  { title: "העסק עובד ידנית מדי", text: "נאתר פעולות שחוזרות על עצמן ונחבר אוטומציה פשוטה לפניות, משימות ודוחות.", status: "אוטומציה", href: "/services/ai-automation" },
  { title: "החנות קיימת אבל קשה לגדול איתה", text: "נסדר מוצרים, ביצועים, מדידה ותהליך רכישה כדי להפחית נטישה ולשפר מכירות.", status: "איקומרס", href: "/services/ecommerce" },
];

const systemRows = [
  { title: "ChatGPT לנתוני העסק", text: "שיחה פשוטה עם מכירות, הזמנות, מלאי, לקוחות ודוחות.", href: "/services/chatgpt-business-data" },
  { title: "אתרי חברה ותדמית", text: "אתר ברור, מהיר ומשכנע שמוביל לפנייה.", href: "/services/web-development" },
  { title: "מערכות פנימיות", text: "כלי עבודה שמסדרים לקוחות, משימות, נתונים ותהליכים.", href: "/services/web-development" },
  { title: "חנויות ומרקטפלייסים", text: "שופיפיי, ווקומרס, אמזון ואיביי עם תשתית מכירה מסודרת.", href: "/services/ecommerce" },
];

const controlPanelServices = [
  { title: "לדבר עם הנתונים של העסק באמצעות ChatGPT", what: "חיבור נתונים עסקיים לשכבת שיחה פשוטה.", solves: "במקום לחפש בדוחות, שואלים על מכירות, הזמנות, מלאי, לקוחות וביצועים.", why: "בעל העסק מקבל תשובה ברורה מהר יותר ומבין מה דורש פעולה.", href: "/services/chatgpt-business-data" },
  { title: "בינה מלאכותית ואוטומציה", what: "תהליכים חכמים שמטפלים בפניות, משימות ומידע.", solves: "פחות עבודה ידנית ופחות דברים שנופלים בין הכיסאות.", why: "הצוות מגיב מהר יותר והלקוח מקבל תשובה ברורה.", href: "/services/ai-automation" },
  { title: "אתרים ומערכות", what: "אתרי חברה, פורטלים, דשבורדים ומערכות מותאמות.", solves: "אתר שלא מביא תוצאות או תהליך עסקי שמנוהל בקבצים.", why: "העסק מקבל תשתית שאפשר למדוד, לשפר ולהרחיב.", href: "/services/web-development" },
  { title: "איקומרס", what: "חנויות, עמודי מוצר, מלאי, תשלום ומרקטפלייסים.", solves: "חנות שקשה לנהל או לקוחות שנוטשים לפני רכישה.", why: "תהליך קנייה ברור ומהיר עוזר להגדיל מכירות.", href: "/services/ecommerce" },
  { title: "מרכז אופטימיזציה", what: "מהירות, מובייל, קוד, שרתים, תמונות, מדידה ותשתיות.", solves: "אתר שנראה תקין אבל איטי, כבד או לא יציב.", why: "ביצועים טובים משפרים אמון, פניות וקידום אורגני.", href: "/optimization-hub" },
  { title: "אבטחה ושחזור", what: "הקשחה, ניקוי נוזקות, תיקון תקלות ושחזור אתרים.", solves: "אתר שנפרץ, נפל, הפסיק לשלוח פניות או מציג שגיאות.", why: "זמינות ואמון הם בסיס לעסק דיגיטלי רציני.", href: "/services/security-recovery" },
  { title: "תשתיות וביצועים", what: "דומיין, אחסון, קלאודפלייר, מיילים, קאש וניטור.", solves: "תקלות שחוזרות, מיילים לספאם או אתר לא יציב.", why: "תשתית מסודרת מורידה רעש תפעולי ומונעת הפתעות.", href: "/services/api-integrations" },
  { title: "נתונים ומודיעין עסקי", what: "דוחות, ניתוח נתונים, ניטור מחירים ותובנות ניהול.", solves: "החלטות שמתקבלות בלי תמונה ברורה.", why: "נתונים טובים עוזרים לדעת איפה להשקיע ומה לעצור.", href: "/services/business-intelligence" },
  { title: "שיווק דיגיטלי", what: "קידום אורגני, פרסום, תוכן, מוניטין ומדידה.", solves: "תנועה שלא הופכת לפניות או קמפיינים שלא ברור מה תרמו.", why: "שיווק שמחובר למדידה מאפשר שיפור אמיתי לאורך זמן.", href: "/services/seo-digital-marketing" },
  { title: "בדיקות איכות וניטור", what: "בדיקות לפני השקה, ניטור תקלות וחוויית משתמש.", solves: "באגים, טפסים שבורים ותקלות שמתגלות מאוחר מדי.", why: "בדיקות וניטור שומרים על חוויה מקצועית ועל שקט בעסק.", href: "/services/consulting" },
];

const monitoringRows = [
  { label: "ChatGPT לנתונים", text: "לשאול כמה מכרנו, מה ירד, איזה מוצר מוביל ואיפה צריך טיפול.", href: "/services/chatgpt-business-data" },
  { label: "ניטור", text: "לזהות האטות, נפילות ותקלות לפני שהלקוח מדווח.", href: "/products" },
  { label: "ביצועים", text: "להבין מה כבד, מה מעכב ומה כדאי לתקן ראשון.", href: "/optimization-hub" },
  { label: "אוטומציה", text: "להפוך פנייה, סיכום, משימה ודוח לתהליך מסודר.", href: "/services/ai-automation" },
];

export default function HomePage() {
  const latestPosts = [...blogPosts].sort((first, second) => second.publishedAt.localeCompare(first.publishedAt)).slice(0, 3);
  const talkToDataProduct = products.find((product) => product.slug === "talk-to-data");

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-7 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-11">
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="command-glass rounded-full px-4 py-2 text-sm font-black text-glowred">מרכז פיקוד דיגיטלי לעסקים</span>
            <span className="command-glass rounded-full px-4 py-2 text-sm font-black text-zinc-300">מערכות פעילות, נתונים ואוטומציה</span>
          </div>
          <h1 className="max-w-4xl text-[2.85rem] font-black leading-[1.02] text-white sm:text-5xl md:text-6xl">מערכות בינה מלאכותית, אתרים, אוטומציה ותשתיות דיגיטליות לעסקים</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">נביא נס ישראל בע״מ עוזרת לבעלי עסקים להפוך אתר, חנות, מערכת או רעיון לתשתית שעובדת ביום יום. אנחנו מחברים בין לקוחות, נתונים, תפעול ומכירות כדי לחסוך זמן, להקטין טעויות וליצור עסק דיגיטלי ברור יותר.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ בחינם
            </a>
            <Link className="btn-secondary" href="/products">
              ראו כלים ומוצרים
            </Link>
            <a className="btn-secondary" href="https://analyze.navines.com" rel="noreferrer" target="_blank">
              בדקו את האתר
            </a>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">לא בטוחים מאיפה להתחיל? כתבו לנו בוואטסאפ כמה מילים על האתר, החנות או המערכת, ונכוון אתכם בצורה פשוטה וחברית.</p>
        </div>
        <HeroVisual />
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="command-glass rounded-[1.65rem] p-5">
          <p className="text-sm font-black text-glowred">סטטוס מערכת</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-white">העסק הדיגיטלי צריך לעבוד כמו מערכת אחת</h2>
          <p className="mt-3 text-base leading-7 text-zinc-300">לא רק אתר יפה. גם פניות, מהירות, אבטחה, מדידה, אוטומציה וכלים שמחזיקים את היום יום.</p>
          <a className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-purple-200/25 bg-purple-500/18 px-6 py-2.5 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-purple-500/25" href={site.whatsappHref}>
            רוצים שנבדוק מה אפשר לשפר אצלכם?
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {commandStats.map((metric) => (
            <Link className="command-glass group rounded-[1.4rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={metric.href} key={metric.label}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-black text-zinc-400">{metric.label}</span>
                <span className="status-pip bg-purple-200 text-purple-200" />
              </div>
              <strong className="mt-4 block text-2xl font-black text-white">{metric.value}</strong>
              <span className="mt-2 block text-base leading-7 text-zinc-400">{metric.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="command-glass overflow-hidden rounded-[1.8rem] p-4 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-5">
          <div className="rounded-[1.45rem] bg-black p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-purple-200/24 bg-purple-500/14 px-4 py-1.5 text-sm font-black text-glowred">השירות החם עכשיו</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-sm font-black text-zinc-300">TalkToData</span>
            </div>
            <h2 className="mt-4 text-[2.2rem] font-black leading-tight text-white md:text-5xl">לדבר עם הנתונים של העסק באמצעות ChatGPT</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">עסק יכול לחבר את הנתונים שלו ל־ChatGPT ולשאול שאלות רגילות על מכירות, הזמנות, מלאי, לקוחות, מוצרים, ביצועים ודוחות בלי להסתבך עם מערכות מורכבות.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {["כמה מכרנו החודש?", "איזה מוצר הכי נמכר?", "איזה לקוחות לא חזרו?", "אילו הזמנות דורשות טיפול?"].map((question) => (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-base font-black text-zinc-200" key={question}>
                  {question}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href={site.whatsappHref}>
                רוצים לדבר עם הנתונים שלכם? דברו איתנו בוואטסאפ
              </a>
              <Link className="btn-secondary" href="/services/chatgpt-business-data">
                לעמוד השירות
              </Link>
            </div>
          </div>
          <div className="mt-4 grid gap-3 lg:mt-0">
            <a className="dashboard-row rounded-[1.35rem] p-4 transition" href="https://talktodata.navines.com" rel="noreferrer" target="_blank">
              <p className="text-sm font-black text-glowred">דוגמה אמיתית שבנינו</p>
              <h3 className="mt-2 text-3xl font-black text-white">TalkToData</h3>
              <p className="mt-2 text-lg leading-8 text-zinc-300">Your data. Your ChatGPT. One conversation.</p>
              <span className="mt-4 inline-flex rounded-full border border-purple-200/24 bg-purple-500/14 px-4 py-2 text-base font-black text-white">לצפייה בכלי</span>
            </a>
            {talkToDataProduct ? (
              <Link className="dashboard-row rounded-[1.35rem] p-4 transition" href="/products">
                <p className="text-sm font-black text-glowred">כלים ומוצרים</p>
                <h3 className="mt-2 text-2xl font-black text-white">{talkToDataProduct.hebrewName}</h3>
                <p className="mt-2 text-base leading-7 text-zinc-300">{talkToDataProduct.solves}</p>
              </Link>
            ) : null}
            <a className="dashboard-row rounded-[1.35rem] p-4 transition" href={site.whatsappHref}>
              <p className="text-sm font-black text-glowred">לא בטוחים אם זה אפשרי?</p>
              <h3 className="mt-2 text-2xl font-black text-white">שלחו לנו איזו מערכת יש לכם ונבדוק איך אפשר לחבר אותה</h3>
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="מה אפשר לשפר אצלכם?" title="מתחילים מהבעיה העסקית, לא מהטכנולוגיה" className="py-8 lg:py-11">
        <div className="grid gap-3 lg:grid-cols-2">
          {improvementRows.map((row) => (
            <Link className="dashboard-row group rounded-[1.35rem] p-4 transition" href={row.href} key={row.title}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-black leading-tight text-white">{row.title}</h3>
                <span className="rounded-full border border-purple-200/20 bg-purple-500/14 px-3 py-1 text-sm font-black text-glowred">{row.status}</span>
              </div>
              <p className="mt-3 text-base leading-7 text-zinc-300">{row.text}</p>
              <span className="mt-4 inline-flex text-base font-black text-silver transition group-hover:text-white">לבדוק את הכיוון הזה</span>
            </Link>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="btn-primary" href={site.whatsappHref}>
            שלחו הודעה קצרה ונכוון אתכם
          </a>
          <Link className="btn-secondary" href="/optimization-hub">
            ראו את מרכז האופטימיזציה
          </Link>
        </div>
      </Section>

      <Section eyebrow="מי אנחנו" title="בונים תשתית דיגיטלית חכמה, לא רק אתר יפה" className="py-8 lg:py-12">
        <div className="grid gap-5 lg:grid-cols-2">
          <p className="text-lg leading-8 text-zinc-300">נביא נס ישראל בע״מ בונה אתרים מהירים, חנויות, מערכות ניהול, אוטומציות וכלי בינה מלאכותית שמטפלים בבעיות אמיתיות: פניות שמתפספסות, עבודה ידנית, אתר שלא מביא תוצאות או חנות שקשה לנהל.</p>
          <p className="text-lg leading-8 text-zinc-300">אנחנו מסתכלים על האתר כנכס עסקי ולא כעמוד יפה בלבד. הוא צריך להביא אמון, פניות ומכירות, להתחבר לכלים הנכונים, להיטען מהר ולהיות מספיק יציב כדי ללוות את העסק לאורך זמן.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-secondary" href="/about">
            קראו על החברה
          </Link>
          <a className="btn-primary" href={site.whatsappHref}>
            דברו איתנו בוואטסאפ
          </a>
        </div>
      </Section>

      <Section eyebrow="מערכות שאנחנו בונים" title="כלים שמסדרים את העבודה, לא רק נראים טוב במסך" className="py-8 lg:py-11">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {systemRows.map((row) => (
            <Link className="command-glass group rounded-[1.35rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={row.href} key={row.title}>
              <span className="status-pip bg-purple-200 text-purple-200" />
              <h3 className="mt-4 text-2xl font-black leading-tight text-white">{row.title}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-400">{row.text}</p>
              <span className="mt-4 inline-flex text-base font-black text-glowred transition group-hover:text-white">לפרטים</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="לוח שירותים" title="בחרו את האזור בעסק שצריך שיפור" className="py-8 lg:py-11">
        <div className="command-glass overflow-hidden rounded-[1.8rem] p-2">
          {controlPanelServices.map((service, index) => (
            <Link className="group grid gap-3 rounded-[1.35rem] px-4 py-4 transition hover:bg-purple-500/10 md:grid-cols-[0.85fr_1fr_1fr_1fr_auto] md:items-center" href={service.href} key={service.title}>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-purple-200/20 bg-purple-500/12 text-sm font-black text-glowred">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-black leading-tight text-white">{service.title}</h3>
              </div>
              <p className="text-sm leading-6 text-zinc-300"><strong className="block text-silver">מה זה</strong>{service.what}</p>
              <p className="text-sm leading-6 text-zinc-300"><strong className="block text-silver">מה זה פותר</strong>{service.solves}</p>
              <p className="text-sm leading-6 text-zinc-300"><strong className="block text-silver">למה זה חשוב</strong>{service.why}</p>
              <span className="inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-black text-glowred transition group-hover:border-purple-200/45 group-hover:bg-purple-500/14 group-hover:text-white">פתחו</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-secondary" href="/services">
            לכל השירותים
          </Link>
          <a className="btn-primary" href={site.whatsappHref}>
            לא בטוחים מאיפה להתחיל? כתבו לנו
          </a>
        </div>
      </Section>

      <Section eyebrow="ניטור, ביצועים ואוטומציה" title="מערכת חכמה שמראה מה קורה ומציעה את הצעד הבא" className="py-8 lg:py-11">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="command-glass rounded-[1.8rem] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-base font-black text-glowred">מצב עסק דיגיטלי</p>
                <h3 className="mt-2 text-3xl font-black leading-tight text-white">פחות ניחושים. יותר שליטה.</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-200">
                <span className="status-pip bg-emerald-300" />
                מוכן לבדיקה
              </span>
            </div>
            <p className="mt-4 text-lg leading-8 text-zinc-300">אנחנו מחברים בין האתר, החנות, הנתונים והפעולות שחוזרות על עצמן. כך אפשר לראות איפה יש עומס, מה צריך תיקון, ואיפה אוטומציה פשוטה יכולה לחסוך זמן כבר עכשיו.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn-primary" href={site.whatsappHref}>
                דברו איתנו בוואטסאפ
              </a>
              <Link className="btn-secondary" href="/products">
                ראו כלים שבנינו
              </Link>
            </div>
          </div>
          <div className="grid gap-3">
            {monitoringRows.map((row) => (
              <Link className="dashboard-row group rounded-[1.25rem] p-4 transition" href={row.href} key={row.label}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-white">{row.label}</h3>
                  <span className="rounded-full border border-purple-200/20 bg-purple-500/12 px-3 py-1 text-sm font-black text-glowred">לחיץ</span>
                </div>
                <p className="mt-2 text-base leading-7 text-zinc-300">{row.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="מרכז אופטימיזציה" title="כל שירותי האופטימיזציה של נביא נס ישראל בע״מ במקום אחד" className="py-8 lg:py-12" id="optimization-hub">
        <p className="mb-6 max-w-4xl text-lg leading-8 text-zinc-300">
          זה החלק שמטפל במה שקורה מאחורי הקלעים: מהירות, קוד, מובייל, שרתים, קלאודפלייר, אבטחה, ניטור, מיילים ותמונות.
          אם האתר נראה תקין אבל איטי, לא יציב, לא נמדד נכון או מפספס פניות, כאן מתחילים לעשות סדר.
        </p>
        <OptimizationHubShowcase compact />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-secondary" href="/optimization-hub">
            לעמוד מרכז האופטימיזציה
          </Link>
          <a className="btn-primary" href={site.whatsappHref}>
            שלחו לנו הודעה ונכוון אתכם
          </a>
        </div>
      </Section>

      <Section eyebrow="כל השירותים" title="כל השירותים מתוך האקוסיסטם של המותג, בעברית וללקוחות בישראל" className="py-8 lg:py-12" id="service-catalog">
        <p className="mb-6 max-w-4xl text-lg leading-8 text-zinc-300">
          כאן רואים את התמונה המלאה: אופטימיזציה, תשתיות, אבטחה, שיווק, איקומרס, אפליקציות, בדיקות, נתונים וכלי בינה מלאכותית.
          כל תג מוביל לעמוד השירות או הכלים שמתאים לתחום.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {serviceEcosystem.map((group) => (
            <article className="command-glass group rounded-[1.45rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" key={group.title}>
              <Link className="flex items-start justify-between gap-4 text-2xl font-black text-white transition hover:text-glowred" href={ecosystemLinks[group.title] || "/services"}>
                <span>{group.title}</span>
                <span className="mt-1 rounded-full border border-purple-200/18 bg-purple-500/12 px-3 py-1 text-sm text-glowred">פתחו</span>
              </Link>
              <p className="mt-2 text-base leading-7 text-zinc-400">{group.intro}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Link className="tag hover:bg-purple-500/12 hover:shadow-[0_0_22px_rgba(168,85,247,0.12)]" href={ecosystemLinks[group.title] || "/services"} key={item}>
                    {item}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="כלים ומוצרים" title="כלים שעוזרים לראות בעיות לפני שהן עולות כסף" className="py-8 lg:py-12">
        <p className="mb-6 max-w-4xl text-lg leading-8 text-zinc-300">אנחנו גאים בכלים שבנינו, כי הם נולדו מתוך עבודה אמיתית עם אתרים, חנויות, נתונים ותהליכים עסקיים. המטרה פשוטה: לראות מהר יותר מה קורה, לקבל החלטה טובה יותר ולחסוך עבודה ידנית.</p>
        <div className="grid gap-5 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-6">
          <Link className="btn-secondary" href="/products">
            לכל הכלים והמוצרים
          </Link>
        </div>
      </Section>

      <Section eyebrow="בלוג" title="מדריכים קצרים לקבלת החלטות חכמות יותר" className="py-8 lg:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-6">
          <Link className="btn-secondary" href="/blog">
            לכל המאמרים
          </Link>
        </div>
      </Section>

      <Section eyebrow="יצירת קשר" title="יש לכם אתר, חנות או מערכת שצריך לשפר?" className="py-8 lg:py-12">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-premium lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-300">שלחו לנו הודעה קצרה בוואטסאפ: מה יש לכם היום, מה מפריע לכם ומה הייתם רוצים שיקרה. שיחת ההיכרות חינם וחברית, אנחנו מפתח תקווה, מחכים לשמוע מכם וגם אפשר להיפגש אם זה מה שנכון לפרויקט.</p>
            <p className="mt-3 text-base text-zinc-400">{site.hebrewLegalName} · {site.companyNumberLabel} · {site.phone}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-0">
            <a className="btn-primary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ בחינם
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
