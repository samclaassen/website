import Link from "next/link";
import type { Piece } from "@/lib/piece-types";
import { MATERIAL_LABEL } from "@/lib/piece-types";
import Image from "next/image";
import { PieceVisual, PieceVisualCaption } from "@/components/media/PieceVisual";
import { productPhoto } from "@/lib/piece-media";
import { MaterialMotif } from "@/components/media/MaterialMotif";

/** Grid card: visual, serif name, italic "why it lasts" line, material tag. No prices. */
export function PieceCard({ piece, priority = false }: { piece: Piece; priority?: boolean }) {
  const href = `/pieces/${piece.slug}`;
  return (
    <article className="group">
      <Link href={href} className="block" tabIndex={-1} aria-hidden="true">
        <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
          <PieceVisual piece={piece} priority={priority} caption={false} />
        </div>
      </Link>
      {/* Only a product photo has a credit; it sits outside the card link so its source link is separate. */}
      <PieceVisualCaption piece={piece} />
      <Link href={href} className="block">
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
  const photo = productPhoto(piece);
  const href = `/pieces/${piece.slug}`;
  return (
    <article className="group border-b border-line py-5">
      <div className="grid grid-cols-[104px_1fr] gap-5 items-start">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
          {photo ? (
            <span className="relative block aspect-[4/5] overflow-hidden bg-card">
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="104px"
                className="object-cover"
                style={photo.focus ? { objectPosition: photo.focus } : undefined}
              />
            </span>
          ) : (
            <span className="card-texture aspect-[4/5] flex flex-col items-center justify-center p-3 text-center">
              <MaterialMotif family={piece.materialFamily} className="w-[44px] text-terracotta" />
              <span className="display text-[13px] leading-tight mt-2">{material}</span>
            </span>
          )}
        </Link>
        <div>
          <Link href={href} className="block">
            <h3 className="display text-[22px] leading-[1.15] group-hover:text-terracotta transition-colors">{piece.name}</h3>
            <p className="lab mt-1 text-umber/80">{piece.maker}</p>
            <p className="italic text-[15.5px] leading-snug text-caption mt-2">{piece.line}</p>
            <span className="lab inline-block mt-2">{MATERIAL_LABEL[piece.materialFamily]}</span>
          </Link>
          <PieceVisualCaption piece={piece} className="mt-2.5" />
        </div>
      </div>
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
