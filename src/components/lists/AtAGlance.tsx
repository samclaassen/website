import { fullName } from "@/lib/pieces";
import type { ResolvedSection } from "@/lib/lists";

/** The whole list in one block near the top: place, name, role and price, each linking to its entry. */
export function AtAGlance({ sections, ranked }: { sections: ResolvedSection[]; ranked: boolean }) {
  const grouped = sections.length > 1;
  const ListTag = ranked ? "ol" : "ul";
  return (
    <nav aria-labelledby="glance-heading" className="mt-12">
      <h2 id="glance-heading" className="lab">
        {ranked ? "The ranking at a glance" : "The gifts at a glance"}
      </h2>
      {sections.map((s) => (
        <div key={s.id}>
          {grouped && <p className="lab text-umber mt-6 mb-1">{s.heading}</p>}
          <ListTag className={`border-t border-line ${grouped ? "" : "mt-4"}`}>
            {s.picks.map((pk) => (
              <li key={pk.id} className="border-b border-line">
                <a
                  href={`#${pk.piece.slug}`}
                  className={`group grid gap-3 py-3 items-baseline ${ranked ? "grid-cols-[30px_1fr_auto]" : "grid-cols-[1fr_auto]"}`}
                >
                  {ranked && <span className="display text-[20px] leading-none text-terracotta">{pk.rank}</span>}
                  <span>
                    <span className="text-[17px] group-hover:text-terracotta transition-colors">{fullName(pk.piece)}</span>
                    <span className="block text-[14px] leading-snug text-caption mt-0.5">{pk.label}</span>
                  </span>
                  <span className="font-label text-[15px] tabular-nums text-right">{pk.piece.price}</span>
                </a>
              </li>
            ))}
          </ListTag>
        </div>
      ))}
    </nav>
  );
}
