import type { Metadata, Viewport } from "next";
import { SiteDocument, siteMetadata, siteViewport } from "@/components/SiteDocument";
import { siteLocales } from "@/i18n/locales";
import "../globals.css";

export const revalidate = 3600;
export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function HebrewLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale={siteLocales.he}>{children}</SiteDocument>;
}
