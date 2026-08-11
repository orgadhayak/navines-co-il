export type LocaleSlug = "he" | "de" | "jp" | "ar" | "hi" | "fr" | "zh";

export type PublicLocale = Exclude<LocaleSlug, "he">;

export type LocaleMeta = {
  slug: LocaleSlug;
  href: string;
  lang: string;
  dir: "rtl" | "ltr";
  nativeName: string;
  englishName: string;
  shortLabel: string;
  ogLocale: string;
};

export const siteLocales: Record<LocaleSlug, LocaleMeta> = {
  he: { slug: "he", href: "/", lang: "he-IL", dir: "rtl", nativeName: "עברית", englishName: "Hebrew", shortLabel: "HE", ogLocale: "he_IL" },
  de: { slug: "de", href: "/de", lang: "de-DE", dir: "ltr", nativeName: "Deutsch", englishName: "German", shortLabel: "DE", ogLocale: "de_DE" },
  jp: { slug: "jp", href: "/jp", lang: "ja-JP", dir: "ltr", nativeName: "日本語", englishName: "Japanese", shortLabel: "JP", ogLocale: "ja_JP" },
  ar: { slug: "ar", href: "/ar", lang: "ar", dir: "rtl", nativeName: "العربية", englishName: "Arabic", shortLabel: "AR", ogLocale: "ar" },
  hi: { slug: "hi", href: "/hi", lang: "hi-IN", dir: "ltr", nativeName: "हिन्दी", englishName: "Hindi", shortLabel: "HI", ogLocale: "hi_IN" },
  fr: { slug: "fr", href: "/fr", lang: "fr-FR", dir: "ltr", nativeName: "Français", englishName: "French", shortLabel: "FR", ogLocale: "fr_FR" },
  zh: { slug: "zh", href: "/zh", lang: "zh-CN", dir: "ltr", nativeName: "简体中文", englishName: "Simplified Chinese", shortLabel: "ZH", ogLocale: "zh_CN" },
};

export const publicLocales: PublicLocale[] = ["de", "jp", "ar", "hi", "fr", "zh"];

export const languageLinks = [
  siteLocales.he,
  { ...siteLocales.de, href: "/de" },
  { slug: "en" as const, href: "https://www.navines.com/", lang: "en", dir: "ltr" as const, nativeName: "English", englishName: "English", shortLabel: "EN", ogLocale: "en_US" },
  { ...siteLocales.jp, href: "/jp" },
  { ...siteLocales.ar, href: "/ar" },
  { ...siteLocales.hi, href: "/hi" },
  { ...siteLocales.fr, href: "/fr" },
  { ...siteLocales.zh, href: "/zh" },
];

export function localeFromPath(pathname: string | null | undefined): LocaleMeta {
  const clean = pathname || "/";
  const first = clean.split("/").filter(Boolean)[0] as PublicLocale | undefined;
  if (first && publicLocales.includes(first)) return siteLocales[first];
  return siteLocales.he;
}

export const landingAlternates = {
  "he-IL": "https://www.navines.co.il/",
  "de-DE": "https://www.navines.co.il/de",
  "ja-JP": "https://www.navines.co.il/jp",
  ar: "https://www.navines.co.il/ar",
  "hi-IN": "https://www.navines.co.il/hi",
  "fr-FR": "https://www.navines.co.il/fr",
  "zh-CN": "https://www.navines.co.il/zh",
};

export const localizedArticlePaths: Record<PublicLocale, string> = {
  de: "/de/insights/ki-automatisierung-softwareentwicklung",
  jp: "/jp/insights/ai-automation-custom-software",
  ar: "/ar/insights/ai-automation-custom-software",
  hi: "/hi/insights/ai-automation-custom-software",
  fr: "/fr/insights/automatisation-ia-developpement-logiciel",
  zh: "/zh/insights/ai-automation-custom-software",
};

export const articleAlternates = {
  "de-DE": `https://www.navines.co.il${localizedArticlePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedArticlePaths.jp}`,
  ar: `https://www.navines.co.il${localizedArticlePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedArticlePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedArticlePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedArticlePaths.zh}`,
};

export const localizedSafetyToolsArticlePaths: Record<PublicLocale, string> = {
  de: "/de/insights/lokale-sicherheitswerkzeuge-qr-email-links",
  jp: "/jp/insights/local-safety-tools-qr-email-links",
  ar: "/ar/insights/local-safety-tools-qr-email-links",
  hi: "/hi/insights/local-safety-tools-qr-email-links",
  fr: "/fr/insights/outils-locaux-securite-qr-email-liens",
  zh: "/zh/insights/local-safety-tools-qr-email-links",
};

export const safetyToolsArticleAlternates = {
  "he-IL": "https://www.navines.co.il/blog/qr-email-and-link-safety-tools",
  "de-DE": `https://www.navines.co.il${localizedSafetyToolsArticlePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedSafetyToolsArticlePaths.jp}`,
  ar: `https://www.navines.co.il${localizedSafetyToolsArticlePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedSafetyToolsArticlePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedSafetyToolsArticlePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedSafetyToolsArticlePaths.zh}`,
};

export const localizedAffiliateServicePaths: Record<PublicLocale, string> = {
  de: "/de/services/affiliate-program-platform",
  jp: "/jp/services/affiliate-program-platform",
  ar: "/ar/services/affiliate-program-platform",
  hi: "/hi/services/affiliate-program-platform",
  fr: "/fr/services/affiliate-program-platform",
  zh: "/zh/services/affiliate-program-platform",
};

export const localizedAffiliateArticlePaths: Record<PublicLocale, string> = {
  de: "/de/insights/affiliate-program-platform",
  jp: "/jp/insights/affiliate-program-platform",
  ar: "/ar/insights/affiliate-program-platform",
  hi: "/hi/insights/affiliate-program-platform",
  fr: "/fr/insights/affiliate-program-platform",
  zh: "/zh/insights/affiliate-program-platform",
};

export const affiliateServiceAlternates = {
  "he-IL": "https://www.navines.co.il/services/affiliate-program-platform",
  "de-DE": `https://www.navines.co.il${localizedAffiliateServicePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedAffiliateServicePaths.jp}`,
  ar: `https://www.navines.co.il${localizedAffiliateServicePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedAffiliateServicePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedAffiliateServicePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedAffiliateServicePaths.zh}`,
};

export const affiliateArticleAlternates = {
  "he-IL": "https://www.navines.co.il/blog/affiliate-program-for-existing-website",
  "de-DE": `https://www.navines.co.il${localizedAffiliateArticlePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedAffiliateArticlePaths.jp}`,
  ar: `https://www.navines.co.il${localizedAffiliateArticlePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedAffiliateArticlePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedAffiliateArticlePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedAffiliateArticlePaths.zh}`,
};

export const localizedFinancialReviewServicePaths: Record<PublicLocale, string> = {
  de: "/de/services/payment-discrepancy-review",
  jp: "/jp/services/payment-discrepancy-review",
  ar: "/ar/services/payment-discrepancy-review",
  hi: "/hi/services/payment-discrepancy-review",
  fr: "/fr/services/payment-discrepancy-review",
  zh: "/zh/services/payment-discrepancy-review",
};

export const localizedFinancialReviewArticlePaths: Record<PublicLocale, string> = {
  de: "/de/insights/payment-discrepancy-review",
  jp: "/jp/insights/payment-discrepancy-review",
  ar: "/ar/insights/payment-discrepancy-review",
  hi: "/hi/insights/payment-discrepancy-review",
  fr: "/fr/insights/payment-discrepancy-review",
  zh: "/zh/insights/payment-discrepancy-review",
};

export const financialReviewServiceAlternates = {
  "he-IL": "https://www.navines.co.il/services/payment-discrepancy-review",
  "de-DE": `https://www.navines.co.il${localizedFinancialReviewServicePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedFinancialReviewServicePaths.jp}`,
  ar: `https://www.navines.co.il${localizedFinancialReviewServicePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedFinancialReviewServicePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedFinancialReviewServicePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedFinancialReviewServicePaths.zh}`,
};

export const financialReviewArticleAlternates = {
  "he-IL": "https://www.navines.co.il/blog/how-to-review-payments-and-refunds",
  "de-DE": `https://www.navines.co.il${localizedFinancialReviewArticlePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedFinancialReviewArticlePaths.jp}`,
  ar: `https://www.navines.co.il${localizedFinancialReviewArticlePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedFinancialReviewArticlePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedFinancialReviewArticlePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedFinancialReviewArticlePaths.zh}`,
};

export const localizedRobloxServicePaths: Record<PublicLocale, string> = {
  de: "/de/services/roblox-brand-experiences",
  jp: "/jp/services/roblox-brand-experiences",
  ar: "/ar/services/roblox-brand-experiences",
  hi: "/hi/services/roblox-brand-experiences",
  fr: "/fr/services/roblox-brand-experiences",
  zh: "/zh/services/roblox-brand-experiences",
};

export const localizedRobloxArticlePaths: Record<PublicLocale, string> = {
  de: "/de/insights/roblox-brand-experiences",
  jp: "/jp/insights/roblox-brand-experiences",
  ar: "/ar/insights/roblox-brand-experiences",
  hi: "/hi/insights/roblox-brand-experiences",
  fr: "/fr/insights/roblox-brand-experiences",
  zh: "/zh/insights/roblox-brand-experiences",
};

export const robloxServiceAlternates = {
  "he-IL": "https://www.navines.co.il/services/roblox-brand-experiences",
  "de-DE": `https://www.navines.co.il${localizedRobloxServicePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedRobloxServicePaths.jp}`,
  ar: `https://www.navines.co.il${localizedRobloxServicePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedRobloxServicePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedRobloxServicePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedRobloxServicePaths.zh}`,
};

export const robloxArticleAlternates = {
  "he-IL": "https://www.navines.co.il/blog/roblox-brand-experience-for-business",
  "de-DE": `https://www.navines.co.il${localizedRobloxArticlePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedRobloxArticlePaths.jp}`,
  ar: `https://www.navines.co.il${localizedRobloxArticlePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedRobloxArticlePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedRobloxArticlePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedRobloxArticlePaths.zh}`,
};

export const localizedMusicServicePaths: Record<PublicLocale, string> = {
  de: "/de/services/music-distribution-artist-digital-presence",
  jp: "/jp/services/music-distribution-artist-digital-presence",
  ar: "/ar/services/music-distribution-artist-digital-presence",
  hi: "/hi/services/music-distribution-artist-digital-presence",
  fr: "/fr/services/music-distribution-artist-digital-presence",
  zh: "/zh/services/music-distribution-artist-digital-presence",
};

export const localizedMusicArticlePaths: Record<PublicLocale, string> = {
  de: "/de/insights/music-distribution-for-artists",
  jp: "/jp/insights/music-distribution-for-artists",
  ar: "/ar/insights/music-distribution-for-artists",
  hi: "/hi/insights/music-distribution-for-artists",
  fr: "/fr/insights/music-distribution-for-artists",
  zh: "/zh/insights/music-distribution-for-artists",
};

export const musicServiceAlternates = {
  "he-IL": "https://www.navines.co.il/services/music-distribution-artist-digital-presence",
  "de-DE": `https://www.navines.co.il${localizedMusicServicePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedMusicServicePaths.jp}`,
  ar: `https://www.navines.co.il${localizedMusicServicePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedMusicServicePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedMusicServicePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedMusicServicePaths.zh}`,
};

export const musicArticleAlternates = {
  "he-IL": "https://www.navines.co.il/blog/how-to-distribute-music-spotify-apple-youtube",
  "de-DE": `https://www.navines.co.il${localizedMusicArticlePaths.de}`,
  "ja-JP": `https://www.navines.co.il${localizedMusicArticlePaths.jp}`,
  ar: `https://www.navines.co.il${localizedMusicArticlePaths.ar}`,
  "hi-IN": `https://www.navines.co.il${localizedMusicArticlePaths.hi}`,
  "fr-FR": `https://www.navines.co.il${localizedMusicArticlePaths.fr}`,
  "zh-CN": `https://www.navines.co.il${localizedMusicArticlePaths.zh}`,
};
