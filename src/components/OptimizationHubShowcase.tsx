import Link from "next/link";
import { optimizationHub, site } from "@/data/site";

export function OptimizationHubShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid ${compact ? "gap-3" : "gap-4"}`}>
      {optimizationHub.map((group) => (
        <details className="optimization-disclosure" key={group.title}>
          <summary className="optimization-summary">
            <span className="min-w-0">
              <span className="block text-2xl font-semibold leading-tight">{group.title}</span>
              <span className="mt-1 block text-base leading-7" style={{ color: "var(--text-muted)" }}>{group.intro}</span>
            </span>
            <span aria-hidden="true" className="optimization-disclosure-state"><span>הצג</span><span>הסתר</span></span>
          </summary>
          <div className="optimization-disclosure-panel">
            {group.items.map((item) => (
              <Link
                className="optimization-row"
                href={item.href}
                key={item.title}
              >
                <span className="block text-xl font-semibold">{item.title}</span>
                <span className="mt-3 grid gap-4 text-sm leading-6 md:grid-cols-3" style={{ color: "var(--text-muted)" }}>
                  <span>
                    <strong className="block">מה זה</strong>
                    {item.description}
                  </span>
                  <span>
                    <strong className="block">מה זה פותר</strong>
                    {item.problem}
                  </span>
                  <span>
                    <strong className="block">למה זה חשוב</strong>
                    {item.why}
                  </span>
                </span>
              </Link>
            ))}
            <a className="btn-primary mt-5" href={site.whatsappHref}>
              רוצים שנבדוק מה אפשר לשפר אצלכם?
            </a>
          </div>
        </details>
      ))}
    </div>
  );
}
