import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllCollectionSlugs } from "@/lib/collections";
import { OBJECTS } from "@/lib/objects";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-10-13T00:00:00Z");
  return [
    ...["", "/about", "/collections"].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: updated, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 })),
    ...getAllCollectionSlugs().map((slug) => ({ url: `${SITE_URL}/collections/${slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...OBJECTS.map((object) => ({ url: `${SITE_URL}/objects/${object.id}`, lastModified: new Date(`${object.checkedOn}T00:00:00Z`), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
