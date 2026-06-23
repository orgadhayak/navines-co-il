import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "מדיניות פרטיות", description: "מדיניות פרטיות בסיסית עבור אתר נביא נס ישראל.", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <Section eyebrow="פרטיות" title="מדיניות פרטיות" titleAs="h1">
      <div className="grid gap-6 text-lg leading-8 text-zinc-300">
        <p>בעת שליחת טופס באתר נאספים פרטים כגון שם, חברה, טלפון, אימייל, בחירת שירות והודעה חופשית. המידע משמש ליצירת קשר, הבנת הצורך ומתן מענה לפנייה.</p>
        <p>האתר עשוי להשתמש בעוגיות, כלי מדידה או Analytics אם יחוברו בעתיד. בשלב זה אין להניח חיבור לכלי מדידה ללא מזהים אמיתיים.</p>
        <p>המידע נשמר לצורך טיפול בפנייה ושיפור השירות. ניתן לבקש מחיקה או עדכון מידע באמצעות פנייה למייל {site.email}.</p>
      </div>
    </Section>
  );
}
