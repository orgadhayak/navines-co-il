import type { MetadataRoute } from "next";
import { blogPosts, services, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/products", "/tools", "/blog", "/contact", "/privacy", "/terms", "/accessibility"];
  const servicePages = services.map((service) => `/services/${service.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...servicePages, ...blogPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-06-23"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
