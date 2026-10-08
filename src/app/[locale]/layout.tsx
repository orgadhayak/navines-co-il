import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { SiteDocument, siteMetadata, siteViewport } from "@/components/SiteDocument";
import { publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";
import "../globals.css";

export const revalidate = 3600;
export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default async function LocalizedLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!publicLocales.includes(locale as PublicLocale)) notFound();
  return <SiteDocument locale={siteLocales[locale as PublicLocale]}>{children}</SiteDocument>;
}
