import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFile(join(root, path), "utf8");

const [siteData, solutionData, blogPage, servicePage, solutionPage, homePage, noiseProductPage, seoSource, siteAssistant] = await Promise.all([
  read("src/data/site.ts"),
  read("src/data/solutions.ts"),
  read("src/app/blog/[slug]/page.tsx"),
  read("src/app/services/[slug]/page.tsx"),
  read("src/app/solutions/[slug]/page.tsx"),
  read("src/app/page.tsx"),
  read("src/app/products/navines-noise/page.tsx"),
  read("src/lib/seo.ts"),
  read("src/app/api/site-assistant/route.ts"),
]);

function segment(source, slug) {
  const start = source.indexOf(`slug: "${slug}"`);
  assert.notEqual(start, -1, `Missing content record for ${slug}`);
  const next = source.indexOf("\n  {", start + 1);
  return source.slice(start, next === -1 ? source.length : next);
}

function includes(source, value, label) {
  assert.ok(source.includes(value), `${label}: expected ${value}`);
}

const hackPost = segment(siteData, "what-to-do-when-account-is-hacked");
const invoicePost = segment(siteData, "ai-invoice-scanning-and-filtering");
const aiChatService = segment(siteData, "ai-chat-for-websites");
const hackService = segment(siteData, "account-hack-recovery");
const aiAutomationService = segment(siteData, "ai-automation");
const chatGptDataService = segment(siteData, "chatgpt-business-data");
const apiIntegrationsService = segment(siteData, "api-integrations");
const businessSystemsChatGptService = segment(siteData, "business-systems-chatgpt-integration");
const aiAgentsService = segment(siteData, "chatgpt-ai-agents-business");
const autonomousSeoService = segment(siteData, "autonomous-seo-agent-search-console-chatgpt");
const morningGreenInvoicePost = segment(siteData, "morning-green-invoice-chatgpt-business-data");
const customConnectorPost = segment(siteData, "connect-any-software-chatgpt-custom-connector");
const autonomousSeoPost = segment(siteData, "google-search-console-chatgpt-autonomous-seo-agent");
const accountantsSolution = segment(solutionData, "accountants");
const freelancersSolution = segment(solutionData, "freelancers");

includes(hackPost, "metaDescription:", "Hack article metadata");
includes(invoicePost, 'metaTitle: "סריקת חשבוניות עם AI: חילוץ, סינון ואימות נתונים"', "Invoice metadata");
includes(aiChatService, 'metaTitle: "צ׳ט AI לאתר שמכיר את העסק ומוביל לוואטסאפ"', "AI chat metadata");
includes(freelancersSolution, 'title: "CRM, אוטומציה ופתרונות AI לפרילנסרים"', "Freelancer H1 source");
includes(businessSystemsChatGptService, "חשבונית אונליין", "Online invoice service keyword");
includes(businessSystemsChatGptService, "חשבונית און ליין", "Online invoice spaced variant");
includes(businessSystemsChatGptService, "Morning", "Morning service keyword");
includes(businessSystemsChatGptService, "Green Invoice", "Green Invoice service keyword");
includes(businessSystemsChatGptService, "Priority", "Priority service keyword");
includes(businessSystemsChatGptService, "קו מערכות", "CAV Systems service keyword");
includes(businessSystemsChatGptService, "מוסכית 2020", "Mossachit service keyword");
includes(businessSystemsChatGptService, "צ׳ט ג׳י פי טי", "Hebrew ChatGPT service keyword");
includes(apiIntegrationsService, "NAVINES Bridge", "Custom connector architecture name");
includes(apiIntegrationsService, "אין API", "No-API connector positioning");
includes(apiIntegrationsService, "SUMIT", "SUMIT connector keyword");
includes(apiIntegrationsService, "סמיט", "SUMIT Hebrew search variant");
includes(apiIntegrationsService, "סמית", "SUMIT Smith search variant");
includes(apiIntegrationsService, "ריווחית", "Rivhit connector keyword");
includes(apiIntegrationsService, "שמאית", "Shamayit connector keyword");
includes(apiIntegrationsService, "נשר", "Neshar connector keyword");
includes(customConnectorPost, "NAVINES Bridge", "Custom connector article architecture");
includes(customConnectorPost, "מוסכית 2020", "Custom connector garage keyword");
includes(customConnectorPost, "סמית", "Custom connector Hebrew SUMIT variant");
includes(aiAgentsService, 'metaTitle: "בניית סוכני AI וצ׳ט ג׳י פי טי לעסקים"', "AI agents metadata");
includes(aiAgentsService, "מפעל", "Factory agent use case");
includes(aiAgentsService, "מוסך", "Garage agent use case");
includes(aiAgentsService, "שמאית", "Appraiser agent use case");
includes(morningGreenInvoicePost, "Green Invoice", "Green Invoice article keyword");
includes(morningGreenInvoicePost, "חשבונית אונליין", "Online invoice article keyword");
includes(autonomousSeoService, "Google Search Console", "Search Console service keyword");
includes(autonomousSeoService, "Google Analytics", "Analytics service keyword");
includes(autonomousSeoService, "שינוי בקוד", "Autonomous code change service copy");
includes(autonomousSeoService, "דיפלוי", "Deployment service copy");
includes(autonomousSeoService, "לוגים", "Server logs service copy");
includes(autonomousSeoPost, "קידום אורגני אוטונומי", "Autonomous SEO article keyword");
includes(blogPage, "MorningGreenInvoiceChatGptArticleBody", "Morning article custom body");
includes(blogPage, "AutonomousSeoAgentArticleBody", "Autonomous SEO article custom body");
includes(blogPage, "CustomConnectorArticleBody", "Custom connector article body");
includes(blogPage, "https://app.sumit.co.il/developers/api/", "Official SUMIT API source");
includes(blogPage, "https://tevelsoft.co.il/nesher-pro.asp", "Neshar and Shamayit integration source");
includes(homePage, "חשבונית אונליין, SUMIT, ריווחית, Priority וכל תוכנה בתוך צ׳ט ג׳י פי טי", "Homepage integration heading");
includes(homePage, "סמית או סאמיט", "Homepage SUMIT search variants");
includes(homePage, "ריווחית", "Homepage Rivhit keyword");
includes(homePage, "/services/api-integrations", "Homepage custom connector link");
includes(homePage, '/services/chatgpt-ai-agents-business', "Homepage AI agent link");
includes(homePage, "מחברים Google Search Console לצ׳ט ג׳י פי טי", "Homepage Search Console heading");
includes(homePage, '/services/autonomous-seo-agent-search-console-chatgpt', "Homepage autonomous SEO link");
includes(siteAssistant, '/services/business-systems-chatgpt-integration', "Assistant integration routing");
includes(siteAssistant, '/services/api-integrations', "Assistant custom connector routing");
includes(siteAssistant, '/services/chatgpt-ai-agents-business', "Assistant agent routing");
includes(siteAssistant, '/services/autonomous-seo-agent-search-console-chatgpt', "Assistant SEO agent routing");

includes(blogPage, 'href="/services/account-hack-recovery"', "Hack article service link");
includes(blogPage, "סיוע במקרה פריצה לחשבון", "Hack article service anchor");
includes(hackService, 'href: "/blog/what-to-do-when-account-is-hacked"', "Hack service article link");

for (const [source, label] of [
  [accountantsSolution, "Accountants solution"],
  [aiAutomationService, "AI automation service"],
  [chatGptDataService, "ChatGPT data service"],
  [freelancersSolution, "Freelancers solution"],
]) {
  includes(source, "/blog/ai-invoice-scanning-and-filtering", `${label} invoice link`);
}

includes(hackPost, 'relatedSlugs: ["how-to-secure-accounts-after-hack", "technical-support-cyber-networks-business"]', "Hack related articles");
assert.ok(!hackPost.includes("browser-extension"), "Hack article must not recommend browser extension content");
assert.ok(!hackPost.includes("accountant"), "Hack article must not recommend accountant content");
assert.ok(!hackPost.includes("amazon"), "Hack article must not recommend Amazon content");

assert.ok(!homePage.toLocaleLowerCase("he").includes("נס ai"), "Homepage must not target the forbidden phrase");
includes(blogPage, "<h1", "Blog article H1");
includes(servicePage, 'titleAs="h1"', "Service H1");
includes(solutionPage, 'titleAs="h1"', "Solution H1");
includes(seoSource, "canonical: url", "Self canonical support");
includes(seoSource, "index: true", "Indexable metadata");
includes(noiseProductPage, 'const productUrl = "https://seo.navines.com/he/";', "Hebrew NAVINES NOISE product destination");
includes(blogPage, 'href="https://seo.navines.com/he/" rel="noopener noreferrer" target="_blank">לעמוד NAVINES NOISE</a>', "Hebrew NAVINES NOISE article destination");

if (process.env.SEO_TEST_BASE_URL) {
  const baseUrl = process.env.SEO_TEST_BASE_URL.replace(/\/$/, "");
  const routes = [
    "/blog/what-to-do-when-account-is-hacked",
    "/services/account-hack-recovery",
    "/blog/ai-invoice-scanning-and-filtering",
    "/services/ai-chat-for-websites",
    "/services/business-systems-chatgpt-integration",
    "/services/api-integrations",
    "/services/chatgpt-ai-agents-business",
    "/blog/connect-any-software-chatgpt-custom-connector",
    "/blog/morning-green-invoice-chatgpt-business-data",
    "/services/autonomous-seo-agent-search-console-chatgpt",
    "/blog/google-search-console-chatgpt-autonomous-seo-agent",
    "/solutions/freelancers",
  ];

  const responses = await Promise.all(routes.map((route) => fetch(`${baseUrl}${route}`)));
  responses.forEach((response, index) => {
    assert.equal(response.status, 200, `${routes[index]} must return HTTP 200`);
  });
}

console.log("Focused SEO regression checks passed.");
