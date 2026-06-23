const visuals = [
  { src: "/visuals/navines-israel-core-star.jpg", alt: "ליבת טכנולוגיה סגולה בצורת מגן דוד" },
  { src: "/visuals/navines-israel-light-ring.jpg", alt: "סמל מגן דוד סגול וזוהר עם טבעת דיגיטלית" },
];

const bySlug: Record<string, (typeof visuals)[number]> = {
  "ai-business-israel": visuals[0],
  "business-website-2026": visuals[1],
  "slow-website-cost": visuals[0],
  "business-automation-start": visuals[1],
  "shopify-israel": visuals[0],
  "amazon-ebay-mistakes": visuals[1],
  "api-save-hours": visuals[0],
  "website-trust": visuals[1],
  "navines-beacon": visuals[0],
  "internal-business-system": visuals[1],
  "wordpress-security": visuals[0],
  "technical-seo-hebrew": visuals[1],
};

export function getBlogVisual(slug: string) {
  return bySlug[slug] ?? visuals[0];
}
