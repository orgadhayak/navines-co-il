import Link from "next/link";
import { BrandInline } from "@/components/BrandInline";
import type { BlogPost, Product, Service } from "@/data/site";
import { formatBlogDate } from "@/lib/dates";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link className="editorial-card group block" href={`/services/${service.slug}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-glowred">
          <BrandInline text={service.eyebrow} />
        </p>
        <span className="editorial-index text-sm font-medium">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-white">
        <BrandInline text={service.title} />
      </h3>
      <p className="mt-3 text-base leading-7 text-zinc-400">
        <BrandInline text={service.summary} />
      </p>
      <span className="editorial-link mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        לעמוד השירות
      </span>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const ctaLabel = product.cta || "מעבר לכלי";
  const ctaClass = "editorial-link mt-5 inline-flex items-center gap-2 text-sm font-semibold";
  const details = (
    <>
      <span className="product-status inline-flex items-center gap-2">
        <span className="status-pip" />
        {product.status}
      </span>
      <h3 className="mt-5 text-2xl font-semibold text-white">
        {product.name}
      </h3>
      <p className="mt-1 text-base font-semibold text-glowred">{product.hebrewName}</p>
      <p className="mt-3 text-base leading-7 text-zinc-400">
        {product.description}
      </p>
      <dl className="mt-6 grid gap-4 border-t pt-5 text-base" style={{ borderColor: "var(--border)" }}>
        <div>
          <dt className="font-semibold text-silver">למי זה מתאים</dt>
          <dd className="mt-1 text-zinc-400">
            {product.audience}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-silver">מה זה פותר</dt>
          <dd className="mt-1 text-zinc-400">
            {product.solves}
          </dd>
        </div>
      </dl>
    </>
  );

  if (product.url?.startsWith("/") && product.externalUrl) {
    return (
      <article className="editorial-card h-full">
        {details}
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className={ctaClass.replace("mt-5 ", "")} href={product.url}>{ctaLabel}</Link>
          <a aria-label={`${product.externalCta || product.name} באתר החיצוני`} className={ctaClass.replace("mt-5 ", "")} href={product.externalUrl} rel="noopener noreferrer" target="_blank">
            {product.externalCta || `לפתוח את ${product.name}`}
          </a>
        </div>
      </article>
    );
  }

  const content = (
    <article className="editorial-card h-full">
      {details}
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
    <a className="block h-full" href={product.url} rel="noopener noreferrer" target="_blank">
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
    <Link className="article-list-item group block" data-category={post.category} data-tags={post.tags.join(" ")} href={`/blog/${post.slug}`}>
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-zinc-500">
          <span className="text-glowred">
            <BrandInline text={post.category} />
          </span>
          <span>{formatBlogDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
          <BrandInline text={post.title} />
        </h3>
        <p className="mt-3 text-base leading-7 text-zinc-400">
          <BrandInline text={post.excerpt} />
        </p>
        {post.englishTitle ? (
          <span className="article-note mt-3 inline-flex">
            כולל תקציר באנגלית
          </span>
        ) : null}
        <span className="editorial-link mt-5 inline-flex items-center gap-2 text-sm font-semibold">
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
    "connect-business-systems-to-chatgpt-israel": "לחיבור המערכות ל־ChatGPT",
    "business-automation-start": "להבין אוטומציה עסקית",
    "ai-invoice-scanning-and-filtering": "לסריקת חשבוניות עם AI",
    "ecommerce-service-guide": "לבניית חנות איקומרס",
    "mobile-app-service-guide": "לבניית אפליקציה לעסק",
    "accountants-ai-data-automation": "AI לרואי חשבון",
    "amazon-sellers-ai-data-monitoring": "ניהול אמזון חכם",
    "amazoniq-amazon-seller-intelligence-dashboard-gpt": "להבין את AmazonIQ",
    "global-brand-b2b-platform-bumpers-case-study": "למדריך ולמקרה הבוחן",
    "freelancers-ai-automation-systems": "אוטומציה לפרילנסרים",
    "ai-chat-for-business-website": "לבניית צ׳ט AI לאתר",
    "technical-support-cyber-networks-business": "לתמיכה טכנית מהירה",
    "what-to-do-when-account-is-hacked": "לפעולה אחרי פריצה",
    "business-due-diligence-before-buying": "לבדיקה לפני רכישה",
    "how-to-bring-external-traffic-to-amazon-products": "להביא תנועה ל אמזון",
    "multilingual-seo-website-for-amazon-sellers": "לקידום לפי מדינה ושפה",
    "how-to-choose-accountant-for-digital-business": "לבחור רואה חשבון נכון",
    "how-to-build-browser-extension-for-business": "לבניית תוסף לדפדפן",
    "vehicle-property-agricultural-appraisal-guide": "למדריך השמאות",
    "affiliate-program-for-existing-website": "לבניית תוכנית שותפים",
    "how-to-review-payments-and-refunds": "לבדיקת חיובים והחזרים",
    "roblox-brand-experience-for-business": "למדריך Roblox למותגים",
    "how-to-distribute-music-spotify-apple-youtube": "למדריך ההפצה למוזיקאים",
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
