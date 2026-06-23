import Link from "next/link";
import type { BlogPost, Product, Service } from "@/data/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group rounded-premium border border-white/10 border-r-navred/50 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))] p-5 shadow-premium transition hover:-translate-y-0.5 hover:border-navred/60">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-black text-glowred">{service.eyebrow}</p>
        <span className="text-xs font-black text-white/35">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-3 text-2xl font-black text-white">{service.title}</h3>
      <p className="mt-3 leading-7 text-zinc-400">{service.summary}</p>
      <Link className="mt-5 inline-flex rounded-premium border border-white/10 px-4 py-2 text-sm font-black text-zinc-200 transition group-hover:bg-navred group-hover:text-white" href={`/services/${service.slug}`}>
        לעמוד השירות
      </Link>
    </article>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const ctaLabel = product.cta || "מעבר לכלי";
  const ctaClass = "mt-5 inline-flex rounded-premium border border-white/10 px-4 py-2 text-sm font-black text-zinc-200 transition hover:bg-navred hover:text-white";

  return (
    <article className="rounded-premium border border-white/10 border-r-navred/45 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5 shadow-premium">
      <span className="inline-flex rounded-full border border-navred/40 bg-navred/15 px-3 py-1 text-xs font-black text-silver">{product.status}</span>
      <h3 className="mt-4 text-2xl font-black text-white">{product.name}</h3>
      <p className="mt-3 leading-7 text-zinc-400">{product.description}</p>
      <dl className="mt-5 grid gap-3 text-sm">
        <div>
          <dt className="font-black text-silver">למי זה מתאים</dt>
          <dd className="mt-1 text-zinc-400">{product.audience}</dd>
        </div>
        <div>
          <dt className="font-black text-silver">מה זה פותר</dt>
          <dd className="mt-1 text-zinc-400">{product.solves}</dd>
        </div>
      </dl>
      {product.url ? (
        <a className={ctaClass} href={product.url} rel="noreferrer" target="_blank">
          {ctaLabel}
        </a>
      ) : (
        <Link className={ctaClass} href="/contact">
          {ctaLabel}
        </Link>
      )}
    </article>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-premium border border-white/10 border-r-navred/40 bg-white/[0.035] p-4 shadow-premium transition hover:border-navred/55" data-category={post.category} data-tags={post.tags.join(" ")}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-black text-zinc-500">
        <span className="text-glowred">{post.category}</span>
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-3 text-xl font-black leading-tight text-white">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
      <Link className="mt-4 inline-flex rounded-premium border border-white/10 px-3 py-2 text-sm font-black text-zinc-200 transition hover:bg-navred hover:text-white" href={`/blog/${post.slug}`}>
        קראו מאמר
      </Link>
    </article>
  );
}
