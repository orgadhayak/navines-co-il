import Link from "next/link";
import { BrandInline } from "@/components/BrandInline";
import type { BlogPost, Product, Service } from "@/data/site";
import { formatBlogDate } from "@/lib/dates";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link className="command-glass group block rounded-[1.45rem] p-5 transition hover:-translate-y-0.5 hover:border-purple-200/45" href={`/services/${service.slug}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-base font-black text-glowred">
          <BrandInline text={service.eyebrow} />
        </p>
        <span className="text-sm font-black text-white/35">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-3 text-2xl font-black text-white">
        <BrandInline text={service.title} />
      </h3>
      <p className="mt-3 text-lg leading-8 text-zinc-400">
        <BrandInline text={service.summary} />
      </p>
      <span className="mt-5 inline-flex rounded-full border border-white/10 px-5 py-2 text-base font-black text-zinc-200 transition group-hover:bg-navred group-hover:text-white">
        לעמוד השירות
      </span>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const ctaLabel = product.cta || "מעבר לכלי";
  const ctaClass = "mt-5 inline-flex min-w-40 justify-center rounded-full border border-purple-200/20 bg-purple-500/10 px-5 py-2 text-base font-black text-zinc-200 transition hover:bg-purple-500/20 hover:text-white";
  const content = (
    <article className="command-glass h-full rounded-[1.45rem] p-5 transition hover:-translate-y-0.5 hover:border-purple-300/50">
      <span className="inline-flex items-center gap-2 rounded-full border border-navred/40 bg-navred/15 px-4 py-1 text-sm font-black text-silver">
        <span className="status-pip bg-purple-200 text-purple-200" />
        {product.status}
      </span>
      <h3 className="mt-4 text-2xl font-black text-white">
        <BrandInline text={product.name} />
      </h3>
      <p className="mt-1 text-lg font-black text-glowred">{product.hebrewName}</p>
      <p className="mt-3 text-lg leading-8 text-zinc-400">
        <BrandInline text={product.description} />
      </p>
      <dl className="mt-5 grid gap-3 text-base">
        <div>
          <dt className="font-black text-silver">למי זה מתאים</dt>
          <dd className="mt-1 text-zinc-400">
            <BrandInline text={product.audience} />
          </dd>
        </div>
        <div>
          <dt className="font-black text-silver">מה זה פותר</dt>
          <dd className="mt-1 text-zinc-400">
            <BrandInline text={product.solves} />
          </dd>
        </div>
      </dl>
      <span className={ctaClass}>{ctaLabel}</span>
    </article>
  );

  if (product.url?.startsWith("/")) {
    return (
      <Link className="block h-full" href={product.url}>
        {content}
      </Link>
    );
  }

  return product.url ? (
    <a className="block h-full" href={product.url} rel="noreferrer" target="_blank">
      {content}
    </a>
  ) : (
    <Link className="block h-full" href="/contact">
      {content}
    </Link>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  const ctaLabel = getBlogCtaLabel(post);

  return (
    <Link className="command-glass group block rounded-[1.25rem] p-4 transition hover:-translate-y-0.5 hover:border-purple-200/45" data-category={post.category} data-tags={post.tags.join(" ")} href={`/blog/${post.slug}`}>
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-black text-zinc-500">
          <span className="text-glowred">
            <BrandInline text={post.category} />
          </span>
          <span>{formatBlogDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-3 text-2xl font-black leading-tight text-white">
          <BrandInline text={post.title} />
        </h3>
        <p className="mt-3 text-base leading-8 text-zinc-400">
          <BrandInline text={post.excerpt} />
        </p>
        {post.englishTitle ? (
          <span className="mt-3 inline-flex rounded-full border border-purple-300/20 bg-purple-500/10 px-3 py-1 text-sm font-black text-silver">
            כולל תקציר באנגלית
          </span>
        ) : null}
        <span className="mt-4 inline-flex min-w-36 justify-center rounded-full border border-white/10 px-4 py-2 text-base font-black text-zinc-200 transition group-hover:bg-purple-500/18 group-hover:text-white">
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}

function getBlogCtaLabel(post: BlogPost) {
  const labels: Record<string, string> = {
    "business-website-999-shekel": "להבין את מסלול 999 ₪",
    "smart-website-lead-engine-quality-leads": "לבניית כלי לגולשים",
    "ai-course-for-kids-from-idea-to-product": "למסלול הילדים",
    "ai-course-for-adults-build-products-with-ai": "למסלול הבוגרים",
    "email-to-chatgpt-talktodata": "לחיבור אימיילים חכם",
    "talk-to-business-data-chatgpt": "לדבר עם הנתונים",
    "business-automation-start": "להבין אוטומציה עסקית",
    "ai-invoice-scanning-and-filtering": "לסריקת חשבוניות עם AI",
    "ecommerce-service-guide": "לבניית חנות איקומרס",
    "mobile-app-service-guide": "לבניית אפליקציה לעסק",
    "accountants-ai-data-automation": "AI לרואי חשבון",
    "amazon-sellers-ai-data-monitoring": "ניהול Amazon חכם",
    "freelancers-ai-automation-systems": "אוטומציה לפרילנסרים",
    "ai-chat-for-business-website": "לבניית צ׳ט AI לאתר",
    "technical-support-cyber-networks-business": "לתמיכה טכנית מהירה",
    "what-to-do-when-account-is-hacked": "לפעולה אחרי פריצה",
    "business-due-diligence-before-buying": "לבדיקה לפני רכישה",
    "how-to-bring-external-traffic-to-amazon-products": "להביא תנועה ל Amazon",
    "multilingual-seo-website-for-amazon-sellers": "לקידום לפי מדינה ושפה",
  };

  if (labels[post.slug]) return labels[post.slug];

  const topic = post.title
    .replace(/[\u2014:\u2013].*$/, "")
    .replace(/^איך\s+/, "")
    .replace(/^למה\s+/, "")
    .trim();

  const shortTopic = topic.length > 28 ? `${topic.slice(0, 28).trim()}...` : topic;
  return `לנושא: ${shortTopic || post.category}`;
}
