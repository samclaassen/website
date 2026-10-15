import { ENTRIES, getElement, getStyle, humanize } from "./details";
import type { SearchItem } from "@/components/search/SearchClient";

export function buildSearchIndex(): SearchItem[] {
  return ENTRIES.map((e) => {
    const styleName = getStyle(e.style)?.name ?? e.style;
    const elementName = getElement(e.element)?.name ?? e.element;
    const text = [e.title, e.summary, styleName, elementName, e.maker, e.medium, e.dateDisplay, ...e.motifs.map(humanize), ...e.materials.map(humanize)]
      .join(" ")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "");
    return { slug: e.slug, title: e.title, style: e.style, styleName, element: e.element, elementName, tier: e.tier, text, image: e.image };
  });
}
