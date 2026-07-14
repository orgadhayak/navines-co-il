import Link from "next/link";
import { optimizationHub, site } from "@/data/site";

export function OptimizationHubShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid ${compact ? "gap-3" : "gap-4"}`}>
      {optimizationHub.map((group) => (
        <details
          className="command-glass group overflow-hidden rounded-[1.35rem]"
          key={group.title}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3.5 transition hover:bg-purple-500/[0.08]">
            <span>
              <span className="block text-[1.55rem] font-semibold leading-tight text-white">{group.title}</span>
              <span className="mt-1 block text-base leading-7 text-zinc-400">{group.intro}</span>
            </span>
            <span className="accordion-toggle grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-purple-300/20 bg-transparent text-glowred transition-transform duration-200 group-open:rotate-180">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 20 20">
                <path d="M5 7.5 10 12l5-4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </span>
          </summary>
          <div className="grid gap-2 border-t border-white/10 p-4">
            {group.items.map((item) => (
              <Link
                className="dashboard-row rounded-[1.05rem] p-3.5 transition"
                href={item.href}
                key={item.title}
              >
                <span className="block text-xl font-semibold text-white">{item.title}</span>
                <span className="mt-3 grid gap-3 text-sm leading-6 text-zinc-300 md:grid-cols-3">
                  <span>
                    <strong className="block text-silver">מה זה</strong>
                    {item.description}
                  </span>
                  <span>
                    <strong className="block text-silver">מה זה פותר</strong>
                    {item.problem}
                  </span>
                  <span>
                    <strong className="block text-silver">למה זה חשוב</strong>
                    {item.why}
                  </span>
                </span>
              </Link>
            ))}
            <a className="mt-2 inline-flex w-fit rounded-full border border-purple-300/25 bg-purple-500/12 px-5 py-2 text-base font-semibold text-white transition hover:bg-purple-500/20" href={site.whatsappHref}>
              רוצים שנבדוק מה אפשר לשפר אצלכם?
            </a>
          </div>
        </details>
      ))}
    </div>
  );
}
