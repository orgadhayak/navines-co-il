import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import type { LocalizedMusicContent } from "@/content/localized/music-distribution";
import { localizedMusicArticlePaths, localizedMusicServicePaths, siteLocales } from "@/i18n/locales";
import { site } from "@/data/site";

const artistProfiles = [
  { label: "YouTube", href: "https://www.youtube.com/@raneno.official" },
  { label: "YouTube Music", href: "https://music.youtube.com/channel/UCG_ksW1JAPOzBl3wXgfK8xw" },
  { label: "Spotify", href: "https://open.spotify.com/artist/6dAsJpPkTJK8ONY4HN1Vs7" },
  { label: "Apple Music", href: "https://music.apple.com/il/artist/%D7%94%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%A9%D7%9C-%D7%A8%D7%A0%D7%A0%D7%95/1861554140" },
  { label: "Shazam", href: "https://www.shazam.com/artist/%D7%94%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%A9%D7%9C-%D7%A8%D7%A0%D7%A0%D7%95/1861554140" },
];

export function LocalizedMusicDistribution({ content }: { content: LocalizedMusicContent }) {
  const locale = siteLocales[content.locale];
  const path = localizedMusicServicePaths[content.locale];
  const url = `${site.url}${path}`;
  const whatsappHref = `${site.whatsappHref}?text=${encodeURIComponent(content.service.ctaText)}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.service.title,
    description: content.service.metaDescription,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
    serviceType: "Music distribution preparation, artist digital presence and release management",
    inLanguage: locale.lang,
    url,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Navines", item: `${site.url}/${content.locale}` },
      { "@type": "ListItem", position: 2, name: content.service.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-glowred">{content.service.eyebrow}</p>
            <h1 className="mt-4 hyphens-auto break-words text-4xl font-semibold leading-tight text-white [overflow-wrap:anywhere] md:text-6xl">{content.service.title}</h1>
            <p className="mt-6 max-w-4xl text-xl leading-9" style={{ color: "var(--text-muted)" }}>{content.service.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href={whatsappHref} rel="noopener noreferrer" target="_blank">{content.service.ctaLabel}</a>
              <a className="btn-secondary" href={artistProfiles[2].href} rel="noopener noreferrer" target="_blank">Raneno Project · Spotify</a>
            </div>
          </div>
          <aside className="mt-10 border-y py-6 lg:mt-0" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm font-semibold text-glowred">Raneno Project</p>
            <h2 className="mt-3 text-2xl font-semibold">{content.service.caseTitle}</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{content.service.caseText}</p>
            <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-soft)" }}>{content.service.caseNote}</p>
          </aside>
        </section>

        <LocalizedSection title={content.service.workTitle}>
          <div className="grid gap-x-9 md:grid-cols-2">
            {content.service.work.map((item) => <p className="border-t py-5 text-lg leading-8" key={item} style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>{item}</p>)}
          </div>
        </LocalizedSection>

        <LocalizedSection title={content.service.caseTitle}>
          <p className="max-w-4xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>{content.service.caseText}</p>
          <p className="mt-3 max-w-4xl text-sm leading-6" style={{ color: "var(--text-soft)" }}>{content.service.caseNote}</p>
          <nav aria-label={content.service.profilesLabel} className="mt-6 flex flex-wrap gap-3">
            {artistProfiles.map((profile) => <a className="btn-secondary" href={profile.href} key={profile.label} rel="noopener noreferrer" target="_blank">{profile.label}</a>)}
          </nav>
        </LocalizedSection>

        <LocalizedSection title={content.service.valueTitle}>
          <div className="grid gap-x-9 md:grid-cols-2">
            {content.service.value.map((item) => <p className="border-t py-5 text-lg leading-8" key={item} style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>{item}</p>)}
          </div>
        </LocalizedSection>

        <LocalizedSection title={content.service.processTitle}>
          <ol className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {content.service.process.map((step, index) => (
              <li className="border-t py-5" key={step.title} style={{ borderColor: "var(--border)" }}>
                <span className="text-sm font-semibold text-glowred">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
                <p className="mt-3 leading-7" style={{ color: "var(--text-muted)" }}>{step.text}</p>
              </li>
            ))}
          </ol>
        </LocalizedSection>

        <LocalizedSection title={content.service.faqTitle}>
          <div className="grid gap-3">
            {content.service.faqs.map((faq) => (
              <details className="border-t py-4" key={faq.question} style={{ borderColor: "var(--border)" }}>
                <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                <p className="mt-3 max-w-4xl leading-7" style={{ color: "var(--text-muted)" }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </LocalizedSection>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="border-y py-8 md:flex md:items-end md:justify-between md:gap-10" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold">{content.service.ctaTitle}</h2>
              <p className="mt-3 text-lg leading-8" style={{ color: "var(--text-muted)" }}>{content.service.ctaText}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <a className="btn-primary" href={whatsappHref} rel="noopener noreferrer" target="_blank">{content.service.ctaLabel}</a>
              <Link className="btn-secondary" href={localizedMusicArticlePaths[content.locale]}>{content.service.articleLabel}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function LocalizedSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="mb-7 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {children}
    </section>
  );
}
