const lanes = [
  ["לקוח", "AI", "CRM"],
  ["אתר", "דאטה", "מכירות"],
  ["חנות", "אוטומציה", "דוחות"],
];

export function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-premium border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-5 shadow-premium">
      <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-l from-transparent via-navred/70 to-transparent" />
      <div className="relative grid gap-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black text-glowred">Live Digital Infrastructure</p>
            <h2 className="mt-2 text-2xl font-black text-white">מערכת עסקית מחוברת</h2>
          </div>
          <img alt="סמל NAVINES" className="h-14 w-14 rounded-premium object-cover" src="/brand/navines-symbol.jpg" />
        </div>

        <div className="rounded-premium border border-white/10 bg-black/20 p-4">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-premium border border-navred/50 bg-navred/15 text-center text-sm font-black text-white shadow-glow">
            NAVINES
            <span className="block text-xs text-silver">Core</span>
          </div>
        </div>

        <div className="grid gap-3">
          {lanes.map((lane) => (
            <div className="flex items-center gap-2" key={lane.join("-")}>
              {lane.map((item, index) => (
                <div className="flex min-w-0 flex-1 items-center gap-2" key={item}>
                  <span className="min-w-0 flex-1 rounded-premium border border-white/10 bg-white/[0.045] px-3 py-3 text-center text-sm font-black text-silver">
                    {item}
                  </span>
                  {index < lane.length - 1 && <span className="h-px w-5 bg-navred/70" aria-hidden="true" />}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid gap-2 text-sm text-zinc-400">
          <p>
            פחות עבודה ידנית. יותר שליטה, מדידה ואוטומציה.
          </p>
          <p>
            אתר, נתונים, לקוחות ותפעול שמדברים אחד עם השני.
          </p>
        </div>
      </div>
    </div>
  );
}
