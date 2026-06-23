"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/Cards";
import type { BlogPost } from "@/data/site";

export function BlogFilter({ categories, posts }: { categories: string[]; posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return [...posts]
      .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt))
      .filter((post) => {
        const text = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
        return (!category || post.category === category) && (!normalized || text.includes(normalized));
      });
  }, [category, posts, query]);

  return (
    <div className="grid gap-6">
      <div className="border-b border-white/10 pb-5">
        <input className="form-field" onChange={(event) => setQuery(event.target.value)} placeholder="חיפוש במאמרים" value={query} />
        <div className="mt-4 flex flex-wrap gap-2">
          <button className={`tag ${category === "" ? "tag-active" : ""}`} onClick={() => setCategory("")} type="button">
            הכל
          </button>
          {categories.map((item) => (
            <button className={`tag ${category === item ? "tag-active" : ""}`} key={item} onClick={() => setCategory(item)} type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
