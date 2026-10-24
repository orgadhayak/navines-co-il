# Research sources

Accessed 2026-10-24. Search samples are directional observations, not controlled Google Israel ranking reports. Tool locale, device and personalization were not controlled; queries were in Hebrew. No search volumes, keyword difficulty or traffic estimates were invented. Competitor copy and prices were not reused.

## Primary technical sources

- [Google title links](https://developers.google.com/search/docs/appearance/title-link): descriptive concise titles; avoid keyword repetition. No artificial fixed-character ranking rule was imposed.
- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics): inspect the initial HTML as well as rendering and crawlable links. Do not claim Google always uses a rigid two-pass indexing schedule.
- [Google sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): canonical URLs and meaningful modification dates. Sitemap submission is not an indexing guarantee.
- [Google canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): consistent preferred URLs and relevant redirects. No canonical change was justified here.
- [Core Web Vitals](https://web.dev/articles/vitals): distinguish field experience from laboratory diagnostics. GSC lacked sufficient field usage data for this site on this review date.
- The former Google FAQ rich-result documentation URL redirected to [Search documentation updates](https://developers.google.com/search/updates) during this review. No rich-result eligibility promise is based on the presence of FAQ JSON-LD.

The broad Ahrefs/Semrush blogs are background suggestions, not site-specific evidence. No correlation in industry research was treated as proof of a ranking cause or used to justify a rewrite.

## Search-intent samples

| Query | Observed page types and examples | Implication |
| --- | --- | --- |
| `סינון חשבוניות AI` | NAVINES invoice guide surfaced; narrow sample insufficient for market sizing | Improve the existing explanation rather than manufacture more landing pages. |
| `אוטומציה עסקית מהי איך` | [SFB explanatory guide](https://www.sfb.co.il/blog-post/what-is-business-automation), [Colman article](https://www.colman.ac.il/blogs/business-administration/business-automation/), [Otomation guide](https://www.otomation.io/blog/what-is-business-automation/) | Definition, process selection and examples are information intent; retain a guide-to-service journey. |
| `בניית אפליקציה סלולרית לעסק` | [Bot-Traffic service](https://www.bot-traffic.co.il/app-development.php), [AITERRA cost guide](https://www.aiterra.co.il/blog/app-development-cost-israel), NAVINES service and guide | Mixed commercial and research intent. Keep app service and guide distinct. Competitor prices do not establish NAVINES pricing. |
| `חנות איקומרס מה זה` | [EZN explanation](https://www.ezn.co.il/faq/what-is-ecommerce), [Digital Secrets guide](https://digitalsecrets.co.il/אתר-אינטרנט/what-is-virtual-store/), NAVINES guide | Preserve educational explanation and offer a contextual implementation path. |

Only observable search-result/page content was used; no assertion about exact Google rank, market share or competitor performance follows from this sample.

## Performance evidence

[PageSpeed Insights report for the production invoice guide](https://pagespeed.web.dev/analysis/https-www-navines-co-il-blog-ai-invoice-scanning-and-filtering/pfy8x8goih?form_factor=mobile), captured 2026-10-24 21:18 GMT+3:

- Mobile: Lighthouse 13.5.0, emulated Moto G Power, slow 4G, single cold navigation. Performance 94; accessibility/best-practices/SEO 100. FCP 1.2s; LCP 2.7s; TBT 20ms; CLS 0; speed index 3.9s.
- Desktop: performance/accessibility/best-practices/SEO 100; FCP 0.3s; LCP 0.5s; TBT 0ms; CLS 0.015; speed index 0.5s.
- Field section says No Data. These are single lab runs of the existing production page, not proof of field CWV or an improvement caused by this unpublished branch. Lighthouse scores are not Google ranking scores.
- Mobile suggestions include render-blocking requests (estimated 250ms), unused CSS (13KiB), legacy JS (11KiB), and a non-composited animation. Estimates are not additive or guaranteed. Address only after repeated measurement and a separate shared-CSS review; not as part of this narrow content wave.
