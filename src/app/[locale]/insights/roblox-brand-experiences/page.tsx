import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle } from "@/components/LocalizedArticle";
import { localizedRobloxContent } from "@/content/localized/roblox-brand-experiences";
import { localizedRobloxArticlePaths, localizedRobloxServicePaths, publicLocales, robloxArticleAlternates, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!publicLocales.includes(rawLocale as PublicLocale)) return {};
  const locale = rawLocale as PublicLocale;
  const article = localizedRobloxContent[locale].article;
  const path = localizedRobloxArticlePaths[locale];
  const meta = siteLocales[locale];

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `${site.url}${path}`, languages: robloxArticleAlternates },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: `${site.url}${path}`, locale: meta.ogLocale, type: "article" },
  };
}

export default async function LocalizedRobloxArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!publicLocales.includes(rawLocale as PublicLocale)) notFound();
  const locale = rawLocale as PublicLocale;
  const content = localizedRobloxContent[locale];

  return (
    <LocalizedArticle
      article={content.article}
      path={localizedRobloxArticlePaths[locale]}
      relatedService={{ label: content.service.previewTitle, href: localizedRobloxServicePaths[locale] }}
      whatsappText={content.service.ctaText}
    />
  );
}
