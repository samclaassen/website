import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PIECES } from "@/lib/pieces";
import { PRICE_CHECKED } from "@/data/pieces";

const UPDATED = new Date(PRICE_CHECKED);

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: UPDATED,
    changeFrequency,
    priority,
  });

  // /care and /journal are "coming soon" pages (noindex) and stay out of the sitemap.
  return [
    page("", 1, "weekly"),
    page("/pieces", 0.9, "weekly"),
    page("/standard", 0.9),
    page("/gifts", 0.7),
    page("/makers", 0.6),
    page("/about", 0.5),
    page("/credits", 0.3),
    ...PIECES.map((p) => page(`/pieces/${p.slug}`, 0.8)),
  ];
}
