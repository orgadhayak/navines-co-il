import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "תנאי שימוש", description: "תנאי שימוש בסיסיים באתר NAVINES ישראל.", path: "/terms" });

export default function TermsPage() {
  return (
    <Section eyebrow="תנאי שימוש" title="תנאי שימוש" titleAs="h1">
      <div className="grid gap-6 text-lg leading-8 text-zinc-300">
        <p>השימוש באתר מיועד לקבלת מידע כללי על שירותי NAVINES ישראל. התוכן באתר אינו מהווה התחייבות לתוצאה עסקית, טכנולוגית או שיווקית ללא הסכם פרטני.</p>
        <p>כל זכויות היוצרים בתוכן, בעיצוב ובמבנה האתר שמורות לנבינס ישראל בע״מ, אלא אם צוין אחרת.</p>
        <p>ייתכנו קישורים לאתרים חיצוניים. NAVINES ישראל אינה אחראית לתוכן או למדיניות של אתרים חיצוניים.</p>
        <p>לשאלות בנושא תנאי שימוש ניתן לפנות אל {site.email}.</p>
      </div>
    </Section>
  );
}
