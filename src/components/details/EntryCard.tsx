import Link from "next/link";
import { EntryImage } from "./EntryImage";
import { getElement, getStyle, TIER_LABEL, type Entry } from "@/lib/details";

interface Props {
  entry: Entry;
  showStyle?: boolean;
  showElement?: boolean;
}

export function EntryCard({ entry, showStyle = true, showElement = true }: Props) {
  const style = getStyle(entry.style);
  const element = getElement(entry.element);
  const meta = [showStyle ? style?.name : null, showElement ? element?.name : null].filter(Boolean).join(" · ");
  return (
    <Link href={`/details/${entry.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark mb-4">
        <EntryImage
          image={entry.image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      {meta && <p className="text-[12px] text-muted mb-1">{meta}</p>}
      <h3 className="font-serif text-lg font-semibold leading-snug text-stone group-hover:text-muted transition-colors">
        {entry.title}
      </h3>
      <p className="mt-1 text-[12px] tracking-[0.08em] uppercase text-bark">{TIER_LABEL[entry.tier]}</p>
    </Link>
  );
}

export function EntryGrid({ entries, showStyle = true, showElement = true }: { entries: Entry[]; showStyle?: boolean; showElement?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
      {entries.map((e) => (
        <EntryCard key={e.slug} entry={e} showStyle={showStyle} showElement={showElement} />
      ))}
    </div>
  );
}
