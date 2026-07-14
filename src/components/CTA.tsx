import Link from "next/link";
import { site } from "@/data/site";

export function CTA({
  title = "לא בטוחים מאיפה להתחיל? כתבו לנו",
  text = "כתבו לנו בוואטסאפ מה קורה בעסק ומה הייתם רוצים לשפר. שיחת ההיכרות חינם וחברית, אנחנו מפתח תקווה, מחכים לשמוע מכם וגם אפשר להיפגש אם זה מה שנכון לפרויקט.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto my-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-premium border p-8 md:p-12" style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}>
        <p className="mb-3 text-sm font-semibold text-glowred">השלב הבא</p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">{text}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="btn-primary" href={site.whatsappHref}>
            דברו איתנו בוואטסאפ בחינם
          </a>
          <Link className="btn-secondary" href="/services">
            ראו שירותים
          </Link>
        </div>
      </div>
    </section>
  );
}
