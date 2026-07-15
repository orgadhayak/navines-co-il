import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandInline } from "@/components/BrandInline";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { solutionPages } from "@/data/solutions";
import { site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

type AccountantConnection = NonNullable<(typeof solutionPages)[number]["accountantConnection"]>;

export function generateStaticParams() {
  return solutionPages.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionPages.find((item) => item.slug === slug);
  if (!solution) return {};

  return createMetadata({
    title: solution.title,
    description: solution.seoDescription,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionPages.find((item) => item.slug === slug);
  if (!solution) notFound();
  const isAmazonSellerSolution = solution.slug === "amazon-sellers";
  const showStandaloneTalkToData = solution.slug !== "freelancers";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.seoDescription,
    provider: { "@type": "Organization", name: site.hebrewLegalName, url: site.url },
    areaServed: "IL",
    serviceType: solution.navLabel,
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "בית", href: "/" },
          { name: "פתרונות", href: "/solutions" },
          { name: solution.navLabel, href: `/solutions/${solution.slug}` },
        ])}
      />

      <Section eyebrow={solution.eyebrow} title={solution.title} titleAs="h1" className="py-8 lg:py-12">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <p className="max-w-4xl text-lg leading-8 text-zinc-300">
              <BrandInline text={solution.summary} />
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href={site.whatsappHref}>
                דברו איתנו בוואטסאפ
              </a>
              <Link className="btn-secondary" href="/services/chatgpt-business-data">
                לדבר עם הנתונים
              </Link>
            </div>
          </div>
          <div className="command-glass rounded-[1.55rem] p-5">
            <p className="text-sm font-semibold text-glowred">ממשק חכם לעסק</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-white">{solution.talkToData.title}</h2>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              <BrandInline text={solution.talkToData.text} />
            </p>
          </div>
        </div>
      </Section>

      {solution.accountantConnection ? (
        <AccountantConnectionSection content={solution.accountantConnection} />
      ) : null}

      {solution.urgent ? (
        <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.6rem] border border-red-400/35 bg-gradient-to-br from-red-950/60 via-red-500/10 to-black p-5 shadow-[0_0_48px_rgba(239,68,68,0.18)]">
            <p className="text-sm font-semibold text-red-200">טיפול דחוף ומסודר</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-white">{solution.urgent.title}</h2>
            <p className="mt-3 max-w-5xl text-lg leading-8 text-red-50/90">
              <BrandInline text={solution.urgent.text} />
            </p>
            <a className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-red-200/35 bg-red-500/22 px-6 py-3 text-base font-semibold text-white shadow-[0_0_28px_rgba(239,68,68,0.24)] transition hover:-translate-y-0.5 hover:bg-red-500/30" href={site.whatsappHref}>
              {solution.urgent.cta}
            </a>
          </div>
        </section>
      ) : null}

      {solution.highlight ? (
        <Section eyebrow="שירות מלא" title={solution.highlight.title} className="py-5 lg:py-8">
          <p className="max-w-5xl text-lg leading-8 text-zinc-300">
            <BrandInline text={solution.highlight.text} />
          </p>
        </Section>
      ) : null}

      {isAmazonSellerSolution ? (
        <Section eyebrow="צמיחה מחוץ ל Amazon" title="אתר SEO עצמאי שמוביל לקוחות לעמודי המוצרים" className="py-5 lg:py-8">
          <Link className="command-glass group block rounded-[1.35rem] p-5 transition hover:-translate-y-0.5 hover:border-purple-200/45" href="/services/amazon-seller-seo-website">
            <h2 className="text-2xl font-semibold text-white">אתר צמיחה אורגנית למוכרי Amazon</h2>
            <p className="mt-3 max-w-4xl text-lg leading-8 text-zinc-300">
              בונים אתר בינלאומי שמציג את המוצרים, יוצר תוכן עשיר לפי מדינה ושפה, מושך תנועה ממנועי חיפוש ומפנה לקוחות לעמודי Amazon שלכם. זה לא מחליף את Amazon, אלא מוסיף שכבת צמיחה שנמצאת בשליטת המותג.
            </p>
            <span className="mt-4 inline-flex text-base font-semibold text-silver transition group-hover:text-white">
              לעמוד השירות
            </span>
          </Link>
        </Section>
      ) : null}

      <Section eyebrow="למי זה מתאים" title="מי מרוויח מהפתרון הזה?" className="py-5 lg:py-8">
        <CompactList items={solution.whoFor} />
      </Section>

      <Section eyebrow="מה זה פותר" title="פחות עבודה ידנית, יותר סדר ושליטה" className="py-5 lg:py-8">
        <CompactList items={solution.problems} />
      </Section>

      {showStandaloneTalkToData ? (
        <Section eyebrow="לדבר עם הנתונים" title={solution.talkToData.title} className="py-5 lg:py-8">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="command-glass rounded-[1.6rem] p-5">
              <p className="text-lg leading-8 text-zinc-300">
                <BrandInline text={solution.talkToData.text} />
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="btn-primary" href={site.whatsappHref}>
                  רוצים להבין מה אפשר לשאול? כתבו לנו
                </a>
                <a className="btn-secondary" href="https://talktodata.navines.com" rel="noreferrer" target="_blank"> לצפייה ב TalkToData </a>
              </div>
            </article>
            <article className="command-glass rounded-[1.6rem] p-5">
              <h2 className="text-2xl font-semibold text-white">דוגמאות לשאלות שאפשר לשאול</h2>
              <div className="mt-4 grid gap-2">
                {solution.talkToData.examples.map((example) => (
                  <div className="dashboard-row rounded-full px-4 py-3 text-base font-semibold text-zinc-200" key={example}>
                    {example}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Section>
      ) : null}

      <Section eyebrow="מה נביא נס בונה" title="פתרון קטן או מערכת מלאה, לפי מה שהעסק באמת צריך" className="py-5 lg:py-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoColumn title="שימושים מעשיים" items={solution.useCases} />
          <InfoColumn title="מה בונים בפועל" items={solution.builds} />
          <InfoColumn title="איך זה חוסך זמן" items={solution.savings} />
        </div>
      </Section>

      {solution.disclaimer ? (
        <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="rounded-[1.25rem] border border-purple-200/18 bg-purple-500/10 p-4 text-base leading-7 text-zinc-300">
            <strong className="text-white">חשוב לדעת: </strong>
            {solution.disclaimer}
          </div>
        </section>
      ) : null}

      <Section eyebrow="קישורים שימושיים" title="המשיכו למקומות שיעזרו להבין את התמונה" className="py-5 lg:py-8">
        <div className="flex flex-wrap gap-3">
          {solution.internalLinks.map((link) => (
            <Link className="tag hover:bg-purple-500/12" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="tag hover:bg-purple-500/12" href={`/blog/${solution.blogSlug}`}>
            מאמר קשור
          </Link>
        </div>
      </Section>

      <Section eyebrow="שאלות נפוצות" title="תשובות קצרות לפני שמתחילים" className="py-5 lg:py-8">
        <div className="grid gap-3">
          {solution.faq.map((faq) => (
            <details className="command-glass rounded-[1.25rem] p-4" key={faq.question}>
              <summary className="cursor-pointer text-xl font-semibold text-white">{faq.question}</summary>
              <p className="mt-3 text-base leading-7 text-zinc-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTA
        title="רוצים לבדוק אם זה מתאים לעסק שלכם?"
        text="שלחו לנו הודעה קצרה בוואטסאפ: מה העסק עושה, איפה הנתונים נמצאים ומה הייתם רוצים להבין מהר יותר. נענה בצורה פשוטה, חברית ומעשית."
      />
    </>
  );
}

function AccountantConnectionSection({ content }: { content: AccountantConnection }) {
  return (
    <>
      <Section eyebrow="חיבור לאיש מקצוע מתאים" title={content.title} className="py-5 lg:py-8">
        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <article className="command-glass rounded-xl p-5">
            <div className="grid gap-4 text-lg leading-8 text-zinc-300">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <BrandInline text={paragraph} />
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn-primary" href={site.whatsappHref}>
                צריכים חיבור לרואה חשבון מתאים? דברו איתנו בוואטסאפ
              </a>
              <a className="btn-secondary" href={site.phoneHref}>
                התקשרו עכשיו
              </a>
            </div>
          </article>
          <aside className="rounded-xl border border-purple-200/16 bg-black/40 p-5">
            <h2 className="text-2xl font-semibold text-white">פרטי קשר מהירים</h2>
            <div className="mt-4 grid gap-3 text-base text-zinc-300">
              <a className="font-semibold text-silver hover:text-white" href={site.phoneHref}>{site.phone}</a>
              <a className="font-semibold text-silver hover:text-white" href={site.emailHref}>{site.email}</a>
              <p>שלחו לנו בקצרה מה סוג העסק, איפה אתם מוכרים ומה צריך לסדר, ונכוון אתכם לשלב הבא.</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section eyebrow="אפיון לפני חיבור" title={content.checklistTitle} className="py-5 lg:py-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <InfoColumn title="מה אנחנו בודקים לפני שמכוונים" items={content.checklist} />
          <InfoColumn title="למי זה יכול להתאים" items={content.audiences} />
        </div>
      </Section>

      <Section eyebrow="בחירה רגועה ומקצועית" title={content.trustTitle} className="py-5 lg:py-8">
        <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          <article className="command-glass rounded-xl p-5">
            <p className="text-lg leading-8 text-zinc-300">
              <BrandInline text={content.trustText} />
            </p>
          </article>
          <InfoColumn title="סימנים שכדאי לבדוק לפני שמתקדמים" items={content.trustChecks} />
        </div>
      </Section>

      <Section eyebrow="תיאום ציפיות" title={content.pricingTitle} className="py-5 lg:py-8">
        <div className="rounded-xl border border-purple-200/16 bg-purple-500/8 p-5">
          <p className="max-w-5xl text-lg leading-8 text-zinc-300">
            <BrandInline text={content.pricingText} />
          </p>
        </div>
      </Section>

      <Section eyebrow="טכנולוגיה וחשבונאות" title={content.techTitle} className="py-5 lg:py-8">
        <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <article className="command-glass rounded-xl p-5">
            <p className="text-lg leading-8 text-zinc-300">
              <BrandInline text={content.techText} />
            </p>
            <div className="mt-5 grid gap-2 text-base font-semibold">
              <Link className="text-silver hover:text-white" href="/services/chatgpt-business-data">TalkToData וחיבור נתונים אל ChatGPT</Link>
              <Link className="text-silver hover:text-white" href="/blog/ai-invoice-scanning-and-filtering">מדריך סריקת חשבוניות עם AI</Link>
              <Link className="text-silver hover:text-white" href="/services/ai-automation">AI ואוטומציה לעסקים</Link>
              <Link className="text-silver hover:text-white" href="/solutions/amazon-sellers">פתרונות למוכרי Amazon</Link>
              <Link className="text-silver hover:text-white" href="/contact">יצירת קשר</Link>
            </div>
          </article>
          <InfoColumn title="איפה נביא נס יכולה לעזור בצד הטכנולוגי" items={content.techItems} />
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-purple-200/18 bg-black/55 p-4 text-base leading-7 text-zinc-300">
          <strong className="text-white">הבהרה חשובה: </strong>
          {content.disclaimer}
        </div>
      </section>
    </>
  );
}

function CompactList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div className="dashboard-row rounded-[1.2rem] p-4 text-lg leading-8 text-zinc-200" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

function InfoColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="command-glass rounded-[1.45rem] p-5">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li className="rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3 text-base leading-7 text-zinc-300" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
