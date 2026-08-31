import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedRobloxExperience } from "@/components/LocalizedRobloxExperience";
import { localizedRobloxContent } from "@/content/localized/roblox-brand-experiences";
import { localizedRobloxServicePaths, publicLocales, robloxServiceAlternates, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return publicLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!publicLocales.includes(rawLocale as PublicLocale)) return {};
  const locale = rawLocale as PublicLocale;
  const content = localizedRobloxContent[locale].service;
  const path = localizedRobloxServicePaths[locale];
  const meta = siteLocales[locale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `${site.url}${path}`, languages: robloxServiceAlternates },
    openGraph: { title: content.metaTitle, description: content.metaDescription, url: `${site.url}${path}`, locale: meta.ogLocale, type: "website" },
  };
}

export default async function LocalizedRobloxServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!publicLocales.includes(rawLocale as PublicLocale)) notFound();
  return <LocalizedRobloxExperience content={localizedRobloxContent[rawLocale as PublicLocale]} />;
}
