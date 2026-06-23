import Link from "next/link";
import { optimizationHub, site } from "@/data/site";

export function OptimizationHubShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-4">
      {optimizationHub.map((group, index) => (
        <details
          className="group overflow-hidden rounded-[1.6rem] border border-purple-300/14 bg-black/32 shadow-[0_18px_70px_rgba(0,0,0,0.24)]"
          key={group.title}
          open={!compact || index < 2}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition hover:bg-purple-500/[0.08]">
            <span>
              <span className="block text-2xl font-black text-white">{group.title}</span>
              <span className="mt-1 block text-base leading-7 text-zinc-400">{group.intro}</span>
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-purple-300/20 bg-white/[0.04] text-lg font-black text-glowred transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="grid gap-2 border-t border-white/10 p-4">
            {group.items.map((item) => (
              <Link
                className="rounded-[1.1rem] border border-white/10 bg-white/[0.035] p-4 transition hover:border-purple-300/45 hover:bg-purple-500/10"
                href={item.href}
                key={item.title}
              >
                <span className="block text-xl font-black text-white">{item.title}</span>
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
            <a className="mt-2 inline-flex w-fit rounded-full border border-purple-300/25 bg-purple-500/12 px-5 py-2 text-base font-black text-white transition hover:bg-purple-500/20" href={site.whatsappHref}>
              רוצים שנבדוק מה אפשר לשפר אצלכם?
            </a>
          </div>
        </details>
      ))}
    </div>
  );
}
