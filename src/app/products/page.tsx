import { ProductCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { products } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "כלים ומוצרים",
  description: "כלים ומוצרים מבית NAVINES שעוזרים לעסקים לראות טוב יותר, לזהות בעיות מוקדם ולקבל החלטות חכמות.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <Section eyebrow="כלים ומוצרים" title="כלים ומוצרים מבית NAVINES" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">אנחנו בונים כלים שמטרתם לעזור לעסקים לראות טוב יותר, להבין מהר יותר, לזהות בעיות מוקדם יותר ולקבל החלטות חכמות יותר.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
      <CTA title="רוצים שנבנה כלי חכם לעסק שלכם?" text="אם יש לכם תהליך שחוזר על עצמו, בעיית ניטור או צורך לקבל החלטות מהר יותר, אפשר להפוך את זה למערכת." />
    </>
  );
}
