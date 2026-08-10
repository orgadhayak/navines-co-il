import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import { localizedAffiliateArticlePaths, siteLocales } from "@/i18n/locales";
import type { LocalizedAffiliateProgramContent } from "@/content/localized/affiliate-program";

export function LocalizedAffiliateProgram({ content }: { content: LocalizedAffiliateProgramContent }) {
  const { locale, service } = content;
  const localeMeta = siteLocales[locale];
  const servicePath = `/${locale}/services/affiliate-program-platform`;
  const articlePath = localizedAffiliateArticlePaths[locale];
  const url = `${site.url}${servicePath}`;
  const whatsappHref = `${site.whatsappHref}?text=${encodeURIComponent(whatsappMessages[locale])}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: { "@id": `${site.url}/#organization`, name: "Navines" },
    areaServed: "Worldwide",
    inLanguage: localeMeta.lang,
    url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Navines", item: `${site.url}/${locale}` },
      { "@type": "ListItem", position: 2, name: service.title, item: url },
    ],
  };

  return (
    <main>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-glowred">{service.eyebrow}</p>
          <h1 className="mt-3 hyphens-auto break-words text-4xl font-semibold leading-tight text-white [overflow-wrap:anywhere] md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href={whatsappHref} rel="noopener noreferrer" target="_blank">{service.ctaLabel}</a>
            <Link className="btn-secondary" href={articlePath}>{service.articleLabel}</Link>
          </div>
        </div>
      </section>

      <ContentSection title={service.capabilitiesTitle}>
        <div className="grid gap-x-10 md:grid-cols-2">
          {service.capabilities.map((item, index) => (
            <div className="border-t py-5" key={item} style={{ borderColor: "var(--border)" }}>
              <span className="editorial-index text-sm">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-lg leading-8" style={{ color: "var(--text-muted)" }}>{item}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title={service.valueTitle}>
        <div className="max-w-4xl space-y-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          {service.value.map((item) => <p key={item}>{item}</p>)}
        </div>
      </ContentSection>

      <ContentSection title={service.processTitle}>
        <ol className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <li className="border-t py-5" key={step.title} style={{ borderColor: "var(--border)" }}>
              <span className="editorial-index text-sm">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
              <p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>{step.text}</p>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection title={service.faqTitle}>
        <div className="max-w-4xl divide-y" style={{ borderColor: "var(--border)" }}>
          {service.faqs.map((faq) => (
            <details className="py-5" key={faq.question}>
              <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
              <p className="mt-3 leading-8" style={{ color: "var(--text-muted)" }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </ContentSection>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="border-y py-10 lg:flex lg:items-end lg:justify-between lg:gap-10" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{service.ctaTitle}</h2>
            <p className="mt-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>{service.ctaText}</p>
          </div>
          <a className="btn-primary mt-6 shrink-0 lg:mt-0" href={whatsappHref} rel="noopener noreferrer" target="_blank">{service.ctaLabel}</a>
        </div>
      </section>
    </main>
  );
}

function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

const whatsappMessages = {
  de: "Hallo Navines, ich möchte ein Partnerprogramm für meine bestehende Website besprechen.",
  jp: "Navines、既存サイト向けのパートナープログラムについて相談したいです。",
  ar: "مرحباً Navines، أريد مناقشة برنامج شركاء لموقعي الحالي.",
  hi: "नमस्ते Navines, मैं अपनी मौजूदा वेबसाइट के लिए पार्टनर प्रोग्राम पर बात करना चाहता हूँ।",
  fr: "Bonjour Navines, je souhaite discuter d’un programme partenaire pour mon site existant.",
  zh: "您好 Navines，我想咨询为现有网站建立合作伙伴计划。",
};
