# SEO change log

## 2026-10-24: first-wave intent review

Baseline commit: `1bead583201293666f5abb09cee3c4bcbe6a4161`.
Branch: `codex/seo-intent-review-2026-10-24`. Not committed or deployed by this task.

| Change | Evidence / intended effect | Files | Risk / acceptance / rollback |
| --- | --- | --- | --- |
| Synthetic invoice filtering example; record access versus OCR distinction | Actual invoice query opportunity and lack of concrete example records; improve comprehension without inventing product capability | blog slug template, site data | Low; semantic table readable on mobile and both themes; remove only added example/paragraph and restore that article date to roll back |
| Guide closing CTA targets automation service | Existing CTA went to generic services index; align next step with page intent | CTA component, blog slug template | Low; optional defaults preserve all other pages; remove two overrides and optional props to roll back |
| Conditional CRM feasibility and explicit automation handover | Unconditional FAQ and vague delivery boundary | site data, service slug template, blog slug template | Low; no guaranteed results or broad integration promises; reverse only these content hunks and dates |
| Focused regression and reusable rendered crawl output | Need proof of service CTA, disclosed sample and no collateral SEO changes | seo-regression.mjs, seo-rendered.mjs | Low; tests only; opt-in new rendered checks leave production baseline runnable |
| Evidence inventory, priorities and measurement plan | User-requested deliverables; distinguish live GSC from supplied snapshots | docs/seo | No runtime effect; no private client material |

No route, canonical, robots, redirect, global style, navigation, language architecture, protected ChatGPT content, permissions or tracking-provider change. Update production deployment date and commit only after approval and actual deployment.
