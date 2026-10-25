import type { ReactNode } from "react";
import type { Comparison } from "@/data/lists/types";
import { Inline } from "@/components/guides/Inline";
import { fullName } from "@/lib/pieces";
import { FIELD_LABEL, NOT_VERIFIED, comparisonPieces, fieldValue } from "@/lib/lists";
import { PRICE_CHECKED_DISPLAY } from "@/data/pieces";

interface Entity {
  key: string;
  name: ReactNode;
  values: string[];
}

interface Grid {
  /** What each entity is, for the first header cell, e.g. "Maker". */
  entityLabel: string;
  attrs: string[];
  entities: Entity[];
  /** Show entities as columns on wide screens (a head-to-head). */
  columns: boolean;
}

function toGrid(c: Comparison): Grid {
  if (c.kind === "table") {
    return {
      entityLabel: c.columns[0],
      attrs: c.columns.slice(1),
      entities: c.rows.map(([name, ...values]) => ({ key: name, name: <Inline text={name} />, values })),
      columns: false,
    };
  }
  const pieces = comparisonPieces(c);
  const name = (slug: string, label: string) => (
    <a href={`#${slug}`} className="hover:text-terracotta transition-colors">
      {label}
    </a>
  );
  if (c.kind === "versus") {
    return {
      entityLabel: "",
      attrs: [...c.fields.map((f) => FIELD_LABEL[f]), ...c.rows.map((r) => r.label)],
      entities: pieces.map((p, i) => ({
        key: p.id,
        name: name(p.slug, fullName(p)),
        values: [...c.fields.map((f) => fieldValue(p, f)), ...c.rows.map((r) => r.values[i] ?? "")],
      })),
      columns: true,
    };
  }
  return {
    entityLabel: "Piece",
    attrs: c.fields.map((f) => FIELD_LABEL[f]),
    entities: pieces.map((p) => ({ key: p.id, name: name(p.slug, fullName(p)), values: c.fields.map((f) => fieldValue(p, f)) })),
    columns: false,
  };
}

function Cell({ value }: { value: string }) {
  if (value === NOT_VERIFIED) return <span className="italic text-caption">{value}</span>;
  return <Inline text={value} />;
}

/**
 * A comparison as a table on wide screens and as one block per piece or maker on phones,
 * so nothing has to scroll sideways.
 */
export function ComparisonTable({ comparison: c }: { comparison: Comparison }) {
  const g = toGrid(c);
  const verdict = c.kind === "table" ? c.note : c.verdict;
  const hasPrice = c.kind !== "table" && c.fields.includes("price");
  const th = "lab text-umber text-left align-bottom font-medium py-3 pr-5";
  const td = "py-3 pr-5 align-top border-t border-line";

  return (
    <section id={c.id} aria-labelledby={`${c.id}-heading`} className="scroll-mt-8">
      <h2 id={`${c.id}-heading`} className="display text-[32px] sm:text-[36px] leading-tight text-balance">
        {c.heading}
      </h2>
      <p className="mt-3 text-[18px] leading-[1.6] text-caption max-w-[62ch]">
        <Inline text={c.intro} />
      </p>

      {/* Phones: one block per piece or maker. */}
      <div className="sm:hidden mt-6 border-t border-line">
        {g.entities.map((e) => (
          <div key={e.key} className="py-5 border-b border-line">
            <p className="display text-[22px] leading-tight">{e.name}</p>
            <dl className="mt-3 space-y-2 text-[15.5px]">
              {g.attrs.map((a, i) => (
                <div key={a} className="grid grid-cols-[110px_1fr] gap-3">
                  <dt className="lab pt-[3px]">{a}</dt>
                  <dd>
                    <Cell value={e.values[i]} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Wider screens: a table. */}
      <div className="hidden sm:block mt-8">
        <table className="w-full border-collapse text-[15.5px] leading-snug">
          {g.columns ? (
            <>
              <thead>
                <tr>
                  <td className="py-3 pr-5 w-[22%]" />
                  {g.entities.map((e) => (
                    <th key={e.key} scope="col" className="display text-[21px] leading-tight text-left align-bottom font-normal py-3 pr-5">
                      {e.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {g.attrs.map((a, i) => (
                  <tr key={a}>
                    <th scope="row" className={`${td} lab text-left font-medium pt-[15px]`}>
                      {a}
                    </th>
                    {g.entities.map((e) => (
                      <td key={e.key} className={td}>
                        <Cell value={e.values[i]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <>
              <thead>
                <tr>
                  <th scope="col" className={th}>
                    {g.entityLabel}
                  </th>
                  {g.attrs.map((a) => (
                    <th key={a} scope="col" className={th}>
                      {a}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {g.entities.map((e) => (
                  <tr key={e.key}>
                    <th scope="row" className={`${td} text-left font-normal display text-[19px] leading-tight`}>
                      {e.name}
                    </th>
                    {e.values.map((v, i) => (
                      <td key={g.attrs[i]} className={td}>
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>

      {hasPrice && (
        <p className="mt-3 text-[13.5px] text-caption font-label">Prices as listed on {PRICE_CHECKED_DISPLAY}.</p>
      )}

      {verdict && (
        <p className={`mt-6 leading-[1.6] max-w-[62ch] ${c.kind === "table" ? "text-[15px] text-caption font-label" : "text-[18px]"}`}>
          <Inline text={verdict} />
        </p>
      )}
    </section>
  );
}
