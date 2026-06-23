const signals = ["AI", "CRM", "אתר", "מכירות", "דאטה", "אוטומציה"];

export function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-premium border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.018))] p-6 shadow-premium">
      <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-navred/10 blur-3xl" aria-hidden="true" />
      <div className="relative grid gap-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-base font-black text-glowred">Live Digital Infrastructure</p>
            <h2 className="mt-2 text-3xl font-black text-white">מערכת עסקית מחוברת</h2>
          </div>
          <img alt="סמל NAVINES" className="h-16 w-16 rounded-full object-cover shadow-glow" src="/brand/navines-symbol.jpg" />
        </div>

        <div className="relative min-h-72">
          <div className="absolute inset-8 rounded-full border border-white/10 bg-black/15" />
          <div className="absolute inset-16 rounded-full border border-navred/30 bg-navred/10 shadow-glow" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-full border border-navred/50 bg-ink px-8 py-6 text-center shadow-glow">
              <strong className="block text-3xl text-white">NAVINES</strong>
              <span className="text-base font-black text-silver">Core</span>
            </div>
          </div>
          {signals.map((item, index) => {
            const positions = [
              "right-2 top-8",
              "left-8 top-10",
              "right-10 bottom-10",
              "left-4 bottom-14",
              "right-1/2 top-1",
              "left-1/2 bottom-1",
            ];
            return (
              <span className={`absolute ${positions[index]} rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-base font-black text-silver backdrop-blur`} key={item}>
                {item}
              </span>
            );
          })}
        </div>

        <div className="grid gap-2 text-lg leading-8 text-zinc-400">
          <p>פחות עבודה ידנית. יותר שליטה, מדידה ואוטומציה.</p>
          <p>אתר, נתונים, לקוחות ותפעול שמדברים אחד עם השני.</p>
        </div>
      </div>
    </div>
  );
}
