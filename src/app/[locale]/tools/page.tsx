import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocalizedToolsClient } from "@/components/LocalizedToolsClient";
import { getLocalizedToolsCopy } from "@/content/localized/tools";
import { publicLocales, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const dynamic = "force-dynamic";

const toolsAlternates = {
  "he-IL": `${site.url}/tools`,
  "de-DE": `${site.url}/de/tools`,
  "ja-JP": `${site.url}/jp/tools`,
  ar: `${site.url}/ar/tools`,
  "hi-IN": `${site.url}/hi/tools`,
  "fr-FR": `${site.url}/fr/tools`,
  "zh-CN": `${site.url}/zh/tools`,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = getLocalizedToolsCopy(locale);
  const meta = siteLocales[locale as PublicLocale];
  if (!copy || !meta) return {};
  const url = `${site.url}/${locale}/tools`;

  return {
    title: { absolute: `${copy.pageTitle} | Navines` },
    description: copy.pageDescription,
    alternates: { canonical: url, languages: toolsAlternates },
    openGraph: { title: copy.pageTitle, description: copy.pageDescription, url, siteName: "Navines", locale: meta.ogLocale, type: "website" },
    twitter: { card: "summary_large_image", title: copy.pageTitle, description: copy.pageDescription },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedToolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getLocalizedToolsCopy(locale);
  if (!copy || !publicLocales.includes(locale as PublicLocale)) notFound();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20">
        <p className="mb-4 text-sm font-semibold text-glowred">{copy.eyebrow}</p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">{copy.pageTitle}</h1>
        <p className="mt-5 max-w-4xl text-base leading-8" style={{ color: "var(--text-muted)" }}>{copy.pageDescription}</p>
        <p className="mt-4 max-w-3xl text-sm leading-7" style={{ color: "var(--text-soft)" }}>{copy.privacyNote}</p>
        <LocalizedToolsClient copy={copy} />
      </section>

      <section className="tools-trust-band">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div><span>01</span><h2>{copy.tools.link.title}</h2><p>{copy.tools.link.summary}</p></div>
          <div><span>02</span><h2>{copy.tools.message.title}</h2><p>{copy.tools.message.summary}</p></div>
          <div><span>03</span><h2>{copy.tools.campaign.title}</h2><p>{copy.tools.campaign.summary}</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="tools-related-links">
          <Link href={`/${locale}`}><strong>{copy.homeLabel}</strong><span>{copy.pageDescription}</span></Link>
          <Link href="/tools"><strong>{copy.hebrewToolsLabel}</strong><span>נביא נס ישראל בע״מ</span></Link>
          <a href="https://checklink.ai" rel="noopener noreferrer" target="_blank"><strong>CheckLink.ai</strong><span>{copy.externalToolsLabel}</span></a>
        </div>
      </section>
    </main>
  );
}
