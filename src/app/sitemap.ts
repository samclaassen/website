import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PIECES } from "@/lib/pieces";
import { PRICE_CHECKED } from "@/data/pieces";
import { CARE_GUIDES } from "@/data/guides";
import { BIFL_LISTS, BIFL_PATH, GIFTS_PATH, GIFT_GUIDES, listPath } from "@/lib/lists";

const PIECES_UPDATED = new Date(PRICE_CHECKED);
const GUIDES_UPDATED = new Date(CARE_GUIDES.map((g) => g.updated).sort().at(-1) ?? PRICE_CHECKED);
const latest = (dates: string[]) => new Date(dates.sort().at(-1) ?? PRICE_CHECKED);
const BIFL_UPDATED = latest(BIFL_LISTS.map((l) => l.updated));
const GIFTS_UPDATED = latest(GIFT_GUIDES.map((l) => l.updated));
const SITE_UPDATED = new Date(
  Math.max(PIECES_UPDATED.getTime(), GUIDES_UPDATED.getTime(), BIFL_UPDATED.getTime(), GIFTS_UPDATED.getTime()),
);

type Freq = "weekly" | "monthly";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: Freq = "monthly", lastModified: Date = PIECES_UPDATED) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  // /journal is a "coming soon" page (noindex) and stays out of the sitemap.
  return [
    page("", 1, "weekly", SITE_UPDATED),
    page("/pieces", 0.9, "weekly"),
    page("/standard", 0.9),
    page("/care", 0.9, "weekly", GUIDES_UPDATED),
    ...CARE_GUIDES.map((g) => page(`/care/${g.slug}`, 0.8, "monthly", new Date(g.updated))),
    page(BIFL_PATH, 0.9, "weekly", BIFL_UPDATED),
    ...BIFL_LISTS.map((l) => page(listPath(l), 0.8, "monthly", new Date(l.updated))),
    page(GIFTS_PATH, 0.8, "weekly", GIFTS_UPDATED),
    ...GIFT_GUIDES.map((l) => page(listPath(l), 0.7, "weekly", new Date(l.updated))),
    page("/makers", 0.6),
    page("/about", 0.5),
    page("/credits", 0.3),
    page("/privacy", 0.2, "monthly", new Date("2026-10-24")),
    ...PIECES.map((p) => page(`/pieces/${p.slug}`, 0.8)),
  ];
}
