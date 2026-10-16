"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { EntryImage } from "@/components/details/EntryImage";
import type { EntryImage as EntryImageType } from "@/lib/details";

/** Light item rendered by the server; full-text search uses /search-index.json on demand. */
export interface LibraryItem {
  slug: string;
  title: string;
  style: string;
  styleName: string;
  element: string;
  elementName: string;
  materials: string[];
  motifs: string[];
  image: EntryImageType;
}

export interface SearchItem {
  slug: string;
  text: string;
}

interface Option {
  slug: string;
  name: string;
  count?: number;
}

interface Props {
  items: LibraryItem[];
  styles: Option[];
  elements: Option[];
  materials: Option[];
  motifs: Option[];
}

const FILTER_KEYS = ["style", "element", "material", "motif"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

function normalize(s: string) {
  return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");
}

export function LibraryClient({ items, styles, elements, materials, motifs }: Props) {
  const [q, setQ] = useState("");
  const [filters, setFilters] = useState<Record<FilterKey, string>>({ style: "", element: "", material: "", motif: "" });
  const [index, setIndex] = useState<Map<string, string> | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  // Read the initial state from the URL so filtered views can be shared.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect */
    setQ(p.get("q") ?? "");
    setFilters({
      style: p.get("style") ?? "",
      element: p.get("element") ?? "",
      material: p.get("material") ?? "",
      motif: p.get("motif") ?? "",
    });
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Load the full-text index only when someone actually searches.
  useEffect(() => {
    if (!q || index) return;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data: SearchItem[]) => setIndex(new Map(data.map((d) => [d.slug, d.text]))))
      .catch(() => setIndex(new Map()));
  }, [q, index]);

  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    for (const k of FILTER_KEYS) if (filters[k]) p.set(k, filters[k]);
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `/library?${qs}` : "/library");
  }, [q, filters, ready]);

  const results = useMemo(() => {
    const terms = normalize(q).split(/\s+/).filter(Boolean);
    return items
      .filter(
        (it) =>
          (!filters.style || it.style === filters.style) &&
          (!filters.element || it.element === filters.element) &&
          (!filters.material || it.materials.includes(filters.material)) &&
          (!filters.motif || it.motifs.includes(filters.motif)),
      )
      .map((it) => {
        if (terms.length === 0) return { it, score: 1 };
        const title = normalize(it.title);
        const text =
          index?.get(it.slug) ??
          normalize([it.title, it.styleName, it.elementName, ...it.materials, ...it.motifs].join(" ").replace(/-/g, " "));
        let score = 0;
        for (const t of terms) {
          if (title.includes(t)) score += 3;
          else if (text.includes(t)) score += 1;
          else return { it, score: 0 };
        }
        return { it, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.it);
  }, [items, q, filters, index]);

  const active = FILTER_KEYS.filter((k) => filters[k]);
  const setFilter = (k: FilterKey, v: string) => setFilters((f) => ({ ...f, [k]: v }));
  const clear = () => {
    setQ("");
    setFilters({ style: "", element: "", material: "", motif: "" });
  };

  const labelFor = (k: FilterKey, v: string) =>
    ({ style: styles, element: elements, material: materials, motif: motifs })[k].find((o) => o.slug === v)?.name ?? v;

  const selectClass =
    "w-full appearance-none bg-surface border border-border px-3.5 py-3 text-[14px] text-stone focus:border-stone focus:outline-none";
  const selects: { key: FilterKey; label: string; options: Option[] }[] = [
    { key: "style", label: "Style", options: styles },
    { key: "element", label: "Category", options: elements },
    { key: "material", label: "Material", options: materials },
    { key: "motif", label: "Motif", options: motifs },
  ];

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="mb-5">
        <div className="flex gap-3">
          <label className="flex-1">
            <span className="sr-only">Search the library</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search doors, paneling, motifs, woods, places…"
              className="w-full bg-surface border border-border-strong px-4 py-3.5 text-[15px] text-stone placeholder:text-light focus:border-stone focus:outline-none"
            />
          </label>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="library-filters"
            className="md:hidden border border-border-strong px-4 text-[14px] text-stone"
          >
            Filters{active.length ? ` (${active.length})` : ""}
          </button>
        </div>
        <div id="library-filters" className={`${open ? "grid" : "hidden"} md:grid grid-cols-2 md:grid-cols-4 gap-3 mt-3`}>
          {selects.map((s) => (
            <label key={s.key}>
              <span className="block text-[11px] tracking-[0.14em] uppercase text-light mb-1.5">{s.label}</span>
              <select value={filters[s.key]} onChange={(e) => setFilter(s.key, e.target.value)} className={selectClass}>
                <option value="">All</option>
                {s.options.map((o) => (
                  <option key={o.slug} value={o.slug}>
                    {o.name}
                    {o.count ? ` (${o.count})` : ""}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </form>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-[13px] text-muted min-h-[28px]">
        <p aria-live="polite">
          {results.length} {results.length === 1 ? "entry" : "entries"}
        </p>
        {active.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setFilter(k, "")}
            className="border border-border px-2.5 py-1 text-stone hover:border-stone"
            aria-label={`Remove filter ${labelFor(k, filters[k])}`}
          >
            {labelFor(k, filters[k])} <span aria-hidden="true">×</span>
          </button>
        ))}
        {(q || active.length > 0) && (
          <button type="button" onClick={clear} className="underline hover:text-stone">
            Clear all
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="border-t border-border pt-12 max-w-xl">
          <p className="font-serif text-[28px] text-stone mb-3">Nothing matches that combination yet</p>
          <p className="text-muted mb-6 leading-[1.7]">
            The library is still growing. Try removing a filter, or browse by{" "}
            <Link href="/styles" className="underline hover:text-stone">style</Link> or by{" "}
            <Link href="/elements" className="underline hover:text-stone">architectural element</Link>.
          </p>
          <button type="button" onClick={clear} className="text-link">
            Show the whole library <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : (
        <div className="columns-1 min-[480px]:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {results.map((e) => (
            <Link key={e.slug} href={`/library/${e.slug}`} className="group block break-inside-avoid mb-10">
              {e.image.local && e.image.width && e.image.height ? (
                <div className="overflow-hidden bg-cream-dark mb-3.5">
                  <EntryImage
                    image={e.image}
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="img-quiet w-full h-auto"
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark mb-3.5">
                  <EntryImage image={e.image} fill className="img-quiet object-cover" />
                </div>
              )}
              <h2 className="font-serif text-[19px] leading-[1.25] text-stone">{e.title}</h2>
              <p className="mt-1.5 text-[12.5px] text-light">
                {e.elementName} · {e.styleName}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
