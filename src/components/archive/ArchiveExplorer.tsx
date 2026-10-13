"use client";

import { useState } from "react";
import Link from "next/link";
import { COLLECTIONS } from "@/lib/collections";
import type { CuratedObject } from "@/lib/objects";
import { ObjectCard } from "./ObjectCard";

export function ArchiveExplorer({ objects, fixedEra }: { objects: CuratedObject[]; fixedEra?: string }) {
  const [query, setQuery] = useState("");
  const [era, setEra] = useState(fixedEra ?? "all");
  const [category, setCategory] = useState("all");
  const [kind, setKind] = useState("all");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filtered = objects.filter((object) =>
    (era === "all" || object.era === era) &&
    (category === "all" || object.category === category) &&
    (kind === "all" || object.kind === kind) &&
    [object.title, object.creator, object.medium, object.type, object.date, COLLECTIONS.find((collection) => collection.slug === object.era)?.era].join(" ").toLocaleLowerCase().includes(normalizedQuery)
  );
  const museumObjects = filtered.filter((object) => object.kind === "museum");
  const listings = filtered.filter((object) => object.kind === "listing");
  const hasFilters = query !== "" || era !== (fixedEra ?? "all") || category !== "all" || kind !== "all";

  function resetFilters() {
    setQuery("");
    setEra(fixedEra ?? "all");
    setCategory("all");
    setKind("all");
  }

  return (
    <section id="archive" className="archive-section shell">
      <div className="section-heading">
        <div><p className="eyebrow">The growing index</p><h2 className="font-serif text-4xl sm:text-5xl">Look a little closer.</h2></div>
        <p className="section-intro">Search by object, maker or material. Museum references and seller listings are kept separate, so you always know what you’re looking at.</p>
      </div>
      <div className="archive-filters">
        <label className="search-field">Search the index<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try brass, Tiffany or a pendant…" /></label>
        {!fixedEra && <label>Era & style<select value={era} onChange={(event) => setEra(event.target.value)}><option value="all">All eras & styles</option>{COLLECTIONS.map((collection) => <option key={collection.slug} value={collection.slug}>{collection.era}</option>)}</select></label>}
        <label>Object type<select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">All objects</option><option>Lighting</option><option>Hardware</option><option>Decorative objects</option></select></label>
        <label>Source<select value={kind} onChange={(event) => setKind(event.target.value)}><option value="all">All sources</option><option value="museum">Museum references</option><option value="listing">Seller listings</option></select></label>
      </div>
      <div className="filter-status"><p role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? "record" : "records"} · {museumObjects.length} photographed references · {listings.length} seller links</p>{hasFilters && <button type="button" onClick={resetFilters}>Clear filters ×</button>}</div>
      {filtered.length === 0 && <div className="empty-state"><h3 className="font-serif text-3xl">Nothing in this drawer yet.</h3><p>Try another material, a broader style, or clear the filters.</p><button type="button" className="cta-button mt-5" onClick={resetFilters}>Clear filters</button></div>}
      {museumObjects.length > 0 && <div><div className="subsection-heading"><h3>Museum references</h3><span>Documented objects · Open-access photographs · Not for sale</span></div><div className="object-grid">{museumObjects.map((object) => <ObjectCard key={object.id} object={object} />)}</div></div>}
      {listings.length > 0 && <div className="seller-section"><div className="subsection-heading"><h3>From the dealers</h3><span>Real listings from the shortlist · Availability may change</span></div><p className="seller-explanation">Open each record for the source, the shortlist price and our selection note. Seller photographs stay on the seller’s site until reuse permission is confirmed—no substitute images.</p><div className="listing-grid">{listings.map((object) => <ObjectCard key={object.id} object={object} />)}</div></div>}
      <p className="archive-footnote">Style groupings are editorial; dates and maker attributions come from the named source. <Link href="/about#method">Read our curation policy ↗</Link></p>
    </section>
  );
}
