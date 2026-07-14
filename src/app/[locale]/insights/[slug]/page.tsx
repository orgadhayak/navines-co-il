import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle } from "@/components/LocalizedArticle";
import { getLocalizedContent } from "@/content/localized";
import { articleAlternates, localizedArticlePaths, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getLocalizedContent(locale);
  const expectedPath = localizedArticlePaths[locale as PublicLocale];
  if (!content || !expectedPath || expectedPath.split("/").pop() !== slug) return {};
  const meta = siteLocales[locale as PublicLocale];
  const url = `${site.url}${expectedPath}`;

  return {
    title: { absolute: content.article.metaTitle },
    description: content.article.metaDescription,
    alternates: {
      canonical: url,
      languages: articleAlternates,
    },
    openGraph: {
      title: content.article.metaTitle,
      description: content.article.metaDescription,
      url,
      siteName: "NAVINES",
      locale: meta.ogLocale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: content.article.metaTitle,
      description: content.article.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const content = getLocalizedContent(locale);
  const expectedPath = localizedArticlePaths[locale as PublicLocale];
  if (!content || !expectedPath || expectedPath.split("/").pop() !== slug) notFound();

  return <LocalizedArticle article={content.article} />;
}
