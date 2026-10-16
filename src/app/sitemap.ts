import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllCollectionSlugs } from "@/lib/collections";
import { ELEMENTS, ENTRIES, STYLES, comboPages } from "@/lib/details";
import { ARTICLES } from "@/data/journal";

const UPDATED = new Date("2026-10-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: UPDATED,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/library", 0.9, "weekly"),
    page("/styles", 0.9, "weekly"),
    page("/elements", 0.9, "weekly"),
    page("/journal", 0.8, "weekly"),
    ...ARTICLES.map((a) => page(`/journal/${a.slug}`, 0.8)),
    page("/colorado", 0.6),
    page("/about", 0.6),
    page("/collections", 0.6),
    ...getAllCollectionSlugs().map((slug) => page(`/collections/${slug}`, 0.5)),
    ...STYLES.map((s) => page(`/styles/${s.slug}`, 0.8, "weekly")),
    ...ELEMENTS.map((e) => page(`/elements/${e.slug}`, 0.8, "weekly")),
    // Only style × element pages with enough entries are indexable.
    ...comboPages()
      .filter((c) => c.indexable)
      .map((c) => page(`/styles/${c.style}/${c.element}`, 0.7)),
    ...ENTRIES.map((e) => page(`/library/${e.slug}`, 0.6)),
  ];
}
