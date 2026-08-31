import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedAffiliateProgram } from "@/components/LocalizedAffiliateProgram";
import { localizedAffiliateProgramContent } from "@/content/localized/affiliate-program";
import { affiliateServiceAlternates, publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = localizedAffiliateProgramContent[locale as PublicLocale];
  if (!content) return {};
  const localeMeta = siteLocales[content.locale];
  const path = `/${content.locale}/services/affiliate-program-platform`;
  const url = `${site.url}${path}`;

  return {
    title: { absolute: content.service.metaTitle },
    description: content.service.metaDescription,
    alternates: { canonical: url, languages: affiliateServiceAlternates },
    openGraph: { title: content.service.metaTitle, description: content.service.metaDescription, url, siteName: "Navines", locale: localeMeta.ogLocale, type: "website" },
    twitter: { card: "summary_large_image", title: content.service.metaTitle, description: content.service.metaDescription },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedAffiliateServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = localizedAffiliateProgramContent[locale as PublicLocale];
  if (!content) notFound();

  return <LocalizedAffiliateProgram content={content} />;
}
