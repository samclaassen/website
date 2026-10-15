import entriesData from "@/data/entries.json";
import taxonomyData from "@/data/taxonomy.json";

export type Tier = "essential" | "signature" | "heirloom";

export interface EntryImage {
  src: string;
  local: boolean;
  width?: number;
  height?: number;
  alt: string;
  credit: string;
  license: string;
  licenseUrl?: string;
}

export interface Entry {
  slug: string;
  title: string;
  style: string;
  element: string;
  tier: Tier;
  motifs: string[];
  materials: string[];
  summary: string;
  description: string;
  makeItToday: string;
  dateDisplay: string;
  dateLabel: string;
  maker: string;
  medium: string;
  dimensions: string;
  image: EntryImage;
  source: { name: string; pageUrl: string; originalTitle: string };
  related: string[];
}

export interface Style {
  slug: string;
  name: string;
  era: string;
  summary: string;
  signature_elements: string[];
  signature_motifs: string[];
  signature_materials: string[];
}

export interface Element {
  slug: string;
  name: string;
  custom_status: "orderable" | "reference-only";
}

export const ENTRIES = entriesData as Entry[];
export const STYLES = taxonomyData.styles as Style[];
export const ELEMENTS = taxonomyData.elements as Element[];

/** A style × element page is built when it has at least this many entries. */
export const COMBO_PAGE_MIN = 3;
/** …and indexed by search engines only when it has at least this many. */
export const COMBO_INDEX_MIN = 8;

const bySlug = new Map(ENTRIES.map((e) => [e.slug, e]));

export function getEntry(slug: string) {
  return bySlug.get(slug);
}
export function getStyle(slug: string) {
  return STYLES.find((s) => s.slug === slug);
}
export function getElement(slug: string) {
  return ELEMENTS.find((e) => e.slug === slug);
}
export function entriesForStyle(style: string) {
  return ENTRIES.filter((e) => e.style === style);
}
export function entriesForElement(element: string) {
  return ENTRIES.filter((e) => e.element === element);
}
export function entriesFor(style: string, element: string) {
  return ENTRIES.filter((e) => e.style === style && e.element === element);
}
export function relatedEntries(entry: Entry) {
  return entry.related.map((s) => bySlug.get(s)).filter(Boolean) as Entry[];
}

export function comboPages() {
  const counts = new Map<string, number>();
  for (const e of ENTRIES) {
    const k = `${e.style}|${e.element}`;
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, n]) => n >= COMBO_PAGE_MIN)
    .map(([k, n]) => {
      const [style, element] = k.split("|");
      return { style, element, count: n, indexable: n >= COMBO_INDEX_MIN };
    });
}

export function hasComboPage(style: string, element: string) {
  return entriesFor(style, element).length >= COMBO_PAGE_MIN;
}

/** Pick a representative entry with a locally hosted image. */
export function isCatalogPlate(e: Entry) {
  return e.source.name.includes("Internet Archive");
}

export function coverEntry(list: Entry[]) {
  return (
    list.find((e) => e.image.local && !isCatalogPlate(e) && e.tier === "heirloom") ??
    list.find((e) => e.image.local && !isCatalogPlate(e)) ??
    list.find((e) => e.image.local) ??
    list[0]
  );
}

export function humanize(slug: string) {
  const s = slug.replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const TIER_LABEL: Record<Tier, string> = {
  essential: "Essential",
  signature: "Signature",
  heirloom: "Heirloom",
};

/** Elements can be orderable only when customers can request them today. */
export function isOrderable(element: string) {
  return getElement(element)?.custom_status === "orderable";
}
