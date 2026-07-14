export type LocaleSlug = "he" | "de" | "jp" | "ar" | "hi" | "fr" | "zh";

export type PublicLocale = Exclude<LocaleSlug, "he">;

export type LocaleMeta = {
  slug: LocaleSlug;
  href: string;
  lang: string;
  dir: "rtl" | "ltr";
  nativeName: string;
  englishName: string;
  ogLocale: string;
};

export const siteLocales: Record<LocaleSlug, LocaleMeta> = {
  he: { slug: "he", href: "/", lang: "he-IL", dir: "rtl", nativeName: "עברית", englishName: "Hebrew", ogLocale: "he_IL" },
  de: { slug: "de", href: "/de", lang: "de-DE", dir: "ltr", nativeName: "Deutsch", englishName: "German", ogLocale: "de_DE" },
  jp: { slug: "jp", href: "/jp", lang: "ja-JP", dir: "ltr", nativeName: "日本語", englishName: "Japanese", ogLocale: "ja_JP" },
  ar: { slug: "ar", href: "/ar", lang: "ar", dir: "rtl", nativeName: "العربية", englishName: "Arabic", ogLocale: "ar" },
  hi: { slug: "hi", href: "/hi", lang: "hi-IN", dir: "ltr", nativeName: "हिन्दी", englishName: "Hindi", ogLocale: "hi_IN" },
  fr: { slug: "fr", href: "/fr", lang: "fr-FR", dir: "ltr", nativeName: "Français", englishName: "French", ogLocale: "fr_FR" },
  zh: { slug: "zh", href: "/zh", lang: "zh-CN", dir: "ltr", nativeName: "简体中文", englishName: "Simplified Chinese", ogLocale: "zh_CN" },
};

export const publicLocales: PublicLocale[] = ["de", "jp", "ar", "hi", "fr", "zh"];

export const languageLinks = [
  siteLocales.he,
  { ...siteLocales.de, href: "/de" },
  { slug: "en" as const, href: "https://www.navines.com/", lang: "en", dir: "ltr" as const, nativeName: "English", englishName: "English", ogLocale: "en_US" },
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
