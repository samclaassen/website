"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Category, MaterialFamily, Piece, Tier } from "@/lib/piece-types";
import { CATEGORY_LABEL, MATERIAL_LABEL, TIER_LABEL, TIER_RANGE } from "@/lib/piece-types";
import { PieceList } from "./PieceCard";

interface Props {
  pieces: Piece[];
  categories: Category[];
  tiers: Tier[];
  materials: MaterialFamily[];
}

type Filters = { category: string; tier: string; material: string; q: string };

function readParams(sp: URLSearchParams | null): Filters {
  return {
    category: sp?.get("category") ?? "",
    tier: sp?.get("tier") ?? "",
    material: sp?.get("material") ?? "",
    q: sp?.get("q") ?? "",
  };
}

function writeUrl(f: Filters) {
  const sp = new URLSearchParams();
  (Object.keys(f) as (keyof Filters)[]).forEach((k) => {
    if (f[k]) sp.set(k, f[k]);
  });
  const qs = sp.toString();
  window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string; hint?: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="lab mb-3">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {[{ value: "", label: "All" }, ...options].map((o) => {
          const on = value === o.value;
          return (
            <button
              key={o.value || "all"}
              type="button"
              aria-pressed={on}
              title={o.hint}
              onClick={() => onChange(o.value)}
              className={`pill transition-colors ${
                on ? "bg-umber text-linen border-umber" : "hover:border-umber"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function PieceBrowser(props: Props) {
  const sp = useSearchParams();
  const [f, setF] = useState<Filters>(() => readParams(sp));
  return <BrowserView {...props} filters={f} setFilters={(next) => { setF(next); writeUrl(next); }} />;
}

/** Server-renderable view (used as the Suspense fallback with no filters applied). */
export function BrowserView({
  pieces,
  categories,
  tiers,
  materials,
  filters,
  setFilters,
}: Props & { filters: Filters; setFilters?: (f: Filters) => void }) {
  const update = (patch: Partial<Filters>) => setFilters?.({ ...filters, ...patch });

  const shown = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return pieces.filter(
      (p) =>
        (!filters.category || p.category === filters.category) &&
        (!filters.tier || p.tier === filters.tier) &&
        (!filters.material || p.materialFamily === filters.material) &&
        (!q ||
          [p.name, p.maker, p.material, p.line, CATEGORY_LABEL[p.category]]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
  }, [pieces, filters]);

  const any = filters.category || filters.tier || filters.material || filters.q;

  return (
    <>
      <div className="border-y border-line py-8 grid gap-8 lg:grid-cols-[1fr_1fr] xl:grid-cols-[auto_auto_1fr]">
        <FilterGroup
          label="Category"
          value={filters.category}
          options={categories.map((c) => ({ value: c, label: CATEGORY_LABEL[c] }))}
          onChange={(v) => update({ category: v })}
        />
        <FilterGroup
          label="Price band"
          value={filters.tier}
          options={tiers.map((t) => ({ value: t, label: TIER_LABEL[t], hint: TIER_RANGE[t] }))}
          onChange={(v) => update({ tier: v })}
        />
        <FilterGroup
          label="Material"
          value={filters.material}
          options={materials.map((m) => ({ value: m, label: MATERIAL_LABEL[m] }))}
          onChange={(v) => update({ material: v })}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 py-6">
        <p className="lab" aria-live="polite">
          {shown.length} {shown.length === 1 ? "piece" : "pieces"}
          {any ? " match" : ""}
        </p>
        <div className="flex items-center gap-4">
          <label className="sr-only" htmlFor="piece-search">Search pieces</label>
          <input
            id="piece-search"
            type="search"
            placeholder="Search by name, maker or material"
            value={filters.q}
            onChange={(e) => update({ q: e.target.value })}
            readOnly={!setFilters}
            className="w-[280px] max-w-full bg-transparent border-b border-line focus:border-umber outline-none py-2 text-[16px] placeholder:text-caption/70"
          />
          {any && setFilters && (
            <button
              type="button"
              onClick={() => setFilters({ category: "", tier: "", material: "", q: "" })}
              className="lab hover:text-terracotta"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {shown.length ? (
        <div className="pt-4">
          <PieceList pieces={shown} />
        </div>
      ) : (
        <p className="py-20 text-center italic text-caption">No pieces match those filters yet.</p>
      )}
    </>
  );
}
