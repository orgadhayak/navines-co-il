const signals = ["בינה מלאכותית", "אוטומציה", "אתרים", "איקומרס", "אבטחה", "ביצועים"];

export function HeroVisual() {
  return (
    <div
      className="star-stage sparkle-field relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(216,180,254,0.24),transparent_19rem),linear-gradient(145deg,rgba(139,92,246,0.18),rgba(255,255,255,0.03))] p-5 shadow-premium sm:p-7"
      data-section="hero-visual"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,7,8,0.38))]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navred/30 blur-3xl" aria-hidden="true" />

      <div className="relative grid gap-5">
        <div className="mx-auto rounded-full border border-navred/35 bg-black/28 px-5 py-2 text-center text-base font-black text-glowred shadow-[0_0_28px_rgba(216,180,254,0.18)]">
          תשתית דיגיטלית ישראלית עם שכבת ביצוע חכמה
        </div>

        <div className="relative mx-auto h-72 w-full max-w-[35rem] sm:h-[27rem]">
          <div className="absolute inset-8 rounded-full border border-glowred/25 shadow-[0_0_80px_rgba(216,180,254,0.36)]" aria-hidden="true" />
          <div className="absolute inset-16 rounded-full border border-navred/25 shadow-[inset_0_0_70px_rgba(139,92,246,0.28)]" aria-hidden="true" />
          <img
            alt="מגן דוד טכנולוגי סגול וזוהר"
            className="glow-asset relative h-full w-full object-contain drop-shadow-[0_0_58px_rgba(216,180,254,0.72)]"
            src="/visuals/navines-purple-tech-star.png"
          />
          <span className="absolute left-[15%] top-[22%] h-3 w-3 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,1)]" aria-hidden="true" />
          <span className="absolute right-[16%] top-[34%] h-2.5 w-2.5 rounded-full bg-glowred shadow-[0_0_32px_rgba(216,180,254,0.95)]" aria-hidden="true" />
          <span className="absolute bottom-[18%] left-[47%] h-4 w-4 rounded-full bg-white shadow-[0_0_42px_rgba(255,255,255,1)]" aria-hidden="true" />
        </div>

        <div className="text-center">
          <h2 className="mx-auto max-w-xl text-2xl font-black leading-tight text-white sm:text-4xl">מערכת אחת שמחברת אתר, נתונים, אוטומציה וביצוע</h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-zinc-300">עיצוב נקי, תשתית חכמה, מהירות, אבטחה וכלים שעוזרים לעסק לעבוד ברור יותר.</p>
        </div>

        <div className="mx-auto grid w-full max-w-xl grid-cols-3 gap-2">
          {signals.map((signal) => (
            <div className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" key={signal}>
              <span className="text-sm font-black text-white sm:text-lg">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
