import Link from "next/link";
import type { Piece } from "@/lib/piece-types";
import { MATERIAL_LABEL } from "@/lib/piece-types";
import { PieceVisual } from "@/components/media/PieceVisual";
import { MaterialMotif } from "@/components/media/MaterialMotif";

/** Grid card: visual, serif name, italic "why it lasts" line, material tag. No prices. */
export function PieceCard({ piece, priority = false }: { piece: Piece; priority?: boolean }) {
  return (
    <article className="group">
      <Link href={`/pieces/${piece.slug}`} className="block">
        <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
          <PieceVisual piece={piece} priority={priority} />
        </div>
        <h3 className="display text-[24px] leading-[1.15] mt-4 group-hover:text-terracotta transition-colors">
          {piece.name}
        </h3>
        <p className="lab mt-1 text-umber/80">{piece.maker}</p>
        <p className="italic text-[16px] leading-snug text-caption mt-2">{piece.line}</p>
        <span className="lab inline-block mt-3">{MATERIAL_LABEL[piece.materialFamily]}</span>
      </Link>
    </article>
  );
}

/** Compact row used on small screens for long lists. */
export function PieceRow({ piece }: { piece: Piece }) {
  const material = piece.checks.solid.badge ?? piece.material;
  return (
    <article className="group border-b border-line py-5">
      <Link href={`/pieces/${piece.slug}`} className="grid grid-cols-[104px_1fr] gap-5 items-start">
        <div className="card-texture aspect-[4/5] flex flex-col items-center justify-center p-3 text-center" aria-hidden="true">
          {piece.photo ? null : <MaterialMotif family={piece.materialFamily} className="w-[44px] text-terracotta" />}
          <span className="display text-[13px] leading-tight mt-2">{material}</span>
        </div>
        <div>
          <h3 className="display text-[22px] leading-[1.15] group-hover:text-terracotta transition-colors">{piece.name}</h3>
          <p className="lab mt-1 text-umber/80">{piece.maker}</p>
          <p className="italic text-[15.5px] leading-snug text-caption mt-2">{piece.line}</p>
          <span className="lab inline-block mt-2">{MATERIAL_LABEL[piece.materialFamily]}</span>
        </div>
      </Link>
    </article>
  );
}

/** Card grid on tablet and up; compact rows on phones. */
export function PieceList({ pieces }: { pieces: Piece[] }) {
  return (
    <>
      <div className="sm:hidden border-t border-line">
        {pieces.map((p) => (
          <PieceRow key={p.slug} piece={p} />
        ))}
      </div>
      <div className="hidden sm:block">
        <PieceGrid pieces={pieces} />
      </div>
    </>
  );
}

export function PieceGrid({ pieces }: { pieces: Piece[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
      {pieces.map((p, i) => (
        <PieceCard key={p.slug} piece={p} priority={i < 3} />
      ))}
    </div>
  );
}
