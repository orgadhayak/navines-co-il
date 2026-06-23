export const site = {
  name: "נביא נס ישראל",
  legalName: "נביא נס ישראל בע\"מ",
  englishLegalName: "NAVINES Israel Ltd.",
  hebrewLegalName: "נביא נס ישראל בע\"מ",
  companyNumber: "516647161",
  companyNumberLabel: "ח.פ. 516647161",
  url: "https://www.navines.co.il",
  internationalUrl: "https://www.navines.com",
  phone: "054-818-0200",
  phoneHref: "tel:0548180200",
  whatsappHref: "https://wa.me/972548180200",
  email: "hello@navines.com",
  emailHref: "mailto:hello@navines.com",
  address: "Winkler Alter 8, Petah Tikva, Israel",
  hebrewAddress: "וינקלר אלתר 8, פתח תקווה",
};

export const mainNav = [
  { label: "בית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "שירותים", href: "/services" },
  { label: "AI ואוטומציה", href: "/services/ai-automation" },
  { label: "אתרים ומערכות", href: "/services/web-development" },
  { label: "איקומרס", href: "/services/ecommerce" },
  { label: "כלים ומוצרים", href: "/products" },
  { label: "בלוג", href: "/blog" },
  { label: "יצירת קשר", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  audience: string[];
  actions: string[];
  problems: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI ואוטומציה לעסקים",
    eyebrow: "אוטומציה חכמה",
    summary: "מערכות AI, צ׳אטבוטים, סוכנים ואוטומציות שמחברים בין לקוחות, וואטסאפ, CRM, טפסים, משימות ודוחות.",
    audience: ["עסקים עם פניות חוזרות", "צוותי מכירות ושירות", "חברות שרוצות להפחית עבודה ידנית"],
    actions: ["אפיון תהליך עסקי", "בניית צ׳אטבוטים וסוכני AI", "אוטומציות WhatsApp ו־Telegram", "סיכומי שיחות ודוחות"],
    problems: ["לידים שלא מטופלים בזמן", "עבודה ידנית שחוזרת על עצמה", "חוסר שליטה בתהליך שירות או מכירה"],
    faqs: [
      { question: "האם AI מתאים גם לעסק קטן?", answer: "כן. מתחילים מתהליך אחד ברור, כמו טיפול בפניות או תיאום, ומרחיבים רק אחרי שיש ערך מדיד." },
      { question: "האם אפשר לחבר ל־CRM קיים?", answer: "כן. אנחנו בודקים API, Webhooks וכלים קיימים כדי לחבר את התהליך למערכות שכבר עובדות בעסק." },
      { question: "האם האוטומציה מחליפה אנשים?", answer: "המטרה היא להפחית עבודה חוזרת ולתת לצוות יותר שליטה, לא לנתק את העסק מהלקוחות." },
    ],
  },
  {
    slug: "web-development",
    title: "בניית אתרים ומערכות",
    eyebrow: "פיתוח אתרים ומערכות",
    summary: "אתרי חברה, דפי נחיתה, פורטלים, מערכות ניהול ודשבורדים עסקיים עם דגש על מהירות, UX, SEO ויכולת הרחבה.",
    audience: ["בעלי עסקים שרוצים אתר מקצועי", "חברות שצריכות מערכת פנימית", "מותגים שרוצים נכס דיגיטלי יציב"],
    actions: ["אפיון UX ותוכן", "פיתוח WordPress, React, Laravel ו־Python", "חיבור טפסים ומדידה", "בדיקות QA והשקה"],
    problems: ["אתר שלא מייצר פניות", "מערכות לא מחוברות", "תלות בתבנית או ספק שלא מאפשר התקדמות"],
    faqs: [
      { question: "האם אתם בונים גם WordPress?", answer: "כן. אנחנו בונים ומשפרים אתרי WordPress עם דגש על ביצועים, אבטחה ויכולת תחזוקה." },
      { question: "האם אפשר לבנות מערכת מותאמת אישית?", answer: "כן. כשאתר רגיל לא מספיק, אנחנו מאפיינים מערכת פנימית, פורטל או דשבורד לפי תהליך העבודה." },
      { question: "מה חשוב לפני שמתחילים?", answer: "להבין מה האתר צריך לעשות לעסק: לידים, מכירה, אמון, מדידה, שירות או תפעול." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "פיתוח אפליקציות",
    eyebrow: "אפליקציות מובייל",
    summary: "פיתוח אפליקציות iOS, Android, React Native ופתרונות Hybrid המחוברים למערכות העסק, API ותהליכי תפעול.",
    audience: ["סטארטאפים", "חברות שירות", "עסקים עם לקוחות חוזרים"],
    actions: ["אפיון מסכים", "פיתוח מובייל", "חיבור API", "בדיקות מכשירים והשקה"],
    problems: ["חוויית מובייל חלשה", "תהליך לקוח מסורבל", "מידע שלא מגיע למערכת המרכזית"],
    faqs: [
      { question: "האם לבחור Native או React Native?", answer: "זה תלוי במורכבות, תקציב, זמן והאם נדרשות יכולות מכשיר עמוקות. נבחר לפי הערך העסקי." },
      { question: "האם האפליקציה יכולה להתחבר לאתר?", answer: "כן. אנחנו מחברים אפליקציות ל־API, מערכות ניהול, CRM ותשתיות קיימות." },
      { question: "האם אתם מטפלים גם באפיון?", answer: "כן. לפני פיתוח אנחנו ממפים משתמשים, זרימות ותהליכים כדי למנוע פיתוח מיותר." },
    ],
  },
  {
    slug: "ecommerce",
    title: "איקומרס וחנויות אונליין",
    eyebrow: "איקומרס",
    summary: "חנויות Shopify, WooCommerce, Amazon ו־eBay עם תשתיות מכירה, תוכן מוצר, SEO, מלאי, לוגיסטיקה ושיפור יחס המרה.",
    audience: ["חנויות חדשות", "מותגים בצמיחה", "מוכרים בזירות מסחר"],
    actions: ["הקמת חנות", "ניהול קטלוג ומלאי", "שיפור דפי מוצר", "חיבורי תשלום, שילוח ומדידה"],
    problems: ["יחס המרה נמוך", "ניהול ידני של מוצרים ומלאי", "חנות איטית או לא אמינה"],
    faqs: [
      { question: "האם אתם עובדים עם Shopify?", answer: "כן. אנחנו מקימים, משפרים ומחברים חנויות Shopify לתפעול, מדידה ואוטומציות." },
      { question: "האם אתם מטפלים גם ב־WooCommerce?", answer: "כן. כולל ביצועים, תקלות, סליקה, שילוח ואבטחה." },
      { question: "האם אתם עובדים עם Amazon ו־eBay?", answer: "כן. אנחנו מסייעים בניהול חשבון, Listing, Account Health, POA ותהליכי מכירה." },
    ],
  },
  {
    slug: "shopify",
    title: "Shopify לעסקים",
    eyebrow: "חנויות Shopify",
    summary: "הקמה ושיפור חנויות Shopify עם מבנה נכון, ביצועים, תוכן מוצר, אפליקציות חיוניות ואוטומציות תפעול.",
    audience: ["מותגים שרוצים חנות מהירה", "עסקים שמוכרים בארץ ובעולם", "חנויות שרוצות לשפר המרות"],
    actions: ["בניית Theme", "סידור קטלוג", "שיפור דפי מוצר", "חיבורי אפליקציות ומדידה"],
    problems: ["אפליקציות מיותרות שמאטות את החנות", "דפי מוצר לא ברורים", "חוסר מדידה של מכירות והתנהגות"],
    faqs: [
      { question: "האם Shopify מתאים לעסק ישראלי?", answer: "כן, במיוחד כשצריך חנות יציבה ומהירה עם תפעול נוח. חשוב לתכנן תשלומים, שילוח ושפה." },
      { question: "האם אפשר לשפר חנות קיימת?", answer: "כן. מתחילים בבדיקת ביצועים, UX, דפי מוצר, אפליקציות ומדידה." },
      { question: "האם אתם עושים תוכן מוצר?", answer: "כן. אנחנו מסייעים במסרים, מבנה דף, אמון ותוכן שמוביל להמרה." },
    ],
  },
  {
    slug: "woocommerce",
    title: "WooCommerce",
    eyebrow: "חנויות WooCommerce",
    summary: "פיתוח, שיפור ותחזוקת חנויות WooCommerce עם דגש על מהירות, אבטחה, תשלומים, משלוחים וניהול מוצרים.",
    audience: ["עסקים עם WordPress", "חנויות שרוצות התאמות גמישות", "עסקים שצריכים שליטה בתשתית"],
    actions: ["בניית חנות WooCommerce", "שיפור ביצועים", "תיקון תקלות סליקה ומשלוחים", "הקשחת אבטחה"],
    problems: ["חנות כבדה", "תקלות עדכונים", "בעיות תשלום או מלאי"],
    faqs: [
      { question: "האם WooCommerce מתאים לחנות ישראלית?", answer: "כן, במיוחד כשצריך גמישות גבוהה וחיבור לאתר WordPress קיים." },
      { question: "האם אפשר לשפר חנות קיימת?", answer: "כן. נבדוק מהירות, תוספים, תבנית, סליקה, אבטחה ותהליך רכישה." },
      { question: "האם אתם מטפלים בתקלות דחופות?", answer: "כן. אפשר לטפל בתקלות תשלום, קריסות, קונפליקטים ותקלות שרת." },
    ],
  },
  {
    slug: "amazon-account-management",
    title: "ניהול חשבון Amazon",
    eyebrow: "Amazon",
    summary: "ניהול ושיפור פעילות Amazon כולל Account Health, תוכן Listing, Amazon POA, מלאי, פרסום ודוחות ביצועים.",
    audience: ["מוכרי Amazon", "מותגים עם חשבון פעיל", "עסקים שרוצים להיכנס לזירת Amazon"],
    actions: ["בדיקת Account Health", "שיפור Listings", "הכנת POA", "דוחות ותיעדוף פעולות"],
    problems: ["סיכון להשעיה", "תוכן מוצר חלש", "חוסר שליטה בביצועים"],
    faqs: [
      { question: "מה זה Amazon POA?", answer: "תוכנית פעולה מסודרת שמסבירה את שורש הבעיה, תיקון שבוצע וצעדי מניעה להמשך." },
      { question: "האם אתם מטפלים ב־Account Health?", answer: "כן. אנחנו ממפים סיכונים, התראות ופעולות נדרשות לשיפור יציבות החשבון." },
      { question: "האם השירות כולל תוכן מוצר?", answer: "כן. אפשר לשפר כותרות, Bullet Points, תיאור, אמון ומבנה Listing." },
    ],
  },
  {
    slug: "ebay-account-management",
    title: "ניהול חשבון eBay",
    eyebrow: "eBay",
    summary: "ניהול ושיפור פעילות eBay עם דגש על Listings, אמון, תמחור, תוכן, תפעול ומדדי מכירה.",
    audience: ["מוכרי eBay", "חנויות מרקטפלייס", "עסקים עם קטלוג רחב"],
    actions: ["שיפור Listings", "ניתוח תחרות", "אופטימיזציית תוכן", "מדידה ותיעדוף"],
    problems: ["חשיפה נמוכה", "ניהול ידני", "בעיות אמון והמרה"],
    faqs: [
      { question: "האם אפשר לשפר חשבון קיים?", answer: "כן. מתחילים מבדיקת קטלוג, ביצועים, תוכן, תמחור ומדדי אמון." },
      { question: "האם אתם עוזרים בניהול מלאי?", answer: "כן. אפשר לבנות תהליך מסודר לניהול מלאי, עדכונים ודוחות." },
      { question: "האם eBay מתאים לעסק ישראלי?", answer: "זה תלוי במוצרים, תחרות ותפעול. נבדוק את ההיתכנות לפני שמרחיבים פעילות." },
    ],
  },
  {
    slug: "api-integrations",
    title: "חיבורי API ואינטגרציות",
    eyebrow: "אינטגרציות",
    summary: "חיבור מערכות עסקיות, CRM, ERP, אתרים, חנויות, טפסים וכלי תפעול כדי שהמידע יזרום בלי העתקות ידניות.",
    audience: ["עסקים עם כמה מערכות", "חנויות אונליין", "חברות עם תהליכים ידניים כבדים"],
    actions: ["מיפוי זרימת מידע", "פיתוח API ו־Webhooks", "חיבורי CRM", "ניטור תקלות ודוחות"],
    problems: ["נתונים כפולים", "עבודה ידנית", "איבוד פניות או הזמנות"],
    faqs: [
      { question: "האם אפשר לחבר מערכות שאין להן API?", answer: "לפעמים כן דרך Webhooks, אוטומציות או פתרונות ביניים. נבדוק כל מקרה לגופו." },
      { question: "האם אתם מחברים גם Google Analytics?", answer: "כן. אנחנו מטפלים במדידה, אירועים, Tag Manager ותשתיות דאטה כשיש מזהים וחשבונות זמינים." },
      { question: "האם האינטגרציה כוללת ניטור?", answer: "מומלץ. חיבור בלי ניטור עלול להישבר בלי שאף אחד שם לב." },
    ],
  },
  {
    slug: "website-speed-optimization",
    title: "שיפור מהירות וביצועים",
    eyebrow: "ביצועים",
    summary: "אופטימיזציה למהירות, Core Web Vitals, תמונות, Cache, CDN, Cloudflare, קוד, מובייל ותשתית שרת.",
    audience: ["אתרים איטיים", "חנויות עם נטישה", "עסקים שרוצים לשפר SEO והמרות"],
    actions: ["בדיקת Lighthouse", "שיפור קוד ותמונות", "הגדרת Cache ו־CDN", "בדיקה חוזרת אחרי שיפור"],
    problems: ["טעינה איטית", "ציון מובייל נמוך", "נטישת לקוחות לפני פנייה או רכישה"],
    faqs: [
      { question: "כמה מהר אפשר לשפר אתר?", answer: "תלוי במבנה האתר. לעיתים יש שיפורים מהירים, ולעיתים נדרש טיפול עמוק בתבנית, קוד או שרת." },
      { question: "האם אתם עובדים עם Cloudflare?", answer: "כן. Cloudflare יכול לעזור בביצועים, CDN, אבטחה ו־DNS כשמגדירים אותו נכון." },
      { question: "האם מהירות משפיעה על SEO?", answer: "כן. היא משפיעה על חוויית משתמש, Core Web Vitals, נטישה והמרות." },
    ],
  },
  {
    slug: "security-recovery",
    title: "אבטחה ושחזור אתרים",
    eyebrow: "אבטחה",
    summary: "הקשחת אבטחה, ניקוי Malware, שחזור אתרים, תיקון תקלות, WordPress Debugging, SSL, DNS, Hosting וניטור סיכונים.",
    audience: ["אתרים שנפרצו", "חנויות פעילות", "עסקים שצריכים תגובה מהירה"],
    actions: ["אבחון תקלה", "ניקוי ושחזור", "הקשחת אבטחה", "גיבויים וניטור"],
    problems: ["אתר שנפל", "קוד זדוני", "תקלות שרת, SSL או DNS"],
    faqs: [
      { question: "מה עושים אם האתר נפרץ?", answer: "מבודדים את הבעיה, משחזרים גישה, מנקים קבצים, מחזקים אבטחה ומוודאים שהפרצה לא חוזרת." },
      { question: "האם אתם מתקנים תקלות WordPress?", answer: "כן. כולל תוספים, תבניות, WooCommerce, PHP, שרת וקונפליקטים." },
      { question: "האם אפשר לקבל ניטור שוטף?", answer: "כן. ניטור עוזר לזהות בעיות לפני שהן פוגעות בלקוחות." },
    ],
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO ושיווק דיגיטלי",
    eyebrow: "צמיחה דיגיטלית",
    summary: "SEO טכני, PPC, Email Marketing, Lead Generation, Reputation, תוכן, מבנה אתר, Backlinks וניתוח ביצועים.",
    audience: ["עסקים שרוצים יותר פניות", "אתרי תוכן", "חנויות אונליין"],
    actions: ["מחקר מילות מפתח", "SEO טכני", "דפי נחיתה", "מדידה ושיפור"],
    problems: ["תנועה נמוכה", "קמפיינים בלי מדידה", "אתר שלא מייצר אמון"],
    faqs: [
      { question: "האם אתם עושים SEO בעברית?", answer: "כן. SEO בעברית דורש מבנה נכון, תוכן ברור, מהירות, נתונים והבנה של חיפושים מקומיים." },
      { question: "מה הקשר בין SEO לפיתוח?", answer: "SEO טוב מתחיל בתשתית: מהירות, היררכיה, תגיות, URL, נגישות ומדידה." },
      { question: "האם אתם מטפלים גם בלידים?", answer: "כן. אנחנו מסתכלים על התהליך המלא, מהכניסה לאתר ועד פנייה או מכירה." },
    ],
  },
  {
    slug: "business-intelligence",
    title: "BI ומודיעין עסקי",
    eyebrow: "מודיעין עסקי",
    summary: "ניתוח נתונים, דוחות, מודיעין מתחרים, Competitive Pricing Intelligence, Product Research ודשבורדים לקבלת החלטות.",
    audience: ["הנהלות", "חברות איקומרס", "עסקים עם הרבה נתונים"],
    actions: ["איסוף נתונים", "בניית דשבורדים", "ניתוח מגמות", "התראות ודוחות"],
    problems: ["חוסר בהירות", "נתונים מפוזרים", "קבלת החלטות איטית"],
    faqs: [
      { question: "האם אפשר להתחיל מדוח אחד?", answer: "כן. לרוב מתחילים מדוח עסקי חשוב אחד ומרחיבים ממנו." },
      { question: "האם זה מתאים לאיקומרס?", answer: "מאוד. איקומרס דורש הבנה של מוצרים, מלאי, מחירים, קמפיינים והמרות." },
      { question: "האם אתם עושים מחקר מוצרים?", answer: "כן. אנחנו יכולים לבנות תהליך ניתוח מוצר, תחרות ותמחור." },
    ],
  },
  {
    slug: "consulting",
    title: "ייעוץ טכנולוגי וליווי פרויקטים",
    eyebrow: "ייעוץ טכנולוגי",
    summary: "אפיון, בחירת טכנולוגיה, ליווי ספקים, QA, בדיקות, תכנון תשתית צוותים והפיכת רעיון לתוכנית ביצוע.",
    audience: ["יזמים", "חברות לפני פיתוח", "עסקים עם פרויקט תקוע"],
    actions: ["אפיון עסקי וטכני", "בחירת כלים", "Roadmap", "בדיקות והובלת ביצוע"],
    problems: ["בחירת טכנולוגיה לא מתאימה", "פרויקט בלי סדר", "חריגה בזמן או תקציב"],
    faqs: [
      { question: "האם אפשר לקבל רק ייעוץ?", answer: "כן. אפשר להתחיל באפיון או בדיקה טכנולוגית בלי להתחייב לפיתוח." },
      { question: "האם אתם עובדים עם ספקים קיימים?", answer: "כן. אנחנו יכולים ללוות, לבדוק ולסייע לקבל החלטות מקצועיות." },
      { question: "מה יוצא משיחת ייעוץ?", answer: "מיפוי ברור של מצב קיים, סיכונים, הזדמנויות והמלצה מעשית להמשך." },
    ],
  },
];

export type Product = {
  slug: string;
  name: string;
  status: "פעיל" | "בטא" | "פנימי" | "בקרוב";
  description: string;
  audience: string;
  solves: string;
  url?: string;
  cta?: string;
};

export const products: Product[] = [
  { slug: "navines-beacon", name: "NAVINES Beacon", status: "בטא", description: "מערכת מודיעין תפעולי לניטור אתרים, חנויות ונכסים דיגיטליים.", audience: "עסקים עם נכסים דיגיטליים פעילים", solves: "זיהוי מוקדם של בעיות, סיכונים ושינויי ביצועים" },
  { slug: "talk-to-data", name: "TalkToData", status: "פעיל", description: "כלי שמאפשר לשאול שאלות עסקיות בשפה טבעית ולקבל תובנות מנתונים, דוחות וקבצים בלי להסתבך עם שאילתות או דשבורדים כבדים.", audience: "מנהלים, צוותי מכירות, איקומרס ותפעול שרוצים להבין נתונים מהר", solves: "הופך נתונים מפוזרים לשיחה ברורה שמובילה להחלטות מהירות יותר", url: "https://talktodata.navines.com", cta: "לצפייה ב־TalkToData" },
  { slug: "website-analyzer", name: "NAVINES Website Analyzer", status: "פעיל", description: "כלי בדיקת אתר שמבצע ניתוח Lighthouse למהירות, SEO, נגישות ואיכות טכנית.", audience: "בעלי עסקים שרוצים להבין מה קורה באתר שלהם", solves: "איתור צווארי בקבוק טכניים לפני שהם פוגעים בהמרות" },
  { slug: "checklink", name: "CheckLink.ai", status: "פעיל", description: "כלי חכם לבדיקה, ניתוח ואימות קישורים ונכסים דיגיטליים לפני שלוחצים או משתפים.", audience: "צוותים, עסקים ומשתמשים זהירים", solves: "הפחתת סיכוני קישור, אמון והתחזות" },
  { slug: "real-estate-intelligence", name: "NAVINES Real Estate Intelligence", status: "בטא", description: "מערכת מודיעין נדל״ן לניתוח נכסים, הזדמנויות, נתונים וסביבת החלטה.", audience: "חברות נדל״ן ומשקיעים", solves: "קבלת החלטות מבוססת נתונים" },
  { slug: "maor-israel", name: "Maor Israel", status: "פנימי", description: "מערכת ניטור AI מאובטחת לסביבות רגישות ללא Agents, API, Credentials או גישה ישירה.", audience: "ארגונים וסביבות רגישות", solves: "ניטור חד־כיווני בלי חשיפת מערכות פנימיות" },
  { slug: "ai-tools-portfolio", name: "AI Tools Portfolio", status: "פעיל", description: "אוסף כלים לשיפור קבלת החלטות, ניטור, אוטומציה, אמון, תוכן וביצועים.", audience: "עסקים וצוותים דיגיטליים", solves: "גישה מרוכזת לכלי NAVINES" },
  { slug: "amazon-listing-analyzer", name: "Amazon Listing Analyzer", status: "בטא", description: "ניתוח עמודי מוצר, תוכן, אמון והזדמנויות שיפור ב־Amazon.", audience: "מוכרי Amazon", solves: "שיפור הצגת מוצר והמרה" },
  { slug: "shopify-product-analyzer", name: "Shopify Product Analyzer", status: "בטא", description: "ניתוח דפי מוצר, מסרים, תוכן וחוויית קנייה ב־Shopify.", audience: "חנויות Shopify", solves: "שיפור דפי מוצר והצעת מכר" },
  { slug: "fake-screenshot-detector", name: "Fake Screenshot Detector", status: "בקרוב", description: "כלי לזיהוי סימנים מחשידים בצילומי מסך ונכסים ויזואליים.", audience: "צוותי אמון, שירות ותפעול", solves: "הפחתת סיכוני זיוף" },
  { slug: "amazon-email-checker", name: "Amazon Email Checker", status: "פנימי", description: "בדיקת מיילים וסיכונים עבור מוכרי Amazon.", audience: "מוכרי Amazon וצוותי תמיכה", solves: "זיהוי הודעות חשודות" },
  { slug: "revenue-calendars", name: "Revenue Calendars", status: "פעיל", description: "לוחות תכנון ומעקב הכנסות, פעילות ומועדים עסקיים.", audience: "בעלי עסקים וצוותי צמיחה", solves: "סדר תפעולי ותכנון הכנסות" },
  { slug: "word-counter", name: "Word Counter Tool", status: "פעיל", description: "כלי מהיר לספירת מילים, תווים ותוכן.", audience: "כותבים, SEO וצוותי תוכן", solves: "בדיקת אורך וטקסט לפני פרסום" },
  { slug: "feedback-removal", name: "Feedback Removal Engine", status: "פנימי", description: "מערכת תהליך להסרת משובים וטיפול במוניטין בזירות מסחר.", audience: "מוכרי מרקטפלייסים", solves: "ניהול תהליכי מוניטין" },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  { slug: "ai-business-israel", title: "איך AI משנה את הדרך שבה עסקים בישראל עובדים", category: "AI ואוטומציה", tags: ["AI", "אוטומציה", "תפעול"], date: "2026-01-05", readingTime: "5 דקות", excerpt: "AI הופך מתוסף נחמד לשכבת תפעול שמסייעת לעסקים להגיב מהר יותר, למדוד טוב יותר ולהפחית עבודה ידנית." },
  { slug: "business-website-2026", title: "למה אתר עסקי בשנת 2026 חייב להיות יותר מעמוד יפה", category: "בניית אתרים", tags: ["אתרים", "UX", "תשתית"], date: "2026-01-08", readingTime: "6 דקות", excerpt: "אתר עסקי מודרני הוא מערכת מכירה, אמון, מדידה ושירות. עיצוב טוב הוא רק חלק מהתמונה." },
  { slug: "slow-website-cost", title: "איך לבדוק אם האתר שלכם איטי ומה זה עולה לכם", category: "שיפור מהירות", tags: ["מהירות", "Lighthouse", "Core Web Vitals"], date: "2026-01-12", readingTime: "5 דקות", excerpt: "טעינה איטית פוגעת באמון, SEO והמרות. כך מתחילים לבדוק את הבעיה בצורה עסקית וטכנית." },
  { slug: "business-automation-start", title: "מה זה אוטומציה עסקית ואיפה מתחילים", category: "AI ואוטומציה", tags: ["CRM", "וואטסאפ", "תהליכים"], date: "2026-01-15", readingTime: "5 דקות", excerpt: "אוטומציה טובה מתחילה במיפוי תהליך עסקי ברור, לא בבחירת כלי נוצץ." },
  { slug: "shopify-israel", title: "Shopify לעסקים בישראל, מה חשוב לדעת לפני שבונים חנות", category: "Shopify", tags: ["Shopify", "איקומרס"], date: "2026-01-18", readingTime: "7 דקות", excerpt: "לפני שבונים חנות Shopify צריך לחשוב על תשלומים, שילוח, תוכן, ביצועים ותפעול יומיומי." },
  { slug: "amazon-ebay-mistakes", title: "טעויות נפוצות במוכרי Amazon ו־eBay", category: "Amazon ו־eBay", tags: ["Amazon", "eBay", "Account Health"], date: "2026-01-22", readingTime: "6 דקות", excerpt: "מוכרים רבים מפסידים זמן וכסף בגלל תוכן חלש, ניטור חסר ותהליכי חשבון לא מסודרים." },
  { slug: "api-save-hours", title: "למה חיבורי API יכולים לחסוך לעסק עשרות שעות בחודש", category: "תשתיות דיגיטליות", tags: ["API", "אינטגרציות"], date: "2026-01-25", readingTime: "5 דקות", excerpt: "API טוב מחבר מערכות ומצמצם העתקות ידניות, טעויות ועיכובים." },
  { slug: "website-trust", title: "איך לשפר אמון באתר ולגרום ליותר לקוחות לפנות", category: "מדריכים לעסקים", tags: ["אמון", "המרות", "UX"], date: "2026-01-28", readingTime: "5 דקות", excerpt: "אמון באתר נבנה דרך מהירות, תוכן ברור, הוכחות, אבטחה וחוויית משתמש נקייה." },
  { slug: "navines-beacon", title: "מה זה NAVINES Beacon ולמה עסקים צריכים ניטור דיגיטלי", category: "כלים מבית NAVINES", tags: ["Beacon", "ניטור"], date: "2026-02-02", readingTime: "5 דקות", excerpt: "ניטור דיגיטלי עוזר לזהות בעיות לפני שהן הופכות לפגיעה במכירות, אמון או שירות." },
  { slug: "internal-business-system", title: "איך בונים מערכת פנימית לעסק בלי להסתבך", category: "מערכות עסקיות", tags: ["מערכות", "תפעול"], date: "2026-02-06", readingTime: "6 דקות", excerpt: "מערכת פנימית טובה מתחילה מתהליך ברור, הרשאות נכונות ומדידה של מה שבאמת חשוב." },
  { slug: "wordpress-security", title: "אבטחת אתרי WordPress, מה כל בעל עסק חייב לדעת", category: "אבטחה", tags: ["WordPress", "Security"], date: "2026-02-10", readingTime: "5 דקות", excerpt: "הקשחת WordPress, גיבויים ועדכונים הם שכבת בסיס לכל אתר עסקי פעיל." },
  { slug: "technical-seo-hebrew", title: "SEO טכני בעברית, הבסיס שאתרים בישראל מפספסים", category: "SEO", tags: ["SEO", "עברית", "מבנה אתר"], date: "2026-02-14", readingTime: "6 דקות", excerpt: "מבנה נכון, מהירות, תגיות ומדידה עוזרים לאתר ישראלי להיסרק ולהתקדם." },
];

export const blogCategories = [
  "AI ואוטומציה",
  "בניית אתרים",
  "שיפור מהירות",
  "איקומרס",
  "Shopify",
  "Amazon ו־eBay",
  "SEO",
  "אבטחה",
  "תשתיות דיגיטליות",
  "מדריכים לעסקים",
  "כלים מבית NAVINES",
];
