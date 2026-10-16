import { ENTRIES, getElement, getStyle, humanize } from "./details";
import type { LibraryItem, SearchItem } from "@/components/library/LibraryClient";

function norm(s: string) {
  return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");
}

/** Full-text index fetched by the library only when a visitor types a search. */
export function buildSearchIndex(): SearchItem[] {
  return ENTRIES.map((e) => {
    const styleName = getStyle(e.style)?.name ?? e.style;
    const elementName = getElement(e.element)?.name ?? e.element;
    const text = norm(
      [e.title, e.summary, e.description, styleName, elementName, e.maker, e.medium, e.dateDisplay, e.source.name, ...e.motifs.map(humanize), ...e.materials.map(humanize)].join(" "),
    );
    return { slug: e.slug, text };
  });
}

/** Light records rendered on the library page itself (crawlable links and images). */
export function buildLibraryItems(): LibraryItem[] {
  return ENTRIES.map((e) => ({
    slug: e.slug,
    title: e.title,
    style: e.style,
    styleName: getStyle(e.style)?.name ?? e.style,
    element: e.element,
    elementName: getElement(e.element)?.name ?? e.element,
    materials: e.materials,
    motifs: e.motifs,
    image: { src: e.image.src, local: e.image.local, width: e.image.width, height: e.image.height, alt: e.image.alt, credit: "", license: "" },
  }));
}
