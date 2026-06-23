import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { OptimizationHubShowcase } from "@/components/OptimizationHubShowcase";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "מרכז אופטימיזציה לאתרים, חנויות ותשתיות",
  description: "מרכז האופטימיזציה של נביא נס ישראל בע״מ: מהירות, מובייל, קוד, שרתים, קלאודפלייר, אבטחה, ניטור, מיילים ותמונות, בשפה עסקית וברורה.",
  path: "/optimization-hub",
});

export default function OptimizationHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "מרכז אופטימיזציה", href: "/optimization-hub" }])} />
      <Section eyebrow="מרכז אופטימיזציה" title="אתר מהיר, יציב וברור יותר מתחיל מתשתית שמטופלת נכון" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">
          אם האתר נטען לאט, לקוחות עוזבים לפני שהם בכלל מבינים מה אתם מציעים. אם טופס לא שולח, חנות נטענת לאט,
          מיילים מגיעים לספאם או האתר נשבר אחרי עדכון, זו כבר לא רק בעיה טכנית. זו בעיה עסקית. מרכז האופטימיזציה של
          {` ${site.hebrewLegalName} `} מסדר את כל השכבות האלה בעברית פשוטה: בודקים איפה העסק נתקע, מתקנים צווארי בקבוק
          ומשפרים את החוויה כדי שהאתר יעבוד מהר, ברור ויציב יותר.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="btn-primary" href={site.whatsappHref}>
            דברו איתנו בוואטסאפ
          </a>
          <a className="btn-secondary" href="https://analyze.navines.com" rel="noreferrer" target="_blank">
            בדקו את האתר שלכם
          </a>
        </div>
      </Section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <OptimizationHubShowcase />
      </section>
      <CTA
        title="רוצים לדעת מה באמת תוקע את האתר, החנות או המערכת?"
        text="שלחו לנו הודעה קצרה בוואטסאפ עם כתובת האתר ומה מפריע לכם. נחזור עם כיוון ברור ונגיד מה כדאי לבדוק קודם."
      />
    </>
  );
}
