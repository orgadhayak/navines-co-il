import { notFound } from "next/navigation";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { courseTracks, site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return courseTracks.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseTracks.find((item) => item.slug === slug);
  if (!course) return {};
  return createMetadata({
    title: course.title,
    description: course.seoDescription,
    path: `/courses/${course.slug}`,
  });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseTracks.find((item) => item.slug === slug);
  if (!course) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.seoDescription,
    provider: { "@type": "Organization", name: site.hebrewLegalName, url: site.url },
    courseMode: "onsite",
    educationalLevel: "Beginner",
    inLanguage: "he-IL",
    url: `${site.url}/courses/${course.slug}`,
  };

  const isKids = course.slug === "ai-for-kids";

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "קורסים", href: "/courses" }, { name: course.navLabel, href: `/courses/${course.slug}` }])} />

      <Section eyebrow={course.eyebrow} title={course.title} titleAs="h1" className="py-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="max-w-4xl text-xl leading-9 text-zinc-300">{course.summary}</p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-400">{course.positioning}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href={site.whatsappHref}>
                {isKids ? "רוצים שהילד/ה שלכם ילמדו לבנות עם AI? כתבו לנו" : "רוצים להפוך רעיון למוצר אמיתי? דברו איתנו"}
              </a>
              <Link className="btn-secondary" href="/courses">
                לכל הקורסים
              </Link>
            </div>
          </div>
          <div className="command-glass rounded-[1.8rem] p-5">
            <p className="text-base font-semibold text-glowred">מבנה הקורס</p>
            <div className="mt-4 grid gap-2">
              {course.structure.map((item) => (
                <div className="flex items-center gap-3 rounded-[1.15rem] border border-white/10 bg-black/25 px-4 py-3" key={item}>
                  <span className="status-pip bg-purple-200 text-purple-200" />
                  <span className="text-base font-semibold text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-[1.2rem] border border-purple-200/16 bg-purple-500/10 p-4 text-base leading-7 text-zinc-300">{course.location}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="למי זה מתאים" title="לפני שנרשמים, בודקים התאמה אמיתית" className="py-6 lg:py-9">
        <div className="command-glass rounded-[1.6rem] p-5">
          <p className="text-lg leading-8 text-zinc-300">{course.audience}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {course.admission.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="מה לומדים" title="עובדים עם AI כמו יוצרי מוצרים, לא כמו צופים מהצד" className="py-6 lg:py-9">
        <div className="grid gap-3 md:grid-cols-2">
          {course.learn.map((item, index) => (
            <article className="dashboard-row rounded-[1.25rem] p-4" key={item}>
              <span className="text-sm font-semibold text-glowred">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-xl font-semibold leading-tight text-white">{item}</h2>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="פרויקטים ותוצרים" title="המטרה היא לצאת עם דברים שאפשר להראות, לשפר ולהשתמש בהם" className="py-6 lg:py-9">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="command-glass rounded-[1.6rem] p-5">
            <h2 className="text-2xl font-semibold text-white">דוגמאות לפרויקטים</h2>
            <div className="mt-4 grid gap-2">
              {course.projects.map((item) => (
                <p className="rounded-[1rem] border border-white/10 bg-white/[0.035] px-4 py-3 text-base leading-7 text-zinc-300" key={item}>{item}</p>
              ))}
            </div>
          </article>
          <article className="command-glass rounded-[1.6rem] p-5">
            <h2 className="text-2xl font-semibold text-white">מה המשתתפים אמורים לקבל</h2>
            <div className="mt-4 grid gap-2">
              {course.outcomes.map((item) => (
                <p className="rounded-[1rem] border border-purple-200/12 bg-purple-500/[0.08] px-4 py-3 text-base leading-7 text-zinc-300" key={item}>{item}</p>
              ))}
            </div>
          </article>
        </div>
        <p className="mt-5 rounded-[1.35rem] border border-white/10 bg-black/25 p-5 text-base leading-8 text-zinc-400">{course.note}</p>
      </Section>

      <Section eyebrow="שאלות נפוצות" title="שאלות לפני הרשמה" className="py-6 lg:py-9">
        <div className="grid gap-3">
          {course.faqs.map((faq) => (
            <details className="command-glass rounded-[1.25rem] p-4" key={faq.question}>
              <summary className="cursor-pointer text-xl font-semibold text-white">{faq.question}</summary>
              <p className="mt-3 text-lg leading-8 text-zinc-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section eyebrow="דברו איתנו" title="לא בטוחים אם זה מתאים? עדיף לבדוק בשיחה קצרה" className="py-6 lg:py-9">
        <div className="command-glass rounded-[1.7rem] p-6 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-zinc-300">
              לא נדרש ידע קודם, רק רצון ללמוד, לבנות ולהתקדם. שלחו לנו הודעה קצרה בוואטסאפ ונבדוק אם המסלול מתאים לכם, לילד או לרעיון שכבר יש לכם.
            </p>
            <p className="mt-3 text-base leading-7 text-zinc-400">
              הקורס מתקיים פרונטלית באזור פתח תקווה, עם ליווי לשנה שלמה כחלק מרכזי מהמסלול.
            </p>
          </div>
          <a className="btn-primary mt-5 lg:mt-0" href={site.whatsappHref}>
            שלחו הודעה קצרה ונבדוק התאמה
          </a>
        </div>
      </Section>

      <CTA title="רוצים להתחיל נכון?" text={isKids ? "כתבו לנו בוואטסאפ בן כמה הילד/ה, מה מסקרן אותם ומה הם היו רוצים לבנות. נחזור עם שאלות התאמה וכיוון ברור." : "כתבו לנו בוואטסאפ מי אתם, איזה רעיון או צורך יש לכם, ומה הייתם רוצים לבנות בעזרת AI. נבדוק התאמה ונכוון אתכם."} />
    </>
  );
}
