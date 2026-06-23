import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "יצירת קשר",
  description: "צרו קשר עם נביא נס ישראל בע״מ בוואטסאפ, במייל או בטלפון. ח.פ. 516647161, וינקלר אלתר 8 פתח תקווה.",
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
    <Section eyebrow="יצירת קשר" title="דברו איתנו זריז" titleAs="h1" className="lg:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="sparkle-field relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-premium sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(216,180,254,0.22),transparent_18rem)]" aria-hidden="true" />
          <div className="relative">
            <p className="max-w-2xl text-xl leading-9 text-zinc-200">
              בלי טפסים ובלי סיבוכים. כתבו לנו בוואטסאפ או במייל מה אתם רוצים לבנות, לשפר או לחבר, ונחזור אליכם עם כיוון ברור.
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

            <div className="mt-8 grid gap-4 text-base text-zinc-300 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                <strong className="block text-lg text-white">{site.hebrewLegalName}</strong>
                <span className="mt-2 block">{site.companyNumberLabel}</span>
                <span className="mt-2 block">{site.hebrewAddress}</span>
              </div>

              <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                <a className="block font-black text-white transition hover:text-glowred" href={site.phoneHref}>
                  {site.phone}
                </a>
                <a className="mt-2 block font-black text-white transition hover:text-glowred" href={site.emailHref}>
                  {site.email}
                </a>
                <a
                  className="mt-4 inline-flex items-center gap-2 text-sm font-black text-glowred transition hover:text-white"
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
