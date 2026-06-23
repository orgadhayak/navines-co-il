import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "יצירת קשר",
  description: "צרו קשר עם נביא נס ישראל: נביא נס ישראל בע\"מ, ח.פ. 516647161, וינקלר אלתר 8 פתח תקווה, 054-818-0200, hello@navines.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section eyebrow="יצירת קשר" title="רוצים לבנות משהו חכם יותר לעסק שלכם?" titleAs="h1">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-premium border border-white/10 bg-white/[0.045] p-6 shadow-premium">
          <p className="text-lg leading-8 text-zinc-300">ספרו לנו מה אתם רוצים לבנות, לשפר, לחבר או לאוטומט. נחזור אליכם עם כיוון ברור, שאלות נכונות והמלצה מעשית להמשך.</p>
          <div className="mt-6 grid gap-2 text-zinc-300">
            <strong className="text-white">{site.hebrewLegalName}</strong>
            <span>{site.companyNumberLabel}</span>
            <span>{site.hebrewAddress}</span>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <span>השאירו פרטים ונחזור אליכם בהקדם.</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={site.whatsappHref}>
              שלחו וואטסאפ
            </a>
            <a className="btn-secondary" href={site.phoneHref}>
              התקשרו עכשיו
            </a>
            <a className="btn-secondary" href={site.emailHref}>
              שלחו מייל
            </a>
          </div>
          <div className="mt-6 rounded-premium border border-white/10 bg-white/[0.035] p-6">
            <strong className="text-white">פתח תקווה</strong>
            <p className="mt-1 text-zinc-400">{site.hebrewAddress}</p>
            <a className="mt-3 inline-flex text-sm font-black text-glowred" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.hebrewAddress)}`}>
              פתיחה במפה
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
