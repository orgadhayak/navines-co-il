import Link from "next/link";

export function CTA({
  title = "רוצים לבנות משהו חכם יותר לעסק שלכם?",
  text = "ספרו לנו מה אתם רוצים לבנות, לשפר, לחבר או לאוטומט. נחזור עם כיוון ברור להמשך.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto my-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-premium border border-white/10 bg-gradient-to-br from-navred/20 via-white/[0.04] to-white/[0.02] p-8 shadow-premium md:p-12">
        <p className="mb-3 text-sm font-black text-glowred">השלב הבא</p>
        <h2 className="max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">{text}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/contact">
            דברו איתנו
          </Link>
          <Link className="btn-secondary" href="/services">
            ראו שירותים
          </Link>
        </div>
      </div>
    </section>
  );
}
