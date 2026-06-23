import { site } from "@/data/site";

const layers = [
  "AI SYSTEMS",
  "DIGITAL INFRASTRUCTURE",
  "WEB DEVELOPMENT",
  "AUTOMATION",
  "PERFORMANCE",
];

export function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-premium border border-white/10 bg-[linear-gradient(145deg,rgba(139,92,246,0.16),rgba(255,255,255,0.025))] p-6 shadow-premium">
      <div className="relative grid gap-8">
        <div>
          <p className="text-base font-black text-glowred">
            Inspired by the global{" "}
            <a className="hover:text-white" href={site.internationalUrl} rel="noreferrer" target="_blank">
              NAVINES
            </a>{" "}
            ecosystem
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-white">תשתית דיגיטלית שמחברת רעיון, מערכת וביצוע</h2>
        </div>

        <div className="relative py-8">
          <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-navred to-transparent" aria-hidden="true" />
          <div className="grid gap-4">
            {layers.map((layer, index) => (
              <div className={`rounded-full border border-white/10 bg-white/[0.055] px-6 py-4 shadow-premium ${index % 2 === 0 ? "ml-8" : "mr-8"}`} key={layer}>
                <span className="text-2xl font-black tracking-normal text-white md:text-3xl">{layer}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-full border border-navred/40 bg-navred/[0.12] px-6 py-4 text-lg leading-8 text-silver">
          <a className="font-black text-glowred hover:text-white" href={site.internationalUrl} rel="noreferrer" target="_blank">
            NAVINES
          </a>{" "}
          global technology language, rebuilt here for Israeli businesses with Hebrew RTL, local service and direct execution.
        </div>
      </div>
    </div>
  );
}
