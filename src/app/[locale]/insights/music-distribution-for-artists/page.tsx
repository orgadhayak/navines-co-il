import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle } from "@/components/LocalizedArticle";
import { localizedMusicContent } from "@/content/localized/music-distribution";
import { localizedMusicArticlePaths, localizedMusicServicePaths, musicArticleAlternates, publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!publicLocales.includes(rawLocale as PublicLocale)) return {};
  const locale = rawLocale as PublicLocale;
  const article = localizedMusicContent[locale].article;
  const path = localizedMusicArticlePaths[locale];
  const meta = siteLocales[locale];

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `${site.url}${path}`, languages: musicArticleAlternates },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: `${site.url}${path}`, locale: meta.ogLocale, type: "article" },
  };
}

export default async function LocalizedMusicArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!publicLocales.includes(rawLocale as PublicLocale)) notFound();
  const locale = rawLocale as PublicLocale;
  const content = localizedMusicContent[locale];

  return (
    <LocalizedArticle
      article={content.article}
      path={localizedMusicArticlePaths[locale]}
      relatedService={{ label: content.service.previewTitle, href: localizedMusicServicePaths[locale] }}
      whatsappText={content.service.ctaText}
    />
  );
}
