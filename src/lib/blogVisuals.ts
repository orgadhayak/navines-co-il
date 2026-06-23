const visuals = [
  { src: "/visuals/brain1.webp", alt: "מוח AI סגול עם נקודות חיבור" },
  { src: "/visuals/signal-wave.jpg", alt: "גלי נתונים סגולים על רשת דיגיטלית" },
  { src: "/visuals/automation-hand.jpg", alt: "יד מחזיקה רשת נתונים ואוטומציה" },
  { src: "/visuals/ai-board.webp", alt: "לוח אלקטרוני עם שכבות AI ונתונים" },
  { src: "/visuals/ai-chip.webp", alt: "שבב AI סגול על לוח אלקטרוני" },
  { src: "/visuals/purple-circuit-core.png", alt: "מעגל תשתית דיגיטלית סגול" },
];

const bySlug: Record<string, (typeof visuals)[number]> = {
  "ai-business-israel": visuals[0],
  "business-website-2026": visuals[3],
  "slow-website-cost": visuals[1],
  "business-automation-start": visuals[2],
  "shopify-israel": visuals[4],
  "amazon-ebay-mistakes": visuals[3],
  "api-save-hours": visuals[5],
  "website-trust": visuals[2],
  "navines-beacon": visuals[1],
  "internal-business-system": visuals[4],
  "wordpress-security": visuals[5],
  "technical-seo-hebrew": visuals[3],
};

export function getBlogVisual(slug: string) {
  return bySlug[slug] ?? visuals[0];
}
