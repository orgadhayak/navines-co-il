import Link from "next/link";
import { BlogCard, ProductCard, ServiceCard } from "@/components/Cards";
import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import { blogPosts, products, services, site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "פתרונות בינה מלאכותית, אתרים ואוטומציה לעסקים בישראל",
  description: "נביא נס ישראל בע״מ עוזרת לעסקים לבנות אתר, חנות, מערכת או אוטומציה שעובדים באמת: יותר פניות, פחות עבודה ידנית ותשתית דיגיטלית שאפשר לסמוך עליה.",
});

const metrics = ["בינה מלאכותית", "אתרים ומערכות", "איקומרס", "אבטחה וביצועים"];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-14">
        <div>
          <p className="mb-3 text-sm font-black text-glowred">תשתית דיגיטלית חכמה לעסק שרוצה לעבוד מסודר יותר</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.03] text-white md:text-6xl">מערכות בינה מלאכותית, אתרים, אוטומציה ותשתיות דיגיטליות לעסקים</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">נביא נס ישראל בע״מ עוזרת לבעלי עסקים להפוך אתר, חנות, מערכת או רעיון לתשתית שעובדת ביום יום. אנחנו מחברים בין לקוחות, נתונים, תפעול ומכירות כדי לחסוך זמן, להקטין טעויות וליצור עסק דיגיטלי ברור יותר.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/contact">
              דברו איתנו בוואטסאפ
            </Link>
            <Link className="btn-secondary" href="/products">
              ראו כלים ומוצרים
            </Link>
            <a className="btn-secondary" href="https://analyze.navines.com" rel="noreferrer" target="_blank">
              בדקו את האתר
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {metrics.map((metric) => (
          <div className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-4 text-center" key={metric}>
            <strong className="text-xl text-white">{metric}</strong>
          </div>
        ))}
      </section>

      <Section eyebrow="מי אנחנו" title="בונים תשתית דיגיטלית חכמה, לא רק אתר יפה" className="py-10 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          <p className="text-lg leading-8 text-zinc-300">נביא נס ישראל בע״מ בונה אתרים מהירים, חנויות, מערכות ניהול, אוטומציות וכלי בינה מלאכותית שמטפלים בבעיות אמיתיות: פניות שמתפספסות, עבודה ידנית, אתר שלא מביא תוצאות או חנות שקשה לנהל.</p>
          <p className="text-lg leading-8 text-zinc-300">אנחנו מסתכלים על האתר כנכס עסקי ולא כעמוד יפה בלבד. הוא צריך להביא אמון, פניות ומכירות, להתחבר לכלים הנכונים, להיטען מהר ולהיות מספיק יציב כדי ללוות את העסק לאורך זמן.</p>
        </div>
      </Section>

      <Section eyebrow="שירותים" title="מה אפשר לשפר בעסק הדיגיטלי שלכם" className="py-10 lg:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard index={index} key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-6">
          <Link className="btn-secondary" href="/services">
            לכל השירותים
          </Link>
        </div>
      </Section>

      <Section eyebrow="כלים ומוצרים" title="כלים שעוזרים לראות בעיות לפני שהן עולות כסף" className="py-10 lg:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-6">
          <Link className="btn-secondary" href="/products">
            לכל הכלים והמוצרים
          </Link>
        </div>
      </Section>

      <Section eyebrow="בלוג" title="מדריכים קצרים לקבלת החלטות חכמות יותר" className="py-10 lg:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section eyebrow="יצירת קשר" title="יש לכם אתר, חנות או מערכת שצריך לשפר?" className="py-10 lg:py-14">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-premium lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-300">שלחו לנו הודעה קצרה בוואטסאפ: מה יש לכם היום, מה מפריע לכם ומה הייתם רוצים שיקרה. נחזור עם כיוון ברור, בלי שיחת מכירה כבדה ובלי מילים מסובכות.</p>
            <p className="mt-3 text-base text-zinc-400">{site.hebrewLegalName} · {site.companyNumberLabel} · {site.phone}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-0">
            <a className="btn-primary" href={site.whatsappHref}>
              דברו איתנו בוואטסאפ
            </a>
            <Link className="btn-secondary" href="/contact">
              יצירת קשר
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
