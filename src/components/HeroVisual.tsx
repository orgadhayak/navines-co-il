import { site } from "@/data/site";

const signals = ["מערכות AI", "תשתיות דיגיטליות", "פיתוח אתרים", "אוטומציה", "ביצועים", "אבטחה"];

export function HeroVisual() {
  return (
    <div
      className="sparkle-field relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(139,92,246,0.18),rgba(255,255,255,0.035))] p-5 shadow-premium sm:p-7 lg:min-h-[620px]"
      data-section="hero-visual"
    >
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 object-contain opacity-20 mix-blend-screen"
        src="/visuals/purple-circuit-core.png"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(216,180,254,0.22),transparent_22rem),linear-gradient(180deg,transparent,rgba(7,7,8,0.36))]" aria-hidden="true" />

      <div className="relative grid h-full content-between gap-5 sm:gap-7">
        <div className="mx-auto inline-flex rounded-full border border-navred/35 bg-navred/12 px-5 py-2 text-center text-base font-black text-glowred">
          <span>
            בהשראת המערכת הבינלאומית של{" "}
            <a className="hover:text-white" href={site.internationalUrl} rel="noreferrer" target="_blank">
              NAVINES
            </a>
          </span>
        </div>

        <div className="relative mx-auto h-40 w-full max-w-[30rem] sm:h-64">
          <img
            alt="מוח דיגיטלי סגול עם רשת AI"
            className="glow-asset h-full w-full object-contain"
            src="/visuals/brain1.webp"
          />
          <span className="absolute left-[18%] top-[18%] h-3 w-3 rounded-full bg-white shadow-[0_0_22px_rgba(216,180,254,0.95)]" aria-hidden="true" />
          <span className="absolute right-[22%] top-[28%] h-2 w-2 rounded-full bg-glowred shadow-[0_0_22px_rgba(216,180,254,0.9)]" aria-hidden="true" />
          <span className="absolute bottom-[18%] left-[36%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_28px_rgba(255,255,255,0.9)]" aria-hidden="true" />
        </div>

        <div className="text-center">
          <h2 className="mx-auto max-w-2xl text-2xl font-black leading-tight text-white sm:text-4xl">תשתית חכמה שמחברת רעיון, מערכת וביצוע</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">פחות עבודה ידנית. יותר שליטה, מדידה, אוטומציה ומערכות שמרגישות מחוברות לעסק עצמו.</p>
        </div>

        <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-2 sm:gap-3">
          {signals.map((signal) => (
            <div className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-5 sm:py-3" key={signal}>
              <span className="text-base font-black text-white sm:text-2xl">{signal}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-2xl rounded-[1.5rem] border border-navred/40 bg-navred/[0.12] px-4 py-3 text-center text-base leading-7 text-silver sm:rounded-full sm:px-6 sm:py-4 sm:text-lg sm:leading-8">
          <a className="font-black text-glowred hover:text-white" href={site.internationalUrl} rel="noreferrer" target="_blank">
            NAVINES
          </a>{" "}
          כשפת מותג בינלאומית, עם אתר עברי מלא, RTL, שירות מקומי וביצוע ישיר לעסקים בישראל.
        </p>
      </div>
    </div>
  );
}
