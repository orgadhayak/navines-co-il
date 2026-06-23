import Link from "next/link";
import { BlogCard, ProductCard, ServiceCard } from "@/components/Cards";
import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import { blogPosts, products, services, site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "מערכות בינה מלאכותית, אתרים, אוטומציה ותשתיות דיגיטליות לעסקים",
  description: "נביא נס ישראל בונה אתרים, מערכות, חנויות, אוטומציות וכלי בינה מלאכותית שמחברים בין העסק, הלקוחות, הנתונים והתפעול.",
});

const metrics = ["בינה מלאכותית", "אתרים ומערכות", "איקומרס", "אבטחה וביצועים"];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-14">
        <div>
          <p className="mb-3 text-sm font-black text-glowred">תשתית דיגיטלית חכמה לעסק שרוצה לגדול</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.03] text-white md:text-6xl">מערכות בינה מלאכותית, אתרים, אוטומציה ותשתיות דיגיטליות לעסקים</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">נביא נס ישראל מחברת בין אתר, מערכת, חנות, נתונים ותפעול. אנחנו בונים פתרונות מהירים, יציבים וחכמים שמורידים עבודה ידנית ומייצרים שליטה ברורה יותר בעסק.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/contact">
              דברו איתנו
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
          <p className="text-lg leading-8 text-zinc-300">נביא נס ישראל בע"מ בונה אתרים מהירים, מערכות ניהול, חנויות אונליין, אוטומציות עסקיות, כלי בינה מלאכותית ותשתיות שמאפשרות לעסק לעבוד בצורה חכמה יותר.</p>
          <p className="text-lg leading-8 text-zinc-300">האתר שלך הוא תשתית עסקית: נקודת מכירה, מקור פניות, כלי אמון, מערכת מדידה ונכס דיגיטלי שצריך לעבוד, להתריע ולגדול עם העסק.</p>
        </div>
      </Section>

      <Section eyebrow="שירותים" title="מה אנחנו עושים" className="py-10 lg:py-14">
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

      <Section eyebrow="כלים ומוצרים" title="כלים חכמים מבית נביא נס" className="py-10 lg:py-14">
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

      <Section eyebrow="בלוג" title="מאמרים קצרים לעסקים דיגיטליים" className="py-10 lg:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section eyebrow="יצירת קשר" title="רוצים לבנות משהו חכם יותר?" className="py-10 lg:py-14">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-premium lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-300">ספרו לנו מה אתם רוצים לבנות, לשפר, לחבר או לאוטומט. נחזור אליכם עם כיוון ברור והמלצה מעשית.</p>
            <p className="mt-3 text-base text-zinc-400">{site.hebrewLegalName} · {site.companyNumberLabel} · {site.phone}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-0">
            <a className="btn-primary" href={site.whatsappHref}>
              שלחו וואטסאפ
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
