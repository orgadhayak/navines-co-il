import type { MetadataRoute } from "next";
import { solutionPages } from "@/data/solutions";
import { blogPosts, courseTracks, services, site } from "@/data/site";
import { localizedArticlePaths, publicLocales } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/courses", "/solutions", "/optimization-hub", "/products", "/products/amazoniq", "/tools", "/games", "/blog", "/contact", "/privacy", "/terms", "/accessibility"];
  const localizedLandingPages = publicLocales.map((locale) => `/${locale}`);
  const localizedArticlePages = publicLocales.map((locale) => localizedArticlePaths[locale]);
  const servicePages = services.map((service) => `/services/${service.slug}`);
  const coursePages = courseTracks.map((course) => `/courses/${course.slug}`);
  const solutionPagePaths = solutionPages.map((solution) => `/solutions/${solution.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...localizedLandingPages, ...localizedArticlePages, ...servicePages, ...coursePages, ...solutionPagePaths, ...blogPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
