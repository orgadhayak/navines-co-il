import { ProductCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { products } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "כלים ומוצרים",
  description: "כלים ומוצרים מבית נביא נס ישראל בע״מ שעוזרים לעסקים לבדוק אתרים, להבין נתונים, לזהות סיכונים ולקבל החלטות מהר יותר.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Section eyebrow="כלים ומוצרים" title="כלים שעוזרים לעסק לראות מה באמת קורה" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">אנחנו בונים כלים שמורידים ניחושים מהשולחן: בדיקת אתר, ניטור נכסים דיגיטליים, הבנת נתונים, בדיקת קישורים וזיהוי בעיות לפני שהן פוגעות בפניות, מכירות או אמון.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
      <CTA title="יש לכם תהליך שחוזר על עצמו?" text="כתבו לנו בוואטסאפ מה אתם בודקים או עושים ידנית היום. נבדוק אם אפשר להפוך את זה לכלי פשוט שחוסך זמן ומראה תמונה ברורה יותר." />
    </>
  );
}
