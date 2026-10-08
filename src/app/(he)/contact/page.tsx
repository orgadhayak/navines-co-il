import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "יצירת קשר",
  description: "דברו עם נביא נס ישראל בע\"מ בוואטסאפ, מייל או טלפון לגבי אתר, חנות, מערכת, אוטומציה או שיפור תשתית דיגיטלית.",
  path: "/contact",
});

const contactActions = [
  {
    label: "שלחו וואטסאפ",
    href: site.whatsappHref,
    className: "btn-primary",
  },
  {
    label: "שלחו מייל",
    href: site.emailHref,
    className: "btn-secondary",
  },
  {
    label: "התקשרו עכשיו",
    href: site.phoneHref,
    className: "btn-secondary",
  },
];

export default function ContactPage() {
  return (
    <Section eyebrow="יצירת קשר" title="שלחו הודעה קצרה ונכוון אתכם" titleAs="h1" className="lg:py-14">
      <div className="max-w-5xl border-y py-8" style={{ borderColor: "var(--border)" }}>
        <div>
          <div>
            <p className="max-w-2xl text-xl leading-9 text-zinc-200">
              לא צריך להכין מסמך ארוך. כתבו לנו בוואטסאפ מה יש לכם היום ומה הייתם רוצים לשפר: אתר, חנות, מערכת, אוטומציה, מהירות או אבטחה. שיחת ההיכרות חינם וחברית, אנחנו מפתח תקווה, מחכים לשמוע מכם וגם אפשר להיפגש אם זה מה שנכון לפרויקט.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {contactActions.map((action) => {
                return (
                  <a className={`${action.className} justify-center`} href={action.href} key={action.href}>
                    {action.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-10 grid gap-8 border-t pt-7 text-base text-zinc-300 sm:grid-cols-2" style={{ borderColor: "var(--border)" }}>
              <div>
                <strong className="block text-lg text-white">{site.hebrewLegalName}</strong>
                <span className="mt-2 block">{site.companyNumberLabel}</span>
                <span className="mt-2 block">{site.hebrewAddress}</span>
              </div>

              <div className="sm:border-r sm:pr-8" style={{ borderColor: "var(--border)" }}>
                <a className="english-tech block font-semibold text-white transition hover:text-glowred" dir="ltr" href={site.phoneHref}>
                  {site.phone}
                </a>
                <a className="english-tech mt-2 block font-semibold text-white transition hover:text-glowred" dir="ltr" href={site.emailHref}>
                  {site.email}
                </a>
                <a
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-glowred transition hover:text-white"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.hebrewAddress)}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  פתיחה במפה
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
