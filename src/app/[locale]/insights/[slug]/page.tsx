import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedArticle } from "@/components/LocalizedArticle";
import { getLocalizedContent } from "@/content/localized";
import { localizedSafetyToolsArticles } from "@/content/localized/safety-tools";
import { getLocalizedToolsCopy } from "@/content/localized/tools";
import { articleAlternates, localizedArticlePaths, localizedSafetyToolsArticlePaths, safetyToolsArticleAlternates, siteLocales, type PublicLocale } from "@/i18n/locales";
import { site } from "@/data/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return (Object.keys(localizedArticlePaths) as PublicLocale[]).flatMap((locale) => [
    { locale, slug: localizedArticlePaths[locale].split("/").pop()! },
    { locale, slug: localizedSafetyToolsArticlePaths[locale].split("/").pop()! },
  ]);
}

const safetyToolsWhatsappMessages: Record<PublicLocale, string> = {
  de: "Hallo Navines, ich habe den Artikel über die lokalen Sicherheitswerkzeuge gelesen und möchte ein nützliches Werkzeug für unsere Website besprechen.",
  jp: "Navinesのローカル安全確認ツールの記事を読みました。自社サイト向けの実用的なツールについて相談したいです。",
  ar: "مرحباً نبي نس، قرأت مقال أدوات الفحص المحلية وأرغب في مناقشة أداة مفيدة لموقعنا.",
  hi: "नमस्ते Navines, मैंने स्थानीय सुरक्षा टूल वाला लेख पढ़ा है और अपनी वेबसाइट के लिए उपयोगी टूल पर बात करना चाहता हूँ।",
  fr: "Bonjour Navines, j’ai lu l’article sur les outils locaux de vérification et je souhaite discuter d’un outil utile pour notre site.",
  zh: "您好 Navines，我阅读了本地安全检查工具的文章，想咨询为我们的网站开发实用工具。",
};

function resolveArticle(localeValue: string, slug: string) {
  const locale = localeValue as PublicLocale;
  const content = getLocalizedContent(locale);
  const defaultPath = localizedArticlePaths[locale];
  if (content && defaultPath?.split("/").pop() === slug) return { article: content.article, path: defaultPath, alternates: articleAlternates };
  const safetyPath = localizedSafetyToolsArticlePaths[locale];
  const safetyArticle = localizedSafetyToolsArticles[locale];
  if (safetyArticle && safetyPath?.split("/").pop() === slug) return { article: safetyArticle, path: safetyPath, alternates: safetyToolsArticleAlternates };
  return undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = resolveArticle(locale, slug);
  if (!resolved) return {};
  const meta = siteLocales[locale as PublicLocale];
  const url = `${site.url}${resolved.path}`;

  return {
    title: { absolute: resolved.article.metaTitle },
    description: resolved.article.metaDescription,
    alternates: {
      canonical: url,
      languages: resolved.alternates,
    },
    openGraph: {
      title: resolved.article.metaTitle,
      description: resolved.article.metaDescription,
      url,
      siteName: "Navines",
      locale: meta.ogLocale,
      type: "article",
      images: [{ url: "/og-navines-israel.jpg", width: 1106, height: 746, alt: "Navines insight" }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolved.article.metaTitle,
      description: resolved.article.metaDescription,
      images: ["/og-navines-israel.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const resolved = resolveArticle(locale, slug);
  if (!resolved) notFound();
  const toolsCopy = getLocalizedToolsCopy(locale);
  const isSafetyToolsArticle = resolved.path === localizedSafetyToolsArticlePaths[locale as PublicLocale];

  return <LocalizedArticle article={resolved.article} path={resolved.path} relatedService={{ label: toolsCopy?.pageTitle || "Navines", href: `/${locale}/tools` }} whatsappText={isSafetyToolsArticle ? safetyToolsWhatsappMessages[locale as PublicLocale] : undefined} />;
}
