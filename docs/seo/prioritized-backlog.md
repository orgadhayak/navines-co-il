# Prioritized backlog

Reviewed 2026-10-24. Effort estimates are planning ranges, not delivery promises. Rankings and lead gains are not guaranteed.

| ID / priority / status | URLs | Evidence / confidence | Effort / risk | Acceptance |
| --- | --- | --- | --- | --- |
| I1 P1 implemented | `/blog/ai-invoice-scanning-and-filtering` | Query position 11.76 in supplied report; no concrete sample records in baseline. Medium opportunity, high gap confidence. | Small / low | Synthetic example labeled; unknown date stays in exceptions; no real client data or upload claim; readable 320px and desktop. |
| I2 P1 implemented | invoice guide; `/blog/business-automation-start`; `/services/ai-automation` | Generic closing CTA and overly categorical CRM answer. High confidence. | Small / low | Closing CTAs reach the relevant service; other defaults unchanged; conditional API support; accurate pilot handover. |
| I3 P1 verified, no new fix | legacy `/blog/navines-beacon`, `/blog-Blog`, `/products-Products` | GSC 404 sample predates fixes; live permanent redirects pass. High confidence. | None / avoid redirect chains | Correct single-hop relevant targets and no redirect loops. Observe next crawl. |
| I4 P1 follow-up | `/contact`, all service/guide CTAs | Optional dataLayer events without verified collection or lead outcomes. High confidence in code gap; account configuration unverified. | Medium / privacy and reporting risk | Approve analytics/consent configuration; use non-PII fixed event fields; confirm backend collection; separate clicks from qualified leads. No tracker installed now. |
| I5 P2 measurement | app guide and app service | Supplied query position worsened 22.27 to 35.75 with 26 to 16 impressions. Medium-low due to sample. | Small analysis / high risk if merged prematurely | Export same query+page+country+device for full 28-day periods; keep paths; only change a specific missing answer supported by evidence. |
| I6 P2 measurement | ecommerce guide and service | Guide impressions rose; service fell; guide updated Oct20. Medium. | Small analysis / medium | Wait complete post-release window and compare same queries. No page merge without demonstrated equivalence and approval. |
| I7 P2 preserve | protected ChatGPT service and guide; custom-connector guide | Existing clicks; connector guide position 8.94 in report but query details sparse. High preservation confidence. | Small review / high if rewritten | Protected body/title/canonical/schema unchanged; verify exact queries before changing connectors copy. |
| I8 P2 follow-up | six GSC discovered-not-indexed URLs | See audit/validation snapshot; historical report lag. Medium. | Small / low if read-only | Inspect individually, compare current render/canonical/inbound links and last crawl; no mass submission/noindex. |
| I9 P2 follow-up | representative templates | Field CWV unavailable; lab test is diagnostic only. High. | Medium / medium | Repeat mobile lab tests and observe field data when available; fix measured bottlenecks, not speculative global rewrites. |
| I10 P3 preserve | all locale routes | Current raw HTML lang/dir and reciprocal hreflang pass. High. | None / high if reorganized | Keep correct root document behavior and locale URLs. No 72-page architecture rewrite. |
| I11 P3 monitor | extension service; SEO guide | Smaller or broad low-position queries. Low-medium. | Later / low | Demonstrate qualified intent before new content or tools. No new pages this wave. |

No redirect proposal is required. None of the evidence justifies deleting, merging or noindexing a public page.
