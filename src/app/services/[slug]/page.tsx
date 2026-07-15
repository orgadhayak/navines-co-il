import { notFound } from "next/navigation";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { services, site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const isChatGptDataService = service.slug === "chatgpt-business-data";
  const isAiChatService = service.slug === "ai-chat-for-websites";
  const isTechnicalSupportService = service.slug === "technical-support-cyber-networks";
  const isAccountHackRecoveryService = service.slug === "account-hack-recovery";
  const isDueDiligenceService = service.slug === "business-due-diligence-intelligence";
  const isAppraisalService = service.slug === "vehicle-property-agricultural-appraisal";
  const isAmazonSeoWebsiteService = service.slug === "amazon-seller-seo-website";
  const isBrowserExtensionService = service.slug === "browser-extension-development";
  const isLegalTechnologyService = service.slug === "legal-operations-technology";
  const isTrafficLawService = service.slug === "traffic-case-technology";
  const generalLegalWhatsappHref = `${site.whatsappHref}?text=${encodeURIComponent("שלום, אשמח לקבל הכוונה כללית לגבי סוג המשרד או תחום ההתמחות שכדאי לחפש. נושא הפנייה הכללי הוא:")}`;
  const appraisalWhatsappHref = `${site.whatsappHref}?text=${encodeURIComponent("שלום, אשמח לקבל מידע על שירותי שמאות רכב, רכוש או חקלאות. סוג האירוע ומועדו הם:")}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@id": `${site.url}/#organization` },
    ...(isAppraisalService
      ? { serviceType: "Vehicle, property and agricultural damage appraisal", areaServed: "IL" }
      : isLegalTechnologyService
      ? { serviceType: "General legal technology information and software systems" }
      : isTrafficLawService
        ? { serviceType: "General traffic law technology information and software systems" }
        : { areaServed: "IL" }),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "שירותים", href: "/services" }, { name: service.title, href: `/services/${service.slug}` }])} />
      <Section eyebrow={service.eyebrow} title={service.heroTitle || service.title} titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">{service.summary}</p>
        {isAppraisalService ? (
          <div className="mt-6 flex flex-wrap gap-3">
            <a aria-label="סיוע ראשוני בוואטסאפ לשירותי שמאות רכב, רכוש או חקלאות" className="btn-primary" href={appraisalWhatsappHref} rel="noopener noreferrer" target="_blank">
              דברו איתנו על סוג השמאות הנדרש
            </a>
            <a className="btn-secondary" href="#appraisal-process">
              איך מתבצעת הבדיקה?
            </a>
          </div>
        ) : null}
        {isAmazonSeoWebsiteService ? (
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={site.whatsappHref}>
              יש לכם כבר לינקים למוצרים? אפשר להתחיל מהם
            </a>
            <a className="btn-secondary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ
            </a>
          </div>
        ) : null}
      </Section>
      <Section>
        <div className="grid gap-5">
          {isTechnicalSupportService ? (
            <article className="rounded-[1.5rem] border border-red-300/25 bg-red-950/28 p-5 shadow-[0_0_42px_rgba(239,68,68,0.14)]">
              <span className="inline-flex rounded-full border border-red-200/30 bg-red-500/16 px-4 py-1 text-sm font-semibold text-red-100 shadow-[0_0_22px_rgba(248,113,113,0.18)]">
                תקלה דחופה
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white">תקלה דחופה? אל תחכו</h2>
              <p className="mt-3 text-lg leading-8 text-red-50/90"> אם האתר נפל, המיילים לא עובדים, יש חשד לפריצה, בעיית דומיין, בעיית רשת או תקלה שמפריעה לעסק לעבוד, שלחו לנו הודעה עכשיו בוואטסאפ ונבדוק איך אפשר לעזור. </p>
              <a className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-red-100/35 bg-red-500/20 px-6 py-2.5 text-base font-semibold text-white transition hover:bg-red-500/30" href={site.whatsappHref}>
                תמיכה דחופה בוואטסאפ
              </a>
            </article>
          ) : null}
          {isAccountHackRecoveryService ? (
            <article className="rounded-[1.5rem] border border-red-300/25 bg-red-950/28 p-5 shadow-[0_0_42px_rgba(239,68,68,0.14)]">
              <span className="inline-flex rounded-lg border border-red-200/30 bg-red-500/16 px-4 py-1 text-sm font-semibold text-red-100 shadow-[0_0_22px_rgba(248,113,113,0.18)]">
                חירום דיגיטלי
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white">זה קורה עכשיו? אל תחכו</h2>
              <p className="mt-3 text-lg leading-8 text-red-50/90">
                אם מישהו מחזיק לכם בחשבון, שולח הודעות בשמכם, מאיים, דורש כסף או נועל אתכם מחוץ לחשבון, שלחו לנו הודעה עכשיו. נבדוק מה אפשר לעשות ומה הצעד הנכון.
              </p>
              <a className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg border border-red-100/35 bg-red-500/20 px-6 py-2.5 text-base font-semibold text-white transition hover:bg-red-500/30" href={site.whatsappHref}>
                סיוע דחוף בוואטסאפ
              </a>
            </article>
          ) : null}
          {isDueDiligenceService ? (
            <article className="rounded-premium border border-purple-200/15 bg-purple-500/[0.06] p-5">
              <h2 className="text-2xl font-semibold text-white">בדיקה חוקית ומסודרת בלבד</h2>
              <p className="mt-3 text-lg leading-8 text-zinc-300">
                השירות אינו מחליף ייעוץ משפטי או חשבונאי, ואינו מבטיח גילוי מלא של כל סיכון. הבדיקה מתבצעת רק על בסיס מידע גלוי, גישה מורשית, מסמכים שהמוכר סיפק, בדיקות טכניות מותרות וניתוח מקצועי. אין פריצה, חדירה או גישה לא מורשית.
              </p>
            </article>
          ) : null}
          {isAppraisalService ? (
            <article className="border-r-4 border-sky-500 bg-sky-50/70 p-5 text-right dark:bg-sky-950/20">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">למבוטחים, ניזוקים, בעלי עסקים, חקלאים, עורכי דין וגופים מקצועיים</h2>
              <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-zinc-300">
                כל בדיקה וחוות דעת נערכת ונחתמת על ידי איש המקצוע המתאים לתחום השמאות הרלוונטי. נביא נס ישראל בע"מ מספקת מעטפת תיעוד, ארגון, בקרת נתונים ותיאום מקצועי, אך אינה מציגה את עצמה כשמאי רכב מורשה או כשמאי מקרקעין.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-zinc-400">
                בפנייה הראשונה אין לשלוח תעודת זהות, פרטי אשראי, סיסמאות, מסמכים רפואיים או חומר רגיש. לאחר בירור ראשוני יוסבר כיצד להעביר חומר רלוונטי בצורה מסודרת.
              </p>
            </article>
          ) : null}
          {isLegalTechnologyService ? (
            <article className="border-r-4 border-sky-500 bg-sky-50/70 p-5 text-right dark:bg-sky-950/20">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">מידע כללי בלבד, בלי קשר מסחרי למשרד מסוים</h2>
              <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-zinc-300">
                נביא נס היא חברת תוכנה וטכנולוגיה ואינה משרד עורכי דין. המידע וההכוונה באתר הם כלליים בלבד, ללא קשר מסחרי למשרד מסוים, ואינם ייעוץ, ייצוג או המלצה אישית על עורך דין.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-zinc-400">
                אין לשלוח מסמכים, מספרי זיהוי או מידע רגיש. הבחירה במשרד, ההתקשרות, הייעוץ, הייצוג והתשלום נעשים באופן עצמאי וישיר מול עורך הדין שנבחר.
              </p>
              <a className="btn-secondary mt-5" href={generalLegalWhatsappHref} rel="noopener noreferrer" target="_blank">
                קבלו הכוונה כללית לבחירת משרד
              </a>
            </article>
          ) : null}
          {isTrafficLawService ? (
            <article className="border-r-4 border-sky-500 bg-sky-50/70 p-5 text-right dark:bg-sky-950/20">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">הכוונה כללית בלבד לפני בחירת עורך דין</h2>
              <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-zinc-300">
                נביא נס אינה משרד עורכי דין, אינה בודקת תיקים ואינה קשורה מסחרית למשרד מסוים. המידע בעמוד עוזר להבין אילו דברים כדאי לבדוק לפני בחירה עצמאית של עורך דין לתעבורה.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-zinc-400">
                אין לשלוח לנביא נס דוח, מספר רישיון, תעודת זהות, צילום רישיון או חומרי חקירה. את החומר מעבירים רק לעורך הדין שנבחר ובערוץ שהוא מאשר.
              </p>
              <a className="btn-secondary mt-5" href={generalLegalWhatsappHref} rel="noopener noreferrer" target="_blank">
                קבלו הכוונה כללית לבחירת עורך דין
              </a>
            </article>
          ) : null}
          {isAmazonSeoWebsiteService ? (
            <article className="rounded-premium border border-purple-200/15 bg-purple-500/[0.06] p-5">
              <h2 className="text-2xl font-semibold text-white">חשוב לדעת על SEO מחוץ ל Amazon</h2>
              <p className="mt-3 text-lg leading-8 text-zinc-300">
                אנחנו לא מבטיחים מקום ראשון, אינדוקס יומי או מכירות מובטחות. העבודה מתמקדת בבניית אתר שימושי, תוכן מקורי, מבנה בינלאומי נכון, מדידה והפניות מסודרות לעמודי Amazon. לא מעתיקים תיאורי מוצר באופן עיוור ולא מבצעים scraping בניגוד לתנאי שימוש.
              </p>
            </article>
          ) : null}
          {isBrowserExtensionService ? <BrowserExtensionExamples /> : null}
          <InfoBlock plain={isLegalTechnologyService || isTrafficLawService} title="מה השירות?" items={[service.overview || service.summary]} />
          <InfoBlock plain={isLegalTechnologyService || isTrafficLawService} title="למי זה מתאים?" items={service.audience} />
          <InfoBlock plain={isLegalTechnologyService || isTrafficLawService} title={isLegalTechnologyService || isTrafficLawService ? "מה אפשר לעשות בפועל" : "מה עושים בפועל ודוגמה פשוטה"} items={service.actions} />
          <InfoBlock plain={isLegalTechnologyService || isTrafficLawService} title={isLegalTechnologyService ? "מה כדאי להבין לפני בחירה" : isTrafficLawService ? "מה כדאי להבין לפני פנייה" : "בעיות שאנחנו פותרים"} items={service.problems} />
          {service.serviceHighlights?.length ? (
            <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
              <h2 className="text-2xl font-semibold text-white">נקודות שחשוב להבין</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {service.serviceHighlights.map((highlight) => {
                  const content = (
                    <>
                      <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                      <p className="mt-2 text-base leading-7 text-zinc-400">{highlight.text}</p>
                    </>
                  );

                  return highlight.href ? (
                    <Link className="rounded-lg border border-purple-200/12 bg-black/18 p-4 transition hover:border-purple-200/35 hover:bg-purple-500/12" href={highlight.href} key={highlight.title}>
                      {content}
                    </Link>
                  ) : (
                    <div className="rounded-lg border border-purple-200/12 bg-black/18 p-4" key={highlight.title}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </article>
          ) : null}
          {service.relatedArticles?.length ? (
            <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
              <h2 className="text-2xl font-semibold text-white">מדריכים קשורים</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {service.relatedArticles.map((article) => (
                  <Link className="rounded-lg border border-purple-200/12 bg-black/18 p-4 transition hover:border-purple-200/35 hover:bg-purple-500/12" href={article.href} key={article.href}>
                    <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                    <p className="mt-2 text-base leading-7 text-zinc-400">{article.text}</p>
                  </Link>
                ))}
              </div>
            </article>
          ) : null}
          {isAccountHackRecoveryService ? <AccountHackGuidance /> : null}
          {isDueDiligenceService ? <DueDiligenceGuidance /> : null}
          {isAppraisalService ? <AppraisalGuidance /> : null}
          {isBrowserExtensionService ? <BrowserExtensionGuidance /> : null}
          {isLegalTechnologyService ? <LegalTechnologyGuidance /> : null}
          {isTrafficLawService ? <TrafficLawGuidance /> : null}
          <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5" id={isAppraisalService ? "appraisal-process" : undefined}>
            <h2 className="text-2xl font-semibold text-white">תהליך עבודה</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {(service.processSteps || [
                { title: "שיחת אפיון", text: "מבינים את העסק, הבעיה, המערכות הקיימות והמטרה העסקית." },
                { title: "מיפוי מצב קיים", text: "בודקים מה עובד היום, איפה יש חיכוך ומה צריך להשתנות." },
                { title: "תכנון פתרון", text: "מגדירים פתרון מדורג שאפשר לבנות, לבדוק ולשפר בלי עומס מיותר." },
                { title: "פיתוח וביצוע", text: "בונים את האתר, המערכת, האוטומציה או החיבור לפי הצורך." },
                { title: "בדיקות ושיפור", text: "בודקים מובייל, ביצועים, טפסים, הרשאות, נתונים וחוויית משתמש." },
                { title: "השקה וליווי", text: "מעלים לאוויר, עוקבים אחרי שימוש וממשיכים לשפר לפי נתונים." },
              ]).map((step, index) => (
                <div className="rounded-premium border border-white/10 bg-black/20 p-4" key={step.title}>
                  <span className="grid h-9 w-9 place-items-center rounded-premium bg-navred font-semibold text-white">{index + 1}</span>
                  <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{step.text}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
            <h2 className="text-2xl font-semibold text-white">שאלות נפוצות</h2>
            <div className="mt-5 grid gap-3">
              {service.faqs.map((faq) => (
                <details className="rounded-premium border border-white/10 bg-black/20 p-4" key={faq.question}>
                  <summary className="cursor-pointer font-semibold text-silver">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-zinc-400">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </Section>
      <CTA
        title={isAiChatService ? "רוצים צ׳ט AI כזה באתר שלכם?" : isTechnicalSupportService ? "צריכים תמיכה טכנית עכשיו?" : isAccountHackRecoveryService ? "פרצו לכם לחשבון או לנכס דיגיטלי?" : isDueDiligenceService ? "לפני שאתם חותמים, רוצים לבדוק את התמונה הדיגיטלית?" : isAppraisalService ? "צריכים חוות דעת שמאית מסודרת?" : isLegalTechnologyService ? "קבלו הכוונה כללית לבחירת משרד" : isTrafficLawService ? "קבלו הכוונה כללית לבחירת עורך דין" : isAmazonSeoWebsiteService ? "יש לכם מוצרים פעילים ב Amazon?" : isBrowserExtensionService ? "יש לכם רעיון לתוסף? בואו נהפוך אותו לכלי אמיתי" : isChatGptDataService ? "רוצים לדבר עם הנתונים של העסק שלכם דרך ChatGPT?" : `רוצים לבדוק אם ${service.title} מתאים לעסק שלכם?`}
        text={isAiChatService ? "דברו איתנו בוואטסאפ. שלחו כתובת אתר או תיאור קצר של העסק, ונבדוק איזה צ׳ט קצר, ברור ומדויק יכול לעזור לגולשים שלכם." : isTechnicalSupportService ? "שלחו הודעה בוואטסאפ עם התקלה, מה הפסיק לעבוד ומה דחוף. נבדוק אם אפשר לעזור מרחוק או אם נדרשת הגעה לפי צורך." : isAccountHackRecoveryService ? "שלחו הודעה קצרה עם מה קרה, באיזה חשבון מדובר, האם עדיין יש גישה למייל או לטלפון, וצילום מסך אם יש. לא נבטיח תוצאה, אבל נעזור להבין את המצב ולפעול נכון." : isDueDiligenceService ? "שלחו לנו איזה עסק, אתר, חנות או פעילות אתם בודקים, ומה כבר קיבלתם מהמוכר. נבנה רשימת בדיקות ושאלות שיעזרו לכם להבין את התמונה הדיגיטלית לפני החלטה." : isAppraisalService ? "שלחו לנו בוואטסאפ מה סוג האירוע ומתי הוא קרה: רכב, רכוש או חקלאות. בפנייה הראשונה אל תשלחו מסמכים רגישים; נבין את הצורך ונכוון איך להעביר חומר בצורה מסודרת." : isLegalTechnologyService || isTrafficLawService ? "אפשר לכתוב לנו רק את נושא הפנייה הכללי, בלי מסמכים ובלי מידע רגיש. נביא נס אינה משרד עורכי דין, אינה קשורה מסחרית למשרד מסוים ואינה מבטיחה התאמה, מחיר או תוצאה." : isAmazonSeoWebsiteService ? "שלחו לנו כמה קישורים למוצרים, ספרו באיזו מדינה אתם מוכרים, ונבדוק איך אפשר לבנות סביבם אתר חזק, עשיר ומוכן לצמיחה מחוץ ל Amazon." : isBrowserExtensionService ? "שלחו לנו בוואטסאפ הסבר קצר על הרעיון, למי הוא מיועד ואיזו פעולה הוא אמור לחסוך. נבדוק אם נכון להתחיל בגרסה פשוטה, אילו הרשאות נדרשות ואיך להפוך את זה לתוסף ברור ובטוח." : isChatGptDataService ? "שלחו לנו איזו מערכת יש לכם ונבדוק איך אפשר לחבר אותה: שופיפיי, ווקומרס, אמזון, איביי, CRM, ERP, גוגל אנליטיקס, מלאי, הזמנות או מערכת פנימית. לא בטוחים אם זה אפשרי? כתבו לנו ונכוון אתכם." : "כתבו לנו בוואטסאפ מה קיים אצלכם היום ומה הייתם רוצים לשפר. נחזור עם כיוון פשוט, ברור ומעשי."}
      />
    </>
  );
}

function BrowserExtensionExamples() {
  const extensions = [
    {
      name: "Navines Tools Hub",
      text: "תוסף שמרכז את כלי Navines במקום אחד ומעניק גישה מהירה בלחיצה אחת לכלים ולשירותים שלנו.",
      why: "בנינו אותו כדוגמה לתוסף שמחבר מותג שלם לדפדפן דרך מרכז כלים נקי, מהיר וקל להבנה.",
      value: "המשתמש מקבל גישה מהירה, ממשק נקי, בלי פרסומות ובלי צורך לשמור סימניות מפוזרות.",
      href: "https://chromewebstore.google.com/detail/navines-tools-hub/ickjjfnfhmednmejidkphbcjdmlgjdpd",
    },
    {
      name: "PartnerCrypto Toolkit",
      text: "תוסף שמרכז כלי קריפטו, מאפשר למצוא כלים במהירות ולבצע בדיקות פרטיות של גודל פוזיציה והשפעת עמלות ישירות בדפדפן.",
      why: "בנינו אותו כדוגמה לתוסף שמלווה עולם תוכן מקצועי ומרכז פעולות שימושיות במקום אחד.",
      value: "המשתמש מקבל גישה מהירה לכלי מחקר, ניתוח ומחשבונים בלי לחפש בכל פעם את הכלי הנכון.",
      href: "https://chromewebstore.google.com/detail/partnercrypto-toolkit/kopifhlgbdmlanjgdckdjhmhanodifoo",
    },
  ];

  return (
    <article className="rounded-premium border border-purple-200/15 bg-purple-500/[0.06] p-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-glowred">תוספים שכבר בנינו</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">דוגמאות אמיתיות לתוספים לדפדפנים</h2>
        </div>
        <Link className="btn-secondary" href="/products">כלים ומוצרים</Link>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {extensions.map((extension) => (
          <a className="rounded-lg border border-purple-200/14 bg-black/24 p-5 transition hover:-translate-y-0.5 hover:border-purple-200/35 hover:bg-purple-500/10" href={extension.href} key={extension.href} rel="noopener noreferrer" target="_blank">
            <h3 className="text-2xl font-semibold text-white">{extension.name}</h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">{extension.text}</p>
            <dl className="mt-4 grid gap-3 text-base">
              <div>
                <dt className="font-semibold text-silver">למה בנינו אותו</dt>
                <dd className="mt-1 text-zinc-400">{extension.why}</dd>
              </div>
              <div>
                <dt className="font-semibold text-silver">מה המשתמש מקבל</dt>
                <dd className="mt-1 text-zinc-400">{extension.value}</dd>
              </div>
            </dl>
            <span className="mt-5 inline-flex rounded-lg border border-purple-200/20 bg-purple-500/12 px-5 py-2 text-base font-semibold text-white">
              פתחו ב Chrome Web Store
            </span>
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-500">
        אין כאן הבטחה למספר משתמשים, דירוגים או אישור אוטומטי בחנות. כל תוסף נבדק לפי מדיניות החנות הרלוונטית, לפי ההרשאות שהוא מבקש, ולפי התאמה לדפדפנים כמו Chrome, Microsoft Edge, Brave, Opera ודפדפנים נוספים בהתאם ליכולות ה API ולדרישות הפרויקט.
      </p>
    </article>
  );
}

function BrowserExtensionGuidance() {
  const internalUses = ["כלי פנימי לעובדים", "קיצור דרך לצוות מכירות", "עוזר לצוות תמיכה", "בדיקות תוכן או קישורים", "הזנת מידע מהירה", "חיבור למערכת קיימת", "אוטומציה של פעולות מותרות"];
  const safeguards = ["הרשאות מינימליות", "שמירה על פרטיות", "לא לבצע מעקב נסתר", "לא לאסוף מידע בלי צורך והסכמה", "מפתחות API ושירותים רגישים נשארים בצד שרת", "עבודה לפי מדיניות חנויות הדפדפנים"];

  return (
    <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
      <h2 className="text-2xl font-semibold text-white">תוספים פנימיים, AI ואבטחה</h2>
      <p className="mt-3 text-lg leading-8 text-zinc-300">
        תוסף לא חייב להיות מוצר ציבורי. לפעמים הערך הגדול ביותר הוא כלי פנימי קטן שמקצר פעולה שחוזרת כל יום. אפשר לשלב בו גם AI, סיכום מידע, חילוץ פרטים, המלצות או חיבור למערכת של העסק, אבל עושים את זה בזהירות.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-purple-200/12 bg-black/18 p-4">
          <h3 className="text-xl font-semibold text-white">שימושים פנימיים</h3>
          <ul className="mt-3 grid gap-2 text-base leading-7 text-zinc-300">
            {internalUses.map((item) => <li className="border-r border-purple-300/35 pr-3" key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="rounded-lg border border-purple-200/12 bg-black/18 p-4">
          <h3 className="text-xl font-semibold text-white">כללי זהירות</h3>
          <ul className="mt-3 grid gap-2 text-base leading-7 text-zinc-300">
            {safeguards.map((item) => <li className="border-r border-purple-300/35 pr-3" key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}

function AppraisalGuidance() {
  const appraisalWhatsappHref = `${site.whatsappHref}?text=${encodeURIComponent("שלום, אשמח לקבל מידע על שירותי שמאות רכב, רכוש או חקלאות. סוג האירוע ומועדו הם:")}`;
  const carItems = ["תאונה ופגיעה מצד שלישי", "היקף תיקון, חלקים ועבודה", "ירידת ערך ושווי רכב", "נזק ישן מול חדש כאשר ניתן לתמוך בכך", "מסמכי מוסך, הצעות מחיר ותמונות", "חומר למחלוקת ביטוחית או לגורם מקצועי"];
  const propertyItems = ["נזקי מים והצפה", "אש, עשן ופיח", "סערה ומזג אוויר", "פריצה, גניבה או ונדליזם", "תכולה, ציוד, מלאי וריהוט", "עלויות תיקון, שיקום או החלפה"];
  const agricultureItems = ["גידולים ומטעים, כולל הדרים", "חממות ותשתיות השקיה", "ציוד ומכונות חקלאיות", "נזקי אש, מים, סערה או אירוע חיצוני", "השפעה על כמות ואיכות יבול", "מדידות, מיפוי ותיעוד שטח"];
  const techItems = ["תיק דיגיטלי מסודר", "תמונות לפי אזור, פריט ותאריך", "הערות ויזואליות וסימון רכיבי נזק", "טבלאות מדידה וחישוב", "ציר זמן של האירוע", "השוואת מסמכים וגרסאות", "הצלבת חשבוניות, הצעות מחיר ומסמכי רכישה", "בקרת פריטים חסרים ונספחים מסודרים"];
  const benefits = ["פחות חומר מפוזר בין תמונות, הודעות ומסמכים", "יותר קל להבין איזה רכיב נזק נבדק ואיך חושב", "אפשרות להציג תמונה מקצועית וברורה למבטח, לעורך דין או לגורם מקצועי", "יכולת לזהות חוסרים לפני מסירה", "תיעוד מסודר של מקורות הנתון והגרסאות"];

  return (
    <article className="space-y-8 border-y py-6" style={{ borderColor: "var(--border)" }}>
      <div>
        <h2 className="text-2xl font-semibold">שמאות רכב: להבין את מלוא הנזק לפני שמתחילים לתקן</h2>
        <p className="mt-3 text-lg leading-8 text-zinc-300">
          בשמאות רכב בוחנים את רכיבי הנזק, הקשר לאירוע, היקף התיקון, עלויות חלקים ועבודה, ירידת ערך ושאלות נוספות כמו נזק ישן מול חדש או מצבים שבהם נדרשת בחינה של אובדן מוחלט בהתאם לנסיבות. המטרה היא להציג הערכה מקצועית, עצמאית ומבוססת, הכוללת את רכיבי הנזק הרלוונטיים ואת דרך החישוב.
        </p>
        <p className="mt-3 border-r-4 border-sky-500 pr-4 text-base leading-7 text-zinc-300">
          בשמאות רכב קיימת חשיבות לפנייה לפני תחילת התיקון, ככל שהדבר אפשרי ובטוח, כדי שניתן יהיה לבדוק ולתעד את הנזק במצבו המקורי.
        </p>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {carItems.map((item) => <li className="border-r border-purple-300/35 pr-3" key={item}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">שמאות רכוש: תיעוד מדויק של הנזק למבנה, לתכולה ולציוד</h2>
        <p className="mt-3 text-lg leading-8 text-zinc-300">
          שמאות רכוש מתמקדת בהערכת נזק למבנה, לתכולה, לציוד, למלאי ולמערכות שנפגעו. הבדיקה יכולה לכלול עלויות תיקון, שיקום או החלפה, בלאי ופחת כאשר רלוונטי, מסמכי רכישה, חשבוניות, הצעות מחיר וחומר נוסף שמסייע להבין את היקף הנזק.
        </p>
        <p className="mt-3 text-base leading-7 text-zinc-400">
          שמאות רכוש והערכת נזק אינן שמאות מקרקעין. אין להציג באתר הערכת שווי מקרקעין, זכויות בנייה או שווי קרקע אלא אם השירות ניתן בפועל על ידי שמאי מקרקעין מוסמך ומאומת.
        </p>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {propertyItems.map((item) => <li className="border-r border-purple-300/35 pr-3" key={item}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">שמאות חקלאות: לראות את הנזק בשטח וגם את ההשפעה בהמשך</h2>
        <p className="mt-3 text-lg leading-8 text-zinc-300">
          בשטח חקלאי לא תמיד מספיק לראות מה נפגע ביום האירוע. לעיתים צריך להבין גם השפעה על המשך הגידול, איכות וכמות יבול, עלויות טיפול, שיקום או נטיעה מחדש, תיעוד גידול קיים, מדידות, מיפוי ותמונות לאורך זמן.
        </p>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {agricultureItems.map((item) => <li className="border-r border-purple-300/35 pr-3" key={item}>{item}</li>)}
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-glowred">היתרון הטכנולוגי</p>
        <h2 className="mt-2 text-2xl font-semibold">לא רק לראות את הנזק — לבנות ממנו תמונה מלאה</h2>
        <p className="mt-3 text-lg leading-8 text-zinc-300">
          הפרטים הקטנים הם לעיתים ההבדל בין אומדן כללי לבין חוות דעת שקל להבין, לבדוק ולהגן עליה מקצועית. נביא נס משלבת עבודת שטח עם תיעוד דיגיטלי ובקרת נתונים, כדי שכל רכיב רלוונטי יקבל התייחסות ולא ילך לאיבוד בתוך ערימת מסמכים ותמונות.
        </p>
        <p className="mt-3 text-base leading-7 text-zinc-400">
          הכלים מסייעים לשמאי, אך אינם מחליפים ביקור, בדיקה, מדידה, ניסיון מקצועי ושיקול דעת.
        </p>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {techItems.map((item) => <li className="border-r border-purple-300/35 pr-3" key={item}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">איך הגישה הזו מסייעת למבוטח ולניזוק?</h2>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {benefits.map((item) => <li className="border-r border-purple-300/35 pr-3" key={item}>{item}</li>)}
        </ul>
        <p className="mt-4 text-lg leading-8 text-zinc-300">
          המטרה אינה לנפח את הנזק ואינה להבטיח סכום פיצוי. המטרה היא שהמבוטח או הניזוק יוכל להציג תמונה מקצועית, מלאה ומגובה ככל האפשר, ושכל רכיב רלוונטי ייבחן בצורה מסודרת.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">חוות דעת שמאית שניתן להבין, לבדוק ולהציג</h2>
        <p className="mt-3 text-lg leading-8 text-zinc-300">
          חוות דעת שמאית טובה צריכה להיות מסודרת: מה נבדק, אילו מסמכים נבחנו, מה דרך החישוב, אילו נספחים צורפו ומהם גבולות הבדיקה. כאשר נדרשת חוות דעת מומחה לצורך מחלוקת או הליך משפטי, יש חשיבות לזהות החותם, לתחום מומחיותו ולדרך הצגת החומר.
        </p>
        <p className="mt-3 text-base leading-7 text-zinc-400">
          כאשר חוות הדעת מיועדת להליך משפטי, היא נערכת בהתאם לתחום המומחיות של החותם ולדרישות הספציפיות של העניין. ההחלטה אם לקבל את חוות הדעת ומה המשקל שיינתן לה מסורה לגורם המוסמך או לבית המשפט.
        </p>
      </div>

      <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-semibold">דברו איתנו על סוג השמאות הנדרש</h2>
        <p className="mt-3 text-base leading-7 text-zinc-400">
          ספרו בקצרה אם מדובר ברכב, רכוש או חקלאות, מתי התרחש האירוע ומה דחוף. בפנייה הראשונה אין לשלוח תעודת זהות, פרטי אשראי, סיסמאות, מסמכים רפואיים או חומר רגיש. לאחר בירור ראשוני יוסבר כיצד להעביר חומר רלוונטי בצורה מסודרת.
        </p>
        <a aria-label="סיוע ראשוני בוואטסאפ לשירותי שמאות רכב, רכוש או חקלאות" className="btn-primary mt-5" href={appraisalWhatsappHref} rel="noopener noreferrer" target="_blank">
          סיוע ראשוני בוואטסאפ
        </a>
      </div>
    </article>
  );
}

function AccountHackGuidance() {
  const donts = ["לא לשלם מיד בלי להבין את הסיכון", "לא למחוק הודעות או ראיות", "לא להתווכח בפאניקה עם מי שמחזיק בגישה", "לא לפתוח קישורים חשודים", "לא למסור עוד קודים או סיסמאות", "לא להתקין תוכנות שמישהו שלח לכם", "לא לפרסם פוסט לפני שמבינים את הסיכון", "לא לחכות אם מדובר בחשבון עסקי"];

  return (
    <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
      <h2 className="text-2xl font-semibold text-white">תקשורת מול התוקף או מי שמחזיק בגישה</h2>
      <p className="mt-3 text-lg leading-8 text-zinc-300">
        במקרים מסוימים יש צורך לנהל תקשורת זהירה ומחושבת מול מי שמחזיק בגישה לחשבון או מאיים בפרסום מידע. אנחנו לא ממליצים לפעול בפאניקה, לשלם מיד, לאיים או לעשות פעולה לא חוקית. המטרה היא לקנות זמן, להבין את מצב הסיכון, לשמור ראיות, לצמצם נזק ולפעול בצורה חכמה וחוקית.
      </p>
      <p className="mt-3 text-lg leading-8 text-zinc-300">
        יש לנו ניסיון בהתנהלות רגועה מול מצבי לחץ דיגיטליים, כולל בניית מסרים, תיעוד נכון, הפחתת נזק, הפעלת לחץ חוקי דרך הפלטפורמות והכנת צעדים שיכולים לגרום לצד השני להבין שלא מדובר במטרה קלה.
      </p>
      <h3 className="mt-6 text-xl font-semibold text-white">מה לא לעשות כשפורצים לכם</h3>
      <ul className="mt-3 grid gap-2 text-base leading-7 text-zinc-300 md:grid-cols-2">
        {donts.map((item) => (
          <li className="border-r border-red-300/35 pr-3" key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function DueDiligenceGuidance() {
  const outputs = ["תמונת מצב ברורה", "רשימת סיכונים", "שאלות שכדאי לשאול את המוכר", "נקודות שדורשות מסמכים נוספים", "בדיקת עקביות בין נתונים", "זיהוי חולשות טכנולוגיות", "המלצות לפני התקדמות", "דוח מסודר לקבלת החלטה"];

  return (
    <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
      <h2 className="text-2xl font-semibold text-white">מה מקבלים ולמה זה חשוב</h2>
      <p className="mt-3 text-lg leading-8 text-zinc-300">
        עסקה טובה לא נמדדת רק במחזור שהמוכר מציג. צריך להבין מה איכות הנכס, האם הנתונים עקביים, האם יש תלות נסתרת, האם התנועה יציבה, האם יש סיכוני אבטחה, והאם אחרי הרכישה העסק באמת יכול להמשיך לעבוד.
      </p>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        {outputs.map((item) => (
          <div className="rounded-lg border border-purple-200/12 bg-black/18 px-4 py-3 text-base font-bold text-zinc-200" key={item}>{item}</div>
        ))}
      </div>
    </article>
  );
}

function LegalTechnologyGuidance() {
  const choosingChecks = ["ניסיון מקצועי בתחום הרלוונטי", "זהות עורך הדין או הצוות שמטפל בפועל", "דרך קבלת עדכונים ומעקב אחר מועדים", "הסכם שכר טרחה ברור ומסודר", "אבטחת מידע והרשאות למסמכים", "הימנעות מהבטחות לתוצאה, למחיר או להתאמה אישית"];
  const techBenefits = ["ארגון מסמכים לפי נושא ותאריך", "בניית ציר זמן של אירועים", "ניהול מועדים ומשימות", "שיתוף מידע מאובטח עם הלקוח", "תיעוד גרסאות ושינויים", "מעקב אחר פעולות פתוחות", "מיפוי נכסים דיגיטליים", "הפחתת חיפוש ידני במסמכים"];
  const expertiseAreas = ["עסקים דיגיטליים ואיקומרס", "סימני מסחר ומותגים", "פרטיות ומידע אישי", "תקנונים ותנאי שימוש", "SaaS ומערכות אונליין", "פרסום דיגיטלי", "התחזות ופגיעה בנכסים דיגיטליים", "הסכמים עם ספקים", "תעבורה ונקודות", "אבטחת מידע וציות פנימי"];

  return (
    <article className="space-y-8 border-y py-6" style={{ borderColor: "var(--border)" }}>
      <div>
        <h2 className="text-2xl font-semibold">מה כדאי לבדוק לפני שבוחרים משרד?</h2>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {choosingChecks.map((item) => <li className="border-r pr-3" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }} key={item}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">כיצד טכנולוגיה יכולה לשפר את תהליך העבודה?</h2>
        <p className="mt-3 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          כלים טכנולוגיים אינם מחליפים ידע משפטי, אבל הם יכולים להפוך תהליך מפוזר למסודר יותר: פחות חיפוש ידני, יותר שליטה במועדים, תיעוד ברור ושיתוף מידע מדויק יותר.
        </p>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {techBenefits.map((item) => <li className="border-r pr-3" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }} key={item}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">האם שימוש בטכנולוגיה יכול לחסוך זמן ועלויות?</h2>
        <p className="mt-3 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          שימוש נכון במערכות יכול לצמצם עבודה ידנית, למנוע כפילויות ולעזור להגיע לפגישות מוכנים יותר. עם זאת, אין התחייבות למחיר נמוך יותר או לתוצאה מסוימת. עלויות ושכר טרחה נקבעים רק מול המשרד הנבחר.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">באילו תחומים חשוב לבחור התמחות מתאימה?</h2>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {expertiseAreas.map((item) => <li className="border-r pr-3" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }} key={item}>{item}</li>)}
        </ul>
        <p className="mt-4 text-base leading-7" style={{ color: "var(--text-soft)" }}>
          נביא נס אינה ממליצה על משרד מסוים ואינה מדרגת עורכי דין. המטרה היא לעזור להבין אילו שאלות כלליות כדאי לשאול לפני בחירה עצמאית.
        </p>
      </div>
    </article>
  );
}

function TrafficLawGuidance() {
  const trafficAreas = ["דוחות מהירות", "שימוש בטלפון בזמן נהיגה", "נקודות חובה", "הזמנה לדין", "רמזור ותמרור", "מצלמות אכיפה", "פסילת רישיון", "נהיגה ללא רישיון תקף", "תאונות דרכים", "חומר חקירה", "קורסי נהיגה נכונה", "מועדי פעולה וערעור"];
  const preparationItems = ["הדוח או ההזמנה כפי שהתקבלו", "תאריך קבלה ומועד אחרון לפעולה", "תדפיס נקודות רשמי אם קיים", "מסמכים או תמונות שמוחזקים כחוק", "תיאור קצר של האירוע", "שאלות שאתם רוצים לשאול", "מכתבים רשמיים שקיבלתם", "לא לשלוח מסמכים או פרטים רגישים לנביא נס"];

  return (
    <article className="space-y-8 border-y py-6" style={{ borderColor: "var(--border)" }}>
      <div>
        <h2 className="text-2xl font-semibold">באילו ענייני תעבורה כדאי לחפש ניסיון מתאים?</h2>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {trafficAreas.map((item) => <li className="border-r pr-3" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }} key={item}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">האם אפשר לבטל דוח או נקודות?</h2>
        <p className="mt-3 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          אין דרך אחראית להבטיח ביטול דוח או נקודות. התוצאה תלויה בנסיבות, בחומר, במועדים ובהליך. עורך דין לתעבורה שבחרתם יכול לבדוק את המקרה לפי הדין והמסמכים שבידיו.
        </p>
        <p className="mt-3 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          חשוב גם להבדיל בין קורס נהיגה נכונה רשמי לבין שיעור פרטי. שיעור פרטי יכול לרענן ידע, אבל הוא אינו מוחק נקודות ואינו מחליף דרישה רשמית.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">מה כדאי לארגן לפני שפונים לעורך דין?</h2>
        <ul className="mt-4 grid gap-2 text-base leading-7 md:grid-cols-2">
          {preparationItems.map((item) => <li className="border-r pr-3" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }} key={item}>{item}</li>)}
        </ul>
        <p className="mt-4 text-base leading-7" style={{ color: "var(--text-soft)" }}>
          נביא נס אינה בודקת תיקים, אינה מקבלת דוחות מנהגים ואינה מספקת ייעוץ או ייצוג משפטי. ההתקשרות נעשית ישירות מול עורך הדין שנבחר.
        </p>
      </div>
    </article>
  );
}

function InfoBlock({ title, items, plain = false }: { title: string; items: string[]; plain?: boolean }) {
  if (plain) {
    return (
      <article className="border-y py-5" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="mt-4 grid gap-3">
          {items.map((item) => (
            <p className="border-r pr-4 text-base leading-8" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }} key={item}>
              {item}
            </p>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
