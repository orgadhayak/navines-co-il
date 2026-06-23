import Link from "next/link";
import { BlogCard, ProductCard, ServiceCard } from "@/components/Cards";
import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import { blogPosts, optimizationHub, products, serviceEcosystem, services, site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "פתרונות בינה מלאכותית, אתרים ואוטומציה לעסקים בישראל",
  description: "נביא נס ישראל בע״מ עוזרת לעסקים לבנות אתר, חנות, מערכת, אוטומציה ומרכז אופטימיזציה מלא: מהירות, אבטחה, ניטור, תשתיות ופחות עבודה ידנית.",
});

const metrics = [
  { label: "בינה מלאכותית", href: "/services/ai-automation" },
  { label: "אתרים ומערכות", href: "/services/web-development" },
  { label: "איקומרס", href: "/services/ecommerce" },
  { label: "אבטחה וביצועים", href: "/services/security-recovery" },
];

const ecosystemLinks: Record<string, string> = {
  "בינה מלאכותית ואוטומציה": "/services/ai-automation",
  "פיתוח אתרים, מערכות וקוד": "/services/web-development",
  "אופטימיזציה, מהירות וביצועים": "/services/website-speed-optimization",
  "תשתיות, אחסון ואבטחת תקשורת": "/services/api-integrations",
  "אבטחה, תיקון תקלות ושחזור": "/services/security-recovery",
  "איקומרס ומרקטפלייסים": "/services/ecommerce",
  "שיווק דיגיטלי וצמיחה": "/services/seo-digital-marketing",
  "נתונים, מודיעין עסקי ואסטרטגיה": "/services/business-intelligence",
  "מובייל ואפליקציות": "/services/mobile-app-development",
  "בדיקות איכות וניטור משתמשים": "/services/consulting",
  "מדיה, נכסים ותוכן דיגיטלי": "/services/consulting",
  "כלים מבית נביא נס ישראל בע״מ": "/products",
};

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
          <Link className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-4 text-center transition hover:border-purple-300/50 hover:bg-purple-400/10" href={metric.href} key={metric.label}>
            <strong className="text-xl text-white">{metric.label}</strong>
          </Link>
        ))}
      </section>

      <Section eyebrow="מי אנחנו" title="בונים תשתית דיגיטלית חכמה, לא רק אתר יפה" className="py-10 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          <p className="text-lg leading-8 text-zinc-300">נביא נס ישראל בע״מ בונה אתרים מהירים, חנויות, מערכות ניהול, אוטומציות וכלי בינה מלאכותית שמטפלים בבעיות אמיתיות: פניות שמתפספסות, עבודה ידנית, אתר שלא מביא תוצאות או חנות שקשה לנהל.</p>
          <p className="text-lg leading-8 text-zinc-300">אנחנו מסתכלים על האתר כנכס עסקי ולא כעמוד יפה בלבד. הוא צריך להביא אמון, פניות ומכירות, להתחבר לכלים הנכונים, להיטען מהר ולהיות מספיק יציב כדי ללוות את העסק לאורך זמן.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-secondary" href="/about">
            קראו על החברה
          </Link>
          <a className="btn-primary" href={site.whatsappHref}>
            דברו איתנו בוואטסאפ
          </a>
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

      <Section eyebrow="מרכז אופטימיזציה" title="כל שירותי האופטימיזציה של נביא נס ישראל בע״מ במקום אחד" className="py-10 lg:py-14" id="optimization-hub">
        <p className="mb-6 max-w-4xl text-lg leading-8 text-zinc-300">
          זה החלק שמטפל במה שקורה מאחורי הקלעים: מהירות, קוד, מובייל, שרתים, קלאודפלייר, אבטחה, ניטור, מיילים ותמונות.
          אם האתר נראה תקין אבל איטי, לא יציב, לא נמדד נכון או מפספס פניות, כאן מתחילים לעשות סדר.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {optimizationHub.map((group) => (
            <article className="rounded-[1.5rem] border border-purple-300/12 bg-black/34 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)]" key={group.title}>
              <h2 className="text-2xl font-black text-white">{group.title}</h2>
              <p className="mt-2 text-base leading-7 text-zinc-400">{group.intro}</p>
              <div className="mt-4 grid gap-2">
                {group.items.map((item) => (
                  <Link className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-3 transition hover:border-purple-300/45 hover:bg-purple-500/10" href={item.href} key={item.title}>
                    <span className="block text-lg font-black text-white">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-zinc-400">{item.description}</span>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="כל השירותים" title="כל השירותים מתוך האקוסיסטם של המותג, בעברית וללקוחות בישראל" className="py-10 lg:py-14" id="service-catalog">
        <p className="mb-6 max-w-4xl text-lg leading-8 text-zinc-300">
          כאן רואים את התמונה המלאה: אופטימיזציה, תשתיות, אבטחה, שיווק, איקומרס, אפליקציות, בדיקות, נתונים וכלי בינה מלאכותית.
          כל תג מוביל לעמוד השירות או הכלים שמתאים לתחום.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {serviceEcosystem.map((group) => (
            <article className="rounded-[1.5rem] border border-purple-300/12 bg-black/30 p-5" key={group.title}>
              <Link className="inline-flex text-2xl font-black text-white transition hover:text-glowred" href={ecosystemLinks[group.title] || "/services"}>
                {group.title}
              </Link>
              <p className="mt-2 text-base leading-7 text-zinc-400">{group.intro}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Link className="tag hover:bg-purple-500/12" href={ecosystemLinks[group.title] || "/services"} key={item}>
                    {item}
                  </Link>
                ))}
              </div>
            </article>
          ))}
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
        <div className="mt-6">
          <Link className="btn-secondary" href="/blog">
            לכל המאמרים
          </Link>
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
