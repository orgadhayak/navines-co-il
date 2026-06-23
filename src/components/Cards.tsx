import Link from "next/link";
import type { BlogPost, Product, Service } from "@/data/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group min-h-72 rounded-premium border border-white/10 bg-white/[0.045] p-5 shadow-premium transition hover:-translate-y-1 hover:border-navred/60">
      <span className="text-4xl font-black text-white/20">{String(index + 1).padStart(2, "0")}</span>
      <p className="mt-4 text-sm font-black text-glowred">{service.eyebrow}</p>
      <h3 className="mt-2 text-2xl font-black text-white">{service.title}</h3>
      <p className="mt-3 leading-7 text-zinc-400">{service.summary}</p>
      <Link className="mt-5 inline-flex rounded-premium border border-white/10 px-4 py-2 text-sm font-black text-zinc-200 group-hover:bg-navred group-hover:text-white" href={`/services/${service.slug}`}>
        לעמוד השירות
      </Link>
    </article>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5 shadow-premium">
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
      <Link className="mt-5 inline-flex rounded-premium border border-white/10 px-4 py-2 text-sm font-black text-zinc-200 hover:bg-navred hover:text-white" href="/contact">
        מעבר לכלי
      </Link>
    </article>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-premium border border-white/10 bg-white/[0.045] p-5 shadow-premium" data-category={post.category} data-tags={post.tags.join(" ")}>
      <div className="mb-5 min-h-36 rounded-premium bg-[linear-gradient(135deg,rgba(225,29,46,0.38),rgba(255,255,255,0.08)),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]" aria-hidden="true" />
      <p className="text-sm font-black text-glowred">{post.category}</p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-white">{post.title}</h2>
      <p className="mt-3 leading-7 text-zinc-400">{post.excerpt}</p>
      <p className="mt-4 text-sm text-zinc-500">{post.date} · NAVINES · {post.readingTime}</p>
      <Link className="mt-5 inline-flex rounded-premium border border-white/10 px-4 py-2 text-sm font-black text-zinc-200 hover:bg-navred hover:text-white" href={`/blog/${post.slug}`}>
        קראו מאמר
      </Link>
    </article>
  );
}
