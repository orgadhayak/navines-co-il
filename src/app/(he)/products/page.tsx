import Link from "next/link";
import { ProductCard } from "@/components/Cards";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { products } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "כלים ומוצרים",
  description: "כלים ומוצרים מבית נביא נס ישראל בע\"מ שעוזרים לעסקים לבדוק אתרים, להבין נתונים, לזהות סיכונים ולקבל החלטות מהר יותר.",
  path: "/products",
});

export default function ProductsPage() {
  const visibleProducts = products.filter((product) => !product.hidden);
  const talkToDataProduct = visibleProducts.find((product) => product.slug === "talk-to-data");
  const featuredProducts = visibleProducts.filter((product) => ["navines-noise", "navines-seo-lab", "amazoniq", "Navines-beacon", "checklink"].includes(product.slug));
  const otherProducts = visibleProducts.filter((product) => product.slug !== talkToDataProduct?.slug && !featuredProducts.some((featured) => featured.slug === product.slug));

  return (
    <>
      <Section eyebrow="כלים ומוצרים" title="כלים שעוזרים לעסק לראות מה באמת קורה" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">אנחנו בונים כלים שמורידים ניחושים מהשולחן: בדיקת אתר, ניטור נכסים דיגיטליים, הבנת נתונים, בדיקת קישורים וזיהוי בעיות לפני שהן פוגעות בפניות, מכירות או אמון.</p>
        {talkToDataProduct ? (
          <div className="mt-8 border-y py-8 lg:flex lg:items-center lg:justify-between lg:gap-10" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-glowred">הכלי הראשון שכדאי לראות</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-5xl">{talkToDataProduct.hebrewName}</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-300">{talkToDataProduct.description}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 lg:mt-0 lg:grid">
              <a className="btn-primary" href="https://talktodata.navines.com" rel="noreferrer" target="_blank"> לצפייה ב TalkToData </a>
              <Link className="btn-secondary" href="/services/chatgpt-business-data"> חיבור נתונים אל ChatGPT </Link>
            </div>
          </div>
        ) : null}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-white">כלים מובילים שכדאי להכיר</h2>
          <div className="mt-5 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
          {otherProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-10 border-y py-8" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm font-semibold text-glowred">חדש באתר הישראלי</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">כלים שימושיים בעברית לגולשים</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-300">20 כלים מקומיים לבדיקת קישורים, QR מתמונה, כותרות אימייל, בקשות תשלום, הפניות, קמפיינים וחשבונות. הם פועלים בדפדפן ועוזרים להבין מה כדאי לבדוק לפני פעולה.</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link className="btn-secondary" href="/tools">לפתיחת עמוד הכלים</Link><Link className="editorial-link inline-flex items-center" href="/blog/qr-email-and-link-safety-tools">למדריך הכלים החדשים</Link></div>
        </div>
      </Section>
      <CTA title="יש לכם תהליך שחוזר על עצמו?" text="כתבו לנו בוואטסאפ מה אתם בודקים או עושים ידנית היום. נבדוק אם אפשר להפוך את זה לכלי פשוט שחוסך זמן ומראה תמונה ברורה יותר." />
    </>
  );
}
