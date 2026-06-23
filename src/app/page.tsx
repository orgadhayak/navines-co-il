import Link from "next/link";
import { BlogCard, ProductCard, ServiceCard } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { HeroVisual } from "@/components/HeroVisual";
import { Section } from "@/components/Section";
import { blogPosts, products, services, site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "מערכות בינה מלאכותית, אתרים, אוטומציה ותשתיות דיגיטליות לעסקים",
  description: "נביא נס ישראל בונה אתרים, מערכות, חנויות, אוטומציות וכלי בינה מלאכותית שמחברים בין העסק, הלקוחות, הנתונים והתפעול.",
});

const metrics = ["בינה מלאכותית ואוטומציה", "אתרים ומערכות", "איקומרס", "אבטחה וביצועים"];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-black text-glowred">תשתית דיגיטלית חכמה לעסק שרוצה לגדול</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-white md:text-6xl lg:text-7xl">מערכות בינה מלאכותית, אתרים, אוטומציה ותשתיות דיגיטליות לעסקים</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">נביא נס ישראל עוזרת לעסקים לבנות אתרים, מערכות, חנויות, אוטומציות וכלי בינה מלאכותית שמחברים בין העסק, הלקוחות, הנתונים והתפעול. אנחנו משלבים פיתוח, אסטרטגיה, איקומרס, אבטחה, ביצועים ותשתיות דיגיטליות במקום אחד.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/contact">
              דברו איתנו
            </Link>
            <Link className="btn-secondary" href="/products">
              ראו מה אנחנו בונים
            </Link>
            <a className="btn-secondary" href="https://analyze.navines.com" rel="noreferrer" target="_blank">
              בדקו את האתר שלכם
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {metrics.map((metric) => (
          <div className="rounded-full border border-white/10 bg-white/[0.035] px-6 py-5" key={metric}>
            <strong className="text-2xl text-white">{metric}</strong>
            <p className="mt-2 text-base text-zinc-400">פחות עבודה ידנית. יותר שליטה, מדידה ואוטומציה.</p>
          </div>
        ))}
      </section>

      <Section eyebrow="מי אנחנו" title="נביא נס ישראל, בונים תשתיות דיגיטליות חכמות">
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-xl leading-9 text-zinc-300">נביא נס ישראל בע"מ היא חברת טכנולוגיה ופיתוח שמתמקדת בבניית מערכות דיגיטליות מתקדמות לעסקים. אנחנו בונים אתרים מהירים, מערכות ניהול, חנויות אונליין, אוטומציות עסקיות, כלי בינה מלאכותית, אינטגרציות, מערכות ניטור ותשתיות שמאפשרות לעסק לעבוד בצורה חכמה יותר.</p>
          <p className="text-lg leading-8 text-zinc-300">האתר שלך הוא לא כרטיס ביקור. הוא תשתית עסקית: נקודת מכירה, מקור פניות, כלי אמון, מערכת מדידה ונכס דיגיטלי שצריך לעבוד, למדוד, להתריע ולגדול עם העסק.</p>
        </div>
      </Section>

      <Section eyebrow="שירותים" title="כל מה שהעסק הדיגיטלי שלך צריך במקום אחד">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard index={index} key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section eyebrow="כלים ומוצרים" title="מערכות וכלים חכמים מבית נביא נס">
        <div className="sparkle-field mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-premium lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <img alt="סמל מגן דוד סגול וזוהר עם טבעת דיגיטלית" className="h-56 w-full object-cover opacity-85 mix-blend-screen lg:h-full" loading="lazy" src="/visuals/navines-israel-light-ring.jpg" />
          <div className="grid content-center gap-3 p-6 sm:p-8">
            <p className="text-base font-black text-glowred">שכבת בקרה חכמה</p>
            <h3 className="text-3xl font-black leading-tight text-white">כלים שמזהים, מודדים ומחזירים לעסק תמונת מצב ברורה</h3>
            <p className="text-lg leading-8 text-zinc-300">המערכות שאנחנו בונים מחברות בין נתונים, ביצועים, אבטחה ואוטומציה, כדי שתראו מוקדם יותר מה עובד ומה דורש טיפול.</p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Section eyebrow="בלוג" title="מאמרים, תובנות וכלים לעסקים דיגיטליים">
        <p className="mb-8 max-w-3xl text-lg leading-8 text-zinc-300">בבלוג של נביא נס ישראל נפרסם מדריכים, תובנות, ניתוחים ודוגמאות מעשיות על בינה מלאכותית, אוטומציה, אתרים, איקומרס, קידום אורגני, אבטחה, ביצועים, שיווק וכלים דיגיטליים לעסקים.</p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section eyebrow="יצירת קשר" title="רוצים לבנות משהו חכם יותר לעסק שלכם?">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-premium border border-white/10 bg-white/[0.045] p-6 shadow-premium">
            <p className="text-lg leading-8 text-zinc-300">ספרו לנו מה אתם רוצים לבנות, לשפר, לחבר או לאוטומט. נחזור אליכם עם כיוון ברור, שאלות נכונות והמלצה מעשית להמשך.</p>
            <div className="mt-6 grid gap-2 text-zinc-300">
              <strong className="text-white">{site.hebrewLegalName}</strong>
              <span>{site.companyNumberLabel}</span>
              <span>{site.hebrewAddress}</span>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.emailHref}>{site.email}</a>
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
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
