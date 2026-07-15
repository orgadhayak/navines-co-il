import Link from "next/link";
import { BrandInline } from "@/components/BrandInline";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { courseTracks, site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "קורסי AI מעשיים מבית נביא נס",
  description: "קורסי AI פרונטליים לילדים ולבוגרים מבית נביא נס. לומדים לעבור מרעיון לתוצר אמיתי: מוצר, אתר, כלי חכם או מערכת פשוטה, עם 10 מפגשים ושנה של ליווי.",
  path: "/courses",
});

export default function CoursesPage() {
  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courseTracks.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.seoDescription,
        provider: { "@type": "Organization", name: site.hebrewLegalName, url: site.url },
        url: `${site.url}/courses/${course.slug}`,
        inLanguage: "he-IL",
      },
    })),
  };

  return (
    <>
      <JsonLd data={courseListSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "קורסים", href: "/courses" }])} />
      <Section eyebrow="קורסי AI מעשיים" title="קורסי AI מעשיים מבית נביא נס" titleAs="h1" className="py-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="max-w-4xl text-xl leading-9 text-zinc-300"> ב <BrandInline text="Navines" /> לא לומדים רק להשתמש בכלי AI. לומדים איך לקחת רעיון, להבין אותו, לפרק אותו נכון, לבנות סביבו מוצר, אתר, כלי חכם או מערכת פשוטה, ולהתקדם איתו עד שהוא הופך למשהו אמיתי שאפשר להציג, לשפר ולהשתמש בו.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-400">
              אלה קורסים פרונטליים, ממוקדים ומעשיים. לא מבטיחים קסמים, הכנסה או הצלחה עסקית אוטומטית. כן נותנים מסגרת רצינית, חשיבה מוצרית, תרגול, ליווי ותמיכה לאורך שנה כדי לעזור למשתתפים להתקדם לתוצרים חזקים בהתאם למחויבות ולהתקדמות שלהם.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href={site.whatsappHref}>
                רוצים לבדוק התאמה? דברו איתנו בוואטסאפ
              </a>
              <Link className="btn-secondary" href="#course-tracks">
                ראו את המסלולים
              </Link>
            </div>
          </div>
          <div className="command-glass rounded-[1.8rem] p-5">
            <p className="text-base font-semibold text-glowred">מה הופך את המסלול לשונה?</p>
            <div className="mt-4 grid gap-3">
              {["מרעיון לתוצר שאפשר להציג", "10 מפגשים פרונטליים", "שנה שלמה של תמיכה וליווי", "לא נדרש ידע מוקדם", "מבחן התאמה וראיון לפני קבלה"].map((item) => (
                <div className="dashboard-row rounded-[1.15rem] p-4" key={item}>
                  <span className="status-pip bg-purple-200 text-purple-200" />
                  <p className="mt-2 text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="מסלולים" title="בחרו את מסלול AI שמתאים לכם" id="course-tracks" className="py-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {courseTracks.map((course) => (
            <article className="command-glass group rounded-[1.7rem] p-5 transition hover:-translate-y-0.5 hover:border-purple-200/45" key={course.slug}>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-glowred">{course.eyebrow}</p>
                <span className="live-status-chip rounded-full px-3 py-1 text-sm font-semibold text-purple-100">פרונטלי</span>
              </div>
              <Link className="mt-4 block text-3xl font-semibold leading-tight text-white transition hover:text-glowred" href={`/courses/${course.slug}`}>
                {course.navLabel}
              </Link>
              <p className="mt-3 text-lg leading-8 text-zinc-300">{course.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.structure.slice(0, 4).map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="btn-secondary" href={`/courses/${course.slug}`}>
                  לעמוד הקורס
                </Link>
                <a className="btn-primary" href={site.whatsappHref}>
                  שלחו הודעה קצרה ונבדוק התאמה
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="גישה מעשית" title="לומדים לבנות, לשפר ולהציג" className="py-6 lg:py-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { title: "רעיון", text: "מתחילים מרעיון פשוט או צורך אמיתי, ומבינים מה הוא אמור לפתור למשתמש או לעסק." },
            { title: "מוצר", text: "מפרקים את הרעיון לתוצר שאפשר לבנות, לבדוק, לשפר ולהציג בלי להסתבך יותר מדי." },
            { title: "הקשר דיגיטלי", text: "לומדים איפה התוצר צריך לחיות: אתר, כלי, דף הצגה, תהליך עבודה או מערכת קטנה." },
          ].map((item) => (
            <article className="dashboard-row rounded-[1.35rem] p-5" key={item.title}>
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-lg leading-8 text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTA title="רוצים לדעת איזה מסלול מתאים לכם?" text="שלחו לנו הודעה קצרה בוואטסאפ. ספרו אם מדובר בילד, בוגר, בעל עסק או רעיון שכבר קיים, ונבדוק יחד אם המסלול מתאים ומה הצעד הראשון הנכון." />
    </>
  );
}
