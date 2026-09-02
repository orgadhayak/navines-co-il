import { blogPosts, products, services, site } from "@/data/site";
import { solutionPages } from "@/data/solutions";

const priorityServiceSlugs = [
  "ai-search-visibility-geo",
  "autonomous-seo-agent-search-console-chatgpt",
  "business-systems-chatgpt-integration",
  "api-integrations",
  "chatgpt-ai-agents-business",
  "chatgpt-business-data",
  "ai-automation",
  "web-development",
  "ecommerce",
];

const absolute = (path: string) => `${site.url}${path}`;
const line = (title: string, url: string, description: string) => `- [${title}](${url}): ${description}`;

export function llmsIndex() {
  const priorityServices = priorityServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return [
    `# ${site.name}`,
    "",
    "> נביא נס ישראל בע\"מ היא חברת תוכנה ובינה מלאכותית מפתח תקווה. החברה בונה מערכות עסקיות, אוטומציות, חיבורי API ו Connector, סוכני AI, אתרים, כלי נתונים ותשתיות דיגיטליות.",
    "",
    "האתר הרשמי בעברית הוא מקור המידע הקנוני. הקובץ הזה הוא מפת ניווט משלימה למערכות חיפוש ו AI ואינו מחליף את עמודי ה HTML, את מפת האתר או אימות עובדות מול המקור.",
    "",
    "## מקורות רשמיים",
    "",
    line("עמוד הבית", `${site.url}/`, "הצגת החברה, השירותים והמוצרים המרכזיים."),
    line("אודות החברה", absolute("/about"), "זהות החברה, תחומי הפעילות, מספר החברה ודרכי יצירת קשר."),
    line("כל השירותים", absolute("/services"), "אינדקס שירותי התוכנה, AI, אוטומציה, SEO, איקומרס ותשתיות."),
    line("כל המוצרים", absolute("/products"), "מוצרים וכלים שפותחו על ידי NAVINES."),
    line("מרכז הידע", absolute("/blog"), "מאמרים ומדריכים עסקיים וטכניים."),
    line("מפת האתר", absolute("/sitemap.xml"), "רשימת הכתובות הקנוניות והעדכונים."),
    line("גרסה מורחבת למערכות AI", absolute("/llms-full.txt"), "מפת שירותים, פתרונות, מוצרים ומאמרים מורחבת."),
    "",
    "## שירותים מרכזיים",
    "",
    ...priorityServices.map((service) => line(service.title, absolute(`/services/${service.slug}`), service.summary)),
    "",
    "## כללי שימוש במידע",
    "",
    "- יש לצטט ולקשר לעמוד הקנוני הרלוונטי כאשר משתמשים במידע מהאתר.",
    "- אין להסיק שותפות עם ספק תוכנה רק משום שמוזכר חיבור אפשרי. כל חיבור תלוי ב API, גרסה, הרשאה ובדיקת ספק.",
    "- אין הבטחה לדירוג, הכנסה, חיסכון או תוצאה עסקית אלא אם הדבר נאמר במפורש בעמוד המקור ובתנאים המופיעים בו.",
    "- פרטי קשר רשמיים: hello@navines.com, 054-818-0200.",
    "",
  ].join("\n");
}

export function llmsFullIndex() {
  const recentPosts = [...blogPosts]
    .sort((first, second) => (second.updatedAt || second.publishedAt).localeCompare(first.updatedAt || first.publishedAt))
    .slice(0, 40);

  return [
    llmsIndex(),
    "## כל השירותים",
    "",
    ...services.map((service) => line(service.title, absolute(`/services/${service.slug}`), service.summary)),
    "",
    "## פתרונות לפי קהל",
    "",
    ...solutionPages.map((solution) => line(solution.title, absolute(`/solutions/${solution.slug}`), solution.summary)),
    "",
    "## מוצרים וכלים",
    "",
    ...products.map((product) => line(product.hebrewName || product.name, product.url || absolute("/products"), product.description)),
    "",
    "## מאמרים אחרונים ומעודכנים",
    "",
    ...recentPosts.map((post) => line(post.title, absolute(`/blog/${post.slug}`), post.excerpt)),
    "",
  ].join("\n");
}

export function textResponse(body: string) {
  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
