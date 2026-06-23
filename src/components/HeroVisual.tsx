const signals = ["בינה מלאכותית", "אוטומציה", "אתרים", "איקומרס", "אבטחה", "ביצועים"];

export function HeroVisual() {
  return (
    <div
      className="star-stage sparkle-field relative overflow-hidden rounded-[2.6rem] border border-navred/25 bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,0.24),transparent_19rem),linear-gradient(145deg,rgba(88,28,135,0.32),rgba(20,10,32,0.92))] p-5 shadow-premium sm:p-7"
      data-section="hero-visual"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0_22%,rgba(168,85,247,0.18)_22.2%_22.45%,transparent_22.7%_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navred/30 blur-3xl" aria-hidden="true" />

      <div className="relative grid gap-5">
        <div className="mx-auto rounded-full border border-navred/35 bg-black/28 px-5 py-2 text-center text-base font-black text-glowred shadow-[0_0_28px_rgba(216,180,254,0.18)]">
          תשתית דיגיטלית ישראלית עם שכבת ביצוע חכמה
        </div>

        <div className="relative mx-auto h-72 w-full max-w-[35rem] sm:h-[27rem]">
          <div className="absolute left-[12%] top-[20%] h-px w-2/3 rotate-[-16deg] bg-gradient-to-l from-transparent via-glowred/70 to-transparent shadow-[0_0_24px_rgba(216,180,254,0.65)]" aria-hidden="true" />
          <div className="absolute bottom-[24%] right-[8%] h-px w-3/4 rotate-[22deg] bg-gradient-to-l from-transparent via-navred/80 to-transparent shadow-[0_0_24px_rgba(168,85,247,0.65)]" aria-hidden="true" />
          <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-l from-transparent via-purple-400/45 to-transparent" aria-hidden="true" />
          <img
            alt="מגן דוד טכנולוגי סגול וזוהר"
            className="glow-asset relative h-full w-full object-contain drop-shadow-[0_0_58px_rgba(216,180,254,0.72)]"
            src="/visuals/navines-purple-tech-star.png"
          />
          <span className="absolute left-[18%] top-[26%] h-1.5 w-1.5 rounded-full bg-navred shadow-[0_0_22px_rgba(168,85,247,0.95)]" aria-hidden="true" />
          <span className="absolute right-[17%] top-[36%] h-1.5 w-1.5 rounded-full bg-glowred shadow-[0_0_26px_rgba(216,180,254,0.85)]" aria-hidden="true" />
          <span className="absolute bottom-[20%] left-[44%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_28px_rgba(192,132,252,0.9)]" aria-hidden="true" />
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
