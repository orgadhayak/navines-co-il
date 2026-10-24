# Validation report

Date: 2026-10-24. Production baseline: `1bead583201293666f5abb09cee3c4bcbe6a4161`.
Review branch: `codex/seo-intent-review-2026-10-24`.

## Confirmed baseline

- `node scripts/seo-rendered.mjs https://www.navines.co.il`: PASS; 194 pages, 2 additional internal resources, no failures/warnings.
- Live GSC sitemap: Success; last read 2026-10-22; 194 discovered pages.
- GSC indexing report updated 2026-10-16: 188 indexed, 20 not indexed; not a current per-URL guarantee.
- Three 404 examples are legacy paths already redirected correctly in the live tests.
- Eight crawled-not-indexed examples are CSS deployment resources, not eight missing public pages.
- Field CWV: unavailable for both device classes, not a pass or fail.

## Local release gate

| Check | Result |
| --- | --- |
| `npm test` | PASS: focused SEO regressions, including the new synthetic-example and OCR guardrails |
| `npm run typecheck` | PASS |
| `npm run build` | PASS: Next.js 15.5.19; 203 generated static entries including framework resources |
| `npm run lint` | PASS with existing `DataDefenderGame.tsx:123` hook-dependencies warning; existing Next lint deprecation notice. No new lint errors. |
| `git diff --check` | PASS; informational LF/CRLF notice for CTA.tsx, no whitespace errors |
| Rendered local production build | PASS: 194 pages, 2 additional linked resources, no failures/warnings; strict server locale checks enabled |
| Intent checks | PASS: both final guide CTAs target automation; synthetic caption and column/row headers present; OCR distinction present |
| Built public routes versus sitemap | PASS: 194 HTML routes match exactly; icon, robots, sitemap and framework 404 excluded from public HTML count |
| Source public route coverage | Dynamic params derive from data; all generated routes covered. API assistant is not a public indexable page and was not invoked. |

Commands for rerunning the local HTML checks against the production preview:

```powershell
$env:SEO_STRICT_LOCALES='1'
$env:SEO_TEST_INTENT_HANDOFFS='1'
node scripts/seo-rendered.mjs http://127.0.0.1:3210
```

The first local crawl was started before the server was listening and returned ECONNREFUSED. It was rerun after startup and passed; no application fix was needed. Preview process runs the existing Next production server at `http://127.0.0.1:3210` with no separate source copy or public deployment.

## Protected content and technical checks

Compared production and local raw HTML for the 12 focus pages listed below. Title, description, H1, canonical, robots and hreflang remained identical on all twelve. Main text and JSON-LD also remained identical on the nine untouched pages, including both protected ChatGPT pages. Only the intended two guides and automation service changed content; FAQ schema follows the updated source, and only actual changed-content dates were advanced.

| Focus page | HTTP | Scope |
| --- | --- | --- |
| `/` | 200 | Unchanged |
| `/services/mobile-app-development` | 200 | Unchanged |
| `/blog/mobile-app-service-guide` | 200 | Unchanged |
| `/blog/ai-invoice-scanning-and-filtering` | 200 | First-wave improvement |
| `/solutions/accountants` | 200 | Unchanged |
| `/blog/accountants-ai-data-automation` | 200 | Unchanged |
| `/services/ai-automation` | 200 | First-wave improvement |
| `/blog/business-automation-start` | 200 | First-wave improvement |
| `/services/chatgpt-business-data` | 200 | Unchanged |
| `/blog/talk-to-business-data-chatgpt` | 200 | Unchanged |
| `/services/business-systems-chatgpt-integration` | 200 | Protected; main text and schema identical |
| `/blog/connect-business-systems-to-chatgpt-israel` | 200 | Protected; main text and schema identical |

Three nonexistent local paths (blog slug, service slug and unsupported `/zz` locale) returned real 404, not soft 200. Production HTTP/non-www variants resolved to the HTTPS www home. Existing legacy and trailing-slash redirects passed. Sample UTM/category query URLs returned 200 with clean base canonical; no parameter redirects were added. All sitemap canonicals, internal hrefs/fragments, hreflang reciprocity and schema/content parity passed the existing crawl assertions. No new public URLs, assets, orphan pages, duplicate metadata or robots rules.

## Browser QA

Chrome browser automation used the local production build, not a mocked screenshot. All 12 focus pages were loaded at 390x844 and 1440x900 in both light and dark modes: one H1, no document horizontal overflow, no completed image with zero natural width, and no captured console warnings/errors or hydration/React #418 errors. This is sampled runtime coverage, not proof for every browser/device.

The three changed pages were additionally measured at 320, 768 and 1024px in dark mode. The synthetic invoice table was visually inspected at 320px in both themes and at desktop size; it stays within the reading column. Caption and cell text remain readable; columns wrap instead of horizontal scrolling. The new service handover section was visually checked at 390px in light mode. The existing site's broader typography and layout were not redesigned.

Interaction checks: invoice closing CTA navigates to automation service; desktop Services/Solutions panels do not remain open simultaneously and outside click closes; mobile menu opens after deep scroll with visible panel and body lock; Escape closes, restores focus and unlocks scrolling; selecting Arabic closes the menu, unlocks body and loads `lang=ar`, `dir=rtl`; theme survives refresh in both modes. Contact destinations inspected without submitting messages, phone calls or forms. The updated CRM FAQ opens with the conditional feasibility answer.

Screenshots were used in memory for visual inspection; no permanent QA screenshots or backups were added. A transient browser-control timeout was retried successfully and is not an application console error.

## Remaining limits and release decision

- No Google-selected canonical/URL Inspection result for every public route. Indexability is not indexing.
- No independent exact GSC export after the connector authentication failure; live UI rounded totals and provided report clearly separated.
- No verified lead collection, CRM attribution or analytics consent audit. No tracking installed.
- No full manual accessibility certification, Safari/Firefox device lab, or field CWV data. Production mobile lab LCP was 2.7s; see the linked PSI report rather than claiming field success.
- No new claims of vendor integration availability. Rivhit remains conditional; two protected ChatGPT pages unchanged.
- Working tree contains only this wave's six edited source/test files and nine requested SEO documentation files. No commit, push or production deployment occurred.

**Decision:** this bounded wave is technically ready for review and deployment approval. The existing site remains live unchanged. Complete the measurement/access follow-ups separately; do not broaden the stable diff merely to increase the number of edits.
