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
  const isGlobalBrandService = service.slug === "global-brand-b2b-platform";
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
    provider: isGlobalBrandService
      ? {
          "@id": `${site.url}/#organization`,
          name: site.name,
          legalName: site.legalName,
          alternateName: site.englishLegalName,
        }
      : { "@id": `${site.url}/#organization` },
    ...(isAppraisalService
      ? { serviceType: "Vehicle, property and agricultural damage appraisal", areaServed: "IL" }
      : isGlobalBrandService
        ? { serviceType: "Global corporate brand and B2B platform development", areaServed: "Worldwide" }
      : isLegalTechnologyService
      ? { serviceType: "General legal technology information and software systems" }
      : isTrafficLawService
        ? { serviceType: "General traffic law technology information and software systems" }
        : { areaServed: "IL" }),
  };

  if (isGlobalBrandService) {
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${site.url}/services/${service.slug}#webpage`,
      url: `${site.url}/services/${service.slug}`,
      name: service.heroTitle,
      description: service.metaDescription,
      inLanguage: "he-IL",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/services/${service.slug}#service` },
    };

    return (
      <>
        <JsonLd data={faqSchema} />
        <JsonLd data={{ ...serviceSchema, "@id": `${site.url}/services/${service.slug}#service` }} />
        <JsonLd data={webPageSchema} />
        <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "שירותים", href: "/services" }, { name: service.title, href: `/services/${service.slug}` }])} />
        <GlobalBrandServiceContent service={service} />
      </>
    );
  }

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
                    <div className="rounded-lg border border-purple-200/12 bg-black/18 p-4" key={highlight.title}>
                      <Link className="block transition hover:text-sky-200" href={highlight.href}>
                        {content}
                      </Link>
                      {highlight.externalHref ? (
                        <a aria-label={`לפתוח את ${highlight.title} באתר החיצוני`} className="mt-4 inline-flex text-sm font-semibold text-sky-300 underline-offset-4 transition hover:underline" href={highlight.externalHref} rel="noopener noreferrer" target="_blank">
                          לפתוח את AmazonIQ
                        </a>
                      ) : null}
                    </div>
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

function GlobalBrandServiceContent({ service }: { service: (typeof services)[number] }) {
  const audiences = [
    {
      title: "חברה מקומית שרוצה להתחיל לעבוד בעולם",
      text: "יצרן, מותג צרכני, חברת תוכנה או שירותים שמבקשים לפנות למפיצים, יבואנים, רשתות ושותפים במדינות חדשות.",
    },
    {
      title: "חברה קיימת שצריכה חידוש וסדר",
      text: "כאשר האתר מיושן, המידע מפוזר בין מסמכים ופלטפורמות, או שאין מקור רשמי אחד שמייצג את היקף הפעילות.",
    },
    {
      title: "מותג שמוכר דרך Amazon, חנויות או מפיצים",
      text: "כאשר המכירה מתבצעת מחוץ לאתר, אבל צריך להסביר מי עומד מאחורי המותג ולחבר בין מוצרים לערוצים הרשמיים.",
    },
    {
      title: "חברה שפועלת מול גופים ופלטפורמות",
      text: "מרקטפלייסים, חברות שילוח, בנקים, ספקי תשלום, קמעונאים וגורמי ציות שצריכים לבדוק מידע עקבי ומתועד.",
    },
  ];

  const platformLayers = [
    {
      title: "זהות תאגידית רשמית",
      text: "שם החברה והמותג, מספר חברה, הנהלה, אנשי קשר, חזון, פעילות, מבנה מותגים, מדינות וקישורים לנכסים הרשמיים.",
    },
    {
      title: "מרכז מותג ומוצרים",
      text: "קטגוריות, מוצרים, גלריות רשמיות, נתוני מוצר, חומרים, אריזה, הוראות, גרסאות וגבולות ברורים לטענות שיווקיות.",
    },
    {
      title: "מסלולי שותפות B2B",
      text: "סיטונאות, הפצה, רשתות, קמעונאים, איקומרס, מרקטפלייסים, Hospitality, חברות, מדיה ושותפויות אסטרטגיות.",
    },
    {
      title: "שווקים גלובליים",
      text: "עמודי יבשות ומדינות, שפות, נקודות מכירה, מפיצים, שותפים, ערוצים רשמיים והזדמנויות שעדיין פתוחות.",
    },
    {
      title: "מערכת פניות עסקית",
      text: "טופס מובנה למדינה, סוג עסק, תפקיד, שוק יעד, ערוץ מכירה, תחום עניין, היקף משוער ותקופת השקה.",
    },
    {
      title: "מרכז ידע",
      text: "מאמרים, מדריכים, שאלות נפוצות, משאבים, checklists, templates, מחקר, Academy, Support ו-Partner Success.",
    },
    {
      title: "כלים אינטראקטיביים",
      text: "מחשבונים, בדיקות התאמה, שאלוני מוכנות, כלי תכנון, בדיקות GTIN, תכנון וריאציות ומוכנות למרקטפלייס.",
    },
  ];

  const trafficPoints = [
    "כלי חינמי נותן לקהל מקצועי סיבה שימושית להגיע לאתר.",
    "מדריך מקצועי עונה על שאלה שמחפשים במנועי חיפוש ובמערכות AI.",
    "דף שוק מתאים לחיפוש לפי מדינה ומעניק הקשר מקומי.",
    "משאב להורדה או להדפסה עוזר לשותף להתכונן לשיחה.",
    "שאלון התאמה מסנן פניות ומוסיף הקשר לפני שהצוות חוזר.",
    "Academy, Support ו-Research מחזקים אמון לפני ואחרי התקשרות.",
  ];

  const trustPoints = [
    "שם חברה, מספר חברה, כתובת ופרטי קשר עקביים",
    "אנשי קשר ותפקידים לצד ערוצים רשמיים",
    "מידע עדכני על מוצרים, שווקים ונקודות מכירה",
    "מדיניות, תנאי שימוש, פרטיות ונגישות",
    "תיעוד מקורות, גבולות לטענות ותאריכי עדכון",
    "הפרדה בין עובדות, הערכות ותוכניות עתידיות",
  ];

  const deliverables = [
    "אתר תאגידי בינלאומי",
    "מרכז מותג וקטלוג שאינו חנות",
    "עמודי מוצרים, שירותים ושווקים",
    "עמודי שותפים ו-Where to Buy",
    "Official Channels וטופסי B2B",
    "כלי תכנון ומרכז משאבים",
    "Academy, מרכז תמיכה ו-Insights",
    "Research וספריית מסמכים ציבורית",
    "מספר שפות, hreflang ו-structured data",
    "sitemap, SEO טכני ו-analytics",
    "חיבורי CRM ואוטומציות כאשר נדרש",
    "תהליך תחזוקה ועדכון",
  ];

  return (
    <>
      <Section eyebrow={service.eyebrow} title={service.heroTitle || service.title} titleAs="h1" className="pb-8">
        <p className="max-w-4xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>{service.summary}</p>
        <p className="mt-4 max-w-4xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          השירות מתאים גם לחברה קיימת שהנוכחות שלה מפוזרת או מיושנת, וגם למותג ישראלי שרוצה להתחיל לפנות למפיצים, רשתות, מרקטפלייסים ושותפים מחוץ לישראל.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">
            דברו איתנו על הפיכת המותג לגלובלי
          </a>
          <a aria-label="צפייה בפרויקט Bumpers Comfort Ltd החי, נפתח בחלון חדש" className="btn-secondary" href="https://www.bumperscomfortltd.com/" rel="noopener noreferrer" target="_blank">
            לצפייה בפרויקט Bumpers החי
          </a>
        </div>
        <p className="mt-5 border-r-2 pr-4 text-sm font-medium" style={{ borderColor: "var(--primary)", color: "var(--text-soft)" }}>
          מתכנון זהות ומבנה המידע ועד פיתוח, תוכן, כלים, שפות, SEO והשקה.
        </p>
      </Section>

      <Section eyebrow="התאמה" title="למי מתאימה פלטפורמת מותג גלובלית?" className="py-8 lg:py-12">
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
          {audiences.map((audience) => (
            <article className="border-t pt-5" key={audience.title} style={{ borderColor: "var(--border)" }}>
              <h2 className="text-2xl font-semibold">{audience.title}</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{audience.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-4xl border-r-2 pr-4 text-base leading-7" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>
          האתר אינו מבטיח קבלה או אישור על ידי גוף כלשהו. הוא מסייע להציג זהות, בעלות, ערוצים, מידע ומסמכים בצורה רשמית ועקבית יותר.
        </p>
      </Section>

      <Section eyebrow="שכבות הפלטפורמה" title="הרבה מעבר לעמוד בית וכמה תמונות" className="py-8 lg:py-12">
        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {platformLayers.map((layer, index) => (
            <article className="grid gap-3 py-5 md:grid-cols-[4rem_0.7fr_1.3fr] md:items-start" key={layer.title} style={{ borderColor: "var(--border)" }}>
              <span className="english-tech text-sm font-semibold text-glowred">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-2xl font-semibold">{layer.title}</h2>
              <p className="text-base leading-7" style={{ color: "var(--text-muted)" }}>{layer.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-base leading-7" style={{ color: "var(--text-soft)" }}>
          כל כלי נבנה סביב החלטה עסקית אמיתית, ולא רק כדי להציג אנימציה באתר. חיבור CRM או אוטומציה מוגדר רק כאשר הוא נדרש ונכלל בהיקף העבודה.
        </p>
      </Section>

      <Section eyebrow="תנועה ופניות" title="לא מחכים שהגולש יקרא עמוד אודות ויעזוב" className="py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="max-w-3xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>
              תוכן וכלים יוצרים נקודות כניסה שימושיות לאתר. המטרה היא לא להעמיס עמודים, אלא לענות על שאלות אמיתיות של מפיץ, קניין, מנהל מרקטפלייס או שותף לפני שהוא פונה.
            </p>
            <ul className="mt-6 grid gap-3">
              {trafficPoints.map((item) => <li className="border-r pr-4 text-base leading-7" key={item} style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>{item}</li>)}
            </ul>
          </div>
          <aside className="border-y py-6" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-2xl font-semibold">מה אפשר לצפות ממנו?</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              השכבות האלה יוצרות יותר נקודות כניסה שימושיות לאתר ומגדילות את הסיכוי שמבקר רלוונטי יבין את החברה וימשיך לפנייה.
            </p>
            <p className="mt-4 text-sm leading-6" style={{ color: "var(--text-soft)" }}>
              אין הבטחה לכמות תנועה, למספר לידים, לדירוג בגוגל, לקישורים חיצוניים או למכירות.
            </p>
          </aside>
        </div>
      </Section>

      <Section eyebrow="רשמיות ואמון" title="כשהמידע מסודר, קל יותר לבדוק מי עומד מאחורי המותג" className="py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-lg leading-8" style={{ color: "var(--text-muted)" }}>
              כאשר פלטפורמה, מפיץ או שותף בודקים את החברה, הם מקבלים מקור ציבורי מסודר שאפשר להשוות מול מסמכים, ערוצי מכירה ופרטי קשר.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => <li className="border-t pt-3 text-base leading-7" key={item} style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>{item}</li>)}
            </ul>
          </div>
          <aside className="border-r-2 pr-5" style={{ borderColor: "var(--primary)" }}>
            <h2 className="text-2xl font-semibold">גבול חשוב</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              הפלטפורמה אינה תחליף למסמכי חברה, ייעוץ משפטי, רישוי, בדיקות רגולטוריות או מסמכים שהגוף המבקש דורש. היא מספקת מקור רשמי שניתן להפנות אליו ומחזקת את היכולת להציג מידע עקבי.
            </p>
          </aside>
        </div>
      </Section>

      <Section eyebrow="שני מסלולים" title="אפשר להתחיל משני מקומות שונים" className="py-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-3xl font-semibold">חידוש חברה קיימת</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              מתאים כשכבר קיימים אתר, מסמכים וערוצי מכירה, אבל המידע מפוזר, העיצוב מיושן או שאין שפה תאגידית ומקור רשמי אחד.
            </p>
            <p className="mt-4 text-sm font-semibold text-glowred">Audit ← מיפוי נכסים ← איחוד מידע ← תיקון סתירות ← ארכיטקטורה ← מעבר הדרגתי</p>
          </article>
          <article className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-3xl font-semibold">בניית נוכחות גלובלית מאפס</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
              מתאים לחברה שפועלת בעיקר בישראל, יש לה מוצר או שירות שאפשר להציע בעולם, אך עדיין אין תשתית לשותפים, מפיצים, שפות או פנייה עסקית.
            </p>
            <p className="mt-4 text-sm font-semibold text-glowred">שווקים ← קהלים ← מסלולי שותפות ← מקור נתונים ← תוכן ← כלים ← שפות ← השקה</p>
          </article>
        </div>
      </Section>

      <Section eyebrow="פרויקט חי של נביא נס" title="Bumpers Comfort Ltd, ממותג ישראלי לפלטפורמת שותפים גלובלית" className="py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-lg leading-8" style={{ color: "var(--text-muted)" }}>
              נביא נס בנתה עבור Bumpers Comfort Ltd פלטפורמה תאגידית ו-B2B בינלאומית שמציגה את החברה, המותג, המוצרים, השווקים, ערוצי המכירה והזדמנויות השותפות במקום רשמי אחד.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "אתר תאגידי שאינו מעבד הזמנות צרכניות",
                "הפניה לערוצי קנייה רשמיים ונפרדים",
                "מסלולי wholesale, distribution, retail, marketplaces, hospitality, corporate ו-media",
                "טופס פנייה עסקי שמסווג שוק, ערוץ והזדמנות",
                "עמודי שווקים, משאבים, Academy, Support, Research, Partner Success ו-Insights",
                "עשרה כלי תכנון עסקיים וגרסאות ב-14 שפות",
              ].map((item) => <li className="border-t pt-3 text-base leading-7" key={item} style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>{item}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-6" style={{ color: "var(--text-soft)" }}>
              הנתונים מתארים את מבנה הפלטפורמה החיה במועד הבדיקה ביולי 2026 ואינם טענה לתוצאה מסחרית.
            </p>
            <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-soft)" }}>
              האתר והמותג שייכים ל-Bumpers Comfort Ltd. הפרויקט מוצג כדוגמה לעבודת הדיגיטל והפיתוח של נביא נס.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a aria-label="צפייה באתר Bumpers Comfort Ltd החי, נפתח בחלון חדש" className="btn-secondary" href="https://www.bumperscomfortltd.com/" rel="noopener noreferrer" target="_blank">לצפייה בפרויקט החי</a>
              <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">דברו איתנו על פלטפורמה דומה</a>
            </div>
          </div>
          <div aria-label="תצוגת פרויקט Bumpers Comfort Ltd" className="overflow-hidden rounded-lg border shadow-sm" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
              <span className="english-tech text-xs font-semibold" style={{ color: "var(--text-soft)" }}>BUMPERSCOMFORTLTD.COM</span>
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--primary)" }} />
            </div>
            <div className="p-6 sm:p-8">
              <p className="english-tech text-xs font-semibold text-glowred">GLOBAL CORPORATE & B2B PLATFORM</p>
              <h2 className="mt-3 text-3xl font-semibold">Bumpers Comfort Ltd</h2>
              <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>
                תצוגת פרויקט, לצפייה באתר החי.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Company", "Partners", "Markets", "Tools", "Insights", "Official Stores"].map((label) => (
                  <span className="border-t pt-3 text-sm font-semibold" key={label} style={{ borderColor: "var(--border)" }}>{label}</span>
                ))}
              </div>
              <a aria-label="פתיחת אתר Bumpers Comfort Ltd, נפתח בחלון חדש" className="mt-8 inline-flex text-sm font-semibold text-glowred" href="https://www.bumperscomfortltd.com/" rel="noopener noreferrer" target="_blank">
                פתיחת האתר החי ←
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="תהליך עבודה" title="בונים לפי מצב החברה, לא לפי חבילת מדף" className="py-8 lg:py-12">
        <ol className="divide-y" style={{ borderColor: "var(--border)" }}>
          {(service.processSteps || []).map((step, index) => (
            <li className="grid gap-3 py-5 md:grid-cols-[4rem_0.7fr_1.3fr]" key={step.title} style={{ borderColor: "var(--border)" }}>
              <span className="english-tech text-sm font-semibold text-glowred">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="text-base leading-7" style={{ color: "var(--text-muted)" }}>{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="תוצרים" title="התוצרים נקבעים לפי מה שהחברה באמת צריכה" className="py-8 lg:py-12">
        <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => <li className="border-t pt-3 text-base leading-7" key={item} style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>{item}</li>)}
        </ul>
        <p className="mt-7 max-w-4xl text-base leading-7" style={{ color: "var(--text-soft)" }}>
          לא כל חברה צריכה את כל השכבות ביום הראשון. ניתן להתחיל מליבה רשמית ולהרחיב את הפלטפורמה בהדרגה.
        </p>
      </Section>

      <Section eyebrow="שאלות נפוצות" title="מה חשוב להבין לפני שמתחילים" className="py-8 lg:py-12">
        <div className="divide-y border-y" style={{ borderColor: "var(--border)" }}>
          {service.faqs.map((faq) => (
            <details className="py-4" key={faq.question} style={{ borderColor: "var(--border)" }}>
              <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
              <p className="mt-3 max-w-4xl text-base leading-7" style={{ color: "var(--text-muted)" }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTA
        title="רוצים לבנות מקור רשמי למותג, לשווקים ולשותפים שלכם?"
        text="שלחו לנו בוואטסאפ כמה מילים על החברה, היכן אתם פועלים ולאילו שווקים או שותפים אתם רוצים להגיע. נבדוק מה כבר קיים ומה נכון לבנות בשלב הראשון."
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
