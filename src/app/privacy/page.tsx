import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "מדיניות פרטיות",
  description: "מדיניות פרטיות בסיסית עבור אתר נביא נס ישראל בע״מ.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section eyebrow="פרטיות" title="מדיניות פרטיות" titleAs="h1">
      <div className="grid gap-6 text-lg leading-8 text-zinc-300">
        <p>
          באתר יצירת הקשר נעשית דרך וואטסאפ, מייל או טלפון. אם תבחרו לפנות אלינו באחד מהערוצים האלה, המידע שתמסרו לנו ישמש לצורך מענה לפנייה, הבנת הצורך ומתן שירות.
        </p>
        <p>
          האתר עשוי להשתמש בעוגיות, כלי מדידה או Analytics אם יחוברו בעתיד. מטרת הכלים האלה היא להבין שימוש באתר ולשפר את השירות, ולא לאסוף מידע רגיש ללא צורך.
        </p>
        <p>
          מידע שמתקבל בפנייה ישירה נשמר רק לצורך טיפול בפנייה, תיעוד שירות ושיפור התקשורת מולכם. ניתן לבקש מחיקה או עדכון מידע באמצעות פנייה למייל <span className="english-tech">{site.email}</span>.
        </p>
      </div>
    </Section>
  );
}
