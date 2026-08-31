import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle } from "@/components/LocalizedArticle";
import { localizedFinancialReviewContent } from "@/content/localized/payment-discrepancy-review";
import { site } from "@/data/site";
import { financialReviewArticleAlternates, localizedFinancialReviewArticlePaths, localizedFinancialReviewServicePaths, publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";

export const revalidate = 3600;

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = localizedFinancialReviewContent[locale as PublicLocale];
  if (!content) return {};
  const localeMeta = siteLocales[content.locale];
  const path = localizedFinancialReviewArticlePaths[content.locale];
  const url = `${site.url}${path}`;
  return {
    title: { absolute: content.article.metaTitle },
    description: content.article.metaDescription,
    alternates: { canonical: url, languages: financialReviewArticleAlternates },
    openGraph: { title: content.article.metaTitle, description: content.article.metaDescription, url, siteName: "Navines", locale: localeMeta.ogLocale, type: "article" },
    twitter: { card: "summary_large_image", title: content.article.metaTitle, description: content.article.metaDescription },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedFinancialReviewArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const publicLocale = locale as PublicLocale;
  const content = localizedFinancialReviewContent[publicLocale];
  if (!content) notFound();
  return <LocalizedArticle article={content.article} path={localizedFinancialReviewArticlePaths[publicLocale]} relatedService={{ label: content.service.title, href: localizedFinancialReviewServicePaths[publicLocale] }} whatsappText={content.service.ctaText} />;
}
