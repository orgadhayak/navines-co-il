import { BlogFilter } from "@/components/BlogFilter";
import { Section } from "@/components/Section";
import { blogCategories, blogPosts } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "בלוג",
  description: "מאמרים בעברית על AI, אוטומציה, אתרים, איקומרס, SEO, אבטחה, ביצועים וכלים דיגיטליים לעסקים.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section eyebrow="בלוג" title="מאמרים, תובנות וכלים לעסקים דיגיטליים" titleAs="h1">
      <p className="mb-8 max-w-4xl text-lg leading-8 text-zinc-300">מדריכים, תובנות, ניתוחים ודוגמאות מעשיות על AI, אוטומציה, אתרים, איקומרס, SEO, אבטחה, ביצועים, שיווק וכלים דיגיטליים לעסקים.</p>
      <BlogFilter categories={blogCategories} posts={blogPosts} />
    </Section>
  );
}
