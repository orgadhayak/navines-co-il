import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { localizedArticlePaths, siteLocales } from "@/i18n/locales";
import { site } from "@/data/site";
import type { LocalizedArticleContent } from "@/content/localized/types";

function whatsappHref(locale: LocalizedArticleContent["locale"]) {
  const messages = {
    de: "Hallo NAVINES, ich habe den Artikel gelesen und möchte über KI-Automatisierung sprechen.",
    jp: "NAVINESの記事を読みました。AI自動化について相談したいです。",
    ar: "مرحباً NAVINES، قرأت المقال وأريد مناقشة أتمتة الذكاء الاصطناعي.",
    hi: "नमस्ते NAVINES, मैंने लेख पढ़ा है और AI ऑटोमेशन पर बात करना चाहता हूँ।",
    fr: "Bonjour NAVINES, j’ai lu l’article et je souhaite parler d’automatisation par l’IA.",
    zh: "您好 NAVINES，我阅读了文章，想咨询 AI 自动化。",
  };

  return `${site.whatsappHref}?text=${encodeURIComponent(messages[locale])}`;
}

const faqLabels: Record<LocalizedArticleContent["locale"], string> = {
  de: "Häufige Fragen",
  jp: "よくある質問",
  ar: "أسئلة شائعة",
  hi: "अक्सर पूछे जाने वाले सवाल",
  fr: "Questions fréquentes",
  zh: "常见问题",
};

export function LocalizedArticle({ article }: { article: LocalizedArticleContent }) {
  const locale = siteLocales[article.locale];
  const path = localizedArticlePaths[article.locale];
  const url = `${site.url}${path}`;
  const landingHref = `/${article.locale}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "NAVINES", url: site.url },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: url,
    inLanguage: locale.lang,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "NAVINES", item: `${site.url}${landingHref}` },
      { "@type": "ListItem", position: 2, name: article.title, item: url },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Link className="text-sm font-semibold text-glowred" href={landingHref}>NAVINES</Link>
        <h1 className="mt-4 hyphens-auto break-words text-4xl font-semibold leading-tight text-white [overflow-wrap:anywhere] md:text-6xl">{article.title}</h1>
        <div className="mt-5 flex flex-wrap gap-3 text-sm" style={{ color: "var(--text-soft)" }}>
          <span>{article.author}</span>
          <span>{article.publishedAt}</span>
          <span>{article.updatedAt}</span>
        </div>
        <p className="mt-6 hyphens-auto break-words text-xl leading-9 [overflow-wrap:anywhere]" style={{ color: "var(--text-muted)" }}>{article.excerpt}</p>

        <div className="mt-12 space-y-12">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2 className="hyphens-auto break-words text-3xl font-semibold leading-tight [overflow-wrap:anywhere]">{section.title}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-lg border p-6" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
          <h2 className="text-3xl font-semibold">{article.cta.title}</h2>
          <p className="mt-3 text-lg leading-8" style={{ color: "var(--text-muted)" }}>{article.cta.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={whatsappHref(article.locale)} rel="noopener noreferrer" target="_blank">{article.cta.whatsappLabel}</a>
            <a className="btn-secondary" href={`mailto:hello@navines.com?subject=${encodeURIComponent(article.title)}`}>{article.cta.emailLabel}</a>
            <Link className="btn-secondary" href={landingHref}>NAVINES</Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold">{faqLabels[article.locale]}</h2>
          <div className="mt-5 grid gap-3">
            {article.faqs.map((faq) => (
              <details className="rounded-lg border p-4" key={faq.question} style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <summary className="font-semibold">{faq.question}</summary>
                <p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
