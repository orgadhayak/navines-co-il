import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFile(join(root, path), "utf8");

const [siteData, solutionData, blogPage, servicePage, solutionPage, homePage, seoSource] = await Promise.all([
  read("src/data/site.ts"),
  read("src/data/solutions.ts"),
  read("src/app/blog/[slug]/page.tsx"),
  read("src/app/services/[slug]/page.tsx"),
  read("src/app/solutions/[slug]/page.tsx"),
  read("src/app/page.tsx"),
  read("src/lib/seo.ts"),
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
const accountantsSolution = segment(solutionData, "accountants");
const freelancersSolution = segment(solutionData, "freelancers");

includes(hackPost, "metaDescription:", "Hack article metadata");
includes(invoicePost, 'metaTitle: "סינון וסריקת חשבוניות עם AI: חילוץ, אימות וקליטה"', "Invoice metadata");
includes(aiChatService, 'metaTitle: "צ׳ט AI לאתר שמכיר את העסק ומוביל לוואטסאפ"', "AI chat metadata");
includes(freelancersSolution, 'title: "CRM, אוטומציה ופתרונות AI לפרילנסרים"', "Freelancer H1 source");

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

if (process.env.SEO_TEST_BASE_URL) {
  const baseUrl = process.env.SEO_TEST_BASE_URL.replace(/\/$/, "");
  const routes = [
    "/blog/what-to-do-when-account-is-hacked",
    "/services/account-hack-recovery",
    "/blog/ai-invoice-scanning-and-filtering",
    "/services/ai-chat-for-websites",
    "/solutions/freelancers",
  ];

  const responses = await Promise.all(routes.map((route) => fetch(`${baseUrl}${route}`)));
  responses.forEach((response, index) => {
    assert.equal(response.status, 200, `${routes[index]} must return HTTP 200`);
  });
}

console.log("Focused SEO regression checks passed.");
