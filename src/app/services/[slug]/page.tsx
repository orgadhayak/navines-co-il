import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { services, site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const isChatGptDataService = service.slug === "chatgpt-business-data";
  const isAiChatService = service.slug === "ai-chat-for-websites";
  const isTechnicalSupportService = service.slug === "technical-support-cyber-networks";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: site.hebrewLegalName, url: site.url },
    areaServed: "IL",
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "שירותים", href: "/services" }, { name: service.title, href: `/services/${service.slug}` }])} />
      <Section eyebrow={service.eyebrow} title={service.title} titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">{service.summary}</p>
      </Section>
      <Section>
        <div className="grid gap-5">
          {isTechnicalSupportService ? (
            <article className="rounded-[1.5rem] border border-red-300/25 bg-red-950/28 p-5 shadow-[0_0_42px_rgba(239,68,68,0.14)]">
              <span className="inline-flex rounded-full border border-red-200/30 bg-red-500/16 px-4 py-1 text-sm font-black text-red-100 shadow-[0_0_22px_rgba(248,113,113,0.18)]">
                תקלה דחופה
              </span>
              <h2 className="mt-4 text-3xl font-black text-white">תקלה דחופה? אל תחכו</h2>
              <p className="mt-3 text-lg leading-8 text-red-50/90"> אם האתר נפל, המיילים לא עובדים, יש חשד לפריצה, בעיית דומיין, בעיית רשת או תקלה שמפריעה לעסק לעבוד, שלחו לנו הודעה עכשיו בוואטסאפ ונבדוק איך אפשר לעזור. </p>
              <a className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-red-100/35 bg-red-500/20 px-6 py-2.5 text-base font-black text-white transition hover:bg-red-500/30" href={site.whatsappHref}>
                תמיכה דחופה בוואטסאפ
              </a>
            </article>
          ) : null}
          <InfoBlock title="מה השירות?" items={[service.summary]} />
          <InfoBlock title="למי זה מתאים?" items={service.audience} />
          <InfoBlock title="מה עושים בפועל ודוגמה פשוטה" items={service.actions} />
          <InfoBlock title="בעיות שאנחנו פותרים" items={service.problems} />
          <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
            <h2 className="text-2xl font-black text-white">תהליך עבודה</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {["שיחת אפיון", "מיפוי מצב קיים", "תכנון פתרון", "פיתוח וביצוע", "בדיקות ושיפור", "השקה וליווי"].map((step, index) => (
                <div className="rounded-premium border border-white/10 bg-black/20 p-4" key={step}>
                  <span className="grid h-9 w-9 place-items-center rounded-premium bg-navred font-black text-white">{index + 1}</span>
                  <h3 className="mt-3 font-black text-white">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">עובדים מסודר, מודדים ומתקדמים לפי ערך עסקי.</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
            <h2 className="text-2xl font-black text-white">שאלות נפוצות</h2>
            <div className="mt-5 grid gap-3">
              {service.faqs.map((faq) => (
                <details className="rounded-premium border border-white/10 bg-black/20 p-4" key={faq.question}>
                  <summary className="cursor-pointer font-black text-silver">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-zinc-400">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </Section>
      <CTA
        title={isAiChatService ? "רוצים צ׳ט AI כזה באתר שלכם?" : isTechnicalSupportService ? "צריכים תמיכה טכנית עכשיו?" : isChatGptDataService ? "רוצים לדבר עם הנתונים של העסק שלכם דרך ChatGPT?" : `רוצים לבדוק אם ${service.title} מתאים לעסק שלכם?`}
        text={isAiChatService ? "דברו איתנו בוואטסאפ. שלחו כתובת אתר או תיאור קצר של העסק, ונבדוק איזה צ׳ט קצר, ברור ומדויק יכול לעזור לגולשים שלכם." : isTechnicalSupportService ? "שלחו הודעה בוואטסאפ עם התקלה, מה הפסיק לעבוד ומה דחוף. נבדוק אם אפשר לעזור מרחוק או אם נדרשת הגעה לפי צורך." : isChatGptDataService ? "שלחו לנו איזו מערכת יש לכם ונבדוק איך אפשר לחבר אותה: שופיפיי, ווקומרס, אמזון, איביי, CRM, ERP, גוגל אנליטיקס, מלאי, הזמנות או מערכת פנימית. לא בטוחים אם זה אפשרי? כתבו לנו ונכוון אתכם." : "כתבו לנו בוואטסאפ מה קיים אצלכם היום ומה הייתם רוצים לשפר. נחזור עם כיוון פשוט, ברור ומעשי."}
      />
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
