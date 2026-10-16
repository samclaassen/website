import Link from "next/link";
import { EntryImage } from "./EntryImage";
import { getElement, getStyle, type Entry } from "@/lib/details";

interface Props {
  entry: Entry;
  showStyle?: boolean;
  showElement?: boolean;
  /** "natural" keeps the photograph's own proportions (for masonry galleries) */
  aspect?: "natural" | "landscape" | "portrait" | "square";
  sizes?: string;
}

const ASPECT: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

/** A quiet library entry: image first, then title and classification. */
export function EntryCard({ entry, showStyle = true, showElement = true, aspect = "landscape", sizes }: Props) {
  const style = getStyle(entry.style);
  const element = getElement(entry.element);
  const meta = [showElement ? element?.name : null, showStyle ? style?.name : null].filter(Boolean).join(" · ");
  const natural = aspect === "natural" && entry.image.local && entry.image.width && entry.image.height;
  const sz = sizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";
  return (
    <Link href={`/library/${entry.slug}`} className="group block">
      {natural ? (
        <div className="overflow-hidden bg-cream-dark mb-3.5">
          <EntryImage image={entry.image} sizes={sz} className="img-quiet w-full h-auto" />
        </div>
      ) : (
        <div className={`relative ${ASPECT[aspect === "natural" ? "portrait" : aspect]} overflow-hidden bg-cream-dark mb-3.5`}>
          <EntryImage image={entry.image} fill sizes={sz} className="img-quiet object-cover" />
        </div>
      )}
      <h3 className="font-serif text-[19px] leading-[1.25] text-stone group-hover:text-stone-light transition-colors">{entry.title}</h3>
      {meta && <p className="mt-1.5 text-[12.5px] text-light">{meta}</p>}
    </Link>
  );
}

/** Uniform grid for short, related lists. */
export function EntryGrid({ entries, showStyle = true, showElement = true }: { entries: Entry[]; showStyle?: boolean; showElement?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      {entries.map((e) => (
        <EntryCard key={e.slug} entry={e} showStyle={showStyle} showElement={showElement} />
      ))}
    </div>
  );
}

/** Image-dominant masonry gallery that respects each photograph's proportions. */
export function EntryMasonry({ entries, showStyle = true, showElement = true, columns = 4 }: { entries: Entry[]; showStyle?: boolean; showElement?: boolean; columns?: 3 | 4 }) {
  const cols = columns === 3 ? "sm:columns-2 lg:columns-3" : "sm:columns-2 lg:columns-3 xl:columns-4";
  return (
    <div className={`columns-1 ${cols} gap-6 [column-fill:_balance]`}>
      {entries.map((e) => (
        <div key={e.slug} className="break-inside-avoid mb-10">
          <EntryCard entry={e} showStyle={showStyle} showElement={showElement} aspect="natural" />
        </div>
      ))}
    </div>
  );
}
