export function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-premium border border-white/10 bg-white/[0.04] p-4 shadow-premium">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="relative grid gap-4">
        <div className="flex items-center justify-between rounded-premium border border-white/10 bg-ink/70 p-4">
          <span className="text-sm font-black text-zinc-300">תשתית דיגיטלית פעילה</span>
          <strong className="text-3xl text-white">99.9%</strong>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["AI", "Web", "Automation", "eCommerce", "Security", "Data"].map((item) => (
            <div className="rounded-premium border border-white/10 bg-white/[0.055] p-4 text-center font-black text-silver" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          {[
            ["סוכן AI", "ניתוב לידים פעיל"],
            ["CRM", "סנכרון פניות"],
            ["אבטחה", "ניטור תקין"],
          ].map(([title, text]) => (
            <div className="flex items-center justify-between rounded-premium border border-white/10 bg-black/20 p-3" key={title}>
              <strong className="text-white">{title}</strong>
              <span className="text-sm text-zinc-400">{text}</span>
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          <span className="h-2 w-10/12 rounded-full bg-gradient-to-l from-navred to-white" />
          <span className="h-2 w-8/12 rounded-full bg-gradient-to-l from-navred to-white" />
          <span className="h-2 w-11/12 rounded-full bg-gradient-to-l from-navred to-white" />
        </div>
      </div>
    </div>
  );
}
