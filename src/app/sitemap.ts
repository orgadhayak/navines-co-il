import type { MetadataRoute } from "next";
import { solutionPages } from "@/data/solutions";
import { blogPosts, courseTracks, services, site } from "@/data/site";
import { localizedAffiliateArticlePaths, localizedAffiliateServicePaths, localizedArticlePaths, localizedFinancialReviewArticlePaths, localizedFinancialReviewServicePaths, localizedMusicArticlePaths, localizedMusicServicePaths, localizedRobloxArticlePaths, localizedRobloxServicePaths, localizedSafetyToolsArticlePaths, publicLocales } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/courses", "/solutions", "/optimization-hub", "/products", "/products/amazoniq", "/products/navines-noise", "/tools", "/games", "/blog", "/contact", "/privacy", "/terms", "/accessibility"];
  const localizedLandingPages = publicLocales.map((locale) => `/${locale}`);
  const localizedToolsPages = publicLocales.map((locale) => `/${locale}/tools`);
  const localizedArticlePages = publicLocales.map((locale) => localizedArticlePaths[locale]);
  const localizedSafetyToolsArticlePages = publicLocales.map((locale) => localizedSafetyToolsArticlePaths[locale]);
  const localizedAffiliateServicePages = publicLocales.map((locale) => localizedAffiliateServicePaths[locale]);
  const localizedAffiliateArticlePages = publicLocales.map((locale) => localizedAffiliateArticlePaths[locale]);
  const localizedFinancialReviewServicePages = publicLocales.map((locale) => localizedFinancialReviewServicePaths[locale]);
  const localizedFinancialReviewArticlePages = publicLocales.map((locale) => localizedFinancialReviewArticlePaths[locale]);
  const localizedMusicServicePages = publicLocales.map((locale) => localizedMusicServicePaths[locale]);
  const localizedMusicArticlePages = publicLocales.map((locale) => localizedMusicArticlePaths[locale]);
  const localizedRobloxServicePages = publicLocales.map((locale) => localizedRobloxServicePaths[locale]);
  const localizedRobloxArticlePages = publicLocales.map((locale) => localizedRobloxArticlePaths[locale]);
  const servicePages = services.map((service) => `/services/${service.slug}`);
  const coursePages = courseTracks.map((course) => `/courses/${course.slug}`);
  const solutionPagePaths = solutionPages.map((solution) => `/solutions/${solution.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);
  const blogLastModified = new Map(blogPosts.map((post) => [`/blog/${post.slug}`, new Date(post.publishedAt)]));

  return [...staticPages, ...localizedLandingPages, ...localizedToolsPages, ...localizedArticlePages, ...localizedSafetyToolsArticlePages, ...localizedAffiliateServicePages, ...localizedAffiliateArticlePages, ...localizedFinancialReviewServicePages, ...localizedFinancialReviewArticlePages, ...localizedMusicServicePages, ...localizedMusicArticlePages, ...localizedRobloxServicePages, ...localizedRobloxArticlePages, ...servicePages, ...coursePages, ...solutionPagePaths, ...blogPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: blogLastModified.get(path) || new Date(site.lastModified),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
