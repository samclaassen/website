import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Dynamic sitemap generation.
 * Add new pages here as they're created.
 * For blog posts or dynamic routes, fetch from your data source.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages — add new pages to this array
  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
