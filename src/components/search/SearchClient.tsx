"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { EntryImage } from "@/components/details/EntryImage";
import type { EntryImage as EntryImageType } from "@/lib/details";

export interface SearchItem {
  slug: string;
  title: string;
  style: string;
  styleName: string;
  element: string;
  elementName: string;
  tier: string;
  text: string;
  image: EntryImageType;
}

interface Option {
  slug: string;
  name: string;
}

interface Props {
  styles: Option[];
  elements: Option[];
}

const TIERS = [
  { slug: "essential", name: "Essential" },
  { slug: "signature", name: "Signature" },
  { slug: "heirloom", name: "Heirloom" },
];

function normalize(s: string) {
  return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");
}

export function SearchClient({ styles, elements }: Props) {
  const [items, setItems] = useState<SearchItem[] | null>(null);
  const [q, setQ] = useState("");
  const [style, setStyle] = useState("");
  const [element, setElement] = useState("");
  const [tier, setTier] = useState("");
  const [ready, setReady] = useState(false);

  // Read initial state from the URL once on mount.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect */
    setQ(p.get("q") ?? "");
    setStyle(p.get("style") ?? "");
    setElement(p.get("element") ?? "");
    setTier(p.get("tier") ?? "");
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data: SearchItem[]) => setItems(data))
      .catch(() => setItems([]));
  }, []);

  // Keep the URL in sync so searches can be shared.
  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (style) p.set("style", style);
    if (element) p.set("element", element);
    if (tier) p.set("tier", tier);
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `/search?${qs}` : "/search");
  }, [q, style, element, tier, ready]);

  const results = useMemo(() => {
    const terms = normalize(q).split(/\s+/).filter(Boolean);
    return (items ?? [])
      .filter((it) => (!style || it.style === style) && (!element || it.element === element) && (!tier || it.tier === tier))
      .map((it) => {
        if (terms.length === 0) return { it, score: 1 };
        const title = normalize(it.title);
        const text = it.text;
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
  }, [items, q, style, element, tier]);

  const clear = () => {
    setQ("");
    setStyle("");
    setElement("");
    setTier("");
  };

  const selectClass =
    "w-full bg-cream border border-border px-3 py-3 text-[14px] text-stone focus:border-stone focus:outline-none";

  return (
    <div>
      <form
        role="search"
        className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="md:col-span-5">
          <span className="sr-only">Search details</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “linenfold”, “inglenook”, “copper hood”, “Denver”…"
            className="w-full bg-white border border-border px-4 py-3 text-[15px] text-stone placeholder:text-light focus:border-stone focus:outline-none"
          />
        </label>
        <label className="md:col-span-3">
          <span className="sr-only">Style</span>
          <select value={style} onChange={(e) => setStyle(e.target.value)} className={selectClass}>
            <option value="">All styles</option>
            {styles.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="md:col-span-2">
          <span className="sr-only">Element</span>
          <select value={element} onChange={(e) => setElement(e.target.value)} className={selectClass}>
            <option value="">All elements</option>
            {elements.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="md:col-span-2">
          <span className="sr-only">Tier</span>
          <select value={tier} onChange={(e) => setTier(e.target.value)} className={selectClass}>
            <option value="">All tiers</option>
            {TIERS.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </label>
      </form>

      <div className="flex items-center justify-between mb-10 text-[13px] text-muted">
        <p aria-live="polite">
          {items === null ? "Loading the archive…" : `${results.length} ${results.length === 1 ? "result" : "results"}`}
        </p>
        {(q || style || element || tier) && (
          <button type="button" onClick={clear} className="underline hover:text-stone">
            Clear search
          </button>
        )}
      </div>

      {items === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-cream-dark animate-pulse" />
          ))}
        </div>
      ) : results.length === 0 ? (
        <div className="border border-border p-10 text-center">
          <p className="font-serif text-2xl text-stone mb-3">No matches yet</p>
          <p className="text-muted mb-6">Try a broader term, or tell us what you are looking for and we can design it.</p>
          <Link href="/request" className="cta-button text-stone">Describe your project <span aria-hidden="true">→</span></Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {results.map((e) => (
            <Link key={e.slug} href={`/details/${e.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark mb-4">
                <EntryImage
                  image={e.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="text-[12px] text-muted mb-1">{e.styleName} · {e.elementName}</p>
              <h2 className="font-serif text-lg font-semibold leading-snug text-stone group-hover:text-muted transition-colors">
                {e.title}
              </h2>
              <p className="mt-1 text-[12px] tracking-[0.08em] uppercase text-bark">{e.tier}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
