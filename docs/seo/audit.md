# SEO audit: 2026-10-24

## Scope and safeguards

Site: https://www.navines.co.il. Repository: `D:\Software\navines-israel-`.
Baseline: `1bead583201293666f5abb09cee3c4bcbe6a4161`.
Work branch: `codex/seo-intent-review-2026-10-24`.

This is an incremental first wave, not a site rewrite. No deployment, commit, account settings, ownership changes, new URLs, redirects, removals or indexing submissions were authorized for this wave. No changes to other repositories. No client documents or credentials are stored in these reports.

## Evidence and limits

1. User-supplied TalkToData reports dated 2026-10-24, covering 90 days (2026-07-26 through 2026-10-23), current 28 days (2026-09-26 through 2026-10-23), and previous 28 days (2026-08-29 through 2026-09-25).
2. Read-only inspection of the signed-in Search Console domain property `sc-domain:navines.co.il` on 2026-10-24. The TalkToData connector returned UNAUTHORIZED; no connector output was fabricated or substituted with demo data.
3. Production raw-HTML crawl of all 194 sitemap pages using `scripts/seo-rendered.mjs`, source review, Git history, and the built route inventory.
4. Current official documentation and sampled public search results, with limitations recorded in `research-sources.md`.

The supplied current-28 report showed 8 clicks / 2,808 impressions / 0.28% CTR / position 52.87. The live UI with the same explicit start/end dates showed 8 clicks / **2.94K** impressions / **0.3%** CTR / **53** position. These are rounded UI values, not a new exact export. Recent data can change; the snapshots are kept separate. The date filter URL was checked explicitly; monthly chart labels are not the period boundaries.

Live top-page counts are in the inventory. Query observations for the same live date filter include `סינון חשבוניות עם ai`: 58 impressions, 0 clicks; `אוטומציה עיסקית`: 100, 0; `בניית אפליקציה לעסק`: 83, 0; `חנות איקומרס`: 73, 0. They support prioritization, not search-volume or ranking guarantees. Country/device breakdowns from the supplied report were not independently re-exported.

## Findings and decisions

| Finding | Evidence | Decision |
| --- | --- | --- |
| Invoice filtering is a concrete near-page-one query opportunity | Supplied query/page row: current28 50 impressions at 11.76; live query 58 impressions; page 177 impressions | Add a clearly synthetic filtering example and distinguish existing-record access from OCR. Keep the established title/H1. |
| Automation intent is informational before commercial | Supplied `אוטומציה עיסקית`: 94 impressions at 10.3; live page 328 impressions | Preserve explanatory article, make its closing CTA lead to the automation service. Do not insert the misspelling as repetitive headings. |
| Shared closing CTA sends readers to generic services | Source and production HTML: `ראו שירותים` links to `/services` even in the two targeted guides | Override only those two guide CTAs. Defaults on all other pages remain unchanged. |
| Automation qualification needs precision | CRM FAQ starts with unconditional yes; small-business article suggests quick gains | Make feasibility conditional, remove quick-return implication, clarify pilot handover and costs by agreed scope. |
| Many requested content changes already shipped | Git `fea0819` on 2026-10-20; current guides already include exception handling, ROI example, platform comparison and internal links | Do not repeat that work or claim this wave caused the preceding GSC change. |
| Page-indexing summary is easy to misinterpret | GSC updated 2026-10-16: 188 indexed, 20 not indexed | Investigate URLs instead of mass noindex/redirect changes. |
| Three reported 404s are stale | `/blog/navines-beacon`, `/blog-Blog`, `/products-Products`; existing permanent redirects now pass production tests | No new redirects. Wait for recrawl; no validation request submitted. |
| Eight crawled-not-indexed examples are static CSS URLs with deployment queries | All eight visible examples under `/_next/static/css/` | Not missing content pages. Do not block CSS needed for rendering. |
| Field performance is unavailable | GSC CWV: insufficient data for mobile and desktop, updated 2026-10-21 | Report laboratory measurements separately. No claim of passing field CWV. |
| Conversion evidence is incomplete | Vercel Analytics present conditionally; AnalyticsEvents only pushes to an existing optional dataLayer; no GA/GTM initialization found in source | Do not invent lead totals or install a tracker. Measurement follow-up requires consent/configuration review. |

## Technical baseline

All 194 public sitemap pages returned 200. The existing rendered tests reported no missing/duplicate title or description, exactly one H1 per page, matching production canonical/OG URL, no noindex/nofollow block, valid JSON-LD parsing, matching Article headline/dates, visible FAQ content, reciprocal hreflang, correct server lang/dir, existing contextual links, and no orphan sitemap pages. Internal linked resources passed as well.

These are technical eligibility checks, not proof that Google selected the canonical or indexed every page. They do not constitute an exhaustive editorial review of every sentence or a full schema-validator certification. The sitemap is a discovery source, not the entire source inventory; the generated inventory is cross-checked against built routes. See `validation-report.md` for execution results and exclusions.

The sitemap is already registered: https://www.navines.co.il/sitemap.xml. GSC shows Success, last read 2026-10-22, 194 discovered pages. Do not submit it repeatedly. No new URLs were introduced.

The six discovered-not-indexed examples in the 2026-10-16 GSC snapshot are:

- `/blog/google-search-console-chatgpt-autonomous-seo-agent`
- `/blog/morning-green-invoice-chatgpt-business-data`
- `/blog/navines-seo-lab-free-tools-and-research`
- `/services/account-hack-recovery`
- `/services/autonomous-seo-agent-search-console-chatgpt`
- `/services/chatgpt-ai-agents-business`

All six are included in the successful current HTTP/HTML crawl and have internal inbound links. Their GSC last-crawl column is N/A. Per-URL Google-selected canonical and current indexing status were not inspected individually; keep this as follow-up, not a diagnosis of a technical block. No Request Indexing or Validate Fix button was used.

`url-inventory.csv` contains all 194 built public HTML routes, not only the high-impression pages. It was generated from the local production build and cross-checked against `.next/prerender-manifest.json`: zero HTML routes missing from the sitemap, zero unknown sitemap routes. Counts of inbound source pages are deduplicated by source URL; contextual inbound counts use `main a[href]`. These are discovery counts, not PageRank. Known live GSC page metrics are included for ten observed rows; other blanks mean unavailable, not zero. Query-level supplied data remains separately identified in `keyword-intent-map.csv`.

## Intent boundaries retained

- Invoice guide: learn extraction, filtering and human verification, not an upload tool or a ready-made accounting connector.
- Accountants solution: commercial workflow for a multi-client office, permissions and scope.
- Accountants guide: how to organize the office workflow, not another invoice-scanner landing page.
- Automation service: qualification, implementation, exceptions and handover.
- Automation guide: what automation is and how to evaluate a first process.
- Mobile guide: decision and planning; mobile service: development engagement. Preserve both pending query/page comparison over a complete window.
- Ecommerce guide: education and platform selection; ecommerce service: build/improve a store. Falling service impressions alone do not establish cannibalization.
- ChatGPT pages: preserve established paths, titles and intent. No changes to the protected service or protected article content, metadata or schema.

Rivhit references were searched in all `src` files using Hebrew spelling variants and English. Actual product mentions are conditional feasibility statements or vendor documentation links, not proof of a ready-made NAVINES integration. `רווחית` in the advertising article means profitable and is not the product. No new integration claims were added.

## Scope intentionally not expanded

No broad homepage redesign, translation rewrite, analytics-provider migration, keyword variant stuffing, new commercial claims, new pages, global schema change or automatic publish. A full source-first content plan and measurable next-wave priorities accompany this limited implementation.
