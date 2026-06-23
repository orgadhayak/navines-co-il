import Link from "next/link";
import { BrandInline } from "@/components/BrandInline";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { solutionPages } from "@/data/solutions";
import { site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "פתרונות לפי סוג עסק",
  description:
    "פתרונות AI, אוטומציה, דאטה ותשתיות דיגיטליות לרואי חשבון, מוכרי Amazon ופרילנסרים. נביא נס ישראל בע״מ מחברת נתונים, מערכות ודוחות לממשקי עבודה חכמים.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "בית", href: "/" }, { name: "פתרונות", href: "/solutions" }])} />
      <Section eyebrow="פתרונות לפי סוג עסק" title="מערכות חכמות שמדברות בשפה של העסק שלכם" titleAs="h1">
        <p className="max-w-4xl text-lg leading-8 text-zinc-300">
          לא כל עסק צריך את אותה מערכת. משרד רואי חשבון, מוכר Amazon ופרילנסר עובדים אחרת, שואלים שאלות אחרות
          ומתמודדים עם עומס אחר. לכן נביא נס ישראל בע״מ בונה פתרונות שמחברים נתונים, דוחות, מסמכים, לקוחות,
          מכירות ומשימות לממשק ברור שמאפשר להבין מהר מה קורה ומה הצעד הבא.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {solutionPages.map((solution) => (
            <Link className="command-glass group rounded-[1.45rem] p-5 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={`/solutions/${solution.slug}`} key={solution.slug}>
              <p className="text-sm font-black text-glowred">{solution.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-white">
                <BrandInline text={solution.navLabel} />
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-400">
                <BrandInline text={solution.summary} />
              </p>
              <span className="mt-5 inline-flex rounded-full border border-purple-200/20 bg-purple-500/12 px-5 py-2 text-base font-black text-white transition group-hover:bg-purple-500/24">
                לעמוד הפתרון
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href={site.whatsappHref}>
            שלחו הודעה קצרה ונכוון אתכם
          </a>
          <Link className="btn-secondary" href="/services/chatgpt-business-data">
            לדבר עם הנתונים
          </Link>
        </div>
      </Section>
      <CTA
        title="לא בטוחים איזה פתרון מתאים לעסק שלכם?"
        text="כתבו לנו בוואטסאפ במה אתם עובדים היום, איפה יש עומס ומה הייתם רוצים להבין מהר יותר. שיחה ראשונה חינם וחברית, ואפשר גם להיפגש בפתח תקווה אם זה נכון לפרויקט."
      />
    </>
  );
}

