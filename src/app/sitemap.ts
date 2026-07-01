import type { MetadataRoute } from "next";
import { solutionPages } from "@/data/solutions";
import { blogPosts, courseTracks, services, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/courses", "/solutions", "/optimization-hub", "/products", "/tools", "/games", "/blog", "/contact", "/privacy", "/terms", "/accessibility"];
  const servicePages = services.map((service) => `/services/${service.slug}`);
  const coursePages = courseTracks.map((course) => `/courses/${course.slug}`);
  const solutionPagePaths = solutionPages.map((solution) => `/solutions/${solution.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...servicePages, ...coursePages, ...solutionPagePaths, ...blogPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-06-23"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
