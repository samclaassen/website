import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllCollectionSlugs } from "@/lib/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const collectionSlugs = getAllCollectionSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/collections`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const collectionPages: MetadataRoute.Sitemap = collectionSlugs.map((slug) => ({
    url: `${SITE_URL}/collections/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...collectionPages];
}
