import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle } from "@/components/LocalizedArticle";
import { localizedAffiliateProgramContent } from "@/content/localized/affiliate-program";
import { affiliateArticleAlternates, localizedAffiliateArticlePaths, localizedAffiliateServicePaths, publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = localizedAffiliateProgramContent[locale as PublicLocale];
  if (!content) return {};
  const localeMeta = siteLocales[content.locale];
  const path = localizedAffiliateArticlePaths[content.locale];
  const url = `${site.url}${path}`;

  return {
    title: { absolute: content.article.metaTitle },
    description: content.article.metaDescription,
    alternates: { canonical: url, languages: affiliateArticleAlternates },
    openGraph: { title: content.article.metaTitle, description: content.article.metaDescription, url, siteName: "Navines", locale: localeMeta.ogLocale, type: "article" },
    twitter: { card: "summary_large_image", title: content.article.metaTitle, description: content.article.metaDescription },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedAffiliateArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = localizedAffiliateProgramContent[locale as PublicLocale];
  if (!content) notFound();

  return <LocalizedArticle article={content.article} path={localizedAffiliateArticlePaths[content.locale]} relatedService={{ label: content.service.title, href: localizedAffiliateServicePaths[content.locale] }} />;
}
