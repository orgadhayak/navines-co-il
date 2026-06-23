const signals = ["בינה מלאכותית", "אוטומציה", "אתרים", "איקומרס", "אבטחה", "ביצועים"];

export function HeroVisual() {
  return (
    <div
      className="star-stage hero-star-field relative overflow-hidden rounded-[2.6rem] border border-purple-300/20 bg-[radial-gradient(circle_at_50%_42%,rgba(168,85,247,0.14),transparent_15rem),linear-gradient(145deg,rgba(5,5,8,0.98),rgba(0,0,0,0.96))] p-5 shadow-premium sm:p-7"
      data-section="hero-visual"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0_22%,rgba(216,180,254,0.08)_22.2%_22.45%,transparent_22.7%_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/12 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 grid gap-5">
        <div className="mx-auto rounded-full border border-purple-300/25 bg-black/42 px-5 py-2 text-center text-base font-black text-glowred shadow-[0_0_28px_rgba(216,180,254,0.16)]">
          תשתית דיגיטלית ישראלית עם שכבת ביצוע חכמה
        </div>

        <div className="relative mx-auto h-72 w-full max-w-[35rem] sm:h-[27rem]">
          <div className="absolute left-[12%] top-[20%] h-px w-2/3 rotate-[-16deg] bg-gradient-to-l from-transparent via-glowred/62 to-transparent shadow-[0_0_24px_rgba(216,180,254,0.42)]" aria-hidden="true" />
          <div className="absolute bottom-[24%] right-[8%] h-px w-3/4 rotate-[22deg] bg-gradient-to-l from-transparent via-purple-500/62 to-transparent shadow-[0_0_24px_rgba(168,85,247,0.42)]" aria-hidden="true" />
          <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-l from-transparent via-purple-300/36 to-transparent" aria-hidden="true" />
          <div className="absolute left-[18%] top-[64%] h-px w-1/2 rotate-[-34deg] bg-gradient-to-l from-transparent via-fuchsia-300/30 to-transparent" aria-hidden="true" />
          <div className="absolute right-[15%] top-[28%] h-px w-2/5 rotate-[38deg] bg-gradient-to-l from-transparent via-purple-200/24 to-transparent" aria-hidden="true" />
          <img
            alt="מגן דוד טכנולוגי סגול וזוהר"
            className="glow-asset relative h-full w-full object-contain drop-shadow-[0_0_48px_rgba(216,180,254,0.58)]"
            src="/visuals/navines-purple-tech-star.png"
          />
          <span className="absolute left-[18%] top-[26%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_22px_rgba(168,85,247,0.86)]" aria-hidden="true" />
          <span className="absolute right-[17%] top-[36%] h-1.5 w-1.5 rounded-full bg-glowred shadow-[0_0_26px_rgba(216,180,254,0.78)]" aria-hidden="true" />
          <span className="absolute bottom-[20%] left-[44%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_28px_rgba(192,132,252,0.9)]" aria-hidden="true" />
          <span className="absolute bottom-[30%] right-[28%] h-1 w-1 rounded-full bg-purple-200 shadow-[0_0_22px_rgba(233,213,255,0.72)]" aria-hidden="true" />
          <span className="absolute left-[32%] top-[14%] h-1 w-1 rounded-full bg-fuchsia-200 shadow-[0_0_20px_rgba(216,180,254,0.7)]" aria-hidden="true" />
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
