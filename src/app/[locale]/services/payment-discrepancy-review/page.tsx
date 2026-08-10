import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedFinancialReview } from "@/components/LocalizedFinancialReview";
import { localizedFinancialReviewContent } from "@/content/localized/payment-discrepancy-review";
import { site } from "@/data/site";
import { financialReviewServiceAlternates, publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = localizedFinancialReviewContent[locale as PublicLocale];
  if (!content) return {};
  const localeMeta = siteLocales[content.locale];
  const path = `/${content.locale}/services/payment-discrepancy-review`;
  const url = `${site.url}${path}`;
  return {
    title: { absolute: content.service.metaTitle },
    description: content.service.metaDescription,
    alternates: { canonical: url, languages: financialReviewServiceAlternates },
    openGraph: { title: content.service.metaTitle, description: content.service.metaDescription, url, siteName: "Navines", locale: localeMeta.ogLocale, type: "website" },
    twitter: { card: "summary_large_image", title: content.service.metaTitle, description: content.service.metaDescription },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedFinancialReviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = localizedFinancialReviewContent[locale as PublicLocale];
  if (!content) notFound();
  return <LocalizedFinancialReview content={content} />;
}
