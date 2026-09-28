import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { parse } = require("next/dist/compiled/node-html-parser");
const base = (process.env.SEO_TEST_BASE_URL || process.argv[2] || "").replace(/\/$/, "");
assert.ok(base, "Provide SEO_TEST_BASE_URL or a running site's URL");
const origin = "https://www.navines.co.il";
const clean = (text = "") => text.replace(/\s+/g, " ").trim();
const pathname = (url) => new URL(url, origin).pathname.replace(/\/$/, "") || "/";
const failures = [];
const warnings = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

async function get(path, options) {
  return fetch(`${base}${path}`, { signal: AbortSignal.timeout(30000), ...options });
}

const sitemapResponse = await get("/sitemap.xml");
assert.equal(sitemapResponse.status, 200);
const xml = parse(await sitemapResponse.text());
const entries = xml.querySelectorAll("url");
const urls = entries.map((entry) => entry.querySelector("loc").textContent);
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");
for (const entry of entries) {
  const modified = entry.querySelector("lastmod")?.textContent;
  check(!modified || Date.parse(modified) <= Date.now(), `Future or invalid sitemap lastmod: ${modified}`);
}

const pages = new Map();
let cursor = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    const path = pathname(url);
    try {
      check(new URL(url).origin === origin, `Wrong sitemap origin: ${url}`);
      const response = await get(path);
      check(response.status === 200, `${path}: HTTP ${response.status}`);
      const html = parse(await response.text());
      const schemas = html.querySelectorAll('script[type="application/ld+json"]').flatMap((script) => {
        try { return JSON.parse(script.textContent); }
        catch { failures.push(`${path}: invalid JSON-LD`); return []; }
      });
      const row = {
        html, schemas,
        title: clean(html.querySelector("title")?.textContent),
        description: html.querySelector('meta[name="description"]')?.getAttribute("content"),
        canonical: html.querySelector('link[rel="canonical"]')?.getAttribute("href"),
        alternates: html.querySelectorAll("link[hreflang]").map((node) => ({
          lang: node.getAttribute("hreflang"), href: node.getAttribute("href"),
        })),
      };
      pages.set(path, row);
      check(row.title && row.description, `${path}: missing title/description`);
      check(html.querySelectorAll("h1").length === 1, `${path}: expected one H1`);
      check(row.canonical && new URL(row.canonical).href === `${origin}${path}`, `${path}: non-self canonical ${row.canonical}`);
      check(html.querySelector('meta[property="og:url"]')?.getAttribute("content") === row.canonical, `${path}: OG URL mismatch`);
      const robots = `${response.headers.get("x-robots-tag") || ""} ${html.querySelector('meta[name="robots"]')?.getAttribute("content") || ""}`;
      check(!/noindex|nofollow/i.test(robots), `${path}: indexing blocked`);
      const types = schemas.map((schema) => schema["@type"]);
      const article = path.includes("/blog/") || path.includes("/insights/");
      check(types.includes("Article") === article, `${path}: Article schema placement`);
      for (const schema of schemas) {
        if (schema["@type"] === "FAQPage") {
          const text = clean(html.querySelector("main")?.textContent);
          for (const question of schema.mainEntity) {
            check(text.includes(clean(question.name)), `${path}: FAQ question absent from content`);
            check(text.includes(clean(question.acceptedAnswer.text)), `${path}: FAQ answer absent from content`);
          }
        }
        if (schema["@type"] === "Article") {
          const articleUrl = schema.url || (typeof schema.mainEntityOfPage === "string" ? schema.mainEntityOfPage : schema.mainEntityOfPage?.["@id"]);
          check(articleUrl === row.canonical, `${path}: Article URL`);
          check(clean(schema.headline) === clean(html.querySelector("h1")?.textContent), `${path}: Article headline differs from H1`);
          check(Date.parse(schema.dateModified) >= Date.parse(schema.datePublished), `${path}: article dates`);
        }
        if (schema["@type"] === "BreadcrumbList") {
          schema.itemListElement.forEach((item, index) => {
            check(item.position === index + 1 && item.name && item.item?.startsWith(origin), `${path}: invalid breadcrumb`);
          });
        }
      }
      const locale = path.split("/")[1];
      const expectedLang = { de: "de-DE", jp: "ja-JP", ar: "ar", hi: "hi-IN", fr: "fr-FR", zh: "zh-CN" }[locale] || "he-IL";
      const expectedDir = ["he-IL", "ar"].includes(expectedLang) ? "rtl" : "ltr";
      if (html.querySelector("html")?.getAttribute("lang") !== expectedLang || html.querySelector("html")?.getAttribute("dir") !== expectedDir) {
        warnings.push(`${path}: server HTML language/direction differs from locale (client correction is not an SSR fix)`);
      }
    } catch (error) { failures.push(`${path}: ${error.message}`); }
  }
}));

for (const field of ["title", "description"]) {
  const seen = new Map();
  for (const [path, page] of pages) {
    if (seen.has(page[field])) failures.push(`Duplicate ${field}: ${seen.get(page[field])}, ${path}`);
    seen.set(page[field], path);
  }
}

const incoming = new Set();
const extraPaths = new Set();
for (const [path, page] of pages) {
  for (const anchor of page.html.querySelectorAll("a[href]")) {
    const href = anchor.getAttribute("href");
    const url = new URL(href, `${origin}${path}`);
    if (url.origin !== origin) continue;
    const target = pathname(url);
    if (target !== path) incoming.add(target);
    if (!pages.has(target)) extraPaths.add(target);
    if (url.hash && pages.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      // Text fragments are browser instructions, not element IDs.
      const targetHtml = pages.get(target).html;
      const hasAnchor = targetHtml.querySelectorAll("[id]").some((node) => node.id === id);
      // Tools deliberately use hashes to select a client tab, not to scroll to an ID.
      const hasToolTab = /\/(?:tools)$/.test(target) && targetHtml.querySelectorAll('[role="tab"]').some((node) => node.id === `tool-tab-${id}` || node.id === `localized-tool-tab-${id}`);
      if (!id.startsWith(":~:text=")) check(hasAnchor || hasToolTab, `${path}: missing anchor ${href}`);
    }
  }
  for (const alternate of page.alternates) {
    const target = pages.get(pathname(alternate.href));
    check(alternate.href.startsWith(origin) && target, `${path}: broken hreflang ${alternate.href}`);
    check(target?.alternates.some((item) => new URL(item.href).href === new URL(page.canonical).href), `${path}: nonreciprocal hreflang ${alternate.href}`);
  }
}
for (const path of extraPaths) {
  const response = await get(path);
  check(response.status === 200, `Internal link ${path}: HTTP ${response.status}`);
}
for (const path of pages.keys()) check(path === "/" || incoming.has(path), `Orphan sitemap page: ${path}`);

const contextualEdges = {
  "/": ["/services/custom-ai-plugins-mcp-workspaces"],
  "/services/api-integrations": ["/services/custom-ai-plugins-mcp-workspaces"],
  "/services/chatgpt-ai-agents-business": ["/services/custom-ai-plugins-mcp-workspaces"],
  "/services/custom-ai-plugins-mcp-workspaces": ["/services/api-integrations", "/services/chatgpt-ai-agents-business", "/blog/connect-any-software-chatgpt-custom-connector"],
  "/blog/mobile-app-service-guide": ["/services/mobile-app-development", "/services/api-integrations"],
  "/services/mobile-app-development": ["/blog/mobile-app-service-guide", "/services/api-integrations", "/services/web-development"],
  "/blog/ai-invoice-scanning-and-filtering": ["/solutions/accountants", "/services/ai-automation"],
  "/solutions/accountants": ["/blog/ai-invoice-scanning-and-filtering", "/blog/accountants-ai-data-automation", "/services/ai-automation"],
  "/blog/accountants-ai-data-automation": ["/solutions/accountants", "/blog/ai-invoice-scanning-and-filtering"],
  "/blog/business-automation-start": ["/services/ai-automation", "/services/business-systems-chatgpt-integration", "/services/custom-ai-plugins-mcp-workspaces"],
  "/services/ai-automation": ["/blog/business-automation-start", "/blog/ai-invoice-scanning-and-filtering"],
  "/services/chatgpt-business-data": ["/services/business-systems-chatgpt-integration"],
  "/blog/talk-to-business-data-chatgpt": ["/services/business-systems-chatgpt-integration", "/services/chatgpt-business-data"],
};
for (const [path, targets] of Object.entries(contextualEdges)) {
  const links = pages.get(path)?.html.querySelectorAll("main a[href]") || [];
  for (const target of targets) check(links.some((link) => link.getAttribute("href") === target && clean(link.textContent)), `${path}: missing contextual link to ${target}`);
}

for (const path of Object.keys(contextualEdges).filter((path) => path.startsWith("/services/"))) {
  check(pages.get(path)?.schemas.some((schema) => schema["@type"] === "Service"), `${path}: Service schema missing`);
}
const robots = await (await get("/robots.txt")).text();
check(robots.includes(`${origin}/sitemap.xml`), "robots sitemap discovery");
check(!/^Disallow:\s*\/\s*$/m.test(robots), "robots blocks site");
for (const [path, target] of [["/blog-Blog", "/blog"], ["/products-Products", "/products"], ["/services/ai-automation/", "/services/ai-automation"]]) {
  const response = await get(path, { redirect: "manual" });
  check([301, 308].includes(response.status) && pathname(response.headers.get("location")) === target, `${path}: permanent redirect missing`);
}
console.log(JSON.stringify({ pages: pages.size, internalResources: extraPaths.size, failures, warnings }, null, 2));
assert.equal(failures.length, 0, "Rendered SEO checks failed");
if (process.env.SEO_STRICT_LOCALES === "1") assert.equal(warnings.length, 0, "Server language checks failed");
