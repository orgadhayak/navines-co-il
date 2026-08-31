import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedLanding } from "@/components/LocalizedLanding";
import { getLocalizedContent } from "@/content/localized";
import { landingAlternates, publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = getLocalizedContent(locale);
  if (!content) return {};
  const meta = siteLocales[locale as PublicLocale];
  const url = `${site.url}/${locale}`;

  return {
    title: { absolute: content.landing.metaTitle },
    description: content.landing.metaDescription,
    alternates: {
      canonical: url,
      languages: landingAlternates,
    },
    openGraph: {
      title: content.landing.metaTitle,
      description: content.landing.metaDescription,
      url,
      siteName: "Navines",
      locale: meta.ogLocale,
      type: "website",
      images: [{ url: "/og-navines-israel.jpg", width: 1106, height: 746, alt: "Navines digital systems and AI" }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.landing.metaTitle,
      description: content.landing.metaDescription,
      images: ["/og-navines-israel.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = getLocalizedContent(locale);
  if (!content) notFound();

  return <LocalizedLanding content={content.landing} />;
}
