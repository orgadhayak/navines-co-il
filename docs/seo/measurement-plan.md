# Measurement plan

## Current state

`SiteDocument.tsx` conditionally mounts Vercel Analytics in Vercel deployments. `AnalyticsEvents.tsx` pushes click events only if a `window.dataLayer` already exists. A GA4/GTM initialization was not found in source. This is not proof that the events are collected. Analytics account access, conversion configuration and backend receipt were not verified.

The existing payload includes the complete clicked href, potentially including contact addresses and query text. Before activating a tag-manager consumer, review and restrict it to approved fixed fields. No new analytics provider, cookie, consent behavior or account setting was added this round.

## Proposed event contract, not deployed

| Event | Trigger | Safe fields | Not a substitute for |
| --- | --- | --- | --- |
| `service_cta_click` | Intentional click from a guide to its service | fixed source page ID, target service slug, placement | A lead |
| `contact_click` | Click on WhatsApp, telephone or email | fixed page ID, channel, placement | A submitted message or call |
| `lead_submit_success` | Validated successful form/server acknowledgement, only if a form exists | fixed form ID and page ID | A qualified inquiry |
| qualified lead | Staff verifies genuine relevant inquiry in authorized CRM | internal non-PII aggregate reporting | A sale |
| sale | Confirmed commercial outcome in authorized records | aggregate value only with approval | Revenue inferred from click counts |

Do not transmit message text, invoice data, names, email addresses, phone numbers, full query strings, auth tokens or client identifiers to analytics. Do not initialize new tracking or cross-domain attribution without an approved consent/privacy review. No real forms, messages or leads were submitted for QA.

## Comparison protocol

1. Record the actual deployment date and commit only after approval. This branch is not yet a production experiment.
2. Keep pre-deployment 28-day totals and query/page combinations, separated by Israel/other countries and mobile/desktop when available. Retain the preceding 28-day window and the 90-day context.
3. After a full post-deployment window, compare the same dimensions. Do not mix page totals with query-filtered rows or rounded UI totals with an exact export.
4. Primary first-wave pages: invoice guide, automation guide, automation service. Secondary: accountant solution/guide and app/ecommerce pairs. Protected ChatGPT pages form a regression watch list.
5. Track organic impressions, clicks, CTR and position alongside guide-to-service clicks and qualified inquiries once actual collection is verified. Zero or missing query rows do not prove zero demand; anonymized rows and property aggregation can differ.
6. With eight clicks in the supplied recent window, do not claim statistical significance or causal improvement. Account for the earlier Oct20 release and Search Console processing delays.

## Access follow-ups

Reconnect TalkToData for reproducible exports; browser access currently supports read-only verification. Confirm the authorized analytics property and privacy settings before instrumenting anything. Use Search Console URL inspection for the six discovered pages before proposing indexing changes. No scheduled monitoring or repeated sitemap submissions were configured.
