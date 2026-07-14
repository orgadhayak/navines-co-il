import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { LanguageStrip } from "@/components/LanguageStrip";
import { siteLocales } from "@/i18n/locales";
import { site } from "@/data/site";
import type { LocalizedLandingContent } from "@/content/localized/types";

function whatsappHref(text: string) {
  return `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
}

function emailHref(subject: string) {
  return `mailto:hello@navines.com?subject=${encodeURIComponent(subject)}`;
}

export function LocalizedLanding({ content }: { content: LocalizedLandingContent }) {
  const locale = siteLocales[content.locale];
  const pageUrl = `${site.url}/${content.locale}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NAVINES",
    url: pageUrl,
    email: "hello@navines.com",
    telephone: "+972-54-818-0200",
    areaServed: "Worldwide",
    inLanguage: locale.lang,
    description: content.metaDescription,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "NAVINES", item: pageUrl },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <main>
        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-16">
          <div>
            <p className="mb-4 text-sm font-semibold text-glowred">{content.hero.eyebrow}</p>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">{content.hero.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">{content.hero.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href={whatsappHref(content.contact.whatsappText)} rel="noopener noreferrer" target="_blank" aria-label={content.contact.whatsappLabel}>
                {content.hero.primaryCta}
              </a>
              <a className="btn-secondary" href="#services">{content.hero.secondaryCta}</a>
            </div>
          </div>
          <aside className="hidden rounded-lg border p-6 md:block" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
            <p className="text-base leading-7" style={{ color: "var(--text-muted)" }}>{content.trust}</p>
            <div className="mt-6 grid gap-3">
              {content.services.items.slice(0, 4).map((item) => (
                <a className="border-b pb-3 text-base font-medium transition hover:text-sky-700" href="#services" key={item.title} style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                  {item.title}
                </a>
              ))}
            </div>
          </aside>
        </section>

        <LocalizedSection id="services" eyebrow="NAVINES" title={content.services.title}>
          <p className="max-w-3xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>{content.services.intro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((item) => (
              <div className="border-t pt-5" key={item.title} style={{ borderColor: "var(--border)" }}>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </LocalizedSection>

        <LocalizedSection id="solutions" title={content.solutions.title}>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.solutions.items.map((item) => (
              <div className="command-glass p-5" key={item.title}>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </LocalizedSection>

        <LocalizedSection id="process" title={content.process.title}>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.steps.map((step, index) => (
              <li className="min-w-0 border-t pt-5" key={step.title} style={{ borderColor: "var(--border)" }}>
                <span className="text-sm font-semibold text-glowred">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 break-words text-xl font-semibold">{step.title}</h2>
                <p className="mt-3 break-words text-base leading-7" style={{ color: "var(--text-muted)" }}>{step.text}</p>
              </li>
            ))}
          </ol>
        </LocalizedSection>

        <LocalizedSection id="why" title={content.why.title}>
          <div className="max-w-4xl space-y-4 text-lg leading-8" style={{ color: "var(--text-muted)" }}>
            {content.why.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </LocalizedSection>

        <LocalizedSection id="insights" title={content.insight.title}>
          <Link className="command-glass block max-w-3xl p-6" href={content.insight.href}>
            <h2 className="text-2xl font-semibold">{content.insight.title}</h2>
            <p className="mt-3 text-base leading-7" style={{ color: "var(--text-muted)" }}>{content.insight.text}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-glowred">{content.insight.cta}</span>
          </Link>
        </LocalizedSection>

        <LocalizedSection id="contact" title={content.contact.title}>
          <div className="rounded-lg border p-6 md:flex md:items-center md:justify-between md:gap-8" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
            <div>
              <p className="max-w-2xl text-lg leading-8" style={{ color: "var(--text-muted)" }}>{content.contact.text}</p>
              <p className="mt-3 text-sm" style={{ color: "var(--text-soft)" }}>hello@navines.com · +972-54-818-0200</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
              <a className="btn-primary" href={whatsappHref(content.contact.whatsappText)} rel="noopener noreferrer" target="_blank">{content.contact.whatsappLabel}</a>
              <a className="btn-secondary" href={emailHref(content.contact.emailSubject)}>{content.contact.emailLabel}</a>
            </div>
          </div>
        </LocalizedSection>
        <LanguageStrip compact current={content.locale} title="NAVINES" />
      </main>
    </>
  );
}

function LocalizedSection({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" id={id}>
      <div className="mb-7 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-sm font-semibold text-glowred">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
