const signals = ["בינה מלאכותית", "תשתיות דיגיטליות", "פיתוח אתרים", "אוטומציה", "ביצועים", "אבטחה"];

export function HeroVisual() {
  return (
    <div
      className="sparkle-field relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(139,92,246,0.18),rgba(255,255,255,0.035))] p-5 shadow-premium sm:p-7 lg:min-h-[620px]"
      data-section="hero-visual"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_22%,rgba(216,180,254,0.24),transparent_20rem),linear-gradient(180deg,transparent,rgba(7,7,8,0.42))]" aria-hidden="true" />

      <div className="relative grid h-full content-between gap-5 sm:gap-7">
        <div className="mx-auto inline-flex rounded-full border border-navred/35 bg-navred/12 px-5 py-2 text-center text-base font-black text-glowred">
          <span>מערכת ישראלית רשמית לתשתיות דיגיטליות חכמות</span>
        </div>

        <div className="relative mx-auto h-56 w-full max-w-[34rem] sm:h-72">
          <img
            alt="סמל מגן דוד סגול וזוהר עם טבעת דיגיטלית"
            className="glow-asset absolute inset-0 h-full w-full scale-110 object-contain opacity-70 mix-blend-screen"
            src="/visuals/navines-israel-light-ring.jpg"
          />
          <img
            alt="ליבת טכנולוגיה סגולה בצורת מגן דוד"
            className="glow-asset relative h-full w-full object-contain drop-shadow-[0_0_44px_rgba(216,180,254,0.55)]"
            src="/visuals/navines-israel-core-star.jpg"
          />
          <span className="absolute left-[18%] top-[21%] h-3 w-3 rounded-full bg-white shadow-[0_0_24px_rgba(216,180,254,1)]" aria-hidden="true" />
          <span className="absolute right-[18%] top-[34%] h-2.5 w-2.5 rounded-full bg-glowred shadow-[0_0_26px_rgba(216,180,254,0.95)]" aria-hidden="true" />
          <span className="absolute bottom-[20%] left-[42%] h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_34px_rgba(255,255,255,1)]" aria-hidden="true" />
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
          אתר עברי מלא, שירות מקומי, ביצוע ישיר, וחיבור בין האתר, הנתונים, המכירה והתפעול של העסק.
        </p>
      </div>
    </div>
  );
}
