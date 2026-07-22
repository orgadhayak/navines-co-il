import { notFound } from "next/navigation";
import Link from "next/link";
import { BrandInline } from "@/components/BrandInline";
import { BlogCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, site } from "@/data/site";
import { formatBlogDate } from "@/lib/dates";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

const solutionArticleContent: Record<
  string,
  {
    solutionHref: string;
    solutionLabel: string;
    intro: string;
    why: string;
    examples: string[];
    checklist: string[];
    summary: string;
  }
> = {
  "accountants-ai-data-automation": {
    solutionHref: "/solutions/accountants",
    solutionLabel: "פתרונות AI ואוטומציה לרואי חשבון",
    intro:
      "במשרד רואי חשבון יש הרבה מידע חשוב: דוחות, מסמכים, שאלות לקוחות, טבלאות, תזכורות ומשימות. כשהמידע מפוזר, הצוות מבזבז זמן על חיפוש במקום על עבודה מקצועית. מערכת AI טובה לא מחליפה רואה חשבון, אלא עוזרת לסדר את המידע ולהחזיר תשובות ראשוניות וברורות.",
    why:
      "הערך העסקי פשוט: במקום לחפש ידנית בקבצים, דוחות וטבלאות, אפשר לשאול את המערכת שאלה בעברית ולקבל סיכום, כיוון לבדיקה או רשימת פעולות להמשך. הפתרון מבוסס על יכולות AI מתקדמות וטכנולוגיות OpenAI, אבל נבנה סביב תהליך העבודה של המשרד ולא סביב מילים טכנולוגיות מסובכות.",
    examples: [
      "אילו לקוחות חסרים מסמכים החודש?",
      "סכם לי את הנקודות החשובות בדוח לפני שיחה עם לקוח",
      "אילו משימות פתוחות דורשות טיפול השבוע?",
      "האם יש חריגה שצריך לבדוק לפני שליחת הדוח?",
    ],
    checklist: [
      "איפה נשמרים הדוחות והמסמכים היום?",
      "אילו שאלות חוזרות מגיעות מלקוחות?",
      "איזה מידע הצוות מחפש שוב ושוב?",
      "אילו פעולות אפשר להפוך לתזכורת או משימה אוטומטית?",
    ],
    summary:
      "AI לרואי חשבון עובד טוב כשהוא בנוי בזהירות, עם הבנה מקצועית ועם גבולות ברורים. המטרה היא לחסוך זמן, לארגן מידע ולהציף נקודות חשובות, בזמן ששיקול הדעת המקצועי נשאר אצל רואה החשבון.",
  },
  "amazon-sellers-ai-data-monitoring": {
    solutionHref: "/solutions/amazon-sellers",
    solutionLabel: "פתרונות למוכרי Amazon",
    intro:
      "מוכר Amazon צריך לעקוב אחרי הרבה דברים במקביל: Account Health, השעיות, Listings, מלאי, מחירים, ביקורות, הודעות, דוחות ופרסום. כשהכל מפוזר, קל לפספס סימן חשוב או להגיב מאוחר מדי.",
    why:
      "שילוב של AI, דאטה וניטור עוזר להפוך את הפעילות מתגובה ללחץ לניהול מסודר. במקום לפתוח הרבה דוחות ולנסות להבין מה דחוף, אפשר לבנות דשבורד, התראות ושכבת שאלות שמראה מה ירד, מה דורש טיפול ומה מסוכן. אין כאן הבטחה לתוצאה או להחזרת חשבון, אלא דרך מסודרת לנתח מצב ולפעול נכון יותר.",
    examples: [
      "איזה מוצר ירד בביצועים השבוע?",
      "איזה Listing דורש שיפור תוכן או מחיר?",
      "מה ההתראה הכי דחופה ב Account Health?",
      "איפה יש סיכון במלאי, ביקורות או הודעות לקוחות?",
    ],
    checklist: [
      "האם יש מעקב קבוע אחרי Account Health?",
      "האם יש דוח ברור למלאי, מחירים ומוצרים חלשים?",
      "האם אתם יודעים לזהות התראות לפני שהן הופכות לחירום?",
      "האם יש לכם דרך לשאול את הדאטה שאלות רגילות ולקבל כיוון?",
    ],
    summary:
      "מוכרי Amazon צריכים גם תפעול וגם מודיעין עסקי. Navines Beacon, TalkToData ואוטומציות מותאמות יכולים לעזור לראות בעיות מוקדם יותר, להבין דוחות מהר יותר ולנהל חשבון בצורה רגועה וחכמה יותר.",
  },
  "freelancers-ai-automation-systems": {
    solutionHref: "/solutions/freelancers",
    solutionLabel: "פתרונות AI ואוטומציה לפרילנסרים",
    intro:
      "פרילנסר מנהל עסק שלם לבד או עם צוות קטן: לידים, לקוחות, הצעות מחיר, משימות, תשלומים, דוחות ותזכורות. כשכל דבר נמצא במקום אחר, הרבה אנרגיה הולכת על מעקב במקום על עבודה מקצועית.",
    why:
      "אוטומציה טובה לפרילנסרים לא חייבת להיות גדולה או יקרה. לפעמים מערכת קטנה שמרכזת פניות, משימות ותשלומים משנה את כל היום. אפשר גם לחבר שכבת AI שמאפשרת לשאול מה פתוח, מי מחכה לתשובה, איזה פרויקט תקוע ומה צריך לעשות השבוע.",
    examples: [
      "איזה לקוחות מחכים להצעת מחיר?",
      "מי לא שילם עדיין?",
      "איזה פרויקט תקוע יותר מדי זמן?",
      "איזה אתר לקוח האט או מציג תקלה?",
    ],
    checklist: [
      "מאיפה מגיעות הפניות היום?",
      "איפה נשמרות הצעות מחיר ומשימות?",
      "מה חוזר על עצמו בכל שבוע ואפשר לאוטומט?",
      "האם אתם מנהלים אתרי לקוחות שצריכים ניטור?",
    ],
    summary:
      "פרילנסרים לא צריכים לעבוד ידנית על כל דבר. מערכת קטנה, ברורה וחכמה יכולה לתת סדר, לחסוך זמן ולעזור לתת שירות טוב יותר בלי להרגיש שהעסק בורח מהידיים.",
  },
};

const courseArticleContent: Record<
  string,
  {
    courseHref: string;
    courseLabel: string;
    intro: string;
    why: string;
    practical: string;
    yearSupport: string;
    examples: string[];
    checklist: string[];
    summary: string;
  }
> = {
  "ai-course-for-kids-from-idea-to-product": {
    courseHref: "/courses/ai-for-kids",
    courseLabel: "קורס AI לילדים",
    intro:
      "ילדים גדלים לתוך עולם שבו AI נמצא כמעט בכל מקום, אבל הדרך הנכונה ללמוד אותו היא לא רק לשאול צ׳אטבוט שאלות. הדרך הנכונה היא להבין איך רעיון הופך למשהו שאפשר לבנות, לבדוק, לשפר ולהציג.",
    why:
      "ילד שלומד AI בצורה מעשית לומד לחשוב אחרת: לשאול שאלות טובות, לפרק בעיה לחלקים קטנים, לבחור כיוון, לעבוד עם זמן ולהמשיך גם כשהדבר הראשון שבנה עדיין לא מושלם.",
    practical:
      "במקום רק לצפות בשיעורים, החניכים עובדים על פרויקטים. הם לומדים לבנות אתרים קטנים, כלים חכמים, עוזרים דיגיטליים ופרויקטים יצירתיים שמתאימים לרמה שלהם. המטרה היא לא להפוך כל רעיון לעסק, אלא לתת ביטחון וכלים ליצור.",
    yearSupport:
      "הליווי לאורך שנה חשוב כי רעיונות טובים לא נגמרים אחרי 10 מפגשים. במהלך השנה אפשר להמשיך לשפר, לשאול, לקבל כיוון ולהפוך תוצר ראשוני למשהו הרבה יותר ברור ואיכותי.",
    examples: [
      "ילד שמגיע עם רעיון למשחק, אתר או עוזר דיגיטלי ולומד להפוך אותו לתוצר שאפשר להציג",
      "ילדה שרוצה לבנות כלי שעוזר לה ללמוד, לארגן מידע או להציג תחום שמעניין אותה",
      "חניך שלומד לא להיתקע בגלל חוסר זמן, אלא לפרק את הפרויקט לצעדים קטנים",
      "פרויקט שמתחיל פשוט ומשתפר מפגישה לפגישה"
    ],
    checklist: [
      "האם הילד סקרן ורוצה ליצור?",
      "האם הוא מוכן לעבוד גם בין המפגשים?",
      "האם יש רעיון שמסקרן אותו, גם אם הוא עדיין לא מסודר?",
      "האם המשפחה מבינה שהתהליך דורש התמדה ולא רק השתתפות בשיעור?"
    ],
    summary:
      "קורס AI לילדים צריך לתת הרבה יותר מידע. הוא צריך לתת צורת חשיבה, ביטחון ליצור ויכולת להתחיל לבנות דברים אמיתיים בעולם החדש. לכן המסלול של נביא נס ישראל בע\"מ משלב מפגשים פרונטליים, פרויקטים וליווי לאורך שנה.",
  },
  "ai-course-for-adults-build-products-with-ai": {
    courseHref: "/courses/ai-for-adults",
    courseLabel: "קורס AI לבוגרים",
    intro:
      "AI הפך לכלי עבודה אמיתי, אבל הרבה אנשים עדיין משתמשים בו בצורה שטחית: כותבים שאלה, מקבלים תשובה, וממשיכים הלאה. בקורס מעשי לומדים איך להפוך AI לשיטת עבודה שמייצרת תוצרים.",
    why:
      "בוגרים, בעלי עסקים, פרילנסרים ומנהלים צריכים לדעת לא רק איזה כלי לפתוח, אלא איך לחשוב מוצרית: מה הבעיה, למי זה מיועד, איזה תוצר צריך לבנות ואיך מתקדמים גם בלי רקע טכנולוגי.",
    practical:
      "במהלך המסלול עובדים על רעיונות אמיתיים: כלי קטן שחוסך זמן, אתר שמציג שירות, תהליך עבודה שמסדר משימות או מוצר דיגיטלי שאפשר להציג. לא חושפים שיטות פנימיות פרטיות, אלא מלמדים עקרונות עבודה, סדר, תכנון ובנייה.",
    yearSupport:
      "ליווי לאורך שנה משנה את הקורס מתוכן שנגמר למסגרת שממשיכה לדחוף קדימה. המשתתפים יכולים לחזור לפרויקטים, לשפר אותם, לקבל כיוון ולהבין מה הצעד הבא במקום להיתקע לבד אחרי המפגשים.",
    examples: [
      "בעל עסק שמבין איך להפוך תהליך ידני לכלי עבודה פשוט",
      "פרילנסר שבונה עמוד או מוצר שמציג את השירות שלו טוב יותר",
      "מנהל שרוצה לסדר משימות, תוכן ונתונים בעזרת AI",
      "יזם שמתחיל מרעיון ומתקדם לתוצר שאפשר להראות למשקיעים, לקוחות או שותפים"
    ],
    checklist: [
      "איזה רעיון או תהליך הייתם רוצים לשפר?",
      "איפה אתם מבזבזים זמן ידני היום?",
      "איזה תוצר הייתם רוצים להציג בסוף התהליך?",
      "האם אתם מוכנים לעבוד בין המפגשים ולהמשיך לשפר לאורך השנה?"
    ],
    summary:
      "קורס AI לבוגרים צריך ללמד שיטת עבודה ולא רק כלי אחד. המטרה היא לעזור למשתתפים לבנות כמה פרויקטים אמיתיים בהתאם למחויבות ולהתקדמות שלהם, בלי הבטחות שווא ובלי צורך ברקע טכנולוגי קודם.",
  },
};

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const isTalkToDataPost = post.slug === "talk-to-business-data-chatgpt";
  const isEmailDataPost = post.slug === "email-to-chatgpt-talktodata";
  const isBusinessAutomationPost = post.slug === "business-automation-start";
  const isInvoiceScanningPost = post.slug === "ai-invoice-scanning-and-filtering";
  const isEcommerceStorePost = post.slug === "ecommerce-service-guide";
  const isMobileAppPost = post.slug === "mobile-app-service-guide";
  const isBusinessWebsite999Post = post.slug === "business-website-999-shekel";
  const isSmartWebsiteLeadPost = post.slug === "smart-website-lead-engine-quality-leads";
  const isAiChatWebsitePost = post.slug === "ai-chat-for-business-website";
  const isTechnicalSupportPost = post.slug === "technical-support-cyber-networks-business";
  const isAccountHackPost = post.slug === "what-to-do-when-account-is-hacked";
  const isSecureAccountsPost = post.slug === "how-to-secure-accounts-after-hack";
  const isBusinessDueDiligencePost = post.slug === "business-due-diligence-before-buying";
  const isExternalAmazonTrafficPost = post.slug === "how-to-bring-external-traffic-to-amazon-products";
  const isMultilingualAmazonSeoPost = post.slug === "multilingual-seo-website-for-amazon-sellers";
  const isAmazonIQPost = post.slug === "amazoniq-amazon-seller-intelligence-dashboard-gpt";
  const isAccountantChoicePost = post.slug === "how-to-choose-accountant-for-digital-business";
  const isBrowserExtensionPost = post.slug === "how-to-build-browser-extension-for-business";
  const isAppraisalGuidePost = post.slug === "vehicle-property-agricultural-appraisal-guide";
  const isLegalOnlinePost = post.slug === "legal-technology-for-online-businesses";
  const isTrafficPointsPost = post.slug === "traffic-points-speed-and-mobile-phone";
  const solutionArticle = solutionArticleContent[post.slug];
  const courseArticle = courseArticleContent[post.slug];
  const appraisalWhatsappHref = `${site.whatsappHref}?text=${encodeURIComponent("שלום, אשמח לקבל מידע על שירותי שמאות רכב, רכוש או חקלאות. סוג האירוע ומועדו הם:")}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    author: { "@id": `${site.url}/#organization`, name: "צוות נביא נס" },
    publisher: { "@id": `${site.url}/#organization`, name: site.legalName },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "he-IL",
  };
  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "בלוג", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }])} />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-sm font-semibold text-glowred">
          <BrandInline text={post.category} />
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-6xl">
          <BrandInline text={post.title} />
        </h1>
        <p className="mt-5 text-xl leading-9 text-zinc-300">
          <BrandInline text={post.excerpt} />
        </p>
        {post.englishTitle && post.englishExcerpt ? (
          <div className="mt-5 rounded-[1.4rem] border border-purple-300/16 bg-purple-500/[0.07] p-5">
            <p className="text-sm font-semibold text-glowred">תקציר באנגלית</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              <BrandInline text={post.englishTitle} />
            </h2>
            <p className="mt-3 text-lg leading-8 text-zinc-300">
              <BrandInline text={post.englishExcerpt} />
            </p>
          </div>
        ) : null}
        <p className="mt-4 text-sm text-zinc-500">
          {formatBlogDate(post.publishedAt)} • מחבר:{" "}
          {site.name}{" "}
          • {post.readingTime}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-secondary" href={`https://www.linkedin.com/sharing/share-offsite/?url=${site.url}/blog/${post.slug}`}>
            שיתוף בלינקדאין
          </a>
          <a className="btn-secondary" href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${site.url}/blog/${post.slug}`)}`}>
            שיתוף בוואטסאפ
          </a>
          <a className="btn-secondary" href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${site.url}/blog/${post.slug}`}>
            שיתוף במייל
          </a>
        </div>

        {isAmazonIQPost ? <AmazonIQArticleBody /> : isLegalOnlinePost ? <LegalOnlineArticleBody /> : isTrafficPointsPost ? <TrafficPointsArticleBody /> : isAppraisalGuidePost ? <AppraisalGuideArticleBody /> : isBrowserExtensionPost ? <BrowserExtensionArticleBody /> : isAccountantChoicePost ? <AccountantChoiceArticleBody /> : isBusinessAutomationPost ? <BusinessAutomationArticleBody /> : isInvoiceScanningPost ? <InvoiceScanningArticleBody /> : isEcommerceStorePost ? <EcommerceStoreArticleBody /> : isMobileAppPost ? <MobileAppDevelopmentArticleBody /> : isExternalAmazonTrafficPost ? <ExternalAmazonTrafficArticleBody /> : isMultilingualAmazonSeoPost ? <MultilingualAmazonSeoArticleBody /> : isSecureAccountsPost ? <SecureAccountsAfterHackArticleBody /> : isAccountHackPost ? <AccountHackArticleBody /> : isBusinessDueDiligencePost ? <BusinessDueDiligenceArticleBody /> : isAiChatWebsitePost ? <AiChatWebsiteArticleBody /> : isTechnicalSupportPost ? <TechnicalSupportArticleBody /> : isSmartWebsiteLeadPost ? <SmartWebsiteLeadArticleBody /> : isBusinessWebsite999Post ? <BusinessWebsite999ArticleBody /> : isEmailDataPost ? <EmailToChatGptArticleBody /> : isTalkToDataPost ? <TalkToDataArticleBody /> : solutionArticle ? <SolutionArticleBody content={solutionArticle} /> : courseArticle ? <CourseArticleBody content={courseArticle} /> : <DefaultArticleBody post={post} />}
        {post.faqs?.length ? <PostFaqList faqs={post.faqs} /> : null}
      </article>
      <CTA
        title={isAmazonIQPost ? "רוצים לראות את נתוני Amazon בצורה ברורה יותר?" : isLegalOnlinePost ? "רוצים לארגן את הצד הדיגיטלי לפני שיחה מקצועית?" : isTrafficPointsPost ? "רוצים להבין איך לארגן חומר תעבורה בצורה מסודרת?" : isAppraisalGuidePost ? "צריכים שמאות רכב, רכוש או חקלאות?" : isBrowserExtensionPost ? "יש לכם רעיון לתוסף לדפדפן?" : isAccountantChoicePost ? "צריכים רואה חשבון שמבין עסק דיגיטלי?" : isBusinessAutomationPost ? "רוצים לבדוק איזו אוטומציה מתאימה לעסק שלכם?" : isInvoiceScanningPost ? "רוצים להפוך חשבוניות לנתונים מסודרים?" : isEcommerceStorePost ? "רוצים לבנות או לשפר חנות איקומרס?" : isMobileAppPost ? "יש לכם רעיון לאפליקציה?" : isExternalAmazonTrafficPost || isMultilingualAmazonSeoPost ? "רוצים להביא תנועה מחוץ ל Amazon?" : isSecureAccountsPost || isAccountHackPost ? "צריכים סיוע דחוף אחרי פריצה לחשבון?" : isBusinessDueDiligencePost ? "בודקים עסק לפני רכישה?" : isAiChatWebsitePost ? "רוצים צ׳ט AI חכם באתר שלכם?" : isTechnicalSupportPost ? "יש תקלה שמפריעה לעסק לעבוד?" : isSmartWebsiteLeadPost ? "רוצים לבנות כלי חינמי ושימושי לגולשים באתר שלכם?" : isBusinessWebsite999Post ? "רוצים אתר תדמית לעסק במחיר 999 ₪?" : courseArticle ? "רוצים לבדוק התאמה לקורס AI מעשי?" : isEmailDataPost ? "רוצים לחבר אימיילים ונתונים אל ChatGPT בצורה מאובטחת?" : isTalkToDataPost || solutionArticle ? "רוצים לדבר עם הנתונים של העסק שלכם דרך ChatGPT?" : "רוצים שנבדוק את האתר או התהליך העסקי שלכם?"}
        text={isAmazonIQPost ? "אפשר לפתוח את AmazonIQ לגישה מוגבלת, או לשלוח לנו בוואטסאפ באיזה Marketplace אתם פועלים ומה אתם רוצים להבין טוב יותר בדוחות ובפעילות." : isLegalOnlinePost ? "אפשר לכתוב לנו בוואטסאפ רק את נושא הפנייה הכללי, בלי מסמכים ובלי מידע רגיש. נעזור להבין אילו מערכות, נכסים דיגיטליים ושאלות טכנולוגיות כדאי לסדר." : isTrafficPointsPost ? "אפשר לכתוב לנו בוואטסאפ את נושא הפנייה הכללי בלבד, בלי דוח, מספר רישיון או מידע מזהה. נעזור להבין איך לגשת לנושא בצורה מסודרת יותר." : isAppraisalGuidePost ? "שלחו לנו בוואטסאפ אם מדובר ברכב, רכוש או חקלאות, מתי התרחש האירוע ומה דחוף. בפנייה הראשונה אין לשלוח תעודת זהות, פרטי אשראי, סיסמאות, מסמכים רפואיים או חומר רגיש. לאחר בירור ראשוני יוסבר כיצד להעביר חומר רלוונטי בצורה מסודרת." : isBrowserExtensionPost ? "שלחו לנו בוואטסאפ מה הרעיון, מי אמור להשתמש בתוסף ואיזו פעולה הוא צריך לחסוך. נבדוק אם נכון להתחיל בגרסה פשוטה ואיך לבנות אותה בצורה נקייה ובטוחה." : isAccountantChoicePost ? "שלחו לנו בוואטסאפ מה סוג העסק, באילו מערכות אתם עובדים, ואם יש פעילות אונליין, Amazon, Shopify או WooCommerce. נבין את הצורך ונבדוק איך נכון לכוון אתכם לאיש מקצוע מתאים." : isBusinessAutomationPost ? "שלחו לנו בוואטסאפ מה חוזר על עצמו אצלכם בעסק: פניות, מיילים, חשבוניות, CRM, דוחות או תזכורות. נבדוק איפה אוטומציה יכולה לחסוך זמן בלי לסבך את הצוות." : isInvoiceScanningPost ? "שלחו לנו איזה סוג חשבוניות או מסמכים אתם מקבלים, באיזו מערכת הם צריכים להסתדר, ונבדוק אם אפשר לבנות פתרון מותאם עם בקרת אנוש והרשאות נכונות." : isEcommerceStorePost ? "שלחו לנו מה אתם מוכרים, באיזו פלטפורמה אתם חושבים להשתמש, ומה חשוב לכם: סליקה, משלוחים, מלאי, מהירות או SEO. נכוון אתכם לצעד הראשון." : isMobileAppPost ? "שלחו לנו מה האפליקציה אמורה לפתור, מי ישתמש בה ומה קיים היום. נגיד אם נכון להתחיל באפליקציה, באתר מובייל או במערכת פשוטה יותר." : isExternalAmazonTrafficPost || isMultilingualAmazonSeoPost ? "שלחו לנו כמה קישורים למוצרים, באיזו מדינה אתם מוכרים ומה היעד שלכם. נבדוק איך אפשר לבנות סביבם אתר תוכן איכותי שמפנה לעמודי Amazon בצורה מסודרת." : isSecureAccountsPost || isAccountHackPost ? "שלחו לנו בוואטסאפ מה קרה, באיזה חשבון מדובר והאם עדיין יש גישה למייל או לטלפון. ננסה להבין את המצב, לשמור כיוון מסודר ולפעול בצורה חוקית וזהירה." : isBusinessDueDiligencePost ? "שלחו לנו מה אתם שוקלים לקנות ומה המוכר כבר הציג. נבדוק איזה נכסים, נתונים וסיכונים כדאי לבחון לפני שמתקדמים." : isAiChatWebsitePost ? "שלחו לנו בוואטסאפ את כתובת האתר או תיאור קצר של השירותים שלכם. נבדוק איזה צ׳ט קצר וברור יכול לעזור לגולשים לקבל תשובות ולפנות אליכם." : isTechnicalSupportPost ? "שלחו לנו בוואטסאפ מה לא עובד: אתר, מייל, דומיין, רשת או מחשב. נבדוק אם אפשר להתחיל מרחוק ומה הצעד הנכון." : isSmartWebsiteLeadPost ? "שלחו לנו בוואטסאפ את כתובת האתר והנישה שלכם. נחשוב יחד איזה כלי יכול להיטיב עם הגולש, לתת לו ערך אמיתי בחינם, לבנות אמון, ליצור שימוש באתר ולקדם את העסק קדימה." : isBusinessWebsite999Post ? "שלחו לנו בוואטסאפ מה העסק עושה, אם יש לכם לוגו ותוכן בסיסי, ונגיד אם המסלול מתאים או שצריך פתרון רחב יותר." : courseArticle ? "שלחו לנו בוואטסאפ מי מתעניין במסלול, ילד או בוגר, ומה הייתם רוצים לבנות או ללמוד. נבדוק התאמה ונכוון אתכם בצורה פשוטה." : isEmailDataPost ? "שלחו לנו בוואטסאפ איזה מייל יש לכם, איזה מידע חשוב לכם להבין ומה הייתם רוצים לשאול. נבדוק אם יש דרך גישה מסודרת ובטוחה ונכוון אתכם לפתרון נכון." : isTalkToDataPost || solutionArticle ? "שלחו לנו בוואטסאפ איזו מערכת יש לכם, מה אתם רוצים להבין מהר יותר ואיפה יש עבודה ידנית שחוזרת על עצמה. נבדוק איך אפשר לחבר את זה בצורה שימושית, ברורה וזהירה." : "כתבו לנו בוואטסאפ מה אתם רוצים לשפר. שיחת היכרות חינם וחברית, אנחנו מפתח תקווה, ונשמח להבין יחד מה הצעד הבא הכי נכון."}
        whatsappHref={isAppraisalGuidePost ? appraisalWhatsappHref : undefined}
        whatsappLabel={isAppraisalGuidePost ? "סיוע ראשוני בוואטסאפ" : undefined}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-white">מאמרים קשורים</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.slug} post={item} />
          ))}
        </div>
      </section>
    </>
  );
}

function getRelatedPosts(slug: string) {
  const current = blogPosts.find((post) => post.slug === slug);
  if (!current) return blogPosts.slice(0, 3);

  const bySlug = new Map(blogPosts.map((post) => [post.slug, post]));
  const selected: typeof blogPosts = [];
  const selectedSlugs = new Set<string>([slug]);

  const add = (post: (typeof blogPosts)[number] | undefined) => {
    if (!post || selectedSlugs.has(post.slug) || selected.length >= 3) return;
    selected.push(post);
    selectedSlugs.add(post.slug);
  };

  current.relatedSlugs?.forEach((relatedSlug) => add(bySlug.get(relatedSlug)));

  blogPosts
    .filter((post) => post.category === current.category)
    .forEach(add);

  blogPosts
    .filter((post) => post.tags.some((tag) => current.tags.includes(tag)))
    .forEach(add);

  blogPosts.forEach(add);

  return selected.slice(0, 3);
}

function PostFaqList({ faqs }: { faqs: NonNullable<(typeof blogPosts)[number]["faqs"]> }) {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300">
      <h2>שאלות נפוצות</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

function AppraisalGuideArticleBody() {
  const mistakes = [
    "מתחילים לתקן או לפנות לפני שתיעדו את מצב הנזק, כאשר לא קיימת סכנה שמחייבת פעולה מיידית.",
    "מצלמים רק תמונה כללית ולא מפרידים בין אזורים, פריטים, מספרים, תאריכים וזוויות.",
    "זורקים קבלות, מסמכי רכישה, הצעות מחיר, מסמכי מוסך או תיעוד גידול שיכול להסביר את הערך והעלות.",
    "מערבבים נזק ישן וחדש בלי לנסות להפריד ביניהם בצורה שניתן לבדוק.",
    "מסתמכים על זיכרון במקום לבנות ציר זמן מסודר של האירוע, הדיווחים והפעולות שבוצעו.",
    "שולחים חומר רגיש מוקדם מדי ובערוצים לא מסודרים, במקום להבין קודם מה באמת נדרש להעביר.",
  ];

  const prep = [
    "תיאור קצר של האירוע: מה קרה, מתי, איפה ומי הגורמים המעורבים ככל שידוע.",
    "תמונות מקוריות של הנזק לפני תיקון, פינוי או שינוי מצב, אם הדבר אפשרי ובטוח.",
    "מסמכים רלוונטיים כמו חשבוניות, הצעות מחיר, מסמכי מוסך, מסמכי רכישה או תיעוד גידול.",
    "רשימת פריטים שנפגעו, כולל מיקום, כמות, גיל משוער ומצב לפני האירוע ככל שידוע.",
    "התכתבות עם מבטח, מוסך, ספק, גורם מזיק או צד שלישי, בלי למחוק הודעות או לשנות קבצים.",
  ];

  const sources = [
    ["רשימת שמאי רכב במשרד התחבורה", "https://www.gov.il/he/departments/dynamiccollectors/automobile-appraisers"],
    ["מידע על הסמכת מקצועות הרכב", "https://www.gov.il/he/departments/topics/certification_for_vehicle_professions/govil-landing-page"],
    ["הוראות רשות שוק ההון בנושא שמאי רכב ומבטחים", "https://www.gov.il/BlobFolder/dynamiccollectorresultitem/notice-2023-074/he/regulation_%202024-1-7_final_pdf.pdf"],
    ["רשימות מומחים מטעם בתי המשפט", "https://www.gov.il/he/pages/experts_lists"],
  ];

  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-li:text-zinc-300 prose-a:text-glowred">
      <h2>למה הדקות והימים הראשונים אחרי נזק חשובים</h2>
      <p>
        אחרי תאונה, הצפה, שריפה, פריצה או נזק בשטח חקלאי, טבעי לרצות לתקן מהר ולחזור לשגרה. אבל מבחינה שמאית, הזמן הראשון אחרי האירוע הוא קריטי: זה השלב שבו הנזק עדיין נראה במצבו המקורי, לפני תיקון, פינוי, ייבוש, החלפה או שינוי סביבתי. תיעוד נכון בשלב הזה יכול לעזור להבין מה נפגע, מה כבר היה קיים קודם, אילו פריטים חסרים ואילו מסמכים צריך לאסוף.
      </p>
      <p>
        אין לעכב פעולות חירום שנדרשות לשמירה על חיי אדם, למניעת סכנה או לצמצום נזק מתמשך. כאשר חייבים לפעול מיד, יש לתעד ככל האפשר לפני הפעולה ובמהלכה. גם צילום קצר, תיאור זמן ומיקום ושמירה של מסמכים יכולים להיות משמעותיים בהמשך.
      </p>

      <h2>מה תפקידו של השמאי</h2>
      <p>
        שמאי אינו רק מי שנותן מספר בסוף הבדיקה. תפקידו לבדוק את הנזק, להבין את ההקשר, לבחון מסמכים, להעריך רכיבים רלוונטיים ולהציג חוות דעת שמאית מנומקת. חוות דעת טובה מסבירה מה נבדק, אילו נתונים שימשו בסיס, מה דרך החישוב ומהם גבולות הבדיקה.
      </p>
      <p>
        נביא נס מסייעת במעטפת הטכנולוגית והתפעולית: ארגון החומר, תיעוד דיגיטלי, בקרת מסמכים, בניית ציר זמן והנגשת המידע. כל בדיקה וחוות דעת נערכת ונחתמת על ידי איש המקצוע המתאים לתחום השמאות הרלוונטי.
      </p>

      <h2>שמאות רכב — מדוע חשוב לתעד לפני תיקון</h2>
      <p>
        ברכב, חלק גדול מהמידע נמצא במצב הנזק לפני שהרכב נכנס לתיקון: מוקדי פגיעה, חלקים שניזוקו, התאמה בין הנזק לתיאור האירוע, אפשרות לנזק קודם, ירידת ערך, עלויות חלקים ועבודה ומסמכי מוסך. כאשר התיקון מתחיל לפני תיעוד, חלק מהמידע עלול להיעלם או להפוך לקשה יותר לבדיקה.
      </p>
      <p>
        בשמאות רכב קיימת חשיבות לפנייה לפני תחילת התיקון, ככל שהדבר אפשרי ובטוח, כדי שניתן יהיה לבדוק ולתעד את הנזק במצבו המקורי. המטרה אינה להבטיח תוצאה מול מבטח, אלא להציג הערכה מקצועית, עצמאית ומבוססת, הכוללת את רכיבי הנזק הרלוונטיים ואת דרך החישוב.
      </p>

      <h2>שמאות רכוש — מבנה, תכולה, ציוד ומלאי</h2>
      <p>
        נזק לרכוש יכול להתרחש בדירה, בעסק, במחסן, במשרד או במפעל. הוא יכול לכלול מים, הצפה, אש, עשן, פיח, סערה, פריצה, גניבה, ונדליזם או פגיעה מצד שלישי. לעיתים הנזק הוא במבנה, ולעיתים בתכולה, בציוד, במלאי, בריהוט או במערכות.
      </p>
      <p>
        כאן חשוב לחבר בין תמונות, רשימות פריטים, הצעות מחיר, חשבוניות, מסמכי רכישה, עלויות תיקון, שיקום או החלפה, ובלאי או פחת כאשר הם רלוונטיים. ככל שהחומר מסודר יותר, כך קל יותר להבין מה נבדק ומה עדיין חסר.
      </p>

      <h2>שמאות חקלאות — גידולים, תשתיות והשלכות מתמשכות</h2>
      <p>
        בנזק חקלאי, התמונה לא תמיד מסתיימת ביום האירוע. פגיעה בגידולים, מטעים, פרדסים, חממות, השקיה, ציוד או תשתיות יכולה להשפיע גם על המשך הגידול, על איכות וכמות יבול, על עלויות שיקום ועל צורך בטיפול או נטיעה מחדש. לכן תיעוד שטח, מדידות, תמונות, מפות, מסמכי גידול ורישומי טיפול יכולים להיות חשובים.
      </p>
      <p>
        גם כאן אין טכנולוגיה שמחליפה בדיקה מקצועית. היא יכולה לעזור לארגן את הנתונים כך שאיש המקצוע יראה את התמונה בצורה ברורה יותר ויוכל להתייחס לרכיבים הרלוונטיים.
      </p>

      <h2>ההבדל בין שמאות רכוש לשמאות מקרקעין</h2>
      <p>
        חשוב להבחין בין שמאות רכוש והערכת נזק לבין שמאות מקרקעין. שמאות רכוש עוסקת בנזק למבנה, תכולה, ציוד, מלאי או מערכות. שמאות מקרקעין עוסקת בנושאים כמו שווי מקרקעין, זכויות בנייה או שווי קרקע, והיא תחום מקצועי נפרד.
      </p>
      <p>
        אין לראות בשירותי שמאות רכוש הצעה להערכת שווי מקרקעין, זכויות בנייה או שווי קרקע, אלא אם השירות ניתן בפועל על ידי שמאי מקרקעין מוסמך ומאומת.
      </p>

      <h2>מה כוללת חוות דעת שמאית טובה</h2>
      <p>
        חוות דעת שמאית טובה בנויה כך שאפשר לקרוא אותה, לבדוק אותה ולהבין את ההיגיון שלה. היא כוללת תיאור האירוע, מה נבדק, מסמכים שנבחנו, תמונות, ממצאים, רכיבי נזק, דרך חישוב, הסתייגויות כאשר ישנן ונספחים מסודרים.
      </p>
      <p>
        כאשר חוות הדעת מיועדת למחלוקת או להליך משפטי, היא צריכה להתאים לתחום המומחיות של החותם ולדרישות הספציפיות של העניין. ההחלטה אם לקבל את חוות הדעת ומה המשקל שיינתן לה מסורה לגורם המוסמך או לבית המשפט.
      </p>

      <h2>איך טכנולוגיה מסייעת לתיעוד</h2>
      <p>
        הכלים הדיגיטליים מסייעים להפוך חומר מפוזר לתיק מסודר: תמונות לפי אזור, פריט ותאריך; סימון רכיבי נזק; טבלאות מדידה; ציר זמן; גרסאות מסמכים; השוואת הצעות מחיר; והפרדה בין פריטים שנבדקו לבין פריטים שחסר לגביהם מידע.
      </p>
      <p>
        הפרטים הקטנים הם לעיתים ההבדל בין אומדן כללי לבין חוות דעת שקל להבין, לבדוק ולהגן עליה מקצועית. הכלים מסייעים לשמאי, אך אינם מחליפים ביקור, בדיקה, מדידה, ניסיון מקצועי ושיקול דעת.
      </p>

      <h2>תמונות, מדידות, מסמכים וציר זמן</h2>
      <p>
        תיעוד טוב אינו מסתכם באלבום תמונות. רצוי לדעת מתי צולמה כל תמונה, מה היא מציגה, באיזה אזור, מהו הפריט הרלוונטי, האם קיימת מדידה, האם יש מסמך שמסביר את שווי הפריט או עלות התיקון, והאם האירוע תועד מול גורם נוסף. ציר זמן קצר יכול לעזור להבין מה קרה קודם ומה נעשה לאחר מכן.
      </p>

      <h2>כיצד בודקים שלא נשכח רכיב נזק</h2>
      <p>
        אחת הסיבות המרכזיות לעבוד מסודר היא למנוע שכחה. כאשר בונים רשימה לפי אזורים, פריטים, מסמכים ופעולות, קל יותר לראות מה נבדק ומה עדיין חסר. לדוגמה: ברכב, האם נבדקו חלקים, עבודה, ירידת ערך ומסמכי מוסך; ברכוש, האם נבדקו תכולה, ציוד ומלאי; בחקלאות, האם נבדקו גידולים, תשתיות והשפעה מתמשכת.
      </p>

      <h2>מה טכנולוגיה אינה יכולה לעשות</h2>
      <p>
        טכנולוגיה אינה מחליטה מהו הנזק, אינה מבטיחה דיוק מלא ואינה מחליפה מומחיות מקצועית. היא אינה יכולה להפוך חומר חסר לחומר מלא, ואינה מבטיחה שחברת ביטוח או גורם אחר יקבלו את המסקנות. הערך שלה הוא בארגון, בקרה, תיעוד והפחתת חוסרים.
      </p>

      <h2>חוות דעת מומחה לצורך מחלוקת או הליך משפטי</h2>
      <p>
        במקרים מסוימים נדרשת חוות דעת מומחה לצורך מחלוקת או הליך משפטי. במצב כזה חשוב במיוחד שהחומר יהיה מאורגן, שהנספחים יהיו ברורים, ושזהות החותם ותחום מומחיותו יתאימו לנושא. גם כאן, חוות הדעת אינה מבטיחה תוצאה, אלא מציגה עמדה מקצועית שניתן לבחון.
      </p>

      <h2>טעויות נפוצות אחרי אירוע נזק</h2>
      <ul>
        {mistakes.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <h2>מה להכין לקראת ביקור שמאי</h2>
      <ul>
        {prep.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <h2>איך לבחור את איש המקצוע המתאים</h2>
      <p>
        הבחירה מתחילה בהתאמה לתחום: רכב, רכוש או חקלאות. כדאי להבין מי בודק, מי חותם, מה תחום המומחיות, אילו מסמכים נדרשים, האם יש צורך בביקור, ומה מטרת חוות הדעת. לא כדאי להסתמך על הבטחות לתוצאה, פיצוי או קבלה על ידי מבטח.
      </p>
      <p>
        אפשר להיעזר במקורות רשמיים כדי להבין את מסגרת התחום, אך אין בכך כדי להעיד על איש מקצוע מסוים מטעם נביא נס או על אישור לשירות מסוים באתר:
      </p>
      <ul>
        {sources.map(([label, href]) => (
          <li key={href}>
            <a href={href} rel="noopener noreferrer" target="_blank">{label}</a>
          </li>
        ))}
      </ul>

      <h2>רוצים להתחיל בצורה מסודרת?</h2>
      <p>
        אם מדובר ברכב, רכוש או חקלאות, שלחו לנו הודעה קצרה: מה סוג האירוע, מתי הוא קרה ומה דחוף. בפנייה הראשונה אין לשלוח תעודת זהות, פרטי אשראי, סיסמאות, מסמכים רפואיים או חומר רגיש. לאחר בירור ראשוני יוסבר כיצד להעביר חומר רלוונטי בצורה מסודרת.
      </p>
      <p>
        <Link href="/services/vehicle-property-agricultural-appraisal">לעמוד שירותי שמאות רכב, רכוש וחקלאות</Link>
      </p>
    </div>
  );
}

function LegalOnlineArticleBody() {
  const sources = [
    { label: "רישום סימן מסחר בישראל", href: "https://www.gov.il/he/service/trademark_registration" },
    { label: "רישום סימן בינלאומי", href: "https://www.gov.il/he/service/international_mark_registration" },
    { label: "חיפוש סימני מסחר", href: "https://trademarksonline.justice.gov.il/" },
    { label: "מדריך תיקון 13 להגנת הפרטיות", href: "https://www.gov.il/he/pages/guide_tikon13_professional" },
  ];

  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-a:text-glowred">
      <p>
        המידע במאמר הוא כללי בלבד. לקבלת ייעוץ המתאים למקרה יש לפנות באופן עצמאי לעורך דין מורשה.
      </p>
      <h2>עסק אונליין צריך הפרדה ברורה בין החלטות משפטיות לבין עבודה טכנולוגית</h2>
      <p>
        עסק שמוכר באינטרנט, מקבל פניות מטפסים, מנהל חנות, מפעיל דיוור, מפרסם ברשתות או משתמש בכלי AI לא מתנהל רק בעולם של עיצוב ושיווק. מאחורי האתר יש שם מותג, לוגו, דומיינים, תנאי שימוש, מדיניות פרטיות, מסלולי החזרות, ספקים, הרשאות, מידע אישי, תיעוד פניות ולעיתים גם סיכונים של התחזות או העתקה.
      </p>
      <p>
        ההחלטות המשפטיות, כמו האם להגיש בקשה לרישום סימן מסחר, כיצד לנסח תקנון, אילו סעיפים נדרשים במדיניות פרטיות או כיצד לפעול מול פלטפורמה, שייכות לעסק ולעורך הדין שהעסק בוחר באופן עצמאי. לצד זה יש שכבה טכנולוגית חשובה: להבין איפה המידע נמצא, מי ניגש אליו, אילו מערכות מחוברות ומה צריך לתעד.
      </p>
      <p>
        נביא נס ישראל בע"מ מסייעת בצד הטכנולוגי של התהליך: מיפוי נכסים, סידור מסמכים, בניית צירי זמן, ניטור מותגים, הרשאות, תיעוד והטמעת הנחיות שכבר אושרו על ידי הגורמים המקצועיים של העסק.
      </p>

      <h2>סימן מסחר: מה שייך לעורך הדין ומה שייך לטכנולוגיה</h2>
      <p>
        הרבה עסקים מתחילים בשם, לוגו ודומיין, ורק אחרי שהמותג כבר מופיע בפרסומים הם מגלים שצריך לבדוק אם אפשר להגן עליו. סימן מסחר יכול להיות שם, לוגו או סימן אחר שמבדיל את העסק. אבל לפני שמגישים בקשה, צריך לבדוק חיפוש ראשוני, סיווגים רלוונטיים, פעילות קיימת, שימושים דומים והאם יש סיכון להתנגדות.
      </p>
      <p>
        בחירת הסיווגים, הגשת בקשה, ניסוח מסמכים, טיפול בהתנגדויות וקבלת החלטות משפטיות הם עניינים לעורך דין שהעסק בוחר באופן עצמאי. אין דרך אחראית להבטיח שסימן יאושר. מהצד הטכנולוגי אפשר לארגן את המידע: דומיינים, פרופילים, שימושים קיימים, צילומי מסך, URLs, תאריכי פרסום, קבצי לוגו, עמודי מוצר ותוכן שיווקי.
      </p>
      <p>
        כשהחומר מסודר, העסק והיועצים שלו יכולים להבין טוב יותר מה קיים ומה חסר. Navines מתמקדת בארגון המידע, לא בהכרעה אם סימן ניתן לרישום ולא בניהול הליך משפטי.
      </p>

      <h2>פרטיות וציות מתחילים ממיפוי טכנולוגי נכון</h2>
      <p>
        אתר שמוכר מוצרים, אתר שמציע שירותים, מערכת SaaS, אתר עם טפסים, חנות Shopify, אתר WooCommerce או כלי AI אוספים ומעבדים מידע בצורה שונה. לפני שמנסחים או מעדכנים מסמכים, צריך להבין איך העסק עובד בפועל: איזה מידע נאסף, דרך אילו טפסים, האם יש הרשמה, האם יש דיוור, האם יש Analytics, האם יש CRM, מי הספקים ומי רשאי לראות את המידע.
      </p>
      <p>
        נביא נס יכולה לבנות מפת מערכות, טבלת ספקים, רשימת טפסים, מיפוי Cookies, תיעוד הרשאות, לוגים ותהליך יישום טכני. את הדרישות המשפטיות, הנוסחים וההחלטות המקצועיות העסק קובע עם עורך הדין שבחר.
      </p>
      <p>
        אם משתמשים בכלי AI או אוטומציות, חשוב להבין איזה מידע נכנס לתהליך ומה לא צריך להיכנס אליו. זו עבודה טכנולוגית של מיפוי, הרשאות ובקרה, והיא יכולה לעזור לעסק להתנהל בצורה אחראית יותר בלי להחליף ייעוץ משפטי.
      </p>

      <h2>הגנת מותג, התחזות וראיות דיגיטליות</h2>
      <p>
        עסקים אונליין עלולים להתמודד עם פרופילים מזויפים, עמודי התחזות, העתקת תמונות, שימוש בשם מסחרי, דומיינים דומים, תוכן מועתק או פרסום שמבלבל לקוחות. במצבים כאלה חשוב לא לפעול בפאניקה ולא להסתפק בצילום מסך בודד.
      </p>
      <p>
        בדרך כלל כדאי לשמור URLs מלאים, תאריכים, צילומי מסך, תיעוד של הודעות, פרטי חשבון או עמוד, רצף אירועים וכל מידע שמראה איך הלקוח או הציבור נחשף להפרה. אין הבטחה שפלטפורמה תקבל כל דיווח או תסיר כל תוכן, אבל חומר מסודר יכול לעזור לבחון פנייה נכונה.
      </p>
      <p>
        אם יש חשד לפריצה לחשבון, מומלץ לקרוא גם את המדריך שלנו על{" "}
        <Link href="/blog/what-to-do-when-account-is-hacked">מה עושים כשפורצים לחשבון</Link>. אם מדובר בבדיקת עסק לפני רכישה, כדאי לקרוא גם על{" "}
        <Link href="/blog/business-due-diligence-before-buying">בדיקת נאותות דיגיטלית לפני קנייה</Link>.
      </p>

      <h2>מה כדאי לארגן לפני שפונים לגורם מקצועי</h2>
      <p>
        במקום להתחיל מפיזור של קבצים, צילומי מסך וקישורים, כדאי להכין רשימה מסודרת: דומיינים, פרופילים רשמיים, מערכות שמחזיקות מידע, טפסים, ספקים, תאריכים, URLs, צילומי מסך וקבצי מקור. ככל שהתמונה מסודרת יותר, קל יותר לעסק וליועציו לקבל החלטות.
      </p>
      <p>
        לא כדאי לשלוח סיסמאות, קודי אימות, פרטי אשראי או חומר רגיש בערוץ פתוח. אם נדרש שיתוף חומר, עושים זאת בסביבה שהעסק הגדיר ואישר, עם הרשאות מתאימות ותיעוד.
      </p>

      <h2>מקורות רשמיים שכדאי להכיר</h2>
      <p>
        לפני שמקבלים החלטות, כדאי להכיר את המקורות הרשמיים. הם לא מחליפים ייעוץ משפטי, אבל נותנים נקודת התחלה להבנת התהליך:
      </p>
      <ul>
        {sources.map((source) => (
          <li key={source.href}>
            <a href={source.href} rel="noopener noreferrer" target="_blank">{source.label}</a>
          </li>
        ))}
      </ul>

      <h2>רשימת בדיקה טכנולוגית לעסק אונליין</h2>
      <ul>
        <li>האם ברור מי מחזיק בשם המותג, בלוגו ובדומיינים?</li>
        <li>האם יש רשימה מסודרת של נכסים דיגיטליים, פרופילים וספקים?</li>
        <li>האם יש מיפוי של טפסים, Cookies, Analytics, CRM ודיוור?</li>
        <li>האם ידוע איזה מידע אישי נאסף, איפה הוא נשמר ומי מקבל גישה?</li>
        <li>האם יש תיעוד מסודר של הפרות, התחזויות או העתקות?</li>
        <li>האם קיימת סביבת מסמכים עם הרשאות וגרסאות?</li>
      </ul>

      <h2>איך Navines משתלבת בצד הטכנולוגי</h2>
      <p>
        אנחנו עוזרים להפוך מצב מפוזר לתמונה מסודרת: מסמכים, דומיינים, חנויות, טפסים, מערכות, פניות, צילומי מסך, קבצים, גרסאות ותאריכים. המטרה היא לא להחליף עורך דין ולא לקבל החלטה משפטית, אלא לתת לעסק תשתית טכנולוגית מסודרת יותר.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/legal-operations-technology">
          לעמוד: בחירת משרד עם יתרון טכנולוגי
        </Link>
      </p>
    </div>
  );
}

function TrafficPointsArticleBody() {
  const sources = [
    { label: "שיטת הניקוד בעבירות תעבורה", href: "https://www.gov.il/he/pages/scoring_system_traffic_offens" },
    { label: "בדיקת תדפיס נקודות חובה לנהג", href: "https://www.gov.il/he/service/driver_penalty_point_check" },
    { label: "קורסי נהיגה נכונה ורענון רשמיים", href: "https://www.gov.il/he/pages/prevention_driving_courses_2" },
    { label: "שאלות ותשובות בנושא דוחות תנועה", href: "https://www.gov.il/he/pages/police_traffic_department_reports_faq" },
    { label: "מידע לנאשם בבית משפט לתעבורה", href: "https://www.gov.il/he/pages/traffic_courts_information_for_the_traffic_defendant" },
    { label: "בקשה לעיון בחומר חקירה בדוח תנועה", href: "https://www.gov.il/he/service/request_to_review_traffic_report_investigation_material" },
  ];

  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-a:text-glowred">
      <p>
        המידע במאמר הוא כללי בלבד. לקבלת ייעוץ המתאים למקרה יש לפנות באופן עצמאי לעורך דין מורשה.
      </p>
      <h2>דוח תעבורה הוא לא תמיד רק קנס</h2>
      <p>
        נהגים רבים מקבלים דוח, מסתכלים על סכום הקנס ומחליטים מהר אם לשלם. אבל במקרים רבים השאלה החשובה היא לא רק כמה משלמים, אלא האם יש נקודות, האם יש השפעה על רישיון הנהיגה, האם קיימות נקודות קודמות, האם יש מועד אחרון לפעולה, והאם תשלום הדוח ייחשב כהודאה או יסיים את האפשרות לבדוק את העניין.
      </p>
      <p>
        לכן לפני שמקבלים החלטה, במיוחד בדוחות מהירות, שימוש בטלפון, מצלמות, רמזור, תמרור, סטייה מנתיב, זכות קדימה או הזמנה לדין, כדאי להבין מה בדיוק כתוב בדוח ומה כדאי לארגן לפני פנייה עצמאית לגורם מתאים.
      </p>

      <h2>מה כדאי לארגן לפני שפונים לעורך דין שבחרתם</h2>
      <p>
        אם החלטתם לפנות לעורך דין תעבורה, כדאי להגיע מסודרים: הדוח המקורי, תאריך קבלה, מועד אחרון לפעולה, תדפיס נקודות רשמי אם יש, תמונות או חומר שקיבלתם כחוק, הודעות רשמיות, פרטי האירוע כפי שהם מופיעים במסמך וכל מסמך נוסף שנשלח אליכם.
      </p>
      <p>
        עורך הדין שבחרתם יכול לבחון את החומר בהתאם לדין ולנסיבות. לנביא נס לא שולחים דוחות, פרטי רישיון, מספרי זיהוי או חומר אישי דרך האתר.
      </p>

      <h2>מה חשוב להבין בדוחות מהירות או שימוש בטלפון</h2>
      <p>
        בדוח מהירות בודקים את מועד האירוע, מקום האירוע, סוג האכיפה, תיאור העובדות, האם קיימות תמונות או חומר נוסף ומה המועד האחרון לפעולה. בדוחות שימוש בטלפון יכולות לעלות שאלות של תיאור מעשה, נסיבות, זיהוי וחומר תומך. כל אלה הם נושאים שגורם מקצועי שבחרתם יכול לבחון לפי המקרה.
      </p>
      <p>
        אם יש מועד קרוב, הזמנה לדין או חשש להשפעה על רישיון הנהיגה, לא כדאי לדחות פנייה עצמאית לגורם מתאים. נביא נס אינה מבקשת שתשלחו אליה את הדוח ואינה אוספת פרטי נהגים דרך האתר.
      </p>

      <h2>נקודות תעבורה: למה לא להשתמש במילה “מחיקה” בקלות</h2>
      <p>
        נקודות חובה נרשמות לפי שיטת הניקוד ובהתאם לעבירות ולתוצאות ההליך. לכן ניסוחים שמבטיחים שינוי אוטומטי במצב הנקודות אינם אחראיים. מידע רשמי ותדפיס נקודות יכולים לעזור להבין את התמונה לפני שפונים לעורך דין שבחרתם.
      </p>
      <p>
        מי שרוצה להבין את מצב הנקודות שלו יכול לבדוק תדפיס נקודות רשמי. אם יש נקודות קודמות, מועד קורס, דרישה רשמית או חשש לפסילה, כדאי לבדוק את התמונה המלאה לפני שמחליטים על פעולה.
      </p>

      <h2>קורס נהיגה נכונה מול שיעור רענון פרטי</h2>
      <p>
        חשוב להבדיל בין קורס נהיגה נכונה או אמצעי תיקון רשמי שנקבע לפי שיטת הניקוד, לבין שיעור פרטי אצל מורה נהיגה. שיעור פרטי יכול לעזור לנהג לרענן ידע, להתכונן טוב יותר או להבין נושא מסוים, אבל הוא אינו מוחק נקודות ואינו מחליף קורס רשמי.
      </p>
      <p>
        אם התקבלה דרישה רשמית לקורס או אמצעי תיקון, צריך להתייחס למידע הרשמי ולמצב הנהג האישי. לא כדאי להסתמך על עצות כלליות בלי להבין מה כתוב במכתב או בתדפיס.
      </p>

      <h2>תיאוריה, מבחנים והכנה מסודרת</h2>
      <p>
        במקרים מסוימים נהגים בודקים גם מידע על מבחן עיוני, מבחן מעשי או דרישות רשמיות אחרות. חשוב להסתמך על המקורות הרשמיים, להבין מה הדרישה הספציפית, ולשמור תיעוד של כל הודעה או מכתב שהתקבל.
      </p>

      <h2>חומר רשמי ומסמכים</h2>
      <p>
        במקרים מסוימים אפשר לבקש לעיין בחומר חקירה או במסמכים הקשורים לדוח. זה לא אומר שכל בקשה תוביל לתוצאה מסוימת, אבל חומר מסודר יכול לעזור להבין את התמונה. חשוב לשמור את הדוח המקורי, תאריך קבלה, הודעות, תמונות, מסמכים וכל מועד שנקבע.
      </p>
      <p>
        כאשר החומר נאסף בצורה מסודרת, עורך הדין שבחרתם יכול לבדוק טוב יותר אם יש פערים, שאלות או כיוונים שדורשים בירור. חשוב לשמור על חומר מקורי, לא לערוך מסמכים ולא להסתמך על הבטחות לתוצאה.
      </p>

      <h2>כיצד כלי טכנולוגי יכול לסייע לעורך הדין</h2>
      <p>
        במשרדי עורכי דין המטפלים בתיקי תעבורה, כלי טכנולוגי יכול לסייע בארגון חומרי תיק, יצירת ציר זמן, מיון מסמכים ותמונות, תזכורות למועדים, הרשאות לצוות והמחשה חזותית של מידע. הכלי אינו קובע מסקנות משפטיות ואינו מחליף את עבודת המשרד, אבל הוא יכול להפוך חומר מפוזר לתהליך עבודה ברור.
      </p>

      <h2>מקורות רשמיים שכדאי לבדוק</h2>
      <ul>
        {sources.map((source) => (
          <li key={source.href}>
            <a href={source.href} rel="noopener noreferrer" target="_blank">{source.label}</a>
          </li>
        ))}
      </ul>

      <h2>רשימת בדיקה לפני שפונים לעורך דין שבחרתם</h2>
      <ul>
        <li>מה סוג הדוח ומה המועד האחרון לפעולה?</li>
        <li>האם יש נקודות לפי הדוח או לפי מצב הנהג?</li>
        <li>האם מדובר בדוח קנס או בהזמנה לדין?</li>
        <li>האם קיימות נקודות קודמות או דרישה לקורס רשמי?</li>
        <li>האם יש תמונות, חומר חקירה או מסמכים שצריך לבקש?</li>
        <li>האם יש מסמכים רשמיים נוספים שחשוב להביא לפגישה?</li>
      </ul>

      <h2>סיכום</h2>
      <p>
        בדוחות תעבורה עם נקודות, מהירות או שימוש בטלפון, הדבר החשוב הוא לא לפעול מתוך לחץ. מארגנים את המידע, בודקים מקורות רשמיים ופונים באופן עצמאי לעורך דין מורשה כאשר צריך ייעוץ למקרה הספציפי.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/traffic-case-technology">
          לעמוד: תעבורה וטכנולוגיה
        </Link>
      </p>
    </div>
  );
}

function BrowserExtensionArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>מהו תוסף לדפדפן</h2>
      <p>
        תוסף לדפדפן הוא כלי קטן שמותקן בדפדפן נתמך ומוסיף יכולת חדשה: קיצור דרך, מרכז כלים, בדיקה, עוזר חכם או חיבור מהיר לשירות קיים. במקרים רבים מתחילים מ Chrome או מדפדפנים מבוססי Chromium, אבל התכנון צריך להתייחס מראש גם ל Microsoft Edge, Brave, Opera ודפדפנים נוספים לפי דרישות הפרויקט.
      </p>
      <p>
        תוסף טוב לא חייב להיות ענק. לפעמים הוא עושה פעולה אחת בצורה מצוינת: חוסך קליקים, מציג מידע בזמן הנכון, מחבר כמה כלים או עוזר לצוות לבצע פעולה שחוזרת על עצמה.
      </p>

      <h2>למה עסקים ויזמים בונים תוספים</h2>
      <p>
        תוסף יכול להפוך מוצר דיגיטלי לחלק משגרת העבודה של המשתמש. הוא מחזק נוכחות מותג, מחזיר משתמשים לכלים, יוצר נקודת מגע נוספת ומאפשר גישה מהירה לשירותים חשובים. זה לא קסם לקידום אורגני ולא מבטיח דירוגים, אבל הוא יכול לתמוך במותג, בשימוש חוזר ובמערכת שיווק רחבה יותר.
      </p>

      <h2>רעיונות שאפשר להפוך לתוסף</h2>
      <ul>
        <li>מרכז קיצורי דרך לכלים של החברה.</li>
        <li>כלי בדיקה וניתוח לאתר, קישור, מוצר או תוכן.</li>
        <li>עוזר לצוות מכירות, תמיכה או תפעול.</li>
        <li>מילוי טפסים חכם או קיצור פעולה שחוזרת כל יום.</li>
        <li>כלי SEO, איקומרס, קריפטו, מחקר או השוואה.</li>
        <li>תוסף שמלווה מוצר SaaS ומפנה את המשתמש לפעולה הנכונה.</li>
      </ul>

      <h2>תוסף ציבורי מול תוסף פנימי</h2>
      <p>
        תוסף ציבורי מיועד למשתמשים רחבים יותר וצריך הסבר ברור, עמוד חנות, מדיניות פרטיות וחוויית שימוש מאוד פשוטה. תוסף פנימי מיועד לעובדי החברה או לצוות מסוים, ולכן הדגש הוא על הרשאות, אבטחה, פרטיות וקיצור תהליך עבודה.
      </p>
      <p>
        בשני המקרים חשוב לא לאסוף מידע בלי צורך, לא לבצע מעקב נסתר ולא לבקש הרשאות רחבות מדי. תוסף אמין מתחיל בהרשאות מינימליות ובמטרה ברורה.
      </p>

      <h2>איך עוברים מרעיון לאפיון</h2>
      <p>
        לפני שמפתחים שואלים שאלות פשוטות: מי ישתמש בתוסף, מה הוא צריך לעשות, איזו פעולה הוא חוסך, מה חייב להיות בגרסה הראשונה ומה אפשר להשאיר להמשך. אפיון טוב מונע תוסף עמוס ומבלבל.
      </p>
      <ul>
        <li>מגדירים פעולה מרכזית אחת או שתיים.</li>
        <li>מתכננים ממשק קטן וברור.</li>
        <li>בודקים אילו הרשאות באמת נדרשות.</li>
        <li>מחליטים אם צריך API, שרת, AI או חיבור לאתר.</li>
      </ul>

      <h2>UX של תוסף קטן</h2>
      <p>
        בתוסף אין מקום לעודף מסכים. המשתמש פותח חלונית קטנה ורוצה להבין מיד מה עושים. לכן הכפתורים צריכים להיות ברורים, הטקסט קצר, והפעולה המרכזית צריכה להיות זמינה בלי חיפוש.
      </p>

      <h2>הרשאות, אבטחה ופרטיות</h2>
      <p>
        הרשאות הן אחד המקומות החשובים ביותר בתוסף. כל הרשאה צריכה להיות מוצדקת. אם משלבים שירותי AI או API, מפתחות ושירותים רגישים צריכים להישאר בצד שרת ולא בתוך קוד התוסף בצד המשתמש.
      </p>
      <p>
        חשוב לעבוד לפי מדיניות חנויות הדפדפנים, להסביר למשתמש מה נאסף אם נאסף, ולא לבנות פעולה שמסתירה מעקב או שימוש לא ברור במידע.
      </p>

      <h2>חיבור לאתר, API או AI</h2>
      <p>
        תוסף יכול להתחבר לאתר, מערכת קיימת, API או שירות AI. לדוגמה, הוא יכול לפתוח כלי נכון, לשלוח נתון לבדיקה, לסכם מידע או להחזיר תוצאה מתוך מערכת עסקית. החיבור צריך להיות מאובטח, מדוד וברור למשתמש.
      </p>

      <h2>בדיקות, תאימות ופרסום בחנויות הדפדפנים</h2>
      <p>
        לפני פרסום בודקים גרסאות דפדפן, הרשאות, מסכים, תקלות, טעינה והתנהגות במצבים שונים. לאחר מכן מכינים את עמוד החנות, תיאור, אייקון, מדיניות פרטיות וחומרים נדרשים. אין הבטחה לאישור אוטומטי, כי הפרסום כפוף למדיניות ולבדיקות של החנות הרלוונטית.
      </p>

      <h2>דוגמאות שבנינו</h2>
      <p>
        Navines Tools Hub הוא תוסף שמרכז את כלי Navines במקום אחד ומעניק גישה מהירה לכלים ולשירותים שלנו. PartnerCrypto Toolkit הוא תוסף שמרכז כלי קריפטו, מאפשר למצוא כלים במהירות ולבצע בדיקות פרטיות של גודל פוזיציה והשפעת עמלות מתוך הדפדפן.
      </p>
      <p>
        שתי הדוגמאות מראות רעיון פשוט: לקחת עולם כלים קיים ולהפוך אותו לנגיש יותר, קרוב יותר למשתמש ופחות תלוי בחיפוש ידני.
      </p>

      <h2>שאלות נפוצות</h2>
      <h3>האם אפשר להתחיל מגרסה פשוטה?</h3>
      <p>כן. ברוב המקרים נכון להתחיל מגרסה ראשונה קטנה, לבדוק שימוש אמיתי ואז להרחיב.</p>
      <h3>האם תוסף יכול לעבוד גם ב Edge?</h3>
      <p>
        פיתוח תוספים לדפדפנים נשען על WebExtensions APIs, גרסת Manifest, זמינות API ומגבלות של כל דפדפן. תוסף שמתאים ל Chrome עשוי להתאים גם ל Microsoft Edge, Brave או Opera, אך לא מבטיחים תאימות מלאה בלי בדיקות. Firefox, Safari ודפדפנים נוספים יכולים לדרוש התאמות נפרדות לפי ה API וההרשאות.
      </p>
      <h3>האם תוסף יכול לעזור לקידום העסק?</h3>
      <p>הוא יכול לתרום לנוכחות מותג, שימוש חוזר ונקודת מגע נוספת עם המשתמש. לא נכון להבטיח שהתוסף לבדו ישפר דירוגים בגוגל.</p>

      <h2>סיכום</h2>
      <p>
        תוסף לדפדפן הוא דרך חכמה להפוך רעיון קטן לכלי שימושי. אם יש לכם רעיון שיכול לחסוך פעולה, לרכז כלים או לחבר משתמשים לשירות שלכם, כדאי להתחיל באפיון קצר ולבדוק מה הגרסה הראשונה הנכונה.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/browser-extension-development">לעמוד השירות: בניית תוספים לדפדפנים</Link>
      </p>
    </div>
  );
}

function AccountantChoiceArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה עסק דיגיטלי צריך איש מקצוע שמכיר אינטרנט</h2>
      <p>
        עסק דיגיטלי לא מתנהל כמו עסק מסורתי בלבד. יש בו אתר, חנות אונליין, תשלומים מחו״ל, סליקה, חשבוניות, מטבעות, מערכות משלוחים, דוחות, קמפיינים, Amazon, Shopify או WooCommerce. כשאיש המקצוע לא מכיר את המציאות הזו לעומק, בעל העסק עלול לבזבז זמן על הסברים, תיקונים וחוסר סדר.
      </p>
      <p>
        המטרה היא לא למצוא רק שם ברשימה. המטרה היא להתחיל שיחה עם אדם שמבין את סוג הפעילות שלכם, יודע לשאול שאלות נכונות, ומסוגל להסביר מה הוא נותן ומה לא בצורה ברורה.
      </p>

      <h2>מה שונה בחנות אונליין או פעילות Amazon</h2>
      <p>
        חנות אונליין או פעילות Amazon כוללות שכבות שלא תמיד קיימות בעסק רגיל: עמלות מרקטפלייס, החזרות, מלאי, תשלומים במטבעות שונים, דוחות מכירה, ספקי סליקה, מסמכים מחו״ל ותנועה בין מערכות. לכן חשוב לבדוק מראש האם רואה החשבון או מנהל החשבונות מכירים את הפלטפורמות ואת אופי הנתונים.
      </p>
      <p>
        זה לא אומר שכל עסק צריך משרד גדול או פתרון יקר. זה אומר שצריך התאמה טובה בין המורכבות שלכם לבין איש המקצוע שמלווה אתכם.
      </p>

      <h2>אילו שאלות לשאול לפני שסוגרים</h2>
      <ul>
        <li>האם עבדתם עם עסקים שמוכרים אונליין או בחו״ל?</li>
        <li>האם אתם מכירים דוחות של Shopify, WooCommerce, Amazon או eBay?</li>
        <li>איך מתנהלת קליטת חשבוניות ומסמכים לאורך החודש?</li>
        <li>מה בדיוק כלול בשירות ומה דורש תשלום נוסף?</li>
        <li>איך מתבצע קשר שוטף, באיזה קצב ומול מי?</li>
        <li>האם יש ניסיון עם מטבעות, סליקה בינלאומית, מלאי וספקים?</li>
      </ul>

      <h2>סימני אזהרה לבחירה שאינה מתאימה</h2>
      <p>
        לא צריך לחשוד בכל אחד, ויש הרבה אנשי מקצוע טובים. אבל כדאי לשים לב לגורמים שאינם מתאימים לסוג הפעילות שלכם, נותני שירות ללא הבנה מספקת של פעילות דיגיטלית, או הבטחות שלא תמיד עומדות במבחן המציאות.
      </p>
      <ul>
        <li>אין ניסיון ברור עם פעילות אינטרנטית או איקומרס.</li>
        <li>השירות לא מוגדר בצורה מסודרת.</li>
        <li>המחיר נשמע לא ברור או משתנה בלי הסבר.</li>
        <li>אין רצון להבין את הנתונים לפני מתן תשובה.</li>
        <li>התקשורת לא ברורה כבר בשלב ההיכרות.</li>
      </ul>

      <h2>איך לבדוק שהשירות והתמחור ברורים</h2>
      <p>
        לפני שמתקדמים, כדאי להבין מה כלול: הנהלת חשבונות שוטפת, דוחות, פתיחת תיק, טיפול במסמכים, עבודה מול רשויות, ייעוץ נקודתי, טיפול בפעילות מחו״ל או עבודה עם מערכות. אין צורך במחיר קבוע לכל אחד, אבל כן חשוב לקבל תיאום ציפיות ברור.
      </p>
      <p>
        ניסוח טוב הוא מחירים תחרותיים והוגנים בהתאם לצורך ולהיקף הפעילות, עם פירוט של מה נכלל ומה לא.
      </p>

      <h2>ההבדל בין רואה חשבון, מנהל חשבונות ויועץ מס</h2>
      <p>
        רואה חשבון, מנהל חשבונות ויועץ מס אינם אותו דבר. לכל אחד יש תפקיד, הכשרה והיקף אחריות שונים. לכן חשוב לא רק לשאול “מי יכול לעזור לי”, אלא להבין איזה סוג שירות אתם צריכים בפועל: הנהלת חשבונות שוטפת, ייעוץ מס, דוחות, בקרה, פתיחת תיק או ליווי רחב יותר.
      </p>
      <p>
        נביא נס ישראל בע\"מ אינה מחליפה בדיקת רישיון, ייעוץ חשבונאי או ייעוץ משפטי. אנחנו מסייעים באפיון הצורך ובהכוונה לאיש מקצוע מתאים יותר לפי סוג הפעילות.
      </p>

      <h2>מה להכין לפני פגישת היכרות</h2>
      <ul>
        <li>סוג העסק: עוסק פטור, עוסק מורשה, חברה בע״מ או אדם פרטי.</li>
        <li>היכן אתם מוכרים: ישראל, חו״ל, Amazon, eBay או חנות עצמאית.</li>
        <li>אילו מערכות קיימות: חשבוניות, סליקה, ERP, Shopify או WooCommerce.</li>
        <li>כמה מסמכים וחשבוניות יש בחודש בערך.</li>
        <li>אילו בעיות חוזרות על עצמן היום.</li>
        <li>האם אתם צריכים איש מקצוע קבוע או פתרון נקודתי.</li>
      </ul>

      <h2>איך נתונים, מערכות ואוטומציה משפיעים על הנהלת החשבונות</h2>
      <p>
        ככל שהעסק דיגיטלי יותר, כך יש יותר נתונים שצריך לסדר: הזמנות, תשלומים, חשבוניות, דוחות מכירה, מלאי, החזרות וספקים. כאן הטכנולוגיה יכולה לעזור. אפשר לבנות תהליכים שמסדרים נתונים, מחברים מערכות, סורקים חשבוניות ב AI ומאפשרים לשאול שאלות דרך כלים כמו TalkToData.
      </p>
      <ul>
        <li><Link href="/services/chatgpt-business-data">TalkToData וחיבור נתונים אל ChatGPT</Link></li>
        <li><Link href="/blog/ai-invoice-scanning-and-filtering">סריקת וסינון חשבוניות עם AI</Link></li>
        <li><Link href="/services/ai-automation">AI ואוטומציה לעסקים</Link></li>
        <li><Link href="/solutions/amazon-sellers">פתרונות למוכרי Amazon</Link></li>
      </ul>

      <h2>למי מתאים החיבור דרך נביא נס ישראל בע\"מ</h2>
      <p>
        אנחנו מכירים לאורך שנים אנשי מקצוע מנוסים בתחומי ראיית החשבון והנהלת החשבונות, ומסייעים לחבר בין הפונה לבין איש מקצוע שמתאים לסוג הפעילות שלו. המטרה היא לחסוך ניסוי וטעייה ולהתחיל את השיחה עם אדם שמבין את העולם שבו העסק פועל.
      </p>
      <p>
        זה מתאים לעסקים קטנים, חברות, עצמאיים, פרילנסרים, חנויות אונליין, מוכרי Amazon ו eBay, בעלי פעילות בינלאומית ואנשים פרטיים שצריכים הכוונה מסודרת לאיש מקצוע מתאים.
      </p>

      <h2>שאלות נפוצות</h2>
      <h3>האם נביא נס ישראל בע\"מ היא משרד רואי חשבון?</h3>
      <p>לא. השירות הוא אפיון צורך וחיבור לאנשי מקצוע מתאימים מתוך מעגל קשרים מקצועי. ההתקשרות המקצועית נעשית ישירות מול איש המקצוע שנבחר.</p>
      <h3>האם אתם מבטיחים התאמה מושלמת?</h3>
      <p>לא. אין הבטחה לתוצאה מסוימת. אנחנו עוזרים להבין את הצורך ולכוון לשיחה עם איש מקצוע רלוונטי ככל האפשר.</p>
      <h3>אפשר לקבל עזרה גם בצד הטכנולוגי?</h3>
      <p>כן. לצד ההכוונה לאנשי מקצוע, נביא נס ישראל בע\"מ יכולה לסייע בסידור נתונים, חיבור מערכות, דוחות, אוטומציות וסריקת חשבוניות עם AI.</p>

      <h2>סיכום</h2>
      <p>
        רואה חשבון לעסק דיגיטלי צריך להבין את הפעילות שמאחורי המספרים: פלטפורמות, נתונים, סליקה, מסמכים ותהליכים. ככל שמבררים יותר לפני שסוגרים, כך קל יותר להתחיל נכון ולחסוך בלבול בהמשך.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/solutions/accountants">לעמוד פתרונות וחיבור לרואי חשבון</Link>
      </p>
    </div>
  );
}

function BusinessAutomationArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>תשובה קצרה: מהי אוטומציה עסקית?</h2>
      <p>
        אוטומציה עסקית היא חיבור של פעולות שחוזרות על עצמן לתהליך מסודר שעובד כמעט לבד: קבלת פנייה, שליחת הודעה, פתיחת משימה, סינון חשבונית, עדכון מערכת ניהול לקוחות או יצירת דוח. המטרה היא לא להחליף את העסק, אלא להפחית עבודה ידנית, טעויות וזמן תגובה.
      </p>
      <h2>איך אוטומציה עסקית עובדת?</h2>
      <p>
        מתחילים ממיפוי פשוט: מה נכנס לעסק, מי צריך לטפל בזה, איפה המידע נשמר ומה קורה אחרי הטיפול. רק אחר כך מחברים כלים כמו וואטסאפ, מייל, טפסים, CRM, דוחות, חשבוניות או ChatGPT לתהליך אחד ברור.
      </p>
      <h2>אילו משימות אפשר להפוך לאוטומטיות?</h2>
      <ul>
        <li>קליטת לידים מהאתר, וואטסאפ או קמפיין ופתיחת משימה לצוות.</li>
        <li>סיכום מיילים ופניות חוזרות כדי לדעת מי מחכה לתשובה.</li>
        <li>סריקת חשבוניות, חילוץ סכום, ספק ותאריך, וסינון לפי סוג הוצאה.</li>
        <li>עדכון CRM, יצירת תזכורת, שליחת הודעת המשך או דוח יומי קצר.</li>
        <li>דוחות שמראים מכירות, פניות, משימות פתוחות או ירידה בביצועים.</li>
      </ul>
      <h2>דוגמאות עסקיות פשוטות</h2>
      <p>
        עסק שירות יכול לקבל פנייה מהאתר, לשאול את הלקוח שתי שאלות בוואטסאפ, לסכם את הצורך ולפתוח משימה. משרד הנהלת חשבונות יכול לסנן חשבוניות לפי ספק או סכום. חנות אונליין יכולה לקבל דוח על מוצרים שנמכרים פחות השבוע.
      </p>
      <h2>למי זה מתאים?</h2>
      <p>
        אוטומציה עסקית מתאימה לעסק שיש בו פעולות חוזרות, עומס פניות, נתונים מפוזרים או צוות שמעתיק מידע ידנית. היא מתאימה גם לעסק קטן, כל עוד מתחילים מתהליך אחד ברור ולא מנסים לאוטומט את כל העסק ביום אחד.
      </p>
      <h2>מתי אוטומציה לא מתאימה?</h2>
      <p>
        אם התהליך עדיין לא ברור, אם כל פנייה שונה לגמרי, או אם אין מי שיבדוק את התוצאה, עדיף להתחיל בסידור התהליך לפני שמחברים כלים. אוטומציה לא מתקנת תהליך מבולגן, היא רק גורמת לו לרוץ מהר יותר.
      </p>
      <h2>איך מתחילים בלי להסתבך?</h2>
      <ol>
        <li>בוחרים פעולה אחת שחוזרת על עצמה הרבה.</li>
        <li>כותבים מה קורה היום, שלב אחרי שלב.</li>
        <li>מחליטים מה חייב להישאר לאישור אנושי.</li>
        <li>בונים גרסה קטנה, בודקים, ואז מרחיבים.</li>
      </ol>
      <h2>מה משפיע על עלות אוטומציה עסקית?</h2>
      <p>
        העלות לא נקבעת לפי שם הכלי אלא לפי היקף התהליך: כמה מערכות צריך לחבר, האם יש API מסודר, כמה תנאים ולוגיקה יש, האם צריך AI, כמה בדיקות נדרשות, ומה רמת ההרשאות והאבטחה. לכן נכון להתחיל מאפיון קצר ולא ממספר שמנותק מהמציאות.
      </p>
      <h2>כמה זמן לוקח להקים אוטומציה?</h2>
      <p>
        תהליך קטן יכול להתחיל מהר יותר מתהליך שמחבר כמה מערכות רגישות. מה שמשפיע הוא איכות המידע הקיים, גישה למערכות, אישור אנושי, בדיקות מול משתמשים והאם צריך לשנות תהליך עבודה בצוות.
      </p>
      <h2>איך מודדים הצלחה?</h2>
      <ul>
        <li>כמה זמן נחסך בפעולה שחוזרת על עצמה.</li>
        <li>כמה פניות או משימות לא נופלות בין הכיסאות.</li>
        <li>האם זמן התגובה ללקוח השתפר.</li>
        <li>האם יש פחות טעויות בהעתקת מידע.</li>
        <li>האם הצוות באמת משתמש בתהליך החדש.</li>
      </ul>
      <h2>כלי מדף, No-code או פיתוח מותאם?</h2>
      <p>
        כלי מדף מתאים כשיש צורך פשוט ומוכר. No-code יכול להיות התחלה טובה כשצריך לחבר כמה פעולות בלי פיתוח כבד. פיתוח מותאם מתאים כשיש לוגיקה עסקית מיוחדת, הרשאות, נתונים רגישים או צורך בממשק שמותאם בדיוק לצוות.
      </p>
      <h2>שלושה תרחישים נפוצים</h2>
      <ul>
        <li>פנייה באתר נכנסת למערכת, נפתחת משימה לצוות ונשלחת הודעת וואטסאפ קצרה ללקוח.</li>
        <li>חשבונית שמגיעה למייל עוברת סריקה, סימון שדות לא בטוחים ובדיקה אנושית לפני תיוק או העברה למערכת.</li>
        <li>דוח יומי אוסף נתונים ממכירות, מלאי ופניות ומציג לבעל העסק מה דורש טיפול היום.</li>
      </ul>
      <h2>רשימת בדיקה לפני שמתחילים</h2>
      <ul>
        <li>איזו פעולה חוזרת על עצמה הכי הרבה?</li>
        <li>איפה המידע נמצא היום?</li>
        <li>מי צריך לאשר פעולה לפני שהיא מתבצעת?</li>
        <li>מה ייחשב הצלחה אחרי חודש שימוש?</li>
        <li>איזה מידע רגיש ולא צריך להיכנס לתהליך?</li>
      </ul>
      <h2>טעויות נפוצות</h2>
      <ul>
        <li>להתחיל מכלי לפני שמבינים את התהליך.</li>
        <li>לבנות אוטומציה בלי מדידה ובלי בדיקה אנושית.</li>
        <li>לחבר יותר מדי מערכות כבר בשלב הראשון.</li>
        <li>לשלוח הודעות אוטומטיות שנשמעות קרות או לא מדויקות.</li>
      </ul>
      <h2>שאלות נפוצות</h2>
      <h3>האם אוטומציה עסקית מתאימה לעסק קטן?</h3>
      <p>כן. דווקא עסק קטן יכול להרוויח מהר מאוטומציה קטנה שמסדרת פניות, תזכורות או דוחות.</p>
      <h3>האם צריך לדעת לתכנת?</h3>
      <p>לא. אתם צריכים להסביר איך העסק עובד. את התכנון, החיבורים והבנייה אנחנו יכולים לעשות עבורכם.</p>
      <h3>האם אפשר לחבר את זה ל ChatGPT?</h3>
      <p>כן, כשיש נתונים מסודרים וגישה בטוחה. אפשר לחבר נתונים, דוחות ומיילים לשכבת שיחה כמו TalkToData.</p>
      <h2>קישורים שימושיים</h2>
      <ul>
        <li><Link href="/services/ai-automation">עמוד AI ואוטומציה לעסקים</Link></li>
        <li><Link href="/services/chatgpt-business-data">TalkToData וחיבור נתונים אל ChatGPT</Link></li>
        <li><Link href="/services/ai-chat-for-websites">שירות צ׳ט AI לאתרים</Link></li>
        <li><Link href="/contact">יצירת קשר עם נביא נס ישראל בע\"מ</Link></li>
      </ul>
    </div>
  );
}

function InvoiceScanningArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>תשובה קצרה: מהי סריקת חשבוניות באמצעות AI?</h2>
      <p>
        סריקת חשבוניות עם AI היא תהליך שבו מערכת קוראת מסמך, מזהה שדות חשובים כמו שם ספק, תאריך, סכום, מע״מ ומספר חשבונית, ואז הופכת אותם לנתונים שאפשר לסנן, לבדוק, לנתב ולחבר למערכת עסקית. זה לא מבטיח דיוק של 100%, ולכן חשוב לשלב בקרת אנוש.
      </p>
      <h2>איך מחלצים נתונים מחשבוניות?</h2>
      <p>
        הפתרון מקבל קובץ או צילום, מזהה את מבנה המסמך, מחפש שדות מרכזיים ומחזיר נתונים מסודרים. למשל: ספק, מספר חשבונית, תאריך, סכום לפני מע״מ, מע״מ, סכום כולל, מטבע, קטגוריה והאם חסר מידע שצריך לבדוק.
      </p>
      <h2>איך מסננים וממיינים חשבוניות?</h2>
      <ul>
        <li>לפי ספק או לקוח.</li>
        <li>לפי סכום, תאריך, חודש או סטטוס טיפול.</li>
        <li>לפי קטגוריה כמו תוכנה, פרסום, שילוח, מלאי או שירותים.</li>
        <li>לפי חשבוניות שחסר בהן שדה חשוב או דורשות אישור אנושי.</li>
      </ul>
      <h2>איך מנתבים מסמכים למערכת המתאימה?</h2>
      <p>
        אחרי חילוץ הנתונים אפשר להעביר מסמך או שורה מסודרת למערכת הנהלת חשבונות, תיקיית לקוח, CRM, דוח ניהולי או ממשק TalkToData. החיבור תלוי בהרשאות, בספק המערכת ובדרך הגישה החוקית לנתונים.
      </p>
      <h2>למי זה מתאים?</h2>
      <p>
        רואי חשבון, הנהלת חשבונות, עסקים קטנים, חברות עם הרבה ספקים, חנויות אונליין וצוותים שמקבלים הרבה חשבוניות במייל יכולים לחסוך זמן ולצמצם הקלדה ידנית. עדיין צריך אישור אנושי במקרים רגישים או כשהמסמך לא ברור.
      </p>
      <h2>אבטחת מידע והרשאות</h2>
      <p>
        חשבוניות כוללות מידע עסקי רגיש. לכן לא מחברים הכל בלי לחשוב. צריך להגדיר מי רשאי לראות מידע, איפה המסמכים נשמרים, מה נשמר ומה נמחק, ומה דורש אישור לפני מעבר למערכת אחרת.
      </p>
      <h2>חיבור ל ChatGPT ולכלים חכמים</h2>
      <p>
        אחרי שהחשבוניות הופכות לנתונים, אפשר לשאול שאלות כמו: אילו ספקים עלו הכי הרבה החודש, אילו חשבוניות חסרות מע״מ, מה עוד לא טופל, או איזה הוצאה חריגה לעומת החודש הקודם.
      </p>
      <h2>שאלות נפוצות</h2>
      <h3>האם AI קורא חשבוניות תמיד בצורה מושלמת?</h3>
      <p>לא. יש מסמכים לא ברורים, צילומים חלשים ופורמטים משתנים. לכן בונים תהליך עם סימון שדות לא בטוחים ובקרת אנוש.</p>
      <h3>אפשר לחבר את זה למשרד רואה חשבון?</h3>
      <p>כן, אם יש דרך עבודה מסודרת והרשאות מתאימות. המערכת יכולה לעזור לסדר מסמכים לפני טיפול מקצועי.</p>
      <h3>האם נביא נס ישראל בע\"מ יכולה לבנות פתרון כזה?</h3>
      <p>כן. אפשר לבנות פתרון מותאם לצורת העבודה שלכם, בלי להבטיח מוצר מדף שמתאים לכל חשבונית בעולם.</p>
      <h2>קישורים שימושיים</h2>
      <ul>
        <li><Link href="/blog/business-automation-start">מהי אוטומציה עסקית ואיך מתחילים</Link></li>
        <li><Link href="/services/chatgpt-business-data">TalkToData וחיבור נתונים ל ChatGPT</Link></li>
        <li><Link href="/solutions/accountants">פתרונות AI לרואי חשבון</Link></li>
        <li><Link href="/blog/accountants-ai-data-automation">AI ודאטה למשרדי רואי חשבון</Link></li>
        <li><Link href="/services/ai-automation">AI ואוטומציה לעסקים</Link></li>
        <li><Link href="/contact">יצירת קשר</Link></li>
      </ul>
    </div>
  );
}

function EcommerceStoreArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>תשובה קצרה: מהי חנות איקומרס?</h2>
      <p>
        חנות איקומרס היא אתר מכירות שמאפשר להציג מוצרים, לקבל תשלום, לנהל הזמנות, משלוחים, מלאי, לקוחות ומדידה. חנות טובה לא רק נראית יפה, היא עוזרת ללקוח להבין, לסמוך ולקנות, ולעסק לנהל את המכירות בצורה מסודרת.
      </p>
      <h2>למי חנות אונליין מתאימה?</h2>
      <p>
        חנות מתאימה לעסק שמוכר מוצרים פיזיים, מוצרים דיגיטליים, שירותים עם תשלום אונליין, מותג שרוצה למכור ישירות או עסק שרוצה להוסיף ערוץ מכירה נוסף מעבר לטלפון ולוואטסאפ.
      </p>
      <h2>מה ההבדל בין אתר רגיל לחנות?</h2>
      <p>
        אתר רגיל מסביר על העסק ומוביל לפנייה. חנות צריכה גם לנהל קטלוג, עמודי מוצר, סל קניות, סליקה, משלוחים, מלאי, מיילים ללקוח ודוחות. לכן היא דורשת יותר תכנון, אבטחה ובדיקות.
      </p>
      <h2>Shopify מול WooCommerce</h2>
      <p>
        Shopify מתאימה לעסקים שרוצים תשתית מסודרת, ניהול נוח ופחות התעסקות בשרת. WooCommerce מתאימה לעסקים שרוצים גמישות גבוהה בתוך WordPress ושליטה רחבה יותר. הבחירה תלויה בתקציב, תוכן, שילוח, סליקה, הרחבות והצוות שיתפעל את החנות.
      </p>
      <h2>מה חייבים לתכנן לפני שמתחילים?</h2>
      <ul>
        <li>מוצרים, וריאציות, תמונות, מחירים ומלאי.</li>
        <li>סליקה, חשבוניות, משלוחים, החזרות ושירות לקוחות.</li>
        <li>מבנה קטגוריות וחיפוש מוצר נוח.</li>
        <li>חוויית מובייל מהירה וברורה.</li>
        <li>SEO לעמודי מוצר וקטגוריה.</li>
        <li>חיבור למערכות עסקיות, דוחות ואוטומציות.</li>
      </ul>
      <h2>טעויות נפוצות בהקמת חנות</h2>
      <ul>
        <li>להעלות מוצרים בלי טקסט ברור ותמונות טובות.</li>
        <li>להעמיס אפליקציות ותוספים שמאטים את החנות.</li>
        <li>לא לבדוק תהליך רכישה מלא במובייל.</li>
        <li>להשאיר משלוחים, החזרות ואמינות בלי הסבר.</li>
        <li>לא לחבר מדידה כדי להבין מאיפה מגיעות מכירות.</li>
      </ul>
      <h2>שאלות נפוצות</h2>
      <h3>מה עדיף, Shopify או WooCommerce?</h3>
      <p>אין תשובה אחת. Shopify נוחה ויציבה, WooCommerce גמישה מאוד. בוחרים לפי הצורך העסקי, התפעול והתקציב.</p>
      <h3>האם חנות איקומרס צריכה SEO?</h3>
      <p>כן. עמודי מוצר וקטגוריה צריכים כותרות, תיאורים, מבנה נכון, מהירות ותוכן שעוזר גם לגוגל וגם לקונה.</p>
      <h3>האם אפשר לחבר חנות למלאי או CRM?</h3>
      <p>כן. אפשר לחבר חנות למערכות מלאי, CRM, דוחות, מיילים, משלוחים וכלים כמו TalkToData לפי הצורך.</p>
      <h2>קישורים שימושיים</h2>
      <ul>
        <li><Link href="/services/ecommerce">עמוד שירותי איקומרס</Link></li>
        <li><Link href="/services/shopify">שירותי Shopify</Link></li>
        <li><Link href="/services/woocommerce">שירותי WooCommerce</Link></li>
        <li><Link href="/services/amazon-account-management">ניהול Amazon</Link></li>
        <li><Link href="/services/website-speed-optimization">שיפור מהירות חנות</Link></li>
      </ul>
    </div>
  );
}

function MobileAppDevelopmentArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>תשובה קצרה: מתי עסק באמת צריך אפליקציה?</h2>
      <p>
        עסק צריך אפליקציה סלולרית כשהיא פותרת פעולה שחוזרת על עצמה: הזמנות, אזור אישי, התראות, שירות לקוחות, עבודה של צוות, ניהול שטח או חיבור למערכת עסקית. אם המטרה היא רק “להיות באפליקציה”, לפעמים אתר מותאם למובייל מספיק וטוב יותר להתחלה.
      </p>
      <h2>איך הופכים רעיון לאפליקציה?</h2>
      <p>
        מתחילים מהמשתמש: מי ישתמש באפליקציה, מה הוא צריך לעשות, איפה הוא נתקע היום ואיזה מידע צריך לעבור למערכת העסק. רק אחרי זה בונים מסכים, הרשאות, חיבורים, התראות ותהליך בדיקות.
      </p>
      <h2>מתי אתר מובייל מספיק?</h2>
      <p>
        אם הלקוח רק צריך לקרוא מידע, להשאיר פרטים, להזמין שירות פשוט או לבצע רכישה רגילה, אתר מובייל מהיר יכול להספיק. אפליקציה מתאימה יותר כשיש שימוש חוזר, הרשאות, התראות, אזור אישי או פעולות שצריכות לעבוד בצורה עמוקה יותר.
      </p>
      <h2>iOS, Android, היברידי או Native?</h2>
      <p>
        Native מתאים כשצריך ביצועים גבוהים, שימוש עמוק ביכולות מכשיר או חוויה מורכבת. אפליקציה היברידית יכולה להתאים כשצריך לפתח מהר יותר לשתי מערכות ולשמור על תקציב סביר. הבחירה תלויה במוצר, במשתמשים ובתחזוקה העתידית.
      </p>
      <h2>מה חשוב לחבר לאפליקציה?</h2>
      <ul>
        <li>API שמחבר בין האפליקציה למערכת העסק.</li>
        <li>הרשאות משתמשים ואבטחת מידע.</li>
        <li>התראות Push רק כשיש להן ערך אמיתי.</li>
        <li>מדידה של שימוש, נטישה ותקלות.</li>
        <li>מערכת ניהול לעדכון תוכן, לקוחות, הזמנות או סטטוסים.</li>
      </ul>
      <h2>בדיקות, השקה ותחזוקה</h2>
      <p>
        אפליקציה טובה צריכה בדיקות במכשירים אמיתיים, בדיקת הרשאות, עומסים, חיבורי API, מסכי שגיאה ותהליך עדכון. אחרי ההשקה צריך לתחזק גרסאות, לתקן באגים, לשפר חוויית משתמש ולהתאים לשינויים במערכות ההפעלה.
      </p>
      <h2>מה משפיע על היקף ועלות?</h2>
      <p>
        מספר המסכים, סוג המשתמשים, הרשאות, חיבורי API, תשלומים, התראות, מערכת ניהול, עיצוב, בדיקות ותחזוקה משפיעים על ההיקף. לכן לא נכון לזרוק מחיר לפני אפיון קצר שמבין מה באמת צריך לבנות.
      </p>
      <h2>שאלות נפוצות</h2>
      <h3>האם חייבים אפליקציה גם ל iOS וגם ל Android?</h3>
      <p>לא תמיד. בודקים איפה המשתמשים נמצאים ומה חשוב להשיק ראשון. לפעמים נכון להתחיל בהיברידי או בגרסה מצומצמת.</p>
      <h3>האם אפשר לחבר אפליקציה לאתר קיים?</h3>
      <p>כן, אם יש API או דרך מסודרת להעביר נתונים. לפעמים צריך לבנות שכבת חיבור לפני האפליקציה עצמה.</p>
      <h3>האם נביא נס ישראל בע\"מ עושה גם אפיון?</h3>
      <p>כן. אנחנו מתחילים מאפיון משתמשים, תהליך עסקי וחיבורי מערכות כדי לא לפתח משהו שלא צריך.</p>
      <h2>קישורים שימושיים</h2>
      <ul>
        <li><Link href="/services/mobile-app-development">עמוד פיתוח אפליקציות</Link></li>
        <li><Link href="/services/api-integrations">חיבורי API ואינטגרציות</Link></li>
        <li><Link href="/services/web-development">אתרים ומערכות עסקיות</Link></li>
        <li><Link href="/contact">יצירת קשר</Link></li>
      </ul>
    </div>
  );
}

function ExternalAmazonTrafficArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>התשובה הקצרה</h2>
      <p>
        מוכר Amazon יכול להביא תנועה מחוץ לפלטפורמה באמצעות אתר עצמאי שמציג את המוצרים בצורה עשירה, עונה על שאלות אמיתיות של לקוחות, נבנה לקידום אורגני ומפנה בצורה ברורה לעמודי הרכישה ב Amazon.
      </p>
      <p>
        זה לא מחליף את Amazon ולא מבטיח דירוגים או מכירות. זה מוסיף שכבת צמיחה שנמצאת בשליטת המותג ויכולה להתחזק לאורך זמן.
      </p>
      <h2>למה לא להסתמך רק על התנועה הפנימית של Amazon?</h2>
      <p>
        תנועה פנימית ב Amazon חשובה מאוד, אבל היא לא תמיד מספיקה. מוכר שתלוי רק בחיפוש פנימי ובפרסום ממומן תלוי בערוץ אחד, בכללים שלו, בתחרות שלו ובעלויות הפרסום שלו. אתר חיצוני מאפשר למותג לבנות נכס משלו, להסביר את המוצרים לעומק ולפגוש לקוחות עוד לפני שהם נכנסים ל Amazon.
      </p>
      <h2>איך אתר חיצוני עוזר?</h2>
      <p>
        באתר עצמאי אפשר לבנות עמודי מוצר עשירים, עמודי קטגוריה, מדריכי קנייה, מאמרי שימוש, שאלות נפוצות והשוואות. במקום עמוד קצר שמפנה החוצה, הגולש מקבל תשובה אמיתית: למי המוצר מתאים, איזו בעיה הוא פותר, איך משתמשים בו ומה כדאי לבדוק לפני רכישה.
      </p>
      <h2>סוגי תוכן שיכולים להביא חיפושים</h2>
      <ul>
        <li>מדריכי קנייה לפי בעיה או צורך של הלקוח.</li>
        <li>השוואות בין סוגי מוצרים או שימושים שונים.</li>
        <li>עמודי מוצר עם הסבר עשיר ולא רק קישור.</li>
        <li>שאלות נפוצות שנכתבות לפי שאלות אמיתיות של לקוחות.</li>
        <li>עמודי פתרון לבעיות שהמוצר עוזר לפתור.</li>
        <li>מאמרי שימוש, תחזוקה, התאמה וטיפים.</li>
      </ul>
      <h2>למה עמוד מוצר עשיר חשוב?</h2>
      <p>
        מנוע חיפוש לא צריך עוד עמוד ריק שמטרתו היחידה היא לשלוח תנועה החוצה. הוא צריך עמוד שימושי. עמוד טוב מסביר את המוצר, נותן הקשר, עונה על שאלות, מציג יתרונות ומגבלות ומציע קישור ברור לעמוד Amazon כשהגולש מוכן להתקדם.
      </p>
      <h2>מדידה: לדעת מה באמת עובד</h2>
      <p>
        בלי מדידה קשה לדעת אם האתר עוזר. לכן חשוב לחבר Google Search Console, Analytics ומעקב קליקים לעמודי Amazon. כך אפשר לראות אילו עמודים מביאים כניסות, אילו חיפושים מתחילים להופיע, מאילו מדינות מגיעים גולשים ואילו מוצרים מקבלים עניין.
      </p>
      <h2>טעויות נפוצות</h2>
      <ul>
        <li>להעתיק תיאורי מוצר באופן עיוור במקום לכתוב תוכן מקורי.</li>
        <li>לבנות הרבה עמודים דקים שאין בהם ערך אמיתי.</li>
        <li>להבטיח דירוגים או אינדוקס במקום לבנות תשתית נכונה.</li>
        <li>לא למדוד קליקים לעמודי Amazon ולא להבין מה עובד.</li>
        <li>לכתוב תוכן כללי מדי שלא עונה על שאלה אמיתית של לקוח.</li>
      </ul>
      <h2>איך נביא נס ישראל בע\"מ יכולה לעזור?</h2>
      <p>
        אנחנו בונים אתר צמיחה אורגנית למוכרי Amazon: מבנה תוכן, עמודי מוצר, מדריכים, מדידה, קישורים מסודרים לעמודי Amazon ותשתית שיכולה להתרחב בעתיד לחנות עצמאית או לערוצים נוספים.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/amazon-seller-seo-website">
          לעמוד השירות: אתר צמיחה אורגנית למוכרי Amazon
        </Link>
      </p>
      <p>
        לא בטוחים אם להתחיל? שלחו לנו כמה קישורי מוצרים בוואטסאפ, ספרו באיזו מדינה אתם מוכרים, ונכוון אתכם בצורה פשוטה.
      </p>
    </div>
  );
}

function MultilingualAmazonSeoArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>התשובה הקצרה</h2>
      <p>
        אתר רב לשוני למוכרי Amazon הוא אתר שנבנה לפי השוק שבו הלקוחות נמצאים: שפה, מדינה, ביטויי חיפוש, תרבות קנייה, מידות, מונחים ותוכן מקומי. זה לא רק תרגום של עמודים, אלא התאמה אמיתית לקהל.
      </p>
      <h2>למה תוכן מקומי חשוב?</h2>
      <p>
        לקוח בארצות הברית לא תמיד מחפש כמו לקוח בבריטניה, גרמניה או צרפת. גם אם השפה דומה, הביטויים, צורת ההסבר, יחידות המידה והציפיות יכולים להיות שונים. אתר שנכתב לפי מדינה עוזר לגולש להרגיש שהוא הגיע למקום שמבין אותו.
      </p>
      <h2>תרגום מול לוקליזציה</h2>
      <p>
        תרגום מעביר מילים משפה לשפה. לוקליזציה מתאימה את המסר לשוק. במוצרים שמיועדים ל Amazon, ההבדל הזה חשוב: כותרת, מדריך קנייה, שאלות נפוצות ודוגמאות שימוש צריכים להישמע טבעיים ולא כמו טקסט שעבר דרך מכונה.
      </p>
      <h2>מבנה כתובות ו hreflang</h2>
      <p>
        כשבונים אתר לכמה מדינות או שפות, חשוב לסדר כתובות URL בצורה ברורה ולהגדיר hreflang. זה עוזר למנועי חיפוש להבין איזו גרסה מתאימה לאיזה קהל. ההגדרה לא מבטיחה דירוג, אבל היא חלק חשוב מתשתית SEO בינלאומית מסודרת.
      </p>
      <h2>מחקר מילים מקומי</h2>
      <p>
        לא מספיק לקחת מילת מפתח בעברית או באנגלית ולתרגם אותה. צריך לבדוק איך הלקוחות במדינה מחפשים את הבעיה, המוצר או הפתרון. לפעמים הביטוי הנכון הוא לא שם המוצר אלא השאלה שהלקוח שואל לפני שהוא יודע מה לקנות.
      </p>
      <h2>איזה עמודים כדאי לבנות?</h2>
      <ul>
        <li>עמודי מוצר עשירים לכל שוק חשוב.</li>
        <li>עמודי קטגוריה שמסבירים את ההבדלים בין מוצרים.</li>
        <li>מדריכי קנייה לפי מדינה ושפה.</li>
        <li>השוואות ושאלות נפוצות לפי קהל יעד.</li>
        <li>עמודי שימוש, תחזוקה ופתרון בעיות.</li>
      </ul>
      <h2>מדידה לפי מדינה</h2>
      <p>
        אתר בינלאומי חייב מדידה מסודרת: אילו מדינות מביאות כניסות, אילו עמודים מושכים חיפושים, איפה יש קליקים לעמודי Amazon ואיזה שוק מתחיל להראות עניין. בלי מדידה לפי מדינה, קשה לדעת איפה להשקיע.
      </p>
      <h2>טעויות נפוצות ב SEO בינלאומי</h2>
      <ul>
        <li>להעלות תרגום טכני בלי עריכה אנושית.</li>
        <li>ליצור הרבה עמודים דומים מדי בין שפות.</li>
        <li>לא להגדיר hreflang או להגדיר אותו לא נכון.</li>
        <li>לא להתאים מידות, מונחים, מחירים או דוגמאות לשוק.</li>
        <li>לא למדוד ביצועים בנפרד לכל מדינה.</li>
      </ul>
      <h2>איך מתחילים נכון?</h2>
      <p>
        מתחילים משוק אחד או כמה שווקים חשובים, בוחרים מוצרים מרכזיים, בונים תוכן איכותי ומודדים. אחרי שיש בסיס טוב, אפשר להרחיב לעוד מוצרים, שפות ומדינות. עדיף להתחיל מדויק מאשר להעלות הרבה עמודים דקים.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/amazon-seller-seo-website">
          לעמוד השירות: אתר SEO למוכרי Amazon
        </Link>
      </p>
      <p>
        מוכרים בארצות הברית, אירופה או בכמה שווקים? שלחו לנו הודעה בוואטסאפ עם קישורי המוצרים והשפה הרצויה, ונבדוק איך נכון לבנות את האתר.
      </p>
    </div>
  );
}

function SecureAccountsAfterHackArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>אבטחה אחרי פריצה מתחילה מהמייל הראשי</h2>
      <p>
        אחרי פריצה או ניסיון השתלטות, הרבה אנשים רצים להחליף סיסמה בחשבון שנפגע ושוכחים את השורש: המייל הראשי. אם לתוקף יש עדיין גישה למייל, הוא יכול לקבל קודי שחזור, לשנות סיסמאות שוב, לראות התראות אבטחה ולהמשיך לשלוט בחשבונות נוספים. לכן הצעד הראשון הוא לבדוק שהמייל עצמו בשליטה מלאה, עם סיסמה חדשה, אימות דו שלבי ופרטי שחזור עדכניים.
      </p>
      <p>
        חשוב לבדוק גם אם קיימות הפניות מייל, כללי סינון, כתובות שחזור לא מוכרות או מכשירים שמחוברים לתיבה. לפעמים התוקף לא נשאר בתוך החשבון החברתי, אלא משאיר לעצמו דרך שקטה לחזור דרך המייל.
      </p>

      <h2>סיסמאות ייחודיות ולא ממוחזרות</h2>
      <p>
        אחת הטעויות הנפוצות אחרי פריצה היא להחליף סיסמה רק במקום אחד, בזמן שאותה סיסמה שימשה גם בפייסבוק, אינסטגרם, טלגרם, מייל, חנות אונליין או מערכת ניהול. סיסמה שנחשפה במקום אחד עלולה לסכן מקומות נוספים. לכל חשבון חשוב צריכה להיות סיסמה ייחודית, ארוכה וקשה לניחוש.
      </p>
      <p>
        אם משתמשים במנהל סיסמאות, חשוב לבדוק שגם אליו יש אימות דו שלבי ושאין מכשירים ישנים שמחוברים ללא צורך. אם לא משתמשים במנהל סיסמאות, זה זמן טוב לשקול מעבר מסודר, כי קשה לנהל הרבה סיסמאות חזקות בצורה ידנית.
      </p>

      <h2>ניתוק מכשירים וסשנים קיימים</h2>
      <p>
        שינוי סיסמה לא תמיד מנתק מיד כל מכשיר או סשן פעיל. לכן צריך לבדוק את רשימת המכשירים המחוברים, הדפדפנים הפעילים, האפליקציות שקיבלו הרשאה והכניסות האחרונות. אם מופיע מכשיר שלא מזהים, עיר לא מוכרת, דפדפן לא שלכם או כניסה בשעה חריגה, מנתקים אותו וממשיכים לבדוק.
      </p>
      <p>
        בעסק, כדאי לבדוק גם מחשבים של עובדים, טלפונים ישנים, טאבלטים, מכשירי משרד וחשבונות שנשארו פתוחים אצל ספקים או עובדים שכבר לא משתמשים בהם.
      </p>

      <h2>אימות דו שלבי וקודי גיבוי</h2>
      <p>
        אימות דו שלבי הוא שכבה חשובה, אבל צריך להגדיר אותו נכון. עדיף להשתמש באפליקציית אימות או מנגנון חזק יותר כאשר זה אפשרי, ולא להסתמך רק על SMS אם קיימת חלופה טובה. בנוסף, כדאי לשמור קודי גיבוי במקום מאובטח, לא בתוך אותה תיבת מייל שעלולה להיפגע.
      </p>
      <p>
        אם לתוקף הייתה גישה לחשבון, חשוב לבדוק שלא הוגדר אמצעי אימות חדש שאינו שלכם, ושמספר הטלפון או כתובת השחזור באמת שייכים לכם.
      </p>

      <h2>אפליקציות חיצוניות והרשאות מנהלים</h2>
      <p>
        חשבונות רבים מחוברים לשירותים חיצוניים: כלי פרסום, תוספים, אפליקציות ניהול סושיאל, CRM, חנויות, מערכות שליחת מייל וכלים שמקבלים הרשאה לגשת למידע. אחרי אירוע פריצה צריך לבדוק אילו אפליקציות עדיין מחוברות, להסיר מה שלא מוכר ולצמצם הרשאות רחבות מדי.
      </p>
      <p>
        בדפים עסקיים, חשבונות פרסום ונכסים דיגיטליים, יש לבדוק גם מי מנהל, מי עורך, מי מחזיק הרשאות תשלום ומי יכול להוסיף אנשים חדשים. לפעמים הפריצה לא נראית בחשבון האישי, אלא בהרשאות של נכס עסקי.
      </p>

      <h2>חשבונות פרסום, דומיינים ונכסים עסקיים</h2>
      <p>
        עסק שנפרץ צריך לחשוב רחב יותר מחשבון סושיאל אחד. צריך לבדוק דומיינים, DNS, אתר, חשבון פרסום, Google Business Profile, חנות Shopify או WooCommerce, מערכת דיוור, תיבת מייל עסקית וגישה לחברת אחסון. כל אחד מהנכסים האלה יכול להשפיע על אמון, מכירות ותפעול.
      </p>
      <p>
        אם יש חשד שמישהו השתמש בחשבון פרסום, ביצע חיובים, שלח הודעות בשם העסק או שינה פרטי קשר, חשוב לתעד, לעצור פעילות לא מוכרת ולפנות לפלטפורמה דרך הערוצים החוקיים.
      </p>

      <h2>מעקב אחרי סימנים חריגים</h2>
      <p>
        גם אחרי שהכול נראה יציב, כדאי לעקוב במשך תקופה אחרי הודעות שחוזרות, ניסיונות כניסה, שינויי סיסמה, הודעות שלא אתם שלחתם, קמפיינים לא מוכרים, כללי מייל חדשים או שינויים בפרטי שחזור. אירוע פריצה הוא לא רק רגע אחד, לפעמים הוא תהליך.
      </p>
      <p>
        אם לקוחות או חברים קיבלו הודעות מזויפות בשמכם, כדאי להכין הודעה קצרה וברורה שמסבירה שהייתה השתלטות ושלא לפתוח קישורים חשודים. עושים זאת בזהירות, בלי לפרסם מידע רגיש ובלי להיכנס לפאניקה.
      </p>

      <h2>מתי לערב גורם מקצועי?</h2>
      <p>
        אם מדובר בחשבון עסקי, מייל מרכזי, חשבון פרסום, דומיין, אתר, ניסיון סחיטה, איום בפרסום מידע או פגיעה בכמה חשבונות במקביל, כדאי לקבל ליווי. לא בגלל שאי אפשר לעשות שום דבר לבד, אלא כי סדר הפעולות חשוב. פעולה לא נכונה יכולה למחוק ראיות, לנעול גישה או להקשות על דיווח לפלטפורמה.
      </p>
      <p>
        נביא נס ישראל בע\"מ לא מבטיחה החזרת חשבון ולא מבצעת פעולה לא חוקית. העבודה היא תיעוד, הבנת מצב, ניסיונות שחזור בערוצים חוקיים, אבטחה מחדש, בדיקת נכסים קשורים והכוונה רגועה לצעדים הבאים.
      </p>

      <h2>קישורים שימושיים</h2>
      <ul>
        <li><Link href="/blog/what-to-do-when-account-is-hacked">מה עושים ברגע הראשון אחרי פריצה לחשבון</Link></li>
        <li><Link href="/services/account-hack-recovery">סיוע במקרה פריצה לחשבון ונכסים דיגיטליים</Link></li>
        <li><Link href="/services/technical-support-cyber-networks">תמיכה טכנית, סייבר, רשתות ופתרון תקלות</Link></li>
      </ul>
    </div>
  );
}

function AccountHackArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>מה לעשות בדקות הראשונות?</h2>
      <p>
        כשמגלים שפרצו לחשבון, הדבר הכי חשוב הוא לא לפעול מתוך לחץ. לא למחוק הודעות, לא למסור עוד קודים, לא ללחוץ על קישורים שקיבלתם מהתוקף ולא לנסות "להחזיר" לבד בצורה שעלולה לסבך את המצב.
      </p>
      <p>
        התחילו מתיעוד: צילומי מסך, הודעות, כתובות מייל, מספרי טלפון, זמני פעילות, שינויי סיסמה וכל פרט שמראה מה קרה. אחר כך בודקים האם עדיין יש גישה למייל, לטלפון, למכשירים מחוברים או לאפשרויות שחזור.
      </p>
      <h2>למה לא לפעול בפאניקה?</h2>
      <p>
        פעולה לא נכונה יכולה למחוק ראיות, למסור לתוקף עוד מידע או לסגור אפשרות שחזור. לפעמים עדיף לעצור רגע, להבין מה עדיין בשליטתכם, ואז לפעול לפי סדר: אבטחת מייל, בדיקת מכשירים, דיווח לפלטפורמה ושחזור גישה.
      </p>
      <h2>איך לשמור ראיות?</h2>
      <ul>
        <li>צלמו הודעות, דרישות כסף, איומים וקישורים שנשלחו.</li>
        <li>שמרו מיילים על שינוי סיסמה, שינוי טלפון או כניסה ממכשיר חדש.</li>
        <li>תעדו מתי גיליתם את הפריצה ומה כבר ניסיתם לעשות.</li>
        <li>אל תמחקו שיחות גם אם הן מלחיצות או מביכות.</li>
      </ul>
      <h2>למה לבדוק מיילים ומכשירים מחוברים?</h2>
      <p>
        בהרבה פריצות החשבון שנראה שנפגע הוא רק הסימפטום. אם המייל, הטלפון או מכשיר מחובר עדיין חשופים, התוקף יכול לשחזר גישה שוב גם אחרי שינוי סיסמה. לכן צריך לבדוק Recovery Email, Recovery Phone, מכשירים מחוברים, אימות דו שלבי וחשבונות קשורים.
      </p>
      <h2>מה לא למסור בשום מצב?</h2>
      <ul>
        <li>קודי אימות חד פעמיים.</li>
        <li>סיסמאות או צילומי מסך של הגדרות אבטחה.</li>
        <li>גישה למחשב דרך תוכנה שמישהו לא מוכר שלח לכם.</li>
        <li>פרטי תשלום מתוך לחץ, בלי להבין את הסיכון והאפשרויות.</li>
      </ul>
      <h2>מתי לפנות לעזרה מקצועית?</h2>
      <p>
        אם מדובר בחשבון עסקי, דף עם לקוחות, חשבון פרסום, מייל עסקי, דומיין, אתר או מצב שבו דורשים כסף ומאיימים בפרסום מידע, לא כדאי לחכות. עזרה מקצועית יכולה לעזור להבין מה דחוף, איך לתעד, איך לפעול מול הפלטפורמות ואיך לאבטח מחדש.
      </p>
      <h2>מה חשוב להבין על השירות?</h2>
      <p>
        אין הבטחה להחזרת חשבון ואין פעולה לא חוקית. המטרה היא לסייע בניהול מצב, תיעוד, דיווח, ניסיונות שחזור חוקיים, צמצום נזק ואבטחה מחדש של החשבונות והנכסים הדיגיטליים.
      </p>
      <h2>אחרי שחוזרים לשליטה, צריך לאבטח מחדש</h2>
      <p>
        גם אם הצלחתם לשנות סיסמה או להחזיר גישה, חשוב לא להניח שהאירוע נגמר. צריך לבדוק מייל ראשי, מכשירים מחוברים, אפשרויות שחזור, אפליקציות חיצוניות, הרשאות מנהלים וכללים במייל.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/blog/how-to-secure-accounts-after-hack">
          מדריך המשך: איך לאבטח חשבונות אחרי פריצה או שחזור גישה
        </Link>
      </p>
      <h2>סיכום</h2>
      <p>
        פריצה לחשבון היא אירוע מלחיץ, אבל פעולה מסודרת יכולה לצמצם נזק. אם פרצו לכם לאינסטגרם, פייסבוק, טלגרם, וואטסאפ, Gmail, Outlook, מייל עסקי או נכס דיגיטלי, שלחו הודעה בוואטסאפ ונבדוק מה הצעד הנכון.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/account-hack-recovery">
          לעמוד השירות: סיוע במקרה פריצה לחשבון
        </Link>
      </p>
    </div>
  );
}

function BusinessDueDiligenceArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה לא להסתמך רק על מצגת של מוכר?</h2>
      <p>
        מצגת מכירה נועדה להציג את הצד היפה של העסק: מחזור, גרפים, לקוחות, פוטנציאל ותמונות מסודרות. אבל לפני רכישה צריך להבין גם מה עומד מאחורי הנתונים: האם התנועה אמיתית, האם המכירות עקביות, האם הנכסים בשליטה מלאה והאם קיימים סיכונים שלא הופיעו בשיחה הראשונה.
      </p>
      <h2>מה בודקים באתר ובנכסים הדיגיטליים?</h2>
      <ul>
        <li>בעלות על דומיינים, אחסון, מיילים וחשבונות מרכזיים.</li>
        <li>איכות האתר, מהירות, אבטחה, קוד, חוויית מובייל ותלות בספקים.</li>
        <li>חשבונות סושיאל, ביקורות, מוניטין ונכסים חיצוניים.</li>
        <li>חנויות Shopify, WooCommerce, Amazon או eBay אם הן חלק מהעסקה.</li>
      </ul>
      <h2>מה חשוב לבדוק בתנועה, SEO ופרסום?</h2>
      <p>
        תנועה לאתר יכולה להיראות מרשימה, אבל צריך להבין מאיפה היא מגיעה, האם היא יציבה, האם היא תלויה בקמפיין יקר, האם יש ירידה אורגנית, והאם הנתונים ב Google Analytics או Search Console תומכים בסיפור שהמוכר מציג.
      </p>
      <h2>איך מזהים פערים בין נתונים לסיפור?</h2>
      <p>
        מחפשים עקביות: האם נתוני מכירות, תנועה, פרסום, מיילים, מלאי, ביקורות ופעילות לקוחות מספרים את אותו סיפור. אם יש פערים, לא חייבים לפסול עסקה מיד, אבל צריך לשאול שאלות מדויקות ולבקש מסמכים נוספים.
      </p>
      <h2>אילו סיכונים נכסים דיגיטליים יכולים להסתיר?</h2>
      <ul>
        <li>דומיין שלא באמת בשליטת המוכר.</li>
        <li>תלות במפתח, סוכנות או עובד שלא יישאר אחרי הרכישה.</li>
        <li>קמפיינים שמייצרים תנועה יקרה ולא רווחית.</li>
        <li>אתר איטי, לא מאובטח או קשה לתחזוקה.</li>
        <li>ביקורות, תלונות או מוניטין שעלולים להשפיע אחרי הרכישה.</li>
      </ul>
      <h2>מה מקבלים מבדיקת נאותות דיגיטלית?</h2>
      <p>
        בדיקה טובה לא מחליפה עורך דין או רואה חשבון. היא מוסיפה שכבה טכנולוגית, דיגיטלית ועסקית: תמונת מצב, רשימת סיכונים, שאלות למוכר, נקודות לבקשת מסמכים נוספים והמלצות לפני התקדמות.
      </p>
      <h2>גבולות הבדיקה</h2>
      <p>
        הבדיקה מתבצעת בצורה חוקית בלבד: מידע גלוי, גישה מורשית, מסמכים שהמוכר סיפק, בדיקות טכניות מותרות וניתוח מקצועי. אין פריצה, חדירה או גישה לא מורשית, ואין הבטחה לגלות כל סיכון.
      </p>
      <h2>סיכום</h2>
      <p>
        לפני שקונים עסק, חברה, אתר, חנות אונליין או פעילות דיגיטלית, כדאי להבין מה באמת עומד מאחורי הנתונים. אם אתם לפני עסקה, שלחו לנו הודעה ונבדוק איזה שכבת בדיקה דיגיטלית יכולה לעזור לכם לקבל החלטה רגועה יותר.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/business-due-diligence-intelligence">
          לעמוד השירות: בדיקת עסק לפני רכישה
        </Link>
      </p>
    </div>
  );
}

function SmartWebsiteLeadArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>הרעיון: לתת לגולש משהו שימושי, לא רק לבקש ממנו להשאיר פרטים</h2>
      <p>
        אתר טוב לא חייב להסתפק בטקסט, תמונות וכפתור יצירת קשר. לפעמים הדבר שהכי מקפיץ אתר קדימה הוא כלי קטן וחכם שהגולש יכול להשתמש בו בחינם: לחשב, לבדוק, להבין, להשוות, לבחור או לקבל כיוון ראשוני.
      </p>
      <p>
        זה יכול להיות מחשבון, שאלון, כלי אבחון, מחולל, בודק התאמה, עוזר החלטה או כל רעיון שמתאים לנישה של האתר. המטרה היא פשוטה: שהגולש יקבל ערך אמיתי במקום עוד עמוד שמבקש ממנו לפנות.
      </p>
      <h2>למה זה כל כך חזק?</h2>
      <p>
        כשגולש מקבל ערך אמיתי בחינם, הוא זוכר את האתר. הוא נשאר יותר זמן, משתף יותר בקלות, חוזר כשצריך, ומרגיש שהעסק מבין את העולם שלו. זה לא טריק שיווקי. זו דרך להפוך אתר ממקום שמציג מידע למקום שעוזר בפועל.
      </p>
      <p>
        גם העסק מרוויח מזה. כלי טוב מחדד את המסר, מראה מקצועיות, מוסיף סיבה לחזור לאתר, ויכול ליצור פנייה עם יותר הקשר אחרי שהגולש כבר קיבל עזרה ראשונית.
      </p>
      <h2>כל נישה יכולה לקבל כלי אחר</h2>
      <ul>
        <li>עורך דין יכול לתת בדיקת התאמה ראשונית לסוג פנייה.</li>
        <li>רואה חשבון יכול לתת צ׳ק ליסט מסמכים או מחשבון ראשוני לפתיחת תיק.</li>
        <li>אתר נדל״ן יכול לתת מחשבון כדאיות או בדיקת אזור.</li>
        <li>חנות אונליין יכולה לתת כלי התאמת מוצר או השוואת אפשרויות.</li>
        <li>יועץ עסקי יכול לתת אבחון קצר שמחזיר כיוון פעולה.</li>
        <li>מטפל, מאמן או נותן שירות יכול לתת שאלון הכוונה ראשוני.</li>
      </ul>
      <h2>איך חושבים על הכלי הנכון?</h2>
      <p>
        לא מתחילים מטכנולוגיה. מתחילים מהשאלה העסקית: מה הגולש היה שמח לקבל כאן בחינם? מה יעזור לו לקבל החלטה טובה יותר? מה יחסוך לו בלבול? מה יגרום לו להרגיש שהגיע למקום מקצועי?
      </p>
      <p>
        אחרי שמבינים את זה, אפשר לבנות כלי מדויק. לפעמים זה כלי פשוט מאוד. לפעמים זה כלי שמחובר לנתונים, מחשב תוצאה, מסכם תשובות, או מפנה את הגולש למסלול הנכון.
      </p>
      <h2>מה נביא נס ישראל בע\"מ בונה בפועל?</h2>
      <ul>
        <li>אפיון רעיון הכלי לפי הנישה, הקהל והמטרה של האתר.</li>
        <li>חוויה קצרה וברורה שהגולש מבין מיד איך להשתמש בה.</li>
        <li>קוד נקי, מהיר ומותאם למובייל.</li>
        <li>תוצאה שימושית לגולש: סיכום, כיוון, בדיקה, המלצה או פעולה הבאה.</li>
        <li>חיבור לוואטסאפ, מייל, דוח פנימי או מערכת ניהול לקוחות אם צריך.</li>
        <li>אפשרות להרחיב את הכלי בהמשך כשמבינים מה הגולשים באמת עושים איתו.</li>
      </ul>
      <h2>למה זה עוזר גם לעסק?</h2>
      <p>
        הכלי לא נבנה רק בשביל לקבל פניות. הוא נבנה כדי שהאתר יהיה שימושי יותר. אבל כשגולש קיבל ערך אמיתי, אם הוא מחליט לפנות, הוא מגיע עם יותר הבנה, יותר אמון ויותר הקשר.
      </p>
      <h2>סיכום</h2>
      <p>
        אפשר לקחת כמעט כל אתר ולשאול: איזה כלי קטן יכול להפוך אותו לשימושי יותר לגולש? שם מתחילה קפיצה קדימה. במקום אתר שרק מציג מידע, בונים נכס דיגיטלי שעוזר, מלמד, מכוון ומייצר אמון.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/smart-website-lead-engine">
          לעמוד השירות: בניית כלי חכם ושימושי לגולשים באתר שלכם
        </Link>
      </p>
    </div>
  );
}

function AiChatWebsiteArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה אתר עם הרבה תוכן צריך צ׳ט חכם?</h2>
      <p>גולש שמגיע לאתר לא תמיד יודע איפה להתחיל. אם יש הרבה שירותים, מאמרים, מוצרים או עמודים, הוא עלול לעזוב לפני שמצא תשובה. צ׳ט AI קצר וברור עוזר לו להבין בשפה פשוטה מה העסק מציע ומה הצעד הבא.</p>
      <h2>למה קצר ומדויק עדיף מבוט שחופר?</h2>
      <p>בוט טוב לא צריך לכתוב מגילות. הוא צריך לענות ישירות, להציע עמוד מתאים, להסביר שירות במילים פשוטות, ובמקרה הנכון להעביר לוואטסאפ. המטרה היא לעזור, לא להעמיס.</p>
      <h2>איך זה חוסך זמן?</h2>
      <p>שאלות שחוזרות על עצמן כמו “מה אתם עושים?”, “איזה שירות מתאים לי?” או “איך מתחילים?” יכולות לקבל תשובה ראשונית באתר. בעל העסק מקבל גולש מוכן יותר, והגולש לא צריך לחפש לבד.</p>
      <h2>למה לא לשים בוט כללי?</h2>
      <p>בוט כללי שלא מכיר את העסק עלול לענות לא מדויק או להישמע לא קשור. נביא נס ישראל בע\"מ בונה צ׳ט מותאם אישית: עם גבולות, מסרים, הפניות, זהירות ותשובות קצרות שמתאימות לאתר.</p>
      <h2>מה חשוב להגדיר נכון?</h2>
      <ul>
        <li>אילו שירותים הצ׳ט צריך להסביר.</li>
        <li>מתי להפנות לעמוד באתר ומתי לוואטסאפ.</li>
        <li>אילו שאלות לא לענות עליהן בלי שיחה אנושית.</li>
        <li>איך לשמור על שפה קצרה, ברורה ומקצועית.</li>
      </ul>
      <h2>סיכום</h2>
      <p>צ׳ט AI לאתר עסקי הוא לא קסם ולא מחליף את העסק. הוא שכבה חכמה שעוזרת לגולשים להגיע לתשובה מהר יותר ולפנות כשהם מבינים טוב יותר מה הם צריכים.</p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/ai-chat-for-websites">
          לעמוד השירות: בניית צ׳ט AI חכם לאתרים
        </Link>
      </p>
    </div>
  );
}

function TechnicalSupportArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה לא כדאי לחכות עם תקלה טכנית?</h2>
      <p>תקלה קטנה יכולה להפוך מהר לבעיה גדולה: אתר שנופל, מיילים שלא נשלחים, דומיין שלא מוגדר נכון או רשת שמפריעה לעבודה. כשמטפלים מוקדם, קל יותר להבין מה קרה ולמנוע נזק רחב יותר.</p>
      <h2>מה עושים כשאתר נופל?</h2>
      <p>בודקים אם הבעיה באחסון, בדומיין, בהגדרות DNS, בתעודת אבטחה, בקוד או במערכת ניהול האתר. המטרה היא לא לנחש, אלא לבודד את התקלה ולהחזיר את האתר לעבודה בצורה מסודרת.</p>
      <h2>מה עושים כשמיילים לא עובדים?</h2>
      <p>מייל עסקי תלוי בדומיין, רשומות DNS, אימות שליחה, ספק מייל ותיבות מוגדרות נכון. טעות קטנה יכולה לגרום למיילים לא להגיע או להיכנס לספאם. לכן צריך לבדוק את כל השרשרת.</p>
      <h2>תמיכה מרחוק או הגעה פיזית?</h2>
      <p>הרבה תקלות אפשר להתחיל לבדוק מרחוק: אתר, דומיין, מיילים, ספקים והגדרות. כשיש בעיית ציוד, רשת מקומית או סביבת עבודה, לפעמים נכון לתאם הגעה לפי צורך.</p>
      <h2>למה עסק צריך גורם טכני זמין?</h2>
      <p>כשאין איש טכני קבוע, בעל העסק נתקע בין ספקים ולא יודע למי לפנות. גורם אחד שמבין את התמונה יכול לעזור לדבר עם הספקים, להבין מה דחוף, ולבחור פעולה נכונה.</p>
      <h2>רשימת בדיקה קצרה</h2>
      <ul>
        <li>מה בדיוק הפסיק לעבוד ומתי?</li>
        <li>האם הבעיה באתר, במייל, בדומיין, ברשת או במחשב?</li>
        <li>האם יש הודעת שגיאה או צילום מסך?</li>
        <li>מי הספקים הרלוונטיים: אחסון, דומיין, מייל או אינטרנט?</li>
      </ul>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/technical-support-cyber-networks">
          לעמוד השירות: תמיכה טכנית, סייבר, רשתות ופתרון תקלות
        </Link>
      </p>
    </div>
  );
}

function BusinessWebsite999ArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה לא כל עסק צריך להתחיל מאתר גדול?</h2>
      <p>
        הרבה בעלי עסקים צריכים קודם כל מקום רשמי וברור באינטרנט: מי אתם, מה אתם מציעים, למה אפשר לסמוך עליכם ואיך פונים אליכם. לא תמיד צריך להתחיל מפרויקט מורכב, חנות, מערכת או עשרות עמודים.
      </p>
      <p> מסלול אתר תדמית במחיר 999 ₪ נועד בדיוק לשלב הזה: אתר בסיסי, נקי ומותאם למובייל שנותן לעסק נוכחות מקצועית ודרך פשוטה לקבל פניות. </p>
      <h2>מה חשוב שיהיה באתר כזה?</h2>
      <ul>
        <li>כותרת שמסבירה מהר מה העסק עושה.</li>
        <li>טקסט קצר וברור על השירותים המרכזיים.</li>
        <li>כפתורי וואטסאפ, טלפון ומייל במקום בולט.</li>
        <li>התאמה טובה למובייל, כי רוב הלקוחות נכנסים מהטלפון.</li>
        <li>מבנה כותרות ותיאור ראשוני כדי שהאתר יהיה מוכן לסריקה בסיסית של גוגל.</li>
      </ul>
      <h2>למי זה מתאים?</h2>
      <p>
        המסלול מתאים לבעלי עסקים חדשים, נותני שירותים, יועצים, מטפלים, אנשי מקצוע, פרילנסרים ועסקים מקומיים שרוצים אתר ראשון ורשמי בלי להיכנס מיד לפרויקט יקר.
      </p>
      <h2>מה לא כלול במסלול בסיסי?</h2>
      <p> חשוב להיות ברורים: אתר במחיר 999 ₪ הוא מסלול בסיסי. חנות אונליין, מערכת הזמנות, אזור אישי, כתיבת תוכן רחבה, עיצוב מורכב, אוטומציות או פיתוח מותאם אישית הם דברים שאפשר להוסיף, אבל הם לא חלק מהמסלול הבסיסי. </p>
      <h2>איך מתחילים?</h2>
      <p>
        שולחים לנו בוואטסאפ כמה מילים על העסק, לוגו אם יש, צבעים אם יש, טקסט בסיסי ותמונות אם קיימות. אם המסלול מתאים, נתקדם בצורה מסודרת. אם צריך משהו רחב יותר, נגיד את זה מראש.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/business-website-999"> לעמוד השירות: אתר תדמית לעסק במחיר 999 ₪ </Link>
      </p>
    </div>
  );
}

function CourseArticleBody({ content }: { content: (typeof courseArticleContent)[string] }) {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה ללמוד AI בצורה מעשית?</h2>
      <p>
        <BrandInline text={content.intro} />
      </p>
      <h2>למה זה חשוב דווקא עכשיו?</h2>
      <p>
        <BrandInline text={content.why} />
      </p>
      <h2>למה פרויקטים חשובים יותר מצפייה בשיעורים?</h2>
      <p>
        <BrandInline text={content.practical} />
      </p>
      <h2>למה ליווי לאורך שנה משנה את התהליך?</h2>
      <p>
        <BrandInline text={content.yearSupport} />
      </p>
      <h2>דוגמאות מעשיות</h2>
      <ul>
        {content.examples.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>רשימת בדיקה לפני שנרשמים</h2>
      <ul>
        {content.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>המסלול המתאים</h2>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href={content.courseHref}>
          {content.courseLabel}
        </Link>
      </p>
      <h2>סיכום</h2>
      <p>
        <BrandInline text={content.summary} />
      </p>
      <p>
        רוצים לבדוק אם זה מתאים? שלחו הודעה קצרה בוואטסאפ. לא צריך לבוא עם תוכנית מושלמת, רק עם רצון ללמוד, לבנות ולהתקדם.
      </p>
    </div>
  );
}

function SolutionArticleBody({ content }: { content: (typeof solutionArticleContent)[string] }) {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>מה זה אומר בפועל?</h2>
      <p>
        <BrandInline text={content.intro} />
      </p>
      <h2>למה זה חשוב לעסק?</h2>
      <p>
        <BrandInline text={content.why} />
      </p>
      {content.solutionHref === "/solutions/accountants" ? (
        <>
          <h2>איפה סריקת חשבוניות משתלבת במשרד רואי חשבון?</h2>
          <p>
            סריקת חשבוניות היא לא תחליף לשיקול דעת מקצועי. היא יכולה להשתלב בשלב קליטת המסמכים: קבלת קבצים, חילוץ ספק, תאריך, סכום ומע״מ, סימון שדות לא בטוחים, בדיקה אנושית, ואז העברה מסודרת לתיק לקוח, מערכת או דוח. כך הצוות מקבל חומר מסודר יותר, בלי לוותר על בדיקה מקצועית והרשאות.
          </p>
          <p>
            <Link className="font-semibold text-glowred hover:text-white" href="/blog/ai-invoice-scanning-and-filtering">
              לקריאה נוספת: סריקת וסינון חשבוניות עם AI
            </Link>
          </p>
        </>
      ) : null}
      <h2>דוגמאות לשאלות שאפשר לשאול</h2>
      <ul>
        {content.examples.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>רשימת בדיקה קצרה לפני שמתחילים</h2>
      <ul>
        {content.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>הפתרון המתאים</h2>
      <p>
        נביא נס ישראל בע\"מ בונה פתרונות כאלה לפי סוג העסק, בלי להעמיס מערכת מיותרת ובלי להבטיח קסמים. מתחילים
        משיחה פשוטה, מבינים איפה המידע נמצא ומה באמת כואב, ואז בודקים מה אפשר לחבר, לאוטומט ולמדוד.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href={content.solutionHref}>
          {content.solutionLabel}
        </Link>
      </p>
      <h2>סיכום</h2>
      <p>
        <BrandInline text={content.summary} />
      </p>
      <p>
        רוצים לבדוק מה אפשר לבנות אצלכם? שלחו הודעה קצרה בוואטסאפ, ספרו לנו איזה עסק יש לכם ואיפה אתם מרגישים
        שהמידע או העבודה הידנית מעכבים אתכם. נכוון אתכם בצורה פשוטה וחברית.
      </p>
    </div>
  );
}

function EmailToChatGptArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה אימייל הוא מקור נתונים חשוב כל כך?</h2>
      <p>
        תיבת המייל של העסק מחזיקה הרבה יותר מהודעות. יש בה פניות חדשות, שאלות לקוחות, הצעות מחיר, בקשות שירות,
        חשבוניות, הודעות מספקים, שרשורי טיפול ומשימות שמחכות למענה. בפועל, הרבה עסקים מנהלים חלק גדול מהתפעול
        מתוך המייל, אבל עדיין מחפשים ידנית ומפספסים דברים.
      </p>
      <h2>מה TalkToData יכול לעשות עם אימיילים?</h2>
      <p>
        באמצעות TalkToData אפשר לבדוק חיבור מאובטח לתיבת מייל ולהפוך אותה למקור מידע שאפשר לשאול עליו שאלות
        רגילות. זה לא חייב להיות רק Gmail או Outlook/Hotmail. במקרים רבים אפשר לבדוק גם תיבות מייל אחרות, כל עוד
        יש דרך גישה מסודרת כמו IMAP, API, ייצוא נתונים או חיבור דרך ספק המייל.
      </p>
      <p>
        הפתרון מבוסס על יכולות AI מתקדמות וטכנולוגיות OpenAI, אבל העבודה האמיתית היא תכנון נכון: מה מחברים, מה
        לא מחברים, אילו הרשאות נותנים, איזה מידע צריך לסכם ואיזה מידע צריך להישאר מחוץ למערכת.
      </p>
      <h2>דוגמאות לשאלות שאפשר לשאול</h2>
      <ul>
        <li>אילו לקוחות מחכים לתשובה?</li>
        <li>אילו מיילים דחופים הגיעו השבוע?</li>
        <li>איזה פניות חוזרות על עצמן הרבה?</li>
        <li>מי ביקש הצעת מחיר ועדיין לא קיבל מענה?</li>
        <li>אילו שרשורים קשורים להזמנה, חשבונית או תקלה פתוחה?</li>
        <li>מה הנושאים הכי נפוצים בשירות לקוחות החודש?</li>
      </ul>
      <h2>למה זה יכול להיות שינוי גדול לעסק?</h2>
      <p>
        במקום לפתוח עשרות הודעות ולנסות לזכור מה חשוב, העסק מקבל דרך לשאול ולקבל סיכום ברור. זה יכול לחסוך זמן
        לצוות שירות, מכירות, הנהלה ותפעול. זה גם עוזר לזהות פניות שלא טופלו, לקוחות שמחכים יותר מדי זמן ונושאים
        שחוזרים שוב ושוב.
      </p>
      <h2>אבטחה והרשאות</h2>
      <p>
        חיבור מיילים חייב להיות זהיר. לא מחברים הכל בלי לחשוב. מתחילים ממיפוי: איזה מידע צריך, מי רשאי לראות אותו,
        מה רגיש, מה לא צריך להיכנס ומה מטרת השימוש. נביא נס ישראל בע\"מ בודקת את דרך החיבור האפשרית ומתכננת שכבת
        עבודה שמעדיפה מינימום גישה, שימוש ברור ותוצאה מעשית.
      </p>
      <h2>רשימת בדיקה לפני שמתחילים</h2>
      <ul>
        <li>באיזה ספק מייל העסק משתמש?</li>
        <li>האם קיימת גישה מסודרת דרך IMAP, API או ייצוא נתונים?</li>
        <li>אילו סוגי הודעות חשוב לנתח?</li>
        <li>מי בצוות צריך לקבל תשובות מהמערכת?</li>
        <li>אילו תהליכים ידניים אפשר להפוך לסיכום, תזכורת או משימה?</li>
      </ul>
      <h2>איך מתחילים?</h2>
      <p>
        לא צריך להחליף את המייל ולא צריך להבין בטכנולוגיה. שולחים לנו איזה ספק מייל יש לכם, מה אתם רוצים לשאול ומה
        כואב בתהליך היום. אנחנו בודקים אם יש דרך חיבור מאובטחת ומסודרת, ומציעים כיוון מעשי.
      </p>
      <p>
        <Link className="font-semibold text-glowred hover:text-white" href="/services/chatgpt-business-data"> לעמוד השירות: חיבור נתונים עסקיים אל ChatGPT בהתאמה אישית </Link>
      </p>
    </div>
  );
}

function AmazonIQArticleBody() {
  const startQuestions = [
    "איזה ליסטינגים אינם buyable או כוללים שגיאה?",
    "מה השתנה במכירות, בהזמנות או בעמלות לעומת התקופה הקודמת?",
    "איזה מלאי נמצא ב reserved, inbound, unsellable או במלאי מיושן?",
    "כמה Amazon גבתה בעמלות, החזרים והתאמות בתקופה שבחרתי?",
    "איזו תרומה משוערת יש למוצר אחרי שמעלים קובץ עלויות מסודר?",
  ];

  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-li:text-zinc-300 prose-a:text-glowred">
      <h2>למה Seller Central מרגיש מפוזר</h2>
      <p>Seller Central נותן למוכר גישה למידע חשוב, אבל המידע מגיע דרך מסכים, דוחות, אזורים והרשאות שונות. הזמנה נמצאת במקום אחד, מלאי במקום אחר, מידע פיננסי בדוח נפרד וליסטינג בעמוד אחר. כשצריך להבין מה השתנה או למה מוצר מסוים דורש בדיקה, המעבר הידני בין מקורות הופך את השאלה העסקית לפעולת חיפוש ארוכה.</p>
      <p>AmazonIQ נבנה כדי לתת שכבת מודיעין על המידע שהחשבון המורשה מחזיר. הוא לא מחליף את Seller Central ולא מנהל את החשבון. הוא מסדר את נקודת המבט: מה נכון עכשיו, מה השתנה, ואיזה תרחיש כדאי לבחון לפני החלטה.</p>

      <h2>מהו AmazonIQ</h2>
      <p>AmazonIQ הוא מוצר עצמאי של Navines למוכרי Amazon. המוכר מחבר את Seller Central בהרשאה מאושרת ובמצב קריאה בלבד. לאחר החיבור אפשר לעבוד בשתי חוויות עצמאיות על אותו workspace מורשה: Dashboard לתמונה מובנית, ו GPT לחקירה בשפה טבעית. לצד שתיהן פועל What If Lab לבחינת תרחישים מסומנים.</p>
      <p>ההפרדה הזו חשובה. דשבורד הוא מקום לראות תמונת מצב מסודרת. GPT הוא מקום לשאול, להשוות ולבקש חקירה. What If הוא מקום לבנות הנחות מפורשות. המוצר לא מציג תרחיש כהיסטוריה אמיתית, ולא מציג נתון חסר כאפס או כעובדה.</p>

      <h2>Dashboard, GPT ו What If: שלושה שימושים שונים</h2>
      <h3>דשבורד: לראות מה נכון עכשיו</h3>
      <p>הדשבורד מיועד לסקירה: מכירות, הזמנות, יחידות, ליסטינגים, עמלות, מלאי FBA, דוחות זמינים וסימנים שדורשים בדיקה. הוא נשען על נתונים שהוחזרו בפועל לחשבון, ל Marketplace ולתקופה שנבחרו.</p>
      <h3>GPT: לחקור מה השתנה ולמה</h3>
      <p>AmazonIQ GPT מאפשר לשאול שאלה רגילה במקום לדעת מראש איזה דוח לפתוח. אפשר לחקור ASIN או SKU, להשוות תקופות, לבדוק ליסטינג, מלאי או עמלות, ולשלב נתוני Amazon עם קובץ עלויות שהמוכר העלה.</p>
      <h3>What If: לבחון מה יכול לקרות</h3>
      <p>תרחישים הם כלי חשיבה, לא דוח אמת. אם המוכר מזין הנחות לגבי מלאי, עמלות או עלויות, אפשר לבחון contribution או runway משוער. התוצאה נשארת מסומנת כהיפותטית ותלויה באיכות ההנחות.</p>

      <h2>איך החיבור עובד בלי למסור שליטה</h2>
      <p>החיבור עובר דרך הרשאת Seller Central של המוכר. AmazonIQ אינו מבקש את סיסמת Seller Central, ואינו מקבל יכולת לשנות מחיר, ליסטינג, מלאי, הזמנה, החזר, משלוח או הודעה לקונה. הפעולות וההחלטות נשארות אצל המוכר.</p>
      <p>הזמינות אינה זהה בכל חשבון. היא יכולה להשתנות לפי אזור, Marketplace, role, זכאות לדוחות, מגבלות קצב והנתונים שאמזון בוחרת להחזיר. חלק מהדוחות נוצרים אסינכרונית, ולכן דוח ממתין אינו בהכרח סימן לניתוק החשבון.</p>

      <h2>הזמנות ופריטי הזמנה</h2>
      <p>חקירת הזמנות יכולה לכלול, כאשר השדות זמינים, ASIN, seller SKU, כותרת מוצר, כמות, מחיר פריט, רכיבי מס, סטטוס הזמנה ומסלול fulfillment של FBA או MFN. כך אפשר לחבר מכירה לפריט, לכמות ולמסלול שמאחוריה במקום להסתפק במספר כולל.</p>
      <p>יש כאן גבול ברור: AmazonIQ אינו מציג buyer PII. שמות, כתובות, מספרי טלפון, כתובות מייל ופרטי תשלום של קונים אינם חלק מהתצוגה.</p>

      <h2>ליסטינגים ושגיאות שדורשות תשומת לב</h2>
      <p>למוכר לא תמיד יש זמן לעבור ידנית על כל קטלוג. AmazonIQ יכול לעזור לגלות ליסטינגים בלי להזין SKU מראש, ולבחון מצב buyable או non buyable, שגיאות, אזהרות ומאפיינים חסרים. מידע קטלוגי כמו תמונות, מידות, וריאציות, מחיר או offer fields תלוי במה שאמזון מחזירה ובזכאות של החשבון.</p>
      <p>המטרה אינה להציע עריכה אוטומטית של ליסטינג, אלא לסמן מה ראוי לחקירה. המוכר או הצוות האנושי הם שמחליטים מה לבדוק ומה לשנות.</p>

      <h2>כספים, עמלות ו Amazon net proceeds</h2>
      <p>נתונים פיננסיים יכולים לכלול אירועים כספיים, עמלות Amazon, refunds, reimbursements, adjustments, withheld amounts ו Amazon net proceeds. זה מאפשר לשאול מה נגבה, מה הוחזר ואיזה תנועה דורשת התאמה או בדיקה נוספת.</p>
      <p>חשוב לא לבלבל בין Amazon net proceeds לרווח נקי. הסכום שאמזון מחזירה אחרי עמלות והתאמות אינו כולל בהכרח עלות מוצר, פרסום, הובלה, מיסוי או הוצאות חיצוניות. אירועים פיננסיים יכולים גם להגיע בעיכוב, לפי לוח הזמנים של אמזון.</p>

      <h2>מלאי FBA, inbound ותנועות בין מרכזים</h2>
      <p>במלאי FBA אפשר לבחון fulfillable, reserved, inbound, unsellable, researching, future supply ותוכניות inbound קיימות, כאשר הנתונים זמינים לחשבון. המטרה היא להבדיל בין מלאי שזמין למכירה, מלאי שמחויב או בדרך, ומלאי שלא זמין כרגע.</p>
      <p>דוחות תנועה עשויים להציג receipts, shipments, returns, removals, adjustments, losses, findings, damage והעברות בין fulfillment centers. תנועות אלה יכולות לעזור למוכר להבין איפה יחידות השתנו או איזה אירוע ראוי לבדיקת reconciliation.</p>

      <h2>מלאי מיושן, אחסון והחזרות</h2>
      <p>כאשר דוחות מתאימים זמינים, אפשר לבחון age buckets, excess units, חשיפת אחסון, surcharges, overage והמלצות לבדיקה. הערכות של אחסון או עמלות נשארות הערכות, ולא מוצגות כחיוב ודאי.</p>
      <p>באותה גישה אפשר לחקור FBA returns, replacements, reimbursements, reversals, removals ו inbound noncompliance כאשר אמזון מחזירה נתונים. AmazonIQ אינו יוזם refund, removal או פעולה תפעולית אחרת.</p>

      <h2>Product 360, Sales Pulse, Money Snapshot ו Risk Radar</h2>
      <p>אלו שמות עבודה לתצוגות שעוזרות לסרוק נושא מסוים: תמונת מוצר, קצב מכירות, תנועת כסף, תדרוך למוכר וסימנים שדורשים חקירה. הם לא מבטיחים ציון, לא ממציאים רמת סיכון ולא מחליפים שיקול דעת. הם עוזרים לעבור מהצפה של מידע לשאלה הבאה הנכונה.</p>

      <h2>איך להפוך סימן בדשבורד לבדיקה מסודרת</h2>
      <p>דשבורד טוב אינו מחליף פעולה אנושית, והוא גם לא צריך לנסות לעשות זאת. הערך שלו הוא לקצר את הדרך בין סימן לבין בדיקה: לבחור תקופה, לזהות מוצר או תנועה חריגה, לפתוח שאלה ב GPT, ולחזור ל Seller Central או לצוות עם רשימת נקודות מדויקת יותר. כך לא מתחילים מ״נראה לי שיש בעיה״, אלא משאלה שאפשר לבדוק.</p>
      <p>לדוגמה, אם מוצר מסוים נראה חלש יותר לעומת תקופה קודמת, אפשר לבדוק קודם אם מספר היחידות, מצב ה buyable, המלאי, העמלות או אירועי ההחזר השתנו. אם התשובה עדיין אינה מספקת, אפשר להרחיב את החקירה לשינוי בליסטינג או לתהליך תפעולי מחוץ ל Amazon. המערכת עוזרת לארגן את המסלול, אך אינה קובעת לבדה מה הסיבה או מה צריך לשנות.</p>

      <h2>שאלות שמנהלים וצוותים יכולים להכין מראש</h2>
      <p>כדי להפיק ערך מהיר, כדאי להתחיל מקבוצת שאלות חוזרות ולא מחיפוש אקראי. מנהל פעילות יכול לבקש סיכום של השינויים השבועיים; תפעול יכול לבדוק מלאי שנמצא במצב שמגביל מכירה; צוות כספים יכול להתמקד בעמלות, החזרים והתאמות; וצוות מוצר יכול לאתר ליסטינגים שדורשים מעבר ידני. לכל תפקיד יכולה להיות נקודת פתיחה אחרת על אותו מידע מורשה.</p>
      <p>גם השוואה בין תקופות דורשת הקשר. חודש חלש יותר אינו בהכרח בעיה, ועלייה בעמלות אינה בהכרח טעות. לפני שמסיקים מסקנה, צריך לבדוק את חלון הזמן, ה Marketplace, הנתונים שהתקבלו והאירועים שמסביב. AmazonIQ נועד לעזור למוכר לנסח את בדיקת ההמשך בצורה ברורה יותר, לא להפוך תצפית בודדת להמלצה מוחלטת.</p>

      <h2>מתי כדאי לעבור משאלה למעורבות אנושית</h2>
      <p>יש מצבים שבהם חקירת נתונים היא רק השלב הראשון: בעיית ליסטינג מורכבת, שאלת מדיניות, השעיה, החלטת תמחור, תפעול מלאי או התאמה חשבונאית. במקרים כאלה AmazonIQ יכול לעזור לתעד את מה שנצפה, אך הבדיקה והפעולה צריכות להיעשות על ידי המוכר או על ידי גורם מקצועי מתאים. אם נדרש ליווי אנושי סביב החשבון, אפשר לעבור גם אל <Link href="/services/amazon-account-management">שירות הניהול והליווי למוכרי Amazon</Link>.</p>
      <p>ההפרדה בין מודיעין לבין ניהול שומרת על ציפיות נכונות: AmazonIQ קורא נתונים מורשים ומסייע לחקור אותם; הוא אינו מקבל החלטות במקום המוכר ואינו מבצע פעולות בחשבון. זה מאפשר להשתמש בו ככלי עבודה שקט וממוקד, גם כאשר ההחלטה הסופית דורשת ניסיון אנושי, מסמך נוסף או בדיקה מחוץ למערכת.</p>

      <h2>שילוב קובץ עלויות</h2>
      <p>המוכר יכול להעלות ל GPT קובץ Excel או CSV עם עלויות כגון SKU או ASIN, עלות יחידה, מטבע, הובלה, מכס, הכנה, אריזה ועלויות נוספות. AmazonIQ יכול לחבר את הקובץ לנתוני מכירות, עמלות, החזרים ו net proceeds כדי להעריך contribution למוצר.</p>
      <p>איכות ההערכה תלויה ישירות בשלמות ובדיוק של העלויות שהמוכר מספק. לכן התוצר הוא בסיס לחקירה ולהחלטה, לא הבטחת רווח ולא תחליף לבדיקה חשבונאית.</p>

      <h2>מה AmazonIQ אינו עושה</h2>
      <ul>
        <li>אינו מציג Account Health מלא, Message Center מלא או פרטי קונים.</li>
        <li>אינו מחבר Amazon Ads או PPC דרך הרשאת Seller Central הקיימת.</li>
        <li>אינו שולח התראות יזומות אוטומטיות, אינו מנהל השעיות ואינו מכין או שולח POA.</li>
        <li>אינו מבצע פעולות כתיבה, ואינו מבטיח שכל dataset זמין לכל חשבון או Marketplace.</li>
      </ul>

      <h2>AmazonIQ מול TalkToData</h2>
      <p><a aria-label="לפתוח את TalkToData באתר החיצוני" href="https://talktodata.navines.com" rel="noopener noreferrer" target="_blank">TalkToData</a> נבנה לשיחה עם מגוון מערכות עסקיות, חנויות, דוחות ומקורות מידע. AmazonIQ נבנה במיוחד לעולם Amazon Seller Central, ולכן הוא עמוק יותר בתחום Amazon עם מודל נתונים, Dashboard, GPT ומסלולי חקירה שמתאימים לפעילות מוכר.</p>
      <p>אלו מוצרים משלימים. עסק יכול להשתמש ב TalkToData לשיחה רחבה עם מערכות שונות, וב AmazonIQ לחקירה ייעודית של מידע מורשה מתוך Seller Central.</p>

      <h2>למי המוצר מתאים ואיך מתחילים</h2>
      <p>AmazonIQ מתאים למוכרי Amazon, מותגים, צוותי איקומרס ומנהלי פעילות שרוצים להבין תמונת מצב לפני החלטה. הוא לא דורש להפוך את כל העסק למערכת חדשה, אלא להתחיל מהחיבור האזורי המורשה ומהשאלה העסקית שמעסיקה את המוכר עכשיו.</p>
      <ul>{startQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
      <p>אפשר לקרוא את <Link href="/products/amazoniq">עמוד AmazonIQ בעברית</Link>, לעבור ל<a aria-label="לפתוח את AmazonIQ באתר החיצוני" href="https://amazoniq.navines.com/" rel="noopener noreferrer" target="_blank">אתר AmazonIQ</a>, או להעמיק ב<a href="/solutions/amazon-sellers">פתרונות למוכרי Amazon</a> וב<a href="/services/amazon-account-management">שירות הניהול והליווי האנושי</a>.</p>
    </div>
  );
}

function DefaultArticleBody({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>למה זה חשוב לעסק?</h2>
      <p>
        <BrandInline text={post.excerpt} /> עסקים שמטפלים בנושא הזה בצורה מסודרת מקבלים יותר שליטה, פחות עבודה ידנית ויכולת למדוד מה באמת מתקדם.
      </p>
      <h2>איך זה נראה בפועל?</h2>
      <p>
        {post.serviceIntro ? (
          <BrandInline text={post.serviceIntro} />
        ) : (
          "העבודה מתחילה ממיפוי קצר של האתר, המערכות, הנתונים והתהליך העסקי. לאחר מכן בוחרים את הפעולות שייתנו ערך מהיר: שיפור מהירות, חיבור מערכת, אוטומציה, ניטור או תיקון נקודת אמון קריטית."
        )}
      </p>
      {post.englishServiceIntro ? (
        <>
          <h2>הסבר באנגלית</h2>
          <p>
            <BrandInline text={post.englishServiceIntro} />
          </p>
        </>
      ) : null}
      <h2>דוגמאות מעשיות</h2>
      <ul>
        <li>בדיקת אתר עם כלי מדידה מקצועיים וזיהוי צווארי בקבוק במובייל.</li>
        <li>חיבור פניות מוואטסאפ, מייל או האתר למעקב מסודר כדי ששום דבר לא ילך לאיבוד.</li>
        <li>הוספת ניטור שמתריע על בעיות לפני שהלקוחות מרגישים אותן.</li>
      </ul>
      <h2>רשימת בדיקה</h2>
      <ul>
        <li>האם ברור מה הבעיה העסקית ולא רק מה הכלי?</li>
        <li>האם יש מדידה לפני ואחרי?</li>
        <li>האם התהליך מחובר לאנשים ולמערכות הקיימות?</li>
        <li>האם אפשר להרחיב את הפתרון בהמשך?</li>
      </ul>
      <h2>סיכום</h2>
      <p>אנחנו גאים במערכות, בכלים ובאתרים שבנינו כי הם נולדו מתוך בעיות אמיתיות של עסקים. אם אתם לא בטוחים מאיפה להתחיל, שלחו לנו הודעה בוואטסאפ. שיחת ההיכרות חינם וחברית, אנחנו מפתח תקווה, מחכים לשמוע מכם וגם אפשר להיפגש אם זה נכון לפרויקט.</p>
    </div>
  );
}

function TalkToDataArticleBody() {
  return (
    <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:leading-8 prose-p:text-zinc-300 prose-li:text-zinc-300">
      <h2>מה זה אומר לדבר עם הנתונים?</h2>
      <p>במקום לפתוח כמה מערכות, להוריד קבצים, לחפש בטבלאות ולנסות להבין מה קרה, אפשר לחבר את הנתונים העסקיים לשכבת שיחה. בעל העסק שואל שאלה רגילה, והמערכת מחזירה תשובה שמבוססת על הנתונים הקיימים.</p>
      <p>הרעיון פשוט: אתם לא צריכים ללמוד מערכת מורכבת. אתם צריכים לשאול את השאלה הנכונה ולקבל תשובה ברורה מספיק כדי לקבל החלטה.</p>
      <h2>למה זה חשוב לבעלי עסקים?</h2>
      <p>עסקים רבים כבר מחזיקים נתונים טובים, אבל הם מפוזרים בין שופיפיי, ווקומרס, אמזון, איביי, מערכת ניהול לקוחות, גוגל אנליטיקס, מערכות הזמנות, מלאי או קבצים פנימיים. כשהמידע מפוזר, קשה להבין מהר מה עובד ומה דורש טיפול.</p>
      <p>חיבור נתונים אל ChatGPT יכול להפוך את המידע הזה לשיחה אחת: מה מכר, מה ירד, מי לא חזר, איזה מוצר תקוע ואילו הזמנות צריכות תשומת לב.</p>
      <h2>מה אפשר לשאול?</h2>
      <ul>
        <li>כמה מכרנו החודש?</li>
        <li>איזה מוצר הכי נמכר?</li>
        <li>איזה לקוחות לא חזרו הרבה זמן?</li>
        <li>איפה יש ירידה בביצועים?</li>
        <li>איזה הזמנות דורשות טיפול?</li>
        <li>אילו מוצרים נמכרים פחות למרות שיש להם תנועה?</li>
        <li>מה השתנה לעומת החודש הקודם?</li>
      </ul>
      <h2>איך TalkToData מדגים את הרעיון?</h2>
      <p>TalkToData הוא כלי שבנינו כדי להראות איך נתונים יכולים להפוך לשיחה פשוטה: Your data. Your ChatGPT. One conversation. במקום דוח כבד, העסק מקבל דרך לשאול, להבין ולהמשיך לשאלת המשך.</p>
      <p>זה מתאים במיוחד לעסקים שרוצים להבין מכירות, הזמנות, מלאי, לקוחות, מוצרים, ביצועים ודוחות בלי להסתבך עם לוחות בקרה גדולים.</p>
      <h2>איך מתחילים?</h2>
      <p>לא צריך להבין בטכנולוגיה. מספרים לנו באיזו מערכת אתם משתמשים: שופיפיי, ווקומרס, אמזון, איביי, מערכת ניהול לקוחות, ERP, גוגל אנליטיקס, מערכת מלאי, בסיס נתונים או כל API עסקי. אנחנו בודקים מה אפשר לחבר, מה כדאי לחבר קודם, ואיך לעשות את זה בצורה בטוחה ושימושית.</p>
      <h2>רשימת בדיקה קצרה</h2>
      <ul>
        <li>איזו מערכת מחזיקה את הנתונים החשובים ביותר?</li>
        <li>אילו שאלות חוזרות על עצמן בעסק בכל שבוע?</li>
        <li>מי צריך לקבל את התשובות: הנהלה, מכירות, שירות או תפעול?</li>
        <li>האם צריך תשובה יומית, שבועית או בזמן אמת?</li>
      </ul>
      <h2>סיכום</h2>
      <p>לדבר עם הנתונים באמצעות ChatGPT זו דרך להפוך מידע עסקי למשהו שאפשר להבין מהר. אם אתם רוצים לדעת מה אפשר לשאול את הנתונים שלכם, שלחו לנו הודעה קצרה בוואטסאפ ונכוון אתכם.</p>
    </div>
  );
}
